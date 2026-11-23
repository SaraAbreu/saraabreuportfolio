// Datos de la galería de fotografía.
// Para añadir fotos: optimízalas a WebP (máx. 2000px) en public/images/galeria/<sala>/
// y añade una entrada aquí. blurDataURL es una miniatura de ~12px en base64 (opcional).

export const FRASE = 'Retratos de lo que no se dice. Paisajes de lo que se queda.'; // ← cámbiala por la tuya

export const SALAS = [
  {
    slug: 'retratos',
    numero: 'I',
    titulo: 'Retratos',
    // Foto que cuelga en la puerta de la sala, en el hall
    portada: '/images/galeria/retratos/artistico/viento.webp',
    intro: 'Cuatro miradas: la ciudad, el bosque, el ring y lo que solo cabe en una imagen.',
    // Series de la sala. Cada foto lleva su `categoria` (debe coincidir con un id).
    // label: nombre corto para el plano de la sala.
    // titulo, lugar, anio, creditos: ficha de la serie en la pared (rellena con los tuyos).
    // texto: 2–3 líneas en tu voz sobre qué buscabas.
    categorias: [
      { id: 'urbana', titulo: 'Su terreno', lugar: '', anio: '', creditos: '', label: 'Urbana', texto: 'Un encargo con una idea clara: retratarlo en el estilo en el que se siente él mismo. La calle, el grafiti y la ropa como forma de decir quién es.' },
      { id: 'bosque', titulo: 'Claridad', lugar: '', anio: '', creditos: '', label: 'Bosque', texto: 'Vuelvo a sitios así porque en ellos uno se calma. Un pinar, poca luz y silencio: el lugar donde se puede pensar con claridad.' },
      { id: 'artistico', titulo: 'Lo que no se ve', lugar: '', anio: '', creditos: '', label: 'Artístico', texto: 'Aquí voy más allá de la foto. No busco el retrato, busco la sensación: un pensamiento, un estado, algo que no se puede decir de otra forma.' },
      { id: 'deportes', titulo: 'En construcción', lugar: '', anio: '', creditos: '', label: 'Deportes', texto: 'Un amigo quería mostrar que estaba trabajando en sí mismo. Lo acompañé al gimnasio: el esfuerzo, la disciplina y la concentración antes del golpe.' }
    ],
    // Fotos en WebP en public/images/galeria/retratos/<categoria>/ con width/height reales y blurDataURL.
    fotos: [
      { categoria: 'urbana', titulo: 'Quieto entre la prisa', src: '/images/galeria/retratos/urbana/01.webp', alt: 'Hombre con gorro de lana y chaqueta universitaria inmóvil entre la multitud, blanco y negro', width: 768, height: 1364, blurDataURL: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoHAAwAA4BaJaQAAp2tQ304AAD2vs6fpdik3Nt5/8GHB1Ka+LUJ5YPbHW5myOc7couv0PZIAAA=' },
      { categoria: 'urbana', titulo: 'Lo que dejan los muros', src: '/images/galeria/retratos/urbana/02.webp', alt: 'Hombre de perfil con chaqueta universitaria frente a un muro de grafiti, luz cálida a contraluz', width: 1364, height: 768, blurDataURL: 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoMAAcAA4BaJQBOgCFslSiwAAD+97t9h+0s/jcoJX58zybs3m5a2061gAA=' },
      { categoria: 'urbana', titulo: 'No tan rápido', src: '/images/galeria/retratos/urbana/03.webp', alt: 'Hombre mirando a cámara tras su mano abierta desenfocada, cielo azul y tierra dorada', width: 1440, height: 1920, blurDataURL: 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoJAAwAA4BaJbACdADdoO1AOOsAAP6psOGs/lHUB5fGQPrmPRKwFwZdgGvUVljToc+pYXB+M2jJ/QLe4zEffJirGNz6ygKAAAA=' },
      { categoria: 'urbana', titulo: 'Desde arriba', src: '/images/galeria/retratos/urbana/04.webp', alt: 'Vista cenital con ojo de pez de un hombre en chándal blanco y rojo sobre una pista azul', width: 1440, height: 1920, blurDataURL: 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoJAAwAA4BaJbACdAELWWWHtEAA4nNoQILIMM5/rBnKDIr4JvQLdCn8R+3BJ4c79DAwWOnp4Iqy2rf212KKLdg+R1R5M1/kYAA=' },
      { categoria: 'urbana', titulo: 'Al acecho', src: '/images/galeria/retratos/urbana/al-acecho.webp', alt: 'Hombre en chándal agachado sobre un bloque de skatepark, contrapicado en blanco y negro', width: 768, height: 1364, blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoHAAwAA4BaJaQAAueJMhjCEAD+812WfLIHcLa98cgpYsg2GR7Ghn6xa/QjsuYAAAA=' },
      { categoria: 'bosque', titulo: 'Raíz', src: '/images/galeria/retratos/bosque/01.webp', alt: 'Hombre con barba y camisa de lino mirando a cámara entre pinos oscuros', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAwAA4BaJZQC7ADzds6KsUAA/vGjNrNqP1mcSmJloXw17sIE2T3dzACHhlruGC1AAA==' },
      { categoria: 'bosque', titulo: 'Pausa', src: '/images/galeria/retratos/bosque/02.webp', alt: 'Hombre sentado sobre una roca en el pinar, botas marrones y vaqueros rotos', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAAAQAgCdASoIAAwAA4BaJZwC7AD0sovguJUwAP70tIEWQRbv3sXagHkSi5LoGjGENOmtrfRkAAA=' },
      { categoria: 'bosque', titulo: 'Lo que no se dice', src: '/images/galeria/retratos/bosque/03.webp', alt: 'Hombre sentado en el pinar con la mirada perdida a un lado, pinocha a sus pies', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAwAA4BaJZwAAsf3oVzDVwAA/u8myrXeLMkYUeY4r9zYXDrg9f9SDnJ76rLR+AAAAA==' },
      { categoria: 'bosque', titulo: 'Copas', src: '/images/galeria/retratos/bosque/04.webp', alt: 'Hombre mirando hacia las copas de los pinos en penumbra', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAwAA4BaJZwAAueGYE+wAAD+95ciNwc4iY1UG8hFbAQA' },
      { categoria: 'bosque', titulo: 'Sendero', src: '/images/galeria/retratos/bosque/05.webp', alt: 'Hombre de espaldas con camisa blanca caminando entre troncos quemados', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoIAAwAA4BaJZQC7AD0jgTHIwIAAP7vps8EDi1nGfWwiNUQUQAt8qfxPqZ4PRXL3L96gxrdF+defnjrpLAAAA==' },
      { categoria: 'bosque', titulo: 'Nuca y luz', src: '/images/galeria/retratos/bosque/06.webp', alt: 'Detalle de nuca y cuello de la camisa frente a un fondo de bokeh entre los pinos', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAgCdASoIAAwAA4BaJYwAAuduWbqdm7YAAP7vaH8tSBwfoBYEMdx7C3cGNO3Y3pP8RWY578sAAA==' },
      { categoria: 'bosque', titulo: 'Entre troncos', src: '/images/galeria/retratos/bosque/07.webp', alt: 'Hombre con las manos en los bolsillos entre los troncos del bosque', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAwAA4BaJaQAAp3S7tD/4IAA/vFuxqheQKq4OQ6pN5szGz+WQKD51ri1W0AazWsIAAAA' },
      { categoria: 'bosque', titulo: 'Eco', src: '/images/galeria/retratos/bosque/08.webp', alt: 'Retrato desenfocado y en movimiento de un hombre con camisa blanca en el bosque', width: 1333, height: 2000, blurDataURL: 'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAwAA4BaJZQAAubMz41JIAD+9JxR+GHh5RwDd3Ckq4qzzA/x3t1VWO7nvvQnjKHeLgAA' },
      { categoria: 'artistico', titulo: 'Margarita', src: '/images/galeria/retratos/artistico/margarita.webp', alt: 'Mano con anillos de plata sosteniendo una margarita a contraluz entre la hierba, blanco y negro', width: 1440, height: 1440, blurDataURL: 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoMAAwAA4BaJaQAAsQ5xVK4AP70ssDZjYiRu5cwjV6BRtcF3tlKtS70wubcmuQ+xhQKtf0mO+gSQXPNGjfu5HFSjGE+L4AAAAA=' },
      { categoria: 'artistico', titulo: 'Respirar la luz', src: '/images/galeria/retratos/artistico/02.webp', alt: 'Perfil de mujer con los ojos cerrados recortado por la luz sobre fondo negro, blanco y negro', width: 938, height: 1136, blurDataURL: 'data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoKAAwAA4BaJaQAAsf8z7mCjQAA/vTAZvkw/9/VGbyswWYVtGxqJY6twGHZxfs0NJHMkZpiGED/r74AAAA=' },
      { categoria: 'artistico', titulo: 'Viento', src: '/images/galeria/retratos/artistico/viento.webp', alt: 'Mujer de pelo gris con chaqueta de cuero y el viento en la cara, en un llano al anochecer', width: 832, height: 1272, blurDataURL: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAwAA4BaJZwAAuaU9SOAAP7OBOQQ6s1+Ghz8pvEzsOUJBmouaijvWYwAAA==' },
      { categoria: 'artistico', titulo: 'Bandada', src: '/images/galeria/retratos/artistico/04.webp', alt: 'Mujer de pelo gris abrazándose bajo un cielo plomizo lleno de gaviotas', width: 922, height: 1152, blurDataURL: 'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoKAAwAA4BaJYwCdAEOls2kOoAA/lFNSdjHpd7JlGA0PerCFFS+e33ArV506QtPjgb6/ncQAAA=' },
      { categoria: 'artistico', titulo: 'Niebla', src: '/images/galeria/retratos/artistico/05.webp', alt: 'Mujer de pelo largo mirando hacia arriba en un bosque cubierto de niebla', width: 842, height: 1264, blurDataURL: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoIAAwAA4BaJZQCw7EPD4SmlgAA/umlHXHNf3+uWKyR8leA9AAAAA==' },
      { categoria: 'artistico', titulo: 'Echar raíces', src: '/images/galeria/retratos/artistico/06.webp', alt: 'Pies descalzos con uñas negras sobre raíces de árbol y pequeñas flores blancas', width: 768, height: 1300, blurDataURL: 'data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAAAwAQCdASoHAAwAA4BaJZwAA3AA/vVoytQg//1yG/h+jMKAAAA=' },
      { categoria: 'artistico', titulo: 'Penumbra', src: '/images/galeria/retratos/artistico/07.webp', alt: 'Hombre tatuado entre la vegetación de un bosque en penumbra, con un rayo de luz', width: 768, height: 1364, blurDataURL: 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAAAwAQCdASoHAAwAA4BaJZwAA3AA/vTPhF6QQhpIMK5gIAAA' },
      { categoria: 'artistico', titulo: 'El rayo', src: '/images/galeria/retratos/artistico/08.webp', alt: 'Hombre de espaldas junto a un pino, iluminado por la luz que entra entre los árboles', width: 341, height: 512, blurDataURL: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAwAA4BaJZQAAxZhUvMgAP73xsP+bCMh1id7Sqq/5+LblWfAAA==' },
      { categoria: 'deportes', titulo: 'Guardia', src: '/images/galeria/retratos/deportes/01.webp', alt: 'Boxeador de perfil con la guardia alta emergiendo de la oscuridad, blanco y negro sepia', width: 1080, height: 1185, blurDataURL: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoLAAwAA4BaJaQAAlyQWhAA/vfHNKSS47+ns1HWoDNIDCW4XwVOhD8SY04EAA==' },
      { categoria: 'deportes', titulo: 'Antes del primer golpe', src: '/images/galeria/retratos/deportes/02.webp', alt: 'Boxeador con guantes blancos y la mirada baja junto al saco', width: 768, height: 1364, blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoHAAwAA4BaJaQAAuWuc1eAAP70XgCOqqpAC7gtYXDCxIFcVSb9PDOA7MqkNygCAAA=' },
      { categoria: 'deportes', titulo: 'Cuerpo a cuerpo', src: '/images/galeria/retratos/deportes/03.webp', alt: 'Sparring en penumbra: hombro sudado en primer plano y rival concentrado detrás', width: 1080, height: 1185, blurDataURL: 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoLAAwAA4BaJZwAAudlRN/wsAD++RAPpkCtje7nanQkOCVvmL6PGXmiXcKEAA==' },
      { categoria: 'deportes', titulo: 'Entre cuerdas', src: '/images/galeria/retratos/deportes/04.webp', alt: 'Boxeador con casco caminando por el ring entre las cuerdas', width: 1080, height: 1185, blurDataURL: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoLAAwAA4BaJaQAAud/M4gAAP75EwJzb3fmYDr02MlG1nPJtmaUoAAA' },
      { categoria: 'deportes', titulo: 'Intercambio', src: '/images/galeria/retratos/deportes/05.webp', alt: 'Dos boxeadores con casco intercambiando golpes en la esquina del ring', width: 1080, height: 1185, blurDataURL: 'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoLAAwAA4BaJaQAAvret4zpTAAA/vkXGAe8jsrqEFK4wD1rBwIAAA==' },
      { categoria: 'deportes', titulo: 'La voz del rincón', src: '/images/galeria/retratos/deportes/06.webp', alt: 'Entrenador dando indicaciones durante una clase de kickboxing', width: 1080, height: 1185, blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoLAAwAA4BaJZwAAt0MXnM4AAD+9b4iReqPmNuv2c9+xDxq8f0t+4CUr0XDfMP4QAA=' },
      { categoria: 'deportes', titulo: 'El que espera', src: '/images/galeria/retratos/deportes/07.webp', alt: 'Saco de boxeo de cuero en primer plano en un gimnasio en penumbra', width: 1440, height: 1580, blurDataURL: 'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoLAAwAA4BaJaQAAsfzbT67AAD+9FqgQsoY6U8w/hfOWGzp0QLvdUPx7bO6JzJRtwfwWSP5duFzejTLKgAAAA==' },
      { categoria: 'deportes', titulo: 'En guardia', src: '/images/galeria/retratos/deportes/08.webp', alt: 'Kickboxer en guardia con espinilleras junto al saco, frente al guante de su compañero', width: 768, height: 1364, blurDataURL: 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoHAAwAA4BaJaQAA3AA/vScmSaN/7YTR7KvhOi5H9QIAA==' },
    ]
  },
  {
    slug: 'paisajes',
    numero: 'II',
    titulo: 'Paisajes',
    portada: '/images/galeria/paisajes/02.webp',
    intro: 'Tenerife a la hora en que la luz se despide.',
    fotos: [
      {
        titulo: 'La ciudad se apaga',
        src: '/images/galeria/paisajes/01.webp',
        alt: 'Atardecer sobre la ciudad desde una barandilla',
        width: 1126,
        height: 2000,
        blurDataURL:
          'data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoHAAwAAgA0JQBOgB6XcZcANgAA/uuhx3MuIT5UfK3iWqfCvdpOjy6P1AJMvinKJ3dZe0q2fFyvl5/UUfaBtvctur21qEWy8epUB20AAAA='
      },
      {
        titulo: 'Mirador',
        src: '/images/galeria/paisajes/02.webp',
        alt: 'Silueta de una persona entre pinos frente al mar al atardecer',
        width: 2000,
        height: 1126,
        blurDataURL:
          'data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoMAAcAAgA0JZwCw7Db0shagAD+3h8bJsoyzb1vb/JuMOBYjZAfP9Hvh6H+vuSPsh42fMAW4rGaAfAkWInQFdqLAAA='
      },
      {
        titulo: 'Barandilla',
        src: '/images/galeria/paisajes/03.webp',
        alt: 'Barandilla de un mirador con la montaña al fondo y cielo azul',
        width: 1126,
        height: 2000,
        blurDataURL:
          'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoHAAwAAgA0JYwCdADzcvbQAAD+9v4wlVOrZL2F/L7yUn3UHmmbo6JvOvvkq+hkPg93K4Re/qnSNI+wAt97LwX9vkaY/7WAAAA='
      },
      {
        titulo: 'Último sol',
        src: '/images/galeria/paisajes/04.webp',
        alt: 'Sol sobre la silueta de un edificio en un cielo dorado',
        width: 1126,
        height: 2000,
        blurDataURL:
          'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoHAAwAAgA0JbACdAD5jUMzB+qAAP70B36YlH636+h6y6Nn/XLElNHpLYnUoXYuV77Z/5phP62pfzDPK+RQge9ayZgzgAAA'
      },
      {
        titulo: 'Entre ramas',
        src: '/images/galeria/paisajes/05.webp',
        alt: 'Puesta de sol sobre el mar entre la vegetación',
        width: 2000,
        height: 1126,
        blurDataURL:
          'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoMAAcAAgA0JZQCw7EQ/Z9yvTuAAP7qAflTDsvIytE1txt2Ibi9kJEpxjyEt0jH/KrsAAAA'
      },
      {
        titulo: 'Brasa',
        src: '/images/galeria/paisajes/06.webp',
        alt: 'Sol naranja entre siluetas de plantas al anochecer',
        width: 2000,
        height: 1126,
        blurDataURL:
          'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoMAAcAAgA0JZgCdAELhUpEFnGAAP7vjhzCDuo6tdSmiKQH+T+pzN1paOGD/4yr6IPOb/z7sQdSShmFnKGeUAAA'
      },
      {
        titulo: 'Orilla',
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
    src: '/images/galeria/la-artista/sara-bn.webp',
    alt: 'Sara Abreu apoyada en el respaldo de una silla en la orilla del mar, sonriendo, blanco y negro',
    width: 1493,
    height: 2000,
    blurDataURL:
      'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoJAAwAA4BaJaQAAxPv/25OrvAA/tghtHfyQPAG+kzgLnzbGTfeyA0ZxGGy+o0W35a4u2cUksZ1PpzgzZHAAA=='
  },
  // Foto de la puerta "La artista" en el hall
  portada: {
    src: '/images/galeria/la-artista/puerta.webp',
    alt: 'Sara Abreu con sombrero y la mano junto a la boca, mirada baja, blanco y negro',
    width: 832,
    height: 1254,
    blurDataURL:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAQAgCdASoIAAwAA4BaJaQAAvyFCnN87IAAAP7Pd/I39hULslmswAvTeQanqo2tUG7PxQlBDi5UjP2ymxTuswAA'
  },
  // ← Reescribe este texto con tu voz
  texto: [
    'Soy Sara Abreu. De día construyo webs y automatizaciones; el resto del tiempo miro a través de la cámara.',
    'Fotografío personas y la luz de Tenerife. Me interesa lo que no se posa: un gesto, una mirada, el último minuto de sol.'
  ],
  instagram: 'https://www.instagram.com/sa_draftstudio/'
};

// Esculturas del museo (obras de dominio público; fotos CC0 / dominio público de Wikimedia Commons,
// recortadas). Se colocan entre alas con `antes: '<clave>'` en cada categoría, y en el hall.
// Esculturas del museo: obras de dominio público; fotos CC0 / dominio público de
// Wikimedia Commons, recortadas. tipo 'busto' va sobre columna. Se colocan con
// `base`: desplazamiento del apoyo de la figura (fracción del ancho), para centrarla en su pedestal.
// `masa`: centro visual de la figura; el foco apunta ahí.
// `antes: [...]` en cada categoría, `inicio`/`final` en cada sala, y en el hall.
export const ESCULTURAS = {
  venus: {
    src: '/images/galeria/esculturas/venus.webp',
    base: 0.0,
    masa: -0.014,
    width: 402,
    height: 1300,
    nombre: 'Venus de Milo',
    autor: 'Alejandro de Antioquía (atrib.)',
    fecha: 'c. 130–100 a. C.',
    credito: 'Foto: Shonagon, CC0 — Wikimedia Commons'
  },
  apolo: {
    src: '/images/galeria/esculturas/apolo.webp',
    base: -0.121,
    masa: -0.038,
    width: 779,
    height: 1300,
    nombre: 'Apolo de Belvedere',
    autor: 'Copia romana de Leócares',
    fecha: 'c. 120–140 d. C.',
    credito: 'Foto: Marie-Lan Nguyen, dominio público — Wikimedia Commons'
  },
  augusto: {
    src: '/images/galeria/esculturas/augusto.webp',
    base: 0.094,
    masa: 0.124,
    width: 800,
    height: 1300,
    nombre: 'Augusto de Prima Porta',
    autor: 'Escultor romano',
    fecha: 's. I d. C.',
    credito: 'Foto: Till Niermann, dominio público — Wikimedia Commons'
  },
  nike: {
    src: '/images/galeria/esculturas/nike.webp',
    base: -0.008,
    masa: 0.002,
    width: 764,
    height: 1300,
    nombre: 'Victoria alada de Samotracia',
    autor: 'Escultor helenístico',
    fecha: 'c. 190 a. C.',
    credito: 'Foto: KHo235, CC0 — Wikimedia Commons'
  },
  discobolo: {
    src: '/images/galeria/esculturas/discobolo.webp',
    base: -0.04,
    masa: 0.046,
    width: 805,
    height: 1300,
    nombre: 'Discóbolo',
    autor: 'Copia romana de Mirón',
    fecha: 'orig. c. 460–450 a. C.',
    credito: 'Foto: RickyBennison, CC0 — Wikimedia Commons'
  },
  david: {
    src: '/images/galeria/esculturas/david.webp',
    base: 0.19,
    masa: -0.07,
    width: 531,
    height: 1300,
    nombre: 'David',
    autor: 'Miguel Ángel',
    fecha: '1501–1504',
    credito: 'Foto: Jörg Bittner Unna, dominio público — Wikimedia Commons'
  },
  pensador: {
    src: '/images/galeria/esculturas/pensador.webp',
    base: -0.161,
    masa: 0.0,
    width: 622,
    height: 945,
    nombre: 'El Pensador',
    autor: 'Auguste Rodin',
    fecha: '1880–1904',
    credito: 'Foto: dominio público — Wikimedia Commons'
  },
  homero: {
    src: '/images/galeria/esculturas/homero.webp',
    base: 0.025,
    masa: -0.011,
    tipo: 'busto',
    width: 900,
    height: 1108,
    nombre: 'Homero',
    autor: 'Copia romana de original helenístico',
    fecha: 's. II a. C.',
    credito: 'Foto: dominio público — Wikimedia Commons'
  },
  socrates: {
    src: '/images/galeria/esculturas/socrates.webp',
    base: -0.007,
    masa: -0.015,
    tipo: 'busto',
    width: 710,
    height: 1300,
    nombre: 'Sócrates',
    autor: 'Copia romana de Lisipo (atrib.)',
    fecha: 's. I d. C.',
    credito: 'Foto: dominio público — Wikimedia Commons'
  },
  nefertiti: {
    src: '/images/galeria/esculturas/nefertiti.webp',
    base: -0.037,
    masa: 0.045,
    tipo: 'busto',
    width: 658,
    height: 1300,
    nombre: 'Nefertiti',
    autor: 'Tutmose',
    fecha: 'c. 1345 a. C.',
    credito: 'Foto: dominio público — Wikimedia Commons'
  },
  cesar: {
    src: '/images/galeria/esculturas/cesar.webp',
    base: -0.037,
    masa: -0.028,
    tipo: 'busto',
    width: 740,
    height: 1300,
    nombre: 'Julio César',
    autor: 'Retrato de Tusculum',
    fecha: 'c. 50–40 a. C.',
    credito: 'Foto: Ángel M. Felicísimo, dominio público — Wikimedia Commons'
  },
  marco: {
    src: '/images/galeria/esculturas/marco.webp',
    base: -0.011,
    masa: -0.008,
    tipo: 'busto',
    width: 900,
    height: 1270,
    nombre: 'Marco Aurelio',
    autor: 'Escultor romano',
    fecha: 'c. 161–180 d. C.',
    credito: 'Foto: Jebulon, CC0 — Wikimedia Commons'
  }
};

export const getSala = (slug) => SALAS.find((s) => s.slug === slug);
