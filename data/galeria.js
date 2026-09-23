// Datos de la galería de fotografía.
// Para añadir fotos: optimízalas a WebP (máx. 2000px) en public/images/galeria/<sala>/
// y añade una entrada aquí. blurDataURL es una miniatura de ~12px en base64 (opcional).

export const FRASE = 'Retratos de lo que no se dice. Paisajes de lo que se queda.'; // ← cámbiala por la tuya

export const SALAS = [
  {
    slug: 'retratos',
    numero: 'I',
    titulo: 'Retratos',
    intro: 'Personas, gestos y lo que queda entre ellos.',
    fotos: [
      {
        src: '/images/galeria/retratos/01.webp',
        alt: 'Mujer apoyada en la ventanilla de un coche, mirada directa, tono sepia',
        width: 412,
        height: 512,
        blurDataURL:
          'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoKAAwAAgA0JZwCdAD0ft5oB9gAAP79bb0zvsoc2SU3bMYfrHAgwHlXUcSpchJkUWa4G9kjnyib19QZg++IAA=='
      },
      {
        src: '/images/galeria/retratos/02.webp',
        alt: 'Mujer con el pelo cubriéndole el rostro y los brazos cruzados, blanco y negro',
        width: 928,
        height: 1132,
        blurDataURL:
          'data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoKAAwAAgA0JaQAD4oxdulH1pMAAP7+K4PiUznslp5WPQdfx3ZyEWS8R+Bc5/PLoMQ3pqC9ADQCmd/mXY+EdLNx2Q1zzPKs65SDva3KChQAAA=='
      },
      {
        src: '/images/galeria/retratos/03.webp',
        alt: 'Dos mujeres mejilla con mejilla, una seria y otra sonriendo, blanco y negro',
        width: 878,
        height: 1216,
        blurDataURL:
          'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACwAQCdASoJAAwAAgA0JaQAAppldgAAAP7YfGF/GNtWBQ+6n29/tDie/g1swOkGjmS80XSFyBkhbOvHTYVf8y12GWTF/mnZJpRm5gj3tAF9cGp1btHr+b6qSQm5rc9cAAA='
      },
      {
        src: '/images/galeria/retratos/04.webp',
        alt: 'Mano con anillos sujetando una margarita a contraluz, blanco y negro',
        width: 1440,
        height: 1440,
        blurDataURL:
          'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoMAAwAAgA0JaQAD4/QNdscwfzPVSAA/vzR1GIP86Mo1Tk/DG1n+374r+Xxf9P9L+4PEW7wk04zYafsSotRw478OwcydBaGl348zfebZigCwen6A/Kyi+cRgWSl64pAAAA='
      },
      {
        src: '/images/galeria/retratos/05.webp',
        alt: 'Hombre con sombrero y copa sentado en un sillón en penumbra',
        width: 1440,
        height: 1440,
        blurDataURL:
          'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoMAAwAAgA0JaQAAsaWf6ugtoAA/v25Ke+jPwrG1dR5ZfOs0haSXN7E62v6AAAA'
      },
      {
        src: '/images/galeria/retratos/06.webp',
        alt: 'Hombre con gorro y chaqueta universitaria inmóvil entre la multitud, blanco y negro',
        width: 768,
        height: 1364,
        blurDataURL:
          'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoHAAwAAgA0JaQAApd0KMAAAPw+n3gx/waMkuLQcj+vw+L+9aDcDPwLhX5ktKNbHcc1qgUURvnWEI2in/G7q3eV207pbMhgAAA='
      }
    ]
  },
  {
    slug: 'paisajes',
    numero: 'II',
    titulo: 'Paisajes',
    intro: 'Tenerife a la hora en que la luz se despide.',
    fotos: [
      {
        src: '/images/galeria/paisajes/01.webp',
        alt: 'Atardecer sobre la ciudad desde una barandilla',
        width: 1126,
        height: 2000,
        blurDataURL:
          'data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoHAAwAAgA0JQBOgB6XcZcANgAA/uuhx3MuIT5UfK3iWqfCvdpOjy6P1AJMvinKJ3dZe0q2fFyvl5/UUfaBtvctur21qEWy8epUB20AAAA='
      },
      {
        src: '/images/galeria/paisajes/02.webp',
        alt: 'Silueta de una persona entre pinos frente al mar al atardecer',
        width: 2000,
        height: 1126,
        blurDataURL:
          'data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoMAAcAAgA0JZwCw7Db0shagAD+3h8bJsoyzb1vb/JuMOBYjZAfP9Hvh6H+vuSPsh42fMAW4rGaAfAkWInQFdqLAAA='
      },
      {
        src: '/images/galeria/paisajes/03.webp',
        alt: 'Barandilla de un mirador con la montaña al fondo y cielo azul',
        width: 1126,
        height: 2000,
        blurDataURL:
          'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoHAAwAAgA0JYwCdADzcvbQAAD+9v4wlVOrZL2F/L7yUn3UHmmbo6JvOvvkq+hkPg93K4Re/qnSNI+wAt97LwX9vkaY/7WAAAA='
      },
      {
        src: '/images/galeria/paisajes/04.webp',
        alt: 'Sol sobre la silueta de un edificio en un cielo dorado',
        width: 1126,
        height: 2000,
        blurDataURL:
          'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoHAAwAAgA0JbACdAD5jUMzB+qAAP70B36YlH636+h6y6Nn/XLElNHpLYnUoXYuV77Z/5phP62pfzDPK+RQge9ayZgzgAAA'
      },
      {
        src: '/images/galeria/paisajes/05.webp',
        alt: 'Puesta de sol sobre el mar entre la vegetación',
        width: 2000,
        height: 1126,
        blurDataURL:
          'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoMAAcAAgA0JZQCw7EQ/Z9yvTuAAP7qAflTDsvIytE1txt2Ibi9kJEpxjyEt0jH/KrsAAAA'
      },
      {
        src: '/images/galeria/paisajes/06.webp',
        alt: 'Sol naranja entre siluetas de plantas al anochecer',
        width: 2000,
        height: 1126,
        blurDataURL:
          'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoMAAcAAgA0JZgCdAELhUpEFnGAAP7vjhzCDuo6tdSmiKQH+T+pzN1paOGD/4yr6IPOb/z7sQdSShmFnKGeUAAA'
      },
      {
        src: '/images/galeria/paisajes/07.webp',
        alt: 'Olas en la orilla de una playa bajo un cielo de atardecer',
        width: 1440,
        height: 1918,
        blurDataURL:
          'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAQCdASoJAAwAAgA0JZQCdADcomXrIAD+8YI6wpHsbmVFjL7v1gY01B8XH+/ILPNKokhCwEN94KAt0umcEvj1Z9jVkiaPvmp/ODzShZtT80L9jufGFsv+gVT8AGvgAAA='
      }
    ]
  }
];

// Sala III — Reflexión: aún sin contenido. Cuando la tengas, añádela a SALAS
// con su numero 'III' y aparecerá sola en el recorrido y en el menú.

export const ARTISTA = {
  foto: {
    src: '/images/galeria/la-artista/sara.webp',
    alt: 'Retrato de Sara Abreu sentada, con chaqueta oscura',
    width: 922,
    height: 1152,
    blurDataURL:
      'data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoKAAwAAgA0JQBOgCPqULgSmMHAAPw+LEYGPpWuRXorP94tw395hceaZkjvzLg8ssapKSasi+F+4Nkqsbl1T0Tq516nckS3nWKfQIwhKlC2UoAA'
  },
  // ← Reescribe este texto con tu voz
  texto: [
    'Soy Sara Abreu. De día construyo webs y automatizaciones; el resto del tiempo miro a través de la cámara.',
    'Fotografío personas y la luz de Tenerife. Me interesa lo que no se posa: un gesto, una mirada, el último minuto de sol.'
  ],
  instagram: 'https://www.instagram.com/sa_draftstudio/'
};

export const getSala = (slug) => SALAS.find((s) => s.slug === slug);
