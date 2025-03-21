import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-purple-600"
        >
          Antonio Vizcaya
        </motion.h1>
        <div className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          {['Sobre mí', 'Proyectos', 'Servicios', 'Contacto'].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-purple-600 transition">
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-3xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {['Sobre mí', 'Proyectos', 'Servicios', 'Contacto'].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="block py-2 border-b border-gray-200 hover:text-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
