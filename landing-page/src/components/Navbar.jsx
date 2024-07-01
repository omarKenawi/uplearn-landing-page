import React, { useState } from "react";
import { logo, hamburgerMenu, close } from "../assets";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  const closeMobileMenu = () => setToggle(false);

  return (
    <div className="bg-white border-b fixed top-0 z-50 w-full">
      <div className="px-4 sm:px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <img src={logo} className="h-16" alt="Logo" />

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="features"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="team"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="cta"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Learn More
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Button - Desktop */}
        <div className="hidden md:block">
          <button className="px-8 py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600">
            Let's Get Started
          </button>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={handleClick}>
            <img
              src={toggle ? close : hamburgerMenu}
              alt="Menu"
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="absolute z-50 w-full bg-white px-4 py-2 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md block"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="features"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md block"
                onClick={closeMobileMenu}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="team"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md block"
                onClick={closeMobileMenu}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="cta"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md block"
                onClick={closeMobileMenu}
              >
                Learn More
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-[#4CC3ED] font-medium"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md block"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="mt-4 px-8 py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 w-full">
            Let's Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
