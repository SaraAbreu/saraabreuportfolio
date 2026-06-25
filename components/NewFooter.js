import React from 'react';
import { motion } from 'framer-motion';

export default function NewFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A18]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
      >
        {/* Nombre */}
        <div>
          <p className="font-serif text-lg text-[#F8F6F1] tracking-tight">
            Sara Abreu<span className="text-[#C4602A]">.</span>
          </p>
          <p className="text-xs text-[#6B6860] mt-1">Desarrolladora Full Stack · Tenerife</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/sara-abreu-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#6B6860] hover:text-[#F8F6F1] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SaraAbreu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#6B6860] hover:text-[#F8F6F1] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/saritaabreu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#6B6860] hover:text-[#F8F6F1] transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:sarahernandez.online@gmail.com"
            className="text-xs text-[#6B6860] hover:text-[#C4602A] transition-colors"
          >
            sarahernandez.online@gmail.com
          </a>
        </div>

        {/* Copy */}
        <div className="text-xs text-[#3D3D3A]">
          © {currentYear} Sara Abreu
        </div>
      </motion.div>
    </footer>
  );
}
