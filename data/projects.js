const makeThumb = (title, hue = 200, w = 1200, h = 800) => {
  const svg = `<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='hsl(${hue} 60% 30%)'/><text x='50%' y='50%' font-family='Inter, Arial' font-size='48' fill='white' text-anchor='middle' alignment-baseline='middle'>${title}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const projects = [
  {
    slug: 'syntexia-prueba',
    title: 'SyntexIA',
    short: 'Creé esta página web para ayudar a Susana Pierre, fundadora de esta empresa. La idea que ella tenía para su página era diseñar una plataforma que combine una interfaz limpia con funcionalidades potentes, permitiendo a los usuarios generar contenido creativo de forma sencilla. Este proyecto me permitió profundizar en el desarrollo frontend, la arquitectura de aplicaciones modernas y la interacción con APIs de IA.',
    tech: 'Next.js, React, Tailwind CSS',
    hue: 210,
    images: ['/images/projects/syntexia-hero.svg'],
    role: 'Full Stack',
    duration: '—',
    liveUrl: 'https://syntexia-solutions.es/',
    linkedin: 'https://www.linkedin.com/in/susana-pierre/',
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
      concise: 'Herramienta de síntesis de datos para análisis visual.\n\n\uD83D\uDD17 \u003Ca href="https://syntexia-solutions.es/" target="_blank" rel="noopener noreferrer"\u003ESitio Web\u003C/a\u003E',
      academic: 'Arquitectura modular con componentes React para visualización de datos.',
      emotional: 'Simplifica lo complejo, revelando patrones en los datos.'
    }
  },
  {
    slug: 'blog-caf',
    title: 'Blog Café',
    short: 'Blog Café es una plataforma editorial para compartir artículos y contenido de calidad, con un diseño enfocado en la experiencia de lectura y la organización clara del contenido.\n\nPuedes enfocar la web como un espacio para publicar historias, noticias y recursos, priorizando la legibilidad y la navegación sencilla.\n',
    tech: 'Next.js, Markdown, Tailwind CSS',
    hue: 190,
    images: ['/images/projects/blogcaf-hero.png'],
    role: 'Frontend, Editorial',
    duration: '—',
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
    short: 'Festival Music es una plataforma para gestionar y promocionar eventos musicales, conectar artistas y público, y facilitar la compra de entradas.\n\nPuedes enfocar la web como una solución integral para festivales, con herramientas para organización, promoción y experiencia de usuario.\n',
    tech: 'React, Node.js, MongoDB',
    hue: 170,
    images: ['/images/projects/festivalmusic-hero.png'],
    role: 'Full Stack, Diseño',
    duration: '—',
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
    images: ['/images/projects/webcarrito-hero.png'],
    role: 'Full Stack, UX',
    duration: '—',
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
  },
  {
    slug: 'agora-mujeres',
    title: 'Ágora Mujeres',
    short: 'Una plataforma colaborativa diseñada para conectar, empoderar e inspirar a mujeres. Espacio seguro para compartir experiencias, ideas y oportunidades de crecimiento profesional.',
    tech: 'Next.js, React, Tailwind CSS, Firebase',
    hue: 335,
    images: ['/images/projects/agora-hero.svg'],
    role: 'Full Stack, UX/UI',
    duration: '—',
    liveUrl: 'https://agoramujeres.syntexia-solutions.es/',
    objectives: [
      'Conectar comunidad de mujeres',
      'Espacio seguro y colaborativo',
      'Compartir oportunidades',
      'Empoderamiento profesional'
    ],
    challenge:
      'Crear un espacio de confianza donde mujeres puedan conectar, colaborar y crecer juntas, sin fricciones en la experiencia de usuario.',
    solution:
      'Diseño inclusivo, navegación intuitiva y herramientas de colaboración integradas que facilitan la conexión y el intercambio de conocimiento.',
    metrics: [
      { label: 'Comunidad', value: 'En crecimiento' },
      { label: 'Engagement', value: 'Alto' }
    ],
    case: {
      concise: 'Plataforma comunitaria para mujeres emprendedoras y profesionales.',
      academic: 'Arquitectura inclusiva con herramientas de colaboración y redes sociales integradas.',
      emotional: 'Un espacio donde las voces de las mujeres importan y se amplifican.'
    }
  },
  {
    slug: 'be-dj-school',
    title: 'BE DJ School',
    short: 'Academia de formación especializada en producción musical y DJing. Plataforma educativa que conecta estudiantes con instructores profesionales activos en la industria para aprender técnica, mentalidad y estrategia de carrera musical.',
    tech: 'HTML5, CSS3, JavaScript, Tailwind CSS',
    hue: 280,
    images: ['/images/bedj.png'],
    role: 'Frontend, UX/UI',
    duration: 'En desarrollo',
    liveUrl: 'https://proyecto-p-gina-web-be-dj-school.vercel.app/',
    objectives: [
      'Conectar estudiantes con instructores profesionales',
      'Ofrecer formación personalizada y flexible',
      'Crear comunidad de músicos emergentes',
      'Facilitar reserva de clases'
    ],
    challenge:
      'Diseñar una plataforma educativa que inspire y facilite tanto la formación técnica como la construcción de carrera musical profesional.',
    solution:
      'Interfaz intuitiva con galería visual, formularios de contacto optimizados, secciones de equipo docente y sistema de clases claramente presentado.',
    metrics: [
      { label: 'Usabilidad', value: 'Excelente' },
      { label: 'Conversión', value: 'En optimización' }
    ],
    case: {
      concise: 'Plataforma educativa para formación de DJs y productores musicales.',
      academic: 'Arquitectura frontend responsiva con experiencia de usuario optimizada para captación de estudiantes.',
      emotional: 'Donde la pasión por la música se transforma en carrera profesional.'
    }
  }
];

export default projects;
