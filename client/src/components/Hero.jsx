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
import group from '../assets/images/group.png';
import clock from '../assets/images/clock.png';
import submission from '../assets/images/submission.png';
import tick from '../assets/images/tick.png';

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
      {/* Deep Space Background - Optimized for mobile */}
      <div className="absolute inset-0">
        {/* Star Field - Reduced for mobile */}
        <div className="absolute inset-0">
          {[...Array(isMobile ? 60 : 150)].map((_, i) => (
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

      {/* Earth at Bottom - Centered - Responsive sizing */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center pointer-events-none z-10"
        style={{ y: earthY }}
      >
        <div className="relative w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px]">
          {/* Earth Glow */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] rounded-t-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 150, 255, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px) sm:blur(30px) md:blur(40px)'
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

      {/* Left Astronaut - Hidden on mobile, visible on desktop */}
      <motion.div
        style={{ y: leftAstronautY }}
        animate={{
          y: [-8, 8, -8],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute left-[0%] top-[30%] z-20 hidden lg:block"
      >
        <motion.img
          src={astronaut2}
          alt="Astronaut floating left"
          className="w-[280px] xl:w-[320px] 2xl:w-[380px] relative"
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

      {/* Right Astronaut - Hidden on mobile, visible on desktop */}
      <motion.div
        style={{ y: rightAstronautY }}
        animate={{
          y: [-10, 9.5, -10],
          rotate: [-2, 1.5, -2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-[0%] top-[25%] z-20 hidden lg:block"
      >
        <motion.img
          src={astronautEarth}
          alt="Astronaut floating right"
          className="w-[400px] xl:w-[440px] 2xl:w-[480px] relative"
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
        <div className="flex flex-col items-center justify-center min-h-screen py-8 sm:py-10">

          {/* Three Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-full max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8"
          >
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Image 1 - JIT ACM */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="flex items-center justify-center p-1 h-[110px] sm:h-[120px] md:h-[130px] lg:h-[150px] xl:h-[170px]">
                  <img
                    src={jitacmLogo}
                    alt="JIT ACM"
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* College Info - Responsive text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-3 sm:mb-4"
          >
            <p className="text-sky-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-space font-bold px-2">
              JIT ACM STUDENT CHAPTER
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-space mt-1 sm:mt-2">
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
              className="font-orbitron font-black mb-2 sm:mb-3"
            >
              <div className="flex items-center justify-center p-1 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36">
                <img
                  src={hackbitsLogo}
                  alt="HACKBITS 3.0"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.h1>

            {/* Innovate Build Compete - Responsive */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6"
            >
              {['Innovate', 'Build', 'Compete'].map((text) => (
                <span
                  key={text}
                  className="text-sky-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-space font-semibold drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]"
                >
                  {text}
                </span>
              ))}
            </motion.div>

            {/* Description - Responsive text */}
            <motion.p
              variants={itemVariants}
              className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto font-space leading-relaxed px-3 sm:px-4 mb-4 sm:mb-5 md:mb-6"
            >
              Join us for an unforgettable experience at Hackblitz, where innovation meets competition!
              Participate in an intense 2-days hackathon at Jhulelal Institute of Technology, Lonara, Nagpur,
              organized by the ACM Student Chapter. Showcase your skills for a chance to win exciting prizes
              and exclusive goodies!
            </motion.p>

            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6">
              <CountdownTimer targetDate="2026-03-24T08:00:00" />
            </motion.div>

            {/* Register Button - Responsive */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mb-6 sm:mb-7 md:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group backdrop-blur-md bg-white/5 border-2 border-sky-300/50 rounded-full px-6 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 text-white font-orbitron text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wider relative overflow-hidden hover:border-sky-300 transition-all duration-300"
                onClick={handleRegisterClick}
              >
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  REGISTER NOW
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform text-sky-300"
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

            {/* Quick Stats - Responsive grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto px-2"
            >
              {[
                { label: 'Days', value: '2', icon: submission },
                { label: 'Duration', value: '16h', icon: clock },
                { label: 'Team Size', value: '2-4', icon: group },
                { label: 'Dates', value: '24-25', icon: tick }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                  <div className="relative bg-black/30 backdrop-blur-sm border border-sky-300/70 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center hover:border-sky-300/40 transition-all duration-300">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-10 mx-auto mb-1 sm:mb-2 object-contain"
                    />
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-sky-300">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-white/100 mt-0.5 sm:mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive sizing */}
      <motion.div
        className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 z-40"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 rounded-full border-2 border-sky-300/30 flex justify-center">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-sky-300/50 rounded-full mt-1.5 sm:mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;