import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Try again.");
        }
      );
  }

  return (
    <section id="contact" className="py-10 md:py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-crimson font-normal text-white mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm font-inter text-white/50 tracking-widest uppercase">
            Ready to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <p className="text-lg font-inter text-white/60 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or
                simply wish to connect, I'm always excited to discuss new
                opportunities and creative challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/40" />
                <a
                  href="mailto:sharmashobhit1000@gmail.com"
                  className="text-base font-inter text-black bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 px-4 py-2 rounded-full font-semibold shadow"
                >
                  sharmashobhit1000@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-white/40" />
                <span className="text-base font-inter text-white/60">
                  Available for work
                </span>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://github.com/Shobhit070304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/shobhit-kumar-sharma-17bb4223a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62zm0 0"/></svg>
                </a>
                <a
                  href="https://leetcode.com/u/sharmashobhit1000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
                >
                  <div className="w-5 h-5 bg-orange-500 rounded text-white font-bold text-[10px] flex items-center justify-center">
                    LC
                  </div>
                </a>
              </div>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/shobhit-kumar-sharma-17bb4223a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-inter font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase border-b border-white/20 hover:border-white/60 pb-2"
              >
                Connect on LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-base font-inter text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-base font-inter text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors duration-300"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-b border-white/20 py-4 text-base font-inter text-white placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-3 text-sm font-inter font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
