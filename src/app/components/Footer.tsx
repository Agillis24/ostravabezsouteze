import { Database, Scale, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-red-500" />
              <h3 className="text-white font-medium">Zdroje dat</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://smlouvy.gov.cz" className="hover:text-white transition-colors">
                  Registr smluv (smlouvy.gov.cz)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Profily zadavatelů</span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Obchodní rejstřík</span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Veřejně dostupné dokumenty</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-red-500" />
              <h3 className="text-white font-medium">Právní rámec</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>Zákon č. 134/2016 Sb., o zadávání veřejných zakázek</li>
              <li>Zákon č. 106/1999 Sb., o svobodném přístupu k informacím</li>
              <li>Judikatura ÚOHS</li>
              <li>Metodiky Ministerstva pro místní rozvoj</li>
            </ul>
          </div>


        </div>

        <div className="border-t border-neutral-800 pt-8">
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
            <h4 className="text-white font-medium mb-3">Prohlášení</h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              Tento web pracuje s veřejně dostupnými informacemi a vyzývá k transparentnímu postupu veřejné správy.
              Prezentované údaje vycházejí z registru smluv, profilů zadavatelů a dalších veřejných zdrojů.
              Web má za cíl podpořit veřejnou kontrolu a diskuzi o způsobu zadávání veřejných zakázek.
              Veškeré právní formulace jsou opatrné a reflektují skutečnost, že konečné posouzení zákonnosti
              postupu je věcí příslušných kontrolních orgánů.
            </p>
          </div>

          <div className="text-center text-sm text-neutral-500">
            <p>Web byl vytvořen jako investigativní projekt mapující otázky spojené se zadáváním veřejných zakázek</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
