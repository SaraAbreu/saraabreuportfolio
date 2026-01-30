# Lista priorizada de mejoras — portfolio-mvp

Este documento sintetiza las recomendaciones aplicadas y las acciones pendientes, ordenadas por prioridad.

## Hecho (ya aplicado)

- Añadido ESLint, Prettier, `.editorconfig` y `lint-staged` (config básica).
- Corregidos tests y formateado (`__tests__/index.test.jsx`).
- Corregidos errores de lint (`generator.js` y `sites/[slug].js`).
- Hardened APIs: validación básica, sanitización de `slug`, límites y control de tamaño en `/api/upload`, `case/write`, `case/read`, `list-project-images`.
- Rate-limiter in-memory básico en `/api/generate`.
- Workflow de CI en `.github/workflows/ci.yml` (lint, tests, build).
- Añadido `.env.example`.

## Prioridad Alta (recomendado aplicar pronto)

- Revisar y actualizar dependencias vulnerables (ver `npm audit`). En particular:
  - Vulnerabilidades relacionadas con `next`, `postcss`, `zod`, `eslint`.
  - Algunas actualizaciones son breaking; probar en rama y CI antes de mergear.
- Implementar rate-limiting robusto en producción (Redis/Upstash) en lugar del limitador in-memory.
- Revisar y endurecer endpoints expuestos (autenticación de endpoints de administración y protección CSRF si aplica).

## Prioridad Media

- Sustituir imágenes `<img>` críticas por `next/image` para optimización automática y caching.
- Implementar caching/CDN y cabeceras `Cache-Control` para assets generados.
- Añadir validación estructurada con `zod` o similar para unificar validadores (body schemas).

## Prioridad Baja

- Migración parcial a TypeScript para mayor seguridad de tipos (opcional).
- Mejorar accesibilidad (audit a11y completo) y añadir pruebas E2E con Playwright que cubran flujos críticos.
- Añadir Husky hooks más completos (pre-commit linters, pruebas rápidas).

## Pasos sugeridos para PR de seguridad

1. Crear rama `chore/security-deps`.
2. Actualizar `next`, `postcss`, `zod` y `eslint` en `package.json` con rangos seguros.
3. Ejecutar `npm ci`, `npm run build` y `npm test` en CI; arreglar fallos.
4. Desplegar a staging y verificar endpoints y generación de imágenes.

## Comandos útiles

```bash
npm install
npm run lint
npm test
npm run build
```

## Notas de seguridad

- No subir claves a repo. Usa `OPENAI_API_KEY`, `AWS_*` y `ADMIN_TOKEN` en secretos (Vercel/GitHub Actions).
- Para producción, preferir Upstash/Redis para rate-limiting y no confiar en in-memory maps.
