import { Calendar, FileText, TrendingUp } from 'lucide-react';

interface TimelineEvent {
  year: number;
  quarter: string;
  title: string;
  description: string;
  amount?: number;
  type: 'contract' | 'amendment' | 'milestone';
}

const events: TimelineEvent[] = [
  {
    year: 2017,
    quarter: 'Q1',
    title: 'První identifikované smlouvy',
    description: 'Městské obvody Poruba a Moravská Ostrava a Přívoz uzavírají první smlouvy na senior taxi',
    amount: 2050000,
    type: 'contract'
  },
  {
    year: 2018,
    quarter: 'Q1',
    title: 'Rozšíření do dalších obvodů',
    description: 'Slezská Ostrava a Výškovice přistupují k zadávání služby témuž dodavateli',
    amount: 1200000,
    type: 'contract'
  },
  {
    year: 2019,
    quarter: 'Q2',
    title: 'Nárůst objemu',
    description: 'Dodatky navyšující rozsah služeb, celkový objem přesahuje 5 milionů Kč ročně',
    amount: 5400000,
    type: 'amendment'
  },
  {
    year: 2020,
    quarter: 'Q1',
    title: 'Pokračování bez změny',
    description: 'Navzdory pandemii COVID-19 smlouvy pokračují se stejným dodavatelem',
    amount: 6200000,
    type: 'contract'
  },
  {
    year: 2021,
    quarter: 'Q3',
    title: 'Další navýšení částek',
    description: 'Městský obvod Ostrava-Jih výrazně navyšuje objem zakázky',
    amount: 7800000,
    type: 'amendment'
  },
  {
    year: 2022,
    quarter: 'Q2',
    title: 'Dosažení 40 milionů Kč',
    description: 'Kumulativní částka za všechny obvody přesahuje 40 milionů korun',
    type: 'milestone'
  },
  {
    year: 2023,
    quarter: 'Q4',
    title: 'Prodloužení smluv',
    description: 'Několik městských obvodů prodlužuje smlouvy dodatky namísto nového otevřeného výběrového řízení',
    amount: 8500000,
    type: 'amendment'
  },
  {
    year: 2024,
    quarter: 'Q1',
    title: 'Současný stav',
    description: 'Model dlouhodobého zadávání témuž dodavateli pokračuje, celková suma se blíží 55 milionům Kč',
    type: 'milestone'
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Chronologie událostí
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Časová osa ukazuje, že nejde o izolovaný případ, ale o dlouhodobý systémový vzorec
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-900 via-red-900/50 to-transparent"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-red-900 rounded-full flex items-center justify-center z-10">
                  <Calendar className="w-6 h-6 text-red-900" />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'md:float-right' : ''}`}>
                    <div className="text-sm text-red-900 font-medium mb-1">
                      {event.year} {event.quarter}
                    </div>
                    <div className="bg-white rounded-lg border-2 border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow max-w-md">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          event.type === 'contract' ? 'bg-blue-100' :
                          event.type === 'amendment' ? 'bg-amber-100' :
                          'bg-red-100'
                        }`}>
                          {event.type === 'contract' && <FileText className="w-5 h-5 text-blue-700" />}
                          {event.type === 'amendment' && <FileText className="w-5 h-5 text-amber-700" />}
                          {event.type === 'milestone' && <TrendingUp className="w-5 h-5 text-red-700" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg text-neutral-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {event.description}
                          </p>
                          {event.amount && (
                            <div className="mt-3 pt-3 border-t border-neutral-200">
                              <div className="text-sm text-neutral-500">Roční objem</div>
                              <div className="text-lg font-medium text-red-900">
                                {(event.amount / 1000000).toFixed(1)} mil. Kč
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-red-50 border-l-4 border-red-900 rounded-lg p-6">
          <h4 className="font-medium text-neutral-900 mb-3">Klíčové pozorování</h4>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Chronologie ukazuje systémový a opakující se vzorec zadávání témuž dodavateli po dobu minimálně
            9 let. Tato dlouhodobost a předvídatelnost vzbuzuje otázku, proč nedošlo k řádné otevřené soutěži
            a zda tento model není v rozporu s principy transparentnosti a hospodářské soutěže.
          </p>
        </div>
      </div>
    </section>
  );
}
