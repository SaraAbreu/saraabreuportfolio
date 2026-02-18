import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showContact, setShowContact] = useState(false);

  const links = [
    {
      label: 'Correo',
      href: 'mailto:hello@abreu.studio',
      icon: '✉'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com',
      external: true,
      icon: 'in'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com',
      external: true,
      icon: 'ig'
    }
  ];

  return (
    <footer className="mt-16 sm:mt-24 border-t border-cyan-500/10 bg-gradient-to-b from-black via-black to-cyan-500/5">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <p className="text-center text-base sm:text-lg text-gray-200 mb-6 leading-relaxed font-light">
            La intersección entre creatividad y tecnología pide <span className="text-cyan-300">lentitud en la decisión</span> y <span className="text-purple-400">ceremonial en la ejecución.</span>
          </p>
          <p className="text-center text-gray-400 text-sm mb-8">
            Si te interesa hablar de proyectos o colaboración, escribe con intención — respondo con preguntas, propuestas y tiempo para conversar.
          </p>
        </motion.div>

        {/* Links de contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <button
            onClick={() => setShowContact(true)}
            className="group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-500/60 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 font-medium text-sm tracking-wide flex items-center"
          >
            Contacto
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
                  {/* Modal de contacto */}
                  {showContact && (
                    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
                      <div className="bg-black rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl w-full relative border-2 border-cyan-500/40">
                        <button
                          onClick={() => setShowContact(false)}
                          className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl font-bold focus:outline-none"
                          aria-label="Cerrar"
                        >
                          ×
                        </button>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                          <img
                            src="/images/gallery/Retratos/561252679_24872818952349685_7418151169259432037_n.jpg"
                            alt="Sara Abreu"
                            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
                          />
                          <div className="flex-1 space-y-5 text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-2">Sara Abreu</h2>
                            <div className="text-lg">
                              <span className="font-semibold text-cyan-400">Teléfono:</span> +34 664 771 752
                            </div>
                            <div className="text-lg">
                              <span className="font-semibold text-cyan-400">Email:</span> <a href="mailto:saraabreu2c1997@gmail.com" className="underline hover:text-cyan-300">saraabreu2c1997@gmail.com</a>
                            </div>
                            <div className="text-lg">
                              <span className="font-semibold text-cyan-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/sara-abreu-hernandez/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">sara-abreu-hernandez</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
          <a
            href="https://www.linkedin.com/in/sara-abreu-hernandez/"
            target="_blank"
            rel="noreferrer"
            className="group px-6 py-3 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-medium text-sm tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/saritaabreu/"
            target="_blank"
            rel="noreferrer"
            className="group px-6 py-3 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-medium text-sm tracking-wide"
          >
            Instagram
          </a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />

        {/* Copyright y info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-500 space-y-2"
        >
          <p>© {currentYear} Sara Abreu — Diseño + Sistemas de decisión</p>
          <p className="text-gray-600">Hecho con intención y código cuidadoso</p>
        </motion.div>
      </div>
    </footer>
  );
}
