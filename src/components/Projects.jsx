import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Landing Page Fitness',
      description: 'Sitio responsivo para un gimnasio local, con CTA claro y diseño atractivo.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'E-commerce de Ropa',
      description: 'Tienda en línea con carrito de compras, pasarela de pago y diseño responsivo.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Portfolio Personal',
      description: 'Portafolio para mostrar mis trabajos, habilidades y experiencia profesional.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Proyectos</h2>
        <p className="text-gray-600 text-lg mb-10">
          Algunos de los proyectos en los que he trabajado recientemente:
        </p>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

