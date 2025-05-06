// import { memo, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaCut, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

// // Using memo to prevent unnecessary re-renders
// const AboutSection = memo(function AboutSection() {
//   // Set coordinates for your shop in Accra, Ghana
//   // Update these with your exact shop location
//   const mapCoordinates = {
//     lat: 5.739465, // Replace with your exact shop latitude

//     lng: -0.237222, // Replace with your exact shop longitude
//     address: "St Johns - Dome - Kwabenya - Brekusu Rd", // Replace with your actual address
//     city: " Greater Accra, Dome - kwabenya", // Replace with your actual city/area
//   };

//   // Reference to the map container element
//   const mapContainerRef = useRef(null);

//   // Initialize Leaflet map when component mounts
//   useEffect(() => {
//     // Only run on client-side and when the map container exists
//     if (typeof window !== "undefined" && mapContainerRef.current) {
//       // Dynamically import Leaflet library if not already available
//       if (!window.L) {
//         // Create script and link elements for Leaflet
//         const linkEl = document.createElement("link");
//         linkEl.rel = "stylesheet";
//         linkEl.href =
//           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
//         document.head.appendChild(linkEl);

//         const scriptEl = document.createElement("script");
//         scriptEl.src =
//           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
//         scriptEl.onload = initMap;
//         document.head.appendChild(scriptEl);
//       } else {
//         // Leaflet is already available, initialize map
//         initMap();
//       }
//     }

//     // Function to initialize the map
//     function initMap() {
//       // If map is already initialized on this element, don't recreate it
//       if (mapContainerRef.current._leaflet_id) return;

//       // Create map centered on shop location
//       const map = window.L.map(mapContainerRef.current).setView(
//         [mapCoordinates.lat, mapCoordinates.lng],
//         12 // Zoom level - higher number = more zoomed in
//       );

//       // Add OpenStreetMap tile layer (free to use)
//       window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // Add marker for the shop location
//       const marker = window.L.marker([mapCoordinates.lat, mapCoordinates.lng])
//         .addTo(map)
//         .bindPopup(
//           `<b>Hazard kutz</b><br>${mapCoordinates.address}<br>${mapCoordinates.city}`
//         )
//         .openPopup();

//       // Add a circle to highlight the area (optional)
//       window.L.circle([mapCoordinates.lat, mapCoordinates.lng], {
//         radius: 300, // 300 meters radius
//         color: "#d97706", // amber-600 color
//         fillColor: "#fbbf24", // amber-400 color
//         fillOpacity: 0.15,
//         weight: 2,
//       }).addTo(map);
//     }

//     // Cleanup function to prevent memory leaks
//     return () => {
//       if (mapContainerRef.current && mapContainerRef.current._leaflet_id) {
//         if (window.L) {
//           const mapInstance = window.L.map(mapContainerRef.current);
//           if (mapInstance) {
//             mapInstance.remove();
//           }
//         }
//       }
//     };
//   }, [mapCoordinates.lat, mapCoordinates.lng]);

//   // Pre-optimized animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const slideInLeft = {
//     hidden: { opacity: 0, x: -30 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const slideInRight = {
//     hidden: { opacity: 0, x: 30 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <section id="about" className="py-20 bg-gray-200">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             About <span className="text-amber-600">Hazard kutz</span>
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
//           <p className="text-gray-800 max-w-2xl mx-auto">
//             Your premier destination for exceptional haircuts and grooming
//             services. We combine classic techniques with modern styles to give
//             you the perfect look.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* About Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={slideInLeft}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-200">
//               <div className="flex items-center mb-6">
//                 <div className="p-3 bg-amber-600 rounded-full mr-4">
//                   <FaCut className="text-white text-xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-amber-800">Our Story</h3>
//               </div>

//               <p className="text-gray-800 mb-6">
//                 Founded in 2024, Hazard kutz began with a simple mission: to
//                 provide premium barber services in a comfortable, modern
//                 environment. What started as a small shop has grown into a
//                 beloved staple of the community.
//               </p>

//               <p className="text-gray-800 mb-8">
//                 Our skilled barbers bring years of experience and passion to
//                 every cut. We pride ourselves on attention to detail and
//                 personalized service that keeps our clients looking and feeling
//                 their best.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="flex items-start">
//                   <div className="p-2 bg-amber-100 rounded-full mr-3">
//                     <FaClock className="text-amber-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1 text-amber-800">
//                       Working Hours
//                     </h4>
//                     <p className="text-sm text-gray-700">Mon-Sat: 9am - 8pm</p>
//                     <p className="text-sm text-gray-700">Sunday: 10am - 6pm</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="p-2 bg-amber-100 rounded-full mr-3">
//                     <FaPhone className="text-amber-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1 text-amber-800">
//                       Contact Us
//                     </h4>
//                     <p className="text-sm text-gray-700">+233 20 123 4567</p>
//                     <p className="text-sm text-gray-700">info@hazardcutz.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Map Section */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={slideInRight}
//             transition={{ duration: 0.6 }}
//             className="h-full"
//           >
//             <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200 h-full">
//               <div className="flex items-center mb-6">
//                 <div className="p-3 bg-amber-600 rounded-full mr-4">
//                   <FaMapMarkerAlt className="text-white text-xl" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-amber-800">Find Us</h3>
//               </div>

//               <div className="h-64 sm:h-72 md:h-80 mb-6 rounded-lg overflow-hidden">
//                 {/* Leaflet Map Container */}
//                 <div
//                   ref={mapContainerRef}
//                   className="w-full h-full border-0 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>

//               <div className="flex items-start">
//                 <div className="p-2 bg-amber-100 rounded-full mr-3 mt-1">
//                   <FaMapMarkerAlt className="text-amber-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-1 text-amber-800">Address</h4>
//                   <p className="text-gray-700">{mapCoordinates.address}</p>
//                   <p className="text-gray-700">{mapCoordinates.city}</p>
//                   <div className="flex flex-wrap gap-2 mt-3">
//                     <a
//                       href={`https://www.google.com/maps/dir/?api=1&destination=${mapCoordinates.lat},${mapCoordinates.lng}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block text-sm bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
//                     >
//                       Get Directions (Google)
//                     </a>
//                     <a
//                       href={`https://www.waze.com/ul?ll=${mapCoordinates.lat}%2C${mapCoordinates.lng}&navigate=yes`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Navigate with Waze
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// });

// export default AboutSection;

import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCut, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const AboutSection = memo(function AboutSection() {
  const mapCoordinates = {
    lat: 5.739465,
    lng: -0.237222,
    address: "St Johns - Dome - Kwabenya",
    city: "Greater Accra",
  };

  const mapContainerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && mapContainerRef.current) {
      if (!window.L) {
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
        document.head.appendChild(linkEl);

        const scriptEl = document.createElement("script");
        scriptEl.src =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
        scriptEl.onload = initMap;
        document.head.appendChild(scriptEl);
      } else {
        initMap();
      }
    }

    function initMap() {
      if (mapContainerRef.current._leaflet_id) return;

      const map = window.L.map(mapContainerRef.current).setView(
        [mapCoordinates.lat, mapCoordinates.lng],
        11
      );

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      window.L.marker([mapCoordinates.lat, mapCoordinates.lng])
        .addTo(map)
        .bindPopup(`<b>Hazard kutz</b><br>${mapCoordinates.address}`)
        .openPopup();

      window.L.circle([mapCoordinates.lat, mapCoordinates.lng], {
        radius: 300,
        color: "#d97706",
        fillColor: "#fbbf24",
        fillOpacity: 0.15,
        weight: 2,
      }).addTo(map);

      setMapInstance(map);
      setMapLoaded(true);
    }

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [mapCoordinates.lat, mapCoordinates.lng]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-amber-600">Hazard kutz</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Your premier destination for exceptional haircuts and grooming
            services. We combine classic techniques with modern styles to give
            you the perfect look.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-amber-200">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-600 rounded-full mr-4">
                  <FaCut
                    className="text-white text-xl"
                    aria-label="Haircut Icon"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">Our Story</h3>
              </div>

              <div className="space-y-4 text-gray-800">
                <p>
                  Founded in 2024, Hazard kutz began with a simple mission: to
                  provide premium barber services in a comfortable, modern
                  environment.
                </p>
                <p>
                  Our skilled barbers bring years of experience and passion to
                  every cut. We pride ourselves on attention to detail and
                  personalized service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start">
                  <div className="p-2 bg-amber-100 rounded-full mr-3">
                    <FaClock
                      className="text-amber-600"
                      aria-label="Clock Icon"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-amber-800">
                      Working Hours
                    </h4>
                    <p className="text-sm text-gray-700">Mon-Sat: 9am - 8pm</p>
                    <p className="text-sm text-gray-700">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-amber-100 rounded-full mr-3">
                    <FaPhone
                      className="text-amber-600"
                      aria-label="Phone Icon"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-amber-800">
                      Contact Us
                    </h4>
                    <div>
                      <p className="text-sm text-gray-700">
                        <a
                          href="tel:+233201234567"
                          className="hover:text-amber-500 underline"
                        >
                          Call Us
                        </a>
                      </p>
                      <p className="text-sm text-gray-700">
                        <a
                          href="mailto:hazardkutzbarbershop@gmail.com"
                          className="hover:text-amber-500 underline"
                        >
                          Email Us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-600 rounded-full mr-4">
                  <FaMapMarkerAlt
                    className="text-white text-xl"
                    aria-label="Location Icon"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">Find Us</h3>
              </div>

              <div className="h-64 sm:h-72 md:h-80 min-h-[300px] mb-6 rounded-lg overflow-hidden relative">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                    <span className="text-gray-500">Loading map...</span>
                  </div>
                )}
                <div
                  ref={mapContainerRef}
                  className="w-full h-full border-0 rounded-lg"
                  role="region"
                  aria-label="Google Map showing shop location"
                  style={{ zIndex: 1 }}
                ></div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-amber-100 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt
                    className="text-amber-600"
                    aria-label="Map Marker Icon"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-amber-800">Address</h4>
                  <p className="text-gray-700">{mapCoordinates.address}</p>
                  <p className="text-gray-700">{mapCoordinates.city}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${mapCoordinates.lat},${mapCoordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Get Directions (Google)
                    </a>
                    {/* <a
                      href={`https://www.waze.com/ul?ll=${mapCoordinates.lat}%2C${mapCoordinates.lng}&navigate=yes`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Navigate with Waze
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
