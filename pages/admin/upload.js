import { useState } from 'react'
import Head from 'next/head'
import projects from '../../data/projects'

export default function AdminUpload(){
  const [slug, setSlug] = useState(projects[0]?.slug || '')
  const [files, setFiles] = useState([])
  const [msg, setMsg] = useState('')
  const [token, setToken] = useState('')

  // get token from localStorage or prompt
  useState(()=>{
    try{
      const t = localStorage.getItem('adminToken')
      if (t) setToken(t)
      else {
        const p = prompt('Introduce admin token (si está configurado) o cancelar:')
        if (p) { localStorage.setItem('adminToken', p); setToken(p) }
      }
    }catch(e){}
  })

  function onFiles(e){
    setFiles(Array.from(e.target.files || []))
  }

  async function submit(e){
    e.preventDefault()
    if (!slug) return setMsg('Selecciona un proyecto')
    if (files.length === 0) return setMsg('Selecciona al menos un archivo')
    setMsg('Subiendo...')
    const payload = { slug, files: [] }
    for (const f of files){
      const dataUrl = await toDataURL(f)
      payload.files.push({ name: f.name, dataUrl })
    }
    const headers = { 'Content-Type':'application/json' }
    if (token) headers['x-admin-token'] = token
    const res = await fetch('/api/upload', { method: 'POST', headers, body: JSON.stringify(payload) })
    const data = await res.json()
    if (res.ok) setMsg(`Subidos: ${data.written.join(', ')}`)
    else setMsg(`Error: ${data.error || 'unknown'}`)
  }

  async function makeCase(e){
    e.preventDefault()
    const headers = { 'Content-Type':'application/json' }
    if (token) headers['x-admin-token'] = token
    const res = await fetch('/api/generate-case', { method: 'POST', headers, body: JSON.stringify({ slug }) })
    const data = await res.json()
    if (res.ok) setMsg(`Plantilla creada: ${data.path}`)
    else setMsg(`Error: ${data.error}`)
  }

  function toDataURL(file){
    return new Promise((resolve,reject)=>{
      const reader = new FileReader()
      reader.onload = ()=>resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  return (
    <div className="min-h-screen p-8">
      <Head><title>Admin — Upload</title></Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin — Subir imágenes / Generar plantilla</h1>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm">Proyecto</label>
            <select value={slug} onChange={e=>setSlug(e.target.value)} className="w-full p-2 border rounded">
              {projects.map(p=> <option key={p.slug} value={p.slug}>{p.title}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm">Imágenes</label>
            <input onChange={onFiles} type="file" multiple accept="image/*" />
          </div>

          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 bg-sky-500 text-black rounded">Subir</button>
            <button onClick={makeCase} className="px-4 py-2 border rounded">Generar plantilla case</button>
          </div>
        </form>

        <div className="mt-4 text-sm text-gray-600">{msg}</div>
      </div>
    </div>
  )
}
