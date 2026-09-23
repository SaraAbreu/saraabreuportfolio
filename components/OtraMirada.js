import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SALAS } from '../data/galeria';

// Franja oscura en la home: la puerta del estudio web a la galería.
const destacadas = [SALAS[0]?.fotos[1], SALAS[1]?.fotos[1], SALAS[0]?.fotos[3]].filter(Boolean);

export default function OtraMirada() {
  return (
    <section id="fotografia" className="bg-[#0B0B0A] text-[#EDEAE3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28 grid gap-12 lg:grid-cols-[1fr_1.6fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-[#C9A96E]">
            La otra mirada
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight !text-[#EDEAE3]">
            También miro <em>a través de la cámara</em>.
          </h2>
          <p className="mt-6 text-sm text-white/55 leading-relaxed max-w-sm font-light">
            Retrato y paisaje en Tenerife. La misma atención al detalle con la que construyo una
            interfaz, aplicada a la luz y a las personas.
          </p>
          <Link
            href="/galeria"
            className="inline-block mt-8 text-xs font-medium px-5 py-3 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition-colors"
          >
            Entrar a la galería →
          </Link>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {destacadas.map((f, i) => (
            <motion.div
              key={f.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.8 }}
              className={i === 1 ? 'mt-8' : ''}
            >
              <Link
                href="/galeria"
                className="group block relative aspect-[3/4] overflow-hidden bg-white/5"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 33vw"
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-700"
                  placeholder="blur"
                  blurDataURL={f.blurDataURL}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
