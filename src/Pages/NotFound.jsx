import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaScissors } from "react-icons/fa6";

const BarberPole = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-5 sm:w-8 md:w-10 lg:w-14 h-32 sm:h-40 md:h-48 lg:h-60 relative overflow-hidden rounded-t-lg ${className}`}
    >
      <div className="absolute inset-0 bg-gray-900 rounded-t-lg"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 0 }}
        animate={{ y: [-100, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-full"
            style={{
              background: i % 2 === 0 ? "#f59e0b" : "white",
              transform: "skewY(-45deg)",
              marginTop: "-4px",
            }}
          ></div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-20 rounded-t-lg"></div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-800 rounded-b-lg"></div>
    </motion.div>
  );
};

const ScissorsIcon = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ rotate: -20, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay,
      }}
      className="relative"
    >
      <div className="relative z-10">
        <FaScissors className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-amber-400" />
      </div>
      <div className="absolute inset-0 blur-lg opacity-50 bg-amber-400 rounded-full"></div>
    </motion.div>
  );
};

export default function NotFoundPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

      <div className="w-full max-w-lg sm:max-w-2xl space-y-6 text-center relative z-10">
        <div className="flex justify-center items-center space-x-3">
          <BarberPole />
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight cinzel text-white"
          >
            4<span className="text-amber-400">0</span>4
          </motion.h1>
          <BarberPole />
        </div>

        <div className="flex justify-center mt-2">
          <ScissorsIcon delay={0.3} />
        </div>

        <motion.div
          className="mt-4 px-4 py-6 sm:py-8 sm:px-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur-lg shadow-xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <h2 className="text-lg md:text-xl text-white cinzel">
            Oops! You've wandered into the wrong barbershop.
          </h2>

          <p className="mt-1 text-sm md:text-base text-gray-300 bellefair">
            This page doesn't exist or has been trimmed away. Let's get you back
            to the right style.
          </p>

          <div className="mt-5 sm:mt-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-amber-400 text-black font-bold uppercase cinzel tracking-wide rounded-sm hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.p
          className="text-base text-gray-400 bellefair mt-4"
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          "Even the best clippers sometimes miss a line ✂️😉"
        </motion.p>
      </div>
    </div>
  );
}
