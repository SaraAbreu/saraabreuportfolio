# Abreu Studio — Portfolio (Editorial + Systems)

Este repositorio contiene un portfolio experimental que combina dirección artística, automatización y creación web con intención editorial.

Principales características

- Tipografía editorial (Playfair Display) + sans para texto (Inter).
- Paleta sobria: negros profundos, grises, acentos metálicos.
- Componentes `Layout` y `Chapter` con transiciones medidas (framer-motion).
- Microinteracciones accesibles y respetuosas con `prefers-reduced-motion`.

Desarrollo local

1. Instala dependencias:

```bash
npm install
```

2. Arranca el servidor de desarrollo:

```bash
npm run dev
```

El servidor intentará usar `3000`; si está ocupado usará el siguiente puerto disponible (3001, 3002...).

Accesibilidad y shortcuts

- Hay un enlace "Ir al contenido" visible con `Tab` que salta al contenido principal.

## Development

1. Copia variables de entorno desde `.env.example` y configura secretos en tu entorno:

```bash
cp .env.example .env.local
# rellenar claves: OPENAI_API_KEY, AWS_*, ADMIN_TOKEN
```

2. Instalar dependencias y ejecutar en desarrollo:

```bash
npm install
npm run dev
```

3. Scripts útiles:

- `npm run lint` — ejecuta ESLint
- `npm test` — ejecuta Jest
- `npm run format` — formatea el repo con Prettier

## Seguridad y despliegue

- No subir claves al repo. Configura secretos en Vercel o GitHub Actions.
- Revisa `npm audit` y actualiza dependencias en una rama separada antes de mergear.
- Para producción, usar un rate-limiter centralizado (Redis/Upstash) y revisar políticas de CORS y cabeceras `Cache-Control`.

## Cambios recientes

- Se añadieron validaciones básicas en APIs, un limitador in-memory para `/api/generate`, y CI (lint/test/build).
- Todos los elementos interactivos tienen estados de foco visibles y respetan `prefers-reduced-motion`.

Grabar un breve video/gif de la interacción (opciones)

Opción A — Usar OBS (recomendado para calidad): instala OBS Studio y configura captura de ventana o región.

Opción B — Usar Playwright para grabar un recorrido (script incluido):

1. Instala Playwright:

```bash
npm i -D playwright
npx playwright install
```

2. Ejecuta el script para grabar 6 segundos de la página (ejecuta el servidor dev primero):

```bash
node tools/record-playwright.js
```

El archivo resultante `interaction.mp4` se guardará en la raíz del proyecto.

Despliegue

Recomiendo desplegar en Vercel (Next.js): conectar el repositorio y usar la rama `main`. Vercel detecta automáticamente el framework Next.js.

Notas finales
Este proyecto está pensado como una pieza editorial en constante evolución. Si quieres, puedo generar variantes tipográficas, mover el ritmo de transición o preparar la versión para producción (optimización de imágenes, carga diferida, etc.).

# Portfolio MVP — Web + IA (demo)

Este repositorio es un scaffold mínimo para un portafolio inmersivo que combina páginas web, demos de automatización y un generador IA simulado.

Rutas principales:

- `/` : Home con links a demos
- `/generator` : Generador IA (simulado con SVG)
- `/automation` : Demo de automatización con logs simulados

Comandos:

```bash
npm install
npm run dev
```

Notas:

- La generación de imágenes está simulada por `pages/api/generate` que devuelve SVGs en data URLs — reemplaza esta API por tus integraciones IA cuando tengas claves.
- Tailwind está incluido; si prefieres no instalar Tailwind, puedes adaptar `styles/globals.css`.

## Añadir imágenes reales a los case studies

Puedes añadir imágenes reales por proyecto colocándolas en `public/projects/<slug>/`.
Por ejemplo para el proyecto con `slug: "portfolio-principal"` crea la carpeta:

    public/projects/portfolio-principal/

y añade imágenes nombradas `1.jpg`, `2.jpg`, etc. Luego actualiza `data/projects.js` para apuntar a esas rutas:

    images: [
    	'/projects/portfolio-principal/1.jpg',
    	'/projects/portfolio-principal/2.jpg'
    ]

La página de case study (`pages/sites/[slug].js`) usará las rutas que declares en `data/projects.js`.

## Administración local (subir imágenes / generar plantilla)

He añadido una página de administración local accesible en `/admin/upload` que permite:

- Seleccionar un `project` (por `slug`) y subir imágenes directamente al servidor de desarrollo. Las imágenes se guardan en `public/projects/<slug>/`.
- Generar una plantilla de case study en `data/cases/<slug>.md` con secciones prellenadas para editar.

Uso:

1. Levanta la app en modo desarrollo: `npm run dev`.
2. Abre `http://localhost:3001/admin/upload`.
3. Selecciona proyecto y archivos, presiona `Subir`. Las rutas escritas aparecerán en la respuesta.
4. Pulsa `Generar plantilla case` para crear `data/cases/<slug>.md`.

Nota: Estas rutas y APIs funcionan en entorno de desarrollo local y escriben en el sistema de archivos del servidor. En producción deberías usar un almacenamiento persistente (S3, CDN) y autenticación.

# Portfolio MVP — Web + IA (demo)

Este repositorio es un scaffold mínimo para un portafolio inmersivo que combina páginas web, demos de automatización y un generador IA simulado.

Rutas principales:

- `/` : Home con links a demos
- `/generator` : Generador IA (simulado con SVG)
- `/automation` : Demo de automatización con logs simulados

Comandos:

```bash
npm install
npm run dev
```

Notas:

- La generación de imágenes está simulada por `pages/api/generate` que devuelve SVGs en data URLs — reemplaza esta API por tus integraciones IA cuando tengas claves.
- Tailwind está incluido; si prefieres no instalar Tailwind, puedes adaptar `styles/globals.css`.
