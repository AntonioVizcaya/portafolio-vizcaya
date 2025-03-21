import React from 'react';

function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Servicios</h2>
        <p className="text-gray-600 text-lg mb-10">
          Esto es lo que puedo hacer por ti y tu negocio:
        </p>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Diseño web moderno</h3>
            <p className="text-gray-600">
              Sitios atractivos, responsivos y optimizados para dar la mejor impresión online.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Landing Pages</h3>
            <p className="text-gray-600">
              Páginas enfocadas en conversión para campañas publicitarias o presentación de servicios.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Optimización y SEO</h3>
            <p className="text-gray-600">
              Mejoro la velocidad de carga y posicionamiento para que tu web destaque en Google.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
