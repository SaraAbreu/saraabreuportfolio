import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SIZES_OBRA } from './Cuadro';
import { GOLD } from './GaleriaLayout';

// Encaja la obra dentro de la ventana dejando aire para la cartela.
function encajar(foto, vw, vh) {
  const maxW = vw * (vw < 640 ? 0.94 : 0.86);
  const maxH = vh * (vw < 640 ? 0.66 : 0.76);
  const k = Math.min(maxW / foto.width, maxH / foto.height);
  const width = foto.width * k;
  const height = foto.height * k;
  return { left: (vw - width) / 2, top: (vh - height) / 2 - (vw < 640 ? vh * 0.05 : 0), width, height };
}

const EASE = [0.65, 0, 0.2, 1];

// "Adentrarse": la foto sale de su marco y nos envuelve.
export default function Inmersion({ obras, inicio, origen, getRect, onIndex, onClose }) {
  const [i, setI] = useState(inicio);
  const [fase, setFase] = useState('abriendo'); // abriendo | dentro | cerrando
  const [cierre, setCierre] = useState(null);
  const [hd, setHd] = useState(false);
  const [vp, setVp] = useState({ w: window.innerWidth, h: window.innerHeight });
  const primera = useRef(true);
  const cerrarBtn = useRef(null);

  const { foto, serie, indice } = obras[i];
  const destino = encajar(foto, vp.w, vp.h);

  // Paralaje: la foto respira con el ratón, como si te movieras delante de ella.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });

  const cerrar = useCallback(() => {
    const r = getRect(i);
    const visible = r && r.right > 0 && r.left < window.innerWidth && r.width > 0;
    setCierre(visible ? r : null);
    setFase('cerrando');
  }, [getRect, i]);

  const ir = useCallback(
    (d) => {
      primera.current = false;
      setHd(false);
      setI((v) => (v + d + obras.length) % obras.length);
    },
    [obras.length]
  );

  useEffect(() => onIndex(i), [i, onIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') cerrar();
      if (e.key === 'ArrowRight') ir(1);
      if (e.key === 'ArrowLeft') ir(-1);
    };
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cerrarBtn.current?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = prev;
    };
  }, [cerrar, ir]);

  const onMove = (e) => {
    mx.set((e.clientX / vp.w - 0.5) * -22);
    my.set((e.clientY / vp.h - 0.5) * -16);
  };

  const cerrando = fase === 'cerrando';
  const caja = cerrando
    ? cierre
      ? { left: cierre.left, top: cierre.top, width: cierre.width, height: cierre.height, opacity: 1, scale: 1 }
      : { ...destino, opacity: 0, scale: 0.96 }
    : { ...destino, opacity: 1, scale: 1 };
  const inicial =
    primera.current && origen
      ? { left: origen.left, top: origen.top, width: origen.width, height: origen.height, opacity: 1, scale: 1 }
      : { ...destino, opacity: 0, scale: 1.03 };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Obra ${indice + 1}: ${foto.titulo}`}
      className="fixed inset-0 z-[70]"
      onMouseMove={onMove}
    >
      {/* La sala se apaga; la foto tiñe el ambiente */}
      <motion.div
        className="absolute inset-0 bg-[#050404]"
        initial={{ opacity: 0 }}
        animate={{ opacity: cerrando ? 0 : 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        onClick={cerrar}
      >
        <motion.div
          key={foto.src}
          aria-hidden
          className="absolute inset-[-10%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          style={{ x: px, y: py }}
        >
          <Image src={foto.src} alt="" fill sizes={SIZES_OBRA} className="object-cover blur-3xl saturate-150" />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)' }}
        />
      </motion.div>

      {/* La obra */}
      <motion.div
        key={foto.src}
        className="absolute overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
        initial={inicial}
        animate={caja}
        transition={{ duration: primera.current || cerrando ? 0.9 : 0.6, ease: EASE }}
        onAnimationComplete={() => {
          if (cerrando) onClose();
          else setFase('dentro');
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: fase === 'dentro' ? 1.06 : 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
          style={fase === 'dentro' ? { x: px, y: py } : undefined}
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            sizes={SIZES_OBRA}
            className="object-cover"
            placeholder={foto.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={foto.blurDataURL}
          />
          <Image
            src={foto.src}
            alt=""
            fill
            sizes="100vw"
            quality={90}
            onLoad={() => setHd(true)}
            className={`object-cover transition-opacity duration-700 ${hd ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>
      </motion.div>

      {/* Cartela, controles */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: fase === 'dentro' ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute left-5 sm:left-10 bottom-6 sm:bottom-10 max-w-xs">
          <p className="font-mono text-[10px] tracking-[0.25em] text-white/45">
            Nº {String(indice + 1).padStart(2, '0')} / {String(obras.length).padStart(2, '0')}
          </p>
          <p className="mt-2 font-serif italic text-2xl sm:text-3xl text-[#EDEAE3]">{foto.titulo}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            {serie}
            {foto.lugar ? ` · ${foto.lugar}` : ''}
            {foto.anio ? `, ${foto.anio}` : ''}
          </p>
        </div>
        <p className="hidden sm:block absolute right-10 bottom-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
          ← → para recorrer · Esc para volver
        </p>
      </motion.div>

      <div className="absolute inset-x-0 top-0 flex justify-between items-center px-4 sm:px-8 py-5">
        <button
          ref={cerrarBtn}
          type="button"
          onClick={cerrar}
          className="text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors py-2"
        >
          ← Volver a la sala
        </button>
      </div>
      {[
        { d: -1, label: 'Obra anterior', icon: '←', pos: 'left-2 sm:left-5' },
        { d: 1, label: 'Obra siguiente', icon: '→', pos: 'right-2 sm:right-5' }
      ].map((b) => (
        <button
          key={b.d}
          type="button"
          aria-label={b.label}
          onClick={() => ir(b.d)}
          className={`absolute ${b.pos} top-1/2 -translate-y-1/2 w-12 h-12 rounded-full text-white/55 hover:text-white hover:bg-white/5 transition text-xl`}
        >
          {b.icon}
        </button>
      ))}
    </div>
  );
}
