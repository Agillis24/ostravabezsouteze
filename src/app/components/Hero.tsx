import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white relative">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="mb-8 inline-block">
          <div className="text-sm uppercase tracking-wider text-neutral-500 mb-2">
            Investigativní analýza
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent w-48 mx-auto"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-neutral-900 leading-tight max-w-5xl mx-auto">
          9 let, 55 milionů korun a otázka, proč se senior taxi v Ostravě dlouhodobě nesoutěží otevřeně
        </h1>

        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Z veřejně dostupných smluv vyplývá, že městské obvody Ostravy vynaložily za službu senior taxi / senior expres přibližně 55 milionů Kč. Web mapuje smlouvy, zadavatele, částky i otázky, zda mělo být toto plnění soutěženo transparentněji a ve větším rozsahu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <div className="text-4xl font-serif text-red-900 mb-2">55 mil. Kč</div>
            <div className="text-sm text-neutral-600">Celková vynaložená částka</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <div className="text-4xl font-serif text-red-900 mb-2">9 let</div>
            <div className="text-sm text-neutral-600">Období 2017–2026</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <div className="text-4xl font-serif text-red-900 mb-2">1 dodavatel</div>
            <div className="text-sm text-neutral-600">Opakované zadávání</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('smlouvy')}
            className="px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Projít smlouvy
          </button>
          <button
            onClick={() => scrollToSection('pravni-rozbor')}
            className="px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Zobrazit právní rozbor
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neutral-400" />
      </div>
    </section>
  );
}
