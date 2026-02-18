import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
      isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('content')}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 font-mono"
            >
              portfolio
            </button>
          </div>

          {/* Enlaces de navegación desktop */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('trabajo')} className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</button>
            <button onClick={() => scrollToSection('proceso')} className="text-gray-300 hover:text-white transition-colors duration-300">Proceso</button>
            <button onClick={() => scrollToSection('galeria')} className="text-gray-300 hover:text-white transition-colors duration-300">Galería</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => { scrollToSection('trabajo'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 hover:bg-white/10">Portfolio</button>
            <button onClick={() => { scrollToSection('proceso'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 hover:bg-white/10">Proceso</button>
            <button onClick={() => { scrollToSection('galeria'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 hover:bg-white/10">Galería</button>
          </div>
        </div>
      )}
    </nav>
    {/* Modal de contacto */}
    {showContact && (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="bg-black rounded-2xl shadow-2xl p-6 md:p-10 max-w-lg w-full relative border border-cyan-500/30">
          <button
            onClick={() => setShowContact(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
            aria-label="Cerrar"
          >
            ×
          </button>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images/gallery/Retratos/561252679_24872818952349685_7418151169259432037_n.jpg"
              alt="Sara Abreu"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
            />
            <div className="flex-1 space-y-3 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Sara Abreu</h2>
              <div>
                <span className="font-semibold text-cyan-400">Teléfono:</span> +34 664 771 752
              </div>
              <div>
                <span className="font-semibold text-cyan-400">Email:</span> <a href="mailto:saraabreu2c1997@gmail.com" className="underline hover:text-cyan-300">saraabreu2c1997@gmail.com</a>
              </div>
              <div>
                <span className="font-semibold text-cyan-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/sara-abreu-hernandez/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">sara-abreu-hernandez</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}