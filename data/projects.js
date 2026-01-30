const makeThumb = (title, hue = 200, w = 1200, h = 800) => {
  const svg = `<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='hsl(${hue} 60% 30%)'/><text x='50%' y='50%' font-family='Inter, Arial' font-size='48' fill='white' text-anchor='middle' alignment-baseline='middle'>${title}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const projects = [
  {
    slug: 'portfolio-principal',
    title: 'Portfolio Principal',
    short: 'Sitio personal con case studies y blog.',
    tech: 'Next.js, Tailwind CSS',
    hue: 210,
    images: [makeThumb('Portfolio — Home', 210), makeThumb('Portfolio — Case', 220)],
    role: 'Diseño UX, Frontend',
    duration: '3 meses',
    liveUrl: '/',
    objectives: [
      'Clarificar la narrativa de proyectos',
      'Mejorar la conversión en contactos',
      'Presentar métricas de impacto'
    ],
    challenge:
      'Consolidar proyectos diversos en una narrativa coherente y visualmente atractiva sin perder detalle técnico.',
    solution:
      'Diseñamos una estructura de case study replicable, visual assets y métricas clave en la parte superior para facilitar la lectura rápida.',
    metrics: [
      { label: 'Tiempo de carga (LCP)', value: '1.2s' },
      { label: 'Tasa de contacto', value: '+18%' }
    ],
    case: {
      concise:
        'Un portfolio claro y accesible que comunica proyectos y resultados. Enfocado en la narrativa visual y métricas clave.',
      academic:
        'Diseño orientado a la exposición de casos de estudio, con un enfoque metodológico en objetivos, hipótesis, metodología y resultados cuantificables.',
      emotional:
        'Un espacio que cuenta historias: el recorrido detrás de cada proyecto, los retos humanos y las soluciones que construimos juntos.'
    }
  },
  {
    slug: 'tienda-etica',
    title: 'Tienda Ética',
    short: 'E-commerce con enfoque en comercio justo.',
    tech: 'React, Stripe',
    hue: 190,
    images: [makeThumb('Tienda — Catálogo', 190), makeThumb('Tienda — Producto', 200)],
    role: 'Product, Integraciones',
    duration: '4 meses',
    liveUrl: '/',
    objectives: [
      'Crear un flujo de compra transparente',
      'Reducir fricción en la conversión',
      'Comunicar origen y trazabilidad'
    ],
    challenge:
      'Diseñar confianza en un público escéptico y equilibrar storytelling con el funnel de compra.',
    solution:
      'Interfaz enfocada en claridad, microcopy que explica proceso y una experiencia de checkout optimizada con Stripe.',
    metrics: [
      { label: 'Conversión', value: '+12%' },
      { label: 'Tasa de abandono de carrito', value: '-9%' }
    ],
    case: {
      concise: 'Tienda enfocada en usabilidad y conversiones con procesos de compra transparentes.',
      academic:
        'Implementación de un funnel optimizado para marketplaces éticos, con métricas de retención y conversión monitorizadas.',
      emotional:
        'Una experiencia de compra que transmite confianza y propósito, diseñada para conectar valores con acción.'
    }
  },
  {
    slug: 'app-workshops',
    title: 'App de Workshops',
    short: 'Plataforma para reservar y gestionar talleres.',
    tech: 'Node, Postgres',
    hue: 170,
    images: [makeThumb('Workshops — Dashboard', 170), makeThumb('Workshops — Reserva', 160)],
    role: 'Arquitectura, Backend',
    duration: '5 meses',
    liveUrl: '/',
    objectives: [
      'Gestionar reservas y asistentes',
      'Automatizar recordatorios',
      'Escalar operaciones administrativas'
    ],
    challenge:
      'Permitir a organizadores gestionar múltiples eventos con calendarios, pagos y reportes sin complejidad técnica.',
    solution:
      'Arquitectura basada en eventos, panel de administración y flujos de notificaciones automatizadas.',
    metrics: [
      { label: 'Reducción de trabajo manual', value: '60%' },
      { label: 'Retención organizadores', value: '+25%' }
    ],
    case: {
      concise: 'Herramienta para gestionar reservas, participantes y pagos de forma escalable.',
      academic:
        'Arquitectura basada en eventos y diseño orientado a la gestión de usuarios y flujos administrativos.',
      emotional:
        'Facilita que los organizadores concentren su energía en la enseñanza, mientras la plataforma se encarga del resto.'
    }
  },
  {
    slug: 'ia-demo',
    title: 'Herramienta IA (demo)',
    short: 'Prototipo de generador IA y flujos.',
    tech: 'Next.js, Mock API',
    hue: 150,
    images: [makeThumb('IA — Generador', 150), makeThumb('IA — Galería', 140)],
    role: 'Prototipado, Experimentos UX',
    duration: '6 semanas',
    liveUrl: '/generator',
    objectives: [
      'Validar interacción prompt→resultado',
      'Explorar parámetros de estilo',
      'Medir engagement en galerías'
    ],
    challenge:
      'Comprender cómo usuarios describen ideas en lenguaje natural y traducirlo a resultados visuales útiles.',
    solution:
      'Mock API y flujos de interfaz que permiten iterar rápidamente sobre prompts, estilos y opciones de salida.',
    metrics: [
      { label: 'Interacciones por sesión', value: '3.2' },
      { label: 'Compartidos', value: '12%' }
    ],
    case: {
      concise:
        'Prototipo que demuestra flujo de prompt→resultado, ideal para validar producto e iterar.',
      academic:
        'Evaluación de UX para sistemas generativos, con pruebas A/B en prompts y control de parámetros.',
      emotional:
        'Un experimento creativo que permite explorar ideas rápidamente y materializarlas en imágenes.'
    }
  }
];

export default projects;
