import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Visor a pantalla completa: ← → para navegar, Esc para salir.
export default function Visor({ fotos, index, onClose, onChange }) {
  const open = index !== null && index !== undefined;
  const go = useCallback(
    (d) => onChange((index + d + fotos.length) % fotos.length),
    [index, fotos.length, onChange]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  const foto = open ? fotos[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={foto.alt}
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            key={foto.src}
            className="relative w-[92vw] h-[82vh]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="92vw"
              className="object-contain"
              placeholder={foto.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={foto.blurDataURL}
            />
          </motion.div>

          <p className="absolute bottom-6 inset-x-0 text-center text-[11px] uppercase tracking-[0.3em] text-white/40">
            {String(index + 1).padStart(2, '0')} / {String(fotos.length).padStart(2, '0')}
          </p>

          {[
            { d: -1, label: 'Foto anterior', icon: '←', pos: 'left-3 sm:left-6' },
            { d: 1, label: 'Foto siguiente', icon: '→', pos: 'right-3 sm:right-6' }
          ].map((b) => (
            <button
              key={b.d}
              aria-label={b.label}
              onClick={(e) => {
                e.stopPropagation();
                go(b.d);
              }}
              className={`absolute ${b.pos} top-1/2 -translate-y-1/2 w-11 h-11 text-white/60 hover:text-white text-xl`}
            >
              {b.icon}
            </button>
          ))}
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute top-5 right-5 w-11 h-11 text-white/60 hover:text-white text-lg"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
