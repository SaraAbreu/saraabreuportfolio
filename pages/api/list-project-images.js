import fs from 'fs'
import path from 'path'

export default async function handler(req, res){
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' })
  const { slug } = req.query
  if (!slug) return res.status(400).json({ error: 'missing slug' })
  try {
    const dir = path.join(process.cwd(), 'public', 'projects', slug)
    const exists = await fs.promises.access(dir).then(()=>true).catch(()=>false)
    if (!exists) return res.status(200).json({ images: [] })
    const files = await fs.promises.readdir(dir)
    const images = files.filter(f=>/\.(png|jpe?g|gif|webp|svg)$/i.test(f)).map(f=>`/projects/${slug}/${encodeURIComponent(f)}`)
    res.status(200).json({ images })
  } catch (err){
    console.error('API /api/list-project-images error', err)
    res.status(500).json({ error: err.message })
  }
}
