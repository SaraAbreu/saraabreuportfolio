# Despliegue en Vercel

Pasos para desplegar este repositorio en Vercel:

1. Ve a https://vercel.com/ y entra con tu cuenta (GitHub/GitLab/Email).
2. Conecta el repositorio `SaraAbreu/portfolio-mvp` desde la sección "Import Project" → GitHub.
3. Vercel detectará automáticamente que es una aplicación Next.js. Revisa que el comando de build esté en `npm run build` y el directorio de salida quede por defecto.
4. Opcional: añade variables de entorno en el dashboard de Vercel si necesitas claves (p. ej. `NEXT_PUBLIC_API_KEY`).
5. Tras conectar el repo, Vercel desplegará automáticamente `main` y abrirá previews para cada PR.

Despliegue desde la CLI (opcional):

```bash
# instalar la CLI
npx vercel login
# desplegar (sigue las instrucciones interactivas)
npx vercel --prod
```

El archivo `vercel.json` incluido contiene configuración mínima para Next.js.
