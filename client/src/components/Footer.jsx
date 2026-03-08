import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why HackBlitz', href: '#whyhackbits' },
    { name: 'Event Flow', href: '#eventflow' },
    { name: 'Rules', href: '#rules' },
  ];

  const socialLinks = [
    { 
      name: 'twitter', 
      icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
      gradient: 'from-sky-300 to-blue-400',
      color: 'sky-300'
    },
    { 
      name: 'instagram', 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z',
      gradient: 'from-sky-300 to-blue-400',
      color: 'sky-300'
    },
    { 
      name: 'linkedin', 
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      gradient: 'from-sky-300 to-blue-400',
      color: 'sky-300'
    },
    { 
      name: 'github', 
      icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z',
      gradient: 'from-sky-300 to-blue-400',
      color: 'sky-300'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const glowVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000] border-t border-sky-300/20 py-16 overflow-hidden">
      {/* Deep Space Background - Updated to skyblue */}
      <div className="absolute inset-0">
        {/* Nebula Effects */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
            filter: 'blur(80px)'
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Floating Particles - Updated to skyblue */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#38BDF8' : '#0EA5E9',
                filter: 'blur(1px)',
                opacity: 0.2
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Shooting Stars - Updated to skyblue */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
              style={{
                top: `${Math.random() * 30}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
                filter: 'blur(2px)'
              }}
              animate={{
                x: [0, 400],
                y: [0, 200],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: i * 7,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay - Updated to skyblue */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.02) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="col-span-1 relative group">
            {/* Glow Effect - Updated to skyblue */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-300/20 via-sky-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative">
              <motion.h3 
                className="font-orbitron text-3xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-sky-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">HACK</span>
                <span className="text-sky-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">BLITZ</span>
                <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]"> 3.0</span>
              </motion.h3>
              
              {/* Description - White text */}
              <p className="text-white/70 text-sm font-space relative">
                JIT ACM STUDENT CHAPTER PRESENT
                <motion.span 
                  className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-sky-300 to-blue-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />
              </p>
              <p className="text-white/60 text-sm font-space mt-2">
                Jhulelal Institute of Technology, Nagpur
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h4 
              className="font-orbitron text-sky-300 mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Quick Links
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-sky-300 transition-colors duration-300 text-sm font-space flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-1 h-1 rounded-full bg-sky-300 opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h4 
              className="font-orbitron text-sky-300 mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Contact
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.h4>
            <ul className="space-y-3">
              {[
                { icon: '📧', text: 'hackbits@jit.edu.in' },
                { icon: '📱', text: '+91 XXX XXX XXXX' },
                { icon: '📍', text: 'Nagpur, India' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="text-white/60 text-sm font-space flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] text-sky-300">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-sky-300 transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h4 
              className="font-orbitron text-sky-300 mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Follow Us
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  className="relative group"
                >
                  {/* Glow Effect - Skyblue */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  
                  {/* Icon Container - Skyblue */}
                  <div className="relative w-12 h-12 rounded-full border border-sky-300/30 flex items-center justify-center text-sky-300 hover:border-sky-300 hover:text-sky-300 transition-all duration-300 backdrop-blur-sm bg-black/20 overflow-hidden">
                    <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                    
                    {/* Shimmer Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Star Count (Decorative) - Updated to skyblue/white */}
            <motion.div 
              className="mt-4 flex items-center gap-2 text-white/50 text-xs"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sky-300">✦</span>
              <span>Join our cosmic community</span>
              <span className="text-sky-300">✦</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mt-12"
        >
          {/* Animated Border - Updated to skyblue */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, #38BDF8, #0EA5E9, #38BDF8, transparent)',
              filter: 'blur(2px)'
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.95, 1, 0.95]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="pt-8 text-center relative">
            {/* Floating Orbs - Updated to skyblue */}
            <motion.div
              className="absolute left-1/4 -top-4 w-16 h-16 bg-sky-300/10 rounded-full blur-2xl"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute right-1/4 -bottom-4 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl"
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Copyright text - White */}
            <p className="text-white/50 text-sm font-space relative z-10">
              © {currentYear} HACKBLITZ 3.0. All rights reserved. 
              <motion.span 
                className="block text-xs mt-1 text-sky-300/50"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Made with 💻 in the cosmos
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Cosmic Divider - Updated to skyblue */}
        <motion.div 
          className="w-full h-px mt-8 relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;