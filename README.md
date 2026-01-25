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
