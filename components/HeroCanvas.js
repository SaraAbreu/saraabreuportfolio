import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const PARTICLE_COUNT = Math.max(28, Math.floor((width * height) / 60000));
    const mouse = { x: width / 2, y: height / 2 };

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.3, 0.3),
        vy: rand(-0.3, 0.3),
        r: rand(1, 3),
        hue: rand(180, 260)
      });
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      mouse.y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);

    let raf = null;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // elegant soft gradient background (slightly desaturated)
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(6,10,18,0.96)');
      g.addColorStop(0.6, 'rgba(12,11,22,0.94)');
      g.addColorStop(1, 'rgba(18,16,24,0.93)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // draw particles with a refined palette (warm gold + muted teal accents)
      for (let p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.max(20, Math.hypot(dx, dy));
        const force = 28 / (dist * dist);
        p.vx += force * dx + rand(-0.008, 0.008);
        p.vy += force * dy + rand(-0.008, 0.008);

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.92;
        p.vy *= 0.92;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // cold two-tone: mix between deep blue and cyan accents
        const deepBlue = `hsla(${200 + (p.hue % 20)},60%,36%,${0.95 - p.r / 12})`;
        const cyan = `hsla(${185 + (p.hue % 30)},75%,55%,${0.6 - p.r / 16})`;
        ctx.beginPath();
        const useCyan = Math.random() > 0.5;
        ctx.fillStyle = useCyan ? cyan : deepBlue;
        ctx.shadowColor = useCyan ? 'rgba(6,182,212,0.22)' : 'rgba(124,58,237,0.14)';
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.r * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // delicate connection lines with low opacity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(140,220,255,${((140 - d) / 160) * 0.08})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // subtle radial glow in center for 'technology' focus
      const rg = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.05,
        width / 2,
        height / 2,
        Math.min(width, height) * 0.9
      );
      rg.addColorStop(0, 'rgba(6,182,212,0.06)');
      rg.addColorStop(0.6, 'rgba(124,58,237,0.02)');
      rg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
