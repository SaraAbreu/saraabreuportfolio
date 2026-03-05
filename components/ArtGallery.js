import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArtGallery({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('conceptual');

  // Galería de imágenes - organizada por carpetas locales
  const images = [
    {
      id: 1,
      title: 'Fragmentos de luz',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/concept1.png',
      description: 'Cuando la luz se fragmenta, nacen nuevas formas de ver',
      narrative: 'La realidad es solo una interpretación'
    },
    {
      id: 2,
      title: 'Pulso digital',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/concept2.png',
      description: 'El latido de lo que aún no existe pero ya se siente',
      narrative: 'Entre código y emoción'
    },
    {
      id: 3,
      title: 'Silencio visual',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/concept3.png',
      description: 'Lo que no se dice, a veces se ve',
      narrative: 'El arte del espacio vacío'
    },
    {
      id: 4,
      title: 'Capas de memoria',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/concept4.png',
      description: 'Cada capa guarda un recuerdo que nunca existió',
      narrative: 'Arqueología de lo imaginado'
    },
    {
      id: 5,
      title: 'Eco de color',
      category: 'conceptual',
      image: '/images/gallery/Conceptual/concept5.png',
      description: 'Los colores también tienen voz propia',
      narrative: 'Sinéstesia visual'
    },
    // PAISAJES
    {
      id: 6,
      title: 'Horizonte suspendido',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes2.png',
      description: 'Donde el cielo decide no terminar',
      narrative: 'El límite es solo una sugestión'
    },
    {
      id: 7,
      title: 'Atardecer quieto',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes3.png',
      description: 'El sol se despide sin prisas',
      narrative: 'Tiempo detenido en ambar'
    },
    {
      id: 8,
      title: 'Valle de niebla',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes4.png',
      description: 'Lo que la bruma oculta, la imaginación completa',
      narrative: 'Misterio en cada capa'
    },
    {
      id: 9,
      title: 'Agua dormida',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes5.png',
      description: 'Reflejos que cuentan historias paralelas',
      narrative: 'Dos mundos en uno'
    },
    {
      id: 10,
      title: 'Sendero borrado',
      category: 'landscape',
      image: '/images/gallery/Paisajes/pasaijes6.png',
      description: 'Caminos que solo existen si decides verlos',
      narrative: 'La ruta la creas tú'
    },
    {
      id: 11,
      title: 'Luz entre ramas',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes7.png',
      description: 'Cuando el bosque respira dorado',
      narrative: 'Naturaleza que ilumina'
    },
    {
      id: 12,
      title: 'Piedra y silencio',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes8.png',
      description: 'La montaña no habla, pero dice todo',
      narrative: 'Solidez que inspira'
    },
    {
      id: 13,
      title: 'Cielo partido',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes9.png',
      description: 'Entre nubes que pelean y se abrazan',
      narrative: 'Drama celeste'
    },
    {
      id: 14,
      title: 'Pradera infinita',
      category: 'landscape',
      image: '/images/gallery/Paisajes/paisajes10.png',
      description: 'Verde que no tiene fin ni principio',
      narrative: 'Libertad en estado puro'
    },
    // ABSTRACTO
    {
      id: 15,
      title: 'Caos ordenado',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract3.png',
      description: 'En el desorden hay una lógica que solo el alma entiende',
      narrative: 'Belleza sin reglas'
    },
    {
      id: 16,
      title: 'Emoción líquida',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract4.png',
      description: 'Sentimientos que fluyen sin forma definida',
      narrative: 'Lo que sientes, visualizado'
    },
    {
      id: 17,
      title: 'Geometría rota',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract5.png',
      description: 'Las líneas rectas también sueñan con curvas',
      narrative: 'Rebeldía estructural'
    },
    {
      id: 18,
      title: 'Profundidad vacía',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract6.png',
      description: 'Capas que esconden más capas',
      narrative: 'Infinito interior'
    },
    {
      id: 19,
      title: 'Ritmo invisible',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract7.png',
      description: 'La música que ves cuando cierras los ojos',
      narrative: 'Sonido en silencio'
    },
    {
      id: 20,
      title: 'Gradiente de alma',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract2.png',
      description: 'Transiciones suaves entre estados de ánimo',
      narrative: 'Del gris al color'
    },
    {
      id: 21,
      title: 'Energía contenida',
      category: 'abstract',
      image: '/images/gallery/Abstracto/abstract1.png',
      description: 'A punto de explotar, pero en perfecta calma',
      narrative: 'Tensión creativa'
    },
    // SESIONES FOTOGRÁFICAS - RETRATOS
    // Sesión: Susana Pierre
    {
      id: 22,
      title: 'Susana Pierre - Luz interior',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre4.jpg',
      description: 'La luz la encontró, ella solo tuvo que ser',
      narrative: 'Cuando la cámara desaparece y queda la persona',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 23,
      title: 'Susana Pierre - Mirada presente',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre1.jpeg',
      description: 'Ojos que cuentan historias sin palabras',
      narrative: 'La profundidad de un instante',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 24,
      title: 'Susana Pierre - Entre sombras',
      category: 'portrait',
      image: '/images/gallery/Retratos/susanapierre2.jpeg',
      description: 'Lo que la sombra revela, la luz no puede',
      narrative: 'Misterio y claridad en equilibrio',
      session: 'susana',
      instagram: 'https://www.instagram.com/d_pierre78/'
    },
    {
      id: 25,
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
      id: 26,
      title: 'Ray Expósito - Actitud urbana',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-1.png',
      description: 'La ciudad como escenario, él como protagonista',
      narrative: 'Donde el asfalto se vuelve estética',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 27,
      title: 'Ray Expósito - Momento real',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-2.jpg',
      description: 'Sin poses, sin filtros, solo él',
      narrative: 'La autenticidad no se ensaya',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 28,
      title: 'Ray Expósito - Gesto sincero',
      category: 'portrait',
      image: '/images/gallery/Retratos/ray-3.jpg',
      description: 'Cuando el gesto dice más que mil palabras',
      narrative: 'Expresión que conecta',
      session: 'ray',
      instagram: 'https://www.instagram.com/ray_exposito/'
    },
    {
      id: 29,
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
      id: 30,
      title: 'Rubén Trujillo - Calle y carácter',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-1.png',
      description: 'El entorno urbano como extensión de su personalidad',
      narrative: 'Donde la calle cuenta historias',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 31,
      title: 'Rubén Trujillo - Espacio propio',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-2.png',
      description: 'Cada espacio se transforma cuando él lo habita',
      narrative: 'Dueño de su territorio',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 32,
      title: 'Rubén Trujillo - Seguridad',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-3.png',
      description: 'La confianza se ve, no se explica',
      narrative: 'Presencia que no pide permiso',
      session: 'ruben',
      instagram: 'https://www.instagram.com/rubens_89/'
    },
    {
      id: 33,
      title: 'Rubén Trujillo - Instante',
      category: 'portrait',
      image: '/images/gallery/Retratos/ruben-4.jpg',
      description: 'Un segundo perfecto que duraba para siempre',
      narrative: 'Lo espontáneo tiene su propia magia',
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

