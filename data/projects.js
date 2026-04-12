const makeThumb = (title, hue = 200, w = 1200, h = 800) => {
  const svg = `<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='hsl(${hue} 60% 30%)'/><text x='50%' y='50%' font-family='Inter, Arial' font-size='48' fill='white' text-anchor='middle' alignment-baseline='middle'>${title}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const projects = [
  {
    slug: 'syntexia-prueba',
    title: 'SyntexIA',
    short: 'Creé esta página web para ayudar a Susana Pierre, fundadora de esta empresa. La idea que ella tenía para su página era diseñar una plataforma que combine una interfaz limpia con funcionalidades potentes.',
    tech: 'Next.js, React, Tailwind CSS',
    hue: 210,
    images: ['/images/syntexia.png'],
    role: 'Full Stack',
    duration: '—',
    liveUrl: 'https://syntexia-solutions.es/',
    linkedin: 'https://www.linkedin.com/in/susana-pierre/',
    objectives: ['Sintetizar datos complejos', 'Visualización intuitiva', 'Análisis en tiempo real'],
    challenge: 'Procesar y presentar grandes volúmenes de datos de forma clara.',
    solution: 'Interfaz modular con componentes reutilizables.',
    metrics: [{ label: 'Rendimiento', value: 'Optimizado' }],
    case: {
      concise: 'Herramienta de síntesis de datos.',
      academic: 'Arquitectura modular con componentes React.',
      emotional: 'Simplifica lo complejo.'
    }
  },
  {
    slug: 'be-dj-school',
    title: 'BE DJ School',
    short: 'Academia de formación especializada en producción musical y DJing. Plataforma educativa que conecta estudiantes con instructores profesionales.',
    tech: 'React, Tailwind CSS, JavaScript',
    hue: 280,
    images: ['/images/bedj.png'],
    role: 'Frontend, UX/UI',
    duration: 'En desarrollo',
    liveUrl: 'https://proyecto-p-gina-web-be-dj-school.vercel.app/',
    objectives: ['Conectar estudiantes', 'Formación personalizada', 'Comunidad de músicos'],
    challenge: 'Diseñar una plataforma educativa que inspire.',
    solution: 'Interfaz intuitiva con galería visual.',
    metrics: [{ label: 'Usabilidad', value: 'Excelente' }],
    case: {
      concise: 'Plataforma educativa para DJs.',
      academic: 'Arquitectura frontend responsiva.',
      emotional: 'Donde la pasión se transforma en carrera.'
    }
  },
  {
    slug: 'festivalmusic',
    title: 'Festival Music',
    short: 'Plataforma para gestionar y promocionar eventos musicales, conectar artistas y público.',
    tech: 'React, Node.js, MongoDB',
    hue: 170,
    images: ['/images/projects/festivalmusic-hero.png'],
    role: 'Full Stack, Diseño',
    duration: '—',
    liveUrl: '#',
    objectives: ['Gestionar eventos', 'Promoción', 'Compra de entradas'],
    challenge: 'Crear una experiencia inmersiva.',
    solution: 'Diseño vibrante con navegación intuitiva.',
    metrics: [{ label: 'Experiencia', value: 'Inmersiva' }],
    case: {
      concise: 'Plataforma de festivales de música.',
      academic: 'Arquitectura full-stack con gestión de eventos.',
      emotional: 'Conecta artistas con audiencia.'
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
    liveUrl: '#',
    objectives: ['Maximizar conversión', 'Experiencia fluida', 'Checkout optimizado'],
    challenge: 'Diseñar un flujo de compra que minimice abandonos.',
    solution: 'Carrito persistente, checkout progresivo.',
    metrics: [{ label: 'Conversión', value: 'Optimizada' }],
    case: {
      concise: 'Plataforma de e-commerce.',
      academic: 'Patrones de UX para reducción de fricción.',
      emotional: 'Comprar debería ser fácil.'
    }
  },
  {
    slug: 'agora-mujeres',
    title: 'Ágora Mujeres',
    short: 'Plataforma colaborativa diseñada para conectar, empoderar e inspirar a mujeres. Espacio seguro para compartir experiencias.',
    tech: 'Next.js, React, Tailwind CSS, Firebase',
    hue: 335,
    images: ['/images/agora.png'],
    role: 'Full Stack, UX/UI',
    duration: '—',
    liveUrl: 'https://agoramujeres.syntexia-solutions.es/',
    objectives: ['Conectar comunidad', 'Espacio colaborativo', 'Compartir oportunidades'],
    challenge: 'Crear un espacio de confianza.',
    solution: 'Diseño inclusivo con herramientas integradas.',
    metrics: [{ label: 'Comunidad', value: 'En crecimiento' }],
    case: {
      concise: 'Plataforma comunitaria para mujeres.',
      academic: 'Arquitectura inclusiva.',
      emotional: 'Las voces de las mujeres importan.'
    }
  }
];

export default projects;
