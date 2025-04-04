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
              Passionate about creating and solving problems through technology.
            </h3>
            <p className="mb-6">
              👋 Hi, I’m Shobhit! A 4th-year CS student passionate about
              learning, building, and innovating in web development. I thrive on
              turning ideas into reality through clean, efficient code while
              constantly exploring new technologies. With every challenge, I
              refine my skills, apply my knowledge, and push boundaries to
              create impactful solutions. Always eager to grow and
              collaborate—let’s build something amazing! 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
