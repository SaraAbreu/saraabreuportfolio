import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SALAS } from '../../data/galeria';

// "La galería" — el ala nocturna del portfolio.
// Misma tipografía (Playfair + Inter) que el estudio; cambia la luz:
// fondo negro y dorado como versión nocturna del terracota.
export const GOLD = '#C9A96E';

export default function GaleriaLayout({ title, description, children }) {
  const { asPath } = useRouter();
  const fullTitle = title
    ? `${title} — Sara Abreu · Estudio de Fotografía`
    : 'Sara Abreu · Estudio de Fotografía';

  const links = [
    ...SALAS.map((s) => ({ href: `/galeria/${s.slug}`, label: `Sala ${s.numero}` })),
    { href: '/galeria/la-artista', label: 'La artista' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#EDEAE3] selection:bg-[#C9A96E]/30">
      <Head>
        <title>{fullTitle}</title>
        <meta
          name="description"
          content={
            description ||
            'Fotografía de retrato y paisaje en Tenerife. Estudio de fotografía de Sara Abreu.'
          }
        />
        <meta name="theme-color" content="#0B0B0A" />
        <meta property="og:title" content={fullTitle} />
      </Head>

      {/* Entrar en la sala: la luz baja */}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[60] bg-[#0B0B0A] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
      />

      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0B0B0A]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between gap-6">
          <Link href="/galeria" className="font-serif text-lg tracking-tight text-[#EDEAE3]">
            Sara Abreu<span style={{ color: GOLD }}>.</span>
            <span className="hidden sm:inline ml-3 text-[10px] font-sans uppercase tracking-[0.3em] text-white/40 align-middle">
              Estudio de fotografía
            </span>
          </Link>

          <div className="flex items-center gap-5 sm:gap-8 text-[11px] uppercase tracking-[0.2em]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`hidden md:inline transition-colors hover:text-white ${
                  asPath === l.href ? 'text-[#C9A96E]' : 'text-white/55'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-white/55 hover:text-white transition-colors normal-case tracking-normal text-xs"
            >
              ← Estudio web
            </Link>
          </div>
        </div>
      </nav>

      <main id="content" className="pt-24">
        {children}
      </main>

      <footer className="border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row gap-6 justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Sara Abreu · Estudio de fotografía · Tenerife</p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/sa_draftstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Desarrollo web y automatización →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
