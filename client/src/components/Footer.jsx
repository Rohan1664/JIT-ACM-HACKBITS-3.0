import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';

/* ── Variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why HackBlitz', href: '#whyhackbits' },
    { name: 'Event Flow', href: '#eventflow' },
    { name: 'Rules', href: '#rules' },
    { name: 'Our Team', href: '#teampage' },
  ];

  const socialLinks = [
    { name: 'instagram', icon: instagramIcon, link: 'https://instagram.com/acm_jit' },
    { name: 'linkedin', icon: linkedinIcon, link: 'https://www.linkedin.com/in/jit-acm-student-chapter' },
    { name: 'github', icon: githubIcon, link: 'https://github.com/jitacm' },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000] border-t border-sky-300/15 py-8 sm:py-10 md:py-12 overflow-hidden mt-12 sm:mt-16 md:mt-20"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nebula */}
        <div
          className="absolute inset-0 animate-glow-pulse"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.10) 0%, transparent 52%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.10) 0%, transparent 52%)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.015) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main grid ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <motion.h3
              className="font-orbitron text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">HACK</span>
              <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">BLITZ</span>
              <span className="text-cyan-200"> 3.0</span>
            </motion.h3>
            <p className="text-white/65 text-xs sm:text-sm font-space">JIT ACM STUDENT CHAPTER</p>
            <p className="text-white/50 text-xs sm:text-sm font-space mt-1">Jhulelal Institute of Technology, Nagpur</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map(l => (
                <motion.li key={l.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 350, damping: 22 }}>
                  <a href={l.href} className="text-white/65 hover:text-sky-300 transition-colors duration-250 text-xs sm:text-sm font-space flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-sky-400/40 group-hover:bg-sky-300 transition-colors duration-250 flex-shrink-0" />
                    {l.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[{ icon: '📧', text: 'acmjit@jitnagpur.edu.in' }, { icon: '📍', text: 'Nagpur, India' }].map((item, i) => (
                <motion.li
                  key={i}
                  className="text-white/65 text-xs sm:text-sm font-space flex items-center gap-2 sm:gap-3 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                >
                  <span className="text-sky-300 text-base sm:text-lg flex-shrink-0">{item.icon}</span>
                  <span className="group-hover:text-sky-300 transition-colors duration-250 break-all">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map(s => (
                <motion.a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-sky-300/0 group-hover:bg-sky-300/20 rounded-full blur-lg transition-all duration-350" />
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-sky-300/25 flex items-center justify-center hover:border-sky-300/60 transition-all duration-300 bg-black/25 backdrop-blur-sm overflow-hidden">
                    <img src={s.icon} alt={s.name} className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-250" />
                    {/* CSS shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out" />
                  </div>
                </motion.a>
              ))}
            </div>
            <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-sky-400/60 font-space">
              ✦ Join our cosmic community ✦
            </p>
          </motion.div>

          {/* Map */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4">Location</h4>
            <div className="rounded-xl overflow-hidden border border-sky-300/25 shadow-[0_0_20px_rgba(56,189,248,0.15)] max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">
              <iframe
                title="JIT Location"
                src="https://www.google.com/maps?q=Jhulelal+Institute+of+Technology+Nagpur&output=embed"
                width="100%"
                height="160"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-[140px] sm:h-[160px] md:h-[180px]"
              />
            </div>
            <p className="text-white/50 text-[10px] sm:text-xs mt-2 font-space">Jhulelal Institute of Technology, Nagpur</p>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative mt-8 sm:mt-10 md:mt-12"
        >
          {/* Divider scan-line */}
          <div className="relative h-px w-full mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
          </div>

          <div className="text-center">
            <p className="text-white/50 text-xs sm:text-sm font-space">
              © {currentYear} HACKBLITZ 3.0. All rights reserved.
            </p>
            <p className="text-sky-500/50 text-[10px] sm:text-xs mt-1 font-space">
              Made with 💻 in the cosmos
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;