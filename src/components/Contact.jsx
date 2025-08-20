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
          // ...existing code...
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          // ...existing code...
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
