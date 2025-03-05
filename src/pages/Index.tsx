
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, BookOpen, Map, Sun } from 'lucide-react';

import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ImageWithLoading from '../components/ImageWithLoading';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <ImageWithLoading
            src="/lovable-uploads/e8b96511-32ef-4d18-9bd8-1c4b710dd829.png"
            alt="Sol Solange in Rwanda"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-4xl"
          >
            <motion.span
              className="block text-sm md:text-base font-medium uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Travel Blogger • Photographer • Storyteller
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Marie Solange Nishimwe
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Capturing the heart and soul of Rwanda through my lens and words in the "Uko nageze" series
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Link
                to="/portfolio"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg flex items-center justify-center"
              >
                View Portfolio <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/blog"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/50 px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Read Uko nageze
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        >
          <a href="#about" className="text-white flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>
      </section>

      {/* About brief section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <div className="relative">
                  <div className="absolute -left-5 -top-5 w-24 h-24 bg-rwanda-yellow/20 rounded-full z-0" />
                  <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-rwanda-green/10 rounded-full z-0" />
                  <ImageWithLoading
                    src="/lovable-uploads/dbb58a27-7644-4fe0-9490-238426e6e1cf.png"
                    alt="Sol Solange profile"
                    className="rounded-lg shadow-xl z-10 relative"
                    width="100%"
                    height="auto"
                  />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.3}>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  A bit about me
                </span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                  Hello, I'm Sol Solange
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm a Rwandan content creator, travel blogger, photographer, and poet passionate about showcasing the beauty 
                  of Rwanda and beyond. Through my "Uko nageze" series, I share immersive travel experiences that capture the 
                  essence of the places I visit.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  My journey reflects a deep passion for storytelling and a commitment to changing lives through art. I've been 
                  featured in publications highlighting my artistic endeavors and continue to inspire others through my creative work.
                </p>
                <Link 
                  to="/about"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn more about my story <ArrowRight size={16} className="ml-2" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="What I Do" 
            subtitle="I combine my passion for travel, photography, and storytelling to create immersive content that transports you to the heart of Rwanda and beyond."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { 
                icon: <Camera className="h-8 w-8 text-rwanda-green" />, 
                title: "Photography", 
                description: "Capturing breathtaking landscapes, vibrant cultures, and authentic moments through my lens."
              },
              { 
                icon: <BookOpen className="h-8 w-8 text-rwanda-blue" />, 
                title: "Travel Blogging", 
                description: "Documenting my journeys through the 'Uko nageze' series, sharing insights and perspectives."
              },
              { 
                icon: <Map className="h-8 w-8 text-rwanda-clay" />, 
                title: "Storytelling", 
                description: "Weaving narratives that bring destinations to life, highlighting the unique stories of each place."
              },
              { 
                icon: <Sun className="h-8 w-8 text-rwanda-sun" />, 
                title: "Poetry & Art", 
                description: "Expressing the beauty of experiences through poetic words and artistic expression."
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Travel Stories Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Uko nageze" 
            subtitle="A glimpse into my travel adventures and the stories behind them. Join me as I explore breathtaking destinations and share unique cultural experiences."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/lovable-uploads/939bc6ad-3b01-452a-b566-c80b0cca8f63.png",
                title: "Tea Fields of Rwanda",
                excerpt: "Exploring the lush green landscapes of Rwanda's famous tea plantations and the stories of the people behind the tea.",
                location: "Nyungwe, Rwanda"
              },
              {
                image: "/lovable-uploads/1cf569b0-e550-4575-ad24-c92bc92b0045.png",
                title: "Walking the Great Wall",
                excerpt: "An unforgettable journey along one of humanity's greatest architectural achievements and the lessons learned along the way.",
                location: "Beijing, China"
              },
              {
                image: "/lovable-uploads/65904a35-c985-4fa6-9b2e-93d969954191.png",
                title: "Urban Exploration",
                excerpt: "Discovering the vibrant city life, modern architecture, and cultural contrasts of bustling metropolitan areas.",
                location: "Shanghai, China"
              }
            ].map((story, index) => (
              <AnimatedSection key={index} delay={0.15 * index}>
                <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full flex flex-col card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithLoading
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary/90 text-white px-3 py-1 text-xs font-medium">
                      {story.location}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-playfair font-bold mb-3 text-gray-900">{story.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{story.excerpt}</p>
                    <Link
                      to="/blog"
                      className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
                    >
                      Read more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View All Stories <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Photos Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Through My Lens" 
            subtitle="A selection of my favorite captures from around the world, each telling its own unique story."
            centered={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/lovable-uploads/4db7b8f6-8163-4ae5-80de-ebc147bad58a.png",
              "/lovable-uploads/6f602863-70f2-4f59-9010-18a9b27a836c.png",
              "/lovable-uploads/939376a4-8df1-4ec5-8f90-e90152920ea6.png",
              "/lovable-uploads/fe7b80f4-9044-45a5-989d-abf3c61c3f37.png",
              "/lovable-uploads/1def1eae-d5fd-4380-b2f2-f88da0cd35ca.png",
              "/lovable-uploads/58cefb54-00ba-4a06-8532-6207a0ad33e7.png",
              "/lovable-uploads/e1969758-d885-4924-ab1a-fe68311d53be.png",
              "/lovable-uploads/3d42b57b-84dd-400e-be07-806c80f9dade.png"
            ].map((image, index) => (
              <AnimatedSection key={index} delay={0.05 * index}>
                <div className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${index === 0 || index === 3 || index === 4 || index === 7 ? 'row-span-2' : ''}`}>
                  <div className="relative group h-full">
                    <ImageWithLoading
                      src={image}
                      alt={`Travel photograph ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link 
                        to="/portfolio"
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/50 text-white rounded-md hover:bg-white/30 transition-colors duration-300"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Explore Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-rwanda-green to-rwanda-blue text-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Looking to collaborate on a project or feature my work? I'm open to partnerships
              that align with my vision of storytelling and authentic representation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-rwanda-green font-medium rounded-md hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
