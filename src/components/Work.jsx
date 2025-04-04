import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-col lg:p-10">
          <motion.div className="flex-1 w-full text-center flex flex-col mb-10">
            <div>
              <h2 className="h2 leading-tight text-accent text-4xl">
                My Latest Work.
              </h2>
              <p className="w-full text-center">
                Designed and built interactive, high-performance web
                applications with seamless data management, secure user access,
                and polished, user-centric interfaces.
              </p>
            </div>
          </motion.div>

          <motion.div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-x-4 mb-8 flex-wrap gap-y-4">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-80 p-2 bg-[#171721] backdrop-blur-2xl bg-opacity-50">
              <div className="overflow-hidden">
                <img
                  src={Img1}
                  className="hover:scale-125 cursor-pointer transition-all duration-300 rounded-md"
                  alt=""
                />
              </div>
              <div className="  mt-2 flex flex-col gap-y-2 px-2 py-2">
                <h1 className="text-white text-2xl w-full">Wanderlust</h1>
                <p className="text-sm text-zinc-400">
                  Wanderlust: A hotel discovery and review platform for
                  travelers seeking the perfect stay.
                </p>
                <div className="flex gap-x-4 text-blue-400 text-base w-full">
                  <a
                    href="https://github.com/Shobhit070304/major-project"
                    className="hover:text-blue-100 cursor-pointer"
                  >
                    Github
                  </a>
                  <a className="hover:text-blue-100 cursor-pointer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-80 p-2 bg-[#171721] backdrop-blur-2xl bg-opacity-50">
              <div className="overflow-hidden">
                <img
                  src={Img3}
                  className="hover:scale-125 cursor-pointer transition-all duration-300 rounded-md"
                  alt=""
                />
              </div>
              <div className="  mt-2 flex flex-col gap-y-2 px-2 py-2">
                <h1 className="text-white text-2xl w-full">Expense Tracker</h1>
                <p className="text-sm text-zinc-400">
                  Simple tool to track and manage personal expenses with ease
                  and accuracy.
                </p>
                <div className="flex gap-x-4 text-blue-400 text-base w-full">
                  <a
                    href="https://github.com/Shobhit070304/Expence-Tracker"
                    className="hover:text-blue-100 cursor-pointer"
                  >
                    Github
                  </a>
                  <a className="hover:text-blue-100 cursor-pointer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-80 p-2 bg-[#171721] backdrop-blur-2xl bg-opacity-50">
              <div className="overflow-hidden">
                <img
                  src={Img2}
                  className="hover:scale-125 cursor-pointer transition-all duration-300 rounded-md"
                  alt=""
                />
              </div>
              <div className="  mt-2 flex flex-col gap-y-2 px-2 py-2">
                <h1 className="text-white text-2xl w-full">Notes App</h1>
                <p className="text-sm text-zinc-400">
                  Organize and access your notes seamlessly with a
                  user-friendly, secure application.
                </p>
                <div className="flex gap-x-4 text-blue-400 text-base w-full">
                  <a
                    href="https://github.com/Shobhit070304/Notes-app"
                    className="hover:text-blue-100 cursor-pointer"
                  >
                    Github
                  </a>
                  <a className="hover:text-blue-100 cursor-pointer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="w-full h-full flex justify-center items-center">
            <a
              className="btn w-48 btn-sm flex justify-center items-center"
              href="https://github.com/Shobhit070304"
            >
              <span>View all projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
