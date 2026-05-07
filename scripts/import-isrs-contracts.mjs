import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';

const BASE_URL = 'https://smlouvy.gov.cz/vyhledavani';

const defaultParams = {
  contract_id: '',
  version_id: '',
  'publication_date[from]': '',
  'publication_date[to]': '',
  subject_box: '',
  subject_name: '',
  subject_idnum: '',
  subject_address: '',
  party_box: '',
  party_name: '',
  party_idnum: '74638823',
  party_address: '',
  contr_num: '',
  contract_reference_number: '',
  'sign_date[from]': '',
  'sign_date[to]': '',
  contract_descr: '',
  sign_person_name: '',
  'value_no_vat[from]': '',
  'value_no_vat[to]': '',
  'value_vat[from]': '',
  'value_vat[to]': '',
  'value_foreign[from]': '',
  'value_foreign[to]': '',
  foreign_currency: '',
  file_text: '',
  search_type: '1',
  'searchResultList-limit': '500',
  do: 'searchResultList-setLimit',
};

function extractAmount(rawAmount) {
  const normalized = rawAmount.replace(/\s+/g, ' ').trim();
  if (!normalized || /neuvedeno/i.test(normalized)) {
    return null;
  }

  const match = normalized.match(/([0-9\s]+)\s*CZK/i);
  if (!match) {
    return null;
  }

  return Number(match[1].replace(/\s+/g, ''));
}

function extractYear(dateString) {
  const parts = dateString.split('.');
  return Number(parts[2]);
}

async function fetchPage(offset = 0) {
  const params = {
    ...defaultParams,
    'searchResultList-offset': String(offset),
  };

  const cookieFile = path.join(os.tmpdir(), 'isrs-cookie-jar.txt');
  execFileSync('curl', ['-s', '-c', cookieFile, BASE_URL], { encoding: 'utf8' });

  const curlArgs = ['-s', '-b', cookieFile, '--get', BASE_URL];
  for (const [key, value] of Object.entries(params)) {
    curlArgs.push('--data-urlencode', `${key}=${value}`);
  }

  return execFileSync('curl', curlArgs, { encoding: 'utf8' });
}

function parsePage(html) {
  const $ = load(html);
  const rows = [];

  $('.searchResultList tbody.list tr').each((_, tr) => {
    const columns = $(tr).find('td');
    const publishingParty = $(columns[0]).text().trim().replace(/\s+/g, ' ');
    const subject = $(columns[1]).text().trim().replace(/\s+/g, ' ');
    const lastVersionRaw = $(columns[2]).text().trim().toLowerCase();
    const publishedAt = $(columns[3]).text().trim();
    const amountText = $(columns[4]).text().trim().replace(/\s+/g, ' ');
    const counterparty = $(columns[5]).text().trim().replace(/\s+/g, ' ');
    const detailPath = $(columns[6]).find('a').attr('href') || '';

    const idMatch = detailPath.match(/\/smlouva\/(\d+)/);
    if (!idMatch) {
      return;
    }

    rows.push({
      id: Number(idMatch[1]),
      publishingParty,
      subject,
      lastVersion: lastVersionRaw === 'ano' ? true : lastVersionRaw === 'ne' ? false : null,
      publishedAt,
      year: extractYear(publishedAt),
      amountText,
      amountValue: extractAmount(amountText),
      counterparty,
      detailUrl: `https://smlouvy.gov.cz${detailPath.split('?')[0]}`,
    });
  });

  const totalText = $('p.list-total').text();
  const totalMatch = totalText.match(/(\d+)/);
  const total = totalMatch ? Number(totalMatch[1]) : rows.length;

  return { rows, total };
}

function isRelevantRecord(record) {
  return !/^Více smluvních stran$/i.test(record.counterparty);
}

function toTsModule(records) {
  return `export interface ISRSContractRecord {
  id: number;
  publishingParty: string;
  subject: string;
  lastVersion: boolean | null;
  publishedAt: string;
  year: number;
  amountText: string;
  amountValue: number | null;
  counterparty: string;
  detailUrl: string;
}

export const isrsContracts: ISRSContractRecord[] = ${JSON.stringify(records, null, 2)};
`;
}

async function main() {
  const html = await fetchPage(0);
  const parsed = parsePage(html);
  const all = parsed.rows.filter(isRelevantRecord);

  const unique = Array.from(new Map(all.map((item) => [item.id, item])).values())
    .sort((a, b) => {
      const [ad, am, ay] = a.publishedAt.split('.').map(Number);
      const [bd, bm, by] = b.publishedAt.split('.').map(Number);
      const aTime = new Date(ay, am - 1, ad).getTime();
      const bTime = new Date(by, bm - 1, bd).getTime();
      return bTime - aTime;
    });

  const outPath = path.resolve('src/app/data/isrsContracts.ts');
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, toTsModule(unique), 'utf8');

  console.log(`Imported ${unique.length} records to ${outPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
