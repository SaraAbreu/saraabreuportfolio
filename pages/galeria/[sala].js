import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GaleriaLayout, { GOLD } from '../../components/galeria/GaleriaLayout';
import Visor from '../../components/galeria/Visor';
import { SALAS, getSala } from '../../data/galeria';

export default function Sala({ sala, siguiente }) {
  const [abierta, setAbierta] = useState(null);

  return (
    <GaleriaLayout title={`Sala ${sala.numero} · ${sala.titulo}`} description={sala.intro}>
      <header className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-14">
        <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
          Sala {sala.numero}
        </p>
        <h1 className="mt-4 font-serif italic text-5xl sm:text-7xl !text-[#EDEAE3]">
          {sala.titulo}
        </h1>
        <p className="mt-5 text-white/50 max-w-md">{sala.intro}</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 columns-1 sm:columns-2 lg:columns-3 gap-6">
        {sala.fotos.map((f, i) => (
          <motion.button
            key={f.src}
            type="button"
            onClick={() => setAbierta(i)}
            aria-label={`Ampliar: ${f.alt}`}
            className="block w-full mb-6 break-inside-avoid group overflow-hidden bg-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
          >
            <Image
              src={f.src}
              alt={f.alt}
              width={f.width}
              height={f.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={f.blurDataURL}
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.button>
        ))}
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-16 flex justify-between items-baseline border-t border-white/10 pt-8">
        <Link href="/galeria" className="text-xs text-white/50 hover:text-white">
          ← Recorrido
        </Link>
        <Link href={siguiente.href} className="group text-right">
          <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40">
            Siguiente sala
          </span>
          <span className="font-serif italic text-2xl group-hover:text-[#C9A96E] transition-colors">
            {siguiente.titulo} →
          </span>
        </Link>
      </div>

      <Visor
        fotos={sala.fotos}
        index={abierta}
        onClose={() => setAbierta(null)}
        onChange={setAbierta}
      />
    </GaleriaLayout>
  );
}

export function getStaticPaths() {
  return { paths: SALAS.map((s) => ({ params: { sala: s.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const sala = getSala(params.sala);
  const i = SALAS.indexOf(sala);
  const next = SALAS[i + 1];
  const siguiente = next
    ? { href: `/galeria/${next.slug}`, titulo: next.titulo }
    : { href: '/galeria/la-artista', titulo: 'La artista' };
  return { props: { sala, siguiente } };
}
