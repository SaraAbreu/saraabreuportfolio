import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Aplicaciones web',
    desc: 'React, Next.js, TypeScript. SPA, SSR, E-commerce, dashboards. Rendimiento, escalabilidad, código mantenible.'
  },
  {
    num: '02',
    title: 'Plataformas multiplataforma',
    desc: 'React Native + Expo. iOS, Android y Web desde una base de código. Chat IA, pagos, autenticación integrados.'
  },
  {
    num: '03',
    title: 'Backend y APIs',
    desc: 'FastAPI, Node.js, MongoDB, PostgreSQL. REST APIs documentadas, autenticación JWT, integraciones con OpenAI y Stripe.'
  },
  {
    num: '04',
    title: 'Automatizaciones',
    desc: 'Sistemas standalone, CRM, gestión de datos. Flujos sin dependencias externas, escalables y con documentación completa.'
  }
];

export default function Services() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (!isClient) return null;

  return (
    <section className="border-t border-[#DDD8CE]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#DDD8CE]"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-8 sm:p-10 border-r border-[#DDD8CE] last:border-r-0 hover:bg-[#F0E0D6]/30 transition-colors duration-300 max-sm:border-b"
          >
            <div className="text-xs font-medium tracking-widest text-[#C4602A] mb-4 uppercase">
              {service.num}
            </div>
            <h3 className="text-base sm:text-lg font-medium mb-3 tracking-tight text-[#1A1A18]">
              {service.title}
            </h3>
            <p className="text-sm text-[#6B6860] leading-relaxed font-light">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
