import React from 'react';

export default function SectionWeb() {
  return (
    <section className="mt-12 max-w-5xl mx-auto text-left">
      <h3 className="text-2xl font-serif text-white mb-4">
        Creación Web — Experiencias con gramática
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="card interactive rounded-lg bg-gradient-to-br from-black/20 to-white/2 p-6"
          tabIndex={0}
          role="article"
          aria-labelledby="web-1"
        >
          <h4 id="web-1" className="font-semibold text-white">
            Proyecto — Casa estudio
          </h4>
          <p className="text-gray-300/80 text-sm mt-2">
            Estructura mínima, navegación por capas y ritmo tipográfico deliberado. Cada interacción
            está medida para reducir ruido y reforzar lectura.
          </p>
        </div>

        <div
          className="card interactive rounded-lg bg-gradient-to-br from-black/20 to-white/2 p-6"
          tabIndex={0}
          role="article"
          aria-labelledby="web-2"
        >
          <h4 id="web-2" className="font-semibold text-white">
            Mockups y prototipo
          </h4>
          <p className="text-gray-300/80 text-sm mt-2">
            Prototipos que prueban intención: microinteracciones que generan pausa, patrones que
            sostienen la narrativa y decisiones de UX que priorizan contenido.
          </p>
        </div>
      </div>
    </section>
  );
}
