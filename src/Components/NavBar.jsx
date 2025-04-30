import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function FloatingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/20 border border-white/30 rounded-xl backdrop-blur-md  px-4 py-2 shadow-md flex items-center justify-between h-12 w-80 space-x-4 z-50"
    >
      {/* Icons */}

      <div className="relative group flex flex-col items-center">
        <a
          href="https://wa.me/2349036666008"
          className="text-gray-700 hover:text-black  p-2 transition-all duration-200"
        >
          <FaWhatsapp size={26} />
        </a>
        <span className="absolute top-12 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
          WhatsApp
        </span>
      </div>

      <div className="w-px h-6 bg-gray-400"></div>

      <div className="relative group flex flex-col items-center">
        <a
          href="https://www.instagram.com/hazardcutz/"
          className="text-gray-700 hover:text-black"
        >
          <FaInstagram size={26} />
        </a>
        <span className="absolute top-11 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
          Instagram
        </span>
      </div>

      <div className="w-px h-6 bg-gray-400"></div>
      <div className="relative group flex flex-col items-center">
        <a
          href="https://www.tiktok.com/@hazardcutz"
          className="text-gray-700 hover:text-black"
        >
          <FaTiktok size={26} />
        </a>
        <span className="absolute top-11 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
          Tiktok
        </span>
      </div>

      <div className="w-px h-6 bg-gray-400"></div>

      {/* Hamburger + Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div className="relative group flex flex-col items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-all duration-200"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="absolute top-12 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
            Menu
          </span>
        </div>
        {/* Animated Dropdown */}
        <div
          className={`absolute right-0 mt-2 w-44 bg-white border shadow-lg rounded-md py-2 px-3 transform transition-all duration-300 origin-top ${
            menuOpen
              ? "scale-100 opacity-100 visible"
              : "scale-95 opacity-0 invisible"
          }`}
        >
          <a
            href="#services"
            className="block text-gray-700 hover:text-black py-1 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-black py-1 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#gallery"
            className="block text-gray-700 hover:text-black py-1 transition-colors duration-200"
          >
            Gallery
          </a>
        </div>
      </div>
    </motion.div>
  );
}
