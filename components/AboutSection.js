import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const facts = [
  { value: '4', label: 'Productos en producción' },
  { value: '3', label: 'Plataformas: iOS, Android y Web' },
  { value: 'E2E', label: 'Del diseño al código' },
];

const stack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'React Native', 'Expo'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'MongoDB'] },
  { group: 'IA y automatización', items: ['OpenAI', 'Grok', 'n8n', 'Meta Graph API'] },
  { group: 'Diseño y visual', items: ['Figma', 'UX/UI', 'Fotografía', 'Dirección de arte'] },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-[#DDD8CE] grid grid-cols-1 lg:grid-cols-2">
      {/* Izquierda: quién soy */}
      <motion.div
        {...fadeUp()}
        className="px-6 sm:px-12 py-16 sm:py-24 border-b lg:border-b-0 lg:border-r border-[#DDD8CE]"
      >
        <blockquote className="font-serif text-3xl sm:text-4xl font-light leading-tight mb-10 tracking-tight text-[#1A1A18]">
          “El mejor diseño es el que funciona <em className="italic text-[#C4602A]">sin que nadie lo note.</em>”
        </blockquote>

        {/* Firma con retrato */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-1 ring-[#DDD8CE] shrink-0">
            <Image
              src="/images/galeria/la-artista/sara-bn.webp"
              alt="Retrato de Sara Abreu"
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="font-serif text-lg text-[#1A1A18] leading-tight">Sara Abreu</p>
            <p className="text-xs text-[#6B6860] mt-0.5">Desarrolladora full stack y diseñadora · Tenerife</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[#6B6860] mb-10 font-light max-w-xl">
          Diseño y desarrollo aplicaciones web y móviles, y las conecto con IA y automatización. He trabajado
          con academias, plataformas de salud mental y productos propios — siempre priorizando arquitectura
          limpia, una experiencia de usuario sólida y código mantenible.
        </p>

        {/* Cifras */}
        <div className="grid grid-cols-3 border-y border-[#DDD8CE] mb-8">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(0.15 + i * 0.1)}
              className={`py-5 ${i > 0 ? 'pl-4 sm:pl-6 border-l border-[#DDD8CE]' : 'pr-4'}`}
            >
              <p className="font-serif text-4xl font-light text-[#C4602A] leading-none">{f.value}</p>
              <p className="mt-2 text-[11px] leading-snug text-[#6B6860]">{f.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-[#1A1A18] flex items-center gap-2.5">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#5B8C5A] opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-[#5B8C5A]" />
          </span>
          Disponible para nuevos proyectos · En remoto
        </p>
      </motion.div>

      {/* Derecha: stack */}
      <motion.div {...fadeUp(0.15)} className="px-6 sm:px-12 py-16 sm:py-24 lg:flex lg:flex-col lg:justify-center">
        <p className="text-xs font-medium tracking-widest text-[#C4602A] uppercase mb-2">Con qué trabajo</p>
        <p className="text-sm text-[#6B6860] font-light mb-10">Las herramientas que uso a diario en mis proyectos.</p>

        <div>
          {stack.map((row, i) => (
            <motion.div
              key={row.group}
              {...fadeUp(0.2 + i * 0.08)}
              className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 py-5 border-t border-[#DDD8CE] last:border-b"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] tabular-nums text-[#C4602A]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-[#1A1A18]">{row.group}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-[#4A4843] border border-[#DDD8CE] px-2.5 py-1 hover:border-[#C4602A] hover:text-[#C4602A] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
