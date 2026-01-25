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

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Link href="/generator" className="px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="Ir a Generador IA" role="button">
            <div className="font-semibold text-white">Generador IA</div>
            <div className="text-sm text-white/60">Controles, estilo y galería</div>
          </Link>

          <Link href="/automation" className="px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#60A5FA]" aria-label="Ir a Automatizaciones" role="button">
            <div className="font-semibold text-white">Automatizaciones</div>
            <div className="text-sm text-white/60">Workflows y scripts</div>
          </Link>

          <Link href="/" className="px-5 py-4 rounded-lg bg-gradient-to-r from-[#111827] to-[#0b1220] hover:from-[#0b1220] hover:to-[#111827] transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="Ver Sitios y Apps" role="button">
            <div className="font-semibold text-white">Sitios &amp; Apps</div>
            <div className="text-sm text-white/60">Proyectos web y case studies</div>
          </Link>

          <Link href="/" className="px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 transition text-left border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]" aria-label="Estrategia y Consultoría" role="button">
            <div className="font-semibold text-white">Estrategia &amp; Consultoría</div>
            <div className="text-sm text-white/60">Talleres y visión ética</div>
          </Link>
        </div>

        <footer className="mt-12 text-sm text-gray-300">Abreu Studio — demo interactiva.</footer>
      </div>
    </main>
  )
}
