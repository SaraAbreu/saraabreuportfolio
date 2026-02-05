import React, { useState, useEffect } from 'react';
import projects from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Lightbox from './Lightbox';

export default function Showcase({ className = '', id }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  useEffect(() => {
    function onSelect(e) {
      if (typeof e.detail === 'number') setLightboxIndex(e.detail);
    }
    window.addEventListener('lightbox-select', onSelect);
    return () => window.removeEventListener('lightbox-select', onSelect);
  }, []);

  function openLightbox(imagesArr = [], idx = 0) {
    setLightboxImages(imagesArr || []);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }

  return (
    <section id={id || undefined} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
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
              Proyectos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Una selección de trabajos que demuestran mi enfoque en{' '}
            <span className="text-cyan-400 font-semibold">diseño</span>,{' '}
            <span className="text-purple-400 font-semibold">tecnología</span> y{' '}
            <span className="text-amber-500 font-semibold">innovación</span>
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Image container */}
                  <div
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(project.images, 0);
                    }}
                  >
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <div className="text-sm font-semibold">{project.title}</div>
                          <div className="text-xs text-cyan-200/80">{project.tech}</div>
                        </div>
                        <div className="text-xs text-white/70">{project.duration}</div>
                      </div>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <Link href={`/sites/${project.slug}`}>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.short}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech?.split(',').slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{project.duration}</span>
                        <span className="text-cyan-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                          Ver proyecto →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

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
              { number: projects.length, label: 'Proyectos' },
              { number: '3+', label: 'Años Exp.' },
              { number: '50+', label: 'Tecnologías' },
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

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
