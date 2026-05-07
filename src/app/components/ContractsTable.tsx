import { useState } from 'react';
import { ExternalLink, Filter, ArrowUpDown } from 'lucide-react';

interface Contract {
  id: number;
  zadavatel: string;
  nazev: string;
  datum: string;
  castka: number;
  sDph: boolean;
  typ: 'smlouva' | 'dodatek';
  rok: number;
}

const mockContracts: Contract[] = [
  { id: 1, zadavatel: 'MO Poruba', nazev: 'Smlouva o zajištění služby Senior taxi', datum: '2017-03-15', castka: 850000, sDph: true, typ: 'smlouva', rok: 2017 },
  { id: 2, zadavatel: 'MO Moravská Ostrava a Přívoz', nazev: 'Senior expres - dopravní služba', datum: '2017-06-20', castka: 1200000, sDph: true, typ: 'smlouva', rok: 2017 },
  { id: 3, zadavatel: 'MO Poruba', nazev: 'Dodatek č. 1 - navýšení objemu', datum: '2018-02-10', castka: 450000, sDph: true, typ: 'dodatek', rok: 2018 },
  { id: 4, zadavatel: 'MO Slezská Ostrava', nazev: 'Senior taxi 2018', datum: '2018-04-12', castka: 680000, sDph: true, typ: 'smlouva', rok: 2018 },
  { id: 5, zadavatel: 'MO Výškovice', nazev: 'Zajištění dopravy seniorů', datum: '2019-01-08', castka: 520000, sDph: true, typ: 'smlouva', rok: 2019 },
  { id: 6, zadavatel: 'MO Moravská Ostrava a Přívoz', nazev: 'Dodatek č. 2 - prodloužení', datum: '2019-05-15', castka: 780000, sDph: true, typ: 'dodatek', rok: 2019 },
  { id: 7, zadavatel: 'MO Poruba', nazev: 'Senior taxi 2020-2021', datum: '2020-02-20', castka: 1650000, sDph: true, typ: 'smlouva', rok: 2020 },
  { id: 8, zadavatel: 'MO Ostrava-Jih', nazev: 'Senior expres - nová smlouva', datum: '2020-08-05', castka: 920000, sDph: true, typ: 'smlouva', rok: 2020 },
];

export function ContractsTable() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredContracts = mockContracts.filter(contract => {
    if (selectedYear && contract.rok !== selectedYear) return false;
    if (selectedType && contract.typ !== selectedType) return false;
    return true;
  });

  const totalAmount = filteredContracts.reduce((sum, c) => sum + c.castka, 0);
  const uniqueYears = [...new Set(mockContracts.map(c => c.rok))].sort();

  return (
    <section id="smlouvy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Přehled smluv a částek
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Detailní analýza veřejně dostupných dokumentů z registru smluv
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-red-900/5 p-6 rounded-lg border-l-4 border-red-900">
            <div className="text-sm text-neutral-600 mb-1">Celková suma (zobrazeno)</div>
            <div className="text-3xl font-serif text-red-900">
              {(totalAmount / 1000000).toFixed(1)} mil. Kč
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
            <div className="text-sm text-neutral-600 mb-1">Zobrazených záznamů</div>
            <div className="text-3xl font-serif text-neutral-900">
              {filteredContracts.length}
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
            <div className="text-sm text-neutral-600 mb-1">Období</div>
            <div className="text-3xl font-serif text-neutral-900">
              2017–2026
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
            <div className="text-sm text-neutral-600 mb-1">Městských obvodů</div>
            <div className="text-3xl font-serif text-neutral-900">
              {new Set(mockContracts.map(c => c.zadavatel)).size}
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
              <label className="text-sm text-neutral-600 mb-2 block">Typ dokumentu</label>
              <select
                className="px-4 py-2 border border-neutral-300 rounded-lg bg-white"
                value={selectedType || ''}
                onChange={(e) => setSelectedType(e.target.value || null)}
              >
                <option value="">Vše</option>
                <option value="smlouva">Smlouva</option>
                <option value="dodatek">Dodatek</option>
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
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    <div className="flex items-center gap-2">
                      Zadavatel
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Název smlouvy</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Datum</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Typ</th>
                  <th className="px-6 py-4 text-right text-sm font-medium">Částka</th>
                  <th className="px-6 py-4 text-center text-sm font-medium">Odkaz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredContracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-neutral-900 font-medium">
                      {contract.zadavatel}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {contract.nazev}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {new Date(contract.datum).toLocaleDateString('cs-CZ')}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        contract.typ === 'smlouva'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {contract.typ}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-900 text-right font-medium">
                      {contract.castka.toLocaleString('cs-CZ')} Kč
                      <div className="text-xs text-neutral-500">
                        {contract.sDph ? 's DPH' : 'bez DPH'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-red-900 hover:text-red-700 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-sm text-neutral-700">
            <strong>Poznámka:</strong> Tabulka obsahuje vzorová data pro demonstrační účely.
            Skutečné částky a smlouvy je třeba dohledat v registru smluv a profilech zadavatelů.
            Zobrazené informace vycházejí z veřejně dostupných dokumentů.
          </p>
        </div>
      </div>
    </section>
  );
}
