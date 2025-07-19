import React from "react";

const skillGroups = [
  {
    title: "Proficient",
    skills: [
      "C++",
      "JavaScript (ES6)",
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Git",
    ],
  },
  {
    title: "Experienced",
    skills: [
      "TypeScript",
      "Tailwind CSS",
      "Redux.js",
      "Redis",
      "Docker",
      "Postman",
    ],
  },
  {
    title: "Familiar",
    skills: [
      "AWS (EC2, S3, IAM, Lambda)",
      "Kafka",
      "Jest",
      "Prisma",
      "Flask",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-crimson font-normal mb-4 text-white">
            Skills
          </h2>
          <p className="text-sm font-inter text-white/50 tracking-widest uppercase">
            Technologies I work with
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {skillGroups.map((group, idx) => (
            <div key={group.title}>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                {group.title}:
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 text-xs md:text-sm text-white/80 font-mono hover:bg-white/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
