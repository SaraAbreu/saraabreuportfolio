import { useState } from 'react';
import Head from 'next/head';

export default function Generator() {
  const [prompt, setPrompt] = useState('Retrato artístico, tonos cálidos');
  const [style, setStyle] = useState('mi-estilo');
  const [preset, setPreset] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(6);
  const [aspect, setAspect] = useState('4:3');

  function downloadDataUrl(filename, dataUrl) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function downloadPngFromSvg(filename, svgDataUrl) {
    try {
      const res = await fetch(svgDataUrl);
      const svgText = await res.text();
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = url;
      await new Promise((r, e) => {
        img.onload = r;
        img.onerror = e;
      });
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 1024;
      canvas.height = img.naturalHeight || 768;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      const pngUrl = canvas.toDataURL('image/png');
      downloadDataUrl(filename.replace(/\.svg$/, '.png'), pngUrl);
    } catch (err) {
      console.error('PNG conversion failed', err);
      // fallback: download original
      downloadDataUrl(filename, svgDataUrl);
    }
  }

  async function handleGenerate(e) {
    e?.preventDefault();
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, style, count, aspect, preset })
    });
    const data = await res.json();
    // soportar formato antiguo (strings) y nuevo (objetos {src, thumb})
    const imgs = (data.images || []).map((item) =>
      typeof item === 'string' ? { src: item, thumb: item } : item
    );
    setImages(imgs);
    setHistory((h) => [prompt, ...h].slice(0, 20));
    setLoading(false);
  }

  async function handleVariation(i) {
    // small variation: append variation token to prompt
    const p = prompt + ' — variation ' + (Date.now() % 1000);
    setPrompt(p);
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: p, style, count: 4, aspect, preset })
    });
    const data = await res.json();
    const imgs = (data.images || []).map((item) =>
      typeof item === 'string' ? { src: item, thumb: item } : item
    );
    setImages(imgs);
    setHistory((h) => [p, ...h].slice(0, 20));
    setLoading(false);
  }

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Generador IA — Demo</title>
      </Head>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">
          Generador de imágenes IA — Dirección creativa y prompt design
        </h2>
        <p className="text-gray-600 mb-4">
          Diseño de prompts hiperrealistas y narrativos, dirección creativa aplicada a IA
          (composición, iluminación, atmósfera), y generación iterativa para resultados
          profesionales y personales.
        </p>

        <section className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="p-4 border rounded bg-white/5">
            <h3 className="font-semibold">Capacidades</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li>Prompt design hiperrealista: intención estética y coherencia visual.</li>
              <li>Dirección creativa: composición, iluminación y storytelling visual.</li>
              <li>Imágenes profesionales: branding, campañas, moodboards y material editorial.</li>
              <li>Imágenes personales: íntimas, poéticas y auténticas.</li>
              <li>Iteración avanzada: ajuste técnico y emocional para consistencia.</li>
              <li>Traducción a briefs para fotógrafos y equipos creativos.</li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-white/5">
            <h3 className="font-semibold">Cómo trabajo</h3>
            <p className="text-sm mt-2">
              Creo prompts que comunican intención, mood y dirección técnica; luego itero con
              variantes controladas hasta obtener la imagen final. También adapto resultados para
              producción (recorte, color grading, briefs para fotografía).
            </p>
            <div className="mt-3">
              <strong className="text-sm">Ejemplo de prompt:</strong>
              <div className="mt-1 p-2 bg-black/5 rounded text-sm font-mono">
                &quot;Portrait, cinematic soft-lit studio, cinematic color grading, delicate
                textures, intimate mood, editorial frame — 85mm, f/1.8&quot;
              </div>
            </div>
          </div>
        </section>

        <form onSubmit={handleGenerate} className="space-y-3 mb-6">
          <div>
            <label className="block text-sm text-gray-700">Prompt</label>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <label className="block text-sm text-gray-700">Estilo / intención</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              >
                <option value="mi-estilo">Mi estilo personal</option>
                <option value="editorial">Editorial</option>
                <option value="artístico">Artístico</option>
                <option value="documental">Documental</option>
                <option value="personal">Personal / Íntimo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">Preset</label>
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              >
                <option value="professional">Professional</option>
                <option value="personal">Personal</option>
                <option value="editorial">Editorial</option>
                <option value="conceptual">Conceptual</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">Variaciones</label>
              <input
                type="number"
                value={count}
                min={1}
                max={12}
                onChange={(e) => setCount(Number(e.target.value) || 1)}
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Aspecto</label>
            <select
              value={aspect}
              onChange={(e) => setAspect(e.target.value)}
              className="w-full mt-1 p-2 border rounded"
            >
              <option>4:3</option>
              <option>16:9</option>
              <option>1:1</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <button
                disabled={loading}
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                {loading ? 'Generando...' : 'Generar imágenes'}
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setPrompt('Retrato editorial, luz suave, narrativa íntima');
                  setPreset('professional');
                }}
                className="px-3 py-2 border rounded text-sm"
              >
                Preset: Editorial
              </button>
            </div>
            <div>
              <a
                href="mailto:hello@example.com?subject=Solicitud%20servicio%20IA"
                className="px-3 py-2 bg-sky-500 text-white rounded text-sm"
              >
                Solicitar servicio
              </a>
            </div>
          </div>
        </form>

        <section>
          <h3 className="text-lg font-medium mb-2">Galería — Itera y descarga</h3>
          {images.length === 0 && (
            <p className="text-sm text-gray-500">Aún no generaste imágenes.</p>
          )}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <div key={`skel-${i}`} className="card overflow-hidden animate-fade">
                  <div className="w-full h-48 skeleton rounded-md" />
                  <div className="p-3">
                    <div className="h-3 w-3/4 skeleton rounded mb-2"></div>
                    <div className="h-3 w-1/3 skeleton rounded"></div>
                  </div>
                </div>
              ))}
            {!loading &&
              images.map((img, i) => (
                <div
                  key={i}
                  className="card bg-white rounded shadow-sm overflow-hidden animate-fade"
                >
                  <button
                    onClick={() => setSelected({ ...img, index: i })}
                    className="block w-full h-48 focus:outline-none"
                  >
                    <img
                      src={img.thumb || img.src}
                      alt={`generated ${i}`}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </button>
                  <div className="p-3 flex items-center justify-between">
                    <div className="text-xs text-gray-600 truncate">
                      {prompt} • {style}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadDataUrl(`image-${i}.svg`, img.src)}
                        className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition"
                      >
                        SVG
                      </button>
                      <button
                        onClick={() => downloadPngFromSvg(`image-${i}.svg`, img.src)}
                        className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition"
                      >
                        PNG
                      </button>
                      <button
                        onClick={() => handleVariation(i)}
                        className="text-xs px-2 py-1 border rounded"
                      >
                        Iterar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Modal */}
          {selected && (
            <div
              className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
              onClick={() => setSelected(null)}
            >
              <div
                className="bg-white rounded max-w-4xl w-full max-h-[90vh] overflow-auto p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start">
                  <div className="text-sm text-gray-700">
                    {prompt} — {style}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadDataUrl(`image-${selected.index}.svg`, selected.src)}
                      className="px-3 py-1 bg-indigo-600 text-white rounded"
                    >
                      SVG
                    </button>
                    <button
                      onClick={() =>
                        downloadPngFromSvg(`image-${selected.index}.svg`, selected.src)
                      }
                      className="px-3 py-1 bg-indigo-600 text-white rounded"
                    >
                      PNG
                    </button>
                    <button onClick={() => setSelected(null)} className="px-3 py-1 border rounded">
                      Cerrar
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <img src={selected.src} alt="selected" className="w-full h-auto" />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
