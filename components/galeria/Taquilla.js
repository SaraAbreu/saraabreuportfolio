import Link from 'next/link';
import { motion } from 'framer-motion';
import Pared, { FONDO_PARED, Foco, Lampara } from './Pared';

// Final del recorrido: cartel de "visitas privadas" para reservar una sesión.
export default function Taquilla({ instagram }) {
  return (
    <section
      className="relative overflow-hidden min-h-[78vh] flex items-center justify-center px-5 pt-[14vh] pb-[16vh]"
      style={{ background: FONDO_PARED }}
      aria-labelledby="taquilla-titulo"
    >
      <Pared alturaSuelo="20vh" />
      <div className="absolute inset-x-[20%] top-0 h-[75%]">
        <Foco intensidad={0.24} />
      </div>
      <Lampara className="absolute left-1/2 -translate-x-1/2 top-[3vh]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[min(92vw,620px)]"
        style={{ boxShadow: '0 50px 90px -35px rgba(0,0,0,0.95)' }}
      >
        <div
          className="relative px-7 sm:px-14 py-10 sm:py-14 text-center text-[#1b1712]"
          style={{
            backgroundColor: '#EFE8DA',
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#8a6a2e]">Visitas privadas</p>

          <h2 id="taquilla-titulo" className="mt-5 font-serif italic text-3xl sm:text-[2.6rem] leading-[1.15] !text-[#1b1712]">
            ¿Te imaginas colgado
            <br />
            en esta pared?
          </h2>

          <span aria-hidden className="block mx-auto mt-6 w-10 h-px bg-[#a8854d]" />

          <p className="mt-6 max-w-sm mx-auto text-sm leading-relaxed text-black/60">
            Sesiones de retrato a tu medida: en la calle, en el bosque o donde tu historia pida.
            Tú pones la mirada; yo, la luz.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] text-[#F3EBDD] transition-all duration-500 hover:gap-5"
              style={{
                background: 'linear-gradient(180deg, #2a2420, #14110f)',
                boxShadow: '0 12px 24px -12px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(201,169,110,0.6)'
              }}
            >
              Reservar una sesión
              <span aria-hidden className="text-[#C9A96E]">→</span>
            </Link>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#5a4520] border border-[#a8854d]/60 hover:bg-[#a8854d]/10 transition-colors"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @sa_draftstudio
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
