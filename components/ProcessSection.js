import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ACCENT = '#C4602A';

// Ilustraciones de línea (64×64) que se "dibujan" al entrar en pantalla
const draw = (i) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: 0.2 + i * 0.12, duration: 1.1, ease: 'easeInOut' }, opacity: { delay: 0.2 + i * 0.12, duration: 0.01 } },
  },
});

const Line = ({ i = 0, ...props }) => (
  <motion.path variants={draw(i)} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} />
);

const illustrations = {
  // Conversación: dos bocadillos y ondas
  escuchar: (
    <>
      <Line i={0} d="M8 14h30a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H22l-8 7v-7h-6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" stroke="#1A1A18" />
      <Line i={1} d="M12 22h20M12 28h14" stroke="#1A1A18" />
      <Line i={2} d="M48 20c3 3 3 9 0 12M54 16c5.5 5.5 5.5 14.5 0 20" stroke={ACCENT} />
    </>
  ),
  // Plano: wireframe con rejilla
  definir: (
    <>
      <Line i={0} d="M6 10h52v44H6z" stroke="#1A1A18" />
      <Line i={1} d="M6 20h52M22 20v34" stroke="#1A1A18" />
      <Line i={2} d="M28 28h22M28 34h16M28 44h22v4H28z" stroke={ACCENT} />
      <Line i={3} d="M11 26h6M11 31h6M11 36h6" stroke="#1A1A18" />
    </>
  ),
  // Construcción: código y bloques que encajan
  construir: (
    <>
      <Line i={0} d="M18 18 8 28l10 10M46 18l10 10-10 10" stroke="#1A1A18" />
      <Line i={1} d="M36 12 28 44" stroke={ACCENT} />
      <Line i={2} d="M14 50h12v6H14zM28 50h12v6H28zM42 50h8v6h-8z" stroke="#1A1A18" />
    </>
  ),
  // Entrega: caja abierta con check
  entregar: (
    <>
      <Line i={0} d="M10 24 32 14l22 10v24L32 58 10 48z" stroke="#1A1A18" />
      <Line i={1} d="M10 24l22 10 22-10M32 34v24" stroke="#1A1A18" />
      <Line i={2} d="M22 6l6 6 12-10" stroke={ACCENT} />
    </>
  ),
};

const steps = [
  {
    key: 'escuchar',
    title: 'Escuchar',
    desc: 'Entiendo qué necesitas construir, para quién y por qué. Sin asumir, sin plantillas. Una conversación real antes de escribir una sola línea de código.',
    output: 'Briefing',
  },
  {
    key: 'definir',
    title: 'Definir',
    desc: 'Traduzco tus objetivos en arquitectura técnica: qué stack, qué estructura, qué entregables y en qué plazos. Todo por escrito antes de empezar.',
    output: 'Propuesta + plan',
  },
  {
    key: 'construir',
    title: 'Construir',
    desc: 'Desarrollo iterativo con entregas parciales. Puedes ver el avance en tiempo real, dar feedback y ajustar el rumbo — no al final, durante el proceso.',
    output: 'Demos en vivo',
  },
  {
    key: 'entregar',
    title: 'Entregar',
    desc: 'Código limpio, documentado y tuyo. Deployado, probado y con todo lo que necesitas para mantenerlo o escalarlo sin depender de mí.',
    output: 'Web online + docs',
  },
];

export default function ProcessSection() {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['start 85%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

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
      <div ref={gridRef} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Línea de tiempo que se rellena con el scroll (escritorio) */}
        <div className="hidden lg:block absolute left-10 right-10 top-[45px] h-px bg-[#DDD8CE] z-0">
          <motion.div style={{ scaleX: progress }} className="h-full bg-[#C4602A] origin-left" />
        </div>

        {steps.map((step, idx) => (
          <motion.div
            key={step.key}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            className="relative flex flex-col p-8 sm:p-10 border-b border-[#DDD8CE] sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 group"
          >
            {/* Nodo de la línea de tiempo */}
            <div className="relative z-10 flex items-center h-3">
              <motion.span
                variants={{ hidden: { scale: 0.4, backgroundColor: '#F8F6F1' }, visible: { scale: 1, backgroundColor: ACCENT, transition: { delay: 0.15 + idx * 0.15, duration: 0.4 } } }}
                className="w-3 h-3 rounded-full border border-[#C4602A] ring-4 ring-[#F8F6F1]"
              />
              <span className="text-xs font-medium tracking-widest text-[#C4602A] bg-[#F8F6F1] pl-3 pr-2">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Ilustración */}
            <motion.svg
              viewBox="0 0 64 64"
              strokeWidth="1.5"
              className="mt-10 mb-8 w-16 h-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105"
              aria-hidden
            >
              {illustrations[step.key]}
            </motion.svg>

            <motion.h3
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1 + idx * 0.1, duration: 0.6 } } }}
              className="font-serif text-2xl sm:text-3xl font-light mb-4 tracking-tight text-[#1A1A18]"
            >
              {step.title}
            </motion.h3>
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2 + idx * 0.1, duration: 0.6 } } }}
              className="text-sm text-[#6B6860] leading-relaxed font-light mb-8"
            >
              {step.desc}
            </motion.p>

            {/* Entregable de la fase */}
            <div className="mt-auto pt-5 border-t border-dashed border-[#DDD8CE] flex items-center justify-between gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A867D]">Te llevas</span>
              <span className="text-xs font-medium text-[#1A1A18] text-right">{step.output}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
