import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Sobre mí</h2>
        <p className="text-gray-600 text-lg mb-8">
          Soy Vizcaya, un desarrollador web apasionado por crear sitios rápidos, responsivos y visualmente atractivos.
          Mi misión es ayudarte a tener presencia digital de alto impacto para impulsar tu negocio.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-md w-72">
            <h3 className="text-2xl font-semibold mb-2">Mis habilidades</h3>
            <ul className="text-gray-700 text-left list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React y Tailwind</li>
              <li>Optimización y SEO</li>
              <li>Despliegue en Vercel y GitHub</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md w-72">
            <h3 className="text-2xl font-semibold mb-2">Lo que ofrezco</h3>
            <ul className="text-gray-700 text-left list-disc list-inside">
              <li>Sitios modernos y responsivos</li>
              <li>Diseños personalizados</li>
              <li>Atención profesional y puntualidad</li>
              <li>Soporte y actualizaciones</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
