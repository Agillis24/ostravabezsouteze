import { MapPin, FileText, TrendingUp } from 'lucide-react';
import { isrsContracts } from '../data/isrsContracts';

interface DistrictSummary {
  name: string;
  amount: number;
  contracts: number;
  highlight: boolean;
}

function getOstravaDistrictName(publishingParty: string): string | null {
  const statPrefix = 'Statutární město Ostrava, městský obvod ';
  const cityPrefix = 'Městský obvod ';

  if (publishingParty.startsWith(statPrefix)) {
    return publishingParty.slice(statPrefix.length).trim();
  }

  if (publishingParty.startsWith(cityPrefix)) {
    return publishingParty.slice(cityPrefix.length).trim();
  }

  return null;
}

function buildDistrictSummaries(): DistrictSummary[] {
  const aggregates = new Map<string, { contracts: number; amount: number }>();

  for (const contract of isrsContracts) {
    const districtName = getOstravaDistrictName(contract.publishingParty);
    if (!districtName) continue;

    const current = aggregates.get(districtName) ?? { contracts: 0, amount: 0 };
    current.contracts += 1;
    current.amount += contract.amountValue ?? 0;
    aggregates.set(districtName, current);
  }

  const sorted = Array.from(aggregates.entries())
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.amount - a.amount);

  return sorted.map((district, index) => ({
    ...district,
    highlight: index < 3,
  }));
}

export function DistrictsMap() {
  const districts = buildDistrictSummaries();
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
          {districts.map((district) => (
            <div
              key={district.name}
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
                  {totalAmount > 0 ? ((district.amount / totalAmount) * 100).toFixed(1) : '0.0'}% z celkové sumy
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
