import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ImageWithLoading from '../components/ImageWithLoading';

// Blog post data (mock data)
const blogPosts = [
  {
    id: 1,
    title: "Uko Nageze: The Tea Fields of Nyungwe",
    excerpt: "Exploring the rolling hills and vibrant green tea plantations nestled in Rwanda's breathtaking Nyungwe region.",
    content: "The journey to Nyungwe's tea plantations began at dawn, with mist still clinging to the hills as we departed Kigali. As the car wound through increasingly verdant landscapes, the urban bustle gave way to the serene rhythm of rural Rwanda...",
    image: "/lovable-uploads/939bc6ad-3b01-452a-b566-c80b0cca8f63.png",
    date: "April 15, 2023",
    author: "Sol Solange",
    location: "Nyungwe, Rwanda",
    categories: ["Nature", "Local Culture", "Landscapes"],
    featured: true
  },
  {
    id: 2,
    title: "Walking the Great Wall: A Journey Through History",
    excerpt: "Stepping back in time on the ancient stones of the Great Wall, where history and breathtaking vistas converge.",
    content: "Standing on the Great Wall of China, with centuries of history beneath my feet and panoramic views stretching to the horizon, I felt both humbled and exhilarated...",
    image: "/lovable-uploads/1cf569b0-e550-4575-ad24-c92bc92b0045.png",
    date: "June 23, 2023",
    author: "Sol Solange",
    location: "Beijing, China",
    categories: ["Historical Sites", "Adventure", "International"],
    featured: true
  },
  {
    id: 3,
    title: "Shanghai Skyline: Urban Beauty in the City of the Future",
    excerpt: "Experiencing the vibrant energy, architectural marvels, and cultural contrasts of China's most dynamic metropolis.",
    content: "The Bund at sunset offers perhaps the most spectacular urban vista I've encountered in my travels. As the last light of day illuminates Shanghai's futuristic skyline...",
    image: "/lovable-uploads/65904a35-c985-4fa6-9b2e-93d969954191.png",
    date: "July 5, 2023",
    author: "Sol Solange",
    location: "Shanghai, China",
    categories: ["Urban", "Architecture", "International"],
    featured: true
  },
  {
    id: 4,
    title: "The Hidden Waterfalls of Eastern Rwanda",
    excerpt: "Discovering the secluded cascades and pristine pools tucked away in Rwanda's eastern wilderness.",
    content: "After a three-hour hike through increasingly dense forest, the sound of rushing water reached us before the view did. Turning a corner on the narrow trail...",
    image: "/lovable-uploads/4db7b8f6-8163-4ae5-80de-ebc147bad58a.png",
    date: "February 12, 2023",
    author: "Sol Solange",
    location: "Eastern Province, Rwanda",
    categories: ["Nature", "Adventure", "Off the Beaten Path"],
    featured: false
  },
  {
    id: 5,
    title: "Traditional Tea Ceremony: The Art of Connection",
    excerpt: "Participating in the intricate rituals and mindful moments of a traditional tea ceremony with local artisans.",
    content: "The tea master's hands moved with practiced precision, each gesture deliberate yet flowing seamlessly into the next. As an honored guest in this small mountain village...",
    image: "/lovable-uploads/6f5e5e8c-d86c-4406-8d99-4d7469c5c31f.png",
    date: "May 30, 2023",
    author: "Sol Solange",
    location: "Gisenyi, Rwanda",
    categories: ["Local Culture", "Food & Drink", "Traditions"],
    featured: false
  },
  {
    id: 6,
    title: "Rwanda's Volcanic Trails: Hiking the Land of a Thousand Hills",
    excerpt: "Conquering the challenging terrain and rewarding summits of Rwanda's iconic volcanic landscapes.",
    content: "The pre-dawn start was worth every minute of lost sleep. As we approached the volcanic peak, the first rays of sunrise illuminated the misty landscape below...",
    image: "/lovable-uploads/a96dfa56-acaf-45a3-bb29-f4982e75d865.png",
    date: "March 18, 2023",
    author: "Sol Solange",
    location: "Volcanoes National Park, Rwanda",
    categories: ["Adventure", "Nature", "Landscapes"],
    featured: false
  },
  {
    id: 7,
    title: "Market Day in Kigali: Colors, Crafts, and Conversations",
    excerpt: "Wandering through the vibrant stalls and meeting the talented artisans of Rwanda's capital city markets.",
    content: "The market came alive at first light, with vendors arranging their colorful wares and the air filling with the mingled scents of fresh produce, handwoven baskets, and wood carvings...",
    image: "/lovable-uploads/0024cb7f-2538-4696-bd1d-28e3ca0772ca.png",
    date: "January 25, 2023",
    author: "Sol Solange",
    location: "Kigali, Rwanda",
    categories: ["Urban", "Local Culture", "Shopping"],
    featured: false
  }
];

const categories = [...new Set(blogPosts.flatMap(post => post.categories))];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero section - Improved with modern styling */}
      <section className="relative py-24 px-6 bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-60">
          <ImageWithLoading
            src="/lovable-uploads/fe7b80f4-9044-45a5-989d-abf3c61c3f37.png"
            alt="Blog header"
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-shadow negative-tracking"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Uko nageze
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join me on my journey as I explore beautiful destinations, experience diverse cultures,
            and share the stories that make each place unique.
          </motion.p>
        </div>
      </section>

      {/* Search and filter section - Improved with modern styling */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search stories..."
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-none w-full focus:ring-black focus:border-black font-light"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select
                className="px-4 py-3 border border-gray-200 rounded-none w-full md:w-auto focus:ring-black focus:border-black font-light"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured posts section - Improved with modern spacing */}
      {selectedCategory === 'All' && searchQuery === '' && (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Featured Stories" 
              subtitle="Explore some of my most memorable adventures and experiences." 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={0.1 * index}>
                  <div className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-60">
                      <ImageWithLoading
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        clickable={true}
                      />
                      <div className="absolute bottom-0 left-0 bg-black text-white px-3 py-1 text-xs font-medium">
                        {post.location}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar size={14} className="mr-1 stroke-[1.5]" /> 
                        <span className="font-light">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-playfair font-bold mb-4 text-black">{post.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow font-light">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-black font-medium inline-flex items-center hover:underline mt-auto"
                      >
                        Read full story <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts section - Improved with modern spacing */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={selectedCategory !== 'All' ? `${selectedCategory} Stories` : "All Stories"} 
            subtitle={searchQuery ? `Showing results for "${searchQuery}"` : "Dive into my travel journal and discover the world through my experiences."}
          />
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl font-light">No stories found. Try adjusting your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12 mt-16">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={0.1 * index}>
                  <div className="flex flex-col md:flex-row bg-white rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-full md:w-2/5 h-64 md:h-auto">
                      <ImageWithLoading
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        clickable={true}
                      />
                    </div>
                    <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((category) => (
                          <span 
                            key={category} 
                            className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-none cursor-pointer hover:bg-gray-200 transition-colors"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold mb-4 text-black">{post.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow font-light">{post.excerpt}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User size={14} className="mr-1 stroke-[1.5]" /> 
                          <span className="mr-4 font-light">{post.author}</span>
                          <Calendar size={14} className="mr-1 stroke-[1.5]" /> 
                          <span className="font-light">{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 stroke-[1.5]" /> 
                          <span className="font-light">{post.location}</span>
                        </div>
                      </div>
                      <div className="mt-8">
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center justify-center px-6 py-3 border border-black text-black font-medium rounded-none hover:bg-black hover:text-white transition-colors duration-300"
                        >
                          Read full story
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter section - Improved with modern styling */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 negative-tracking">
              Subscribe to My Journey
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
              Be the first to know when I publish new stories and travel adventures.
              No spam, just authentic travel experiences delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-none text-gray-900 focus:ring-2 focus:ring-white focus:border-white font-light"
                required
              />
              <button
                type="submit"
                className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-3 rounded-none transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;
