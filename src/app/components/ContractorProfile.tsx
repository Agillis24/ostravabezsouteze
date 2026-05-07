import { Building2, Calendar, FileText, ExternalLink } from 'lucide-react';

export function ContractorProfile() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Kdo je příjemcem plnění
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Faktický a dokumentární přehled založený na veřejně dohledatelných informacích
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div className="p-8 border-b border-neutral-200 bg-gradient-to-r from-neutral-50 to-white">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-red-900/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-10 h-10 text-red-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-neutral-900 mb-2">
                  [Jméno podnikatele]
                </h3>
                <p className="text-neutral-600 mb-4">
                  Podnikatel dlouhodobě poskytující službu senior taxi / senior expres pro různé městské obvody statutárního města Ostravy
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-900/10 text-red-900 rounded-full text-sm">
                    Senior taxi
                  </span>
                  <span className="px-3 py-1 bg-neutral-200 text-neutral-700 rounded-full text-sm">
                    Dopravní služby
                  </span>
                  <span className="px-3 py-1 bg-neutral-200 text-neutral-700 rounded-full text-sm">
                    Veřejné zakázky
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h4 className="text-xl font-serif text-neutral-900 mb-6">
              Vazba na veřejnou správu
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-red-900 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-neutral-900 mb-1">Období působení</div>
                  <div className="text-sm text-neutral-600">Minimálně 2017–2026</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-red-900 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-neutral-900 mb-1">Počet smluv</div>
                  <div className="text-sm text-neutral-600">Desítky dokumentů</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-red-900 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-neutral-900 mb-1">Zadavatelé</div>
                  <div className="text-sm text-neutral-600">Městské obvody Ostravy</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h5 className="font-medium text-neutral-900 mb-3 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Zdrojové dokumenty a registry
              </h5>
              <p className="text-sm text-neutral-600 mb-3">
                Všechny údaje v této sekci vycházejí z veřejně dostupných zdrojů, zejména:
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Registr smluv (smlouvy.gov.cz)</li>
                <li>• Profily zadavatelů</li>
                <li>• Obchodní rejstřík</li>
                <li>• Evidenční systémy veřejné správy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
