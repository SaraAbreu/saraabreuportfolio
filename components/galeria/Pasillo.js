import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Cuadro from './Cuadro';
import Escultura from './Escultura';
import { Banco, Carril, CursorSala } from './Ambiente';
import { ESCULTURAS } from '../../data/galeria';
import { GOLD } from './GaleriaLayout';
import Pared, { FONDO_PARED } from './Pared';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ROMANOS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

// Una o varias piezas seguidas (acepta una clave o una lista de claves).
function Esculturas({ claves, x }) {
  const lista = (Array.isArray(claves) ? claves : [claves]).filter((k) => k && ESCULTURAS[k]);
  if (!lista.length) return null;
  return lista.map((k) => (
    <div key={k} className="shrink-0 h-full px-[12vw] sm:px-[5.5vw]">
      <Escultura pieza={ESCULTURAS[k]} x={x} />
    </div>
  ));
}

// El pasillo: el scroll vertical se convierte en un paseo horizontal a lo largo de la pared.
export default function Pasillo({ sala, alas, siguiente, onOpen, obraRefs, oculta }) {
  const seccion = useRef(null);
  const pista = useRef(null);
  const alaRefs = useRef([]);
  const [recorrido, setRecorrido] = useState(0);
  const [activa, setActiva] = useState(0);

  useIsoLayoutEffect(() => {
    const medir = () => {
      if (!pista.current) return;
      setRecorrido(Math.max(0, pista.current.scrollWidth - window.innerWidth));
    };
    medir();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(medir) : null;
    ro?.observe(pista.current);
    window.addEventListener('resize', medir);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', medir);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: seccion,
    offset: ['start start', 'end end']
  });
  const x = useTransform(scrollYProgress, (p) => -p * recorrido);
  const progreso = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(x, 'change', (v) => {
    const centro = -v + window.innerWidth * 0.5;
    let idx = 0;
    alaRefs.current.forEach((el, i) => {
      if (el && el.getBoundingClientRect().left - v <= centro) idx = i;
    });
    setActiva(idx);
  });

  const irAla = (i) => {
    const el = alaRefs.current[i];
    if (!el || !seccion.current) return;
    const top = seccion.current.getBoundingClientRect().top + window.scrollY;
    const enPista = el.getBoundingClientRect().left - x.get();
    const destino = Math.min(recorrido, Math.max(0, enPista - window.innerWidth * 0.08));
    window.scrollTo({ top: top + destino, behavior: 'smooth' });
  };

  return (
    <section
      ref={seccion}
      className="relative -mt-24"
      style={{ height: `calc(100vh + ${recorrido}px)` }}
      aria-label={`Sala ${sala.numero}: ${sala.titulo}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: FONDO_PARED }}>
        <Pared />
        <CursorSala activo={oculta === null || oculta === undefined} />
        {/* Al entrar, las luces de la sala se encienden poco a poco */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[6] bg-[#050404]"
          initial={{ opacity: 0.92 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />

        {/* La pared que recorremos */}
        <motion.div
          ref={pista}
          style={{ x }}
          className="relative h-full flex items-stretch w-max pr-[10vw]"
        >
          <Carril />
          {/* Entrada */}
          <div className="shrink-0 w-screen md:w-[70vw] h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
            <motion.p
              className="text-[10px] uppercase tracking-[0.45em]"
              style={{ color: GOLD }}
              initial={{ opacity: 0, letterSpacing: '0.8em' }}
              animate={{ opacity: 1, letterSpacing: '0.45em' }}
              transition={{
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4
              }}
            >
              Sala {sala.numero}
            </motion.p>
            <h1 className="mt-5 font-serif italic text-6xl sm:text-8xl !text-[#EDEAE3] leading-none overflow-hidden pb-2">
              <motion.span
                className="inline-block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.3,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6
                }}
              >
                {sala.titulo}
              </motion.span>
            </h1>
            <motion.p
              className="mt-7 max-w-md text-white/55 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {sala.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="mt-12 text-[10px] uppercase tracking-[0.35em] text-white/35 flex items-center gap-3"
            >
              Desplázate para recorrer la sala
              <motion.span
                aria-hidden
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                →
              </motion.span>
            </motion.p>
          </div>

          {alas.map((ala, a) => (
            <div key={ala.id} className="relative shrink-0 h-full flex items-stretch">
              <Banco x={x} className="left-[2vw]" />
              {/* Esculturas entre alas */}
              <Esculturas claves={ala.antes} x={x} />
              {/* Texto de pared de cada ala */}
              <div
                ref={(el) => (alaRefs.current[a] = el)}
                className="shrink-0 w-[78vw] sm:w-[380px] h-full flex flex-col justify-center px-8 sm:pl-16 sm:pr-10"
              >
                {alas.length > 1 && (
                  <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
                    Ala {ROMANOS[a]}
                  </p>
                )}
                <h2 className="mt-3 font-serif italic text-4xl sm:text-5xl !text-[#EDEAE3]">
                  {ala.label}
                </h2>
                <span className="block mt-5 w-10 h-px" style={{ background: GOLD }} />
                {ala.texto && (
                  <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-[30ch]">
                    {ala.texto}
                  </p>
                )}
                <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-white/30">
                  {String(ala.obras.length).padStart(2, '0')} OBRAS
                </p>
              </div>

              {ala.obras.map((o) => (
                <div
                  key={o.foto.src}
                  className="shrink-0 h-full px-[9vw] sm:px-[5vw] lg:px-[4.5vw]"
                >
                  <Cuadro
                    ref={(el) => (obraRefs.current[o.indice] = el)}
                    foto={o.foto}
                    numero={o.indice + 1}
                    serie={ala.serie}
                    oculto={oculta === o.indice}
                    onOpen={() => onOpen(o.indice)}
                    x={x}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Esculturas antes de la salida */}
          <Esculturas claves={sala.final} x={x} />

          {/* Salida */}
          <div className="shrink-0 w-[80vw] sm:w-[420px] h-full flex flex-col justify-center pl-10 sm:pl-20">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">Fin de la sala</p>
            <Link href={siguiente.href} className="group mt-4 block">
              <span
                className="block text-[10px] uppercase tracking-[0.3em]"
                style={{ color: GOLD }}
              >
                Siguiente
              </span>
              <span className="block mt-2 font-serif italic text-4xl sm:text-5xl text-[#EDEAE3] group-hover:text-[#C9A96E] transition-colors">
                {siguiente.titulo} →
              </span>
            </Link>
            <Link href="/galeria" className="mt-10 text-xs text-white/40 hover:text-white">
              ← Volver al recorrido
            </Link>
          </div>
        </motion.div>

        {/* Plano de la sala */}
        <nav
          aria-label="Plano de la sala"
          className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 w-[min(92vw,640px)]"
        >
          {alas.length > 1 && (
            <ul className="flex justify-between gap-2 mb-3">
              {alas.map((ala, i) => (
                <li key={ala.id}>
                  <button
                    type="button"
                    onClick={() => irAla(i)}
                    aria-current={activa === i ? 'true' : undefined}
                    className={`text-[10px] uppercase tracking-[0.25em] transition-colors ${
                      activa === i ? 'text-[#C9A96E]' : 'text-white/35 hover:text-white/80'
                    }`}
                  >
                    {ala.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="h-px bg-white/10">
            <motion.div className="h-px" style={{ width: progreso, background: GOLD }} />
          </div>
        </nav>
      </div>
    </section>
  );
}
