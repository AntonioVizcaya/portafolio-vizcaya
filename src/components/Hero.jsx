import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
      <div className="absolute inset-0 opacity-10 bg-[url('https://source.unsplash.com/1600x900/?technology,web')] bg-cover bg-center"></div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 z-10">
        ¡Hola! Soy <span className="text-blue-600">Antonio Vizcaya</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 z-10 max-w-2xl">
        Desarrollo sitios web modernos, responsivos y optimizados para impulsar tu presencia online 🚀
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-xl z-10"
      >
        Contáctame
      </a>
    </section>
  );
}

export default Hero;
