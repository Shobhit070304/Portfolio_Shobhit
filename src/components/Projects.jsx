import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      year: "2025",
      title: "Voltspot",
      description:
        "Comprehensive EV charging station locator with real-time availability, route planning, and user reviews.",
      tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Maps API"],
      github: "https://github.com/Shobhit070304/VoltSpot",
      demo: "https://voltspot.vercel.app",
      featured: true,
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
      demo: "https://linkly-topaz.vercel.app/",
      featured: true,
    },
    {
      year: "2025",
      title: "Concisio",
      description:
        "AI-powered YouTube video summarization platform with instant PDF generation and smart note-taking capabilities.",
      tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Gemini"],
      github: "https://github.com/Shobhit070304/Concisio",
      demo: "https://concisio.vercel.app",
      featured: true,
    }
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
              className={`group border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all duration-700 -mx-6 px-6`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2 flex flex-col gap-2">
                  <span className="text-xs font-inter text-white/40 font-mono tracking-wider">
                    {project.year}
                  </span>
                  {project.featured && (
                    <span className="inline-block text-black text-sm py-1 text-center rounded-full font-semibold mt-2 bg-yellow-300">Featured</span>
                  )}
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-3xl font-crimson font-normal text-white mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-inter text-white/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-600/20 text-blue-200 rounded-full text-xs font-mono font-semibold tracking-tight hover:bg-blue-600/40 transition"
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
