import Link from 'next/link'
import HeroCanvas from '../components/HeroCanvas'

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white">
      <HeroCanvas />
      <div className="max-w-4xl w-full text-center relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
          <span className="text-[#D4AF37]">Abreu Studio</span>
          <span className="block text-white/90 mt-1 text-lg md:text-xl font-semibold">Creative Strategy &amp; Ethical Vision</span>
        </h1>
        <p className="text-md md:text-lg text-[#60A5FA]/90 mb-6">Bienvenido — explora las diferentes ramas de mi trabajo desde los botones abajo.</p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <Link href="/generator" className="w-full block px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="Ir a Generador IA" role="button">
            <div className="font-semibold text-white">Generador IA</div>
            <div className="text-sm text-white/60">Controles, estilo y galería</div>
          </Link>

          <Link href="/automation" className="w-full block px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#60A5FA]" aria-label="Ir a Automatizaciones" role="button">
            <div className="font-semibold text-white">Automatizaciones</div>
            <div className="text-sm text-white/60">Workflows y scripts</div>
          </Link>

          <Link href="/" className="w-full block px-5 py-4 rounded-lg bg-gradient-to-r from-[#111827] to-[#0b1220] hover:from-[#0b1220] hover:to-[#111827] transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="Ver Sitios y Apps" role="button">
            <div className="font-semibold text-white">Sitios &amp; Apps</div>
            <div className="text-sm text-white/60">Proyectos web y case studies</div>
          </Link>

          <Link href="/" className="w-full block px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="Estrategia y Consultoría" role="button">
            <div className="font-semibold text-white">Estrategia &amp; Consultoría</div>
            <div className="text-sm text-white/60">Talleres y visión ética</div>
          </Link>
        </div>
        <div className="mt-12">
          <div className="bg-white/3 rounded-lg p-6 md:p-8 mt-6 text-left">
            <h2 className="text-lg font-semibold text-white">¿Quieres colaborar?</h2>
            <p className="text-sm text-white/70 mt-2">Envíame un correo o conecta en LinkedIn para hablar de proyectos, talleres o consultoría.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@abreu.studio" className="inline-block px-4 py-2 rounded-md bg-[#D4AF37] text-black font-medium">Contactar</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-md border border-white/10 text-white">LinkedIn</a>
            </div>
          </div>

          <footer className="mt-6 text-sm text-white/60">Abreu Studio — demo interactiva.</footer>
        </div>
      </div>
    </main>
  )
}
