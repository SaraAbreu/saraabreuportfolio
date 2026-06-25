import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Escuchar',
    desc: 'Entiendo qué necesitas construir, para quién y por qué. Sin asumir, sin plantillas. Una conversación real antes de escribir una sola línea de código.',
  },
  {
    num: '02',
    title: 'Definir',
    desc: 'Traduzco tus objetivos en arquitectura técnica: qué stack, qué estructura, qué entregables y en qué plazos. Todo por escrito antes de empezar.',
  },
  {
    num: '03',
    title: 'Construir',
    desc: 'Desarrollo iterativo con entregas parciales. Puedes ver el avance en tiempo real, dar feedback y ajustar el rumbo — no al final, durante el proceso.',
  },
  {
    num: '04',
    title: 'Entregar',
    desc: 'Código limpio, documentado y tuyo. Deployado, probado y con todo lo que necesitas para mantenerlo o escalarlo sin depender de mí.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function ProcessSection() {
  return (
    <section id="process" className="border-t border-[#DDD8CE]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 py-12 sm:py-14 border-b border-[#DDD8CE]"
      >
        <p className="text-xs font-medium tracking-widest text-[#C4602A] uppercase mb-4">
          Cómo trabajo
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#1A1A18]">
          De la idea al producto
        </h2>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-8 sm:p-10 border-r border-b border-[#DDD8CE] lg:border-b-0 last:border-r-0 relative group hover:bg-[#F0E0D6]/20 transition-colors duration-300"
          >
            {/* Línea de progreso superior */}
            <div className="absolute top-0 left-8 sm:left-10 right-8 sm:right-10 h-px bg-[#DDD8CE] overflow-hidden">
              <div className="h-full w-0 bg-[#C4602A] group-hover:w-full transition-all duration-700 ease-out" />
            </div>

            <div className="text-xs font-medium tracking-widest text-[#C4602A] mb-6 uppercase pt-4">
              {step.num}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light mb-4 tracking-tight text-[#1A1A18]">
              {step.title}
            </h3>
            <p className="text-sm text-[#6B6860] leading-relaxed font-light">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
