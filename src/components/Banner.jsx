import React from "react";
import Image from "../assets/characternew.png";
import Image2 from "../assets/leetcodenew.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import Resume from "../assets/Resume_Shobhit.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[75vh] lg:min-h-[78vh] flex items-center justify-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6">
          <div className="flex-1 order-2 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-semibold leading-[0.8] lg:text-[70px]"
            >
              Shobhit <span>Sharma</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold lg:font-bold uppercase leading-[1] "
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Programmer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 max-w-lg mx-auto lg:mx-0 "
            >
              Transforming ideas into reality through web development, tackling
              challenges, and creating a better web. With each line of code, I'm
              getting closer to making a meaningful impact.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a
                href={Resume}
                className="text-gradient btn-link"
                download="My_Resume.pdf"
              >
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[25px] gap-x-6 max-w-max mx-auto pl-1 lg:mx-0 "
            >
              <a href="https://github.com/Shobhit070304">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shobhit-kumar-sharma-17bb4223a/">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/sharmashobhit1000/">
                <img src={Image2} alt="" width={20} />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="order-1 lg:order-2 lg:flex flex-1 max-w-[280px] justify-center lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
