// components/Footer.jsx
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white px-6 py-12 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo & Links */}
        <div className="space-y-6">
          <img
            src="/assets/logo.png"
            alt="Fort Worth Barber Shop"
            className="w-40"
          />
          <div className="space-y-2 text-[#D4AA7D]">
            {["Services", "About", "Contact", "Shop"].map((link) => (
              <a
                key={link}
                href="#"
                className="block hover:underline hover:text-white transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-white text-xl mt-4">
            <FaInstagram className="hover:text-amber-400 transition" />
            <FaFacebookF className="hover:text-amber-400 transition" />
            <FaTwitter className="hover:text-amber-400 transition" />
          </div>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-amber-400">Hours</h3>
          <p>MON–FRI 9:00am–7:00pm</p>
          <p>SAT 9:00am–5:00pm</p>
          <p>CLOSED SUN. </p>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-amber-400">Location</h3>
          <p>GREATER ACCRA</p>
          <p>KWABENYA</p>
          {/* <p>76107</p> */}
          {/* <a href="tel:8177315252" className="text-[#D4AA7D] underline">
            817.731.5252
          </a> */}
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#C9A178] text-black font-semibold px-6 py-4 hover:scale-105 transition rounded-md">
            Book Now
          </button>
        </div>
      </div>

      <hr className="border-t border-amber-400 mt-8 mb-4" />
      <span className="inline-block px-4  py-1 mb-4 text-sm font-medium tracking-widest text-amber-300 uppercase border border-amber-400">
        Est. 2010
      </span>
      <p className="text-sm text-white text-center ">
        ©2023 <span className="text-[#D4AA7D]">Fort Worth Barber Shop.</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
