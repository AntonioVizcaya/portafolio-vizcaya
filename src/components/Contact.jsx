import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Contáctame
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mb-10 max-w-xl mx-auto"
        >
          ¿Tienes un proyecto en mente o quieres trabajar conmigo? ¡Mándame un mensaje y te respondo pronto!
        </motion.p>
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-lg text-gray-900 max-w-xl mx-auto"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Enviar mensaje 🚀
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
