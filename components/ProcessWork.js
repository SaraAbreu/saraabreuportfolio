import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessWork({ id }) {
  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Entiendo el problema, el usuario y el contexto. Hago preguntas incómodas.',
      details: 'Investigación, entrevistas, análisis de competencia'
    },
    {
      number: '02',
      title: 'Concepto',
      description: 'Defino la solución. Bocetos, wireframes, narrativa visual.',
      details: 'Ideación, storyboarding, prototipos rápidos'
    },
    {
      number: '03',
      title: 'Diseño',
      description: 'Creo la interfaz. Cada detalle importa: color, tipografía, movimiento.',
      details: 'UI design, motion design, accessibility first'
    },
    {
      number: '04',
      title: 'Desarrollo',
      description: 'Código limpio que respeta el diseño. React, Next.js, Web APIs modernas.',
      details: 'Frontend, optimización, pruebas, documentación'
    },
    {
      number: '05',
      title: 'Validación',
      description: 'Mido resultados. ¿Funciona? ¿Mejora la vida del usuario?',
      details: 'Analytics, user testing, iteración continua'
    },
    {
      number: '06',
      title: 'Evolución',
      description: 'El producto no termina. Aprendo, me adapto, mejoro constantemente.',
      details: 'Mantenimiento, nuevas features, refactor'
    }
  ];

  return (
    <section id={id || undefined} className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-black to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Cómo Trabajo
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un proceso que combina diseño estratégico, desarrollo técnico y pensamiento centrado en el usuario.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/20 to-purple-500/20" />

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="group">
                    <div className="inline-block mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <p className="text-sm text-gray-500">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative w-full sm:w-2/12 flex justify-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-50" />
                    <div className="relative w-12 h-12 bg-black border-2 border-cyan-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for odd items */}
                <div className="hidden sm:block w-5/12" />
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
