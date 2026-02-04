import React, { useEffect } from 'react';

export default function Lightbox({ images = [], index = 0, onClose }) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!images || images.length === 0) return null;

  const src = images[index % images.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" role="dialog" aria-modal="true">
      <button
        aria-label="Cerrar" 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/90 bg-white/6 rounded-full w-10 h-10 flex items-center justify-center"
      >
        ✕
      </button>

      <div className="max-w-[90vw] max-h-[90vh] modal-content">
        <img src={src} alt="Imagen" className="w-full h-auto mx-auto rounded-md shadow-lg" />
        {images.length > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  // Switch by replacing location hash so parent can react if needed
                  const evt = new CustomEvent('lightbox-select', { detail: i });
                  window.dispatchEvent(evt);
                }}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-[color:var(--accent-warm)]' : 'bg-white/30'}`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
