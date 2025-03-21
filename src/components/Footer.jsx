import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Antonio Vizcaya. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/AntonioVizcaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-vizcaya-8083b9351/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:antoniovizcayacarranza@gmail.com"
            className="hover:text-white"
          >
            antoniovizcayacarranza@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
