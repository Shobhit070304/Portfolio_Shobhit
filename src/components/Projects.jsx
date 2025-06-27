// import React from "react";
// import { motion } from "framer-motion";
// import Img1 from "../assets/portfolio-img1.png";
// import Img2 from "../assets/portfolio-img2.png";
// import Img3 from "../assets/portfolio-img3.png";

// const Projects = () => {
//   return (
//     <section className="section" id="work">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-col lg:p-10">
//           <motion.div className="flex-1 w-full text-center flex flex-col mb-10">
//             <div>
//               <h2 className="h2 leading-tight text-accent text-4xl">
//                 My Latest Work.
//               </h2>
//               <p className="w-full text-center">
//                 Designed and built interactive, high-performance web
//                 applications with seamless data management, secure user access,
//                 and polished, user-centric interfaces.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-x-4 mb-8 flex-wrap gap-y-4 ">
//             <div className="group relative overflow-hidden border-2 min-h-80  border-white/50 rounded-xl w-80 p-4 bg-[#171721] backdrop-blur-2xl bg-opacity-50 hover:scale-105 transition-transform duration-300">
//               <div className="overflow-hidden">
//                 <img
//                   src={Img1}
//                   className="hover:scale-125 cursor-pointer transition-all duration-300 rounded-md"
//                   alt=""
//                 />
//               </div>
//               <div className="  mt-2 flex flex-col gap-y-2 px-2 py-2">
//                 <h1 className="text-white text-2xl w-full">NoteTube</h1>
//                 <p className="text-sm text-zinc-400">
//                   Summarizes YouTube videos and Notes using AI and get instant
//                   smart Pdf notes.
//                 </p>
//                 <div className="flex gap-x-4 text-blue-400 text-base w-full">
//                   <a
//                     href="https://github.com/Shobhit070304/NoteTube"
//                     className="hover:text-blue-100 cursor-pointer"
//                   >
//                     Github
//                   </a>
//                   <a
//                     href="https://notetube-ten.vercel.app/"
//                     className="hover:text-blue-100 cursor-pointer"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden border-2 min-h-80 border-white/50 rounded-xl w-80 p-4 bg-[#171721] backdrop-blur-3xl bg-opacity-50 hover:scale-105 transition-transform duration-300">
//               <div className="overflow-hidden">
//                 <img
//                   src={Img2}
//                   className="hover:scale-125 cursor-pointer transition-all duration-300 rounded-md"
//                   alt=""
//                 />
//               </div>
//               <div className="  mt-2 flex flex-col gap-y-2 px-2 py-2">
//                 <h1 className="text-white text-2xl w-full">Linkly</h1>
//                 <p className="text-sm text-zinc-400">
//                   Tool to shorten or lengthen URLs with support for custom
//                   aliases and easy link management.
//                 </p>
//                 <div className="flex gap-x-4 text-blue-400 text-base w-full">
//                   <a
//                     href="https://github.com/Shobhit070304/Linkly"
//                     className="hover:text-blue-100 cursor-pointer"
//                   >
//                     Github
//                   </a>
//                   <a
//                     href="https://linkly-orcin.vercel.app"
//                     className="hover:text-blue-100 cursor-pointer"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="group relative overflow-hidden border-2 min-h-80  border-white/50 rounded-xl w-80 p-4 bg-[#171721] backdrop-blur-2xl bg-opacity-50 hover:scale-105 transition-transform duration-300">
//               <div className="overflow-hidden">
//                 <img
//                   src={Img3}
//                   className="hover:scale-125 cursor-pointer transition-all duration-300 rounded-md"
//                   alt=""
//                 />
//               </div>
//               <div className="  mt-2 flex flex-col gap-y-2 px-2 py-2">
//                 <h1 className="text-white text-2xl w-full">VoltSpot</h1>
//                 <p className="text-sm text-zinc-400">
//                 Find, explore, and manage EV charging stations with interactive maps and personalized dashboards.
//                 </p>
//                 <div className="flex gap-x-4 text-blue-400 text-base w-full">
//                   <a
//                     href="https://github.com/Shobhit070304/VoltSpot"
//                     className="hover:text-blue-100 cursor-pointer"
//                   >
//                     Github
//                   </a>
//                   <a
//                     href="https://voltspot.vercel.app"
//                     className="hover:text-blue-100 cursor-pointer"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           <div className="w-full h-full flex justify-center items-center">
//             <a
//               className="btn w-48 btn-sm flex justify-center items-center"
//               href="https://github.com/Shobhit070304"
//             >
//               <span>View all projects</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      year: "2025",
      title: "NoteTube",
      description:
        "AI-powered YouTube video summarization platform with instant PDF generation and smart note-taking capabilities.",
      tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Gemini"],
      github: "https://github.com/Shobhit070304/NoteTube",
      demo: "https://notetube-ten.vercel.app/",
    },
    {
      year: "2025",
      title: "Linkly",
      description:
        "Advanced URL shortening service with custom aliases, analytics dashboard, and QR code generation.",
      tech: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Redis",
        "Firebase",
        "Tailwind",
      ],
      github: "https://github.com/Shobhit070304/Linkly",
      demo: "https://linkly-orcin.vercel.app",
    },
    {
      year: "2025",
      title: "VoltSpot",
      description:
        "Comprehensive EV charging station locator with real-time availability, route planning, and user reviews.",
      tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Maps API"],
      github: "https://github.com/Shobhit070304/VoltSpot",
      demo: "https://voltspot.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-crimson font-normal text-white mb-6 tracking-tight">
            Selected Works
          </h2>
          <p className="text-sm font-inter text-white/50 tracking-widest uppercase">
            Crafting digital solutions with purpose and precision
          </p>
        </div>

        <div className="space-y-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all duration-700 -mx-6 px-6 ${
                project.featured ? "border-white/10" : ""
              }`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="text-xs font-inter text-white/40 font-mono tracking-wider">
                    {project.year}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-3xl font-crimson font-normal text-white mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-inter text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-inter text-white/40 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-xs font-inter font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase"
                    >
                      Github
                      <Github className="w-5 h-5" />
                    </a>
                    
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-xs font-inter font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://github.com/Shobhit070304"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-inter font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase border-b border-white/20 hover:border-white/60 pb-2"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
