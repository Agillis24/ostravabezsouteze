import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'O projektu', id: 'o-projektu' },
    { label: 'Smlouvy', id: 'smlouvy' },
    { label: 'Právní rozbor', id: 'pravni-rozbor' },
    { label: 'Chronologie', id: 'chronologie' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <div className={`text-lg font-serif ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}>
              Senior Taxi Ostrava
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              isScrolled
                ? 'bg-red-900 text-white'
                : 'bg-white/20 text-white'
            }`}>
              Investigace
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-neutral-700 hover:text-neutral-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
