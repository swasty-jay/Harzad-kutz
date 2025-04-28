// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import barber1 from "../assets/barber-1.jpg"; // use your best main image

function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center py-10"
      style={{ backgroundImage: `url(${barber1})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10" /> */}

      {/* Content */}
      <motion.div
        className="relative text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Cuts that Define you
        </h1>
        <p className="text-[14px] md:text-2xl text-gray-300 mb-8">
          unleash your style with Hazard Cutz, where every cut is a masterpiece.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4  text-white rounded-full border-2 border-yellow-500 hover:shadow-lg hover:bg-yellow-600-dark transition"
        >
          Book an Appointment
        </motion.button>
      </motion.div>
    </section>
  );
}
export default HeroSection;
