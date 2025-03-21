import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
        >
          ¡Hola! Soy <span className="text-yellow-300">Antonio Vizcaya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Desarrollo sitios web modernos, responsivos y optimizados para impulsar tu presencia online 🚀
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-300 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition"
          >
            Ver mis proyectos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Contáctame
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
