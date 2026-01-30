import Link from 'next/link';
import HeroCanvas from '../components/HeroCanvas';
import Manifesto from '../components/Manifesto';
import SectionAI from '../components/SectionAI';
import SectionAutomation from '../components/SectionAutomation';
import SectionWeb from '../components/SectionWeb';
import Footer from '../components/Footer';
import Chapter from '../components/Chapter';

export default function Home() {
  return (
    <main
      id="content"
      role="main"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center p-8 hero-bg text-white tech-grid scanlines"
    >
      <HeroCanvas />
      <div className="max-w-4xl w-full text-center relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 tech-title">
          <span className="text-[color:var(--accent-warm)]">Abreu Studio</span>
          <span className="block text-white/90 mt-1 text-lg md:text-xl font-semibold">
            Diseño, Código y Visión Ética
          </span>
        </h1>
        <div className="mt-2 mb-4">
          <span className="inline-block font-mono text-xs text-gray-300/60 px-2 py-1 rounded-md bg-black/15 border border-white/6">
            React · Next.js · IA · Workflows
          </span>
        </div>
        <p className="text-md md:text-lg text-gray-300/80 mb-6">
          Proyecto personal con foco en soluciones digitales responsables — explora generador,
          automatizaciones y case studies.
        </p>

        <Chapter className="mt-6">
          <Manifesto />
        </Chapter>

        <div className="tile-grid grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <Link
            href="/generator"
            aria-label="Ir a Generador IA"
            role="button"
            className="w-full block px-5 py-4 rounded-lg bg-gradient-to-r from-transparent to-transparent/5 text-left border border-cyan-600/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400/40 interactive link-underline"
          >
            <div>
              <div className="font-semibold text-white">Generador IA</div>
              <div className="text-sm text-cyan-200/80">Controles, estilo y galería</div>
            </div>
          </Link>

          <Link
            href="/automation"
            aria-label="Ir a Automatizaciones"
            role="button"
            className="w-full block px-5 py-4 rounded-lg bg-gradient-to-r from-transparent to-transparent/5 text-left border border-cyan-600/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400/40 interactive link-underline"
          >
            <div>
              <div className="font-semibold text-white">Automatizaciones</div>
              <div className="text-sm text-cyan-200/80">Workflows y scripts</div>
            </div>
          </Link>

          <Link
            href="/sites"
            aria-label="Ver Sitios y Apps"
            role="button"
            className="w-full block px-5 py-4 rounded-lg bg-gradient-to-r from-transparent to-transparent/5 text-left border border-cyan-600/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400/60 interactive link-underline"
          >
            <div>
              <div className="font-semibold text-white">Sitios &amp; Apps</div>
              <div className="text-sm text-cyan-200/80">Proyectos web y case studies</div>
            </div>
          </Link>

          <Link
            href="/"
            aria-label="Estrategia y Consultoría"
            role="button"
            className="w-full block px-5 py-4 rounded-lg bg-gradient-to-r from-transparent to-transparent/5 text-left border border-cyan-600/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] interactive link-underline"
          >
            <div>
              <div className="font-semibold text-white">Estrategia &amp; Consultoría</div>
              <div className="text-sm text-cyan-200/80">Talleres y visión ética</div>
            </div>
          </Link>
        </div>
        <div className="mt-12">
          <div className="bg-white/3 rounded-lg p-6 md:p-8 mt-6 text-left shadow-sm backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white">¿Quieres colaborar?</h2>
            <p className="text-sm text-white/70 mt-2">
              Envíame un correo o conecta en LinkedIn para hablar de proyectos, talleres o
              consultoría.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@abreu.studio"
                className="inline-block px-4 py-2 rounded-md bg-[color:var(--accent-warm)] text-black font-medium btn-neon"
              >
                Contactar
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 rounded-md border border-white/10 text-white btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <Chapter className="mt-8" delay={0.08}>
          <SectionAI />
        </Chapter>
        <Chapter className="mt-8" delay={0.18}>
          <SectionAutomation />
        </Chapter>
        <Chapter className="mt-8" delay={0.28}>
          <SectionWeb />
        </Chapter>

        <Chapter className="mt-12" delay={0.38}>
          <Footer />
        </Chapter>
      </div>
    </main>
  );
}
