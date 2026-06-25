import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const marketingItems = [
  // Publicaciones Tecnológico
  { id: 3, cat: 'publicacion', title: 'ChatGPT 5.2 · Coherencia', label: 'Publicación', image: '/images/marketing/post tatuajes/post tecnologico/ChatGPT 5.2 El Salto en Coherencia (2).png' },
  { id: 4, cat: 'publicacion', title: 'Inteligencia Artificial ética', label: 'Publicación', image: '/images/marketing/post tatuajes/post tecnologico/Inteligencia Artificial útil, ética y transformadora.png' },
  // Banners
  { id: 5, cat: 'banner', title: 'Technology YouTube Display Ad', label: 'Banner', image: '/images/banners/Blue and Yellow Illustrative Technology YouTube Display Ad (3).png' },
  { id: 6, cat: 'banner', title: 'SyntexIA Consulting', label: 'Banner', image: '/images/banners/SyntexIA Consulting.png' },
  // Fotografía de marca
  { id: 7, cat: 'fotografia', title: 'Fotografía de marca · Editorial', label: 'Fotografía', image: '/images/marketing/post tatuajes/identidad visual/foto1.png' },
  { id: 8, cat: 'fotografia', title: 'Fotografía de marca · Retratos', label: 'Fotografía', image: '/images/marketing/post tatuajes/identidad visual/foto2.png' },
  { id: 9, cat: 'fotografia', title: 'Instagram @sa_draftstudio', label: 'Fotografía', image: '/images/marketing/post tatuajes/identidad visual/foto3.png', link: 'https://www.instagram.com/sa_draftstudio/' },
];

const filters = [
  { value: 'all', label: 'Todos' },
  { value: 'publicacion', label: 'Publicaciones' },
  { value: 'banner', label: 'Banners' },
  { value: 'fotografia', label: 'Fotografía de marca' },
];

export default function MarketingSection() {
  const [isClient, setIsClient] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const displayItems = activeFilter === 'all'
    ? marketingItems
    : marketingItems.filter(item => item.cat === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isClient) return null;

  return (
    <section id="marketing" className="border-t border-gray-200">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 px-6 sm:px-10 py-12 sm:py-14 border-b border-gray-200"
      >
        <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight">
          Marketing visual
        </h2>
        <a href="https://www.instagram.com/sa_draftstudio/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5 uppercase tracking-widest w-fit">
          Instagram →
        </a>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 pt-8 pb-6 text-sm text-gray-500 leading-relaxed font-light"
      >
        Piezas digitales que comunican antes de que alguien lea una sola palabra.
      </motion.p>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 px-6 sm:px-10 pb-8 border-b border-gray-200"
      >
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 border tracking-widest ${
              activeFilter === filter.value
                ? 'bg-black text-white border-black'
                : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-200"
      >
        {displayItems.map(item => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="border-r border-b border-gray-200 last:border-r-0 hover:bg-gray-50 transition-colors duration-300 group cursor-pointer"
            onClick={() => {
              if (item.link) {
                window.open(item.link, '_blank');
              }
            }}
          >
            {/* Thumbnail */}
            <div
              className="h-40 overflow-hidden border-b border-gray-200 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:brightness-95 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="text-xs font-medium text-amber-700 mb-2 uppercase tracking-wider">
                {item.label}
              </div>
              <h3 className="text-sm font-medium text-black">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
