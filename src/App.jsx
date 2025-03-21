import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';  // 👈 Esta importación va aquí
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />   {/* 👈 Este componente se usa dentro del return */}
      <Footer />
    </div>
  );
}

export default App;
