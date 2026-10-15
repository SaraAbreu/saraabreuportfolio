import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import GaleriaLayout, { GOLD } from '../../components/galeria/GaleriaLayout';
import Pared, { FONDO_PARED, Foco, Lampara, Marco, Placa } from '../../components/galeria/Pared';
import Escultura from '../../components/galeria/Escultura';
import Taquilla from '../../components/galeria/Taquilla';
import { SALAS, ARTISTA, FRASE, ESCULTURAS } from '../../data/galeria';

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const EASE = [0.65, 0, 0.2, 1];

const puertas = [
  ...SALAS.map((s) => ({
    href: `/galeria/${s.slug}`,
    etiqueta: `Sala ${s.numero}`,
    titulo: s.titulo,
    detalle: `${s.fotos.length} obras`,
    portada: s.fotos.find((f) => f.src === s.portada) || s.fotos[0]
  })),
  {
    href: '/galeria/la-artista',
    etiqueta: 'Sala final',
    titulo: 'La artista',
    detalle: 'Sara Abreu',
    portada: ARTISTA.portada || ARTISTA.foto
  }
];

export default function GaleriaHall() {
  const router = useRouter();
  const cajas = useRef([]);
  const [entrando, setEntrando] = useState(null); // { puerta, rect }

  // Cruzar la puerta: la portada crece hasta envolverte y entras en la sala.
  const entrar = (e, i) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const el = cajas.current[i];
    if (!el) return;
    e.preventDefault();
    setEntrando({ puerta: puertas[i], rect: el.getBoundingClientRect() });
  };

  return (
    <GaleriaLayout>
      {/* Vestíbulo */}
      <section
        className="relative -mt-24 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-[18vh] text-center overflow-hidden"
        style={{ background: FONDO_PARED }}
      >
        <Pared alturaSuelo="13vh" />
        <div className="absolute inset-x-[25%] top-0 h-[70vh]">
          <Foco intensidad={0.2} />
        </div>

        {/* Esculturas que flanquean la entrada */}
        {['nike', 'david'].map((k, i) =>
          ESCULTURAS[k] ? (
            <div
              key={k}
              className={`hidden lg:block absolute bottom-0 h-full ${
                i === 0 ? 'left-[4vw]' : 'right-[4vw]'
              }`}
            >
              <Escultura pieza={ESCULTURAS[k]} alto="min(46vh,460px)" suelo="13vh" />
            </div>
          ) : null
        )}

        <motion.div variants={fade} initial="hidden" animate="visible" className="relative">
          <Image
            src="/images/galeria/logo-estudio.webp"
            alt="Sara Abreu · Estudio de fotografía"
            width={553}
            height={484}
            priority
            className="w-[150px] sm:w-[200px] h-auto"
          />
        </motion.div>
        <motion.h1
          variants={fade}
          custom={1}
          initial="hidden"
          animate="visible"
          className="relative mt-10 font-serif italic text-3xl sm:text-5xl leading-tight max-w-3xl !text-[#EDEAE3]"
        >
          {FRASE}
        </motion.h1>

        {/* Directorio del museo */}
        <motion.div
          variants={fade}
          custom={2}
          initial="hidden"
          animate="visible"
          className="relative mt-14 w-full max-w-sm px-7 py-6 text-left"
          style={{
            background: 'linear-gradient(160deg, #1c1814, #100e0c)',
            boxShadow: 'inset 0 0 0 1px rgba(201,169,110,0.35), 0 30px 50px -30px rgba(0,0,0,0.9)'
          }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.4em] mb-5 text-center"
            style={{ color: GOLD }}
          >
            Directorio
          </p>
          <ul className="space-y-3">
            {puertas.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="group flex items-baseline gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <span className="shrink-0">{p.etiqueta}</span>
                  <span
                    aria-hidden
                    className="flex-1 border-b border-dotted border-white/15 translate-y-[-3px]"
                  />
                  <span className="shrink-0 font-serif italic text-white/55 group-hover:text-[#C9A96E] transition-colors">
                    {p.titulo}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.a
          href="#salas"
          variants={fade}
          custom={3}
          initial="hidden"
          animate="visible"
          className="relative mt-12 text-[10px] uppercase tracking-[0.35em] text-white/35 hover:text-white/70"
        >
          Desliza para entrar ↓
        </motion.a>
      </section>

      {/* Las puertas: cada sala cuelga como un cuadro */}
      <section
        id="salas"
        className="relative min-h-screen flex flex-col justify-center pt-24 pb-[22vh] overflow-hidden"
        style={{ background: FONDO_PARED }}
      >
        <Pared alturaSuelo="16vh" />

        <p className="relative text-center text-[10px] uppercase tracking-[0.45em] text-white/35">
          Elige una sala
        </p>

        <div className="relative mt-[17vh] max-w-6xl w-full mx-auto px-6 grid gap-x-16 gap-y-[22vh] md:grid-cols-3 justify-items-center">
          {puertas.map((p, i) => (
            <motion.div
              key={p.href}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
            >
              <div className="absolute inset-x-0 -top-[14vh] bottom-0">
                <Foco intensidad={0.2} />
              </div>
              <Lampara className="absolute left-1/2 -translate-x-1/2 -top-[10vh]" />

              <Link
                href={p.href}
                onClick={(e) => entrar(e, i)}
                className="group relative block focus:outline-none"
                aria-label={`${p.etiqueta}: ${p.titulo}`}
              >
                <Marco className="transition-transform duration-700 ease-out group-hover:-translate-y-1 group-focus-visible:ring-1 group-focus-visible:ring-[#C9A96E]">
                  <div
                    ref={(el) => (cajas.current[i] = el)}
                    className="relative aspect-[3/4] w-[min(60vw,250px)] md:w-[min(18vw,240px)] overflow-hidden bg-black/80"
                    style={{ visibility: entrando?.puerta.href === p.href ? 'hidden' : 'visible' }}
                  >
                    <Image
                      src={p.portada.src}
                      alt={p.portada.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 70vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      placeholder={p.portada.blurDataURL ? 'blur' : 'empty'}
                      blurDataURL={p.portada.blurDataURL}
                    />
                  </div>
                </Marco>

                {/* Placa de latón */}
                <Placa className="mt-7 mx-auto w-max min-w-[176px]">
                  <span className="block text-[9px] uppercase tracking-[0.35em] opacity-70">
                    {p.etiqueta}
                  </span>
                  <span className="block mt-1 font-serif italic text-xl leading-tight">
                    {p.titulo}
                  </span>
                  <span className="block mt-1 font-mono text-[9px] tracking-[0.15em] opacity-70">
                    {p.detalle}
                  </span>
                </Placa>
                <span className="mt-4 block text-center text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500">
                  Entrar →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Taquilla instagram={ARTISTA.instagram} />

      {/* Transición al cruzar la puerta */}
      {entrando && (
        <div className="fixed inset-0 z-[80] pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-[#050404]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute overflow-hidden"
            initial={{
              left: entrando.rect.left,
              top: entrando.rect.top,
              width: entrando.rect.width,
              height: entrando.rect.height
            }}
            animate={{ left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }}
            transition={{ duration: 0.9, ease: EASE }}
            onAnimationComplete={() => router.push(entrando.puerta.href)}
          >
            <Image
              src={entrando.puerta.portada.src}
              alt=""
              fill
              sizes="(min-width: 768px) 25vw, 70vw"
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-[#0B0B0A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.45 }}
            />
          </motion.div>
          <motion.p
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif italic text-5xl sm:text-7xl text-[#EDEAE3]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {entrando.puerta.titulo}
          </motion.p>
        </div>
      )}
    </GaleriaLayout>
  );
}
