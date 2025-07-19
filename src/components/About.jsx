import React from "react";

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-crimson font-normal text-white mb-12 tracking-tight">
              About Me
            </h2>
            <div className="space-y-6 text-base font-inter text-white/60 leading-relaxed">
              <p>
                I'm a final-year Computer Science student who values clean code, clear design, and honest communication. I’m always learning, growing, and looking for smart solutions.
              </p>
              <p>
                I’m stubborn with challenges—digging deep and not giving up until things work. I believe every project should be both useful and enjoyable.
              </p>
              <p>
                I like to keep things light, enjoy a good laugh, and love teaming up with others. Outside tech, you’ll find me on walks, having life talks, or playing video games.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-inter font-medium text-white/70 tracking-widest uppercase mb-8">
                Philosophy
              </h3>
              <blockquote className="text-lg font-crimson font-normal text-white/80 italic leading-relaxed border-l-2 border-white/20 pl-6">
                "I believe the best solutions are simple and elegant. Whether I'm writing code or designing, I always aim for clarity and purpose."
              </blockquote>
            </div>

            <div>
              <h3 className="text-sm font-inter font-medium text-white/70 tracking-widest uppercase mb-8">
                Currently
              </h3>
              <div className="space-y-4 text-sm font-inter text-white/50">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span>Learning</span>
                  <span className="font-mono">AI Integration</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span>Reading</span>
                  <span className="font-mono">Clean Architecture</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span>Building</span>
                  <span className="font-mono">AI Saas Applications</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span>Exploring</span>
                  <span className="font-mono">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
