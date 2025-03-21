import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Contáctame</h2>
        <p className="text-gray-600 mb-10">
          ¿Tienes un proyecto en mente o necesitas ayuda con tu presencia online? ¡Escríbeme!
        </p>
        <form 
          className="bg-white p-8 rounded-2xl shadow-lg text-left space-y-4 max-w-2xl mx-auto"
          action="https://formsubmit.co/tu-correo@gmail.com" 
          method="POST"
        >
          <div>
            <label className="block mb-1 text-gray-700">Nombre</label>
            <input 
              type="text" 
              name="name" 
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Correo electrónico</label>
            <input 
              type="email" 
              name="email" 
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Mensaje</label>
            <textarea 
              name="message" 
              rows="4" 
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg transition-colors"
          >
            Enviar mensaje 🚀
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
