import { motion } from "framer-motion";
import { Scissors, Star } from "lucide-react";

// Modern corner decoration component
const CornerDecoration = ({ position = "top-left" }) => {
  const isTopLeft = position === "top-left";

  return (
    <motion.div
      className={`absolute ${
        isTopLeft ? "-top-3 -left-3" : "-bottom-3 -right-3"
      }`}
      initial={{ opacity: 0, scale: 0.5, rotate: isTopLeft ? -180 : 180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <div className={`relative w-16 h-16 ${!isTopLeft ? "rotate-180" : ""}`}>
        {/* Modern geometric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute inset-1 bg-white rounded-full shadow-lg border border-gray-100"></div>

        {/* Icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isTopLeft ? (
            <Scissors className="w-6 h-6 text-amber-600" strokeWidth={2} />
          ) : (
            <Star
              className="w-6 h-6 text-amber-500 fill-current"
              strokeWidth={2}
            />
          )}
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-amber-700/10 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default function VibeSection() {
  return (
    <section className="py-20 px-6 lg:px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2   border border-amber-400 mb-6"
          >
            <Scissors className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
              Our Vibe
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold cinzel text-gray-900 mb-1"
          >
            Experience the <span className="text-amber-400">Difference</span>
          </motion.h2>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-amber-500/5 rounded-2xl"></div>

          {/* Main card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <CornerDecoration position="top-left" />
            <CornerDecoration position="bottom-right" />

            {/* Quote marks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-6xl text-amber-600/70 font-serif leading-none mb-4"
            >
              "
            </motion.div>

            {/* Main text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <p className="text-lg md:text-xl lg:text-2xl bellefair text-gray-700 leading-relaxed font-light italic">
                For Hazard Kutz Barbershop, we no just dey barb, we dey give you
                full vibe. Clean fade, sharp trim, good music plus better convo.
                Just come relax, chill small, make we run you sharp sharp.{" "}
                <span className="font-semibold text-gray-900 ">
                  You go step out fresh pass!
                </span>
              </p>
            </motion.div>

            {/* Closing quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-6xl text-amber-600/60 font-serif leading-none text-right mt-4"
            >
              "
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-red-500/10 to-amber-500/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-full blur-xl"
          ></motion.div>
        </motion.div>

        {/* Additional features or call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bellefair gap-8 text-[11px] sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Premium Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Expert Barbers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Great Vibes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
