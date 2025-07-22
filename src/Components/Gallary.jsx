"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageCard({ id, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="img-card group relative overflow-hidden"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(id)}
    >
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
      )}

      {/* Hover overlay with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-amber-500/30 to-yellow-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

      <img
        src={`/photos/${id}.jpg`}
        alt={`Haircut Style ${id}`}
        className={`w-full h-full object-cover rounded-sm group-hover:scale-105 transition-all duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Enhanced overlay with better typography */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
      >
        <p className="text-white text-sm font-medium cinzel mb-1">
          Premium Style #{id}
        </p>
        <div className="w-8 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-12"></div>
      </motion.div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}

/**
 * Enhanced Fullscreen Modal
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
          initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateY: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img
            src={`/photos/${id}.jpg`}
            alt={`Haircut Style ${id}`}
            className="modal-img max-w-[90%] max-h-[80vh] mx-auto rounded-sm shadow-2xl"
          />

          {/* Enhanced close button */}
          <motion.button
            className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
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
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>

          {/* Image caption in modal */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
              <p className="text-white font-medium cinzel">
                Premium Style #{id}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Enhanced Main Gallery Component
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

  // Enhanced stagger animation for grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="gallery-wrapper bg-gradient-to-b from-gray-100 to-gray-200 pt-22 pb-8 px-6">
      <div className="text-center mb-16">
        <motion.span
          className="inline-block px-6 py-2 mb-4 cinzel text-sm font-bold tracking-widest text-black uppercase border-2 border-amber-400 bg-white/50 backdrop-blur-sm "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Portfolio
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl font-bold text-black mb-4 cinzel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Signature Styles
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mb-8 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.p
          className="text-gray-700 max-w-3xl bellefair mx-auto mb-12 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Explore our collection of premium kutz and styles. Each image
          showcases the precision, creativity, and craftsmanship that define the
          <span className="text-amber-600 font-semibold"> Hazard Kutz </span>
          experience.
        </motion.p>
      </div>

      <motion.div
        className="gallery grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <motion.div key={id} variants={itemVariants}>
            <ImageCard id={id} onClick={handleImageClick} />
          </motion.div>
        ))}
      </motion.div>

      <Modal id={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}

/**
 * Enhanced styles for professional appearance
 */
function StyleSheet() {
  return (
    <style>{`
      .img-card {
        height: 320px;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid rgba(245, 158, 11, 0.1);
        border-radius: 8px;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      }

      .img-card:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        border-color: rgba(245, 158, 11, 0.3);
      }

      @media (min-width: 768px) {
        .img-card {
          height: 420px;
        }
      }

      .modal-overlay {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.95);
      }

      .modal-content {
        width: 90%;
        max-width: 1200px;
        filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5));
      }

      .modal-img {
        border: 3px solid rgba(245, 158, 11, 0.3);
      }

      .cinzel {
        font-family: 'Cinzel', serif;
        letter-spacing: 0.02em;
      }

      .bellefair {
        font-family: 'Bellefair', serif;
        line-height: 1.7;
      }

      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      .animate-pulse {
        background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }
    `}</style>
  );
}
