import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessWork({ id }) {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Entiendo el problema, el usuario y el contexto. Hago preguntas incómodas.',
      details: 'Investigación, entrevistas, análisis de competencia',
      expanded: 'Sumergirme en el contexto es crucial. Entrevisto usuarios, analizo competidores y exploro el espacio del problema desde múltiples ángulos. Este es el momento para hacer preguntas difíciles y desafiar suposiciones.'
    },
    {
      number: '02',
      title: 'Concepto',
      description: 'Defino la solución. Bocetos, wireframes, narrativa visual.',
      details: 'Ideación, storyboarding, prototipos rápidos',
      expanded: 'Con los insights en mano, genero múltiples conceptos. Boceteo ideas rápidamente, creo narrativas visuales y exploro diferentes direcciones. El objetivo es encontrar la dirección más fuerte antes de profundizar.'
    },
    {
      number: '03',
      title: 'Diseño',
      description: 'Creo la interfaz. Cada detalle importa: color, tipografía, movimiento.',
      details: 'UI design, motion design, accessibility first',
      expanded: 'Aquí es donde la magia visual cobra vida. Defino la paleta, tipografía, componentes reutilizables y micro-interacciones. Todo debe ser intencional: accesibilidad, rendimiento y belleza juntas.'
    },
    {
      number: '04',
      title: 'Desarrollo',
      description: 'Código limpio que respeta el diseño. React, Next.js, Web APIs modernas.',
      details: 'Frontend, optimización, pruebas, documentación',
      expanded: 'Traduzco el diseño a código funcional. Escribo componentes reutilizables, optimizo el rendimiento y aseguro que cada interacción sea fluida. La documentación es fundamental para futuros mantenimientos.'
    },
    {
      number: '05',
      title: 'Validación',
      description: 'Mido resultados. ¿Funciona? ¿Mejora la vida del usuario?',
      details: 'Analytics, user testing, iteración continua',
      expanded: 'El lanzamiento no es el final. Recojo datos, hago testing con usuarios reales y valido suposiciones. Cada métrica cuenta una historia sobre qué funciona y qué necesita evolucionar.'
    },
    {
      number: '06',
      title: 'Evolución',
      description: 'El producto no termina. Aprendo, me adapto, mejoro constantemente.',
      details: 'Mantenimiento, nuevas features, refactor',
      expanded: 'Nada es permanente. Incorporo feedback, refactorizo código, agrego nuevas funcionalidades y me adapto a cambios del mercado. El crecimiento es continuo y deliberado.'
    }
  ];

  return (
    <section id={id || undefined} className="py-16 sm:py-24 px-6 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-black to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Cómo Trabajo
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un proceso que combina diseño estratégico, desarrollo técnico y pensamiento centrado en el usuario. Haz click en cada paso para explorar más.
          </p>
        </motion.div>

        {/* Mobile: Cards stacked */}
        <div className="sm:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedStep(index)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedStep === index
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-gray-700 hover:border-purple-500/50 bg-gray-900/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex-shrink-0">
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: selectedStep === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-cyan-400"
                >
                  ▼
                </motion.div>
              </div>

              <AnimatePresence>
                {selectedStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-gray-600"
                  >
                    <p className="text-sm text-gray-300 leading-relaxed">{step.expanded}</p>
                    <p className="text-xs text-gray-500 mt-2">📌 {step.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Timeline with left/right alternation */}
        <div className="hidden sm:block relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/20 to-purple-500/20" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 cursor-pointer ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                onClick={() => setSelectedStep(index)}
              >
                {/* Content */}
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedStep === index
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-gray-700 hover:border-purple-500/50 bg-gray-900/40'
                    }`}
                  >
                    <div className="inline-block mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-2 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-gray-500 mb-3">📌 {step.details}</p>

                    <AnimatePresence>
                      {selectedStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-600"
                        >
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {step.expanded}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="relative w-2/12 flex justify-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-50"
                      animate={
                        selectedStep === index
                          ? { opacity: [0.5, 1, 0.5] }
                          : { opacity: 0.3 }
                      }
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div
                      className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        selectedStep === index
                          ? 'border-cyan-500 bg-cyan-500/20'
                          : 'border-cyan-500/50 bg-black'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          selectedStep === index
                            ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                            : 'bg-cyan-400/50'
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-gray-300 max-w-xl mx-auto">
            Cada proyecto es diferente, pero el rigor es el mismo: escuchar, diseñar, construir, medir, mejorar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
