import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const services = {
  Featured: [
    {
      name: "Precision Line Up",
      price: "₵25",
      description:
        "Master-crafted edge definition that highlights your best features. Our barbers use traditional techniques for razor-sharp precision.",
    },
    {
      name: "Beard Sculpting",
      price: "₵40",
      description:
        "Transform your facial hair with our premium beard styling service. Expertly shaped and defined for a distinguished gentleman's look.",
    },
    {
      name: "Young Gentleman's Cut",
      price: "₵50",
      description:
        "Start them young with style. Our kid-friendly approach ensures comfort while delivering age-appropriate cuts that parents love.",
    },
    {
      name: "Signature Fade",
      price: "₵60",
      description:
        "Our most requested service. Experience a flawless blend from skin to length, customized to complement your face shape and style.",
    },
    {
      name: "Duo Experience",
      price: "₵100",
      description:
        "Bring a friend and save. Two premium cuts with the same attention to detail and style that Harzad Cutz is known for.",
    },
  ],
  Waves: [
    {
      name: "Classic Wave Pattern",
      price: "₵1000",
      description:
        "Achieve that perfect 360° wave pattern. Our multi-session technique creates deep, defined waves that turn heads.",
    },
    {
      name: "Textured Waves",
      price: "₵70",
      description:
        "Custom wave styling that works with your natural texture. Ideal for creating movement and dimension in various hair types.",
    },
  ],
  Dye: [
    {
      name: "Gold Standard Blonde",
      price: "₵120",
      description:
        "Premium blonde transformation with careful attention to tone and hair health. Includes treatment to maintain strength and shine.",
    },
    {
      name: "Complete Color Transformation",
      price: "₵100",
      description:
        "From preparation to final styling, this service delivers bold, head-turning color that expresses your unique personality.",
    },
    {
      name: "Rich Noir",
      price: "₵100",
      description:
        "Deep, luxurious black that adds dimension and shine. Our formula ensures natural-looking results with maximum coverage.",
    },
    {
      name: "Platinum Experience",
      price: "₵250",
      description:
        "The ultimate statement look. Our careful process achieves stunning white or platinum tones while protecting your hair.",
    },
  ],
  "Home Service": [
    {
      name: "Elite Home Experience",
      price: "₵500",
      description:
        "Bring the barbershop to you. Our master barbers deliver the full Harzad Cutz experience in the comfort and privacy of your home.",
    },
  ],
};

const tabs = ["Featured", "Waves", "Dye", "Home Service"];

function Services() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <div className="max-w-6xl mx-auto pt-22 pb-2 px-6 bg-gray-800">
      <div className="text-center mb-6 md:mb-12">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-widest text-amber-300 uppercase border border-amber-400">
          Our Services
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
          Premium Grooming
        </h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-4 md:mb-6"></div>
        <p className="text-gray-300 text-sm md:text-[18px] max-w-2xl mx-auto">
          Discover our range of expert services designed to enhance your style
          and confidence. Each service is performed by our master barbers with
          precision and care.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 text-[10px] md:text-[14px] font-medium tracking-wide uppercase transition-all duration-300 ${
              activeTab === tab
                ? "bg-amber-400 text-black"
                : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-amber-400"
            } rounded-sm`}
          >
            {tab}
          </motion.button>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-sm shadow-lg border border-gray-700 overflow-hidden relative"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white">
                    {service.name}
                  </h3>
                  <span className="text-amber-400 text-xl font-bold">
                    {service.price}
                  </span>
                </div>

                <div className="h-px w-full bg-gray-700 mb-4"></div>

                <p className="text-gray-300 text-sm mb-14">
                  {service.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-6 right-6"
                >
                  <Link
                    to="/booking"
                    className="inline-block bg-amber-400 text-black font-bold uppercase tracking-wide text-xs py-2 px-5 rounded-sm hover:bg-amber-300 transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Services;
