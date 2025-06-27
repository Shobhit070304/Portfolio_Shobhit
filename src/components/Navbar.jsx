import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isScrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3"
              : "bg-black/20 backdrop-blur-md px-4 py-2"
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`font-crimson transition-all duration-700 ${
                isScrolled ? "text-sm" : "text-base"
              } font-medium tracking-tight`}
            >
              <span className="text-white/90">Shobhit</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Education", id: "education" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-inter transition-all duration-700 ${
                    isScrolled ? "text-xs" : "text-xs"
                  } font-medium text-white/60 hover:text-white tracking-wide uppercase`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
