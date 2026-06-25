import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Ágora Mujeres',
    type: 'Plataforma · App móvil',
    status: 'Live',
    desc: 'Plataforma integral de salud mental para mujeres con chat IA empático, diario emocional, rastreo de ciclo menstrual y soporte en crisis. Multiplataforma (iOS, Android, Web).',
    techs: ['React Native', 'Expo', 'FastAPI', 'OpenAI', 'MongoDB', 'Stripe'],
    link: 'https://agoramujeres.syntexia-solutions.es/',
    image: '/images/projects/agora.png',
  },
  {
    id: 2,
    title: 'SyntexIA CRM',
    type: 'Sistema · Backend',
    status: 'Live',
    desc: 'CRM standalone basado en FastAPI para gestión de clientes, contactos, actividades y oportunidades. API REST documentada, SQLite, y listo para integración con sistemas de facturación.',
    techs: ['FastAPI', 'Python', 'SQLite', 'Swagger'],
    link: 'https://github.com/SaraAbreu/SyntexIA-CRM-Standalone',
    image: '/images/projects/CRM_Syntexia_Modulo.png',
  },
  {
    id: 3,
    title: 'SyntexIA Web',
    type: 'Marketing · Landing',
    status: 'Live',
    desc: 'Landing page de alta conversión para SyntexIA Consulting. Maquetación semántica, diseño responsive, multiidioma y optimización de rendimiento — entregada en tiempo récord para cliente real.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Performance'],
    link: 'https://syntex-ia-web.vercel.app/',
    image: '/images/projects/syntexia.png',
  },
  {
    id: 4,
    title: 'BE DJ School',
    type: 'Web · Academia',
    status: 'Live',
    desc: 'Web para academia especializada en producción musical con integración de IA. Gestión de cursos, estudiantes y recursos multimedia interactivos.',
    techs: ['Next.js', 'AI Integration', 'Node.js'],
    link: 'https://github.com/SaraAbreu/Proyecto-p-gina-web-BE-DJ-SCHOOL',
    image: '/images/projects/bedj.png',
  },
  {
    id: 5,
    title: 'AutoPost CM',
    type: 'Plataforma · Automatización',
    status: 'En desarrollo',
    desc: 'Plataforma para automatizar la creación y publicación de contenido visual. Genera posts de redes, assets multimedia y copy optimizado a partir de un prompt — sin intervención manual.',
    techs: ['React', 'Grok', 'Automation', 'Next.js'],
    link: '/automation',
    image: '/images/projects/ContentFlow AI .png',
  },
];

export default function ProjectsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isClient) return null;

  return (
    <section id="projects" className="border-t border-[#DDD8CE]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 px-6 sm:px-10 py-12 sm:py-14 border-b border-[#DDD8CE]"
      >
        <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-[#1A1A18]">
          Proyectos web
        </h2>
        <a href="https://github.com/SaraAbreu" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#6B6860] hover:text-[#C4602A] transition-colors border-b border-[#DDD8CE] hover:border-[#C4602A] pb-0.5 uppercase tracking-widest w-fit">
          GitHub →
        </a>
      </motion.div>

      {/* Projects list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      >
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-[360px_1fr] border-b border-[#DDD8CE] hover:bg-[#F0E0D6]/20 transition-colors duration-300 group"
          >
            {/* Image */}
            <div className="hidden sm:flex items-center justify-center h-64 bg-[#E8E3D9] border-r border-[#DDD8CE] p-8 overflow-hidden">
              <div className="transform group-hover:scale-105 transition-transform duration-500 ease-out w-full h-full flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-32 h-32 bg-[#DDD8CE] flex items-center justify-center text-[#6B6860] text-xs">
                    Sin imagen
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Image */}
            <div className="sm:hidden flex items-center justify-center h-48 bg-[#E8E3D9] border-b border-[#DDD8CE] p-6 overflow-hidden">
              <div className="transform group-hover:scale-105 transition-transform duration-500 ease-out w-full h-full flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-24 h-24 bg-[#DDD8CE] flex items-center justify-center text-[#6B6860] text-xs">
                    Sin imagen
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#6B6860] uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 border ${
                    project.status === 'Live'
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : project.status === 'En desarrollo'
                      ? 'bg-[#F0E0D6] border-[#C4602A]/30 text-[#C4602A]'
                      : 'bg-[#E8E3D9] border-[#DDD8CE] text-[#6B6860]'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light mb-3 tracking-tight text-[#1A1A18]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B6860] leading-relaxed mb-5">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs text-[#6B6860] border border-[#DDD8CE] px-2.5 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[#DDD8CE] group-hover:text-[#C4602A] group-hover:translate-x-1 transition-all"
                  >
                    →
                  </a>
                ) : (
                  <span className="text-xl text-[#DDD8CE]">→</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
