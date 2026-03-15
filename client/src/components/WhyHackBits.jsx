import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import group from '../assets/images/group.png';
import clock from '../assets/images/clock.png';
import cup from '../assets/images/cup.png';
import rocket from '../assets/images/rocket.png';
import target from '../assets/images/target.png';
import bussinessman from '../assets/images/bussinessman.png'

const WhyHackBits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: clock,
      title: '16-Hour Hackathon',
      description: 'Non-stop coding marathon to build innovative solutions from scratch',
      gradient: 'black-60',
      stats: 'Non-Stop',
      color: 'white'
    },
    {
      icon: group,
      title: 'Team Collaboration',
      description: 'Register your team of up to 4 members and collaborate with brilliant minds',
      gradient: 'black-60',
      stats: '2-4 Members',
      color: 'white'
    },
    {
      icon: rocket,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry experts and experienced developers throughout the event',
      gradient: 'black-60',
      stats: '24/7 Support',
      color: 'white'
    },
    {
      icon: cup,
      title: 'Exciting Prizes',
      description: 'Win amazing prizes, swag, and recognition for your innovative solutions',
      gradient: 'black-60',
      stats: '₹50K+ Prizes',
      color: 'white'
    }
  ];

  const highlights = [
    {
      number: '16',
      label: 'Hours',
      description: 'of continuous coding',
      gradient: 'from-neon-blue to-neon-cyan'
    },
    {
      number: '4',
      label: 'Members',
      description: 'per team maximum',
      gradient: 'from-neon-cyan to-neon-blue'
    },
    {
      number: '50K+',
      label: 'Prizes',
      description: 'worth of rewards',
      gradient: 'from-neon-cyan to-neon-blue'
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
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section id="whyhackbits" className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]">
      {/* Deep Space Background - Optimized for mobile */}
      <div className="absolute inset-0">
        {/* Star Field - Reduced for mobile */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => ( // Reduced stars for mobile
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
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Nebula Effects */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)',
            filter: 'blur(80px)'
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Floating Cosmic Dust - Reduced for mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => ( // Reduced particles for mobile
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#00E5FF' : '#FF00FF',
                filter: 'blur(1px)',
                opacity: 0.2
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 150],
                x: [0, (Math.random() - 0.5) * 150],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Grid Pattern - Cosmic */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.03) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          {/* Main Title - Skyblue gradient - Responsive text sizes */}
          <motion.h2 variants={itemVariants} className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              Why HackBlitz 3.0?
            </span>
          </motion.h2>

          {/* Description - White - Responsive text */}
          <motion.p variants={itemVariants} className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-space leading-relaxed px-4">
            Experience the ultimate coding challenge with features designed to help you
            learn, build, and grow as a developer in this cosmic journey.
          </motion.p>
        </motion.div>

        {/* Features Grid - Responsive grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="group relative"
            >
              {/* Orbital Glow Effect */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl opacity-10 group-hover:opacity-10 blur-xl transition-all duration-500`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card Content */}
              <div className="relative bg-black/10 backdrop-blur-xl border border-neon-blue/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-neon-blue/60 transition-all duration-300 h-full overflow-hidden">

                {/* Cosmic Background Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-neon-blue/5 to-neon-magenta/5 rounded-full blur-3xl" />

                {/* Icon with Gradient Background */}
                <motion.div
                  className={`inline-block p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-3 sm:mb-4 relative overflow-hidden`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] relative z-10"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Title - Skyblue gradient - Responsive text */}
                <h3 className="font-orbitron text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {feature.title}
                </h3>

                {/* Description - White - Responsive text */}
                <p className="text-white/150 text-xs sm:text-sm md:text-sm font-space leading-relaxed mb-3 sm:mb-4">
                  {feature.description}
                </p>

                {/* Stat Badge */}
                <div className={`inline-block px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-10 border border-neon-blue/20 backdrop-blur-sm`}>
                  <span className="text-white text-[10px] sm:text-xs font-medium drop-shadow-[0_0_5px_currentColor]">
                    {feature.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section - By the Numbers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <motion.h3 variants={itemVariants} className="text-center text-lg sm:text-xl md:text-2xl font-orbitron mb-6 sm:mb-8 md:mb-12">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              HackBlitz by the Numbers
            </span>
          </motion.h3>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                {/* Orbital Ring - Hidden on mobile */}
                <motion.div
                  className={`absolute -inset-2 border border-${highlight.gradient.split(' ')[0].replace('from-', '')}/20 rounded-full hidden md:block`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Content */}
                <div className="relative bg-black/10 backdrop-blur-sm border border-neon-blue/20 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:border-neon-blue/40 transition-all duration-300">
                  <motion.div
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(0,229,255,0.3)',
                        '0 0 20px rgba(255,0,255,0.3)',
                        '0 0 10px rgba(0,229,255,0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {highlight.number}
                  </motion.div>
                  {/* Label - Skyblue - Responsive text */}
                  <div className="text-sky-300 font-orbitron text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">{highlight.label}</div>
                  {/* Description - White - Responsive text */}
                  <div className="text-white/100 text-[10px] sm:text-xs md:text-sm">{highlight.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {/* What You'll Gain */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-black/10 backdrop-blur-xl border border-neon-blue/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full">
              {/* Heading - Skyblue - Responsive */}
              <h4 className="font-orbitron text-base sm:text-lg text-sky-300 mb-3 sm:mb-4 flex items-center gap-2">
                <img
                  src={target}
                  alt="target"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <span className="text-sm sm:text-base">What You'll Gain</span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Hands-on experience with real-world projects',
                  'Mentorship from industry experts',
                  'Networking opportunities',
                  'Certificate of participation',
                  'Exclusive cosmic swag'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-white/70 text-xs sm:text-sm flex items-start gap-2 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sky-300 mt-0.5 text-base sm:text-lg">✦</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Who Can Participate */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-black/10 backdrop-blur-xl border border-neon-blue/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full">
              {/* Heading - Skyblue - Responsive */}
              <h4 className="font-orbitron text-base sm:text-lg text-sky-300 mb-3 sm:mb-4 flex items-center gap-2">
                <img
                  src={group}
                  alt="Group"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <span className="text-sm sm:text-base">Who Can Participate</span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'College students (any year)',
                  'Self-taught developers',
                  'Tech enthusiasts',
                  'Designers & developers',
                  'Open to all skill levels'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-white/70 text-xs sm:text-sm flex items-start gap-2 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sky-300 mt-0.5 text-base sm:text-lg">✦</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Why Participate */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-black/10 backdrop-blur-xl border border-neon-cyan/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full">
              {/* Heading - Skyblue - Responsive */}
              <h4 className="font-orbitron text-base sm:text-lg text-sky-300 mb-3 sm:mb-4 flex items-center gap-2">
                <img
                  src={bussinessman}
                  alt="Businessman"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <span className="text-sm sm:text-base">Why Participate</span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Build your portfolio',
                  'Learn new technologies',
                  'Compete for exciting prizes',
                  'Get noticed by recruiters',
                  'Join a community of innovators'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-white/70 text-xs sm:text-sm flex items-start gap-2 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sky-300 mt-0.5 text-base sm:text-lg">✦</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Cosmic Divider */}
        <motion.div
          className="w-full h-px mt-12 sm:mt-16 md:mt-20 relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent blur-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHackBits;