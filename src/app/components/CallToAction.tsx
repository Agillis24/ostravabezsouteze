import { AlertCircle, Share2, Mail, FileText } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-red-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Je čas začít tuto službu soutěžit řádně a otevřeně
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
            <p className="text-lg text-white leading-relaxed mb-4">
              Pokud městské obvody potřebují službu senior taxi, má být zajišťována způsobem, který obstojí
              z hlediska <strong>transparentnosti</strong>, <strong>hospodárnosti</strong> a{' '}
              <strong>rovného přístupu dodavatelů</strong>.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Městští politici by měli bezodkladně prověřit dosavadní model a připravit řádné soutěžení
              tohoto plnění v souladu se zákonem o zadávání veřejných zakázek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button className="bg-white text-neutral-900 px-6 py-4 rounded-lg hover:bg-neutral-100 transition-colors flex items-center justify-center gap-3 font-medium">
              <FileText className="w-5 h-5" />
              Zobrazit dokumenty
            </button>
            <button className="bg-white/10 border border-white/30 text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-3 font-medium">
              <Share2 className="w-5 h-5" />
              Sdílet téma
            </button>
            <button className="bg-white/10 border border-white/30 text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-3 font-medium">
              <Mail className="w-5 h-5" />
              Oslovit zastupitele
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-xl font-serif text-white mb-4">
              Co by měli zastupitelé udělat
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium">1</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Vyžádat kompletní dokumentaci všech smluv a dodatků souvisejících se senior taxi za období 2017–2026
                </p>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium">2</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Prověřit, zda byly dodrženy zákonné postupy a zásady transparentnosti a hospodářské soutěže
                </p>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium">3</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Iniciovat otevřené výběrové řízení na budoucí zajištění služby senior taxi napříč městskými obvody
                </p>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium">4</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Zvážit centralizované nebo koordinované zadávání, které zajistí lepší podmínky a větší transparentnost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
