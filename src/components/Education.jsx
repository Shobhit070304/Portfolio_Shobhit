import { Calendar, MapPin, Award, Code } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-crimson font-normal text-white mb-4">
            Education
          </h2>
          <p className="text-sm font-inter text-white/50 tracking-widest uppercase">
            Academic background and certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* College Education */}
          <div className="group">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-all duration-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 border border-white/20 bg-white/5">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-crimson font-bold text-yellow-300 flex items-center gap-2">
                      Bachelors of Technology
                      <span className="bg-yellow-400/20 text-yellow-300 text-xs font-semibold px-2 py-1 rounded-full ml-2">CSE</span>
                    </h3>
                    <p className="text-sm font-inter text-white/60">Computer Science & Engineering</p>
                    <p className="text-xs font-inter text-white/40 mt-1">GPA: --/10</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm font-inter text-white/50 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Sep 2021 - May 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-inter text-white/50">
                    <MapPin className="w-4 h-4" />
                    <span>Jamia Hamdard University</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object Oriented Programming",
                    "Database Management Systems",
                    "Operating Systems",
                    "Computer Networks",
                  ].map((subject, index) => (
                    <div
                      key={index}
                      className="text-sm text-white/60"
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Stack Project */}
          <div className="group">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-all duration-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 border border-white/20 bg-white/5">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-crimson font-bold text-blue-300 flex items-center gap-2">
                      Full Stack Development Web Certification
                      <span className="bg-blue-400/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full ml-2">Web</span>
                    </h3>
                     <p className="text-sm font-inter text-white/60">Apna College</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm font-inter text-white/50 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Sep 2023 - Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-inter text-white/50">
                    <MapPin className="w-4 h-4" />
                    <span>Online Certification</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  {[
                    "HTML/CSS",
                    "JavaScript",
                    "BootStrap",
                    "Tailwind",
                    "React.js",
                    "Redux.js",
                    "Node.js",
                    "Express.js",
                    "E.js",
                    "REST APIs",
                    "MySQL",
                    "MongoDB",
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="text-sm font-inter text-white/60"
                    >
                      {tech}
                    </div>
                  ))}
                </div> 
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
