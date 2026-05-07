import { Building2, Calendar, FileText, ExternalLink } from 'lucide-react';

export function ContractorProfile() {
  return (
    <section className="py-12 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-6">
            Kdo je příjemcem plnění
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Faktický a dokumentární přehled založený na veřejně dohledatelných informacích
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          <div className="p-5 md:p-8 border-b border-neutral-200 bg-gradient-to-r from-neutral-50 to-white">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-900/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-10 h-10 text-red-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-2">
                  Beáta Philipp
                </h3>
                <p className="text-neutral-600 mb-4">
                  Podnikatel dlouhodobě poskytující službu senior taxi / senior expres pro různé městské obvody statutárního města Ostravy
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-neutral-900">Datum narození: </span>
                    <span className="text-neutral-700">21.06.1988</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Občanství: </span>
                    <span className="text-neutral-700">Česká republika</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-medium text-neutral-900">Adresa sídla: </span>
                    <span className="text-neutral-700">Údolní 375/21, 747 17, Darkovice</span>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Identifikační číslo osoby: </span>
                    <span className="text-neutral-700">74638823</span>
                  </div>
                </div>
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

          <div className="p-5 md:p-8">
            <h4 className="text-xl font-serif text-neutral-900 mb-6">
              Vazba na veřejnou správu
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
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

            <div className="bg-white border border-neutral-200 rounded-lg p-4 md:p-6 mb-8">
              <h5 className="font-medium text-neutral-900 mb-2">Interaktivní infografika: Hodnota smluv po letech</h5>
              <p className="text-sm text-neutral-600 mb-4">
                Graf je načten přímo z profilu dodavatele na Hlídači státu (IČO 74638823).
              </p>
              <div className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-4 md:p-5">
                <p className="text-sm text-neutral-700 mb-3">
                  Otevřete detail subjektu a sekci grafu <strong>Hodnota smluv po letech</strong>.
                </p>
                <a
                  href="https://www.hlidacstatu.cz/Subjekt/74638823"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Otevřít interaktivní graf na Hlídači státu
                </a>
              </div>
              <p className="text-xs text-neutral-500 mt-3">
                Zdroj dat:{' '}
                <a
                  href="https://www.hlidacstatu.cz/Subjekt/74638823"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-900 underline underline-offset-2"
                >
                  Hlídač státu - Beáta Philipp
                </a>
                .
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 md:p-6">
              <h5 className="font-medium text-neutral-900 mb-3 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Zdrojové dokumenty a registry
              </h5>
              <p className="text-sm text-neutral-700 mb-3">
                Veškeré informace o podnikateli uvedené v této sekci jsou převzaté ze Živnostenského rejstříku:{' '}
                <a
                  href="https://rzp.gov.cz/verejne-udaje/cs/udaje/vyber-osoby;jmeno=Be%C3%A1ta;prijmeni=Philipp/osoba;oid=A44f8944d770ef60b976244f6d6143cfb8847dde5eb2979a067f7dc53ab4e9fe61b4a;platne=true/subjekt;ssarzp=A8929e4ae38e82b08cca5141b62e06e17951d0db544e6a1e0e52c6d889ada4cde1b4a"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-900 underline underline-offset-2"
                >
                  Zobrazit záznam v RŽP
                </a>
                .
              </p>
              <p className="text-sm text-neutral-600 mb-3">
                Všechny údaje v této sekci vycházejí z veřejně dostupných zdrojů, zejména:
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Živnostenský rejstřík (rzp.gov.cz)</li>
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
