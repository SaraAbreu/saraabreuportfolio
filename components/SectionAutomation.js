import React from 'react';

export default function SectionAutomation() {
  return (
    <section className="mt-12 max-w-5xl mx-auto text-left">
      <h3 className="text-2xl font-serif text-white mb-4">
        Automatización — Sistemas con intención
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card interactive" tabIndex={0} aria-labelledby="auto-1">
          <h4 id="auto-1" className="font-semibold text-white">
            Cadencia de publicación automatizada
          </h4>
          <p className="text-gray-300/80 text-sm mt-2">
            Diseñé un flujo que transforma, valida y publica contenido con revisiones humanas
            integradas. Resultado: coherencia editorial y menos fricción operativa.
          </p>
        </article>

        <article className="card interactive" tabIndex={0} aria-labelledby="auto-2">
          <h4 id="auto-2" className="font-semibold text-white">
            Pipeline de imágenes
          </h4>
          <p className="text-gray-300/80 text-sm mt-2">
            Un pipeline que respeta metadatos, versiones y trazabilidad: la automatización toma
            decisiones repetibles sin borrar el control humano donde importa.
          </p>
        </article>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <svg width="220" height="80" viewBox="0 0 220 80" className="opacity-70">
          <rect x="2" y="10" width="60" height="44" rx="6" fill="#111827" stroke="#374151" />
          <rect x="80" y="20" width="60" height="34" rx="6" fill="#111827" stroke="#374151" />
          <rect x="158" y="8" width="60" height="56" rx="6" fill="#111827" stroke="#374151" />
          <path d="M62 32h16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
          <path d="M140 40h16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
