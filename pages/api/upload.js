import fs from 'fs'
import path from 'path'

export const config = { api: { bodyParser: true } }

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })
  try {
    const adminToken = process.env.ADMIN_TOKEN
    if (adminToken) {
      const provided = req.headers['x-admin-token']
      if (!provided || provided !== adminToken) return res.status(401).json({ error: 'unauthorized' })
    }
    const { slug, files } = req.body || {}
    if (!slug) return res.status(400).json({ error: 'missing slug' })
    if (!files || !Array.isArray(files) || files.length === 0) return res.status(400).json({ error: 'missing files' })

    const s3Bucket = process.env.S3_BUCKET
    const s3Region = process.env.AWS_REGION || process.env.S3_REGION

    const written = []

    // If S3 is configured, try to upload to S3; otherwise fall back to local FS
    if (s3Bucket) {
      let S3Client, PutObjectCommand
      try {
        ({ S3Client, PutObjectCommand } = await import('@aws-sdk/client-s3'))
      } catch (e) {
        return res.status(500).json({ error: '@aws-sdk/client-s3 not installed. Run `npm install @aws-sdk/client-s3` to enable S3 uploads.' })
      }

      const client = new S3Client({ region: s3Region })

      for (const f of files){
        const match = /^data:(.+);base64,(.+)$/.exec(f.dataUrl)
        if (!match) continue
        const mime = match[1]
        const b64 = match[2]
        const ext = mime.split('/')[1].split('+')[0] || 'png'
        const name = f.name || `img-${Date.now()}.${ext}`
        const key = `projects/${slug}/${name}`
        const buf = Buffer.from(b64, 'base64')
        try {
          await client.send(new PutObjectCommand({ Bucket: s3Bucket, Key: key, Body: buf, ContentType: mime, ACL: 'public-read' }))
          const url = `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${key}`
          written.push(url)
        } catch (err) {
          console.error('S3 upload error', err)
        }
      }

      return res.status(200).json({ written })
    }

    // Local filesystem fallback
    const dir = path.join(process.cwd(), 'public', 'projects', slug)
    await fs.promises.mkdir(dir, { recursive: true })
    for (const f of files){
      const match = /^data:(.+);base64,(.+)$/.exec(f.dataUrl)
      if (!match) continue
      const mime = match[1]
      const b64 = match[2]
      const ext = mime.split('/')[1].split('+')[0] || 'png'
      const name = f.name || `img-${Date.now()}.${ext}`
      const dest = path.join(dir, name)
      const buf = Buffer.from(b64, 'base64')
      await fs.promises.writeFile(dest, buf)
      written.push(`/projects/${slug}/${name}`)
    }

    res.status(200).json({ written })
  } catch (err){
      console.error('API /api/upload error', err)
      return res.status(500).json({ error: err.message })
  }
}
