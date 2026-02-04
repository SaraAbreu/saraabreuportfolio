import React, { useMemo, useState, useEffect } from 'react';
import projects from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Lightbox from './Lightbox';

const CATEGORY_MAP = {
  All: () => true,
  Web: p => p.tech && /Next|React|Node|Postgres|Stripe/i.test(p.tech),
  IA: p => p.slug.includes('ia') || /IA|AI|generador|generativ/i.test(p.title + p.short + p.tech),
  Automation: p => p.slug.includes('automation') || /automat/i.test(p.short + (p.solution||''))
};

export default function Showcase({ className = '', id }) {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => projects.filter(CATEGORY_MAP[filter] || CATEGORY_MAP.All), [filter]);

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
    <section id={id || undefined} className={`mt-12 max-w-6xl mx-auto text-left ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-serif text-white mb-4">Proyectos seleccionados</h2>
        <div className="flex gap-2">
          {Object.keys(CATEGORY_MAP).map(k => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-3 py-1 text-sm rounded-md ${filter === k ? 'bg-[color:var(--accent-warm)] text-black' : 'bg-white/3 text-white/80'}`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map(p => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.32 }}
              className="group card interactive bg-gradient-to-br from-black/20 to-white/2 rounded-xl p-0 overflow-hidden border border-white/6"
            >
              <div className="w-full h-48 bg-gray-900 overflow-hidden relative cursor-zoom-in" onClick={(e) => { e.stopPropagation(); openLightbox(p.images, 0); }}>
                <img src={p.images?.[0]} alt={p.title} loading="lazy" className="thumb-cover" />
                <div className="project-overlay">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">{p.title}</div>
                      <div className="text-xs text-cyan-200/80">{p.tech}</div>
                    </div>
                    <div className="text-xs text-white/70">{p.duration}</div>
                  </div>
                </div>
              </div>
              <Link href={`/sites/${p.slug}`} className="block">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-gray-300/80 text-sm mt-2">{p.short}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-cyan-200/80">{p.tech}</div>
                    <div className="text-xs text-white/70">{p.duration}</div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
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
