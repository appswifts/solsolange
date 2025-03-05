
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Camera, Tag, CalendarDays, Filter } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ImageWithLoading from '../components/ImageWithLoading';
import AnimatedSection from '../components/AnimatedSection';

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  date: string;
  featured?: boolean;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const location = useLocation();
  
  // Mock photos data
  const photos: Photo[] = [
    {
      id: 1,
      src: "/lovable-uploads/939bc6ad-3b01-452a-b566-c80b0cca8f63.png",
      title: "Tea Fields of Nyungwe",
      category: "landscape",
      date: "May 2023",
      featured: true
    },
    {
      id: 2,
      src: "/lovable-uploads/4db7b8f6-8163-4ae5-80de-ebc147bad58a.png",
      title: "Village Life",
      category: "culture",
      date: "April 2023"
    },
    {
      id: 3,
      src: "/lovable-uploads/1cf569b0-e550-4575-ad24-c92bc92b0045.png",
      title: "Great Wall Adventure",
      category: "travel",
      date: "January 2023",
      featured: true
    },
    {
      id: 4,
      src: "/lovable-uploads/939376a4-8df1-4ec5-8f90-e90152920ea6.png",
      title: "Mountain Sunset",
      category: "landscape",
      date: "December 2022"
    },
    {
      id: 5,
      src: "/lovable-uploads/fe7b80f4-9044-45a5-989d-abf3c61c3f37.png",
      title: "Urban Silhouettes",
      category: "urban",
      date: "March 2023"
    },
    {
      id: 6,
      src: "/lovable-uploads/1def1eae-d5fd-4380-b2f2-f88da0cd35ca.png",
      title: "Lake Kivu Viewpoint",
      category: "landscape",
      date: "February 2023",
      featured: true
    },
    {
      id: 7,
      src: "/lovable-uploads/e1969758-d885-4924-ab1a-fe68311d53be.png",
      title: "Traditional Dancer",
      category: "culture",
      date: "January 2023" 
    },
    {
      id: 8,
      src: "/lovable-uploads/3d42b57b-84dd-400e-be07-806c80f9dade.png",
      title: "Market Colors",
      category: "culture",
      date: "November 2022"
    },
    {
      id: 9,
      src: "/lovable-uploads/65904a35-c985-4fa6-9b2e-93d969954191.png",
      title: "City Nights",
      category: "urban",
      date: "October 2022"
    },
    {
      id: 10,
      src: "/lovable-uploads/6f602863-70f2-4f59-9010-18a9b27a836c.png",
      title: "Mountain Trek",
      category: "landscape",
      date: "September 2022"
    },
    {
      id: 11,
      src: "/lovable-uploads/58cefb54-00ba-4a06-8532-6207a0ad33e7.png",
      title: "Sunset Silhouette",
      category: "travel",
      date: "August 2022"
    },
    {
      id: 12,
      src: "/lovable-uploads/dbb58a27-7644-4fe0-9490-238426e6e1cf.png",
      title: "Portrait",
      category: "portrait",
      date: "July 2022",
      featured: true
    }
  ];

  // Get unique categories for the filter
  const categories = ['all', ...new Set(photos.map(photo => photo.category))];

  // Filter photos based on selected category
  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  // Handle image modal
  const openImageModal = (photo: Photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [selectedImage]);

  // Reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Through My Lens" 
          subtitle="A curated collection of my photography capturing moments, places, and stories from Rwanda and beyond."
          centered={true}
        />
        
        {/* Filters */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-4 my-12">
            <div className="flex items-center text-white/70 mr-3">
              <Filter size={16} className="mr-2" />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm rounded-full transition-colors capitalize ${
                  activeFilter === category 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPhotos.map((photo, index) => (
            <AnimatedSection key={photo.id} delay={0.1 * (index % 3)}>
              <div 
                className="group relative cursor-pointer rounded-lg overflow-hidden"
                onClick={() => openImageModal(photo)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <ImageWithLoading
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-medium">{photo.title}</h3>
                  <div className="flex items-center mt-2">
                    <Tag size={14} className="text-white/70 mr-2" />
                    <span className="text-white/70 text-sm capitalize">{photo.category}</span>
                    <span className="mx-2 text-white/50">•</span>
                    <CalendarDays size={14} className="text-white/70 mr-2" />
                    <span className="text-white/70 text-sm">{photo.date}</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full">
                    <Eye size={16} />
                  </div>
                </div>
                
                {photo.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-white text-black text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <Camera size={48} className="mx-auto text-white/20 mb-4" />
            <h3 className="text-xl text-white font-medium">No photos found</h3>
            <p className="text-white/60 mt-2">Try a different filter</p>
          </div>
        )}
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <motion.div
            className="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
              <h3 className="text-white text-lg font-medium">{selectedImage.title}</h3>
              <div className="flex items-center mt-1">
                <Tag size={14} className="text-white/70 mr-2" />
                <span className="text-white/70 text-sm capitalize">{selectedImage.category}</span>
                <span className="mx-2 text-white/50">•</span>
                <CalendarDays size={14} className="text-white/70 mr-2" />
                <span className="text-white/70 text-sm">{selectedImage.date}</span>
              </div>
            </div>
            <button 
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full"
              onClick={closeImageModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
