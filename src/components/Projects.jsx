import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Landing Page Fitness",
    description: "Sitio responsivo para un gimnasio local con diseño atractivo y CTA claro.",
    image: "https://via.placeholder.com/400x250?text=Landing+Fitness",
    link: "https://github.com/AntonioVizcaya/landing-fitness",
  },
  {
    name: "E-commerce de Ropa",
    description: "Tienda online con carrito de compras, pasarela de pago y diseño moderno.",
    image: "https://via.placeholder.com/400x250?text=E-commerce+Ropa",
    link: "https://github.com/AntonioVizcaya/ecommerce-ropa",
  },
  {
    name: "Portafolio Personal",
    description: "Página web personal para mostrar proyectos y habilidades profesionales.",
    image: "https://via.placeholder.com/400x250?text=Portafolio+Antonio+Vizcaya",
    link: "https://portafolio-vizcaya.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
