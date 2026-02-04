import { useState, useEffect } from 'react';
import Head from 'next/head';
import projects from '../../data/projects';

export default function EditCase() {
  const [slug, setSlug] = useState(projects[0]?.slug || '');
  const [content, setContent] = useState('');
  const [msg, setMsg] = useState('');
  const [token, setToken] = useState('');

  // token from localStorage or prompt — run only on client
  useEffect(() => {
    try {
      const t = typeof window !== 'undefined' && localStorage.getItem('adminToken');
      if (t) setToken(t);
      else {
        const p =
          typeof window !== 'undefined' &&
          window.prompt &&
          window.prompt('Introduce admin token (si está configurado) o cancelar:');
        if (p) {
          localStorage.setItem('adminToken', p);
          setToken(p);
        }
      }
    } catch (e) {}
  }, []);

  async function load() {
    setMsg('Cargando...');
    const url = `/api/case/read?slug=${slug}`;
    const headers = {};
    if (token) headers['x-admin-token'] = token;
    const res = await fetch(url, { headers });
    const data = await res.json();
    if (res.ok) {
      setContent(data.content);
      setMsg('Cargado');
    } else setMsg(data.error || 'Error');
  }

  async function save() {
    setMsg('Guardando...');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['x-admin-token'] = token;
    const res = await fetch('/api/case/write', {
      method: 'POST',
      headers,
      body: JSON.stringify({ slug, content })
    });
    const data = await res.json();
    if (res.ok) setMsg('Guardado');
    else setMsg(data.error || 'Error');
  }

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Admin — Edit Case</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Editar case study</h1>
        <div className="mb-3">
          <select
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="p-2 border rounded"
          >
            {projects.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
          <button onClick={load} className="ml-3 px-3 py-2 border rounded">
            Cargar
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex gap-2 mb-2">
              <button onClick={() => wrapSelection('**')} className="px-2 py-1 border rounded">
                B
              </button>
              <button
                onClick={() => wrapSelection('*')}
                className="px-2 py-1 border rounded italic"
              >
                I
              </button>
              <button onClick={() => insertAtCursor('\n## ')} className="px-2 py-1 border rounded">
                H2
              </button>
              <button onClick={() => insertAtCursor('\n### ')} className="px-2 py-1 border rounded">
                H3
              </button>
              <button onClick={() => insertAtCursor('\n- ')} className="px-2 py-1 border rounded">
                • List
              </button>
              <button
                onClick={() => insertAtCursor('\n```\ncode\n```\n')}
                className="px-2 py-1 border rounded"
              >
                code
              </button>
              <button onClick={() => insertLink()} className="px-2 py-1 border rounded">
                link
              </button>
            </div>
            <textarea
              id="case-editor"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={18}
              className="w-full p-3 border rounded font-mono bg-black/5"
            />
          </div>
          <div className="p-3 border rounded bg-white/5">
            <h3 className="font-semibold mb-2">Previsualización</h3>
            <div
              className="prose max-w-none text-gray-100"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          </div>
        </div>

        <div className="mt-3 flex gap-3">
          <button onClick={save} className="px-4 py-2 bg-sky-500 text-black rounded">
            Guardar
          </button>
          <div className="text-sm text-gray-600">{msg}</div>
        </div>
      </div>
    </div>
  );
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderMarkdown(md = '') {
  // very small markdown-ish renderer: headings, lists, paragraphs, links, bold
  if (!md) return '';
  let out = escapeHtml(md);
  // code blocks (```)
  out = out.replace(
    /```([\s\S]*?)```/g,
    (m, code) => `<pre class="p-2 bg-black/10 rounded"><code>${escapeHtml(code)}</code></pre>`
  );
  // headings
  out = out.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  out = out.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  out = out.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  // bold **text**
  out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // inline code `code`
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  // blockquotes
  out = out.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
  // links [text](url)
  out = out.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  // lists
  out = out.replace(/^\s*- (.*)$/gim, '<li>$1</li>');
  out = out.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
  // paragraphs
  out = out.replace(/\n{2,}/g, '</p><p>');
  out = '<p>' + out + '</p>';
  // line breaks
  out = out.replace(/\n/g, '<br/>');
  return out;
}

// helper to insert markdown at cursor in textarea
function insertAtCursor(text) {
  try {
    const el = document.getElementById('case-editor');
    if (!el) return;
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const before = el.value.slice(0, start);
    const after = el.value.slice(end);
    el.value = before + text + after;
    const pos = start + text.length;
    el.selectionStart = el.selectionEnd = pos;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  } catch (e) {}
}

function wrapSelection(wrapper) {
  try {
    const el = document.getElementById('case-editor');
    if (!el) return;
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const sel = el.value.slice(start, end);
    const before = el.value.slice(0, start);
    const after = el.value.slice(end);
    el.value = before + wrapper + sel + wrapper + after;
    const pos = end + wrapper.length * 2;
    el.selectionStart = start + wrapper.length;
    el.selectionEnd = start + wrapper.length + sel.length;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  } catch (e) {}
}

function insertLink() {
  const url = prompt('URL:');
  if (!url) return;
  const text = prompt('Texto del link:', 'enlace') || 'enlace';
  insertAtCursor(`[${text}](${url})`);
}
