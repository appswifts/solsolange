
import { Link } from 'react-router-dom';
import { Instagram, Mail, Heart, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">Sol Solange</h3>
            <p className="text-gray-300 max-w-md">
              Travel blogger, photographer, and storyteller capturing the vibrant cultures and landscapes 
              of Rwanda and beyond.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/sol____solange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:solnishimwe3@gmail.com"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Uko nageze
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-playfair">Contact</h4>
            <p className="flex items-center text-gray-300">
              <MapPin size={16} className="mr-2" /> Kigali, Rwanda
            </p>
            <p className="text-gray-300">
              <a
                href="mailto:solnishimwe3@gmail.com"
                className="hover:text-primary transition-colors duration-300"
              >
                solnishimwe3@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mt-4">
              For collaborations, inquiries, or just to say hello, feel free to reach out!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Marie Solange Nishimwe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-primary" /> in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
