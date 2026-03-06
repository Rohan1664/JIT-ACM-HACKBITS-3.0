import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './ui/Button';
import ParticleBackground from './ui/ParticleBackground';
import CountdownTimer from './ui/CountdownTimer';

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

      {/* Left Astronaut - Increased height */}
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
        className="absolute left-[3%] top-[30%] z-20 hidden lg:block"
      >
        <motion.img
          src={astronaut2}
          alt="Astronaut floating left"
          className="w-[220px] xl:w-[280px] relative"
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

      {/* Right Astronaut - Increased height */}
      <motion.div
        style={{ y: rightAstronautY }}
        animate={{
          y: isMobile ? [-5, 5, -5] : [-10, 10, -10],
          rotate: isMobile ? [-1, 1, -1] : [-2, 2, -2]
        }}
        transition={{
          duration: isMobile ? 6 : 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-[3%] top-[25%] z-20 hidden lg:block"
      >
        <motion.img
          src={astronautEarth}
          alt="Astronaut floating right"
          className="w-[260px] xl:w-[320px] relative"
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

      {/* Main Content Container - Centered */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          
          {/* Three Images - Seamlessly blended with background */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-full max-w-4xl mx-auto mb-4 md:mb-6"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { src: jitacmLogo, alt: 'JIT ACM' },
                { src: jitlogo, alt: 'JIT Logo' },
                { src: hackbitsLogo, alt: 'HACKBITS 3.0' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  {/* No background, no border - just the logo */}
                  <div className="flex items-center justify-center p-2 h-20 sm:h-24 md:h-28 lg:h-32">
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* College Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-1 md:mb-2"
          >
            <p className="text-[#00E5FF]/70 text-xs sm:text-sm md:text-base font-space">
              Jhulelal Institute of Technology Nagpur
            </p>
            <p className="text-gray-400 text-[10px] sm:text-xs font-space">
              An Autonomous Institute
            </p>
          </motion.div>

          {/* Department Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-center mb-2 md:mb-3"
          >
            <span className="text-[#22D3EE] text-[10px] sm:text-xs md:text-sm font-space tracking-wider">
              JIT ACM PRESENT
            </span>
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
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2"
            >
              <span className="bg-gradient-to-r from-white via-[#22D3EE] to-[#00E5FF] bg-clip-text text-transparent">
                HACK
              </span>
              <span className="bg-gradient-to-r from-[#FF00FF] via-[#00E5FF] to-[#22D3EE] bg-clip-text text-transparent">
                BITS 3.0
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#00E5FF] text-sm sm:text-base md:text-lg mb-2"
            >
              "Explore Innovation Beyond Limits"
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-2 sm:gap-4 mb-3"
            >
              {['Innovate', 'Build', 'Compete'].map((text, index) => (
                <span 
                  key={text} 
                  className={`
                    ${index === 0 ? 'text-[#00E5FF]' : index === 1 ? 'text-[#FF00FF]' : 'text-[#22D3EE]'} 
                    text-xs sm:text-sm md:text-base lg:text-lg
                  `}
                >
                  {text}
                </span>
              ))}
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-4 max-w-2xl mx-auto font-space leading-relaxed px-3"
            >
              Join us for an exhilarating 16-hour coding marathon where innovation meets execution. 
              Build groundbreaking solutions, collaborate with brilliant minds, and compete for glory.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="mb-4">
              <CountdownTimer targetDate="2026-03-23T08:00:00" />
            </motion.div>

            {/* Launch Mission Button */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group backdrop-blur-md bg-white/5 border border-[#00E5FF]/30 rounded-full px-6 py-2.5 md:px-8 md:py-3 text-white font-orbitron text-sm md:text-base tracking-wider relative overflow-hidden"
                onClick={handleRegisterClick}
              >
                <span className="relative z-10 flex items-center">
                  Launch Mission
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Subtle hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/0 via-[#FF00FF]/10 to-[#00E5FF]/0"
                  animate={{ 
                    x: ['-100%', '200%']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 hidden sm:block"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border border-[#00E5FF]/30 flex justify-center">
          <div className="w-1 h-2 bg-[#00E5FF]/50 rounded-full mt-1"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;