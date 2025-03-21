import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">Antonio Vizcaya</div>

      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#about" className="text-gray-700 hover:text-blue-500 transition">Sobre mí</a></li>
        <li><a href="#projects" className="text-gray-700 hover:text-blue-500 transition">Proyectos</a></li>
        <li><a href="#services" className="text-gray-700 hover:text-blue-500 transition">Servicios</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-blue-500 transition">Contacto</a></li>
      </ul>

      <button onClick={toggleMenu} className="md:hidden text-gray-700 text-3xl focus:outline-none">
        {isOpen ? '✖' : '☰'}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-40">
          <ul className="flex flex-col gap-4 p-6">
            <li><a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">Sobre mí</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">Proyectos</a></li>
            <li><a href="#services" onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">Servicios</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
