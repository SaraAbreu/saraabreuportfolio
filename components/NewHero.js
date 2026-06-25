import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NewHero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isClient) return null;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-6 sm:px-10 pb-16 sm:pb-24 relative overflow-hidden pt-24"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero/sara.mp4" type="video/mp4" />
        </video>
        {/* Overlay con tinte cálido */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/75 via-[#1A1A18]/35 to-transparent"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 sm:mb-12">
          <div className="w-10 h-px bg-[#C4602A]"></div>
          <p className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
            Desarrollo web · Automatización · Contenido visual
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[1.0] mb-10 sm:mb-14 max-w-5xl text-white"
          style={{ letterSpacing: '-0.03em' }}
        >
          Construyo lo que
          <br />
          <em className="italic text-[#F0E0D6]">otros solo diseñan.</em>
        </motion.h1>

        {/* Subtitle + CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-start lg:items-end"
        >
          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xs font-light">
            Aplicaciones funcionales, plataformas IA y automatizaciones que generan resultados reales. Sin hype, con criterio.
          </p>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4602A] text-white text-sm font-medium hover:bg-[#A84E22] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Ver proyectos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm text-white/60 hover:text-white/90 transition-colors border-b border-white/25 hover:border-white/60 pb-0.5 w-fit"
            >
              Cómo trabajo
            </button>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-14 sm:mt-20">
          {['React · Next.js', 'Automatización', 'UX/UI', 'Contenido para marcas', 'AI integrations'].map((tag, i) => (
            <span
              key={i}
              className="text-xs text-white/65 border border-white/20 px-3 py-1.5 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
