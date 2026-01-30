import fs from 'fs';
import path from 'path';
import projects from '../../data/projects';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  const adminToken = process.env.ADMIN_TOKEN;
  if (adminToken) {
    const provided = req.headers['x-admin-token'];
    if (!provided || provided !== adminToken)
      return res.status(401).json({ error: 'unauthorized' });
  }
  try {
    const { slug } = req.body || {};
    const safeSlug = String(slug).replace(/[^a-zA-Z0-9-_]/g, '-');
    const project = projects.find((p) => p.slug === (slug || safeSlug));
    if (!project) return res.status(404).json({ error: 'project not found' });

    const dir = path.join(process.cwd(), 'data', 'cases');
    await fs.promises.mkdir(dir, { recursive: true });
    const file = path.join(dir, `${safeSlug}.md`);
    const content = `# ${project.title}

## Contexto

${project.short}

## Objetivos

${project.objectives.map((o) => `- ${o}`).join('\n')}

## Reto

${project.challenge}

## Solución

${project.solution}

## Resultados y métricas

${project.metrics.map((m) => `- **${m.label}**: ${m.value}`).join('\n')}

## Rol y duración

- Rol: ${project.role}
- Duración: ${project.duration}

## Galería

<!-- Añade imágenes en public/projects/${slug}/ y referencia aquí -->

`;

    await fs.promises.writeFile(file, content, 'utf8');
    res.status(200).json({ path: `data/cases/${slug}.md` });
  } catch (err) {
    console.error('API /api/generate-case error', err);
    res.status(500).json({ error: err.message });
  }
}
