import React from 'react';

export default function SectionAI() {
  return (
    <section className="mt-12 max-w-5xl mx-auto text-left">
      <h3 className="text-2xl font-serif text-white mb-4">
        Imagen Generada con IA — Dirección artística
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list">
        <figure
          role="listitem"
          className="card interactive bg-gradient-to-br from-black/30 to-white/3 rounded-lg p-6 flex items-end h-40"
          tabIndex={0}
          aria-label="Serie Susurros en gris"
        >
          <figcaption className="text-sm text-gray-300">
            Serie — Susurros en gris: intención sobre textura y silencio.
          </figcaption>
        </figure>
        <figure
          role="listitem"
          className="card interactive bg-gradient-to-br from-black/30 to-white/3 rounded-lg p-6 flex items-end h-40"
          tabIndex={0}
          aria-label="Estudio Rostros abstractos"
        >
          <figcaption className="text-sm text-gray-300">
            Estudio — Rostros abstractos: emoción contenida, economía de gesto.
          </figcaption>
        </figure>
        <figure
          role="listitem"
          className="card interactive bg-gradient-to-br from-black/30 to-white/3 rounded-lg p-6 flex items-end h-40"
          tabIndex={0}
          aria-label="Composición Paisajes sintéticos"
        >
          <figcaption className="text-sm text-gray-300">
            Composición — Paisajes sintéticos: escala, calma y tensión medida.
          </figcaption>
        </figure>
      </div>

      <div className="mt-4 text-gray-300/80 text-sm leading-relaxed">
        <p className="mb-2">
          Proceso: cada pieza nace de una intención clara —paleta, ritmo, y decisión tipográfica—;
          la IA genera opciones que yo curio y refino hasta que la imagen funciona como objeto
          editorial.
        </p>
        <p className="mb-2">
          Criterios: balance tonal, control de artefactos, consistencia de narrativa visual. No es
          búsqueda de lo espectacular, sino de la pieza que respira correctamente dentro del
          conjunto.
        </p>
      </div>
    </section>
  );
}
