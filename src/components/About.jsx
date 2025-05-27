import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/characternew.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden flex-1 lg:flex items-center bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <img src={Image} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">
              Passionate about building and solving with technology.
            </h3>
            <p className="mb-6">
              👋 Hi, I’m Shobhit, a final-year CS student driven by curiosity
              and a love for creating. I’m constantly learning, growing, and
              adapting—whether it’s building web apps, solving complex problems,
              or exploring new technologies. I enjoy the process as much as the
              result, and I believe in clean code, big ideas, and consistent
              effort. Beyond the screen, you’ll find me chatting, walking,
              gaming, or just enjoying life’s simple moments. I bring energy,
              creativity, and joy into everything I do—whether it’s coding a new
              feature or collaborating with a team. Let’s connect and create
              something impactful, and fun, together! 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
