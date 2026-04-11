import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Reveal from "../components/Effects/Reveal";
import Experience from "../components/Experience/Experience";

function Home() {
  return (
    <div className="portfolio-content">
      <div className="noise-overlay"></div>
      <Reveal />
      
      <Navbar />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. About (Includes Experience implicitly or follows) */}
      <About />
      <Experience />
      
      {/* 3. Projects */}
      <Projects />
      
      {/* 4. Skills */}
      <Skills />
      
      {/* 5. Contact */}
      <Contact />

      {/* Background radial effects handled by CSS */}
    </div>
  );
}

export default Home;