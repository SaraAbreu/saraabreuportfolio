import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.matchMedia) {
      try {
        setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      } catch (e) {
        setPrefersReducedMotion(false);
      }
    }
  }, []);

  if (!mounted) {
    // avoid AnimatePresence on server to prevent SSR errors
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="layout"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, transition: { duration: 0.5 } }}
        exit={prefersReducedMotion ? {} : { opacity: 0, transition: { duration: 0.35 } }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
