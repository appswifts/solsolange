
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Uko nageze' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="font-playfair font-bold text-2xl text-gray-900">
              Sol Solange
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <motion.div
              className="ml-10 flex items-center space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={childVariants}>
                  <Link
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? 'text-primary font-semibold'
                        : 'text-gray-800 hover:text-primary'
                    } transition-colors duration-300 px-3 py-2 text-sm font-medium story-link`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={childVariants} className="flex space-x-4 items-center">
                <a
                  href="https://instagram.com/sol____solange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:solnishimwe3@gmail.com"
                  className="text-gray-800 hover:text-primary transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                isActive(link.path)
                  ? 'text-primary font-semibold'
                  : 'text-gray-800 hover:text-primary'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-6 px-3 py-3">
            <a
              href="https://instagram.com/sol____solange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:solnishimwe3@gmail.com"
              className="text-gray-800 hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
