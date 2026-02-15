const makeThumb = (title, hue = 200, w = 1200, h = 800) => {
  const svg = `<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='hsl(${hue} 60% 30%)'/><text x='50%' y='50%' font-family='Inter, Arial' font-size='48' fill='white' text-anchor='middle' alignment-baseline='middle'>${title}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const projects = [
  {
    slug: 'syntexia-prueba',
    title: 'Syntexia Prueba',
    short: 'Creé Syntexia como un proyecto personal para explorar cómo la inteligencia artificial puede integrarse en experiencias web intuitivas y accesibles. Mi objetivo fue diseñar una plataforma que permitiera a cualquier usuario generar contenido creativo de forma sencilla, combinando una interfaz limpia con funcionalidades potentes. Este proyecto me permitió profundizar en el desarrollo frontend, la arquitectura de aplicaciones modernas y la interacción con APIs de IA, mientras construía una herramienta útil y escalable.',
    tech: 'Next.js, React, Tailwind CSS',
    hue: 210,
    images: ['/images/projects/syntexia-hero.svg', '/images/projects/syntexia-servicios.svg'],
    role: 'Full Stack',
    duration: '—',
    liveUrl: 'https://syntexia-solutions.es/',
    github: 'https://github.com/SaraAbreu/Proyecto-web-SyntexIA-prueba',
    objectives: [
      'Sintetizar datos complejos',
      'Visualización intuitiva',
      'Análisis en tiempo real',
      'Acceso rápido a código y demo online',
      'Enlaces directos a recursos principales'
    ],
    challenge:
      'Procesar y presentar grandes volúmenes de datos de forma clara y accesible.',
    solution:
      'Interfaz modular con componentes reutilizables y renderizado eficiente.',
    metrics: [
      { label: 'Rendimiento', value: 'Optimizado' }
    ],
    case: {
      concise: 'Herramienta de síntesis de datos para análisis visual.\n\n\uD83D\uDD17 \u003Ca href="https://github.com/SaraAbreu/Proyecto-web-SyntexIA-prueba" target="_blank" rel="noopener noreferrer"\u003ERepositorio GitHub\u003C/a\u003E\n\uD83D\uDD17 \u003Ca href="https://syntexia-solutions.es/" target="_blank" rel="noopener noreferrer"\u003ESitio Web\u003C/a\u003E',
      academic: 'Arquitectura modular con componentes React para visualización de datos.',
      emotional: 'Simplifica lo complejo, revelando patrones en los datos.'
    }
  },
  {
    slug: 'blog-caf',
    title: 'Blog CAF',
    short: 'Blog CAF es una plataforma editorial para compartir artículos y contenido de calidad, con un diseño enfocado en la experiencia de lectura y la organización clara del contenido.\n\nPuedes enfocar la web como un espacio para publicar historias, noticias y recursos, priorizando la legibilidad y la navegación sencilla.\n',
    tech: 'Next.js, Markdown, Tailwind CSS',
    hue: 190,
    images: ['/images/projects/blogcaf-hero.png'],
    role: 'Frontend, Editorial',
    duration: '—',
    github: 'https://github.com/SaraAbreu/blog-caf',
    objectives: [
      'Publicar contenido de calidad',
      'Experiencia de lectura optimizada',
      'Navegación intuitiva',
      'Acceso rápido al código fuente',
      'Enlace directo al repositorio'
    ],
    challenge:
      'Diseñar una plataforma de contenido que priorice la legibilidad y la experiencia editorial.',
    solution:
      'Tipografía cuidadosa, espaciado generoso y un sistema de organización de contenido limpio.',
    metrics: [
      { label: 'Legibilidad', value: 'Excelente' }
    ],
    case: {
      concise: 'Blog editorial centrado en la experiencia de lectura.\n\n\uD83D\uDD17 \u003Ca href="https://github.com/SaraAbreu/Proyecto-Blog-caf-" target="_blank" rel="noopener noreferrer"\u003ERepositorio GitHub\u003C/a\u003E',
      academic: 'Diseño tipográfico y jerarquía de contenido optimizados.',
      emotional: 'Un espacio para historias que importan.'
    }
  },
  {
    slug: 'festivalmusic',
    title: 'Festival Music',
    short: 'Festival Music es una plataforma para gestionar y promocionar eventos musicales, conectar artistas y público, y facilitar la compra de entradas.\n\nPuedes enfocar la web como una solución integral para festivales, con herramientas para organización, promoción y experiencia de usuario.\n',
    tech: 'React, Node.js, MongoDB',
    hue: 170,
    images: ['/images/projects/festivalmusic-hero.png'],
    role: 'Full Stack, Diseño',
    duration: '—',
    github: 'https://github.com/SaraAbreu/festivalmusic',
    objectives: [
      'Gestionar eventos musicales',
      'Promoción de artistas',
      'Compra de entradas',
      'Acceso rápido al código fuente',
      'Enlace directo al repositorio'
    ],
    challenge:
      'Crear una experiencia inmersiva que capture la esencia del festival.',
    solution:
      'Diseño vibrante con navegación intuitiva y flujo de compra optimizado.',
    metrics: [
      { label: 'Experiencia', value: 'Inmersiva' }
    ],
    case: {
      concise: 'Plataforma de gestión y promoción de festivales de música.\n\n\uD83D\uDD17 \u003Ca href="https://github.com/SaraAbreu/Proyecto-FestivalMusic" target="_blank" rel="noopener noreferrer"\u003ERepositorio GitHub\u003C/a\u003E',
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
    images: ['/images/projects/webcarrito-hero.png'],
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
