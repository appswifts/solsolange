
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  priority?: boolean;
}

const ImageWithLoading = ({ src, alt, className = '', width, height, priority = false }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const handleImageLoaded = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
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
  );
};

export default ImageWithLoading;
