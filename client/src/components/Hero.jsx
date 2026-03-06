import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './ui/Button';
import ParticleBackground from './ui/ParticleBackground';
import CountdownTimer from './ui/CountdownTimer';
import specebg from '../assets/images/specebg.webp';

// Import your three images
import jitacmLogo from '../assets/images/jitacm.png';
import hackbitsLogo from '../assets/images/hackbits3.0.png';
import jitlogo from '../assets/images/jitlogo.png';

// Enhanced Astronaut SVG with more details
const FloatingAstronaut = () => (
  <motion.svg
    width="280"
    height="280"
    viewBox="0 0 280 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-1/4 right-1/4 z-20"
    animate={{
      y: [0, -20, 0, -10, 0],
      rotate: [0, 3, -2, 4, 0],
      filter: [
        'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.3))',
        'drop-shadow(0 0 50px rgba(236, 72, 153, 0.6)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.4))',
        'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.3))'
      ]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Enhanced Helmet with visor reflection */}
    <circle cx="140" cy="90" r="35" fill="white" fillOpacity="0.05" stroke="url(#astronautGradient)" strokeWidth="2.5"/>
    <circle cx="140" cy="90" r="30" fill="white" fillOpacity="0.02" stroke="url(#astronautGradient)" strokeWidth="1.5"/>
    
    {/* Advanced Visor with reflection */}
    <circle cx="152" cy="82" r="12" fill="url(#visorGradient)" stroke="cyan" strokeWidth="1.5"/>
    <circle cx="158" cy="78" r="3" fill="white" fillOpacity="0.9"/>
    <circle cx="148" cy="86" r="1.5" fill="white" fillOpacity="0.6"/>
    
    {/* Life support tubes */}
    <path d="M125 75 L115 65" stroke="url(#astronautGradient)" strokeWidth="2" strokeDasharray="3 3"/>
    <path d="M155 75 L165 65" stroke="url(#astronautGradient)" strokeWidth="2" strokeDasharray="3 3"/>
    
    {/* Enhanced Body with details */}
    <rect x="125" y="125" width="30" height="60" rx="6" fill="white" fillOpacity="0.05" stroke="url(#astronautGradient)" strokeWidth="2.5"/>
    
    {/* Control panel on chest */}
    <rect x="135" y="145" width="10" height="10" rx="2" fill="url(#visorGradient)" fillOpacity="0.3" stroke="cyan" strokeWidth="1"/>
    <circle cx="140" cy="155" r="2" fill="#00ffff" filter="url(#glow)"/>
    
    {/* Enhanced Arms with joints */}
    <path d="M125 140 L100 120" stroke="url(#astronautGradient)" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M155 140 L180 120" stroke="url(#astronautGradient)" strokeWidth="3.5" strokeLinecap="round"/>
    
    {/* Gloved hands */}
    <circle cx="95" cy="115" r="5" fill="url(#astronautGradient)" fillOpacity="0.3" stroke="url(#astronautGradient)" strokeWidth="2"/>
    <circle cx="185" cy="115" r="5" fill="url(#astronautGradient)" fillOpacity="0.3" stroke="url(#astronautGradient)" strokeWidth="2"/>
    
    {/* Enhanced Legs with boots */}
    <path d="M135 185 L125 215" stroke="url(#astronautGradient)" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M145 185 L155 215" stroke="url(#astronautGradient)" strokeWidth="3.5" strokeLinecap="round"/>
    
    {/* Boots */}
    <rect x="118" y="212" width="14" height="8" rx="3" fill="url(#astronautGradient)" fillOpacity="0.2" stroke="url(#astronautGradient)" strokeWidth="1.5"/>
    <rect x="148" y="212" width="14" height="8" rx="3" fill="url(#astronautGradient)" fillOpacity="0.2" stroke="url(#astronautGradient)" strokeWidth="1.5"/>
    
    {/* Advanced Jetpack with thrusters */}
    <rect x="110" y="130" width="12" height="35" rx="3" fill="url(#jetpackGradient)"/>
    <rect x="158" y="130" width="12" height="35" rx="3" fill="url(#jetpackGradient)"/>
    
    {/* Thruster glow */}
    <circle cx="116" cy="165" r="6" fill="url(#thrusterGlow)" filter="url(#glow)"/>
    <circle cx="164" cy="165" r="6" fill="url(#thrusterGlow)" filter="url(#glow)"/>
    
    {/* Antenna */}
    <path d="M140 55 L140 40 L150 35" stroke="url(#astronautGradient)" strokeWidth="2" fill="none"/>
    <circle cx="152" cy="34" r="2" fill="#00ffff" filter="url(#glow)"/>
    
    {/* Gradients and Filters */}
    <defs>
      <linearGradient id="astronautGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9">
          <animate attributeName="stopColor" values="#00ffff;#ff00ff;#00ffff" dur="4s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.6">
          <animate attributeName="stopColor" values="#ff00ff;#00ffff;#ff00ff" dur="4s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#00ffff" stopOpacity="0.9">
          <animate attributeName="stopColor" values="#00ffff;#ff00ff;#00ffff" dur="4s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      
      <radialGradient id="visorGradient">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="40%" stopColor="#00ffff"/>
        <stop offset="70%" stopColor="#ff00ff"/>
        <stop offset="100%" stopColor="#00ffff"/>
        <animate attributeName="gradientTransform" values="scale(1);scale(1.2);scale(1)" dur="3s" repeatCount="indefinite" />
      </radialGradient>
      
      <linearGradient id="jetpackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#00ffff" stopOpacity="0.4"/>
      </linearGradient>
      
      <radialGradient id="thrusterGlow">
        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8"/>
        <stop offset="70%" stopColor="#ff00ff" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </motion.svg>
);

// Enhanced Shooting Stars with trails
const ShootingStars = () => {
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * window.innerWidth,
    startY: Math.random() * window.innerHeight * 0.5,
    delay: i * 2.5,
    duration: 2.5 + Math.random() * 4,
    angle: Math.random() * 30 - 15
  }));

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none"
          initial={{ 
            x: star.startX, 
            y: star.startY, 
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: star.startX + 400,
            y: star.startY + 300,
            opacity: [0, 1, 1, 0.8, 0],
            scale: [0, 1.8, 1.2, 0.5, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          {/* Trail effect */}
          <div 
            className="absolute h-1 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: '100px',
              transform: `rotate(${star.angle}deg)`,
              filter: 'blur(2px)',
              background: 'linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent)'
            }}
          />
          <div 
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'radial-gradient(circle, white, #00ffff, #ff00ff)',
              boxShadow: '0 0 30px #00ffff, 0 0 60px #ff00ff'
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

// Enhanced Particle System for cosmic dust
const CosmicParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#ffffff'
            }, transparent)`,
            filter: 'blur(0.5px)'
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
};

// Orbital Rings Component
const OrbitalRings = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 rounded-full border border-opacity-20"
          style={{
            width: `${700 + i * 150}px`,
            height: `${200 + i * 80}px`,
            border: `2px dashed ${
              i === 0 ? '#00ffff' : i === 1 ? '#ff00ff' : '#00ffff'
            }`,
            boxShadow: `0 0 ${30 + i * 20}px ${
              i === 0 ? 'rgba(0, 255, 255, 0.3)' : i === 1 ? 'rgba(255, 0, 255, 0.3)' : 'rgba(0, 255, 255, 0.3)'
            }`
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const earthY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const astronautY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const starsX = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
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

  // Function to handle register button click
  const handleRegisterClick = () => {
    window.open('https://forms.google.com/your-registration-form', '_blank');
  };

  // Enhanced glow animation for images
  const glowVariants = {
    initial: { 
      boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
      borderColor: 'rgba(0, 255, 255, 0.5)'
    },
    animate: {
      boxShadow: [
        '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(147, 51, 234, 0.2)',
        '0 0 60px rgba(255, 0, 255, 0.4), 0 0 90px rgba(0, 255, 255, 0.3)',
        '0 0 80px rgba(0, 255, 255, 0.3), 0 0 120px rgba(236, 72, 153, 0.3)',
        '0 0 60px rgba(255, 0, 255, 0.4), 0 0 90px rgba(0, 255, 255, 0.3)',
        '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(147, 51, 234, 0.2)'
      ],
      borderColor: [
        'rgba(0, 255, 255, 0.5)',
        'rgba(255, 0, 255, 0.5)',
        'rgba(0, 255, 255, 0.5)'
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep Space Background with Dynamic Nebula */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, #0a0a1a 0%, #030014 50%, #000000 100%)',
        }}
      >
        {/* Moving Nebula Layers */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.3) 0%, transparent 40%)',
            x: starsX
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(0, 255, 255, 0.2) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Original ParticleBackground (kept intact) */}
      <ParticleBackground />
      
      {/* Additional Cosmic Particles */}
      <CosmicParticles />

      {/* Shooting Stars */}
      <ShootingStars />

      {/* Floating Astronaut with enhanced positioning */}
      <motion.div
        style={{ y: astronautY }}
        className="absolute top-[10%] right-[8%] z-20 hidden lg:block"
      >
        <FloatingAstronaut />
        
        {/* Enhanced Lens Flare */}
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,255,0.2) 0%, rgba(147,51,234,0.2) 50%, transparent 80%)',
            filter: 'blur(30px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Enhanced Glowing Earth */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-10"
        style={{ y: earthY }}
      >
        {/* Earth Core with pulsating glow */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] rounded-t-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 100, 255, 0.5) 0%, rgba(0, 255, 255, 0.3) 40%, transparent 80%)',
            filter: 'blur(50px)',
            boxShadow: '0 0 150px rgba(0, 255, 255, 0.4), 0 0 300px rgba(147, 51, 234, 0.2)'
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Earth Surface with details */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] rounded-t-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.3) 30%, rgba(0, 100, 255, 0.6) 80%, #0066ff 100%)',
            filter: 'blur(30px)'
          }}
        />
        
        {/* Orbital Rings */}
        <OrbitalRings />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          
          {/* Three Images - Enhanced with cosmic theme */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-full max-w-3xl mx-auto mb-6"
          >
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {/* Image 1 - JIT ACM */}
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-magenta/20 to-neon-cyan/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border-2 rounded-lg overflow-hidden flex items-center justify-center p-4 h-28 md:h-32 
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] 
                            hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <img 
                    src={jitacmLogo} 
                    alt="JIT ACM"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] brightness-110"
                  />
                </div>
              </motion.div>

              {/* Image 2 - JIT Logo */}
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/20 via-neon-purple/20 to-neon-blue/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border-2 rounded-lg overflow-hidden flex items-center justify-center p-4 h-28 md:h-32
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] 
                            hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <img 
                    src={jitlogo} 
                    alt="JIT Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,0,255,0.5)] brightness-110"
                  />
                </div>
              </motion.div>

              {/* Image 3 - HACKBITS 3.0 */}
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-blue/20 to-neon-magenta/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border-2 rounded-lg overflow-hidden flex items-center justify-center p-4 h-28 md:h-32
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] 
                            hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <img 
                    src={hackbitsLogo} 
                    alt="HACKBITS 3.0"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] brightness-110"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* College Info with Enhanced Glow */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-2"
          >
            <p className="text-neon-blue/90 text-sm sm:text-base font-space tracking-wider relative inline-block">
              <span className="relative">
                Jhulelal Institute of Technology Nagpur
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00ffff, #ff00ff, #00ffff, transparent)',
                    filter: 'blur(1px)'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-space">
              An Autonomous Institute
            </p>
          </motion.div>

          {/* Department Info with Pulsing Effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-4 relative"
          >
            <div className="relative inline-block">
              <motion.span 
                className="text-neon-cyan text-xs sm:text-sm font-space tracking-[0.2em] relative z-10 px-4"
                animate={{
                  textShadow: [
                    '0 0 10px #00ffff',
                    '0 0 20px #ff00ff',
                    '0 0 10px #00ffff'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                JIT ACM PRESENT
              </motion.span>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-neon-blue/0 via-neon-cyan/40 via-neon-magenta/40 to-neon-blue/0 rounded-full blur-md"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Main Title with Enhanced Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center w-full"
            style={{ scale: titleScale }}
          >
            <motion.h1 
              variants={itemVariants}
              className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3"
            >
              <span className="bg-gradient-to-r from-neon-blue via-white to-neon-magenta bg-clip-text text-transparent relative inline-block">
                HACK
                <motion.span 
                  className="absolute -inset-4 bg-gradient-to-r from-neon-blue/30 via-neon-magenta/30 to-neon-cyan/30 blur-3xl -z-10"
                  animate={{ 
                    opacity: [0.3, 0.9, 0.3],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
              
              <span className="bg-gradient-to-r from-neon-magenta via-neon-blue to-neon-cyan bg-clip-text text-transparent relative">
                BITS 3.0
                <motion.span 
                  className="absolute -inset-4 bg-gradient-to-r from-neon-magenta/20 via-neon-blue/20 to-neon-cyan/20 blur-3xl -z-10"
                  animate={{ 
                    opacity: [0.2, 0.7, 0.2],
                    scale: [1, 1.4, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-4 mb-4"
            >
              {['Innovate', 'Build', 'Compete'].map((text, index) => (
                <span key={text} className={`text-${index === 0 ? 'neon-blue' : index === 1 ? 'neon-magenta' : 'neon-cyan'} text-xl relative group`}>
                  {text}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-neon-blue to-neon-magenta group-hover:w-full transition-all duration-300"></span>
                  <motion.span 
                    className={`absolute -inset-2 bg-${index === 0 ? 'neon-blue' : index === 1 ? 'neon-magenta' : 'neon-cyan'}/20 rounded-full blur-md opacity-0 group-hover:opacity-100`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </span>
              ))}
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto font-space leading-relaxed relative"
            >
              <span className="relative z-10">
                Join us for an exhilarating 16-hour coding marathon where innovation meets execution. 
                Build groundbreaking solutions, collaborate with brilliant minds, and compete for glory.
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-cyan/10 to-neon-magenta/0 blur-3xl"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.p>

            {/* Countdown Timer (kept intact) */}
            <motion.div variants={itemVariants} className="mb-6">
              <CountdownTimer targetDate="2026-03-23T08:00:00" />
            </motion.div>

            {/* Enhanced Register Now Button */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <Button 
                variant="primary" 
                className="group text-lg px-10 py-4 text-xl cursor-pointer relative overflow-hidden"
                onClick={handleRegisterClick}
              >
                <span className="relative z-10 flex items-center">
                  Register Now
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan"
                  animate={{ 
                    x: ['-100%', '100%']
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Energy pulse effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 blur-xl"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Border glow */}
                <motion.div 
                  className="absolute inset-0 border-2 border-neon-blue rounded-lg"
                  animate={{
                    boxShadow: [
                      '0 0 20px #00ffff',
                      '0 0 40px #ff00ff',
                      '0 0 20px #00ffff'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="relative">
          {/* Glowing Beam */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20"
            style={{
              background: 'linear-gradient(180deg, #00ffff, #ff00ff, transparent)',
              filter: 'blur(3px)'
            }}
            animate={{ 
              opacity: [0.3, 0.9, 0.3],
              height: ['4rem', '6rem', '4rem']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Comet Dot */}
          <motion.div 
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle, #ffffff, #00ffff, #ff00ff)',
              boxShadow: '0 0 30px #00ffff, 0 0 60px #ff00ff',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{ 
              y: [0, 32, 64, 32, 0],
              scale: [1, 1.5, 1, 0.8, 1],
              opacity: [0.8, 1, 0.8, 0.5, 0.8]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Floating Planets */}
      <motion.div
        className="absolute top-[20%] left-[5%] w-20 h-20 rounded-full z-10 hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ff6b6b, #4a4e6b, #1a1a2e)',
          boxShadow: '0 0 60px rgba(255, 107, 107, 0.5), 0 0 100px rgba(74, 78, 107, 0.3)'
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
          rotate: [0, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-[30%] right-[5%] w-28 h-28 rounded-full z-10 hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #4facfe, #00f2fe, #0a0a1a)',
          boxShadow: '0 0 70px rgba(79, 172, 254, 0.6), 0 0 120px rgba(0, 242, 254, 0.3)'
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
          rotate: [360, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Nebula Dust Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
          filter: 'blur(40px)'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;