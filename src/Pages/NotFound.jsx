// src/components/NotFoundPage.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

// Barber pole SVG component with animation
const BarberPole = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-6 sm:w-10 md:w-16 lg:w-20 h-40 sm:h-48 md:h-64 lg:h-80 relative overflow-hidden rounded-t-lg ${className}`}
    >
      <div className="absolute inset-0 bg-gray-800 rounded-t-lg"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 0 }}
        animate={{ y: [-100, 0] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        {/* Barber pole stripes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-full"
            style={{
              background: i % 2 === 0 ? "#D62828" : "white",
              transform: "skewY(-45deg)",
              marginTop: "-5px",
            }}
          ></div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-20 rounded-t-lg"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-700 rounded-b-lg"></div>
    </motion.div>
  );
};

// Scissors SVG with animation - now responsive
const Scissors = ({ delay = 0, className = "" }) => {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-16 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 ${className}`}
      initial={{ rotate: -20, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay,
      }}
    >
      <motion.path
        d="M30 20C25.582 20 22 16.418 22 12C22 7.582 25.582 4 30 4C34.418 4 38 7.582 38 12C38 16.418 34.418 20 30 20Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      <motion.path
        d="M60 70C55.582 70 52 66.418 52 62C52 57.582 55.582 54 60 54C64.418 54 68 57.582 68 62C68 66.418 64.418 70 60 70Z"
        fill="#D62828"
        stroke="#D62828"
        strokeWidth="2"
      />
      <motion.path
        d="M8 58L52 14"
        stroke="#1A1A1A"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
      />
      <motion.path
        d="M8 14L52 58"
        stroke="#D62828"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.6 }}
      />
    </motion.svg>
  );
};

export default function NotFoundPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8 text-center">
        {/* 404 Display - Responsive layout */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BarberPole />
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#1A1A1A] tracking-tight font-[poppins]">
              4<span className="text-[#D62828]">0</span>4
            </h1>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BarberPole />
          </motion.div>
        </div>

        {/* Scissors decoration - centered and responsive */}
        <div className="flex justify-center mt-2 sm:mt-4">
          <Scissors delay={0.2} />
        </div>

        {/* Message - with responsive padding and text sizes */}
        <motion.div
          className="mt-4 sm:mt-6 lg:mt-8 relative p-4 sm:p-6 md:p-8 border-2 border-gray-300 rounded-lg bg-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(214, 40, 40, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-2 sm:mb-4 font-[poppins] italic">
            Looks Like We Missed A Spot
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 font-[inter] italic">
            The page you're looking for has stepped out for a fresh cut. Let's
            get you back to a style that exists.
          </p>

          <motion.div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D62828] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:bg-red-700 transition font-semibold text-base sm:text-lg"
              >
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer text - responsive text size */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-gray-500 italic mt-2 sm:mt-4 md:mt-6 font-[inter]"
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          "We're good at cutting hair, not URLs 😉💇🏾‍♂️"
        </motion.p>
      </div>
    </div>
  );
}
