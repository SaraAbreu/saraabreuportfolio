import Link from 'next/link'
import HeroCanvas from '../components/HeroCanvas'

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center p-8 hero-bg">
      <HeroCanvas />
      <div className="max-w-4xl w-full text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">Portafolio — Web + IA</h1>
        <p className="text-lg text-gray-200 mb-8">Combino diseño web, automatizaciones y arte digital generado con IA. Explora demos interactivos abajo.</p>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/generator" className="card hover:shadow-lg transition">Generador IA<br/><span className="text-sm text-gray-300">Controles y galería</span></Link>
          <Link href="/automation" className="card hover:shadow-lg transition">Automatizaciones<br/><span className="text-sm text-gray-300">Simula workflows</span></Link>
          <a className="card hover:shadow-lg transition" href="#">Sitios & Apps<br/><span className="text-sm text-gray-300">Previews y notas</span></a>
        </div>

        <footer className="mt-12 text-sm text-gray-300">MVP demo — creado para mostrar tu workflow y estilo.</footer>
      </div>
    </main>
  )
}
