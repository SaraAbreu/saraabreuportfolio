// Pared del museo: textura, luz ambiente y suelo con rodapié.
// Se usa en el hall y en las salas para que todo el recorrido se sienta el mismo edificio.

// Ruido muy suave — SVG inline, sin peticiones externas.
const RUIDO =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export const FONDO_PARED = '#16130f';

export default function Pared({ suelo = true, alturaSuelo = '15vh' }) {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `${RUIDO}, radial-gradient(ellipse 120% 80% at 50% 30%, #221d18 0%, #15120f 60%, #0d0b09 100%)`
        }}
      />
      {suelo && (
        <div aria-hidden className="absolute inset-x-0 bottom-0" style={{ height: alturaSuelo }}>
          <div className="h-[6px] bg-[#0f0d0b] border-t border-white/[0.06]" />
          <div
            className="h-full"
            style={{ background: 'linear-gradient(to bottom, #0e0c0a, #070606 70%)' }}
          />
        </div>
      )}
    </>
  );
}

// Foco del techo: lámpara + cono de luz cálida sobre la pared.
export function Foco({ intensidad = 0.22, className = '' }) {
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-x-[45%] top-0 bottom-0 ${className}`}
        style={{
          background: `radial-gradient(ellipse 55% 70% at 50% 18%, rgba(255,232,196,${intensidad}), rgba(255,232,196,${
            intensidad / 3
          }) 45%, transparent 72%)`,
          maskImage: 'linear-gradient(to bottom, transparent, #000 22%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 22%)'
        }}
      />
    </>
  );
}

export function Lampara({ className = '' }) {
  // Foco de carril colgado: vástago, cuerpo orientable y lente encendida.
  return (
    <div aria-hidden className={`flex flex-col items-center ${className}`}>
      <span className="block w-px h-[5vh] bg-white/10" />
      <span
        className="relative block w-5 h-8 rounded-[3px] origin-top"
        style={{
          transform: 'perspective(80px) rotateX(-28deg)',
          background: 'linear-gradient(90deg, #121010, #34302c 45%, #1a1716)'
        }}
      >
        <span
          className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-4 h-[5px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, #fff6df 0%, #ffd99a 50%, transparent 75%)',
            boxShadow: '0 0 14px 4px rgba(255,214,150,0.55)'
          }}
        />
      </span>
    </div>
  );
}

// Marco de galería contemporánea: madera negra fina y paspartú de algodón.
export function Marco({ children, className = '' }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        padding: 'clamp(5px,0.55vw,8px)',
        background: 'linear-gradient(180deg, #2a2724 0%, #121110 40%, #0b0a09 100%)',
        boxShadow: [
          'inset 0 1px 0 rgba(255,255,255,0.08)', // canto superior que recibe la luz
          '0 2px 3px rgba(0,0,0,0.6)', // contacto con la pared
          '0 28px 34px -16px rgba(0,0,0,0.85)', // sombra del foco
          '0 70px 90px -50px rgba(0,0,0,0.9)'
        ].join(', ')
      }}
    >
      <div
        className="p-[clamp(10px,1.4vw,22px)]"
        style={{
          backgroundColor: '#E9E5DC',
          boxShadow: 'inset 0 6px 10px -6px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(0,0,0,0.15)'
        }}
      >
        <div style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.12)' }}>{children}</div>
      </div>
    </div>
  );
}

// Rótulo de sala: texto sobre la pared, sin placa.
export function Placa({ as: Tag = 'div', children, className = '' }) {
  return (
    <Tag className={`relative block text-center text-[#EDEAE3] ${className}`}>
      <span className="relative block px-2 py-1">{children}</span>
    </Tag>
  );
}
