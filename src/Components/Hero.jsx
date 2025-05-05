import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import barber1 from "../assets/barber-1.jpg"; // main image
import { Link } from "react-router-dom";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-10" />
        <img
          src={barber1}
          alt="Professional Barbershop"
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          <span className="block text-3xl md:text-6xl">MASTER THE</span>
          <span className="text-amber-400 italic block text-4xl md:text-7xl">
            CRAFT OF STYLE
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-1 bg-amber-400 my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-lg text-lg text-gray-300 mb-8 font-[inter]"
        >
          Premium Kutz and classic grooming traditions meet modern style at
          Hazard Kutz. Our master barbers deliver precision, comfort, and
          confidence with every visit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-amber-400 text-black font-bold uppercase tracking-wide rounded-sm hover:bg-amber-300 transition-colors duration-300"
          >
            <Link to="/booking">Book Now</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide rounded-sm hover:bg-white/10 transition-colors duration-300"
          >
            <Link to="/services">Our Services</Link>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
      ></motion.div>
    </div>
  );
}

export default HeroSection;
