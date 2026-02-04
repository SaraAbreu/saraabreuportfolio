import React, { useEffect, useRef } from 'react';

const NODES = [
  { id: 'manifesto', label: 'Manifiesto' },
  { id: 'process', label: 'Cómo trabajo' },
  { id: 'showcase', label: 'Proyectos' },
  { id: 'ai', label: 'IA / Generador' },
  { id: 'automation', label: 'Automatizaciones' },
  { id: 'web', label: 'Sitios & Apps' }
];

export default function MindWorld({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const nodes = NODES.map((n, i) => ({
      ...n,
      x: (w * (0.2 + (i % 3) * 0.3)) + (Math.random() * 40 - 20),
      y: (h * (0.25 + Math.floor(i / 3) * 0.45)) + (Math.random() * 30 - 15),
      r: 28 + Math.random() * 8
    }));

    function resize() {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
    }

    function draw(mouse = { x: -9999, y: -9999 }) {
      ctx.clearRect(0, 0, w, h);
      // background subtle
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, 'rgba(8,10,16,0.6)');
      g.addColorStop(1, 'rgba(16,14,20,0.3)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // draw links
      ctx.strokeStyle = 'rgba(124,58,237,0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // draw nodes
      for (let n of nodes) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d = Math.hypot(dx, dy);
        const hover = d < n.r + 12;

        // Enhanced halo with gradient
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r + (hover ? 12 : 6));
        gradient.addColorStop(0, hover ? 'rgba(212, 175, 55, 0.3)' : 'rgba(6, 182, 212, 0.15)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + (hover ? 12 : 6), 0, Math.PI * 2);
        ctx.fill();

        // core with gradient
        const coreGradient = ctx.createLinearGradient(n.x - n.r, n.y - n.r, n.x + n.r, n.y + n.r);
        if (hover) {
          coreGradient.addColorStop(0, 'rgba(212, 175, 55, 0.9)');
          coreGradient.addColorStop(1, 'rgba(6, 182, 212, 0.9)');
        } else {
          coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
          coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0.04)');
        }
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // label with better contrast
        ctx.fillStyle = hover ? '#000000' : '#ffffff';
        ctx.font = '600 14px Inter, Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.label, n.x, n.y);
      }
    }

    let mouse = { x: -9999, y: -9999 };
    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      mouse.y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      draw(mouse);
    }

    function onLeave() {
      mouse = { x: -9999, y: -9999 };
      draw(mouse);
    }

    function onClick(e) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (let n of nodes) {
        const d = Math.hypot(mx - n.x, my - n.y);
        if (d < n.r + 10) {
          const el = document.getElementById(n.id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
    }

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('touchmove', onMove, { passive: true });
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('click', onClick);

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('touchmove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className={`mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-black/30 to-white/2 p-4 shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-3">Explora mi mundo</h3>
      <p className="text-gray-300/80 text-sm mb-4">Haz hover y haz click en los nodos para navegar por mi proceso y proyectos.</p>
      <div style={{ width: '100%', height: 260 }}>
        <canvas ref={ref} style={{ width: '100%', height: '100%', display: 'block', borderRadius: 8 }} />
      </div>
    </div>
  );
}
