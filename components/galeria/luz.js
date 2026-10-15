import { useEffect } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

// Iluminación por proximidad: cada obra sabe a qué distancia está del visitante
// (el centro de la pantalla) mientras recorre el pasillo.
//  - luz: 0 (apagada, lejos) → 1 (de frente, foco a pleno)
//  - desvio: posición relativa al visitante (-1 izquierda … 1 derecha), para el reflejo del cristal
export function useLuz(ref, x) {
  const centro = useMotionValue(null);
  const ancho = useMotionValue(1440);
  const cero = useMotionValue(0);
  const mx = x || cero;

  useEffect(() => {
    const medir = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      centro.set(r.left + r.width / 2 - mx.get());
      ancho.set(window.innerWidth);
    };
    medir();
    // ResizeObserver no existe en algunos entornos (tests, navegadores antiguos)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(medir) : null;
    if (ro && ref.current) ro.observe(ref.current);
    window.addEventListener('resize', medir);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', medir);
    };
  }, [ref, mx, centro, ancho]);

  const prox = useTransform([mx, centro, ancho], ([v, c, vw]) => {
    if (c === null) return 0;
    const d = Math.abs(c + v - vw / 2) / (vw * 0.78);
    const t = Math.max(0, Math.min(1, 1 - d));
    return t * t * (3 - 2 * t); // smoothstep: la luz "entra" suave
  });
  const luz = useSpring(prox, { stiffness: 45, damping: 16, mass: 0.8 });
  const desvio = useTransform([mx, centro, ancho], ([v, c, vw]) =>
    c === null ? 0 : Math.max(-1.2, Math.min(1.2, (c + v - vw / 2) / vw))
  );
  // Fuera del pasillo (sin recorrido) la obra está siempre iluminada.
  const fija = useMotionValue(1);
  return { luz: x ? luz : fija, desvio };
}
