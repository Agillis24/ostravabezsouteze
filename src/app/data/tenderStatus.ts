export interface TenderStatus {
  tendered: boolean;
  profileUrl?: string;
  note?: string;
}

// Key = ID smlouvy z Registru smluv (ISRS).
// Doplňuj sem záznamy, které byly soutěženy.
export const tenderStatusByContractId: Record<number, TenderStatus> = {
  37646865: {
    tendered: true,
    profileUrl: 'https://zakazky.ovajih.cz/contract_display_6307.html',
  },
  19194379: {
    tendered: true,
    profileUrl: 'https://zakazky.ovajih.cz/contract_display_3385.html',
    note: 'jediná nabídka',
  },
  11043764: {
    tendered: true,
    profileUrl: 'https://zakazky.ovajih.cz/contract_display_1792.html',
    note: 'jediná nabídka',
  },
  4272008: {
    tendered: true,
    profileUrl: 'https://zakazky.ovajih.cz/contract_display_214.html',
  },
  18652899: {
    tendered: true,
    profileUrl: 'https://profily.proebiz.com/verejne-zakazky/2698',
    note: 'jediná nabídka',
  },
  18728807: {
    tendered: true,
    profileUrl: 'https://tenderarena.cz/dodavatel/seznam-profilu-zadavatelu/detail/Z0004411/zakazka/469925',
    note: 'jediná nabídka',
  },
  22759509: {
    tendered: true,
    profileUrl: 'https://tenderarena.cz/dodavatel/seznam-profilu-zadavatelu/detail/Z0004423/zakazka/575593',
    note: 'jediná nabídka',
  },
  18584735: {
    tendered: true,
    profileUrl: 'https://tenderarena.cz/dodavatel/seznam-profilu-zadavatelu/detail/Z0004389/zakazka/454703',
    note: 'jediná nabídka',
  },
  26472683: {
    tendered: true,
    profileUrl: 'https://tenderarena.cz/dodavatel/seznam-profilu-zadavatelu/detail/Z0004389/zakazka/651014',
    note: 'jediná nabídka',
  },
};
