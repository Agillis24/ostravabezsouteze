import { MapPin, FileText, TrendingUp } from 'lucide-react';

interface District {
  name: string;
  amount: number;
  contracts: number;
  highlight: boolean;
}

const districts: District[] = [
  { name: 'Moravská Ostrava a Přívoz', amount: 8500000, contracts: 12, highlight: true },
  { name: 'Poruba', amount: 12200000, contracts: 18, highlight: true },
  { name: 'Ostrava-Jih', amount: 6800000, contracts: 9, highlight: true },
  { name: 'Slezská Ostrava', amount: 4200000, contracts: 7, highlight: false },
  { name: 'Výškovice', amount: 3100000, contracts: 5, highlight: false },
  { name: 'Michálkovice', amount: 2800000, contracts: 4, highlight: false },
  { name: 'Stará Bělá', amount: 1900000, contracts: 3, highlight: false },
  { name: 'Mariánské Hory a Hulváky', amount: 3500000, contracts: 6, highlight: false },
];

export function DistrictsMap() {
  const totalAmount = districts.reduce((sum, d) => sum + d.amount, 0);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Přehled městských obvodů
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Které městské obvody Ostravy službu zadávaly a v jakém objemu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {districts.map((district, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 border-2 transition-all hover:shadow-lg ${
                district.highlight
                  ? 'border-red-900 shadow-md'
                  : 'border-neutral-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  district.highlight ? 'bg-red-900/10' : 'bg-neutral-100'
                }`}>
                  <MapPin className={`w-5 h-5 ${
                    district.highlight ? 'text-red-900' : 'text-neutral-600'
                  }`} />
                </div>
                {district.highlight && (
                  <span className="px-2 py-1 bg-red-900 text-white text-xs rounded-full">
                    Vysoký objem
                  </span>
                )}
              </div>

              <h3 className="font-medium text-neutral-900 mb-4 text-sm leading-tight min-h-[40px]">
                {district.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <TrendingUp className="w-4 h-4" />
                    Částka
                  </div>
                  <div className="font-medium text-neutral-900 text-sm">
                    {(district.amount / 1000000).toFixed(1)} mil. Kč
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <FileText className="w-4 h-4" />
                    Dokumentů
                  </div>
                  <div className="font-medium text-neutral-900 text-sm">
                    {district.contracts}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      district.highlight ? 'bg-red-900' : 'bg-neutral-400'
                    }`}
                    style={{ width: `${(district.amount / totalAmount) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  {((district.amount / totalAmount) * 100).toFixed(1)}% z celkové sumy
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 border border-neutral-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-red-900" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-neutral-900 mb-3">
                Systémový charakter zadávání
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Z přehledu je patrné, že službu senior taxi / senior expres zadávalo více městských obvodů
                současně. Vyvstává otázka, proč nedošlo k centralizovanému soutěžení nebo alespoň koordinaci
                mezi obvody, což by mohlo přinést úspory a větší transparentnost. Model, kdy každý obvod
                zadává samostatně, ale výsledkem je opakovaně tentýž dodavatel, vyžaduje důkladné prověření.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
