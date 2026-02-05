import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArtGallery({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // GalerÃ­a de imÃ¡genes - organizada por carpetas locales
  const images = [
    {
      id: 1,
      title: 'Abreu Studio - Conceptual I',
      category: 'conceptual',
      image: '/images/gallery/conceptual/Gemini_Generated_Image_4bq5je4bq5je4bq5.png',
      description: 'Explorando la intersecciÃ³n entre tecnologÃ­a y naturaleza digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 2,
      title: 'Abreu Studio - Conceptual II',
      category: 'conceptual',
      image: '/images/gallery/conceptual/Gemini_Generated_Image_859hk8859hk8859h.png',
      description: 'Naturaleza reimaginada a travÃ©s de una lente cibernÃ©tica',
      narrative: 'Abreu Studio'
    },
    {
      id: 3,
      title: 'Abreu Studio - Conceptual III',
      category: 'conceptual',
      image: '/images/gallery/conceptual/Gemini_Generated_Image_aohhn1aohhn1aohh.png',
      description: 'SÃ­ntesis de lo orgÃ¡nico y lo digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 4,
      title: 'Abreu Studio - Conceptual IV',
      category: 'conceptual',
      image: '/images/gallery/conceptual/Gemini_Generated_Image_jws0k5jws0k5jws0.png',
      description: 'Convergencia de mundos paralelos',
      narrative: 'Abreu Studio'
    },
    {
      id: 5,
      title: 'Abreu Studio - Conceptual V',
      category: 'conceptual',
      image: '/images/gallery/conceptual/Gemini_Generated_Image_n18n29n18n29n18n.png',
      description: 'Interfaz entre realidad y ficciÃ³n',
      narrative: 'Abreu Studio'
    },
    // PAISAJES
    {
      id: 6,
      title: 'Abreu Studio - Paisaje I',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_6ct7p26ct7p26ct7.png',
      description: 'MontaÃ±a cristal - picos que reflejan la realidad',
      narrative: 'Abreu Studio'
    },
    {
      id: 7,
      title: 'Abreu Studio - Paisaje II',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_f6dgyf6dgyf6dgyf.png',
      description: 'OcÃ©ano espejo - agua que refleja todo lo invisible',
      narrative: 'Abreu Studio'
    },
    {
      id: 8,
      title: 'Abreu Studio - Paisaje III',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_gm4nvegm4nvegm4n.png',
      description: 'Pradera luminiscente - hierba que emite luz propia',
      narrative: 'Abreu Studio'
    },
    {
      id: 9,
      title: 'Abreu Studio - Paisaje IV',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_lun9awlun9awlun9.png',
      description: 'Acantilado suspendido - rocas flotantes en el vacÃ­o',
      narrative: 'Abreu Studio'
    },
    {
      id: 10,
      title: 'Abreu Studio - Paisaje V',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_mxmknwmxmknwmxmk.png',
      description: 'Nebulosa terrestre - cielo y tierra fusionados',
      narrative: 'Abreu Studio'
    },
    {
      id: 11,
      title: 'Abreu Studio - Paisaje VI',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_ol2eesol2eesol2e.png',
      description: 'Isla etÃ©rea - tierra que flota entre nubes',
      narrative: 'Abreu Studio'
    },
    {
      id: 12,
      title: 'Abreu Studio - Paisaje VII',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_pb0q9fpb0q9fpb0q.png',
      description: 'Horizonte dual - donde dos mundos se encuentran',
      narrative: 'Abreu Studio'
    },
    {
      id: 13,
      title: 'Abreu Studio - Paisaje VIII',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_tn6rfitn6rfitn6r.png',
      description: 'Valle envuelto - niebla que guarda secretos',
      narrative: 'Abreu Studio'
    },
    {
      id: 14,
      title: 'Abreu Studio - Paisaje IX',
      category: 'landscape',
      image: '/images/gallery/paisajes/Gemini_Generated_Image_xq6t9wxq6t9wxq6t.png',
      description: 'MontaÃ±a destello - luz que emerge de la roca',
      narrative: 'Abreu Studio'
    },
    // ABSTRACTO
    {
      id: 15,
      title: 'Abreu Studio - Abstract I',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115108.png',
      description: 'Colores imposibles, composiciones de otro universo',
      narrative: 'Abreu Studio'
    },
    {
      id: 16,
      title: 'Abreu Studio - Abstract II',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115410.png',
      description: 'Formas fluidas en el caos cromÃ¡tico',
      narrative: 'Abreu Studio'
    },
    {
      id: 17,
      title: 'Abreu Studio - Abstract III',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115420.png',
      description: 'GeometrÃ­a disuelta en luz',
      narrative: 'Abreu Studio'
    },
    {
      id: 18,
      title: 'Abreu Studio - Abstract IV',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115429.png',
      description: 'Dimensiones entrelazadas',
      narrative: 'Abreu Studio'
    },
    {
      id: 19,
      title: 'Abreu Studio - Abstract V',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115924.png',
      description: 'VibraciÃ³n cÃ³smica visualizada',
      narrative: 'Abreu Studio'
    },
    {
      id: 20,
      title: 'Abreu Studio - Abstract VI',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115926.png',
      description: 'Espectro infinito en movimiento',
      narrative: 'Abreu Studio'
    },
    {
      id: 21,
      title: 'Abreu Studio - Abstract VII',
      category: 'abstract',
      image: '/images/gallery/abstracto/Copilot_20260205_115928.png',
      description: 'Materia transformÃ¡ndose en energÃ­a',
      narrative: 'Abreu Studio'
    },
    {
      id: 22,
      title: 'Abreu Studio - Portrait I',
      category: 'portrait',
      image: '/images/gallery/retratos/561252679_24872818952349685_7418151169259432037_n.jpg',
      description: 'Rostro que refleja la luz de mil historias',
      narrative: 'Abreu Studio'
    },
    {
      id: 23,
      title: 'Abreu Studio - Portrait II',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_27zitl27zitl27zi.png',
      description: 'Presencia etérea en la niebla digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 24,
      title: 'Abreu Studio - Portrait III',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_2e1u972e1u972e1u (1).png',
      description: 'Ojos que ven más allá del código',
      narrative: 'Abreu Studio'
    },
    {
      id: 25,
      title: 'Abreu Studio - Portrait IV',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_f3fddkf3fddkf3fd.png',
      description: 'Alma suspendida entre dimensiones',
      narrative: 'Abreu Studio'
    },
    {
      id: 26,
      title: 'Abreu Studio - Portrait V',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_k5ysqfk5ysqfk5ys.png',
      description: 'Figura que emerge de la penumbra',
      narrative: 'Abreu Studio'
    },
    {
      id: 27,
      title: 'Abreu Studio - Portrait VI',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_l4srxl4srxl4srxl.png',
      description: 'Gesto congelado en el tiempo sintético',
      narrative: 'Abreu Studio'
    },
    {
      id: 28,
      title: 'Abreu Studio - Portrait VII',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_l98rbgl98rbgl98r.png',
      description: 'Humanidad pixelada, alma intacta',
      narrative: 'Abreu Studio'
    },
    {
      id: 29,
      title: 'Abreu Studio - Portrait VIII',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_ljv1hzljv1hzljv1.png',
      description: 'Verdad contenida en geometría',
      narrative: 'Abreu Studio'
    },
    {
      id: 30,
      title: 'Abreu Studio - Portrait IX',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_ly8hxyly8hxyly8h.png',
      description: 'Puente entre lo real y lo posible',
      narrative: 'Abreu Studio'
    },
    {
      id: 31,
      title: 'Abreu Studio - Portrait X',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_njo69xnjo69xnjo6.png',
      description: 'Inteligencia y belleza convergentes',
      narrative: 'Abreu Studio'
    },
    {
      id: 32,
      title: 'Abreu Studio - Portrait XI',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_rq0dnmrq0dnmrq0d.png',
      description: 'Corazón que late en circuitos',
      narrative: 'Abreu Studio'
    },
    {
      id: 33,
      title: 'Abreu Studio - Portrait XII',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_t6p0gst6p0gst6p0.png',
      description: 'Luz interior en forma de rostro',
      narrative: 'Abreu Studio'
    },
    {
      id: 34,
      title: 'Abreu Studio - Portrait XIII',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_tgaa48tgaa48tgaa.png',
      description: 'Existencia más allá de lo visible',
      narrative: 'Abreu Studio'
    },
    {
      id: 35,
      title: 'Abreu Studio - Portrait XIV',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_uolksyuolksyuolk.png',
      description: 'Yo digital, esencia preservada',
      narrative: 'Abreu Studio'
    },
    {
      id: 36,
      title: 'Abreu Studio - Portrait XV',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_wrntd4wrntd4wrnt.png',
      description: 'Quietud contemplativa en píxeles',
      narrative: 'Abreu Studio'
    },
    {
      id: 37,
      title: 'Abreu Studio - Portrait XVI',
      category: 'portrait',
      image: '/images/gallery/retratos/Imagen_WhatsApp_20251129.jpg',
      description: 'Instante suspendido entre fotogramas',
      narrative: 'Abreu Studio'
    },
    {
      id: 38,
      title: 'Abreu Studio - Susana',
      category: 'portrait',
      image: '/images/gallery/retratos/SusanaRetrato.png',
      description: 'Identidad reflejada en el espejo digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 39,
      title: 'Abreu Studio - Portrait XVII',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_3n6y263n6y263n6y.png',
      description: 'Contemplación en la era digital',
      narrative: 'Abreu Studio'
    },
    {
      id: 40,
      title: 'Abreu Studio - Portrait XVIII',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_6pwo956pwo956pwo.png',
      description: 'Rostro que trasciende la materia',
      narrative: 'Abreu Studio'
    },
    {
      id: 41,
      title: 'Abreu Studio - Portrait XIX',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_lc9546lc9546lc95.png',
      description: 'Mirada que abraza el futuro',
      narrative: 'Abreu Studio'
    },
    {
      id: 42,
      title: 'Abreu Studio - Portrait XX',
      category: 'portrait',
      image: '/images/gallery/retratos/Gemini_Generated_Image_vgj3qkvgj3qkvgj3.png',
      description: 'Ser que refulge en la penumbra',
      narrative: 'Abreu Studio'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'conceptual', label: 'Conceptual' },
    { id: 'landscape', label: 'Paisajes', folder: 'paisajes' },
    { id: 'abstract', label: 'Abstracto', folder: 'abstracto' },
    { id: 'portrait', label: 'Retratos' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

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
              Mi GalerÃ­a Visual
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Creaciones generadas con IA y personalizadas con mi toque fotogrÃ¡fico.
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

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
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
                    <span className="text-2xl">Ã—</span>
                  </button>

                  {/* Info panel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        {selectedImage.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {selectedImage.narrative}
                      </span>
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

