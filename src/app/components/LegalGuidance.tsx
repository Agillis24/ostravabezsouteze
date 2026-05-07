import { Scale, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export function LegalGuidance() {
  return (
    <section id="pravni-rozbor" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Jak má město správně zadávat veřejné zakázky
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Edukativní přehled právního rámce zadávání veřejných zakázek
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <Scale className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-serif mb-3">
                  Základní principy zákona o zadávání veřejných zakázek
                </h3>
                <p className="text-neutral-200 leading-relaxed">
                  Zákon č. 134/2016 Sb., o zadávání veřejných zakázek (ZZVZ), stanoví zásady transparentnosti,
                  rovného zacházení, nediskriminace a hospodárnosti. Tyto principy platí pro všechny veřejné
                  zadavatele bez ohledu na výši zakázky.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-serif text-xl text-neutral-900 mb-3">Standard: Otevřená soutěž</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Standardní a doporučený postup je otevřené zadávací řízení, které umožňuje všem
                zájemcům na trhu podat nabídku. Zajišťuje maximální transparentnost a konkurenci.
              </p>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-serif text-xl text-neutral-900 mb-3">Výjimka: Jen za podmínek</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Jednací řízení bez uveřejnění nebo přímé zadání je mimořádný nástroj, který lze použít
                jen při splnění zákonných podmínek (např. krajní naléhavost, kterou zadavatel nezpůsobil).
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-900 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-serif text-xl text-neutral-900 mb-3">Problém: Opakování</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Dlouhodobé opakované zadávání obdobného plnění jednomu subjektu bez soutěže vzbuzuje
                podezření na obcházení zákona a deformaci hospodářské soutěže.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-lg p-8 mb-8 border border-neutral-200">
          <h3 className="text-2xl font-serif text-neutral-900 mb-6">
            Klíčové otázky v případu Senior taxi
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-900/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-900 font-medium">1</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">
                  Splňovaly jednotlivé zakázky podmínky pro výjimku ze standardního řízení?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  U veřejných zakázek malého rozsahu sice zákon nevyžaduje klasické zadávací řízení,
                  ale stále platí základní zásady ZZVZ. Je třeba prověřit, zda byla dodržena transparentnost
                  a zda byly osloveny i jiné subjekty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-900/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-900 font-medium">2</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">
                  Neměly být zakázky spojeny nebo koordinovány?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Pokud více městských obvodů zadává podobnou službu ve stejném období, mělo by být zváženo
                  společné zadání nebo rámcová dohoda. Rozdělení na malé části může být úmyslným obcházením
                  zákonných limitů pro povinnou otevřenou soutěž.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-900/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-900 font-medium">3</span>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">
                  Je dlouhodobé opakování stejného dodavatele náhodné nebo systémové?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Opakované zadání témuž subjektu po dobu 9 let naznačuje, že plnění bylo předvídatelné
                  a mělo by být soutěženo standardním způsobem. Absence rotace dodavatelů může být známkou
                  deformace trhu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <h4 className="font-medium text-neutral-900 mb-3">Infografika: Jak by měl postup vypadat</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-medium">1</div>
              <div className="text-sm font-medium text-neutral-900 mb-1">Identifikace potřeby</div>
              <div className="text-xs text-neutral-600">Definice služby a rozsahu</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-medium">2</div>
              <div className="text-sm font-medium text-neutral-900 mb-1">Výběr režimu</div>
              <div className="text-xs text-neutral-600">Otevřená soutěž jako standard</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-medium">3</div>
              <div className="text-sm font-medium text-neutral-900 mb-1">Vyhlášení</div>
              <div className="text-xs text-neutral-600">Veřejná výzva všem zájemcům</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-medium">4</div>
              <div className="text-sm font-medium text-neutral-900 mb-1">Transparentní výběr</div>
              <div className="text-xs text-neutral-600">Objektivní hodnocení nabídek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
