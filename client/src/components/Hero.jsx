import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountdownTimer from './ui/CountdownTimer';
import ParticleBackground from './ui/ParticleBackground';

// Import your images
import jitacmLogo from '../assets/images/jitacm.png';
import hackbitsLogo from '../assets/images/hackbits3.0.png';
import jitlogo from '../assets/images/jitlogo.png';
import astronautEarth from '../assets/images/astronaut-earth.png';
import astronaut2 from '../assets/images/astronaut2.png';
import earthImg from '../assets/images/earth.png';

const Hero = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const earthY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const leftAstronautY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const rightAstronautY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const handleRegisterClick = () => {
    window.open('https://forms.google.com/your-registration-form', '_blank');
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#050b1a] to-black"
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0">
        {/* Star Field */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Subtle Nebula Glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 229, 255, 0.1) 0%, transparent 50%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Particle Background */}
        <ParticleBackground />
      </div>

      {/* Earth at Bottom - Centered */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center pointer-events-none z-10"
        style={{ y: earthY }}
      >
        <div className="relative w-[600px] md:w-[800px] lg:w-[1000px]">
          {/* Earth Glow */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[200px] md:h-[300px] rounded-t-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 150, 255, 0.3) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
          {/* Earth Image */}
          <img
            src={earthImg}
            alt="Earth"
            className="w-full h-auto relative z-10 opacity-90"
          />
        </div>
      </motion.div>

      {/* Left Astronaut */}
      <motion.div
        style={{ y: leftAstronautY }}
        animate={{
          y: isMobile ? [-3, 3, -3] : [-8, 8, -8],
          rotate: isMobile ? [-1, 1, -1] : [-2, 2, -2]
        }}
        transition={{
          duration: isMobile ? 5 : 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute left-[0%] top-[30%] z-20 hidden lg:block"
      >
        <motion.img
          src={astronaut2}
          alt="Astronaut floating left"
          className="w-[320px] xl:w-[380px] relative"
          animate={{
            filter: [
              'drop-shadow(0 0 12px rgba(255, 0, 255, 0.2))',
              'drop-shadow(0 0 20px rgba(0, 229, 255, 0.15))',
              'drop-shadow(0 0 12px rgba(255, 0, 255, 0.2))'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Right Astronaut */}
      <motion.div
        style={{ y: rightAstronautY }}
        animate={{
          y: isMobile ? [-5, 4.5, -5] : [-10, 9.5, -10],
          rotate: isMobile ? [-1, 0.5, -1] : [-2, 1.5, -2]
        }}
        transition={{
          duration: isMobile ? 6 : 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-[0%] top-[25%] z-20 hidden lg:block"
      >
        <motion.img
          src={astronautEarth}
          alt="Astronaut floating right"
          className="w-[460px] xl:w-[480px] relative"
          animate={{
            filter: [
              'drop-shadow(0 0 15px rgba(0, 229, 255, 0.2))',
              'drop-shadow(0 0 25px rgba(255, 0, 255, 0.15))',
              'drop-shadow(0 0 15px rgba(0, 229, 255, 0.2))'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-10">

          {/* Three Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-full max-w-4xl mx-auto mb-6 md:mb-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
              {/* Image 1 - JIT ACM */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="flex items-center justify-center p-2 h-20 sm:h-24 md:h-28 lg:h-40">
                  <img
                    src={jitacmLogo}
                    alt="JIT ACM"
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>

              {/* Image 2 - JIT Logo */}
              {/* <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="flex items-center justify-center p-2 h-20 sm:h-24 md:h-28 lg:h-32">
                  <img
                    src={jitlogo}
                    alt="JIT Logo"
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div> */}

              {/* Image 3 - HACKBITS 3.0 */}
              {/* <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="flex items-center justify-center p-2 h-20 sm:h-24 md:h-28 lg:h-32">
                  <img
                    src={hackbitsLogo}
                    alt="HACKBITS 3.0"
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4"
          >
            <p className="text-sky-300 text-2xl sm:text-3xl md:text-4xl font-space font-bold">
              JIT ACM STUDENT CHAPTER
            </p>
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-space mt-2">
              PRESENTS
            </p>
          </motion.div>

          {/* Main Title */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center w-full"
            style={{ scale: titleScale }}
          >
            <motion.h1
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-orbitron font-black mb-3"
            >
              <div className="flex items-center justify-center p-1 h-20 sm:h-30 md:h-30 lg:h-40">
                <img
                  src={hackbitsLogo}
                  alt="HACKBITS 3.0"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.h1>

            {/* Tagline */}
            {/* <motion.p
              variants={itemVariants}
              className="text-white text-lg sm:text-xl md:text-2xl mb-4 font-space italic"
            >
              "Explore Innovation Beyond Limits"
            </motion.p> */}

            {/* Innovate Build Compete */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 sm:gap-6 mb-6"
            >
              {['Innovate', 'Build', 'Compete'].map((text) => (
                <span
                  key={text}
                  className="text-sky-300 text-base sm:text-lg md:text-xl font-space font-semibold drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]"
                >
                  {text}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/80 text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-space leading-relaxed px-4"
            >
              Join us for an unforgettable experience at Hackblitz, where innovation meets competition!
              Participate in an intense 2-days hackathon at Jhulelal Institute of Technology, Lonara, Nagpur,
              organized by the ACM Student Chapter. Showcase your skills for a chance to win exciting prizes
              and exclusive goodies!
            </motion.p>

            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="mb-6">
              <CountdownTimer targetDate="2026-03-24T08:00:00" />
            </motion.div>

            {/* Register Button */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group backdrop-blur-md bg-white/5 border-2 border-sky-300/50 rounded-full px-8 py-3 md:px-10 md:py-4 text-white font-orbitron text-base md:text-lg font-bold tracking-wider relative overflow-hidden hover:border-sky-300 transition-all duration-300"
                onClick={handleRegisterClick}
              >
                <span className="relative z-10 flex items-center gap-2">
                  REGISTER NOW
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-300/0 via-sky-300/20 to-sky-300/0"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { label: 'Days', value: '2', icon: '📋' },
                { label: 'Duration', value: '16h', icon: '⏰' },
                { label: 'Team Size', value: '2-4', icon: '👥' },
                { label: 'Dates', value: '24-25 ', icon: '✅' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                  <div className="relative bg-black/30 backdrop-blur-sm border border-sky-300/70 rounded-xl p-4 text-center hover:border-sky-300/40 transition-all duration-300">
                    <span className="text-3xl mb-2 block">{stat.icon}</span>
                    <div className="text-2xl font-bold text-sky-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/100 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-sky-300/30 flex justify-center">
          <div className="w-1.5 h-2 bg-sky-300/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;