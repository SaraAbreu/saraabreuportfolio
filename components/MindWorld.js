import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hemisphereData = {
  estrategica: {
    id: 'estrategica',
    label: 'Estratega',
    color: 'cyan',
    colorHex: '#06b6d4',
    borderColor: '#0284c7',
    
    narrative: "Mi lado estratégico es la arquitectura invisible. Donde ves interfaces hermosas, yo veo sistemas. Cada decisión está fundamentada en datos, en patrones comprobados, en estructura que aguanta.",
    
    keywords: ['Arquitectura', 'Datos', 'Escalabilidad', 'Sistemática', 'Visión', 'Optimización', 'Metodología'],
    
    skills: [
      { icon: '🔧', title: 'Arquitectura técnica', desc: 'Diseño de sistemas escalables y mantenibles' },
      { icon: '📊', title: 'Análisis estratégico', desc: 'Identificación de patrones y oportunidades' },
      { icon: '🎯', title: 'Planificación', desc: 'Roadmaps desde concepto hasta producción' },
      { icon: '🔐', title: 'Estándares', desc: 'Best practices, clean code, SOLID principles' },
      { icon: '📈', title: 'Performance', desc: 'Optimización de UX, velocidad, accesibilidad' }
    ],
    
    questions: [
      '¿Cómo estructuro esto para que escale?',
      '¿Qué arquitectura soporta este crecimiento?',
      '¿Dónde está el cuello de botella?'
    ]
  },

  creativa: {
    id: 'creativa',
    label: 'Creativa',
    color: 'amber',
    colorHex: '#a89968',
    borderColor: '#d4a574',
    
    narrative: "Mi lado creativo respira en los espacios blancos. Veo historias donde otros ven interfaces, emociones donde hay píxeles. La belleza no es decoración: es intención hecha visible.",
    
    keywords: ['Narrativa', 'Estética', 'Emoción', 'Intuición', 'Sensibilidad', 'Belleza', 'Experiencia'],
    
    skills: [
      { icon: '🎨', title: 'Dirección visual', desc: 'Paletas, tipografía, composición' },
      { icon: '📖', title: 'Narrativa', desc: 'Historias que conectan emocionalmente' },
      { icon: '✨', title: 'Microinteracciones', desc: 'Animaciones que sorprenden y deleitan' },
      { icon: '🎭', title: 'Empatía', desc: 'Diseño desde la perspectiva del usuario' },
      { icon: '🌊', title: 'Flujo', desc: 'Experiencias que sienten naturales e intuitivas' }
    ],
    
    questions: [
      '¿Qué siente el usuario en este momento?',
      '¿Cómo puedo sorprender sin romper la experiencia?',
      '¿Qué historia quiero contar con esto?'
    ]
  }
};

export default function MindWorld() {
  const canvasRef = useRef(null);
  const [activeSide, setActiveSide] = useState(null);
  const [hoveredSide, setHoveredSide] = useState(null);

  const handleHemisphereClick = (side) => {
    setActiveSide(activeSide === side ? null : side);
  };

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Dualidad Cognitiva
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Dos hemisferios, una mente. La intersección de estrategia y creatividad donde nacen las mejores soluciones.
          </p>
        </motion.div>

        {/* Brain Canvas / Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-900/50 to-slate-950/50 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/mindworld.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5
              </video>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-600/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Interactive Buttons Overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
              {/* Left Hemisphere Button */}
              <motion.button
                onMouseEnter={() => setHoveredSide('estrategica')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => handleHemisphereClick('estrategica')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`pointer-events-auto relative px-4 sm:px-8 py-3 sm:py-4 rounded-l-full transition-all duration-300 ${
                  activeSide === 'estrategica'
                    ? 'bg-cyan-500/40 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50'
                    : hoveredSide === 'estrategica'
                    ? 'bg-cyan-500/20 border-2 border-cyan-400/60'
                    : 'bg-cyan-500/10 border-2 border-cyan-400/30'
                }`}
              >
                <div className="text-center">
                  <div className="font-mono font-bold text-sm sm:text-lg text-cyan-300 uppercase tracking-widest">
                    Estratega
                  </div>
                  <div className="text-xs text-cyan-200/70 mt-1 hidden sm:block">Toca para descubrir</div>
                </div>
              </motion.button>

              {/* Right Hemisphere Button */}
              <motion.button
                onMouseEnter={() => setHoveredSide('creativa')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => handleHemisphereClick('creativa')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`pointer-events-auto relative px-4 sm:px-8 py-3 sm:py-4 rounded-r-full transition-all duration-300 ${
                  activeSide === 'creativa'
                    ? 'bg-amber-600/40 border-2 border-amber-500 shadow-lg shadow-amber-600/50'
                    : hoveredSide === 'creativa'
                    ? 'bg-amber-600/20 border-2 border-amber-500/60'
                    : 'bg-amber-600/10 border-2 border-amber-500/30'
                }`}
              >
                <div className="text-center">
                  <div className="font-mono font-bold text-sm sm:text-lg text-amber-300 uppercase tracking-widest">
                    Creativa
                  </div>
                  <div className="text-xs text-amber-200/70 mt-1 hidden sm:block">Toca para descubrir</div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          {activeSide && (
            <motion.div
              key={activeSide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <div
                className={`glass-card p-8 sm:p-12 border-l-4 ${
                  activeSide === 'estrategica'
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/5'
                    : 'border-amber-600 bg-gradient-to-br from-amber-600/10 to-amber-700/5'
                }`}
              >
                {/* Title */}
                <div className="mb-8">
                  <h3
                    className={`text-3xl sm:text-4xl font-bold font-mono mb-2 ${
                      activeSide === 'estrategica' ? 'text-cyan-400' : 'text-amber-400'
                    }`}
                  >
                    {hemisphereData[activeSide].label}
                  </h3>
                  <div
                    className={`h-1 w-24 rounded-full ${
                      activeSide === 'estrategica' ? 'bg-cyan-500' : 'bg-amber-600'
                    }`}
                  />
                </div>

                {/* Narrative */}
                <p className="text-lg text-gray-200 mb-8 leading-relaxed italic">
                  "{hemisphereData[activeSide].narrative}"
                </p>

                {/* Keywords */}
                <div className="mb-10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Palabras clave
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {hemisphereData[activeSide].keywords.map((keyword) => (
                      <motion.span
                        key={keyword}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`px-4 py-2 rounded-full text-sm font-mono font-semibold ${
                          activeSide === 'estrategica'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-amber-600/20 text-amber-300 border border-amber-600/30'
                        }`}
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    Habilidades & Especialidades
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hemisphereData[activeSide].skills.map((skill, idx) => (
                      <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 rounded-lg border-l-2 ${
                          activeSide === 'estrategica'
                            ? 'border-cyan-500/50 bg-cyan-500/5'
                            : 'border-amber-600/50 bg-amber-600/5'
                        }`}
                      >
                        <div>
                          <h5 className="font-semibold text-white mb-1">{skill.title}</h5>
                          <p className="text-sm text-gray-400">{skill.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Thinking Questions */}
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Mis preguntas frecuentes
                  </h4>
                  <div className="space-y-3">
                    {hemisphereData[activeSide].questions.map((question, idx) => (
                      <motion.div
                        key={question}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className={`p-4 rounded-lg border-l-2 ${
                          activeSide === 'estrategica'
                            ? 'border-cyan-400/40 bg-cyan-400/5'
                            : 'border-amber-500/40 bg-amber-500/5'
                        }`}
                      >
                        <p className="text-gray-300 italic">"{question}"</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!activeSide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              Haz clic en cualquiera de los hemisferios para explorar mi dualidad cognitiva
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
