import { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { isrsContracts } from '../data/isrsContracts';
import { tenderStatusByContractId } from '../data/tenderStatus';

export function ContractsTable() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedLastVersion, setSelectedLastVersion] = useState<string>('');

  const contractsWithTenderStatus = isrsContracts.map((contract) => {
    const status = tenderStatusByContractId[contract.id];
    return {
      ...contract,
      tendered: status?.tendered ?? false,
      profileUrl: status?.profileUrl,
      tenderNote: status?.note,
    };
  });

  const filteredContracts = contractsWithTenderStatus.filter((contract) => {
    if (selectedYear && contract.year !== selectedYear) return false;
    if (selectedLastVersion === 'ano' && contract.lastVersion !== true) return false;
    if (selectedLastVersion === 'ne' && contract.lastVersion !== false) return false;
    if (selectedLastVersion === 'neznamy' && contract.lastVersion !== null) return false;
    return true;
  });

  const totalAmount = filteredContracts.reduce((sum, c) => sum + (c.amountValue ?? 0), 0);
  const uniqueYears = [...new Set(isrsContracts.map(c => c.year))].sort((a, b) => b - a);
  const minYear = Math.min(...isrsContracts.map((c) => c.year));
  const maxYear = Math.max(...isrsContracts.map((c) => c.year));

  return (
    <section id="smlouvy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Přehled smluv a částek
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Přehled dat vyhledaných v Registru smluv (ISRS) pro smluvní stranu Beáta Philipp
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-red-900/5 p-6 rounded-lg border-l-4 border-red-900">
            <div className="text-xs md:text-sm text-neutral-600 mb-1">Celková suma (zobrazeno)</div>
            <div className="text-2xl md:text-3xl font-serif text-red-900">
              {(totalAmount / 1000000).toFixed(2)} mil. Kč
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
            <div className="text-xs md:text-sm text-neutral-600 mb-1">Zobrazených záznamů</div>
            <div className="text-2xl md:text-3xl font-serif text-neutral-900">
              {filteredContracts.length}
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
            <div className="text-xs md:text-sm text-neutral-600 mb-1">Období</div>
            <div className="text-2xl md:text-3xl font-serif text-neutral-900">
              {minYear}–{maxYear}
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
            <div className="text-xs md:text-sm text-neutral-600 mb-1">Publikujících subjektů</div>
            <div className="text-2xl md:text-3xl font-serif text-neutral-900">
              {new Set(filteredContracts.map((c) => c.publishingParty)).size}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-neutral-50 p-6 rounded-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neutral-600" />
            <span className="font-medium text-neutral-900">Filtry</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="text-sm text-neutral-600 mb-2 block">Rok</label>
              <select
                className="px-4 py-2 border border-neutral-300 rounded-lg bg-white"
                value={selectedYear || ''}
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">Všechny roky</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-neutral-600 mb-2 block">Poslední verze</label>
              <select
                className="px-4 py-2 border border-neutral-300 rounded-lg bg-white"
                value={selectedLastVersion}
                onChange={(e) => setSelectedLastVersion(e.target.value)}
              >
                <option value="">Vše</option>
                <option value="ano">Ano</option>
                <option value="ne">Ne</option>
                <option value="neznamy">Neznámé</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium">
                    Publikující smluvní strana
                  </th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium">Předmět smlouvy</th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium">Publikováno</th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-medium">Hodnota smlouvy</th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium">Smluvní strana(y)</th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium">Soutěženo</th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-center text-xs md:text-sm font-medium">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredContracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-neutral-900 font-medium">
                      {contract.publishingParty}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {contract.subject}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-neutral-600">
                      {contract.publishedAt}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-neutral-900 text-right font-medium">
                      {contract.amountText}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {contract.counterparty}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-neutral-600">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            contract.tendered
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-neutral-200 text-neutral-700'
                          }`}
                        >
                          {contract.tendered ? 'ANO' : 'NE'}
                        </span>
                        {contract.tendered && contract.profileUrl && (
                          <a
                            href={contract.profileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-red-900 underline underline-offset-2"
                          >
                            Profil zadavatele
                          </a>
                        )}
                        {contract.tenderNote && (
                          <span className="text-xs text-neutral-400">{contract.tenderNote}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-center">
                      <a
                        href={contract.detailUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-900 hover:text-red-700 transition-colors inline-flex"
                        aria-label={`Detail smlouvy ${contract.id}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-sm text-neutral-700">
            <strong>Poznámka:</strong> Data jsou importována z Registru smluv (ISRS) pro smluvní stranu Beáta Philipp, IČO: 74638823.
          </p>
        </div>
      </div>
    </section>
  );
}
