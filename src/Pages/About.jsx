import { useState } from "react";
import { motion } from "framer-motion";
import { FaCut, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

export default function AboutSection() {
  // You'll need to replace these coordinates with your actual barbershop location
  const [mapCoordinates] = useState({
    lat: 6.5244, // Replace with your actual latitude
    lng: 3.3792, // Replace with your actual longitude
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-black">HazardCutz</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your premier destination for exceptional haircuts and grooming
            services. We combine classic techniques with modern styles to give
            you the perfect look.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-black rounded-full mr-4">
                  <FaCut className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Our Story</h3>
              </div>

              <p className="text-gray-600 mb-6">
                Founded in 2015, HazardCutz began with a simple mission: to
                provide premium barber services in a comfortable, modern
                environment. What started as a small shop has grown into a
                beloved staple of the community.
              </p>

              <p className="text-gray-600 mb-8">
                Our skilled barbers bring years of experience and passion to
                every cut. We pride ourselves on attention to detail and
                personalized service that keeps our clients looking and feeling
                their best.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-full mr-3">
                    <FaClock className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-sm text-gray-600">Mon-Sat: 9am - 8pm</p>
                    <p className="text-sm text-gray-600">Sunday: 10am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-gray-100 rounded-full mr-3">
                    <FaPhone className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Contact Us</h4>
                    <p className="text-sm text-gray-600">+234 903 666 6008</p>
                    <p className="text-sm text-gray-600">info@hazardcutz.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-black rounded-full mr-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Find Us</h3>
              </div>

              <div className="h-64 sm:h-72 md:h-80 mb-6 rounded-lg overflow-hidden">
                {/* Google Maps iFrame - Replace the src URL with your actual location */}
                <iframe
                  title="HazardCutz Location"
                  className="w-full h-full border-0"
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${mapCoordinates.lat},${mapCoordinates.lng}&zoom=15`}
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-gray-100 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">123 Barbershop Street</p>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${mapCoordinates.lat},${mapCoordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
