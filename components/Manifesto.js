import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto({ id }) {
  const manifestoPoints = [
    {
      title: "Diseño Intencionado",
      text: "Cada píxel, cada transición, cada palabra tiene un propósito. Creo productos que resuelven problemas reales."
    },
    {
      title: "Código Limpio & Flexible",
      text: "Escribo código escalable y mantenible. Tecnología al servicio del diseño, no al revés."
    },
    {
      title: "Narrativa Visual",
      text: "Convierto conceptos en experiencias. El movimiento, el color y la tipografía cuentan historias."
    }
  ];

  return (
    <section id={id || undefined} className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mi Filosofía
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No hago webs. Hago experiencias digitales que importan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-black border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-500/5 group-hover:to-purple-500/5 backdrop-blur-sm">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-cyan-400 text-2xl font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {point.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "El mejor diseño es invisible. El usuario no debe pensar en cómo funciona, solo debe disfrutarlo."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
