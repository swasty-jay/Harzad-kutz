// components/Footer.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Upper Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center justify-center mb-1 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-widest text-amber-300 uppercase border border-amber-400">
              Connect With Us
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience <span className="text-amber-400">Premium Grooming</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-amber-400 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.div
            className="flex gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { Icon: FaInstagram, href: "#" },
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaTwitter, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, color: "#f59e0b" }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:bg-amber-50 hover:text-black transition-all duration-300"
              >
                <social.Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-800 pt-4">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center md:items-start"
          >
            <img src={logo} alt="Harzad Cutz" className="w-32 mb-4" />
            <p className="text-gray-400 text-sm mt-4 text-center md:text-left">
              Since 2024, Hazard Kutz has been delivering premium grooming
              services with precision and style.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-amber-400 font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              {[
                "Services",
                "Gallery",
                "About Us",
                "Book Appointment",
                "Shop",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-amber-400 font-bold text-lg mb-6">
              Business Hours
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex flex-col md:flex-row md:justify-between w-full">
                <span className="text-gray-300 font-medium">
                  Monday - Friday
                </span>
                <span className="text-gray-400">9:00am - 7:00pm</span>
              </li>
              <li className="flex flex-col md:flex-row md:justify-between w-full">
                <span className="text-gray-300 font-medium">Saturday</span>
                <span className="text-gray-400">9:00am - 5:00pm</span>
              </li>
              <li className="flex flex-col md:flex-row md:justify-between w-full">
                <span className="text-gray-300 font-medium">Sunday</span>
                <span className="text-gray-400">Closed</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-amber-400 font-bold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-amber-400" />
                <div>
                  <p className="text-gray-300">ATOMIC DOWN</p>
                  <p className="text-gray-400">ST JOHNS-DOME-KWABENYA</p>
                  <p className="text-gray-400">BREKUSU RD</p>
                </div>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhone className="text-amber-400" />
                <a
                  href="tel:+233555123456"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  +233 5555555555555
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-amber-400" />
                <a
                  href="mailto:info@harzadcutz.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  hazardkutzbarbershop@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-6 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="inline-block px-4 py-1 text-xs font-medium tracking-widest text-amber-300 uppercase border border-amber-400">
                Est. 2024
              </span>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear}{" "}
              <span className="text-amber-400">Hazard Kutz</span>. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
