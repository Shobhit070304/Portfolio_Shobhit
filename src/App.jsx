import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Profiles from "./components/Profiles";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import LocomotiveScroll from "locomotive-scroll";
import Background from "./components/Background";
import { Toaster } from "react-hot-toast";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-hidden">
      <Toaster />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Profiles />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
