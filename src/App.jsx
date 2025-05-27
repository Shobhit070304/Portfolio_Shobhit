import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import LocomotiveScroll from "locomotive-scroll";
import Background from "./components/Background";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-hidden">
      <Background />
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
