import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GaleriaLayout, { GOLD } from '../../components/galeria/GaleriaLayout';
import { SALAS, ARTISTA, FRASE } from '../../data/galeria';

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function GaleriaHall() {
  const recorrido = [
    ...SALAS.map((s) => ({
      href: `/galeria/${s.slug}`,
      sala: `Sala ${s.numero}`,
      nombre: s.titulo
    })),
    { href: '/galeria/la-artista', sala: 'La artista', nombre: 'Sara Abreu' }
  ];

  return (
    <GaleriaLayout>
      {/* Hall de entrada — basado en el borrador */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 text-center">
        <motion.div variants={fade} initial="hidden" animate="visible">
          <Image
            src="/images/galeria/logo-estudio.webp"
            alt="Sara Abreu · Estudio de fotografía"
            width={553}
            height={484}
            priority
            className="w-[170px] sm:w-[220px] h-auto"
          />
        </motion.div>
        <motion.h1
          variants={fade}
          custom={1}
          initial="hidden"
          animate="visible"
          className="mt-10 font-serif italic text-3xl sm:text-5xl leading-tight max-w-3xl !text-[#EDEAE3]"
        >
          {FRASE}
        </motion.h1>

        <motion.div
          variants={fade}
          custom={2}
          initial="hidden"
          animate="visible"
          className="mt-14 w-full max-w-sm border-y border-white/10 py-6"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] mb-5" style={{ color: GOLD }}>
            Recorrido
          </p>
          <ul className="space-y-3">
            {recorrido.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex justify-between items-baseline text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>{r.sala}</span>
                  <span className="font-serif italic text-white/50 group-hover:text-[#C9A96E] transition-colors">
                    {r.nombre}
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
          className="mt-12 text-[10px] uppercase tracking-[0.35em] text-white/35 hover:text-white/70"
        >
          Desliza para entrar ↓
        </motion.a>
      </section>

      {/* Puertas a cada sala */}
      <section id="salas" className="max-w-7xl mx-auto px-6 sm:px-10 grid gap-6 md:grid-cols-3">
        {[
          ...SALAS.map((s) => ({
            ...s,
            href: `/galeria/${s.slug}`,
            portada: s.fotos[0],
            etiqueta: `Sala ${s.numero}`
          })),
          {
            href: '/galeria/la-artista',
            titulo: 'La artista',
            portada: ARTISTA.foto,
            etiqueta: 'Sala final'
          }
        ].map((s, i) => (
          <motion.div
            key={s.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <Link href={s.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                <Image
                  src={s.portada.src}
                  alt={s.portada.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-700"
                  placeholder="blur"
                  blurDataURL={s.portada.blurDataURL}
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {s.etiqueta}
                </span>
                <span className="font-serif italic text-xl group-hover:text-[#C9A96E] transition-colors">
                  {s.titulo}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </GaleriaLayout>
  );
}
