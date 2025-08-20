import React from "react";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Profiles = React.lazy(() => import("./components/Profiles"));
const Projects = React.lazy(() => import("./components/Projects"));
const Education = React.lazy(() => import("./components/Education"));
const Contact = React.lazy(() => import("./components/Contact"));
const Background = React.lazy(() => import("./components/Background"));
import LocomotiveScroll from "locomotive-scroll";
import { Toaster } from "react-hot-toast";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-hidden">
      <Toaster />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Profiles />
        <Education />
        <Contact />
      </React.Suspense>
    </div>
  );
};

export default App;
