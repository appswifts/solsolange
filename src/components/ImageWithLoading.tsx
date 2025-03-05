
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  priority?: boolean;
  clickable?: boolean;
}

const ImageWithLoading = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  clickable = false
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const handleImageLoaded = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  const handleImageClick = () => {
    if (clickable) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div 
        className={`relative overflow-hidden ${clickable ? 'cursor-pointer' : ''}`} 
        style={{ width, height }}
        onClick={handleImageClick}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse rounded" />
        )}
        
        <motion.img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={handleImageLoaded}
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      {/* Image Modal - Improved for mobile */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={src} 
                alt={alt} 
                className="max-h-[85vh] max-w-full w-auto h-auto mx-auto object-contain rounded-md shadow-2xl"
              />
              <button 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-200"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <X size={20} className="sm:size-24" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageWithLoading;
