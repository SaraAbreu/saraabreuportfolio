import Head from 'next/head';
import Link from 'next/link';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto — Sara Abreu</title>
        <meta name="description" content="Contacta con Sara Abreu para proyectos de desarrollo web, automatizaciones e integraciones IA." />
      </Head>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Nav minimal */}
        <div className="border-b border-gray-200 px-6 sm:px-10 py-5 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight hover:text-gray-500 transition-colors">
            ← Sara Abreu
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 border-b border-gray-200">
          {/* Left */}
          <div className="px-6 sm:px-16 py-16 sm:py-28 border-b sm:border-b-0 sm:border-r border-gray-200 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">Contacto</p>
              <h1 className="font-serif text-5xl sm:text-6xl font-light leading-tight tracking-tight mb-8">
                Cuéntame
                <br />
                <em className="italic text-gray-400">tu proyecto.</em>
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed font-light max-w-xs">
                Sin formularios largos. Solo una conversación directa sobre lo que necesitas construir.
              </p>
            </div>
            <div className="mt-16 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-xs text-gray-500">Disponible para proyectos freelance · Remoto</span>
            </div>
          </div>

          {/* Right */}
          <div className="px-6 sm:px-16 py-16 sm:py-28 flex flex-col justify-center gap-10">
            <div>
              <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">Email</p>
              <a
                href="mailto:sarahernandez.online@gmail.com"
                className="font-serif text-2xl sm:text-3xl font-light hover:text-gray-500 transition-colors"
              >
                sarahernandez.online@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sara-abreu-hernandez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-light text-gray-700 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
              >
                sara-abreu-hernandez →
              </a>
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">GitHub</p>
              <a
                href="https://github.com/SaraAbreu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-light text-gray-700 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
              >
                github.com/SaraAbreu →
              </a>
            </div>

            <a
              href="mailto:sarahernandez.online@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-all duration-200 transform hover:-translate-y-0.5 w-fit mt-4"
            >
              Enviar mensaje
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
