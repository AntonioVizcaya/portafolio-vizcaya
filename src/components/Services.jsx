import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Diseño Web Moderno',
    description: 'Sitios atractivos, responsivos y optimizados para causar la mejor impresión online.',
    icon: '🌐',
  },
  {
    title: 'Landing Pages',
    description: 'Páginas enfocadas en conversión para campañas publicitarias o presentación de servicios.',
    icon: '🚀',
  },
  {
    title: 'Optimización y SEO',
    description: 'Mejora de velocidad, rendimiento y posicionamiento en Google.',
    icon: '📈',
  },
  {
    title: 'Despliegue en Vercel & GitHub',
    description: 'Proyectos listos para producción, conectados a repositorios y con actualizaciones automáticas.',
    icon: '⚙️',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          Servicios
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
