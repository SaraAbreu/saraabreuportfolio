import React, { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [serif, setSerif] = useState('playfair');
  const [palette, setPalette] = useState('warm');
  const [layout, setLayout] = useState('full');

  useEffect(() => {
    const root = document.documentElement;
    // serif
    if (serif === 'playfair')
      root.style.setProperty('--font-serif', "'Playfair Display', Georgia, serif");
    if (serif === 'merri') root.style.setProperty('--font-serif', "'Merriweather', Georgia, serif");

    // palette
    if (palette === 'warm')
      root.style.setProperty('--accent', getComputedStyle(root).getPropertyValue('--accent-warm'));
    if (palette === 'cool')
      root.style.setProperty('--accent', getComputedStyle(root).getPropertyValue('--accent-cool'));

    // layout simplified
    if (layout === 'simplified') document.body.classList.add('simplified');
    else document.body.classList.remove('simplified');

    // persist
    localStorage.setItem('abreu:serif', serif);
    localStorage.setItem('abreu:palette', palette);
    localStorage.setItem('abreu:layout', layout);
  }, [serif, palette, layout]);

  useEffect(() => {
    // restore
    const s = localStorage.getItem('abreu:serif');
    const p = localStorage.getItem('abreu:palette');
    const l = localStorage.getItem('abreu:layout');
    if (s) setSerif(s);
    if (p) setPalette(p);
    if (l) setLayout(l);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center text-sm">
      <div className="bg-black/40 rounded-md p-2 flex gap-2 items-center">
        <label className="text-xs text-gray-300 mr-1">Serif</label>
        <button
          onClick={() => setSerif('playfair')}
          className={`px-2 py-1 rounded ${serif === 'playfair' ? 'bg-white/6' : 'bg-transparent'}`}
        >
          Playfair
        </button>
        <button
          onClick={() => setSerif('merri')}
          className={`px-2 py-1 rounded ${serif === 'merri' ? 'bg-white/6' : 'bg-transparent'}`}
        >
          Merri
        </button>
      </div>
      <div className="bg-black/40 rounded-md p-2 flex gap-2 items-center">
        <label className="text-xs text-gray-300 mr-1">Paleta</label>
        <button
          onClick={() => setPalette('warm')}
          className={`px-2 py-1 rounded ${palette === 'warm' ? 'bg-white/6' : 'bg-transparent'}`}
        >
          Warm
        </button>
        <button
          onClick={() => setPalette('cool')}
          className={`px-2 py-1 rounded ${palette === 'cool' ? 'bg-white/6' : 'bg-transparent'}`}
        >
          Cool
        </button>
      </div>
      <div className="bg-black/40 rounded-md p-2 flex gap-2 items-center">
        <label className="text-xs text-gray-300 mr-1">Layout</label>
        <button
          onClick={() => setLayout('full')}
          className={`px-2 py-1 rounded ${layout === 'full' ? 'bg-white/6' : 'bg-transparent'}`}
        >
          Full
        </button>
        <button
          onClick={() => setLayout('simplified')}
          className={`px-2 py-1 rounded ${
            layout === 'simplified' ? 'bg-white/6' : 'bg-transparent'
          }`}
        >
          Simple
        </button>
      </div>
    </div>
  );
}
