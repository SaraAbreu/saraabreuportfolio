import { useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';
import { Foco3D, Iluminacion } from './Cuadro';
import { useLuz } from './luz';
import { Placa } from './Pared';

// Escultura sobre pedestal de mármol, con la misma luz de sala que las obras:
// el foco se enciende al acercarte, la sombra cae al suelo y la placa la identifica.
export default function Escultura({
  pieza,
  x,
  alto,
  suelo = '15vh',
  lampara = true,
  className = ''
}) {
  const ref = useRef(null);
  const { luz } = useLuz(ref, x);
  const filtro = useTransform(luz, (l) => `brightness(${0.4 + 0.6 * l})`);
  if (!pieza) return null;
  const busto = pieza.tipo === 'busto';
  const altura = alto || (busto ? 'min(24vh,240px)' : 'min(44vh,440px)');

  return (
    <figure
      ref={ref}
      className={`relative shrink-0 h-full flex flex-col items-center justify-end ${className}`}
      style={{ paddingBottom: `calc(${suelo} - 2.2vh)` }}
    >
      {lampara && (
        // El foco apunta al centro visual de la figura (no siempre coincide con su base)
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            transform: `translateX(calc(${((pieza.masa || 0) - (pieza.base || 0)) * (pieza.width / pieza.height)} * ${altura}))`
          }}
        >
          <Iluminacion luz={luz} ancho="170%" />
          <Foco3D luz={luz} />
        </div>
      )}

      <motion.div className="relative flex flex-col items-center" style={{ filter: filtro }}>
        {/* Figura */}
        <div
          className="relative z-[1]"
          style={{
            height: altura,
            aspectRatio: `${pieza.width} / ${pieza.height}`,
            // Desplaza la figura para que su apoyo quede en el eje del pedestal (y del foco)
            transform: `translateX(${-(pieza.base || 0) * 100}%)`
          }}
        >
          <Image
            src={pieza.src}
            alt={`${pieza.nombre}, ${pieza.autor}`}
            fill
            sizes="(min-width: 768px) 22vw, 50vw"
            className="object-contain object-bottom"
            style={{
              filter: 'drop-shadow(0 18px 18px rgba(0,0,0,0.55)) contrast(1.04)'
            }}
          />
        </div>

        {/* Pedestal (estatua) o columna (busto) */}
        {busto ? (
          <div className="relative -mt-[2px] flex flex-col items-center">
            {/* Capitel */}
            <span
              aria-hidden
              className="block h-[12px] w-[clamp(120px,11vw,160px)]"
              style={{
                background: 'linear-gradient(180deg, #ece6db, #b9b0a1)',
                boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
              }}
            />
            <span
              aria-hidden
              className="block h-[8px] w-[clamp(100px,9vw,132px)]"
              style={{
                background: 'linear-gradient(180deg, #d6cebf, #a39a8b)'
              }}
            />
            {/* Fuste acanalado */}
            <div
              className="relative w-[clamp(84px,7.5vw,110px)] h-[clamp(190px,30vh,300px)] flex items-center justify-center"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0 2px, rgba(255,255,255,0.10) 2px 4px, transparent 4px 11px), linear-gradient(90deg, #8f877b 0%, #d8d0c2 25%, #ebe4d8 48%, #c9c0b1 72%, #7c7468 100%)',
                boxShadow: 'inset 0 -14px 20px rgba(0,0,0,0.22)'
              }}
            >
              <div className="w-[118%] flex justify-center">
                <Placa as="figcaption" className="w-full">
                  <span className="block font-serif italic text-[13px] leading-tight">
                    {pieza.nombre}
                  </span>
                  <span className="block mt-0.5 text-[8px] uppercase tracking-[0.18em] opacity-75">
                    {pieza.autor}
                  </span>
                  <span className="block text-[8px] tracking-[0.1em] opacity-65">
                    {pieza.fecha}
                  </span>
                </Placa>
              </div>
            </div>
            {/* Basa */}
            <span
              aria-hidden
              className="block h-[8px] w-[clamp(100px,9vw,132px)]"
              style={{
                background: 'linear-gradient(180deg, #cfc7b8, #9d9486)'
              }}
            />
            <span
              aria-hidden
              className="block h-[14px] w-[clamp(124px,11.5vw,166px)]"
              style={{
                background: 'linear-gradient(180deg, #b3aa9b, #6f685d)'
              }}
            />
            <span
              aria-hidden
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[170%] h-6 rounded-[50%]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.65), transparent 70%)'
              }}
            />
          </div>
        ) : (
          <div className="relative -mt-[2px] flex flex-col items-center">
            <span
              aria-hidden
              className="block h-[10px] w-[clamp(150px,15vw,220px)]"
              style={{
                background: 'linear-gradient(180deg, #e9e3d8, #bdb4a5)',
                boxShadow: '0 2px 0 rgba(0,0,0,0.25)'
              }}
            />
            <div
              className="relative w-[clamp(130px,13vw,190px)] h-[clamp(110px,15vh,170px)] flex items-center justify-center"
              style={{
                background:
                  'radial-gradient(ellipse 60% 40% at 30% 20%, rgba(255,255,255,0.25), transparent 60%), linear-gradient(90deg, #8f877b 0%, #d8d0c2 22%, #e8e1d5 45%, #c9c0b1 70%, #7c7468 100%)',
                boxShadow: 'inset 0 -12px 18px rgba(0,0,0,0.25)'
              }}
            >
              <Placa as="figcaption" className="w-[86%]">
                <span className="block font-serif italic text-[13px] leading-tight">
                  {pieza.nombre}
                </span>
                <span className="block mt-0.5 text-[8px] uppercase tracking-[0.18em] opacity-75">
                  {pieza.autor}
                </span>
                <span className="block text-[8px] tracking-[0.1em] opacity-65">{pieza.fecha}</span>
              </Placa>
            </div>
            <span
              aria-hidden
              className="block h-[12px] w-[clamp(150px,15vw,215px)]"
              style={{
                background: 'linear-gradient(180deg, #b3aa9b, #6f685d)'
              }}
            />
            <span
              aria-hidden
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[140%] h-6 rounded-[50%]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.65), transparent 70%)'
              }}
            />
          </div>
        )}
      </motion.div>
    </figure>
  );
}
