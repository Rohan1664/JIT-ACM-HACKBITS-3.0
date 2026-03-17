import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import jitLogo from '../assets/images/hackbits3.0.avif';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Why Hackblitz', href: '#whyhackbits' },
  { name: 'Rules', href: '#rules' },
  { name: 'Event Flow', href: '#eventflow' },
  { name: 'Our Team', href: '#teampage' },
];

/* ── Framer-motion variants ── */
const navbarVariant = {
  hidden: { y: -70, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkVariant = {
  hidden: { opacity: 0, y: -12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Clip-path panel reveal from right */
const panelVariant = {
  hidden: { clipPath: 'inset(0 0 0 100%)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0 0%)',
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    clipPath: 'inset(0 0 0 100%)',
    opacity: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const mobileLink = {
  hidden: { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, x: 16, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      {/* ── Desktop / Scroll-aware Navbar ── */}
      <motion.nav
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/75 backdrop-blur-2xl border-b border-sky-300/10 shadow-[0_4px_32px_rgba(56,189,248,0.06)]'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex items-center"
            >
              <img
                src={jitLogo}
                alt="Hackblitz 3.0 Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative text-white/85 hover:text-sky-300 transition-colors duration-300
                             font-space text-sm lg:text-base tracking-wide group"
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-sky-300 to-blue-400 transition-all duration-350 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Hamburger */}
            <motion.button
              className="md:hidden text-white/70 hover:text-sky-300 focus:outline-none z-50 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  animate={isMenuOpen
                    ? { d: 'M6 18L18 6M6 6l12 12' }
                    : { d: 'M4 6h16M4 12h16M4 18h16' }
                  }
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              variants={panelVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-64 sm:w-76 z-50 md:hidden
                         bg-gradient-to-b from-[#020b1f] via-[#030d22] to-[#000000]
                         border-l border-sky-300/15 shadow-[−4px_0_40px_rgba(56,189,248,0.08)]
                         overflow-y-auto"
            >
              {/* Subtle shimmer background strip */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent animate-scan-line" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'radial-gradient(ellipse at 80% 10%, rgba(56,189,248,0.08) 0%, transparent 60%)',
                  }}
                />
              </div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col min-h-full">

                {/* Panel header */}
                <div className="flex items-center justify-between mb-8">
                  <img src={jitLogo} alt="Hackblitz 3.0 Logo" className="h-10 w-auto object-contain" />
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-sky-300 p-1.5 rounded-lg hover:bg-white/8 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col space-y-1 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      custom={i}
                      variants={mobileLink}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onClick={handleLinkClick}
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="flex items-center gap-3 text-white/80 hover:text-sky-300
                                 transition-colors duration-250 text-base py-2.5 px-3 rounded-lg
                                 hover:bg-sky-300/6 border border-transparent hover:border-sky-300/15"
                    >
                      <span className="w-1 h-1 rounded-full bg-sky-400/60 flex-shrink-0" />
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Panel footer */}
                <div className="mt-8 pt-5 border-t border-sky-300/15 text-center">
                  <p className="text-xs text-white/40 font-space mb-1">✦ Explore Beyond Limits ✦</p>
                  <p className="text-[10px] text-white/25 font-space">© {currentYear} Hackblitz 3.0</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;