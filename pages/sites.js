import Link from 'next/link';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import projects from '../data/projects';

export default function Sites() {
  const [query, setQuery] = useState('');
  const [techFilter, setTechFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const techs = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => s.add(p.tech));
    return Array.from(s);
  }, []);

  const roles = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => s.add(p.role));
    return Array.from(s);
  }, []);

  const filtered = projects.filter((p) => {
    if (techFilter !== 'all' && p.tech !== techFilter) return false;
    if (roleFilter !== 'all' && p.role !== roleFilter) return false;
    if (
      query &&
      !`${p.title} ${p.short} ${p.tech} ${p.role}`.toLowerCase().includes(query.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Sitios & Apps — Abreu Studio</title>
      </Head>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-3">Sitios & Apps — Trabajo seleccionado</h1>
        <p className="text-gray-600 mb-6">
          Presento aquí una selección curada de proyectos web y aplicaciones que muestran cómo
          trabajo: diseño centrándome en usabilidad, decisiones éticas y soluciones técnicas
          prácticas. Cada proyecto incluye contexto, tecnologías y resultados.
        </p>

        <div className="flex gap-3 mb-4 flex-col sm:flex-row items-start">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar proyectos"
            className="p-2 border rounded w-full sm:w-1/2"
          />
          <select
            value={techFilter}
            onChange={(e) => setTechFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">Todas las tecnologías</option>
            {techs.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">Todos los roles</option>
            {roles.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <section className="grid gap-6 sm:grid-cols-2">
          {filtered.map((p, i) => (
            <article key={i} className="bg-white/5 rounded-lg overflow-hidden shadow-sm">
              <div className="h-44 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{p.short}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-gray-300">
                    {p.tech} • {p.role}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/sites/${p.slug}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded bg-sky-500 text-black text-sm"
                      >
                        Ver
                      </a>
                    </Link>
                    <Link href={`/sites/${p.slug}#case`}>
                      <a className="px-3 py-1 rounded border border-white/10 text-sm">Case</a>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Mi enfoque</h2>
          <p className="text-gray-600">
            Trabajo desde la intersección entre estrategia y producto: defino hipótesis, diseño
            iterativo, prototipado rápido y respeto por la privacidad y la ética en la
            automatización. Para cada proyecto explico objetivos, decisiones clave y resultados
            medibles.
          </p>
        </section>

        <div className="mt-8 text-sm text-gray-400">
          ¿Quieres que convierta cada tarjeta en un case study completo con imágenes, retos,
          solución y métricas? Selecciona uno y crea su página.
        </div>
      </div>
    </div>
  );
}
