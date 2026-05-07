import { AlertCircle, RefreshCw, TrendingUp, Users } from 'lucide-react';

export function AboutSection() {
  const points = [
    {
      icon: RefreshCw,
      title: 'Dlouhodobost vztahu',
      description: 'Službu senior taxi / senior expres pro různé ostravské městské obvody po řadu let zajišťuje tentýž konkrétní podnikatel. Opakované zadávání jednomu subjektu bez širší soutěže vzbuzuje otázky o transparentnosti procesu.'
    },
    {
      icon: AlertCircle,
      title: 'Opakování plnění',
      description: 'Dokumentace ukazuje sérii smluv, dodatků a návazných plnění ve stejném formátu a se stejným dodavatelem. Vyvstává otázka, zda mělo dojít k otevřenějšímu a transparentnímu zadávání v souladu se zákonem.'
    },
    {
      icon: TrendingUp,
      title: 'Koncentrace zakázek',
      description: 'Koncentrace veřejných prostředků u jednoho dodavatele může vést k deformaci trhu a omezení přístupu jiných potenciálních poskytovatelů služby, což je v rozporu s principy hospodářské soutěže.'
    },
    {
      icon: Users,
      title: 'Dopad na konkurenci',
      description: 'Problém není sociální služba samotná – ta je společensky přínosná. Otázkou je způsob zadávání a dopady dlouhodobého uzavřeného modelu na možnost jiných dopravců nabídnout své služby městu.'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-6">
            O co jde
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Analýza veřejně dostupných dokumentů odhaluje systémový vzorec, který vyžaduje veřejnou kontrolu a prověření.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-neutral-50 p-5 md:p-8 rounded-lg border border-neutral-200 hover:border-red-900/30 transition-colors">
              <div className="w-12 h-12 bg-red-900/10 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-red-900" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-neutral-900 mb-4">
                {point.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
