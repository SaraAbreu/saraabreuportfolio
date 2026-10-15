import { forwardRef, useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform, useMotionTemplate } from 'framer-motion';
import { Marco } from './Pared';
import { useLuz } from './luz';

export const SIZES_OBRA = '(min-width: 768px) 45vw, 80vw';

// Vetas de mármol: ruido turbulento convertido en líneas grises finas.
// Vetas de mármol de Carrara: dos capas de ruido turbulento recortadas en líneas finas.
const VETAS = [
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='v7'><feTurbulence type='fractalNoise' baseFrequency='0.006 0.022' numOctaves='5' seed='7' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.4  0 0 0 0 0.4  0 0 0 0 0.4  1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0 0.5 0 0 0 0 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23v7)'/></svg>\")",
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='v3'><feTurbulence type='fractalNoise' baseFrequency='0.02 0.05' numOctaves='4' seed='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0 0 0.28 0 0 0 0 0 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23v3)'/></svg>\")"
].join(', ');

// Motas de polvo flotando en el haz de luz (posiciones fijas para que el SSR coincida).
const MOTAS = [
  { l: 34, t: 30, d: 9, s: 1.5 },
  { l: 58, t: 55, d: 12, s: 1 },
  { l: 46, t: 72, d: 10, s: 2 },
  { l: 63, t: 20, d: 14, s: 1 },
  { l: 40, t: 48, d: 11, s: 1.5 },
  { l: 52, t: 85, d: 13, s: 1 }
];

// Foco de carril orientado hacia la obra.
export function Foco3D({ luz }) {
  const lente = useTransform(luz, (l) => 0.15 + 0.85 * l);
  return (
    <div
      aria-hidden
      className="absolute left-1/2 -translate-x-1/2 top-[calc(10vh+5px)] flex flex-col items-center z-[2]"
    >
      <span className="block w-[3px] h-3 bg-[#1d1a17]" />
      <span
        className="relative block w-5 h-8 rounded-[3px] origin-top"
        style={{
          transform: 'perspective(80px) rotateX(-28deg)',
          background: 'linear-gradient(90deg, #121010, #34302c 45%, #1a1716)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset'
        }}
      >
        <motion.span
          className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-4 h-[5px] rounded-full"
          style={{
            opacity: lente,
            background: 'radial-gradient(ellipse, #fff6df 0%, #ffd99a 50%, transparent 75%)',
            boxShadow: '0 0 14px 4px rgba(255,214,150,0.55)'
          }}
        />
      </span>
    </div>
  );
}

// Haz + baño de luz en la pared + charco de luz en el suelo.
export function Iluminacion({ luz, haz = true, ancho = '120%' }) {
  const lavado = useTransform(luz, (l) => 0.12 + 0.88 * l);
  const rayo = useTransform(luz, (l) => 0.75 * l);
  const charco = useTransform(luz, (l) => 0.9 * l);
  return (
    <>
      {/* Baño cálido sobre la pared, más intenso arriba (el foco está encima) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[8vh] bottom-[12vh]"
        style={{
          width: ancho,
          opacity: lavado,
          background:
            'radial-gradient(ellipse 50% 46% at 50% 40%, rgba(255,226,182,0.20), rgba(255,226,182,0.07) 55%, transparent 75%)'
        }}
      />
      {haz && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[calc(10vh+38px)] w-[70%] h-[38vh]"
          style={{
            opacity: rayo,
            background:
              'conic-gradient(from 160deg at 50% 0%, transparent 0deg, rgba(255,232,190,0.15) 13deg, rgba(255,232,190,0.17) 20deg, rgba(255,232,190,0.15) 27deg, transparent 40deg, transparent 360deg)',
            WebkitMaskImage:
              'linear-gradient(180deg, #000 0%, rgba(0,0,0,0.6) 55%, transparent 95%)',
            maskImage: 'linear-gradient(180deg, #000 0%, rgba(0,0,0,0.6) 55%, transparent 95%)',
            mixBlendMode: 'screen'
          }}
        >
          {MOTAS.map((m, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-[#fff1d0]"
              style={{ left: `${m.l}%`, top: `${m.t}%`, width: m.s, height: m.s }}
              animate={{ y: [0, -40, 0], x: [0, 8, 0], opacity: [0, 0.9, 0] }}
              transition={{ duration: m.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.3 }}
            />
          ))}
        </motion.div>
      )}
      {/* Reflejo en el suelo pulido */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[5vh] w-[110%] h-[8vh]"
        style={{
          opacity: charco,
          background:
            'radial-gradient(ellipse 50% 50% at 50% 30%, rgba(255,222,170,0.13), transparent 70%)'
        }}
      />
    </>
  );
}

// Una obra colgada: luz por proximidad, marco clásico, cristal de museo y cartela.
// El ref apunta a la caja de la foto (para que la inmersión salga exactamente de ahí).
const Cuadro = forwardRef(function Cuadro({ foto, numero, serie, onOpen, oculto, x }, ref) {
  const fig = useRef(null);
  const { luz, desvio } = useLuz(fig, x);

  const brillo = useTransform(luz, (l) => 0.5 + 0.5 * l);
  const saturacion = useTransform(luz, (l) => 0.65 + 0.35 * l);
  const filtro = useMotionTemplate`brightness(${brillo}) saturate(${saturacion})`;
  const brilloCartela = useTransform(luz, (l) => `brightness(${0.45 + 0.55 * l})`);
  // El reflejo del cristal se desliza según pasas por delante
  const reflejo = useTransform(desvio, (d) => `${50 + d * 140}% 0%`);
  const apaisada = foto.width > foto.height * 1.15;

  return (
    <figure ref={fig} className="relative shrink-0 h-full sm:mr-[164px]">
      <Iluminacion luz={luz} />
      <Foco3D luz={luz} />

      {/* Línea de colgado: todas las obras centradas a la misma altura, como en sala */}
      <div className="relative h-full flex items-center pt-[12vh] pb-[15vh]">
        <div className="relative">
          <motion.button
            type="button"
            onClick={onOpen}
            data-cursor="ver"
            aria-label={`Adentrarse en «${foto.titulo}»`}
            className="group relative block text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-8 focus-visible:ring-offset-transparent"
            style={{ filter: filtro }}
            whileHover={{ y: -4, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          >
            <Marco>
              <div
                ref={ref}
                className={`relative overflow-hidden bg-black ${
                  apaisada
                    ? 'w-[min(70vw,440px)] md:w-[min(38vw,580px)]'
                    : 'h-[min(38vh,360px)] md:h-[min(42vh,450px)]'
                }`}
                style={{
                  aspectRatio: `${foto.width} / ${foto.height}`,
                  visibility: oculto ? 'hidden' : 'visible'
                }}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes={SIZES_OBRA}
                  placeholder={foto.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={foto.blurDataURL}
                  className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.025]"
                />
                {/* Cristal de museo: reflejo tenue que se mueve contigo */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(112deg, transparent 38%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.03) 49%, transparent 56%)',
                    backgroundSize: '320% 100%',
                    backgroundPosition: reflejo,
                    mixBlendMode: 'screen'
                  }}
                />
                {/* Viñeteado leve del cristal */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.25)' }}
                />
              </div>
            </Marco>
          </motion.button>

          {/* Cartela de mármol, a la altura de los ojos, junto al marco */}
          <motion.figcaption
            className="hidden sm:block absolute left-full top-1/2 ml-9 translate-y-[-12%] w-[134px] p-[2px]"
            style={{
              filter: brilloCartela,
              // Canto biselado: arista clara arriba, sombra abajo
              background: 'linear-gradient(160deg, #ffffff 0%, #e4e0d8 40%, #a9a397 100%)',
              // Grosor de la losa + sombra sobre la pared
              boxShadow:
                '0 1px 0 #b7b1a5, 0 2px 0 #a39d91, 0 3px 0 #8f897e, 0 4px 1px rgba(0,0,0,0.45), 0 14px 18px -10px rgba(0,0,0,0.9)'
            }}
          >
            <span
              className="relative block overflow-hidden px-3.5 py-3"
              style={{
                backgroundColor: '#efece6',
                backgroundImage: [
                  // brillo pulido
                  'linear-gradient(120deg, rgba(255,255,255,0.55) 0%, transparent 35%, transparent 70%, rgba(255,255,255,0.25) 100%)',
                  // vetas
                  VETAS,
                  // fondo de mármol de Carrara
                  'radial-gradient(ellipse at 20% 15%, #fbfaf7, #ebe7df 55%, #ddd8ce 100%)'
                ].join(', '),
                backgroundSize: 'auto, 260px 260px, 260px 260px, auto',
                backgroundPosition: `0 0, -${(numero * 47) % 110}px -${(numero * 83) % 120}px, -${(numero * 29) % 110}px -${(numero * 61) % 120}px, 0 0`,
                backgroundRepeat: 'no-repeat',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(120,112,98,0.45), inset 1px 0 0 rgba(255,255,255,0.6), inset -1px 0 0 rgba(120,112,98,0.3)',
                color: '#2a2722',
                // Letra grabada en la piedra
                textShadow: '0 1px 0 rgba(255,255,255,0.85), 0 -0.5px 0 rgba(0,0,0,0.25)'
              }}
            >
              <span className="relative block font-mono text-[8.5px] tracking-[0.22em] opacity-60">
                Nº {String(numero).padStart(2, '0')}
              </span>
              <span className="relative block mt-1 font-serif italic text-[14px] leading-[1.2]">
                {foto.titulo}
              </span>
              <span className="relative block mt-2 pt-1.5 border-t border-black/10 text-[8px] uppercase tracking-[0.18em] opacity-70">
                {serie}
              </span>
              <span className="relative block mt-0.5 text-[8.5px] opacity-60">
                {[foto.lugar, foto.anio].filter(Boolean).join(', ') || 'Fotografía digital'}
              </span>
            </span>
          </motion.figcaption>
        </div>
      </div>

      {/* En móvil la cartela va bajo el cuadro */}
      <span className="sm:hidden absolute left-0 right-0 bottom-[17vh] text-center">
        <span className="font-mono text-[9px] tracking-[0.2em] text-white/35">
          Nº {String(numero).padStart(2, '0')}
        </span>{' '}
        <span className="font-serif italic text-sm text-white/80">{foto.titulo}</span>
      </span>
    </figure>
  );
});

export default Cuadro;
