import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BarberPole = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-5 sm:w-8 md:w-10 lg:w-14 h-32 sm:h-40 md:h-48 lg:h-60 relative overflow-hidden rounded-t-lg ${className}`}
    >
      <div className="absolute inset-0 bg-gray-800 rounded-t-lg"></div>
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
              background: i % 2 === 0 ? "#D62828" : "white",
              transform: "skewY(-45deg)",
              marginTop: "-4px",
            }}
          ></div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-20 rounded-t-lg"></div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-700 rounded-b-lg"></div>
    </motion.div>
  );
};

const Scissors = ({ delay = 0, className = "" }) => {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ${className}`}
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-lg sm:max-w-2xl space-y-6 text-center">
        <div className="flex justify-center items-center space-x-3">
          <BarberPole />
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1A1A1A]"
          >
            4<span className="text-[#D62828]">0</span>4
          </motion.h1>
          <BarberPole />
        </div>

        <div className="flex justify-center mt-2">
          <Scissors delay={0.3} />
        </div>

        <motion.div
          className="mt-4 px-4 py-6 sm:py-8 sm:px-6 border border-gray-300 rounded-xl bg-white shadow-sm"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(214, 40, 40, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <h2 className="text-lg md:text-xl  text-[#1A1A1A] font-[poppins] italic">
            Oops! You’ve wandered into the wrong barbershop.
          </h2>

          <p className="mt-1 text-sm  md:text-base text-gray-600 font-[inter] italic">
            This page doesn't exist or has been trimmed away. Let’s get you back
            to the right style.
          </p>

          <div className="mt-5 sm:mt-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D62828] text-white px-2 py-1 sm:px-2 sm:py-2 rounded-lg shadow hover:bg-red-700 transition font-semibold text-sm sm:text-base"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.p
          className="text-xs sm:text-sm text-gray-500 italic font-[inter] mt-4"
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          “Even the best clippers sometimes miss a line ✂️😉”
        </motion.p>
      </div>
    </div>
  );
}
