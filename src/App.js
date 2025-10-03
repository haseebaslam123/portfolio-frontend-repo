import React from "react";
import Header from "./pages/Components/Header";
import Background from "./pages/Components/Background.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Components/Footer"; 
import useGlobalScrollAnimations from "./pages/Components/useGlobalScrollAnimations.js" // 👈 import the hook

function App() {
  useGlobalScrollAnimations(); // 👈 activates global scroll animations

  return (
    <div>
      <Background />
      <Header />

      <section id="home" className="fade-up">
        <Home />
      </section>

      <section id="about" className="fade-up">
        <About />
      </section>

      <section id="skills" className="fade-up">
        <Skills />
      </section>

      <section id="projects" className="fade-up">
        <Project />
      </section>

      <section id="contact" className="fade-up">
        <Contact />
      </section>

      <Footer  />

    </div>
  );
}

export default App;
