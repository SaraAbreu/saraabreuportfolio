const makeThumb = (title, hue = 200, w = 1200, h = 800) => {
  const svg = `<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='hsl(${hue} 60% 30%)'/><text x='50%' y='50%' font-family='Inter, Arial' font-size='48' fill='white' text-anchor='middle' alignment-baseline='middle'>${title}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const projects = [
  {
    slug: 'syntexia-prueba',
    title: 'Syntexia Prueba',
    short: 'Plataforma de síntesis de datos y análisis.',
    tech: 'Next.js, React, Tailwind CSS',
    hue: 210,
    images: ['/images/projects/syntexia-hero.svg', '/images/projects/syntexia-servicios.svg'],
    role: 'Full Stack',
    duration: '—',
    liveUrl: 'https://syntexia-solutions.es/',
    github: 'https://syntexia-solutions.es/',
    objectives: [
      'Sintetizar datos complejos',
      'Visualización intuitiva',
      'Análisis en tiempo real'
    ],
    challenge:
      'Procesar y presentar grandes volúmenes de datos de forma clara y accesible.',
    solution:
      'Interfaz modular con componentes reutilizables y renderizado eficiente.',
    metrics: [
      { label: 'Rendimiento', value: 'Optimizado' }
    ],
    case: {
      concise: 'Herramienta de síntesis de datos para análisis visual.',
      academic: 'Arquitectura modular con componentes React para visualización de datos.',
      emotional: 'Simplifica lo complejo, revelando patrones en los datos.'
    }
  },
  {
    slug: 'blog-caf',
    title: 'Blog CAF',
    short: 'Blog con contenido editorial y artículos.',
    tech: 'Next.js, Markdown, Tailwind CSS',
    hue: 190,
    images: [makeThumb('Blog CAF — Home', 190), makeThumb('Blog CAF — Artículo', 200)],
    role: 'Frontend, Editorial',
    duration: '—',
    liveUrl: 'https://github.com/SaraAbreu/blog-caf',
    github: 'https://github.com/SaraAbreu/blog-caf',
    objectives: [
      'Publicar contenido de calidad',
      'Experiencia de lectura optimizada',
      'Navegación intuitiva'
    ],
    challenge:
      'Diseñar una plataforma de contenido que priorice la legibilidad y la experiencia editorial.',
    solution:
      'Tipografía cuidadosa, espaciado generoso y un sistema de organización de contenido limpio.',
    metrics: [
      { label: 'Legibilidad', value: 'Excelente' }
    ],
    case: {
      concise: 'Blog editorial centrado en la experiencia de lectura.',
      academic: 'Diseño tipográfico y jerarquía de contenido optimizados.',
      emotional: 'Un espacio para historias que importan.'
    }
  },
  {
    slug: 'festivalmusic',
    title: 'Festival Music',
    short: 'Plataforma para gestionar y promocionar eventos musicales.',
    tech: 'React, Node.js, MongoDB',
    hue: 170,
    images: [makeThumb('Festival — Home', 170), makeThumb('Festival — Eventos', 160)],
    role: 'Full Stack, Diseño',
    duration: '—',
    liveUrl: 'https://github.com/SaraAbreu/festivalmusic',
    github: 'https://github.com/SaraAbreu/festivalmusic',
    objectives: [
      'Gestionar eventos musicales',
      'Promoción de artistas',
      'Compra de entradas'
    ],
    challenge:
      'Crear una experiencia inmersiva que capture la esencia del festival.',
    solution:
      'Diseño vibrante con navegación intuitiva y flujo de compra optimizado.',
    metrics: [
      { label: 'Experiencia', value: 'Inmersiva' }
    ],
    case: {
      concise: 'Plataforma de gestión y promoción de festivales de música.',
      academic: 'Arquitectura full-stack con gestión de eventos y transacciones.',
      emotional: 'Conecta artistas con audiencia en un espacio digital energético.'
    }
  },
  {
    slug: 'web-carrito',
    title: 'Web Carrito',
    short: 'E-commerce con carrito inteligente y checkout optimizado.',
    tech: 'React, Express, PostgreSQL',
    hue: 150,
    images: [makeThumb('Web Carrito — Home', 150), makeThumb('Web Carrito — Checkout', 140)],
    role: 'Full Stack, UX',
    duration: '—',
    liveUrl: 'https://github.com/SaraAbreu/web-carrito',
    github: 'https://github.com/SaraAbreu/web-carrito',
    objectives: [
      'Maximizar conversión',
      'Experiencia de carrito fluida',
      'Checkout sin fricciones'
    ],
    challenge:
      'Diseñar un flujo de compra que minimice abandonos y maximice conversión.',
    solution:
      'Carrito persistente, checkout progresivo y validación en tiempo real.',
    metrics: [
      { label: 'Conversión', value: 'Optimizada' }
    ],
    case: {
      concise: 'Plataforma de e-commerce enfocada en conversión y experiencia.',
      academic: 'Implementación de patrones de UX para reducción de fricción en compras.',
      emotional: 'Comprar debería ser fácil, rápido y satisfactorio.'
    }
  }
];

export default projects;
