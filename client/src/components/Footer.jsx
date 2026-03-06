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
    { name: 'Why HackBits', href: '#whyhackbits' },
    { name: 'Event Flow', href: '#eventflow' },
    { name: 'Rules', href: '#rules' },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="relative bg-space-dark border-t border-neon-blue/20 py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-space-purple/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-orbitron text-2xl font-bold mb-4">
              <span className="text-neon-blue">HACK</span>
              <span className="text-neon-magenta">BITS</span>
              <span className="text-neon-cyan"> 3.0</span>
            </h3>
            <p className="text-gray-400 text-sm font-space">
              JIT ACM  PRESENT
            </p>
            <p className="text-gray-400 text-sm font-space mt-2">
              Jhulelal Institute of Technology, Nagpur
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-orbitron text-neon-blue mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm font-space"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-orbitron text-neon-magenta mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-space">
              <li>Email: hackbits@sbjit.edu.in</li>
              <li>Phone: +91 XXX XXX XXXX</li>
              <li>Location: Nagpur, India</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-orbitron text-neon-cyan mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:border-neon-magenta hover:text-neon-magenta transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="pt-8 border-t border-neon-blue/20 text-center"
        >
          <p className="text-gray-500 text-sm font-space">
            © {currentYear} HACKBITS 3.0. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;