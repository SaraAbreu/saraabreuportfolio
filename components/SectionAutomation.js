'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                <h4 className="text-lg font-semibold text-white mb-2 font-serif">
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
              <h4 className="text-white font-semibold text-base">{feature.title}</h4>
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

export default function SectionAutomation() {
  const [activeSection, setActiveSection] = useState(null);

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

        <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
            Automatización — Sistemas con intención
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl">
          Inspector de decisiones: pasa el cursor para explorar el pensamiento detrás de cada paso
        </p>
      </motion.div>

      {/* Grid de 2 columnas con canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Cadencia */}
        <motion.div 
          className="group relative overflow-hidden rounded-2xl border border-cyan-500/20"
          variants={itemVariants}
          onMouseEnter={() => setActiveSection('cadencia')}
          onMouseLeave={() => setActiveSection(null)}
        >
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-black z-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="relative p-6 bg-black/50 backdrop-blur-sm">
            <motion.h3 
              className="text-2xl font-bold mb-2 text-white"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Cadencia de publicación automatizada
            </motion.h3>

            <motion.p 
              className="text-gray-400 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Diseñé un flujo que{' '}
              <InspectableWord word={inspectableTerms.transforma.text} tooltip={inspectableTerms.transforma.tooltip} index={0} />
              , <InspectableWord word={inspectableTerms.valida.text} tooltip={inspectableTerms.valida.tooltip} index={1} /> y
              publica contenido con{' '}
              <InspectableWord word={inspectableTerms.revisionesHumanas.text} tooltip={inspectableTerms.revisionesHumanas.tooltip} index={2} />
              . Resultado: coherencia editorial y menos fricción operativa.
            </motion.p>

            {/* Flujo visual de checkpoints */}
            <PublicationFlow />

            {/* Detalles con bullets */}
            <motion.div 
              className="mt-8 space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0 pt-0.5">▪</span>
                <div>
                  <span className="text-cyan-300 font-mono text-sm">¿Qué significa?</span>
                  <p className="text-gray-400 text-sm mt-1">En lugar de publicar cuando yo decida, el sistema revisa cada pieza contra un checklist editorial.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 pt-0.5">▪</span>
                <div>
                  <span className="text-purple-300 font-mono text-sm">Ganancia ética</span>
                  <p className="text-gray-400 text-sm mt-1">Cada publicación tiene una firma humana, no es "el algoritmo decidió".</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pipeline */}
        <motion.div 
          className="group relative overflow-hidden rounded-2xl border border-purple-500/20"
          variants={itemVariants}
          onMouseEnter={() => setActiveSection('pipeline')}
          onMouseLeave={() => setActiveSection(null)}
        >
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-black z-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="relative p-6 bg-black/50 backdrop-blur-sm">
            <motion.h3 
              className="text-2xl font-bold mb-2 text-white"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Pipeline de imágenes
            </motion.h3>

            <motion.p 
              className="text-gray-400 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Un pipeline que respeta{' '}
              <InspectableWord word={inspectableTerms.metadatos.text} tooltip={inspectableTerms.metadatos.tooltip} index={3} />
              , <InspectableWord word={inspectableTerms.versiones.text} tooltip={inspectableTerms.versiones.tooltip} index={4} /> y{' '}
              <InspectableWord word={inspectableTerms.trazabilidad.text} tooltip={inspectableTerms.trazabilidad.tooltip} index={5} />
              : automatización repetible sin borrar el{' '}
              <InspectableWord word={inspectableTerms.controlHumano.text} tooltip={inspectableTerms.controlHumano.tooltip} index={6} />.
            </motion.p>

            {/* Flujo visual del pipeline de imágenes */}
            <ImagePipelineFlow />
          </div>
        </motion.div>
      </div>

      {/* Pilares con efecto de red neural */}
      <motion.div 
        className="relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/50 via-cyan-500/5 to-purple-500/5 backdrop-blur-sm"
        variants={itemVariants}
      >
        <motion.h3 
          className="text-2xl font-bold mb-8 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Pilares del pensamiento
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Intención',
              desc: 'Claridad en cada paso del proceso',
              color: 'from-cyan-500/30 to-cyan-500/10',
              border: 'border-cyan-500/30'
            },
            {
              title: 'Responsabilidad',
              desc: 'Humano en el centro, máquina como herramienta',
              color: 'from-purple-500/30 to-purple-500/10',
              border: 'border-purple-500/30'
            },
            {
              title: 'Escala',
              desc: 'Eficiencia sin perder control creativo',
              color: 'from-amber-500/30 to-amber-500/10',
              border: 'border-amber-500/30'
            }
          ].map((pilar, idx) => (
            <motion.div
              key={idx}
              className={`relative p-4 rounded-lg border ${pilar.border} bg-gradient-to-br ${pilar.color} backdrop-blur-sm overflow-hidden group`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                borderColor: 'rgba(6, 182, 212, 0.5)',
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Glow en hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${pilar.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              />

              <div className="relative">
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  {pilar.title}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {pilar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
