import React from 'react';

const Step = ({ title, children, delay = 0 }) => (
  <div className="flex gap-4 items-start group">
    <div className="flex-none w-12 h-12 rounded-full bg-gradient-to-br from-accent-gradient-from to-accent-gradient-to flex items-center justify-center text-sm font-mono text-black font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
      {delay + 1}
    </div>
    <div className="flex-1">
      <h4 className="text-white font-semibold text-lg group-hover:text-accent-gradient-to transition-colors duration-300">{title}</h4>
      <p className="text-gray-300/80 text-sm mt-1 leading-relaxed">{children}</p>
    </div>
  </div>
);

export default function Process({ className = '', id }) {
  return (
    <section id={id || undefined} className={`mt-12 max-w-4xl mx-auto text-left ${className}`}>
      <div className="glass rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-serif text-white mb-6 gradient-text">Cómo trabajo</h2>
        <p className="text-gray-300/80 mb-8 text-lg">Un proceso claro y iterativo que combina intuición, hipótesis y validación técnica.</p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Step title="Escuchar y entender" delay={0}>
              Conversaciones para entender necesidades, contexto y métricas de éxito.
            </Step>
            <Step title="Hipótesis y estructura" delay={1}>
              Formulo objetivos, restricciones y un plan mínimo viable con entregables claros.
            </Step>
          </div>
          <div className="space-y-6">
            <Step title="Diseño y prototipo" delay={2}>
              Prototipos rápidos que prueban intención visual y flujos de usuario.
            </Step>
            <Step title="Construir, medir y aprender" delay={3}>
              Implementación técnica seguida de métricas y ajustes para cerrar el ciclo.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}
