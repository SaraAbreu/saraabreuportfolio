import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isClient) return null;

  return (
    <section id="cta" className="border-t border-gray-200 py-20 sm:py-32 px-6 sm:px-10 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <h2 className="text-7xl sm:text-9xl font-serif font-light text-gray-50 opacity-20 whitespace-nowrap pointer-events-none select-none"
          style={{ letterSpacing: '-0.04em', lineHeight: 1 }}>
          ¿Hablamos?
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-5"
        >
          Próximo proyecto
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl font-light leading-tight mb-6 tracking-tight"
        >
          ¿Tienes algo
          <br />
          <em className="italic text-gray-500">en mente?</em>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base text-gray-700 leading-relaxed mb-10 font-light"
        >
          Cuéntame qué necesitas. Sin formularios largos, sin plantillas. Solo una conversación.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="mailto:hello@abreu.studio"
            className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Escribir a Sara
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sara-abreu-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5"
          >
            Ver LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
