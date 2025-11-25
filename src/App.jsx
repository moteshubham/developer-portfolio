import React from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { Route, Routes } from "react-router-dom";
import Challenges from "./pages/challenges/index.jsx";
import ToDoKanban from "./pages/challenges/todo-kanban/index.jsx";
import PaginationChallenge from "./pages/challenges/pagination/index.jsx";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <section
              id="hero"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <Hero />
            </section>
            <section
              id="about"
              className="min-h-screen px-6 py-24 angled-divider"
            >
              <About />
            </section>
            <section id="skills" className="min-h-screen px-6 py-24">
              <Skills />
            </section>
            <section
              id="projects"
              className="min-h-screen px-6 py-24 angled-divider"
            >
              <Projects />
            </section>
            <section id="contact" className="px-6">
              <Contact />
            </section>
          </MainLayout>
        }
      />
      <Route path="/challenges" element={<MainLayout><Challenges /></MainLayout>} />
      <Route path="/challenges/todo-kanban" element={<MainLayout><ToDoKanban /></MainLayout>} />
      <Route path="/challenges/pagination" element={<MainLayout><PaginationChallenge /></MainLayout>} />
    </Routes>
  );
};

export default App;
