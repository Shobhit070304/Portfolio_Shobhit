import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/Resume_Shobhit.pdf";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import "./HeroGate.css";

const Hero = () => {

  // Gate animation state
  const [gateOpen, setGateOpen] = useState(false);
  const [gateHide, setGateHide] = useState(false);
  useEffect(() => {
    // Start gate animation after a longer pause for dramatic effect
    const openTimer = setTimeout(() => {
      setGateOpen(true);
      // Hide the gate overlay after animation completes (match CSS duration)
      setTimeout(() => setGateHide(true), 3200);
    }, 1200); // Longer pause before opening
    return () => {
      clearTimeout(openTimer);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-6"
    >

      {/* Gate Animation Overlay */}
      {!gateHide && (
        <div className={`hero-gate-container${gateOpen ? " hide" : ""}`}>
          <div className={`hero-gate top${gateOpen ? " open" : ""}`}>
            <div className="hero-gate-line"></div>
          </div>
          <div className={`hero-gate bottom${gateOpen ? " open" : ""}`}>
            <div className="hero-gate-line"></div>
          </div>
        </div>
      )}

      {/* Hero Content, scale and fade in after gate opens */}
      <div
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-[1300ms] ${gateOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{
          transitionProperty: "opacity, transform",
          transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)",
          transitionDelay: gateOpen ? "1.7s" : "0s"
        }}
      >
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-crimson font-normal tracking-tight text-white leading-tight">
              Shobhit Kumar Sharma
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-white mt-2">
              <TypeAnimation
                sequence={["Developer", 2000, "Programmer", 2000, "Creator", 2000]}
                speed={50}
                className="inline"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="text-base md:text-lg text-white/70 mt-4">
              Building elegant solutions for the digital world.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="group flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-inter font-medium tracking-widest uppercase hover:bg-white/90 transition-all duration-500 border-2 border-white">
              <a href={Resume} className="" download="My_Resume.pdf">
                My Resume
              </a>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>

            <button
              onClick={scrollToContact}
              className="text-xs font-inter font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase border-b border-white/20 hover:border-white/60 pb-1"
            >
              Get in touch
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 pt-12">
            <a
              href="https://github.com/Shobhit070304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-all duration-500 hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shobhit-kumar-sharma-17bb4223a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-all duration-500 hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/sharmashobhit1000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-all duration-500 hover:scale-110"
            >
              <div className="w-4 h-4 bg-orange-500 rounded text-white font-bold text-[10px] flex items-center justify-center">
                LC
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
