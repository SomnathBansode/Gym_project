import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 " style={{ zIndex: "100" }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Somnath's Gym</div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Toggle Hamburger / Close Icon */}
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="#home"
            className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
          >
            About
          </a>
          <a
            href="#challenge"
            className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
          >
            Challenge
          </a>
          <a
            href="#plans"
            className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
          >
            Plans
          </a>
          <a
            href="#contact"
            className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black">
          <div className="flex flex-col items-start space-y-4 py-4 h-screen">
            <a
              href="#home"
              className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
              onClick={handleLinkClick} // Close the menu on click
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
              onClick={handleLinkClick} // Close the menu on click
            >
              About
            </a>
            <a
              href="#challenge"
              className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
              onClick={handleLinkClick} // Close the menu on click
            >
              Challenge
            </a>
            <a
              href="#plans"
              className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
              onClick={handleLinkClick} // Close the menu on click
            >
              Plans
            </a>
            <a
              href="#contact"
              className="text-white font-bold hover:text-[#1bc768] hover:bg-black transition-colors duration-300 px-3 py-2 rounded"
              onClick={handleLinkClick} // Close the menu on click
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
