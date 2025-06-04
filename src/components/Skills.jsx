import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  const frontend = skills[0].skills;
  const backend = skills[1].skills;
  const other = skills[2].skills;

  return (
    <section className="section" id="services">
      <div className="container mx-auto min-h-screen lg:py-20">
        <h1 className="w-full text-3xl lg:text-5xl text-center font-semibold text-gradient">
          Skills
        </h1>
        <h3 className="w-full text-center text-xl lg:text-2xl my-4">
          Constantly learning and refining skills through real-world.
          projects
        </h3>
        <div className="skills pt-2 lg:pt-10 flex flex-col lg:flex-row gap-x-8 justify-between items-center gap-y-6 lg:gap-y-0">
          {/* Frontend */}
          <div className="border-purple-900 lg:w-[35%] px-1 py-4 lg:px-4 lg:py-6 backdrop-blur-lg bg-opacity-20 bg-white text-center rounded-xl shadow-purple-400 shadow-md hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl lg:text-4xl font-semibold ">Frontend</h1>
            <div className="px-1 py-2 lg:px-2 lg:py-4 flex items-center justify-center text-center flex-wrap gap-x-2 gap-y-2 lg:gap-x-3 lg:gap-y-3 ">
              {frontend.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-x-2 py-1 px-2 lg:py-2 lg:px-3 border border-zinc-200 rounded-xl"
                >
                  <span className="w-6">
                    <img src={item.image} alt="" />
                  </span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Backend */}
          {/* h-[355px] */}
          <div className="border-purple-900 lg:w-[35%] px-1 py-2 lg:h-[355px] lg:px-4 lg:py-6 backdrop-blur-lg bg-opacity-20 bg-white text-center rounded-xl shadow-purple-400 shadow-md hover:scale-105 transition-transform duration-300  ">
            <h1 className="text-2xl lg:text-4xl font-semibold ">Backend</h1>
            <div className="px-1 py-2 lg:px-2 lg:py-4 flex items-center justify-center text-center flex-wrap gap-x-2 gap-y-2 lg:gap-x-3 lg:gap-y-3 ">
              {backend.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-x-2 py-1 px-2 lg:py-2 lg:px-3 border border-zinc-200 rounded-xl"
                >
                  <span className="w-6">
                    <img src={item.image} alt="" />
                  </span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Others */}
          <div className="border-purple-900 lg:w-[35%] px-1 py-2 lg:h-[355px] lg:px-4 lg:py-6 backdrop-blur-lg bg-opacity-20 bg-white text-center rounded-xl shadow-purple-400 shadow-md hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl lg:text-4xl font-semibold ">
              Languages & Tools
            </h1>
            <div className="px-1 py-2 lg:px-2 lg:py-4 flex items-center justify-center text-center flex-wrap gap-x-2 gap-y-2 lg:gap-x-3 lg:gap-y-3 ">
              {other.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-x-2 py-1 px-2 lg:py-2 lg:px-3 border border-zinc-200 rounded-xl"
                >
                  <span className="w-6">
                    <img src={item.image} alt="" />
                  </span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
