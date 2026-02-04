import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 max-w-3xl mx-auto text-center text-gray-300/80 parallax-layer" data-depth="0.06">
      <p className="mb-4">
        Reflexión final: la intersección entre creatividad y tecnología pide lentitud en la decisión
        y ceremonial en la ejecución. Preferir la profundidad sobre la prisa.
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Si te interesa hablar de proyectos o colaboración, escribe con intención—respondo con
        preguntas, propuestas y tiempo para conversar.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="mailto:hello@abreu.studio"
          className="px-4 py-2 rounded-md bg-[#D4AF37] text-black font-medium"
        >
          Contacto
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-white/10 text-white"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-6 text-sm text-white/50">© Sara Abreu — Diseño y sistemas</p>
    </footer>
  );
}
