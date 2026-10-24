import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SALAS } from '../data/galeria';

// Franja oscura en la home: una pared de galería con tres obras colgadas
// a la misma línea de horizonte, cada una con su cartela.

const buscar = (titulo) => {
  for (const sala of SALAS) {
    const foto = sala.fotos.find((f) => f.titulo === titulo);
    if (foto) return { ...foto, sala: sala.titulo, numeroSala: sala.numero };
  }
  return null;
};

// Cambia los títulos para colgar otras obras (deben existir en data/galeria.js)
const obras = ['Desde arriba', 'Mirador', 'Viento'].map(buscar).filter(Boolean);

const totalObras = SALAS.reduce((n, s) => n + s.fotos.length, 0);

export default function OtraMirada() {
  return (
    <section id="fotografia" className="relative bg-[#0B0B0A] text-[#EDEAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-20 sm:pb-24">
        {/* Texto de sala */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#C9A96E]">
              La otra mirada
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight !text-[#EDEAE3]">
              También miro <br className="hidden sm:block" />
              <em>a través de la cámara</em>.
            </h2>
          </div>
          <div className="lg:justify-self-end lg:max-w-sm">
            <p className="text-sm text-white/55 leading-relaxed font-light">
              Retrato y paisaje en Tenerife. La misma atención al detalle con la que construyo una
              interfaz, aplicada a la luz y a las personas.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <Link
                href="/galeria"
                className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A96E]"
              >
                <span className="border-b border-[#C9A96E]/40 group-hover:border-[#C9A96E] pb-1 transition-colors">
                  Entrar a la galería
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">
                {SALAS.length} salas · {totalObras} obras
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pared */}
        <div className="mt-14 sm:mt-20 -mx-6 sm:mx-0 px-6 sm:px-0 flex items-end sm:justify-center gap-10 lg:gap-16 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {obras.map((obra, i) => {
            const horizontal = obra.width > obra.height;
            return (
              <motion.figure
                key={obra.src}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.2, duration: 1.2 }}
                className="group relative shrink-0 snap-center"
              >
                <Link
                  href="/galeria"
                  className={`relative block ${horizontal ? 'h-[200px] sm:h-[230px] lg:h-[260px]' : 'h-[260px] sm:h-[300px] lg:h-[340px]'} ring-1 ring-white/5`}
                  style={{ aspectRatio: `${obra.width} / ${obra.height}` }}
                  aria-label={`${obra.titulo} — ver en la galería`}
                >
                  <Image
                    src={obra.src}
                    alt={obra.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 70vw"
                    className="object-cover brightness-[0.85] group-hover:brightness-100 transition duration-700"
                    placeholder={obra.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={obra.blurDataURL}
                  />
                </Link>

                {/* Cartela */}
                <figcaption className="mt-5 flex items-baseline gap-3">
                  <span className="text-[10px] tabular-nums text-[#C9A96E]/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-serif italic text-sm text-white/80">{obra.titulo}</span>
                    <span className="block mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Sala {obra.numeroSala} · {obra.sala}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
