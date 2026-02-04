import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import projects from '../../data/projects';
import Image from 'next/image';

export default function CaseStudy() {
  const router = useRouter();
  const { slug } = router.query;
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx >= 0 ? idx : 0];
  const [tone, setTone] = useState('concise');
  const [selected, setSelected] = useState(null);

  // if project.images is empty, try to load images from public/projects/<slug>/ via API
  useEffect(() => {
    async function load() {
      if (!project || (project.images && project.images.length > 0)) return;
      try {
        const res = await fetch(`/api/list-project-images?slug=${project.slug}`);
        const data = await res.json();
        if (data.images && data.images.length) project.images = data.images;
      } catch (e) {
        /* ignore */
      }
    }
    load();
  }, [project]);

  function download(dataUrl, name) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen p-8 parallax-layer" data-depth="0.06">
      <Head>
        <title>{project.title} — Case Study</title>
      </Head>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-extrabold mb-1">{project.title}</h1>
            <div className="text-sm text-gray-400">
              {project.tech} • {project.role} • {project.duration}
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 bg-sky-500 text-black rounded"
            >
              Ver en sitio
            </a>
            <button onClick={() => router.push('/sites')} className="px-3 py-2 border rounded">
              Volver
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Image
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded shadow"
              width={1024}
              height={768}
              unoptimized
            />
            <div className="mt-3 flex gap-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(img)}
                  className="w-24 h-16 overflow-hidden rounded shadow-sm"
                >
                  <Image
                    src={img}
                    className="w-full h-full object-cover"
                    alt={`${project.title} miniatura ${i + 1}`}
                    width={240}
                    height={160}
                    unoptimized
                  />
                </button>
              ))}
            </div>

            <section className="mt-6 space-y-6">
              <h2 className="text-2xl font-semibold">Contexto</h2>
              <p className="text-gray-300">{project.short}</p>

              <h3 className="text-xl font-semibold">Objetivos</h3>
              <ul className="list-disc list-inside text-gray-300">
                {project.objectives.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold">Reto</h3>
              <p className="text-gray-300">{project.challenge}</p>

              <h3 className="text-xl font-semibold">Solución</h3>
              <p className="text-gray-300">{project.solution}</p>

              <h3 className="text-xl font-semibold">Resultados & métricas</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded">
                    <div className="text-sm text-gray-300">{m.label}</div>
                    <div className="font-semibold">{m.value}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="p-4 bg-white/5 rounded">
            <div className="mb-4">
              <label className="text-xs text-gray-400">Tono</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full mt-1 p-2 border rounded bg-black/10"
              >
                <option value="concise">Conciso</option>
                <option value="academic">Académico</option>
                <option value="emotional">Emocional</option>
              </select>
            </div>

            <div className="bg-white/6 p-3 rounded mb-4">
              <h4 className="font-semibold mb-2">Resumen ({tone})</h4>
              <p className="text-gray-300">{project.case[tone]}</p>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold">Tecnologías</h4>
              <div className="text-sm text-gray-300">{project.tech}</div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => download(project.images[0], `${project.slug}-hero.svg`)}
                className="px-3 py-2 bg-sky-500 text-black rounded"
              >
                Descargar hero
              </button>
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between text-sm">
              <a href={`/sites/${prev.slug}`} className="text-gray-300">
                « {prev.title}
              </a>
              <a href={`/sites/${next.slug}`} className="text-gray-300">
                {next.title} »
              </a>
            </div>
          </aside>
        </div>

        {selected && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white rounded max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm text-gray-700">{project.title}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => download(selected, `${project.slug}-img.svg`)}
                    className="px-3 py-1 bg-sky-500 text-black rounded"
                  >
                    Descargar
                  </button>
                  <button onClick={() => setSelected(null)} className="px-3 py-1 border rounded">
                    Cerrar
                  </button>
                </div>
              </div>
              <Image
                src={selected}
                alt={`${project.title} imagen seleccionada`}
                className="w-full h-auto"
                width={1024}
                height={768}
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
