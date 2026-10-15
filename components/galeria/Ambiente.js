import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Banco de museo en primer plano. Se mueve más rápido que la pared (paralaje),
// ligeramente desenfocado: da profundidad, como si caminaras por la sala.
export function Banco({ x, className = '' }) {
  const extra = useTransform(x, (v) => v * 0.32);
  return (
    <motion.div
      aria-hidden
      style={{ x: extra }}
      className={`pointer-events-none absolute bottom-[1.5vh] z-[5] w-[clamp(220px,24vw,360px)] ${className}`}
    >
      <svg viewBox="0 0 360 90" className="w-full h-auto" style={{ filter: 'blur(1.2px)' }}>
        <defs>
          <linearGradient id="cuero" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b2420" />
            <stop offset="0.25" stopColor="#1b1613" />
            <stop offset="1" stopColor="#0c0a09" />
          </linearGradient>
          <linearGradient id="pata" x1="0" x2="1">
            <stop offset="0" stopColor="#0d0c0b" />
            <stop offset="0.5" stopColor="#2a2622" />
            <stop offset="1" stopColor="#0d0c0b" />
          </linearGradient>
        </defs>
        <ellipse cx="180" cy="84" rx="175" ry="7" fill="rgba(0,0,0,0.6)" />
        <rect x="4" y="18" width="352" height="26" rx="7" fill="url(#cuero)" />
        <rect x="10" y="20" width="340" height="2" rx="1" fill="rgba(255,225,180,0.10)" />
        <rect x="28" y="44" width="16" height="38" fill="url(#pata)" />
        <rect x="316" y="44" width="16" height="38" fill="url(#pata)" />
        <rect x="40" y="58" width="280" height="5" fill="#141210" />
      </svg>
    </motion.div>
  );
}

// Carril de iluminación a lo largo del techo de la sala.
export function Carril() {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-[10vh] h-[5px]">
      <div
        className="h-full"
        style={{
          background: 'linear-gradient(180deg, #2e2a26, #121110)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.05), 0 6px 10px rgba(0,0,0,0.5)'
        }}
      />
    </div>
  );
}

// Cursor de sala: un anillo dorado que se convierte en "Ver" sobre las obras.
export function CursorSala({ activo }) {
  const [visible, setVisible] = useState(false);
  const [modo, setModo] = useState(null);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!activo || !window.matchMedia('(pointer: fine)').matches) return undefined;
    const mover = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
      const t = e.target.closest?.('[data-cursor]');
      setModo(t ? t.getAttribute('data-cursor') : null);
    };
    const salir = () => setVisible(false);
    window.addEventListener('pointermove', mover);
    document.addEventListener('pointerleave', salir);
    document.documentElement.classList.add('cursor-sala');
    return () => {
      window.removeEventListener('pointermove', mover);
      document.removeEventListener('pointerleave', salir);
      document.documentElement.classList.remove('cursor-sala');
    };
  }, [activo, mx, my]);

  if (!activo) return null;
  const ver = modo === 'ver';
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[65] hidden [@media(pointer:fine)]:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        animate={{
          width: ver ? 84 : 10,
          height: ver ? 84 : 10,
          backgroundColor: ver ? 'rgba(14,12,10,0.55)' : 'rgba(201,169,110,0.9)',
          borderColor: ver ? 'rgba(201,169,110,0.8)' : 'rgba(201,169,110,0)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        style={{ borderWidth: 1, borderStyle: 'solid', backdropFilter: ver ? 'blur(2px)' : 'none' }}
      >
        <motion.span
          className="text-[9px] uppercase tracking-[0.3em] text-[#E9D7AE] pl-[0.3em]"
          animate={{ opacity: ver ? 1 : 0, scale: ver ? 1 : 0.6 }}
        >
          Ver
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
