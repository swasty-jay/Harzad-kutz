import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const services = {
  Featured: [
    {
      name: "Line Up/Shape Up",
      price: "₵25",
      description:
        "Achieve a sharp, precise line-up to enhance and define your natural features, giving you a polished and well-groomed appearance.",
    },
    {
      name: "Beard Trim",
      price: "₵40",
      description:
        "A meticulous beard trimming service to maintain your desired style, ensuring a neat, well-defined shape that complements your facial features.",
    },
    {
      name: "Kids Haircut",
      price: "₵50",
      description:
        "A gentle and kid-friendly haircut experience, designed to keep young ones comfortable while delivering a stylish, age-appropriate look.",
    },
    {
      name: "Taper Fade / Skin Fade",
      price: "₵60",
      description:
        "A classic taper or skin fade designed for a clean, modern, and versatile look that seamlessly blends different hair lengths for a sharp finish.",
    },
    {
      name: "Two Friends Haircut",
      price: "₵100",
      description:
        "A special discounted offer for two friends to enjoy professional haircuts together, ensuring a fun, shared experience with stylish results.",
    },
  ],
  Waves: [
    {
      name: "Waves for Men",
      price: "₵1000",
      description:
        "A comprehensive wave styling session tailored for men, offering a detailed and customized wave design for a refined and trendy appearance.",
    },
    {
      name: "Waves for Women",
      price: "₵70",
      description:
        "A creative wave styling service for women, designed to enhance texture and volume, delivering a natural and sophisticated wave pattern.",
    },
  ],
  Dye: [
    {
      name: "Blonde Dye",
      price: "₵120",
      description:
        "A premium blonde dye treatment, providing a vibrant, sun-kissed look with long-lasting results for a refreshing change in your style.",
    },
    {
      name: "Bleach and Coloring",
      price: "₵100",
      description:
        "A complete bleaching and coloring service to give you a bold, transformative look. Perfect for those seeking to make a dramatic style statement.",
    },
    {
      name: "Black Dye",
      price: "₵100",
      description:
        "A professional black dye treatment that revitalizes your hair, providing a deep, rich, and glossy finish for a sleek, polished appearance.",
    },
    {
      name: "White Dye",
      price: "₵250",
      description:
        "A bold, high-quality white dye service that delivers a striking, pristine look, ideal for individuals seeking a unique and standout style.",
    },
  ],
  "Home Service": [
    {
      name: "Home Service",
      price: "₵500",
      description:
        "An exclusive home service offering personalized hair and styling treatments in the comfort of your own home, tailored to your preferences for a luxurious experience.",
    },
  ],
};

const tabs = ["Featured", "Waves", "Dye", "Home Service"];

function Services() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center gap-2 md:gap-4 text-[8px] md:text-[12px] mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-1 rounded-lg text-[8px] md:text-sm font-medium transition ${
              activeTab === tab
                ? "bg-gray-500 text-white "
                : "bg-gray-200 text-gray-700 "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between relative"
            >
              {/* Book Me button (always at bottom-right across all screens) */}
              <Link
                to="/booking"
                className="absolute bottom-4 right-4 border border-amber-600  text-black text-xs py-1 px-3 rounded-full hover:bg-primary transition mt-5 md:mt-0"
              >
                Book Me
              </Link>

              {/* Service Name and Price */}
              <div className="mt-6 mb-12">
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.price}</p>

                {/* Service Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-400 text-xs"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Services;
