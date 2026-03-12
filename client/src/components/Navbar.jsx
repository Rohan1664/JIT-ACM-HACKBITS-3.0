import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import your logo image
import jitLogo from '../assets/images/hackbits3.0.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Hackblitz', href: '#whyhackbits' },
    { name: 'Event Flow', href: '#eventflow' },
    { name: 'Rules', href: '#rules' },
    // { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl  border-sky-300/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Image instead of text */}
          <motion.div 
            className="flex items-left"
            whileHover={{ scale: 0.91 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a href="#home" className="flex items-center">
              <img 
                src={jitLogo} 
                alt="JIT Logo" 
                className="h-6 w-auto md:h-10 object-contain"
              />
            </a>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-white/100 hover:text-sky-300 transition-colors duration-300 font-space text-sm tracking-wider"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white/70 hover:text-sky-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;