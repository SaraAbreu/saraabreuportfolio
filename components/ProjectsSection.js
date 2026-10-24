import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 'qubia',
    title: 'Qubia',
    type: 'Producto · Plataforma SaaS',
    role: 'Producto + full stack',
    status: 'Live',
    pitch: 'Plataforma con 6 productos de IA para negocios: contenido para redes, CRM y atención de reservas, propiedades y huéspedes 24/7.',
    techs: ['Next.js', 'LLMs', 'n8n', 'SaaS'],
    live: 'https://qubia.es',
    image: '/images/projects/qubia.png',
  },
  {
    id: 'qubia-craft',
    title: 'Qubia Craft',
    type: 'Producto · Contenido con IA',
    role: 'Producto + full stack',
    status: 'Live',
    pitch: 'Sube una foto y la IA escribe el texto con la voz de tu marca, la encuadra para Instagram y la publica o programa.',
    techs: ['Next.js', 'Grok', 'n8n', 'Meta Graph API'],
    live: 'https://q-craft.qubia.es',
    image: '/images/projects/qubia-craft.png',
  },
  {
    id: 'agora',
    title: 'Ágora Mujeres',
    type: 'Plataforma · App móvil',
    role: 'Diseño + full stack',
    status: 'Live',
    pitch: 'App de bienestar emocional para mujeres con chat IA empático, diario y soporte en crisis. iOS, Android y Web.',
    techs: ['React Native', 'Expo', 'FastAPI', 'OpenAI', 'MongoDB', 'Stripe'],
    live: 'https://agoramujeres.syntexia-solutions.es/',
    image: '/images/projects/agora.png',
  },
  {
    id: 'bedj',
    title: 'BE DJ School',
    type: 'Web · Academia',
    role: 'UX/UI + frontend',
    status: 'Live',
    pitch: 'Web para academia de producción musical y DJing, con asistente IA para orientar a futuros alumnos.',
    techs: ['Next.js', 'Node.js', 'AI Integration'],
    live: 'https://proyecto-p-gina-web-be-dj-school.vercel.app/',
    code: 'https://github.com/SaraAbreu/Proyecto-p-gina-web-BE-DJ-SCHOOL',
    image: '/images/projects/bedj.png',
  },
];

export default function ProjectsSection() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const arrowBtn =
    'w-10 h-10 flex items-center justify-center border border-[#DDD8CE] text-[#1A1A18] hover:border-[#C4602A] hover:text-[#C4602A] disabled:opacity-30 disabled:pointer-events-none transition-colors';

  return (
    <section id="projects" className="border-t border-[#DDD8CE] px-6 sm:px-10 py-14 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
      >
        <div>
          <p className="text-xs font-medium text-[#C4602A] uppercase tracking-widest mb-3">Trabajo seleccionado</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#1A1A18]">
            Proyectos web
          </h2>
        </div>
        <div className="flex items-center gap-6">
        <a href="https://github.com/SaraAbreu" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#6B6860] hover:text-[#C4602A] transition-colors border-b border-[#DDD8CE] hover:border-[#C4602A] pb-0.5 uppercase tracking-widest w-fit">
          GitHub →
        </a>
          <div className="hidden sm:flex items-center gap-2">
            <button type="button" onClick={() => scrollBy(-1)} disabled={!canPrev} aria-label="Proyecto anterior" className={arrowBtn}>←</button>
            <button type="button" onClick={() => scrollBy(1)} disabled={!canNext} aria-label="Proyecto siguiente" className={arrowBtn}>→</button>
          </div>
        </div>
      </motion.div>

      <div
        ref={trackRef}
        onScroll={update}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projectsData.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '0px 0px -40px 0px' }}
            className="group relative shrink-0 snap-start w-[85%] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] flex flex-col bg-[#FAF8F4] border border-[#DDD8CE] hover:border-[#C4602A]/50 hover:shadow-[0_18px_40px_-24px_rgba(26,26,24,0.35)] transition-all duration-300"
          >
            {/* Imagen */}
            <div className="aspect-[16/10] overflow-hidden border-b border-[#DDD8CE] bg-[#E8E3D9]">
              <img
                src={project.image}
                alt={`Captura de ${project.title}`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-3 text-[11px] font-medium uppercase tracking-wider text-[#6B6860]">
                <span>{project.type}</span>
                <span className="flex items-center gap-1.5 normal-case tracking-normal">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-[#5B8C5A]' : 'bg-[#C4602A]'}`} />
                  {project.status === 'Live' ? 'En producción' : project.status}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-light tracking-tight text-[#1A1A18] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#4A4843] leading-relaxed mb-4">{project.pitch}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techs.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[11px] text-[#6B6860] bg-[#F0EBE2] px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#DDD8CE] text-xs">
                <span className="text-[#8A867D]">{project.role}</span>
                <div className="flex items-center gap-4">
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="relative z-10 text-[#6B6860] hover:text-[#C4602A] transition-colors">
                      Código
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1A1A18] group-hover:text-[#C4602A] transition-colors after:absolute after:inset-0"
                    aria-label={`Ver ${project.title}`}
                  >
                    Ver ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
