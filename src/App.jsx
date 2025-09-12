import React from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <MainLayout>
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <Hero />
      </section>
      <section id="about" className="min-h-screen px-6 py-24 angled-divider">
        <About />
      </section>
      <section id="skills" className="min-h-screen px-6 py-24">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen px-6 py-24 angled-divider">
        <Projects />
      </section>
      <section id="contact" className="px-6">
        <Contact />
      </section>
    </MainLayout>
  );
};

export default App;


