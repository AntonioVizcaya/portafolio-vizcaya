import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left mb-4 md:mb-0"
        >
          © {new Date().getFullYear()} Antonio Vizcaya. Todos los derechos reservados.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex gap-6 text-xl"
        >
          <a
            href="https://github.com/AntonioVizcaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-vizcaya-8083b9351/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:antoniovizcayacarranza@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
