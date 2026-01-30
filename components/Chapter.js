import React from 'react'
import { motion } from 'framer-motion'

const DEFAULT_ENTER_DURATION = 0.65
const DEFAULT_EXIT_DURATION = 0.45

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: DEFAULT_ENTER_DURATION, ease: 'easeOut' } },
  exit: { opacity: 0, y: 8, transition: { duration: DEFAULT_EXIT_DURATION } }
}

export default function Chapter({ children, className = '', delay = 0 }) {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <motion.section
      initial={prefersReduced ? false : 'hidden'}
      animate={prefersReduced ? false : 'enter'}
      exit={prefersReduced ? false : 'exit'}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
