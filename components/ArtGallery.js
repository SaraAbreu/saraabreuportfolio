import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArtGallery({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('portrait');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Galería de imágenes - organizada por carpetas locales
  const images = [
    // PAISAJES
    {
      id: 1,
      title: 'Horizonte suspendido',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes2.png',
      description: 'Donde el cielo decide no terminar',
      narrative: 'El límite es solo una sugestión'
    },
    {
      id: 2,
      title: 'Atardecer quieto',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes3.png',
      description: 'El sol se despide sin prisas',
      narrative: 'Tiempo detenido en ambar'
    },
    {
      id: 3,
      title: 'Valle de niebla',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes4.png',
      description: 'Lo que la bruma oculta, la imaginación completa',
      narrative: 'Misterio en cada capa'
    },
    {
      id: 4,
      title: 'Agua dormida',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes5.png',
      description: 'Reflejos que cuentan historias paralelas',
      narrative: 'Dos mundos en uno'
    },
    {
      id: 5,
      title: 'Sendero borrado',
      category: 'landscape',
      image: '/images/gallery/Paisajes/pasaijes6.png',
      description: 'Caminos que solo existen si decides verlos',
      narrative: 'La ruta la creas tú'
    },
    {
      id: 6,
      title: 'Luz entre ramas',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes7.png',
      description: 'Cuando el bosque respira dorado',
      narrative: 'Naturaleza que ilumina'
    },
    {
      id: 7,
      title: 'Piedra y silencio',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes8.png',
      description: 'La montaña no habla, pero dice todo',
      narrative: 'Solidez que inspira'
    },
    {
      id: 8,
      title: 'Cielo partido',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes9.png',
      description: 'Entre nubes que pelean y se abrazan',
      narrative: 'Drama celeste'
    },
    {
      id: 9,
      title: 'Pradera infinita',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes10.png',
      description: 'Verde que no tiene fin ni principio',
      narrative: 'Libertad en estado puro'
    },
    // SESIONES FOTOGRÁFICAS - RETRATOS
    // Sesión: Susana Pierre
    {
      id: 10,
      title: 'Susana Pierre - Luz interior',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre4.jpg',
      description: 'La luz la encontró, ella solo tuvo que ser',
      narrative: 'Cuando la cámara desaparece y queda la persona',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 11,
      title: 'Susana Pierre - Mirada presente',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre1.jpeg',
      description: 'Ojos que cuentan historias sin palabras',
      narrative: 'La profundidad de un instante',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 12,
      title: 'Susana Pierre - Entre sombras',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre2.jpeg',
      description: 'Lo que la sombra revela, la luz no puede',
      narrative: 'Misterio y claridad en equilibrio',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 13,
      title: 'Susana Pierre - Elegancia natural',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre3.jpeg',
      description: 'La belleza que no se fuerza, simplemente existe',
      narrative: 'Gracia sin esfuerzo',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    // Sesión: Ray Expósito
    {
      id: 14,
      title: 'Ray Expósito - Actitud urbana',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-1.png',
      description: 'La ciudad como escenario, él como protagonista',
      narrative: 'Donde el asfalto se vuelve estética',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 15,
      title: 'Ray Expósito - Momento real',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-2.jpg',
      description: 'Sin poses, sin filtros, solo él',
      narrative: 'La autenticidad no se ensaya',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 16,
      title: 'Ray Expósito - Gesto sincero',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-3.jpg',
      description: 'Cuando el gesto dice más que mil palabras',
      narrative: 'Expresión que conecta',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 17,
      title: 'Ray Expósito - Presencia',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-4.jpg',
      description: 'Estar presente es el mejor regalo a la cámara',
      narrative: 'Magnetismo natural',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    // Sesión: Rubén Trujillo
    {
      id: 18,
      title: 'Rubén Trujillo - Calle y carácter',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-1.png',
      description: 'El entorno urbano como extensión de su personalidad',
      narrative: 'Donde la calle cuenta historias',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 19,
      title: 'Rubén Trujillo - Espacio propio',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-2.png',
      description: 'Cada espacio se transforma cuando él lo habita',
      narrative: 'Dueño de su territorio',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 20,
      title: 'Rubén Trujillo - Seguridad',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-3.png',
      description: 'La confianza se ve, no se explica',
      narrative: 'Presencia que no pide permiso',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 21,
      title: 'Rubén Trujillo - Instante',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-4.jpg',
      description: 'Un segundo perfecto que duraba para siempre',
      narrative: 'Lo espontáneo tiene su propia magia',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    // CAMPAÑAS DE MARKETING
    {
      id: 22,
      title: 'SyntexIA - Identidad Digital',
      category: 'marketing',
      image: '/images/syntexia.png',
      description: 'Campaña de branding para plataforma de síntesis de datos',
      narrative: 'La tecnología hecha accesible y elegante'
    },
    {
      id: 23,
      title: 'BE DJ School - Vibes Educativos',
      category: 'marketing',
      image: '/images/bedj.png',
      description: 'Identidad visual para academia de formación musical',
      narrative: 'Donde la pasión se transforma en carrera'
    },
    {
      id: 24,
      title: 'Festival Music - Experiencia Sensorial',
      category: 'marketing',
      image: '/images/gallery/Paisajes/paisajes2.png',
      description: 'Diseño de campaña para evento musical inmersivo',
      narrative: 'La música que sientes en cada píxel'
    },
    {
      id: 25,
      title: 'Marca Corporativa - Presencia Premium',
      category: 'marketing',
      image: '/images/gallery/Paisajes/paisajes3.png',
      description: 'Estrategia de branding para empresa B2B',
      narrative: 'Profesionalismo y elegancia en cada touchpoint'
    },
    {
      id: 26,
      title: 'Campaña Social - Conexión Humana',
      category: 'marketing',
      image: '/images/gallery/Paisajes/paisajes4.png',
      description: 'Identidad visual para marca lifestyle',
      narrative: 'Comunidad que crece a través del diseño'
    },
    {
      id: 27,
      title: 'Estrategia Digital - Datos Visuales',
      category: 'marketing',
      image: '/images/gallery/Paisajes/paisajes5.png',
      description: 'Infografía y diseño de datos para startup tech',
      narrative: 'Complejidad convertida en claridad visual'
    }
  ];

  // Sesiones fotográficas para la vista de retratos
  const photoSessions = [
    {
      id: 'susana',
      name: 'Susana Pierre',
      instagram: 'https://www.instagram.com/d_pierre78/',
      instagramHandle: '@d_pierre78',
      description: 'Sesión de retrato artístico con luz natural',
      available: true
    },
    {
      id: 'ray',
      name: 'Ray Expósito',
      instagram: 'https://www.instagram.com/ray_exposito/',
      instagramHandle: '@ray_exposito',
      description: 'Retrato urbano con actitud auténtica',
      available: true
    },
    {
      id: 'ruben',
      name: 'Rubén Trujillo',
      instagram: 'https://www.instagram.com/rubens_89/',
      instagramHandle: '@rubens_89',
      description: 'Sesión de fotografía urbana',
      style: 'Urbano',
      available: true
    }
  ];

  const categories = [
    { id: 'portrait', label: 'Retratos' },
    { id: 'landscape', label: 'Paisajes', folder: 'paisajes' },
    { id: 'marketing', label: 'Campañas' }
  ];

  const filteredImages = images.filter(img => img.category === selectedCategory);

  // Manejador para actualizar índice cuando se selecciona una imagen
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  // Navegación prev/next
  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goToPrevious(e);
      if (e.key === 'ArrowRight') goToNext(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <section id={id || undefined} className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-black to-purple-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mi Galería Visual
            </span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portrait Sessions View */}
        {selectedCategory === 'portrait' ? (
          <div className="space-y-16">
            {photoSessions.map((session, sessionIndex) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                {/* Session Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{session.name}</h3>
                    <p className="text-gray-400 text-sm">{session.description}</p>
                    {session.style && (
                      <span className="inline-block mt-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs font-medium text-amber-400">
                        {session.style}
                      </span>
                    )}
                  </div>
                  <a
                    href={session.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <span>📸</span>
                    <span>{session.instagramHandle}</span>
                  </a>
                </div>

                {/* Session Photos */}
                {session.available ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.filter(img => img.session === session.id).map((image, index) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative cursor-pointer aspect-square"
                        onClick={() => handleImageSelect(image)}
                      >
                        <div className="relative h-full rounded-xl overflow-hidden">
                          <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-xs text-white font-medium">{image.description}</p>
                          </div>
                          <div className="absolute inset-0 rounded-xl border border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300 pointer-events-none" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-12 border-2 border-dashed border-white/10 rounded-xl">
                    <div className="text-center">
                      <div className="text-4xl mb-3">📷</div>
                      <p className="text-gray-400">Próximamente...</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          /* Gallery Grid for other categories */
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="sync">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative cursor-pointer h-80"
                  onClick={() => handleImageSelect(image)}
                >
                  <div className="relative h-full rounded-xl overflow-hidden">
                    {/* Image */}
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top - Category */}
                      <div>
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400 mb-4">
                          {image.category}
                        </span>
                      </div>

                      {/* Bottom - Title */}
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Abreu Studio
                        </h3>
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-xl border border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Image Modal - Museo Elegante */}
        <AnimatePresence mode="wait">
          {selectedImage && (
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            >
              {/* Modal Container */}
              <motion.div
                key={`modal-${selectedImage.id}`}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-6xl"
              >
                {/* Main Content - Two column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Image Container */}
                  <motion.div
                    key={`image-${selectedImage.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      {/* Image with glassmorphism frame */}
                      <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-black/50">
                        <img
                          src={selectedImage.image}
                          alt={selectedImage.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Subtle border glow */}
                        <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-cyan-500/30 via-transparent to-purple-500/30" />
                        
                        {/* Image position indicator */}
                        <div className="absolute top-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                          <span className="text-xs font-semibold text-white/90">
                            {currentIndex + 1} / {filteredImages.length}
                          </span>
                        </div>
                      </div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group/btn"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group/btn"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>

                  {/* Information Panel */}
                  <motion.div
                    key={`info-${selectedImage.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex flex-col justify-between lg:py-4"
                  >
                    {/* Header Info */}
                    <div>
                      {/* Close Button */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-3">
                          {/* Category Badge */}
                          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                            {selectedImage.category === 'landscape' && 'Paisaje'}
                            {selectedImage.category === 'portrait' && 'Retrato'}
                            {selectedImage.category === 'marketing' && 'Campaña'}
                          </span>
                          {selectedImage.session && (
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300 uppercase tracking-wider">
                              {filteredImages.find(img => img.session === selectedImage.session)?.session}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={closeModal}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Title */}
                      <div className="mb-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                          {selectedImage.title}
                        </h2>
                      </div>

                      {/* Description */}
                      <div className="mb-8 space-y-4">
                        <div>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {selectedImage.description}
                          </p>
                        </div>
                        
                        {/* Narrative */}
                        {selectedImage.narrative && (
                          <div className="pl-4 border-l-2 border-cyan-500/50">
                            <p className="text-base text-gray-400 italic">
                              "{selectedImage.narrative}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                      {/* Social Link */}
                      {selectedImage.instagram && (
                        <a
                          href={selectedImage.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
                          </svg>
                          <span>Ver en Instagram</span>
                        </a>
                      )}

                      {/* Studio Mark */}
                      <div className="text-center pt-4 text-sm text-gray-500">
                        <p>© Abreu Studio</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Keyboard hints - Desktop only */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:flex justify-center gap-4 mt-8 pt-6 border-t border-white/5"
                >
                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">←</kbd>
                    <span>Anterior</span>
                  </span>
                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">→</kbd>
                    <span>Siguiente</span>
                  </span>
                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">Esc</kbd>
                    <span>Cerrar</span>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

