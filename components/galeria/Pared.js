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

// Textura de pan de oro: ruido fino que rompe el degradado "de ordenador".
const GRANO =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.25  0 0 0 0 0.18  0 0 0 0 0.05  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>\")";

// Cada escalón de la moldura es un borde con un color por lado: así las esquinas
// quedan a inglete y la luz cae desde arriba (cara superior clara, inferior en sombra),
// igual que con el foco del techo de la sala.
function Escalon({ ancho, arriba, lados, abajo, children, style }) {
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderWidth: ancho,
        borderTopColor: arriba,
        borderLeftColor: lados[0],
        borderRightColor: lados[1],
        borderBottomColor: abajo,
        ...style
      }}
    >
      {children}
    </div>
  );
}

// Marco clásico de galería en oro viejo: canto, toro, escocia y junquillo,
// paspartú de algodón y fileteado dorado junto a la obra.
export function Marco({ children, className = '' }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        boxShadow: [
          '0 2px 3px rgba(0,0,0,0.6)', // contacto con la pared
          '0 28px 34px -16px rgba(0,0,0,0.85)', // sombra del foco, hacia abajo
          '0 70px 90px -50px rgba(0,0,0,0.9)'
        ].join(', ')
      }}
    >
      {/* Canto exterior */}
      <Escalon ancho="2px" arriba="#b8955a" lados={['#7a5c28', '#6c5022']} abajo="#36260b">
        {/* Toro, cresta: donde el foco pega de lleno */}
        <Escalon
          ancho="clamp(4px,0.5vw,7px)"
          arriba="#dcc07f"
          lados={['#a8843e', '#94722f']}
          abajo="#4f3712"
        >
          {/* Toro, caída hacia dentro */}
          <Escalon
            ancho="clamp(5px,0.6vw,8px)"
            arriba="#b38f4a"
            lados={['#8f6c2c', '#7e5f27']}
            abajo="#6b4c1a"
          >
            {/* Escocia: moldura cóncava, recibe la luz al revés */}
            <Escalon
              ancho="clamp(4px,0.5vw,7px)"
              arriba="#4f3913"
              lados={['#6e5221', '#634a1e']}
              abajo="#b8955a"
            >
              {/* Junquillo: el filo brillante que enmarca */}
              <Escalon ancho="2px" arriba="#ead08f" lados={['#b8954e', '#a3813f']} abajo="#3e2c0c">
                {/* Paspartú de algodón, con la sombra que proyecta la moldura */}
                <div
                  className="p-[clamp(12px,1.9vw,30px)]"
                  style={{
                    backgroundColor: '#ECE7DC',
                    boxShadow:
                      'inset 0 10px 14px -8px rgba(0,0,0,0.45), inset 6px 0 10px -8px rgba(0,0,0,0.3), inset -6px 0 10px -8px rgba(0,0,0,0.2), inset 0 -2px 3px rgba(255,255,255,0.5)'
                  }}
                >
                  {/* Fileteado dorado */}
                  <div
                    className="p-[1.5px]"
                    style={{
                      background: 'linear-gradient(180deg, #e9cf8c, #a07a34)',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.25)'
                    }}
                  >
                    {children}
                  </div>
                </div>
              </Escalon>
            </Escalon>
          </Escalon>
        </Escalon>
      </Escalon>

      {/* Pan de oro: grano + brillo cenital, solo sobre la moldura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `${GRANO}, linear-gradient(180deg, rgba(255,244,214,0.18), transparent 35%, transparent 70%, rgba(0,0,0,0.25))`,
          mixBlendMode: 'overlay',
          WebkitMaskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)',
          WebkitMaskClip: 'border-box, content-box',
          WebkitMaskComposite: 'xor',
          maskImage: 'linear-gradient(#000,#000), linear-gradient(#000,#000)',
          maskClip: 'border-box, content-box',
          maskComposite: 'exclude',
          padding:
            'calc(2px + clamp(4px,0.5vw,7px) + clamp(5px,0.6vw,8px) + clamp(4px,0.5vw,7px) + 2px)'
        }}
      />
    </div>
  );
}

// Tornillo de cabeza ranurada para fijar la placa.
function Tornillo({ className, giro }) {
  return (
    <span
      aria-hidden
      className={`absolute w-[5px] h-[5px] rounded-full ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #fff3cf 0%, #c9a45c 45%, #6b4c19 100%)',
        boxShadow: '0 0.5px 0 rgba(255,240,200,0.6), inset 0 -0.5px 0.5px rgba(0,0,0,0.5)'
      }}
    >
      <span
        className="absolute left-1/2 top-1/2 w-[4px] h-[0.8px] -translate-x-1/2 -translate-y-1/2 bg-[#4a3410]/80"
        style={{ transform: `translate(-50%,-50%) rotate(${giro}deg)` }}
      />
    </span>
  );
}

// Placa de latón: canto biselado, grosor, latón cepillado, tornillos y letra grabada.
export function Placa({ as: Tag = 'div', children, className = '', tornillos = true }) {
  return (
    <Tag
      className={`relative block p-[2px] ${className}`}
      style={{
        // Bisel: el canto brilla arriba-izquierda y se oscurece abajo-derecha
        background: 'linear-gradient(145deg, #f6e4ad 0%, #c9a45c 35%, #8a6526 70%, #5c4116 100%)',
        // Grosor de la chapa + sombra sobre el soporte
        boxShadow:
          '0 1px 0 #6b4c1b, 0 2px 0 #5a3f15, 0 3px 0 #47310f, 0 4px 1px rgba(0,0,0,0.5), 0 10px 16px -6px rgba(0,0,0,0.8)'
      }}
    >
      <span
        className="relative block overflow-hidden px-4 py-2.5 text-center"
        style={{
          backgroundImage: [
            // brillo especular en diagonal
            'linear-gradient(115deg, transparent 30%, rgba(255,250,225,0.35) 46%, transparent 58%)',
            // cepillado horizontal
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, rgba(0,0,0,0.05) 1px 2px)',
            // latón
            'linear-gradient(180deg, #dcc07e 0%, #c4a05a 45%, #b08b45 70%, #c9a862 100%)'
          ].join(', '),
          boxShadow:
            'inset 0 1px 0 rgba(255,248,220,0.7), inset 0 -1px 0 rgba(70,48,14,0.55), inset 1px 0 0 rgba(255,240,200,0.3), inset -1px 0 0 rgba(70,48,14,0.3)',
          color: '#35250c',
          textShadow: '0 1px 0 rgba(255,242,205,0.55), 0 -1px 0 rgba(60,40,10,0.35)'
        }}
      >
        {/* Filete grabado interior */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[4px]"
          style={{
            boxShadow: 'inset 0 0 0 0.5px rgba(70,48,14,0.45), 0 0.5px 0 rgba(255,240,200,0.4)'
          }}
        />
        {tornillos && (
          <>
            <Tornillo className="left-[4px] top-[4px]" giro={35} />
            <Tornillo className="right-[4px] top-[4px]" giro={-20} />
            <Tornillo className="left-[4px] bottom-[4px]" giro={70} />
            <Tornillo className="right-[4px] bottom-[4px]" giro={10} />
          </>
        )}
        <span className="relative block">{children}</span>
      </span>
    </Tag>
  );
}
