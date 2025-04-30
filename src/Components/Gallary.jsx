"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Single Image Card with Tilt Effect
 */
function ImageCard({ id, onClick }) {
  return (
    <motion.div
      className="img-card group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{ perspective: 500 }}
      onClick={() => onClick(id)}
    >
      <motion.div className="card-content group-hover:rotate-x-10 group-hover:rotate-y-10 transition-transform duration-300">
        <img
          src={`/photos/${id}.jpg`}
          alt={`Photo ${id}`}
          className="w-full h-full object-cover rounded-lg group-hover:scale-95 transition-all duration-300"
        />
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
        className="modal-overlay fixed top-0 left-0 w-full h-full bg-black/90 bg-opacity-80 flex justify-center items-center z-50 cursor-zoom-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.img
          src={`/photos/${id}.jpg`}
          alt={`Photo ${id}`}
          className="modal-img max-w-[80%] max-h-[80%] md:max-w-[90%] md:max-h-[90%] rounded-lg shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Main Gallery Component
 */
export default function ParallaxGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4  gap-2 md:gap-4 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <ImageCard key={id} id={id} onClick={handleImageClick} />
        ))}
      </div>
      <Modal id={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}

/**
 * Styling (Tailwind classes integrated)
 */
function StyleSheet() {
  return (
    <style>{`
      .gallery-wrapper {
        width: 100%;
        height: 100vh;
        background-color: #fafafa;
      }

      .img-card {
        min-width: 300px;
        height: 400px;
        background-color: #fff;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1500px;
      }

      .card-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transition: transform 0.3s;
      }

      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: zoom-out;
      }

      .modal-img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
      }
    `}</style>
  );
}
