import Link from 'next/link';
import { motion } from 'framer-motion';
import Pared, { FONDO_PARED, Foco, Lampara } from './Pared';

// Poste de latón con cordón de terciopelo — el clásico separador de museo.
function Cordon({ espejo = false }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 260 220"
      className={`hidden md:block absolute bottom-[7vh] w-[min(22vw,300px)] h-auto ${
        espejo ? 'right-[calc(50%+min(25vw,330px))] -scale-x-100' : 'left-[calc(50%+min(25vw,330px))]'
      }`}
    >
      <defs>
        <linearGradient id="laton" x1="0" x2="1">
          <stop offset="0" stopColor="#6b4c18" />
          <stop offset="0.35" stopColor="#f3dc9a" />
          <stop offset="0.6" stopColor="#c39a45" />
          <stop offset="1" stopColor="#5a3f14" />
        </linearGradient>
        <linearGradient id="terciopelo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a3162a" />
          <stop offset="0.5" stopColor="#6e0c1b" />
          <stop offset="1" stopColor="#3d0610" />
        </linearGradient>
        <radialGradient id="sombraPoste" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* cordón que viene de la tarjeta */}
      <path d="M0 64 C 60 150, 170 150, 214 58" fill="none" stroke="url(#terciopelo)" strokeWidth="9" strokeLinecap="round" />
      <path d="M0 62 C 60 146, 170 146, 214 56" fill="none" stroke="rgba(255,120,140,0.25)" strokeWidth="2" />
      {/* poste */}
      <ellipse cx="220" cy="208" rx="38" ry="8" fill="url(#sombraPoste)" />
      <rect x="214" y="50" width="12" height="148" rx="3" fill="url(#laton)" />
      <ellipse cx="220" cy="200" rx="26" ry="7" fill="url(#laton)" />
      <rect x="196" y="192" width="48" height="8" rx="3" fill="url(#laton)" />
      <circle cx="220" cy="44" r="13" fill="url(#laton)" />
      <circle cx="216" cy="40" r="4" fill="#fff4cf" opacity="0.7" />
    </svg>
  );
}

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

      <Cordon />
      <Cordon espejo />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[min(92vw,620px)] p-[6px]"
        style={{
          background:
            'linear-gradient(135deg, #5c4116 0%, #b8913f 14%, #f1d995 26%, #c39a45 38%, #7d5a1f 50%, #d9b866 64%, #f6e3a8 74%, #a37a30 86%, #5a3f14 100%)',
          boxShadow: '0 50px 90px -35px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,236,190,0.4)'
        }}
      >
        <div
          className="relative px-7 sm:px-14 py-10 sm:py-14 text-center text-[#1b1712]"
          style={{
            backgroundColor: '#EFE8DA',
            backgroundImage:
              'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.7), transparent 60%), repeating-linear-gradient(0deg, rgba(120,100,70,0.04) 0 1px, transparent 1px 3px)',
            boxShadow: 'inset 0 0 0 1px rgba(140,105,45,0.5), inset 0 0 0 7px #EFE8DA, inset 0 0 0 8px rgba(140,105,45,0.35)'
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#8a6a2e]">Visitas privadas</p>

          <h2 id="taquilla-titulo" className="mt-5 font-serif italic text-3xl sm:text-[2.6rem] leading-[1.15] !text-[#1b1712]">
            ¿Te imaginas colgado
            <br />
            en esta pared?
          </h2>

          {/* Ornamento */}
          <div aria-hidden className="mt-6 flex items-center justify-center gap-3 text-[#a8854d]">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#a8854d]" />
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
            </svg>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#a8854d]" />
          </div>

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
