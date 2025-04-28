import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Drawer } from "antd"; // 👈 Import Drawer
import "antd/dist/reset.css"; // 👈 Import Ant Design styles

import logo from "../assets/logo.jpg"; // Adjust the path
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"; // Using React Router's Link

function Navbar() {
  const [scrolled, setScrolled] = useState(false); // State for scroll detection
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  // UseEffect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if window scroll position is greater than 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll); // Listen to scroll events
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`} // bg-black when scrolled, bg-transparent by default
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-18 md:h-24">
        {/* Left Nav Links */}
        <div className="hidden md:flex gap-8 text-white">
          <Link to="#home" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="#services" className="hover:text-primary transition">
            Services
          </Link>
          <Link to="#gallery" className="hover:text-primary transition">
            Gallery
          </Link>
          <Link to="#contact" className="hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Logo Middle */}
        <motion.img
          src={logo}
          alt="Hazard Cutz Logo"
          className="h-10 md:h-18 md:w-18 object-fit mt-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Right Socials + Button */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="hover:text-primary transition"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="hover:text-primary transition" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={24} className="hover:text-primary transition" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} className="hover:text-primary transition" />
            </a>
          </div>
          <a
            href="#book"
            className="px-4 py-2 bg-primary text-white rounded-md border hover:bg-primary-dark transition"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl hamburger-icon"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Hazard Cutz "
        placement="right"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        width={250}
        className="text-yellow-500"
        closeIcon={<span className="text-gray-500 text-2xl">X</span>}
      >
        <div className="flex flex-col space-y-6">
          <Link
            to="#home"
            onClick={() => setMenuOpen(false)}
            className="text-lg text-yellow-500"
          >
            Home
          </Link>
          <Link
            to="#services"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Services
          </Link>
          <Link
            to="#gallery"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            to="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Contact
          </Link>
          <Link
            to="#book"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 bg-primary text-center rounded-full hover:bg-primary-dark transition"
          >
            Book Now
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;
