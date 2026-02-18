import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';

export default function CyberSpace({ id }) {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { id: 'projects', label: 'Proyectos', icon: '🚀' },
    { id: 'apps', label: 'Apps', icon: '📱' },
    { id: 'certifications', label: 'Certificaciones', icon: '🏅' }
  ];

  // Datos de certificaciones y conocimientos
  const certifications = [
    {
      id: 1,
      title: 'Especialista en Inteligencia Artificial',
      issuer: 'Reboot Academy',
      hours: '270h',
      icon: '🤖',
      skills: ['Machine Learning', 'Redes Neuronales', 'Python', 'PyTorch']
    },
    {
      id: 2,
      title: 'Seguridad Informática',
      issuer: 'Formación Online',
      hours: '525h',
      icon: '🔐',
      skills: ['Ciberseguridad', 'Análisis de riesgos', 'Protección de datos']
    },
    {
      id: 3,
      title: 'Programación Web con .NET',
      issuer: 'ICADEPRO',
      hours: '275h',
      icon: '💻',
      skills: ['ASP.NET', 'C#', 'SQL Server', 'Web APIs']
    },
    {
      id: 4,
      title: 'Actividades de Gestión Administrativa',
      issuer: 'FAUCA',
      hours: '920h',
      icon: '📋',
      skills: ['Gestión', 'Administración', 'Ofimática']
    },
    {
      id: 5,
      title: 'Experto en eLearning',
      issuer: 'FAUCA',
      hours: '40h',
      icon: '🎓',
      skills: ['Diseño instruccional', 'Plataformas LMS', 'Contenido digital']
    },
    {
      id: 6,
      title: 'Atención al Cliente y Calidad del Servicio',
      issuer: 'FAUCA',
      hours: '25h',
      icon: '🤝',
      skills: ['Comunicación', 'Servicio al cliente', 'Calidad']
    }
  ];

  // Conocimientos técnicos
  const technicalSkills = [
    { category: 'Lenguajes', skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'] },
    { category: 'IA & Data', skills: ['Machine Learning', 'Redes Neuronales', 'Pandas', 'NumPy', 'Scikit-Learn', 'PyTorch'] },
    { category: 'Bases de Datos', skills: ['MySQL', 'MongoDB', 'SQL Server'] }
  ];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case 'projects':
        return projects.filter(p => p.tech && /Next|React|Node|Postgres|Stripe/i.test(p.tech));
      case 'certifications':
        return []; // Certificaciones se manejan por separado
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id={id || undefined} className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-600 bg-clip-text text-transparent">
              Ciberespacio Creativo
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Explora mi universo digital: proyectos innovadores, aplicaciones en desarrollo y mis certificaciones
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="glass-card p-2 rounded-2xl flex flex-wrap justify-center gap-2 sm:space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Apps tab: show only a message */}
            {activeTab === 'apps' ? (
              <div className="flex flex-col items-center justify-center py-20 px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-md"
                >
                  <div className="text-6xl mb-6">🔧</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Actualmente estoy desarrollando dos apps.
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Pronto compartiré más detalles sobre estos proyectos.
                  </p>
                </motion.div>
              </div>
            ) : activeTab === 'certifications' ? (
              /* Certifications & Skills */
              <div className="space-y-12">
                {/* Technical Skills Section */}
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>💡</span> Conocimientos Técnicos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {technicalSkills.map((group, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Grid */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>🏅</span> Certificaciones
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="glass-card overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 p-6">
                          {/* Icon & Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-4xl">{cert.icon}</div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                                {cert.title}
                              </h3>
                              <p className="text-sm text-gray-400">{cert.issuer}</p>
                            </div>
                          </div>
                          
                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {cert.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-medium text-amber-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          {/* Hours */}
                          <div className="flex justify-between items-center pt-4 border-t border-white/10">
                            <span className="text-xs text-gray-400">Duración: {cert.hours}</span>
                            <span className="text-amber-400 text-sm">✓ Completado</span>
                          </div>
                        </div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="glass-card overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.images?.[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white">
                        <div className="text-sm font-semibold">{project.title}</div>
                        <div className="text-xs text-cyan-200/80">{project.tech}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.short}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.split(',').slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{project.duration}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </motion.div>
            ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      ✕
                    </button>
                  </div>

                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="mb-6">
                      <img
                        src={selectedProject.images[0]}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.short}
                    </p>

                    {selectedProject.solution && (
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solución</h4>
                        <p className="text-gray-300">{selectedProject.solution}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech?.split(',').map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-400"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-sm text-gray-400">Duración: {selectedProject.duration}</span>
                      <div className="flex gap-3">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            GitHub
                          </a>
                        )}
                        {/* Enlace a LinkedIn de Susana Pierre solo para SyntexIA */}
                        {selectedProject.title === 'SyntexIA' && (
                          <a
                            href="https://www.linkedin.com/in/susana-pierre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                            LinkedIn Susana
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            Ver Web →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: projects.length, label: 'Proyectos Totales' },
              { number: '5+', label: 'Tecnologías' },
              { number: '2+', label: 'Años Creando' },
              { number: '∞', label: 'Creatividad' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}