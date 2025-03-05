
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ImageWithLoading from '../components/ImageWithLoading';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero section */}
      <section className="relative py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                  Marie Solange Nishimwe
                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Known as Sol Solange, I am a Rwandan content creator, travel blogger, photographer, and poet 
                  with a passion for storytelling and showcasing the beauty of Rwanda and beyond.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I gained prominence with my "Uko nageze" series, where I share immersive travel experiences 
                  that capture the essence of the places I visit, the people I meet, and the cultures I encounter.
                </p>
                <div className="flex items-center space-x-4 mt-8">
                  <a 
                    href="https://instagram.com/sol____solange" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300"
                  >
                    Follow on Instagram
                  </a>
                  <a 
                    href="mailto:solnishimwe3@gmail.com"
                    className="px-6 py-2 border border-gray-300 rounded-md hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    Contact Me
                  </a>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.3} direction="left">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-32 h-32 bg-rwanda-blue/10 rounded-full z-0" />
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-rwanda-yellow/10 rounded-full z-0" />
                  <ImageWithLoading
                    src="/lovable-uploads/02b46e3d-52e0-4441-82dd-8594936579ac.png"
                    alt="Sol Solange portrait"
                    className="rounded-lg shadow-xl z-10 relative"
                    width="100%"
                    height="auto"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="My Journey" subtitle="The path that led me to where I am today, capturing the world through my lens and words." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  My journey began in Rwanda, where I was born and raised amidst the country's rich cultural heritage 
                  and breathtaking landscapes. Growing up in this environment fostered my deep appreciation for storytelling 
                  and visual narratives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a personal passion for photography and writing evolved into the "Uko nageze" series, 
                  where I share my travel experiences in a way that invites others to see the world through my eyes. 
                  The phrase "Uko nageze" translates to "how I arrived" or "my journey," reflecting both the physical 
                  journey to different destinations and my personal growth along the way.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beyond travel blogging, I've explored various creative outlets including poetry and singing. 
                  I believe in using art to change lives and have been recognized for these artistic endeavors 
                  in various publications.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="relative h-full flex items-center">
                <div className="rounded-lg overflow-hidden">
                  <ImageWithLoading
                    src="/lovable-uploads/f68467aa-726e-4f06-b473-83b485653688.png"
                    alt="Sol Solange traveling"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Drives Me Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Drives Me" subtitle="The passion and principles that guide my work and creative vision." centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Authentic Storytelling",
                description: "I believe in sharing genuine narratives that capture the essence of a place, its people, and culture without filters or embellishments."
              },
              {
                title: "Cultural Appreciation",
                description: "My work is guided by deep respect for diverse cultures and traditions, aiming to promote understanding and appreciation across borders."
              },
              {
                title: "Visual Poetry",
                description: "I strive to create images that speak beyond what's visible, capturing emotions, moments, and stories that resonate with viewers."
              },
              {
                title: "Inspiring Exploration",
                description: "Through my content, I hope to inspire others to venture beyond their comfort zones and discover the beauty that exists in different corners of the world."
              },
              {
                title: "Supporting Communities",
                description: "I'm committed to responsible travel that benefits local communities and highlights sustainable tourism practices."
              },
              {
                title: "Personal Growth",
                description: "Each journey is an opportunity for self-discovery and growth, shaping not just my work but my perspective on life."
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-playfair font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Featured In" subtitle="Publications and platforms that have recognized my work." />
          
          <AnimatedSection>
            <div className="mt-12 p-8 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-900">The New Times Rwanda</h3>
                  <p className="text-gray-600 mb-4">
                    Featured for my "Uko nageze" series and contributions to showcasing Rwanda's natural beauty and cultural heritage through travel content.
                  </p>
                  <p className="text-gray-600">
                    "Marie Solange Nishimwe's vivid storytelling transports readers to the heart of Rwanda's diverse landscapes, offering both locals and international audiences a fresh perspective on the country's tourism potential."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-900">Visit Rwanda Initiative</h3>
                  <p className="text-gray-600 mb-4">
                    Collaborated on content highlighting Rwanda's top destinations, contributing photographs and stories that celebrate the country's natural wonders.
                  </p>
                  <p className="text-gray-600">
                    "Sol Solange's authentic approach to travel content creation aligns perfectly with our mission to showcase Rwanda as a premier destination for sustainable tourism and cultural experiences."
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-r from-rwanda-green/90 to-rwanda-blue/90 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">My Travel Philosophy</h2>
              <p className="text-lg mb-6 leading-relaxed">
                "I believe travel is not just about visiting new places, but about immersing yourself in different 
                cultures, connecting with people, and finding pieces of yourself in corners of the world you never 
                knew existed. Every journey leaves an imprint on your soul, changing how you see the world and 
                your place in it."
              </p>
              <p className="text-lg font-playfair italic">
                - Sol Solange
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Moments Captured" subtitle="A glimpse into my adventures and the beautiful moments I've been fortunate to experience." centered={true} />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              "/lovable-uploads/645724b5-aadd-4a65-a9d9-4593e3a43c3f.png",
              "/lovable-uploads/09094521-8ff5-43a7-9f37-86fdd653b935.png",
              "/lovable-uploads/6f5e5e8c-d86c-4406-8d99-4d7469c5c31f.png",
              "/lovable-uploads/82fa60c4-2d08-4b44-a2b7-5d01e2c40651.png",
              "/lovable-uploads/a6dbe9d4-f7cf-41c4-a6c4-a76a31269f11.png",
              "/lovable-uploads/dbb58a27-7644-4fe0-9490-238426e6e1cf.png"
            ].map((image, index) => (
              <AnimatedSection key={index} delay={0.05 * index}>
                <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <ImageWithLoading
                    src={image}
                    alt={`Travel moment ${index + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              Whether you're interested in collaborating, featuring my work, or simply want to say hello,
              I'd love to hear from you. Reach out and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:solnishimwe3@gmail.com"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Send an Email
              </a>
              <a
                href="https://instagram.com/sol____solange"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Follow on Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
