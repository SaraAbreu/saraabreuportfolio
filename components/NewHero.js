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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isClient) return null;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-end px-6 sm:px-10 pb-16 sm:pb-20 relative overflow-hidden pt-24">
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7 sm:mb-10">
          <div className="w-8 h-px bg-amber-400/90"></div>
          <p className="text-xs font-medium tracking-widest text-white/90 uppercase">
            Desarrollo web · Automatización · Contenido visual
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-light leading-tight mb-8 sm:mb-12 max-w-5xl text-white"
          style={{ letterSpacing: '-0.03em' }}
        >
          Construyo lo que
          <br />
          <em className="text-white/80 italic">otros solo diseñan.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-start lg:items-end">
          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-sm font-light">
            Creo aplicaciones funcionales, plataformas IA y automatizaciones que generan resultados. Multiplataforma: web, móvil, backend robusto. Sin hype, con criterio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Ver proyectos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('marketing')}
              className="text-sm text-white/80 hover:text-white transition-colors border-b border-white/40 hover:border-white pb-0.5 w-fit"
            >
              Ver más detalles
            </button>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-12 sm:mt-16">
          {['React · Next.js', 'Automatización', 'UX/UI', 'Contenido para marcas', 'AI integrations'].map((tag, i) => (
            <span key={i} className="text-xs text-white/80 border border-white/40 px-3 py-1.5 rounded-full tracking-wider">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
