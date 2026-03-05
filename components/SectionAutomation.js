'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente de partículas flotantes para el fondo
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-rose-500/30 to-pink-500/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Componente de nodo interactivo del flujo
const FlowNode = ({ stage, isActive, onClick, index }) => {
  const colors = {
    entrada: { bg: 'from-rose-600 to-pink-500', glow: 'shadow-rose-500/50', border: 'border-rose-400' },
    proceso: { bg: 'from-purple-600 to-fuchsia-500', glow: 'shadow-purple-500/50', border: 'border-purple-400' },
    optimiza: { bg: 'from-amber-500 to-orange-500', glow: 'shadow-amber-500/50', border: 'border-amber-400' },
    salida: { bg: 'from-emerald-500 to-cyan-500', glow: 'shadow-emerald-500/50', border: 'border-emerald-400' },
  };
  const color = colors[stage.type] || colors.entrada;

  return (
    <motion.div
      className="relative flex flex-col items-center cursor-pointer group"
      onClick={() => onClick(stage)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Nodo principal */}
      <motion.div
        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${color.bg} flex items-center justify-center border-2 ${color.border} ${isActive ? `shadow-2xl ${color.glow}` : 'shadow-lg'}`}
        whileHover={{ scale: 1.15, boxShadow: '0 0 40px rgba(244, 63, 94, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        animate={isActive ? { scale: [1, 1.1, 1], boxShadow: ['0 0 20px rgba(244, 63, 94, 0.4)', '0 0 40px rgba(244, 63, 94, 0.8)', '0 0 20px rgba(244, 63, 94, 0.4)'] } : {}}
        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
      >
        <span className="text-3xl md:text-4xl">{stage.icon}</span>
        {/* Pulso animado */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${color.bg} opacity-30`}
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
      </motion.div>
      {/* Etiqueta */}
      <motion.span
        className="mt-3 text-sm md:text-base font-bold text-white group-hover:text-rose-300 transition-colors"
        whileHover={{ y: -2 }}
      >
        {stage.title}
      </motion.span>
    </motion.div>
  );
};

// Componente de conexión animada entre nodos
const FlowConnection = ({ index }) => (
  <motion.div
    className="flex-1 h-1 mx-2 md:mx-4 rounded-full bg-gradient-to-r from-rose-500/50 via-purple-500/50 to-pink-500/50 relative overflow-hidden"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Partícula viajando */}
    <motion.div
      className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-white/80 to-transparent rounded-full"
      animate={{ x: ['0%', '400%'] }}
      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5, ease: 'easeInOut' }}
    />
  </motion.div>
);

// Componente para palabras/frases inspeccionables con efecto glow
const InspectableWord = ({ word, tooltip, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
    },
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span 
        className="relative inline-block"
        animate={isHovered ? {
          textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)'
        } : {
          textShadow: 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="border-b-2 border-cyan-400/60 hover:border-cyan-300 cursor-help font-semibold transition-colors duration-200">
          {word}
        </span>
      </motion.span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
            className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-4 w-72"
          >
            {/* Tooltip con efecto glow */}
            <motion.div
              className="relative p-4 rounded-xl bg-black/90 border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-50 -z-10" />

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <motion.div 
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-cyan-300 text-xs uppercase tracking-widest font-mono">Análisis</span>
                </div>
                <p className="text-gray-100 text-sm leading-relaxed font-serif">
                  {tooltip}
                </p>
              </div>

              {/* Punta con efecto */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-black border border-cyan-500/40 transform rotate-45"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

// Componente de flujo de pipeline de imágenes
const ImagePipelineFlow = () => {
  const stages = [
    {
      id: 1,
      phase: 'Captura',
      icon: '○',
      title: 'Original Preservado',
      items: ['Archivo sin modificar', 'Metadatos íntegros', 'Baseline de referencia'],
      color: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'border-cyan-400/40'
    },
    {
      id: 2,
      phase: 'Transformación',
      icon: '◆',
      title: 'Genera Variantes',
      items: ['Redimensiona automático', 'Comprime inteligente', 'Múltiples formatos'],
      color: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-400/40'
    },
    {
      id: 3,
      phase: 'Optimización',
      icon: '≈',
      title: 'Balance Calidad-Peso',
      items: ['Calidad preservada', 'Tamaño optimizado', 'Performance ganado'],
      color: 'from-amber-500/20 to-amber-500/5',
      borderColor: 'border-amber-400/40'
    },
    {
      id: 4,
      phase: 'Auditoría',
      icon: '✓',
      title: 'Rastreo Completo',
      items: ['Quién cambió qué', 'Cuándo y por qué', 'Reversión disponible'],
      color: 'from-cyan-500/30 to-purple-500/20',
      borderColor: 'border-cyan-400/50'
    }
  ];

  const features = [
    {
      title: 'Sin Riesgos',
      icon: '◇',
      description: 'El original nunca se toca. Todas las versiones son derivadas reversibles.',
      color: 'from-cyan-500/10 to-cyan-500/5',
      borderColor: 'border-cyan-400/30'
    },
    {
      title: 'Auditable',
      icon: '▬',
      description: 'Sé exactamente quién modificó qué, cuándo, y tengo registro de cada decisión.',
      color: 'from-purple-500/10 to-purple-500/5',
      borderColor: 'border-purple-400/30'
    },
    {
      title: 'Control Total',
      icon: '◉',
      description: 'Reversión instantánea a cualquier versión. Nada se pierde, todo se rastrea.',
      color: 'from-amber-500/10 to-amber-500/5',
      borderColor: 'border-amber-400/30'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Flujo visual de 4 fases */}
      <div className="space-y-6">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            className={`relative p-6 rounded-xl border ${stage.borderColor} bg-gradient-to-r ${stage.color} backdrop-blur-sm overflow-hidden`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Número de etapa */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl" />
            
            {/* Contenido */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-start">
            {/* Icono + Fase */}
              <div className="col-span-2 flex flex-col items-center gap-2">
                <div className="text-3xl font-light tracking-tight text-cyan-300">{stage.icon}</div>
                <span className="text-xs uppercase tracking-widest font-mono text-cyan-300">
                  {stage.phase}
                </span>
              </div>

              {/* Información */}
              <div className="col-span-10">
                <h4 className="text-lg font-semibold text-white mb-3 font-serif">
                  {stage.phase}: <span className="text-cyan-300">{stage.title}</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {stage.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2 break-words">
                      <span className="text-xs text-cyan-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Línea conectora */}
            {idx < stages.length - 1 && (
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent transform translate-y-8" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Características clave */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className={`p-6 sm:p-6 py-8 rounded-xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-sm`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-light text-cyan-300">{feature.icon}</span>
              <h4 className="text-white font-semibold text-sm sm:text-base break-words">{feature.title}</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed break-words">{feature.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Resumen final */}
      <motion.div
        className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 backdrop-blur-sm text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-sm leading-relaxed font-serif max-w-2xl mx-auto">
          <span className="text-cyan-300 font-semibold">Automatización sin fricciones:</span> múltiples versiones optimizadas mientras el original permanece intacto. 
          <span className="text-purple-300 font-semibold">Auditoría completa</span> de cada paso, <span className="text-amber-300 font-semibold">reversión garantizada.</span>
        </p>
      </motion.div>
    </div>
  );
};

// Componente de flujo detallado con decisiones
const PublicationFlow = () => {
  const stages = [
    {
      id: 1,
      phase: 'Entrada',
      icon: '├',
      title: 'Contenido Crudo',
      items: ['Pieza sin procesar', 'Estado inicial capturado', 'Metadata base'],
      color: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'border-cyan-400/40'
    },
    {
      id: 2,
      phase: 'Transformación',
      icon: '◆',
      title: 'Estructura Automática',
      items: ['Formato coherente', 'Enriquecimiento de datos', 'Normalización'],
      color: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-400/40'
    },
    {
      id: 3,
      phase: 'Validación',
      icon: '✔',
      title: 'Cumple Criterios',
      items: ['Estándares editoriales', 'Coherencia de voz', 'Integridad de referencias'],
      color: 'from-amber-500/20 to-amber-500/5',
      borderColor: 'border-amber-400/40'
    },
    {
      id: 4,
      phase: 'Revisión',
      icon: '◉',
      title: 'Lectura Final',
      items: ['Revisión editorial', 'Ajustes manuales', 'Aprobación firmada'],
      color: 'from-cyan-500/30 to-purple-500/20',
      borderColor: 'border-cyan-400/50'
    },
    {
      id: 5,
      phase: 'Publicación',
      icon: '▲',
      title: 'En Producción',
      items: ['Publicación autorizada', 'Auditada y firmada', 'Rastreable siempre'],
      color: 'from-green-500/20 to-cyan-500/20',
      borderColor: 'border-green-400/40'
    }
  ];

  const decisions = [
    { from: 2, label: '¿Cumple formato?', yes: 3, no: 'Rechazar' },
    { from: 3, label: '¿Es coherente?', yes: 4, no: 'Devolver' },
    { from: 4, label: '¿Doy OK?', yes: 5, no: 'Refinar' }
  ];

  return (
    <div className="space-y-12">
      {/* Flujo visual de 5 etapas */}
      <div className="space-y-6">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            className={`relative p-6 rounded-xl border ${stage.borderColor} bg-gradient-to-r ${stage.color} backdrop-blur-sm overflow-hidden`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Número de etapa */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl" />
            
            {/* Contenido */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-start">
              {/* Icono + Fase */}
              <div className="col-span-2 flex flex-col items-center gap-2">
                <div className="text-5xl">{stage.icon}</div>
                <span className="text-xs uppercase tracking-widest font-mono text-cyan-300">
                  Paso {stage.id}
                </span>
              </div>

              {/* Información */}
              <div className="col-span-10">
                <h4 className="text-lg font-semibold text-white mb-2 font-serif">
                  {stage.phase}: <span className="text-cyan-300">{stage.title}</span>
                </h4>
                <ul className="grid grid-cols-3 gap-2">
                  {stage.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-xs text-cyan-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Línea conectora */}
            {idx < stages.length - 1 && (
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent transform translate-y-8" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Decisiones críticas */}
      <motion.div
        className="p-6 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/5 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-white mb-4 font-serif">
          <span className="text-amber-300">⚖️ Puntos de Decisión</span>
        </h4>
        
        <div className="grid grid-cols-3 gap-4">
          {decisions.map((decision, i) => (
            <div key={i} className="p-4 rounded-lg border border-amber-500/20 bg-black/40">
              <p className="text-xs uppercase tracking-widest text-amber-300 font-mono mb-3">
                Después del paso {decision.from}
              </p>
              <p className="text-sm font-semibold text-white mb-3">{decision.label}</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-green-300">Sí → Continúa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="text-red-300">No → {decision.no}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Beneficios + Coherencia */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Coherencia Editorial */}
        <div className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm">
          <h4 className="flex items-center gap-2 text-white font-semibold mb-3 text-base">
            <span className="text-xl">📋</span> Coherencia Editorial
          </h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Tono consistente en todas piezas
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Estructura y formato uniforme
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Criterios editoriales aplicados
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Trazabilidad de cambios
            </li>
          </ul>
        </div>

        {/* Menos Fricción */}
        <div className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm">
          <h4 className="flex items-center gap-2 text-white font-semibold mb-3 text-base">
            <span className="text-xl">⚙️</span> Menos Fricción Operativa
          </h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-purple-400">✓</span> 80% del trabajo automatizado
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-purple-400">✓</span> Solo decisiones críticas manuales
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-purple-400">✓</span> Ciclos de publicación más rápidos
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <span className="text-purple-400">✓</span> Menos cuellos de botella humanos
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Resumen final */}
      <motion.div
        className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 backdrop-blur-sm text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-sm leading-relaxed font-serif max-w-2xl mx-auto">
          <span className="text-cyan-300 font-semibold">Máquina hace lo repetitivo, yo decido lo importante.</span> 
          El 80% se automatiza; mi revisión es solo sobre lo que realmente importa. 
          <span className="text-purple-300 font-semibold">Resultado: coherencia editorial sin fricción.</span>
        </p>
      </motion.div>
    </div>
  );
};

// Data de tooltips
const inspectableTerms = {
  transforma: {
    text: 'transforma',
    tooltip:
      'Intención: convertir contenido bruto en forma editorial coherente. Problema que resuelve: evita publicar sin estructura. Riesgo que evita: pérdida de contexto.',
  },
  valida: {
    text: 'valida',
    tooltip:
      'Intención: verificar que el contenido cumple criterios antes de publicar. Problema que resuelve: previene errores en producción. Riesgo que evita: daño a credibilidad.',
  },
  revisionesHumanas: {
    text: 'revisiones humanas integradas',
    tooltip:
      'Intención: asegurar que decisiones críticas pasen por criterio humano. Problema que resuelve: mantiene control creativo. Riesgo que evita: automatización deshumanizada.',
  },
  metadatos: {
    text: 'metadatos',
    tooltip:
      'Intención: preservar información estructural. Problema que resuelve: permite rastrear y actualizar contenido. Riesgo que evita: contenido huérfano sin contexto.',
  },
  versiones: {
    text: 'versiones',
    tooltip:
      'Intención: mantener histórico de cambios. Problema que resuelve: permite revertir y comparar. Riesgo que evita: perder auditoría y recuperación.',
  },
  trazabilidad: {
    text: 'trazabilidad',
    tooltip:
      'Intención: saber exactamente qué pasó en cada paso. Problema que resuelve: transparencia operativa. Riesgo que evita: decisiones opacas.',
  },
  controlHumano: {
    text: 'control humano',
    tooltip:
      'Intención: la máquina propone, el humano dispone. Problema que resuelve: evita automatización ciega. Riesgo que evita: perder agencia ética.',
  },
};

// Datos del flujo interactivo
const flowStages = [
  {
    id: 'entrada',
    type: 'entrada',
    icon: '📥',
    title: 'Entrada',
    description: 'Todo comienza aquí. Los datos, archivos o tareas entran al sistema. Se capturan metadatos, se valida la integridad y se prepara todo para el procesamiento.',
    tags: ['Captura de datos', 'Validación', 'Metadatos'],
  },
  {
    id: 'proceso',
    type: 'proceso',
    icon: '⚙️',
    title: 'Transforma',
    description: 'El corazón de la automatización. Los datos se procesan, transforman y enriquecen según reglas definidas. Aquí la máquina trabaja, pero el humano diseña las reglas.',
    tags: ['Procesamiento', 'Transformación', 'Reglas inteligentes'],
  },
  {
    id: 'optimiza',
    type: 'optimiza',
    icon: '🚀',
    title: 'Optimiza',
    description: 'La eficiencia cobra vida. Se eliminan redundancias, se comprimen datos, se mejora el rendimiento. Todo sin perder calidad ni control.',
    tags: ['Optimización', 'Rendimiento', 'Calidad'],
  },
  {
    id: 'salida',
    type: 'salida',
    icon: '✅',
    title: 'Salida',
    description: 'El resultado final. Datos listos, tareas completadas, todo rastreable y auditado. El humano revisa, aprueba y tiene el control total.',
    tags: ['Resultado', 'Auditoría', 'Control humano'],
  },
];

export default function SectionAutomation() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeStage, setActiveStage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <motion.section 
      className="mt-24 max-w-6xl mx-auto text-left py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Título con gradiente cibernético */}
      <motion.div className="mb-16" variants={itemVariants}>
        <motion.div
          className="inline-block mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
            <span className="text-cyan-300 text-xs uppercase tracking-widest font-mono">Sistema inteligente</span>
          </div>
        </motion.div>

        <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Automatización — Sistemas con intención
          </span>
        </h2>
        <motion.p 
          className="text-rose-100/90 text-xl max-w-3xl font-serif leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-rose-300 font-semibold">Automatiza sin perder el alma.</span> Procesos que fluyen, decisiones que importan y control que permanece en tus manos. Explora cómo la tecnología amplifica tu creatividad.
        </motion.p>
      </motion.div>

      {/* Flujo de automatización */}
      <motion.div
        className="relative mb-16 p-8 md:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-black/80 via-blue-950/20 to-violet-950/20 backdrop-blur-xl overflow-hidden"
        variants={itemVariants}
      >
        {/* Partículas de fondo azul-violeta */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-violet-500/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Título del flujo */}
        <motion.div className="text-center mb-10 relative z-10">
          <motion.h3
            className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Flujo de automatización
          </motion.h3>
          <motion.p
            className="text-blue-200/70 text-base md:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            De la idea a la realidad, paso a paso
          </motion.p>
        </motion.div>

        {/* Nodos del flujo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative z-10">
          {/* Nodo 1: Entrada */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-2 border-blue-400"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl">📥</span>
            </motion.div>
            <span className="mt-3 text-sm font-bold text-blue-300">Entrada</span>
          </motion.div>

          {/* Conexión 1-2 */}
          <motion.div
            className="hidden md:block flex-1 h-1 mx-4 rounded-full bg-gradient-to-r from-blue-500/60 to-indigo-500/60 relative overflow-hidden max-w-[80px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-4 bg-white/40 rounded-full"
              animate={{ x: ['-100%', '2000%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
          <div className="md:hidden w-1 h-8 bg-gradient-to-b from-blue-500/60 to-indigo-500/60 rounded-full" />

          {/* Nodo 2: Proceso */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center border-2 border-indigo-400"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl">⚙️</span>
            </motion.div>
            <span className="mt-3 text-sm font-bold text-indigo-300">Proceso</span>
          </motion.div>

          {/* Conexión 2-3 */}
          <motion.div
            className="hidden md:block flex-1 h-1 mx-4 rounded-full bg-gradient-to-r from-indigo-500/60 to-purple-500/60 relative overflow-hidden max-w-[80px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-4 bg-white/40 rounded-full"
              animate={{ x: ['-100%', '2000%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </motion.div>
          <div className="md:hidden w-1 h-8 bg-gradient-to-b from-indigo-500/60 to-purple-500/60 rounded-full" />

          {/* Nodo 3: Optimiza */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center border-2 border-purple-400"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl">✨</span>
            </motion.div>
            <span className="mt-3 text-sm font-bold text-purple-300">Optimiza</span>
          </motion.div>

          {/* Conexión 3-4 */}
          <motion.div
            className="hidden md:block flex-1 h-1 mx-4 rounded-full bg-gradient-to-r from-purple-500/60 to-violet-500/60 relative overflow-hidden max-w-[80px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-4 bg-white/40 rounded-full"
              animate={{ x: ['-100%', '2000%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1 }}
            />
          </motion.div>
          <div className="md:hidden w-1 h-8 bg-gradient-to-b from-purple-500/60 to-violet-500/60 rounded-full" />

          {/* Nodo 4: Salida */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center border-2 border-violet-400"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            <span className="mt-3 text-sm font-bold text-violet-300">Salida</span>
          </motion.div>
        </div>

        {/* Descripción del flujo */}
        <motion.p
          className="text-center text-blue-200/60 text-sm mt-8 max-w-lg mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Cada paso del proceso está diseñado para amplificar tu trabajo, no reemplazarlo
        </motion.p>
      </motion.div>

      {/* Dos ideas cobrando vida */}
      <motion.div
        className="relative mb-16 p-8 md:p-12 rounded-3xl border border-rose-500/30 bg-gradient-to-br from-black/80 via-rose-950/20 to-purple-950/20 backdrop-blur-xl overflow-hidden"
        variants={itemVariants}
      >
        {/* Partículas de fondo */}
        <FloatingParticles />

        {/* Título de la sección */}
        <motion.div className="text-center mb-12 relative z-10">
          <motion.h3
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Dos ideas cobrando vida
          </motion.h3>
          <motion.p
            className="text-cyan-200/80 text-lg md:text-xl max-w-2xl mx-auto font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Proyectos que están tomando forma en mi mente. Pronto los verás nacer.
          </motion.p>
        </motion.div>

        {/* Las dos ideas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Idea 1 */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-rose-900/30 to-purple-900/30 border border-rose-500/20 backdrop-blur-sm overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(244, 63, 94, 0.5)' }}
          >
            {/* Icono animado */}
            <motion.div
              className="text-6xl mb-6"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💡
            </motion.div>
            <h4 className="text-2xl font-bold text-white mb-3">Idea en gestación</h4>
            <p className="text-rose-200/70 leading-relaxed mb-4">
              Una visión que conecta creatividad y tecnología de formas que aún no has visto. Está madurando.
            </p>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-rose-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-rose-300/60 text-sm font-mono">En desarrollo...</span>
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            />
          </motion.div>

          {/* Idea 2 */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-rose-900/30 border border-purple-500/20 backdrop-blur-sm overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
          >
            {/* Icono animado */}
            <motion.div
              className="text-6xl mb-6"
              animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.div>
            <h4 className="text-2xl font-bold text-white mb-3">Chispa encendida</h4>
            <p className="text-purple-200/70 leading-relaxed mb-4">
              Algo que empezó como una intuición y ahora toma forma. Pronto tendrá nombre y rostro.
            </p>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-purple-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              <span className="text-purple-300/60 text-sm font-mono">Tomando forma...</span>
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            />
          </motion.div>
        </div>

        {/* Mensaje de pronto */}
        <motion.div
          className="text-center mt-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Pronto enseñaré más...
          </motion.p>
          <p className="text-rose-200/50 text-sm mt-3 font-mono">
            — Ideas que merecen tiempo para nacer bien
          </p>
        </motion.div>
      </motion.div>

      {/* Mensaje final */}
      <motion.div 
        className="relative p-8 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-black/50 via-rose-950/10 to-purple-950/10 backdrop-blur-sm text-center"
        variants={itemVariants}
      >
        <motion.p
          className="text-xl md:text-2xl text-rose-100/80 font-serif leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-rose-300">"</span>
          Las mejores ideas necesitan tiempo para respirar. Estas dos están respirando profundo antes de salir al mundo.
          <span className="text-rose-300">"</span>
        </motion.p>
        <motion.p
          className="text-rose-400/60 text-sm mt-4 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          — Sara Abreu
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
