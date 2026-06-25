import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const platforms = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'twitter', label: 'Twitter / X' },
];

const tones = [
  { value: 'profesional', label: 'Profesional' },
  { value: 'casual', label: 'Casual' },
  { value: 'inspiracional', label: 'Inspiracional' },
];

export default function AutopostDemo() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [tone, setTone] = useState('profesional');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setCopied(false);

    try {
      const res = await fetch('/api/autopost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, tone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error desconocido');
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    if (!result) return;
    const text = `${result.caption}\n\n${result.hashtags.map(h => `#${h}`).join(' ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <Head>
        <title>AutoPost CM — Demo · Sara Abreu</title>
        <meta name="description" content="Demo en vivo de AutoPost CM — generación automática de contenido para redes sociales con IA." />
      </Head>

      <div className="min-h-screen bg-[#F8F6F1]">
        {/* Nav */}
        <div className="border-b border-[#DDD8CE] px-6 sm:px-10 py-5 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-[#6B6860] hover:text-[#1A1A18] transition-colors">
            ← Sara Abreu
          </Link>
          <span className="text-xs font-medium tracking-widest text-[#C4602A] uppercase">Demo en vivo</span>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          {/* Banner beta */}
          <div className="flex items-center gap-3 border border-[#DDD8CE] bg-[#F0E0D6]/40 px-5 py-3 mb-10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4602A] flex-shrink-0 animate-pulse"></span>
            <p className="text-xs text-[#6B6860] font-light">
              Esta es una prueba de concepto. <span className="text-[#1A1A18] font-medium">AutoPost CM estará disponible muy pronto.</span>
            </p>
          </div>

          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-medium tracking-widest text-[#C4602A] uppercase mb-4">AutoPost CM</p>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#1A1A18] mb-5">
              Genera contenido
              <br />
              <em className="italic text-[#6B6860]">en segundos.</em>
            </h1>
            <p className="text-sm text-[#6B6860] font-light max-w-md leading-relaxed">
              Describe tu negocio o tema, elige la plataforma y el tono. Grok genera el post listo para publicar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#DDD8CE]">
            {/* Left: inputs */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#DDD8CE]">
              <div className="mb-8">
                <label className="text-xs font-medium tracking-widest text-[#6B6860] uppercase block mb-3">
                  Tema o negocio
                </label>
                <textarea
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  placeholder="Ej: academia de DJing para principiantes en Madrid, clases presenciales y online..."
                  rows={4}
                  className="w-full bg-[#F8F6F1] border border-[#DDD8CE] px-4 py-3 text-sm text-[#1A1A18] placeholder-[#B8B3A8] focus:outline-none focus:border-[#C4602A] resize-none transition-colors"
                />
              </div>

              <div className="mb-8">
                <label className="text-xs font-medium tracking-widest text-[#6B6860] uppercase block mb-3">
                  Plataforma
                </label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map(p => (
                    <button
                      key={p.value}
                      onClick={() => setPlatform(p.value)}
                      className={`text-xs font-medium px-4 py-2 border transition-all duration-200 tracking-wide ${
                        platform === p.value
                          ? 'bg-[#C4602A] text-white border-[#C4602A]'
                          : 'border-[#DDD8CE] text-[#6B6860] hover:border-[#C4602A] hover:text-[#C4602A]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <label className="text-xs font-medium tracking-widest text-[#6B6860] uppercase block mb-3">
                  Tono
                </label>
                <div className="flex flex-wrap gap-2">
                  {tones.map(t => (
                    <button
                      key={t.value}
                      onClick={() => setTone(t.value)}
                      className={`text-xs font-medium px-4 py-2 border transition-all duration-200 tracking-wide ${
                        tone === t.value
                          ? 'bg-[#1A1A18] text-[#F8F6F1] border-[#1A1A18]'
                          : 'border-[#DDD8CE] text-[#6B6860] hover:border-[#1A1A18] hover:text-[#1A1A18]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generate}
                disabled={loading || !topic.trim()}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C4602A] text-white text-sm font-medium hover:bg-[#A84E22] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Generando…
                  </>
                ) : (
                  <>
                    Generar post
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Right: resultado */}
            <div className="p-8 sm:p-10 flex flex-col">
              {!result && !loading && !error && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8">
                  <div className="w-12 h-px bg-[#DDD8CE]"></div>
                  <p className="text-sm text-[#B8B3A8] font-light">El post aparecerá aquí</p>
                  <div className="w-12 h-px bg-[#DDD8CE]"></div>
                </div>
              )}

              {loading && (
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-[#C4602A] rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#6B6860]">Grok está escribiendo…</p>
                </div>
              )}

              {error && (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-red-500 font-light">{error}</p>
                </div>
              )}

              {result && (
                <div className="flex flex-col gap-6 h-full">
                  {/* Hook */}
                  <div>
                    <p className="text-xs font-medium tracking-widest text-[#C4602A] uppercase mb-2">Gancho</p>
                    <p className="font-serif text-lg font-light text-[#1A1A18] italic">"{result.hook}"</p>
                  </div>

                  {/* Caption */}
                  <div className="flex-1">
                    <p className="text-xs font-medium tracking-widest text-[#6B6860] uppercase mb-2">Post</p>
                    <p className="text-sm text-[#1A1A18] leading-relaxed whitespace-pre-wrap font-light">
                      {result.caption}
                    </p>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <p className="text-xs font-medium tracking-widest text-[#6B6860] uppercase mb-2">Hashtags</p>
                    <div className="flex flex-wrap gap-1.5">
                      {result.hashtags.map((h, i) => (
                        <span key={i} className="text-xs text-[#C4602A] border border-[#F0E0D6] bg-[#F0E0D6]/50 px-2 py-0.5">
                          #{h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tip */}
                  {result.tip && (
                    <div className="border-t border-[#DDD8CE] pt-4">
                      <p className="text-xs text-[#6B6860] font-light">
                        <span className="text-[#C4602A] font-medium">Consejo — </span>
                        {result.tip}
                      </p>
                    </div>
                  )}

                  {/* Acciones */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 text-xs font-medium py-2.5 border border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-[#F8F6F1] transition-all duration-200"
                    >
                      {copied ? '✓ Copiado' : 'Copiar post'}
                    </button>
                    <button
                      onClick={generate}
                      className="flex-1 text-xs font-medium py-2.5 border border-[#DDD8CE] text-[#6B6860] hover:border-[#C4602A] hover:text-[#C4602A] transition-all duration-200"
                    >
                      Regenerar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer note */}
          <p className="text-xs text-[#B8B3A8] mt-6 font-light text-center">
            Demo de <span className="text-[#C4602A]">AutoPost CM</span> · Desarrollado por Sara Abreu · Powered by Grok
          </p>
        </div>
      </div>
    </>
  );
}
