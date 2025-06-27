import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML/CSS",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "React JS",
        "Redux JS",
      ],
    },
    {
      title: "Backend & Database",
      skills: ["Node JS", "Express JS", "Flask", "EJS", "MYSQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Jest", "Redis", "Kafka", "Docker", "Prisma", "Git/Github"],
    },
    {
      title: "Languages & Cloud",
      skills: ["C++", "Python", "AWS(EC2, S3, IAM, Lambda)"],
    },
  ];

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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-8">
                <h3 className="text-xs font-inter tracking-widest text-white/60 uppercase">
                  {category.title}
                </h3>

                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm font-inter text-white/80 border-b border-white/10 pb-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
