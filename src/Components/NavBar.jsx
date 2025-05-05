import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
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

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center px-4 py-4 z-50 ">
      <div
        className="relative flex items-center justify-between bg-white/20 border border-white/30 
                   backdrop-blur-md rounded-xl shadow-lg w-full max-w-4xl mx-auto px-4 py-2 h-14 md:h-16"
      >
        {/* Logo */}
        <div className="text-lg font-[poppins] md:text-xl italic text-amber-400">
          <Link to={"/"}> Hazard Kutz </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/services"
            className="text-gray-900 hover:text-black font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-gray-900 hover:text-black font-medium transition-colors"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-gray-900 hover:text-black font-medium transition-colors"
          >
            Gallery
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <a
              href="https://wa.me/+233559891727"
              className="text-gray-900 hover:text-black p-1 transition-all duration-200"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <span
              className="absolute top-18 left-1/2 -translate-x-1/2 text-xs md:text-sm text-gray-700 
                           bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 
                           transition-all duration-300 whitespace-nowrap"
            >
              WhatsApp
            </span>
          </div>

          <div className="relative group">
            <a
              href="https://www.instagram.com/hazard_kutz_barbershop?igsh=MW9rNThicXgwd2h3&utm_source=qr"
              className="text-gray-900 hover:text-black p-1 transition-all duration-200"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <span
              className="absolute top-18 left-1/2 -translate-x-1/2 text-xs md:text-sm text-gray-700 
                           bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 
                           transition-all duration-300 whitespace-nowrap"
            >
              Instagram
            </span>
          </div>

          <div className="relative group">
            <a
              href="https://www.tiktok.com/@hazardkutz?_t=ZS-8vzjYp7RS1i&_r=1"
              className="text-gray-900 hover:text-black p-1 transition-all duration-200"
            >
              <FaTiktok className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <span
              className="absolute top-18 left-1/2 -translate-x-1/2 text-xs md:text-sm text-gray-700 
                           bg-white px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 
                           transition-all duration-300 whitespace-nowrap"
            >
              TikTok
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative md:hidden" ref={dropdownRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-black text-white rounded-full p-1.5 hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Dropdown */}
            <div
              className={`absolute right-0 mt-3 w-48 bg-white/90 backdrop-blur-md border border-gray-200 
                        shadow-xl rounded-xl py-2 transform transition-all duration-300 origin-top-right
                        ${
                          menuOpen
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0 pointer-events-none"
                        }`}
            >
              <div className="px-3 py-2 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-800">
                  Navigation
                </span>
              </div>
              <a
                href="#services"
                className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <Link
                to="/about"
                className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="#gallery"
                className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
