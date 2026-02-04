import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 max-w-4xl mx-auto text-center parallax-layer" data-depth="0.06">
      <div className="glass-strong rounded-2xl p-8 md:p-10">
        <p className="mb-6 text-gray-300/80 text-lg leading-relaxed">
          Reflexión final: la intersección entre creatividad y tecnología pide lentitud en la decisión
          y ceremonial en la ejecución. Preferir la profundidad sobre la prisa.
        </p>
        <p className="text-sm text-gray-400 mt-4 mb-8">
          Si te interesa hablar de proyectos o colaboración, escribe con intención—respondo con
          preguntas, propuestas y tiempo para conversar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="mailto:hello@abreu.studio"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            ✉️ Contacto
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            💼 LinkedIn
          </a>
        </div>
        <p className="text-sm text-white/60">© Sara Abreu — Diseño y sistemas • 2024</p>
      </div>
    </footer>
  );
}
