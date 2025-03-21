import React from 'react';

const projects = [
  {
    name: 'Landing Page Fitness',
    description: 'Sitio responsive para un gimnasio local con diseño atractivo y llamado a la acción claro.',
    image: 'https://via.placeholder.com/400x250?text=Landing+Fitness',
    link: 'https://github.com/AntonioVizcaya/landing-fitness',
  },
  {
    name: 'E-commerce de Ropa',
    description: 'Tienda online con carrito de compras, pasarela de pago y diseño responsive.',
    image: 'https://via.placeholder.com/400x250?text=E-commerce+Ropa',
    link: 'https://github.com/AntonioVizcaya/ecommerce-ropa',
  },
  {
    name: 'Portafolio Personal',
    description: 'Página web personal para mostrar proyectos y habilidades profesionales.',
    image: 'https://via.placeholder.com/400x250?text=Portafolio+Antonio+Vizcaya',
    link: 'https://portafolio-vizcaya.vercel.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Ver Proyecto 🚀
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
