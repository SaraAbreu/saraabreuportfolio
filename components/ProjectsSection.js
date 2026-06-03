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
    link: 'https://github.com/SaraAbreu/AgoraMujeres',
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
    desc: 'Sitio web responsivo para SyntexIA. Diseño limpio, multiidioma, y optimizado para conversión. Información del equipo, servicios y CTA claro.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
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
    title: 'ContentFlow AI',
    type: 'Plataforma · Automatización',
    status: 'En desarrollo',
    desc: 'App para crear contenido completamente automatizado. Genera, optimiza y publica contenido visual, posts de redes y assets multimedia en minutos.',
    techs: ['React', 'OpenAI', 'Automation', 'Cloud'],
    link: null,
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
    <section id="projects" className="border-t border-gray-200">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 px-6 sm:px-10 py-12 sm:py-14 border-b border-gray-200"
      >
        <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight">
          Proyectos web
        </h2>
        <a href="#" className="text-xs font-medium text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5 uppercase tracking-widest w-fit">
          Ver todos →
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
            className="grid grid-cols-1 sm:grid-cols-[360px_1fr] border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 group"
          >
            {/* Image */}
            <div className="hidden sm:flex items-center justify-center h-64 bg-gradient-to-br from-gray-100 to-gray-200 border-r border-gray-200 p-8 overflow-hidden group">
              <div className="transform group-hover:scale-105 transition-transform duration-600 ease-out w-full h-full flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                    Sin imagen
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Image */}
            <div className="sm:hidden flex items-center justify-center h-48 bg-gradient-to-br from-gray-100 to-gray-200 border-b border-gray-200 p-6 overflow-hidden group">
              <div className="transform group-hover:scale-105 transition-transform duration-600 ease-out w-full h-full flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                    Sin imagen
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded border ${
                    project.status === 'Live'
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : project.status === 'En desarrollo'
                      ? 'bg-amber-50 border-amber-200 text-amber-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all"
                  >
                    →
                  </a>
                ) : (
                  <span className="text-xl text-gray-300">→</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
