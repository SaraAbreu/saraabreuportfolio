import Link from 'next/link';
import Image from 'next/image';
import GaleriaLayout, { GOLD } from '../../components/galeria/GaleriaLayout';
import { ARTISTA } from '../../data/galeria';

export default function LaArtista() {
  const f = ARTISTA.foto;
  return (
    <GaleriaLayout
      title="La artista"
      description="Sara Abreu, fotógrafa y desarrolladora web en Tenerife."
    >
      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 grid gap-12 md:grid-cols-2 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
          <Image
            src={f.src}
            alt={f.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={f.blurDataURL}
          />
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
            La artista
          </p>
          <h1 className="mt-4 font-serif italic text-5xl sm:text-6xl !text-[#EDEAE3]">
            Sara Abreu
          </h1>
          <div className="mt-8 space-y-5 text-white/65 leading-relaxed">
            {ARTISTA.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs">
            <Link
              href="/contacto"
              className="px-5 py-3 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition-colors"
            >
              Reservar una sesión
            </Link>
            <a
              href={ARTISTA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              @sa_draftstudio
            </a>
          </div>

          {/* El puente hacia la otra rama */}
          <Link href="/" className="group mt-14 block border-t border-white/10 pt-6">
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40">
              La otra mitad
            </span>
            <span className="font-serif italic text-xl text-white/80 group-hover:text-[#C9A96E] transition-colors">
              También diseño webs y automatizo procesos →
            </span>
          </Link>
        </div>
      </section>
    </GaleriaLayout>
  );
}
