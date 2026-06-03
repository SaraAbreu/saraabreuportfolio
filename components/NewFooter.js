import React from 'react';
import { motion } from 'framer-motion';

export default function NewFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap"
      >
        <div className="text-sm font-medium text-black">
          Sara Abreu · Diseño & Desarrollo
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/sara-abreu-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/saritaabreu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-black transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@abreu.studio"
            className="text-xs text-gray-500 hover:text-black transition-colors"
          >
            hello@abreu.studio
          </a>
        </div>

        <div className="text-xs text-gray-400">
          © {currentYear} Sara Abreu. Hecho con código propio.
        </div>
      </motion.div>
    </footer>
  );
}
