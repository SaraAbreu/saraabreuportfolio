import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NewNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className={`font-serif text-lg font-light tracking-tight transition-colors ${
            isScrolled ? 'text-black' : 'text-black'
          }`}
        >
          Sara Abreu
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection('marketing')}
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Marketing
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Sobre mí
          </button>
        </div>

        {/* CTA */}
        <a
          href="mailto:hello@abreu.studio"
          className="text-xs font-medium px-4 py-2 bg-black text-white hover:bg-gray-900 transition-colors rounded"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
