import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArtGallery({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('conceptual');

  // Galería de imágenes - organizada por carpetas locales
  const images = [
    {
      id: 1,
      title: 'Abreu Studio - Conceptual I',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/Gemini_Generated_Image_4bq5je4bq5je4bq5.png',
      description: 'Explorando la intersección entre tecnología y naturaleza digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 2,
      title: 'Abreu Studio - Conceptual II',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/Gemini_Generated_Image_859hk8859hk8859h.png',
      description: 'Naturaleza reimaginada a través de una lente cibernética',
      narrative: 'Abreu Studio'
    },
    {
      id: 3,
      title: 'Abreu Studio - Conceptual III',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/Gemini_Generated_Image_aohhn1aohhn1aohh.png',
      description: 'Síntesis de lo orgánico y lo digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 4,
      title: 'Abreu Studio - Conceptual IV',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/Gemini_Generated_Image_jws0k5jws0k5jws0.png',
      description: 'Convergencia de mundos paralelos',
      narrative: 'Abreu Studio'
    },
    {
      id: 5,
      title: 'Abreu Studio - Conceptual V',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/Gemini_Generated_Image_n18n29n18n29n18n.png',
      description: 'Interfaz entre realidad y ficción',
      narrative: 'Abreu Studio'
    },
    // PAISAJES
    {
      id: 6,
      title: 'Abreu Studio - Paisaje I',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_6ct7p26ct7p26ct7.png',
      description: 'Montaña cristal - picos que reflejan la realidad',
      narrative: 'Abreu Studio'
    },
    {
      id: 7,
      title: 'Abreu Studio - Paisaje II',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_f6dgyf6dgyf6dgyf.png',
      description: 'Océano espejo - agua que refleja todo lo invisible',
      narrative: 'Abreu Studio'
    },
    {
      id: 8,
      title: 'Abreu Studio - Paisaje III',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_gm4nvegm4nvegm4n.png',
      description: 'Pradera luminiscente - hierba que emite luz propia',
      narrative: 'Abreu Studio'
    },
    {
      id: 9,
      title: 'Abreu Studio - Paisaje IV',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_lun9awlun9awlun9.png',
      description: 'Acantilado suspendido - rocas flotantes en el vacío',
      narrative: 'Abreu Studio'
    },
    {
      id: 10,
      title: 'Abreu Studio - Paisaje V',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_mxmknwmxmknwmxmk.png',
      description: 'Nebulosa terrestre - cielo y tierra fusionados',
      narrative: 'Abreu Studio'
    },
    {
      id: 11,
      title: 'Abreu Studio - Paisaje VI',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_ol2eesol2eesol2e.png',
      description: 'Isla etérea - tierra que flota entre nubes',
      narrative: 'Abreu Studio'
    },
    {
      id: 12,
      title: 'Abreu Studio - Paisaje VII',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_pb0q9fpb0q9fpb0q.png',
      description: 'Horizonte dual - donde dos mundos se encuentran',
      narrative: 'Abreu Studio'
    },
    {
      id: 13,
      title: 'Abreu Studio - Paisaje VIII',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_tn6rfitn6rfitn6r.png',
      description: 'Valle envuelto - niebla que guarda secretos',
      narrative: 'Abreu Studio'
    },
    {
      id: 14,
      title: 'Abreu Studio - Paisaje IX',
      category: 'landscape',
      image: '/images/gallery/Paisajes/Gemini_Generated_Image_xq6t9wxq6t9wxq6t.png',
      description: 'Montaña destello - luz que emerge de la roca',
      narrative: 'Abreu Studio'
    },
    // ABSTRACTO
    {
      id: 15,
      title: 'Abreu Studio - Abstract I',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115108.png',
      description: 'Colores imposibles, composiciones de otro universo',
      narrative: 'Abreu Studio'
    },
    {
      id: 16,
      title: 'Abreu Studio - Abstract II',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115410.png',
      description: 'Formas fluidas en el caos cromático',
      narrative: 'Abreu Studio'
    },
    {
      id: 17,
      title: 'Abreu Studio - Abstract III',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115420.png',
      description: 'Geometría disuelta en luz',
      narrative: 'Abreu Studio'
    },
    {
      id: 18,
      title: 'Abreu Studio - Abstract IV',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115429.png',
      description: 'Dimensiones entrelazadas',
      narrative: 'Abreu Studio'
    },
    {
      id: 19,
      title: 'Abreu Studio - Abstract V',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115924.png',
      description: 'Vibración cósmica visualizada',
      narrative: 'Abreu Studio'
    },
    {
      id: 20,
      title: 'Abreu Studio - Abstract VI',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115926.png',
      description: 'Espectro infinito en movimiento',
      narrative: 'Abreu Studio'
    },
    {
      id: 21,
      title: 'Abreu Studio - Abstract VII',
      category: 'abstract',
      image: '/images/gallery/Abstracto/Copilot_20260205_115928.png',
      description: 'Materia transformándose en energía',
      narrative: 'Abreu Studio'
    },
    // SESIONES FOTOGRÁFICAS - RETRATOS
    // Sesión: Susana Pierre
    {
      id: 22,
      title: 'Susana Pierre - I',
      category: 'portrait',
      image: '/images/gallery/Retratos/Imagen%20de%20WhatsApp%202025-10-21%20a%20las%2009.29.52_67183c64.jpg',
      description: 'La luz natural revela su esencia auténtica',
      narrative: 'Sesión Susana Pierre',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 23,
      title: 'Susana Pierre - II',
      category: 'portrait',
      image: '/images/gallery/Retratos/WhatsApp%20Image%202026-01-16%20at%2019.38.14.jpeg',
      description: 'Mirada que atraviesa el tiempo',
      narrative: 'Sesión Susana Pierre',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 24,
      title: 'Susana Pierre - III',
      category: 'portrait',
      image: '/images/gallery/Retratos/WhatsApp%20Image%202026-01-17%20at%2017.18.35.jpeg',
      description: 'Entre sombras y destellos, presencia serena',
      narrative: 'Sesión Susana Pierre',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 25,
      title: 'Susana Pierre - IV',
      category: 'portrait',
      image: '/images/gallery/Retratos/WhatsApp%20Image%202026-01-20%20at%2019.37.30.jpeg',
      description: 'Elegancia capturada en un instante eterno',
      narrative: 'Sesión Susana Pierre',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    // Sesión: Ray Expósito
    {
      id: 26,
      title: 'Ray Expósito - I',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-1.png',
      description: 'Capturando la esencia urbana y auténtica',
      narrative: 'Sesión Ray Expósito',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 27,
      title: 'Ray Expósito - II',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-2.jpg',
      description: 'Expresión natural bajo luz ambiente',
      narrative: 'Sesión Ray Expósito',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 28,
      title: 'Ray Expósito - III',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-3.jpg',
      description: 'Personalidad reflejada en cada gesto',
      narrative: 'Sesión Ray Expósito',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 29,
      title: 'Ray Expósito - IV',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-4.jpg',
      description: 'Momentos genuinos, presencia magnética',
      narrative: 'Sesión Ray Expósito',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    // Sesión: Rubén Trujillo
    {
      id: 30,
      title: 'Rubén Trujillo - I',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-1.png',
      description: 'Estilo urbano con actitud auténtica',
      narrative: 'Sesión Rubén Trujillo',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 31,
      title: 'Rubén Trujillo - II',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-2.png',
      description: 'La calle como escenario, carácter natural',
      narrative: 'Sesión Rubén Trujillo',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 32,
      title: 'Rubén Trujillo - III',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-3.png',
      description: 'Presencia que destaca en cualquier entorno',
      narrative: 'Sesión Rubén Trujillo',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 33,
      title: 'Rubén Trujillo - IV',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-4.jpg',
      description: 'Momentos genuinos en la ciudad',
      narrative: 'Sesión Rubén Trujillo',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
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
    { id: 'conceptual', label: 'Conceptual' },
    { id: 'landscape', label: 'Paisajes', folder: 'paisajes' },
    { id: 'abstract', label: 'Abstracto', folder: 'abstracto' },
    { id: 'portrait', label: 'Retratos' }
  ];

  const filteredImages = images.filter(img => img.category === selectedCategory);

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
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Creaciones generadas con IA y personalizadas con mi toque fotográfico.
            <br />
            Cada imagen cuenta una historia diferente.
          </p>
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
                        onClick={() => setSelectedImage(image)}
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
                  onClick={() => setSelectedImage(image)}
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

                      {/* Bottom - Title & Description */}
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-200 line-clamp-2">
                          {image.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-3">
                          {image.narrative}
                        </p>
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

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="max-w-4xl w-full"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-cover"
                  />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="text-2xl">×</span>
                  </button>

                  {/* Info panel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                          {selectedImage.category}
                        </span>
                        <span className="text-sm text-gray-400">
                          {selectedImage.narrative}
                        </span>
                      </div>
                      {selectedImage.instagram && (
                        <a
                          href={selectedImage.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
                        >
                          <span>📸</span>
                          <span>Ver en Instagram</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

