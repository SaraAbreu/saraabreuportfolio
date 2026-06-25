import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stackData = [
  { name: 'React / Next.js', width: 90 },
  { name: 'UX / UI Design', width: 85 },
  { name: 'Automatización', width: 80 },
  { name: 'Contenido visual', width: 80 },
  { name: 'AI integrations', width: 70 },
];

export default function AboutSection() {
  const [isClient, setIsClient] = useState(false);
  const [animateStack, setAnimateStack] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleViewportChange = (inView) => {
    if (inView) {
      setAnimateStack(true);
    }
  };

  if (!isClient) return null;

  return (
    <section id="about" className="border-t border-[#DDD8CE] grid grid-cols-1 sm:grid-cols-2">
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 sm:px-12 py-16 sm:py-24 border-b sm:border-b-0 sm:border-r border-[#DDD8CE]"
      >
        <blockquote className="font-serif text-2xl sm:text-4xl font-light leading-tight mb-8 tracking-tight text-[#1A1A18]">
          "El mejor diseño es el que funciona <em className="italic text-[#C4602A]">sin que nadie lo note.</em>"
        </blockquote>

        <p className="text-sm leading-relaxed text-[#6B6860] mb-6 font-light">
          Soy Sara, desarrolladora y estratega digital con base en Tenerife. Especializada en aplicaciones web modernas, plataformas multiplataforma (iOS, Android, Web) y sistemas backend escalables. He trabajado con startups, academias, plataformas de salud mental y proyectos propios — siempre priorizando arquitectura limpia, experiencia de usuario sólida y código mantenible.
        </p>

        <p className="text-sm text-[#6B6860] font-light flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0"></span>
          Disponible para proyectos freelance. Trabajo en remoto.
        </p>
      </motion.div>

      {/* Right: Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true, onViewportEnter: () => handleViewportChange(true) }}
        className="px-6 sm:px-12 py-16 sm:py-24"
      >
        <div className="text-xs font-medium tracking-widest text-[#C4602A] uppercase mb-8">
          Stack principal
        </div>

        <div className="space-y-6">
          {stackData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-sm text-[#1A1A18] font-light w-32 flex-shrink-0">
                {item.name}
              </span>
              <div className="flex-1 h-px bg-[#DDD8CE] relative">
                <div
                  className="absolute top-0 left-0 h-px bg-[#C4602A] transition-all duration-1000 ease-out"
                  style={{
                    width: animateStack ? `${item.width}%` : '0%',
                  }}
                ></div>
              </div>
              <span className="text-xs text-[#C4602A] w-8 text-right flex-shrink-0 font-medium">
                {item.width}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
