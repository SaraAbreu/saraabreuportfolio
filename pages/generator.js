import { useState } from 'react'
import Head from 'next/head'

export default function Generator(){
  const [prompt, setPrompt] = useState('Retrato artístico, tonos cálidos')
  const [style, setStyle] = useState('mi-estilo')
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])

  async function handleGenerate(e){
    e?.preventDefault()
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, style })
    })
    const data = await res.json()
    setImages(data.images || [])
    setLoading(false)
  }

  return (
    <div className="min-h-screen p-8">
      <Head><title>Generador IA — Demo</title></Head>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Generador IA (simulado)</h2>
        <p className="text-gray-600 mb-6">Controla un prompt y estilos; el servidor genera imágenes SVG mock para mostrar el flujo.</p>

        <form onSubmit={handleGenerate} className="space-y-3 mb-6">
          <div>
            <label className="block text-sm text-gray-700">Prompt</label>
            <input value={prompt} onChange={e=>setPrompt(e.target.value)} className="w-full mt-1 p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Estilo</label>
            <select value={style} onChange={e=>setStyle(e.target.value)} className="w-full mt-1 p-2 border rounded">
              <option value="mi-estilo">Mi estilo personal</option>
              <option value="nocturno">Nocturno</option>
              <option value="vintage">Vintage</option>
            </select>
          </div>
          <div>
            <button disabled={loading} type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
              {loading? 'Generando...' : 'Generar imágenes'}
            </button>
          </div>
        </form>

        <section>
          <h3 className="text-lg font-medium mb-2">Galería</h3>
          {images.length === 0 && <p className="text-sm text-gray-500">Aún no generaste imágenes.</p>}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-4">
            {images.map((src,i)=> (
              <div key={i} className="card">
                <img src={src} alt={`generated ${i}`} className="w-full h-48 object-cover rounded" />
                <p className="mt-2 text-sm text-gray-600">{prompt} — {style}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
