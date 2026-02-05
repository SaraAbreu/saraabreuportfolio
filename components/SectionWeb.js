'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente interactivo para proyectos con hover expandible
const ProjectCard = ({ title, description, details, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="h-full rounded-xl border border-amber-700/20 bg-gradient-to-br from-gray-900/50 to-gray-950/50 overflow-hidden cursor-pointer"
        whileHover={{
          borderColor: 'rgba(180, 83, 9, 0.4)',
          boxShadow: '0 12px 40px rgba(180, 83, 9, 0.12)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Fondo degradado en hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Contenido */}
        <div className="relative p-6 h-full flex flex-col">
          {/* Header con línea animada */}
          <div className="mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: 40 }}
              transition={{ duration: 0.3 }}
              className="h-px bg-gradient-to-r from-amber-600 to-amber-600/0 mb-3"
            />
            <h4 className="text-lg font-serif font-light text-white">
              {title}
            </h4>
          </div>

          {/* Descripción principal */}
          <motion.p
            className="text-gray-300/90 text-sm leading-relaxed flex-grow"
            initial={{ opacity: 1 }}
            animate={{ opacity: isExpanded ? 0.5 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Detalles expandibles */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-amber-700/20"
              >
                <div className="space-y-2">
                  {details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-amber-600 text-xs pt-1.5 flex-shrink-0">→</span>
                      <span className="text-gray-400 text-xs leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer con indicador */}
          <motion.div
            className="mt-4 pt-3 border-t border-amber-700/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs text-amber-600/70 uppercase tracking-widest font-serif">
              {isExpanded ? 'Ver menos' : 'Explorar'}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function SectionWeb() {
  const projects = [
    {
      title: 'Casa estudio',
      description:
        'Estructura mínima, navegación por capas y ritmo tipográfico deliberado. Cada interacción está medida para reducir ruido y reforzar lectura.',
      details: [
        'Arquitectura de información limpia',
        'Transiciones que guían la atención',
        'Contenido como protagonista',
        'Navegación sensible al contexto'
      ]
    },
    {
      title: 'Mockups y prototipo',
      description:
        'Prototipos que prueban intención: microinteracciones que generan pausa, patrones que sostienen la narrativa y decisiones de UX que priorizan contenido.',
      details: [
        'Validación de conceptos con diseño',
        'Microinteracciones purposeful',
        'Patrones de navegación consistentes',
        'Testing iterativo con usuarios'
      ]
    },
    {
      title: 'Diseño de sistemas',
      description:
        'Componentes reutilizables, tokens visuales coherentes y documentación viva que escala con el tiempo.',
      details: [
        'Component library escalable',
        'Design tokens centralizados',
        'Documentación interactiva',
        'Consistencia cross-product'
      ]
    }
  ];

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
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <motion.section 
      className="mt-20 max-w-5xl mx-auto text-left py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Título */}
      <motion.div className="mb-12" variants={itemVariants}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-px bg-gradient-to-r from-amber-700 to-amber-700/0 mb-4"
        />
        <h2 className="text-4xl font-serif text-white mb-3 font-light tracking-tight">
          Creación Web — Experiencias con gramática
        </h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Explora los proyectos pasando el cursor sobre cada tarjeta
        </p>
      </motion.div>

      {/* Grid de proyectos */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            details={project.details}
            index={index}
          />
        ))}
      </motion.div>

      {/* Sección de principios */}
      <motion.div 
        className="mt-16 pt-12 border-t border-amber-700/20"
        variants={itemVariants}
      >
        <motion.p 
          className="text-gray-400 text-sm tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Principios de creación
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              principle: 'Gramática clara',
              explanation:
                'Cada elemento tiene un rol. Tipografía, espaciado y color trabajan juntos sin ruido.'
            },
            {
              principle: 'Intención visible',
              explanation:
                'Las interacciones comunican, no distraen. Cada movimiento responde a un propósito.'
            },
            {
              principle: 'Accesibilidad inherente',
              explanation:
                'Diseño que funciona para todos: contraste, navegación clara, reducción de movimiento.'
            },
            {
              principle: 'Mantenibilidad',
              explanation:
                'Código limpio y documentación que permiten evolución sin perder coherencia visual.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              viewport={{ once: true }}
              className="group p-4 rounded-lg border border-amber-700/20 bg-gray-950/40 hover:bg-gray-900/60 transition-colors duration-300"
            >
              <h4 className="text-sm font-serif text-amber-600 mb-2 uppercase tracking-wide">
                {item.principle}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cierre visual */}
      <motion.div
        className="mt-12 pt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-block px-6 py-3 border border-amber-700/30 rounded-lg bg-gray-950/40"
          whileHover={{
            borderColor: 'rgba(180, 83, 9, 0.5)',
            boxShadow: '0 0 20px rgba(180, 83, 9, 0.1)',
            transition: { duration: 0.3 }
          }}
        >
          <p className="text-gray-300 text-sm font-serif">
            Más proyectos disponibles. <span className="text-amber-600">Contacta</span> para conocer el portafolio completo.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
