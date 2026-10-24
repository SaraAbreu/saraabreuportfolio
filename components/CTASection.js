import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const EMAIL = 'sarahernandez.online@gmail.com';

const opciones = [
  { id: 'web', label: 'Una web', asunto: 'Proyecto web', idea: 'Quiero una web que transmita lo que hacemos y convierta visitas en clientes.' },
  { id: 'app', label: 'Una app móvil', asunto: 'App móvil', idea: 'Tengo una idea de app para iOS y Android y quiero hacerla realidad.' },
  { id: 'ia', label: 'Automatizar con IA', asunto: 'Automatización con IA', idea: 'Paso horas en tareas repetitivas. ¿Podemos automatizarlas con IA?' },
  { id: 'foto', label: 'Fotografía', asunto: 'Sesión de fotografía', idea: 'Necesito fotos que cuenten la historia de mi marca.' },
  { id: 'otro', label: 'Otra cosa', asunto: 'Hablemos', idea: 'Tengo algo en mente y me gustaría contártelo.' },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function CTASection() {
  const [sel, setSel] = useState(null);
  const [copiado, setCopiado] = useState(false);

  const opcion = opciones.find((o) => o.id === sel);
  const asunto = opcion ? opcion.asunto : 'Hablemos';
  const cuerpo = opcion
    ? `Hola Sara,\n\n${opcion.idea}\n\nTe cuento un poco más:\n`
    : 'Hola Sara,\n\n';
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {}
  };

  return (
    <section id="cta" className="border-t border-[#DDD8CE] py-20 sm:py-28 px-6 sm:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center"
      >
        {/* Izquierda: mensaje + selector */}
        <div>
          <motion.p variants={item} className="text-xs font-medium tracking-widest text-[#C4602A] uppercase mb-5">
            Próximo proyecto
          </motion.p>
          <motion.h2
            variants={item}
            className="font-serif text-5xl sm:text-6xl font-light leading-[1.05] mb-6 tracking-tight text-[#1A1A18]"
          >
            ¿Tienes una idea?
            <br />
            <em className="italic text-[#C4602A]">Hagámosla real.</em>
          </motion.h2>
          <motion.p variants={item} className="text-base text-[#6B6860] leading-relaxed mb-10 font-light max-w-md">
            Elige por dónde empezar y te dejo el mensaje medio escrito. Sin formularios largos: solo una conversación.
          </motion.p>

          <motion.div variants={item} className="mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8A867D] mb-4">¿Qué necesitas?</p>
            <div className="flex flex-wrap gap-2">
              {opciones.map((o) => {
                const activo = sel === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setSel(activo ? null : o.id)}
                    aria-pressed={activo}
                    className={`text-sm px-4 py-2 border transition-colors duration-200 ${
                      activo
                        ? 'bg-[#1A1A18] border-[#1A1A18] text-[#F8F6F1]'
                        : 'border-[#DDD8CE] text-[#4A4843] hover:border-[#1A1A18]'
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-5">
            <a
              href={mailto}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4602A] text-white text-sm font-medium hover:bg-[#A84E22] transition-all duration-200 hover:-translate-y-0.5"
            >
              Escríbeme
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sara-abreu-hernandez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6B6860] hover:text-[#1A1A18] transition-colors border-b border-[#DDD8CE] hover:border-[#1A1A18] pb-0.5"
            >
              Ver LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Derecha: vista previa del mensaje */}
        <motion.div variants={item} className="relative">
          <div aria-hidden className="absolute -inset-4 sm:-inset-6 bg-[#F0E0D6]/50 -rotate-2" />
          <div className="relative bg-white border border-[#DDD8CE] shadow-[0_30px_60px_-30px_rgba(26,26,24,0.35)]">
            {/* Cabecera tipo ventana */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#DDD8CE] bg-[#F8F6F1]">
              <span className="w-2 h-2 rounded-full bg-[#DDD8CE]" />
              <span className="w-2 h-2 rounded-full bg-[#DDD8CE]" />
              <span className="w-2 h-2 rounded-full bg-[#DDD8CE]" />
              <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-[#8A867D]">Nuevo mensaje</span>
            </div>

            <div className="px-5 sm:px-6 py-4 text-sm space-y-3 border-b border-[#DDD8CE]">
              <div className="flex items-center gap-3">
                <span className="w-14 text-[#8A867D] text-xs">Para</span>
                <span className="inline-flex items-center gap-2 bg-[#F8F6F1] border border-[#DDD8CE] rounded-full pl-1 pr-3 py-0.5">
                  <span className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image src="/images/galeria/la-artista/sara-bn.webp" alt="" fill sizes="24px" className="object-cover object-top" />
                  </span>
                  <span className="text-[#1A1A18] text-xs">Sara Abreu</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-14 text-[#8A867D] text-xs">Asunto</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={asunto}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#1A1A18]"
                  >
                    {asunto}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-6 min-h-[170px] text-sm leading-relaxed text-[#4A4843]">
              <p className="!text-[#4A4843]">Hola Sara,</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={sel || 'vacio'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-3 ${opcion ? '!text-[#4A4843]' : '!text-[#B5B0A6] italic'}`}
                >
                  {opcion ? opcion.idea : 'Elige una opción y tu mensaje empezará a escribirse aquí…'}
                  <span className="inline-block w-px h-4 align-middle ml-0.5 bg-[#C4602A] animate-pulse" />
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-t border-[#DDD8CE]">
              <span className="flex items-center gap-2 text-xs text-[#6B6860]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B8C5A]" />
                Disponible para nuevos proyectos
              </span>
              <a href={mailto} className="text-xs font-medium text-white bg-[#1A1A18] hover:bg-[#C4602A] px-4 py-2 transition-colors">
                Enviar
              </a>
            </div>
          </div>

          {/* Email visible + copiar */}
          <div className="relative mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-[#8A867D]">O directamente:</span>
            <button
              type="button"
              onClick={copiar}
              className="group inline-flex items-center gap-2 text-[#1A1A18] hover:text-[#C4602A] transition-colors"
              aria-label="Copiar email"
            >
              {EMAIL}
              <span className="text-[11px] uppercase tracking-wider text-[#8A867D] group-hover:text-[#C4602A] border border-[#DDD8CE] group-hover:border-[#C4602A] px-2 py-0.5 transition-colors">
                {copiado ? 'Copiado ✓' : 'Copiar'}
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
