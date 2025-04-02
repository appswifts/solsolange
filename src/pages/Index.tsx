import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, BookOpen, Map, Sun, Compass, Building, GraduationCap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ImageWithLoading from '../components/ImageWithLoading';
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero section - Improved with modern styling */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <ImageWithLoading src="/lovable-uploads/e8b96511-32ef-4d18-9bd8-1c4b710dd829.png" alt="Sol Solange in Rwanda" className="w-full h-full object-cover" priority={true} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6 pt-16">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-center max-w-4xl">
            <motion.span className="block text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }}>
              Travel Blogger • Photographer • Storyteller
            </motion.span>
            
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 leading-none negative-tracking" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.7
          }}>
              Marie Solange Nishimwe
            </motion.h1>
            
            <motion.p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-shadow font-light tracking-wide" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }}>
              Capturing the heart and soul of Rwanda through my lens and words in the "Uko nageze" series
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center mt-2" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.1
          }}>
              <Link to="/portfolio" className="bg-white hover:bg-white/90 text-black px-8 py-4 rounded-none transition-all duration-300 hover:shadow-lg flex items-center justify-center text-sm font-medium tracking-wide">
                View Portfolio <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/blog" className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-4 rounded-none transition-all duration-300 hover:shadow-lg text-sm font-medium tracking-wide">
                Read Uko nageze
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 1.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }}>
          <a href="#about" className="text-white flex flex-col items-center">
            <span className="text-sm mb-2 font-light tracking-widest">SCROLL</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* About brief section - Improved spacing and typography */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <div className="relative">
                  <div className="absolute -left-5 -top-5 w-24 h-24 bg-black/5 rounded-full z-0" />
                  <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-black/5 rounded-full z-0" />
                  <ImageWithLoading src="/lovable-uploads/dbb58a27-7644-4fe0-9490-238426e6e1cf.png" alt="Sol Solange profile" className="rounded-none shadow-xl z-10 relative" width="100%" height="auto" clickable={true} />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.3}>
                <span className="inline-block px-3 py-1 bg-black/5 text-black rounded-none text-xs font-medium mb-6 tracking-widest">
                  A BIT ABOUT ME
                </span>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-black mb-8 negative-tracking">
                  Hello, I'm Sol Solange
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed font-light text-lg">
                  I'm a Rwandan content creator, travel blogger, photographer, and poet passionate about showcasing the beauty 
                  of Rwanda and beyond. Through my "Uko nageze" series, I share immersive travel experiences that capture the 
                  essence of the places I visit.
                </p>
                <p className="text-gray-700 mb-10 leading-relaxed font-light text-lg">
                  My journey reflects a deep passion for storytelling and a commitment to changing lives through art. I've been 
                  featured in publications highlighting my artistic endeavors and continue to inspire others through my creative work.
                </p>
                <Link to="/about" className="inline-flex items-center text-black font-medium hover:underline">
                  Learn more about my story <ArrowRight size={16} className="ml-2" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section - With outline icons and improved spacing */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What I Do" subtitle="I combine my passion for travel, photography, and storytelling to create immersive content that transports you to the heart of Rwanda and beyond." centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {[{
            icon: <Camera className="h-10 w-10 text-black stroke-[1]" />,
            title: "Photography",
            description: "Capturing breathtaking landscapes, vibrant cultures, and authentic moments through my lens."
          }, {
            icon: <BookOpen className="h-10 w-10 text-black stroke-[1]" />,
            title: "Travel Blogging",
            description: "Documenting my journeys through the 'Uko nageze' series, sharing insights and perspectives."
          }, {
            icon: <Map className="h-10 w-10 text-black stroke-[1]" />,
            title: "Storytelling",
            description: "Weaving narratives that bring destinations to life, highlighting the unique stories of each place."
          }, {
            icon: <Sun className="h-10 w-10 text-black stroke-[1]" />,
            title: "Poetry & Art",
            description: "Expressing the beauty of experiences through poetic words and artistic expression."
          }].map((item, index) => <AnimatedSection key={index} delay={0.15 * index}>
                <div className="bg-white p-10 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="mb-6 p-4 bg-black/5 rounded-none w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4 text-black">{item.title}</h3>
                  <p className="text-black flex-grow font-light">{item.description}</p>
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Services" subtitle="Expertise and support to help you explore Rwanda and beyond, whether you're a traveler, hospitality professional, or aspiring content creator." centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[{
            icon: <Compass className="h-16 w-16 text-black stroke-[1]" />,
            title: "Guidance",
            description: "Personalized travel planning and expert guidance to help you discover the hidden gems of Rwanda and make the most of your journey.",
            features: ["Customized itineraries", "Local insights", "Cultural experiences"]
          }, {
            icon: <Building className="h-16 w-16 text-black stroke-[1]" />,
            title: "Consultancy in Hospitality",
            description: "Professional consulting services for hospitality businesses looking to enhance their offerings and create authentic experiences.",
            features: ["Business strategy", "Customer experience", "Cultural integration"]
          }, {
            icon: <GraduationCap className="h-16 w-16 text-black stroke-[1]" />,
            title: "Training Programs",
            description: "Learn the art of travel content creation and storytelling through our specialized workshops and training sessions.",
            features: ["Photography skills", "Travel blogging", "Digital storytelling"]
          }].map((service, index) => <AnimatedSection key={index} delay={0.15 * index}>
                <div className="bg-white border border-black/10 p-10 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="mb-6 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-black text-left">{service.title}</h3>
                  <p className="text-black mb-6 font-light text-left">{service.description}</p>
                  <ul className="mt-auto space-y-2">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-black">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                        <span className="font-light">{feature}</span>
                      </li>)}
                  </ul>
                  <Link to="/contact" className="mt-8 text-black font-medium inline-flex items-center justify-center hover:underline">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Featured Travel Stories Section - Improved typography and spacing */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Uko nageze" subtitle="A glimpse into my travel adventures and the stories behind them. Join me as I explore breathtaking destinations and share unique cultural experiences." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[{
            image: "/lovable-uploads/939bc6ad-3b01-452a-b566-c80b0cca8f63.png",
            title: "Tea Fields of Rwanda",
            excerpt: "Exploring the lush green landscapes of Rwanda's famous tea plantations and the stories of the people behind the tea.",
            location: "Nyungwe, Rwanda"
          }, {
            image: "/lovable-uploads/1cf569b0-e550-4575-ad24-c92bc92b0045.png",
            title: "Walking the Great Wall",
            excerpt: "An unforgettable journey along one of humanity's greatest architectural achievements and the lessons learned along the way.",
            location: "Beijing, China"
          }, {
            image: "/lovable-uploads/65904a35-c985-4fa6-9b2e-93d969954191.png",
            title: "Urban Exploration",
            excerpt: "Discovering the vibrant city life, modern architecture, and cultural contrasts of bustling metropolitan areas.",
            location: "Shanghai, China"
          }].map((story, index) => <AnimatedSection key={index} delay={0.15 * index}>
                <div className="rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full flex flex-col card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithLoading src={story.image} alt={story.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" clickable={true} />
                    <div className="absolute bottom-0 left-0 bg-black text-white px-3 py-1 text-xs font-medium">
                      {story.location}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-playfair font-bold mb-4 text-black">{story.title}</h3>
                    <p className="text-black mb-6 flex-grow font-light">{story.excerpt}</p>
                    <Link to="/blog" className="text-black font-medium inline-flex items-center hover:underline mt-auto">
                      Read more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>)}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/blog" className="inline-flex items-center justify-center px-8 py-4 border border-black text-black font-medium rounded-none hover:bg-black hover:text-white transition-colors duration-300">
              View All Stories <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Photos Section - With clickable images */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Through My Lens" subtitle="A selection of my favorite captures from around the world, each telling its own unique story." centered={true} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {["/lovable-uploads/4db7b8f6-8163-4ae5-80de-ebc147bad58a.png", "/lovable-uploads/6f602863-70f2-4f59-9010-18a9b27a836c.png", "/lovable-uploads/939376a4-8df1-4ec5-8f90-e90152920ea6.png", "/lovable-uploads/fe7b80f4-9044-45a5-989d-abf3c61c3f37.png", "/lovable-uploads/1def1eae-d5fd-4380-b2f2-f88da0cd35ca.png", "/lovable-uploads/58cefb54-00ba-4a06-8532-6207a0ad33e7.png", "/lovable-uploads/e1969758-d885-4924-ab1a-fe68311d53be.png", "/lovable-uploads/3d42b57b-84dd-400e-be07-806c80f9dade.png"].map((image, index) => <AnimatedSection key={index} delay={0.05 * index}>
                <div className={`rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${index === 0 || index === 3 || index === 4 || index === 7 ? 'row-span-2' : ''}`}>
                  <div className="relative group h-full">
                    <ImageWithLoading src={image} alt={`Travel photograph ${index + 1}`} className="w-full h-full object-cover" clickable={true} />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link to="/portfolio" className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-none hover:bg-white/20 transition-colors duration-300">
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>)}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-black text-black font-medium rounded-none hover:bg-black hover:text-white transition-colors duration-300">
              Explore Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 negative-tracking">
              Let's Work Together
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
              Looking to collaborate on a project or feature my work? I'm open to partnerships
              that align with my vision of storytelling and authentic representation.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium rounded-none hover:bg-white/90 transition-colors duration-300 shadow-lg tracking-wide">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>;
};
export default Index;