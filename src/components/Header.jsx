import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto lg:pr-16">
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold text-2xl lg:text-2xl">
            <span className="flex items-center">
              <span className="text-gradient text-3xl">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              <span className="text-gradient">SHOBHIT</span>
              <span className="text-gradient text-3xl">
                {"/"}
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </span>
          </a>
          <div className="hidden text-gradient lg:flex gap-x-4 h-full items-center">
            <Link
              className="cursor-pointer"
              to="header"
              activeClass="active"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
            <Link
              className="cursor-pointer"
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
            >
              About
            </Link>
            <Link
              className="cursor-pointer"
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
            >
              Skills
            </Link>
            <Link
              className="cursor-pointer"
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
            >
              Projects
            </Link>
            <Link
              className="cursor-pointer"
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
