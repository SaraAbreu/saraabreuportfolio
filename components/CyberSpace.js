import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';

export default function CyberSpace({ id }) {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { id: 'projects', label: 'Proyectos', icon: '🚀' },
    { id: 'apps', label: 'Apps', icon: '📱' },
    { id: 'gallery', label: 'Galería', icon: '🎨' }
  ];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case 'projects':
        return projects.filter(p => p.tech && /Next|React|Node|Postgres|Stripe/i.test(p.tech));
      case 'apps':
        return projects.filter(p => p.slug.includes('app') || /app|mobile|webapp/i.test(p.short));
      case 'gallery':
        return projects.filter(p => p.images && p.images.length > 0);
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id={id || undefined} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-600 bg-clip-text text-transparent">
              Ciberespacio Creativo
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora mi universo digital: proyectos innovadores, aplicaciones funcionales y una galería de experiencias visuales
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 rounded-2xl flex space-x-2">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
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
                      <a
                        href={`/sites/${selectedProject.slug}`}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        Ver proyecto completo →
                      </a>
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