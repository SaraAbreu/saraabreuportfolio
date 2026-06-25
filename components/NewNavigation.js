import React, { useState, useEffect } from 'react';

export default function NewNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#DDD8CE]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className={`font-serif text-lg tracking-tight transition-colors ${
            isScrolled ? 'text-[#1A1A18]' : 'text-white'
          }`}
        >
          Sara Abreu<span className="text-[#C4602A]">.</span>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Proyectos', id: 'projects' },
            { label: 'Proceso', id: 'process' },
            { label: 'Sobre mí', id: 'about' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm transition-colors hover:text-[#C4602A] ${
                isScrolled ? 'text-[#6B6860]' : 'text-white/70 hover:text-white'
              }`}
              style={{ '--tw-text-opacity': 1 }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:sarahernandez.online@gmail.com"
          className={`text-xs font-medium px-4 py-2 border transition-all duration-200 hover:-translate-y-px ${
            isScrolled
              ? 'border-[#C4602A] text-[#C4602A] hover:bg-[#C4602A] hover:text-white'
              : 'border-white/50 text-white hover:border-white hover:bg-white/10'
          }`}
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
