import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gray-900 bg-opacity-80 border border-gray-700 rounded-xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-w-5xl p-2 md:p-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-200 cursor-pointer z-20"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full h-80 md:h-[70vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-3 text-white hover:bg-opacity-60 transition-all duration-300 z-10 cursor-pointer"
                onClick={handlePrev}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-3 text-white hover:bg-opacity-60 transition-all duration-300 z-10 cursor-pointer"
                onClick={handleNext}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

           {/* Dots Indicator */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2.5 z-10">
             {images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-white scale-150' : 'bg-gray-500 bg-opacity-70'
                }`}
                onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
