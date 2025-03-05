
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-3xl font-playfair font-bold tracking-wider">SOL.</h3>
              <span className="text-lg tracking-wide text-white/80 block">SOLANGE</span>
            </Link>
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              Capturing the heart and soul of Rwanda through my lens and words in the "Uko nageze" series.
            </p>
            <div className="flex space-x-5">
              <a href="https://instagram.com/sol____solange" target="_blank" rel="noopener noreferrer" 
                 className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:solnishimwe3@gmail.com" 
                 className="text-white/70 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-medium uppercase mb-5 extra-spacing">Pages</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Uko nageze', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : item === 'Uko nageze' ? '/blog' : `/${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white text-sm font-inter transition-colors inline-flex items-center"
                  >
                    <span>{item}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Recent Posts */}
          <div className="col-span-1">
            <h4 className="text-sm font-medium uppercase mb-5 extra-spacing">Recent Stories</h4>
            <ul className="space-y-4">
              {[
                { title: 'Tea Fields of Rwanda', link: '/blog/tea-fields' },
                { title: 'Walking the Great Wall', link: '/blog/great-wall' },
                { title: 'Urban Exploration', link: '/blog/urban-exploration' }
              ].map((post, index) => (
                <li key={index} className="group">
                  <Link 
                    to={post.link} 
                    className="text-white/70 hover:text-white text-sm font-inter transition-colors inline-flex items-center"
                  >
                    <span>{post.title}</span>
                    <ExternalLink size={12} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-sm font-medium uppercase mb-5 extra-spacing">Contact</h4>
            <p className="text-white/70 text-sm mb-4">
              Available for collaborations, partnerships, and creative projects.
            </p>
            <a 
              href="mailto:solnishimwe3@gmail.com" 
              className="inline-flex items-center text-white border-b border-white/40 pb-1 hover:border-white transition-colors"
            >
              <span className="mr-2 text-sm">solnishimwe3@gmail.com</span>
              <Mail size={14} />
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-xs">
          <p>© {currentYear} Sol Solange. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
