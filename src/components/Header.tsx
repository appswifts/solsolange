
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/blog', label: 'UKO NAGEZE' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
      isScrolled ? 'py-2 bg-black/70' : 'py-3 sm:py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-playfair">
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">SOL.</span>
          <span className="text-base sm:text-lg md:text-xl tracking-wide ml-1 font-light text-white/80">SOLANGE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-inter ${
                isActive(link.path)
                  ? 'text-white font-medium'
                  : 'text-white/70 hover:text-white transition-colors'
              } extra-spacing`}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.div
                  className="h-[1px] bg-white mt-1"
                  layoutId="navIndicator"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[56px] bg-black flex flex-col z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col py-6 px-6 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-lg ${
                      isActive(link.path)
                        ? 'text-white font-medium'
                        : 'text-white/70'
                    } font-inter extra-spacing flex items-center justify-between`}
                  >
                    {link.label}
                    <ArrowRight size={16} className={isActive(link.path) ? 'opacity-100' : 'opacity-0'} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
