import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Try again.");
        }
      );
  }
  return (
    <section
      className="min-h-screen py-16 lg:selection flex items-center"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-4 lg:gap-y-6 pb-6 lg:pb-14 p-6 items-start "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
              }}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => {
                handleChange(e);
              }}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
