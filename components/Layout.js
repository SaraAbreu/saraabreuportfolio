import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Layout({ children }) {
  const isClient = typeof window !== 'undefined'
  const prefersReducedMotion = isClient && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isClient) {
    // avoid AnimatePresence on server to prevent SSR errors
    return <div className="min-h-screen">{children}</div>
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
  )
}
