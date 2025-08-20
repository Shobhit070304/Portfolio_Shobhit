import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      // Active section highlight
      let current = "";
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = item.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? "py-4 shadow-lg shadow-black/30" : "py-6"
        }`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${isScrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3"
              : "bg-black/20 backdrop-blur-md px-4 py-2"
            }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`font-crimson transition-all duration-700 flex items-center gap-2 ${isScrolled ? "text-sm" : "text-base"
                } font-medium tracking-tight`}
            >
              <img src="logo.png" className="w-5" alt="Shobhit Kumar Sharma, Logo" />
              <span className="text-white/90">Shobhit</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-inter transition-all duration-300 relative overflow-hidden ${isScrolled ? "text-xs" : "text-xs"
                    } font-medium tracking-wide uppercase px-2 py-1
                    text-white/60 hover:text-white
                    ${activeSection === item.id ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:rounded-full after:animate-pulse" : ""}
                  `}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white/80 hover:text-white transition-colors duration-300 p-2"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Side Drawer) */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />
          {/* Side Drawer */}
          <div
            className="fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-black border-l border-white/10 shadow-2xl flex flex-col items-start px-8 py-10 transition-transform duration-300 transform translate-x-0"
            style={{ boxShadow: '0 0 40px 0 rgba(0,0,0,0.5)' }}
          >
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-300 p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            <nav className="flex flex-col gap-4 w-full items-start mt-4 bg-black">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-inter tracking-tighter text-white/80 hover:text-white transition-colors duration-300 text-left ${activeSection === item.id ? "text-white underline underline-offset-8" : ""}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
