import fs from 'fs'
import path from 'path'

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })
  const adminToken = process.env.ADMIN_TOKEN
  if (adminToken) {
    const provided = req.headers['x-admin-token']
    if (!provided || provided !== adminToken) return res.status(401).json({ error: 'unauthorized' })
  }
  try {
    const { slug, content } = req.body || {}
    if (!slug) return res.status(400).json({ error: 'missing slug' })
    const dir = path.join(process.cwd(), 'data', 'cases')
    await fs.promises.mkdir(dir, { recursive: true })
    const file = path.join(dir, `${slug}.md`)
    await fs.promises.writeFile(file, content || '', 'utf8')
    res.status(200).json({ ok: true })
  } catch (err){
    console.error('API /api/case/write error', err)
    res.status(500).json({ error: err.message })
  }
}
