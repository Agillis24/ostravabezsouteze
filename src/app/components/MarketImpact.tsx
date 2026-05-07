import { TrendingDown, Lock, Users, DollarSign } from 'lucide-react';

export function MarketImpact() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Problém pro trh
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Podezření na deformaci hospodářské soutěže a omezení přístupu na trh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 border-2 border-neutral-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-2xl font-serif text-center text-neutral-900 mb-4">
              Otevřený trh
            </h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✓</span>
                <span>Více poskytovatelů má přístup k zakázkám</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✓</span>
                <span>Konkurenční tlak na cenu a kvalitu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✓</span>
                <span>Transparentní srovnání nabídek</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✓</span>
                <span>Inovace a zlepšování služeb</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">✓</span>
                <span>Hospodárné využití veřejných prostředků</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border-2 border-red-900">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-red-900" />
            </div>
            <h3 className="text-2xl font-serif text-center text-neutral-900 mb-4">
              Uzavřený okruh
            </h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-red-900 mt-1">✗</span>
                <span>Jeden dodavatel má dlouhodobou dominanci</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-900 mt-1">✗</span>
                <span>Minimální nebo žádný konkurenční tlak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-900 mt-1">✗</span>
                <span>Chybí srovnání s jinými nabídkami</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-900 mt-1">✗</span>
                <span>Omezená motivace ke zlepšování</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-900 mt-1">✗</span>
                <span>Riziko nehospodárného nakládání</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8 border border-neutral-200">
          <h3 className="text-2xl font-serif text-neutral-900 mb-6">
            Dopady dlouhodobého uzavřeného modelu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-red-900" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Omezení přístupu</h4>
                <p className="text-sm text-neutral-600">
                  Jiní dopravci nemohou získat příležitost nabídnout své služby, což vede k faktickému
                  uzavření trhu pro nové subjekty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-red-900" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Cenová netransparentnost</h4>
                <p className="text-sm text-neutral-600">
                  Bez soutěže není možné ověřit, zda nabízená cena odpovídá tržním podmínkám
                  a zda by jiní poskytovatelé nenabídli lepší podmínky.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-red-900" />
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Závislost systému</h4>
                <p className="text-sm text-neutral-600">
                  Dlouhodobá koncentrace u jednoho dodavatele vytváří závislost a ztěžuje případnou
                  změnu poskytovatele v budoucnu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-4">
            Právně opatrné vyjádření
          </h3>
          <p className="text-neutral-100 leading-relaxed mb-4">
            Dlouhodobé opakované zadávání obdobného plnění jednomu subjektu <strong>může vést</strong> k omezení
            přístupu jiných dopravců na trh a <strong>může oslabovat</strong> konkurenční tlak na cenu a kvalitu.
            <strong>Vyvstává podezření</strong>, že takový model <strong>může vytvářet</strong> uzavřený lokální
            systém bez skutečného porovnání nabídek.
          </p>
          <p className="text-neutral-100 leading-relaxed">
            Právě proto má veřejné zadávání sledovat transparentnost a hospodářskou soutěž. <strong>Je třeba
            prověřit</strong>, zda současný stav odpovídá těmto principům a zda nedochází k deformaci trhu.
          </p>
        </div>
      </div>
    </section>
  );
}
