import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' });
  const { slug } = req.query;
  const adminToken = process.env.ADMIN_TOKEN;
  if (adminToken) {
    const provided = req.headers['x-admin-token'] || req.query.token;
    if (!provided || provided !== adminToken)
      return res.status(401).json({ error: 'unauthorized' });
  }
  if (!slug) return res.status(400).json({ error: 'missing slug' });
  try {
    const safeSlug = String(slug).replace(/[^a-zA-Z0-9-_]/g, '-');
    const file = path.join(process.cwd(), 'data', 'cases', `${safeSlug}.md`);
    const exists = await fs.promises
      .access(file)
      .then(() => true)
      .catch(() => false);
    if (!exists) return res.status(404).json({ error: 'not found' });
    const content = await fs.promises.readFile(file, 'utf8');
    res.status(200).json({ content });
  } catch (err) {
    console.error('API /api/case/read error', err);
    res.status(500).json({ error: err.message });
  }
}
