"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Single Image Card with Styled Effect
 */
function ImageCard({ id, onClick }) {
  return (
    <motion.div
      className="img-card group relative overflow-hidden"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(id)}
    >
      <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>

      <img
        src={`/photos/${id}.jpg`}
        alt={`Haircut Style ${id}`}
        className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-all duration-500"
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
      >
        <p className="text-white text-sm font-medium">Premium Style #{id}</p>
      </motion.div>
    </motion.div>
  );
}

/**
 * Fullscreen Modal
 */
function Modal({ id, onClose }) {
  if (!id) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay fixed top-0 left-0 w-full h-full bg-black/95 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src={`/photos/${id}.jpg`}
            alt={`Haircut Style ${id}`}
            className="modal-img max-w-[90%] max-h-[80vh] mx-auto rounded-sm shadow-2xl"
          />

          <motion.button
            className="absolute top-4 right-4 bg-amber-400 text-black w-10 h-10 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Main Gallery Component
 */
export default function BarberGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-wrapper bg-gray-200 pt-22 pb-4 px-6">
      <div className="text-center mb-12">
        <motion.span
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest text-black uppercase border border-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Portfolio
        </motion.span>

        <motion.h2
          className="text-4xl font-bold text-black mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Signature Styles
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-amber-400 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-10 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Explore our collection of premium cuts and styles. Each image
          showcases the precision, creativity, and craftsmanship that define the
          Hazard Kutz experience.
        </motion.p>
      </div>

      <motion.div
        className="gallery grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          >
            <ImageCard id={id} onClick={handleImageClick} />
          </motion.div>
        ))}
      </motion.div>

      <Modal id={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}

/**
 * Additional styles for elements that need specific styling beyond Tailwind
 */
function StyleSheet() {
  return (
    <style>{`
      .img-card {
        height: 300px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        border: 1px solid #222;
      }

      @media (min-width: 768px) {
        .img-card {
          height: 400px;
        }
      }

      .modal-overlay {
        backdrop-filter: blur(5px);
      }

      .modal-content {
        width: 90%;
        max-width: 1200px;
      }
    `}</style>
  );
}
