import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-space font-semibold text-sm sm:text-base transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-blue to-neon-magenta text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:scale-105',
    secondary: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-space-dark hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]',
    outline: 'border border-neon-purple/30 text-gray-300 hover:border-neon-purple hover:text-neon-purple hover:bg-neon-purple/10',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;