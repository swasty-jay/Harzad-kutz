import { motion } from "framer-motion";

// Barber-themed corner decoration component
const CornerDecoration = ({ position = "top-left" }) => {
  // Determine styling based on position
  const positionStyles = {
    "top-left": "flex flex-col items-start",
    "bottom-right": "flex flex-col items-end",
  };

  const decorationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  // SVG paths for barber pole stripes
  const stripesPath =
    position === "top-left"
      ? "M0,0 L14,0 L0,14 Z M4,0 L18,0 L4,14 Z M8,0 L22,0 L8,14 Z M12,0 L26,0 L12,14 Z"
      : "M0,0 L14,0 L0,14 Z M4,0 L18,0 L4,14 Z M8,0 L22,0 L8,14 Z M12,0 L26,0 L12,14 Z";

  return (
    <motion.div
      className={positionStyles[position]}
      variants={decorationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Barber pole corner element */}
      <motion.div
        className={`relative ${position === "top-left" ? "" : "rotate-180"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Classic barber pole corner element */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Barber pole stripes */}
          <motion.path
            d={stripesPath}
            fill="rgb(244, 248, 7)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            transform={
              position === "bottom-right" ? "translate(26, 26) rotate(180)" : ""
            }
          />
          <motion.path
            d={stripesPath}
            fill="#FFFFFF"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            transform={
              position === "top-left"
                ? "translate(4, 0)"
                : "translate(22, 26) rotate(180)"
            }
          />

          {/* Scissor icon for barbershop theme */}
          <motion.g
            initial={{
              opacity: 0,
              rotate: position === "top-left" ? -45 : 135,
            }}
            whileInView={{
              opacity: 1,
              rotate: position === "top-left" ? 0 : 180,
            }}
            transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            transform={
              position === "top-left"
                ? "translate(22, 18)"
                : "translate(18, 22)"
            }
          >
            <path
              d="M10,5 C8.34,5 7,3.66 7,2 C7,0.34 8.34,-1 10,-1 C11.66,-1 13,0.34 13,2 C13,3.66 11.66,5 10,5 Z M1,9 L7,3 M1,3 L7,9"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default function VibeSection() {
  return (
    <section className="text-white py-3 px-10 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1A1A1A] font-[poppins] italic">
          The Vibe
        </h2>

        {/* Decorated text container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-10 p-6 md:p-8 rounded-lg border-2 border-gray-300 shadow-sm bg-gray-100"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(214, 40, 40, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        >
          {/* Top-left decoration */}
          <div className="absolute -top-4 -left-4">
            <CornerDecoration position="top-left" />
          </div>

          <div className="text-start">
            <p className="text-[15px] md:text-[18px] leading-relaxed text-black font-[inter] italic">
              At{" "}
              <span className="text-amber-400 font-semibold uppercase italic">
                Hazard Cutz
              </span>
              , we blend sharp style with top-tier service. Whether it's a fresh
              fade, a beard trim, or a full transformation, our skilled barbers
              craft every cut with precision and passion. More than a haircut —
              it's an experience built on good vibes, good music, and real
              conversations. Step into our world and leave feeling your absolute
              best.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="mt-8 text-sm md:text-[17px] text-[#6B7280] font-[inter] italic leading-relaxed"
            >
              "No be only haircut we dey do, we dey make sure say you go feel
              relaxed and fresh after your session. Come make we reason small,
              jam to some tunes, and let's get you looking sharp like never
              before."
            </motion.p>
          </div>

          {/* Bottom-right decoration */}
          <div className="absolute -bottom-4 -right-4">
            <CornerDecoration position="bottom-right" />
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-amber-500 transition"
        >
          Book Now
        </motion.button>

        <hr className="my-10 border-amber-400 border-[0.05rem]" />
      </motion.div>
    </section>
  );
}
