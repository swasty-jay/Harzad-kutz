// src/components/AboutSection.jsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">The Vibe</h2>
        <p className="text-[12px] md:text-[16px] text-gray-300 leading-relaxed mb-8 text-start">
          At <span className="text-primary font-semibold">Hazard Cutz</span>, we
          blend sharp style with top-tier service. Whether it's a fresh fade, a
          beard trim, or a full transformation, our skilled barbers craft every
          cut with precision and passion. More than a haircut — it's an
          experience built on good vibes, good music, and real conversations.
          Step into our world and leave feeling your absolute best.
          <br />
          <br />
          <spa className="text-[11px]  text-gray-400   ">
            No be only haircut we dey do, we dey make sure say you go feel
            relaxed and fresh after your session. Come make we reason small, jam
            to some tunes, and let’s get you looking sharp like never before.
            😉💇🏾‍♂️
            <br /> Book Now and let’s take your style to the next level! <br />
          </spa>
        </p>

        {/* <spa className="text-sm  text-gray-300   font-mono italic">
          No be only haircut we dey do, we dey make sure say you go feel relaxed
          and fresh after your session. Come make we reason small, jam to some
          tunes, and let’s get you looking sharp like never before. 😉💇🏾‍♂️
          <br /> Book Now and let’s take your style to the next level! <br />
        </spa> */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-white font-semibold rounded border-amber-300 border shadow hover:bg-primary-dark transition"
        >
          Book Now
        </motion.button>

        <hr className="my-12 border-amber-500 " />
      </motion.div>
    </section>
  );
}
