import React from 'react';

const Step = ({ title, children, delay = 0 }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-none w-10 h-10 rounded-full bg-white/6 flex items-center justify-center text-[10px] font-mono text-white/90">{delay + 1}</div>
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-gray-300/80 text-sm mt-1">{children}</p>
    </div>
  </div>
);

export default function Process({ className = '', id }) {
  return (
    <section id={id || undefined} className={`mt-12 max-w-4xl mx-auto text-left ${className}`}>
      <h2 className="text-3xl font-serif text-white mb-4">Cómo trabajo</h2>
      <p className="text-gray-300/80 mb-6">Un proceso claro y iterativo que combina intuición, hipótesis y validación técnica.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <Step title="Escuchar y entender" delay={0}>
            Conversaciones para entender necesidades, contexto y métricas de éxito.
          </Step>
          <Step title="Hipótesis y estructura" delay={1}>
            Formulo objetivos, restricciones y un plan mínimo viable con entregables claros.
          </Step>
        </div>
        <div className="space-y-4">
          <Step title="Diseño y prototipo" delay={2}>
            Prototipos rápidos que prueban intención visual y flujos de usuario.
          </Step>
          <Step title="Construir, medir y aprender" delay={3}>
            Implementación técnica seguida de métricas y ajustes para cerrar el ciclo.
          </Step>
        </div>
      </div>
    </section>
  );
}
