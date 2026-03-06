import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyHackBits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: '⏰',
      title: '16-Hour Hackathon',
      description: 'Non-stop coding marathon to build innovative solutions from scratch',
      gradient: 'from-neon-blue to-neon-cyan',
      stats: 'Non-Stop',
      color: 'neon-blue'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Register your team of up to 4 members and collaborate with brilliant minds',
      gradient: 'from-neon-magenta to-neon-purple',
      stats: '2-4 Members',
      color: 'neon-magenta'
    },
    {
      icon: '🚀',
      title: 'Expert Mentorship',
      description: 'Get guidance from industry experts and experienced developers throughout the event',
      gradient: 'from-neon-cyan to-neon-blue',
      stats: '24/7 Support',
      color: 'neon-cyan'
    },
    {
      icon: '🏆',
      title: 'Exciting Prizes',
      description: 'Win amazing prizes, swag, and recognition for your innovative solutions',
      gradient: 'from-neon-purple to-neon-magenta',
      stats: '₹50K+ Prizes',
      color: 'neon-purple'
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
      gradient: 'from-neon-magenta to-neon-purple'
    },
    {
      number: '50K+',
      label: 'Prizes',
      description: 'worth of rewards',
      gradient: 'from-neon-cyan to-neon-blue'
    },
    {
      number: '500+',
      label: 'Participants',
      description: 'from across the country',
      gradient: 'from-neon-purple to-neon-magenta'
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
    <section id="whyhackbits" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]">
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

        {/* Floating Cosmic Dust */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
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
          className="text-center mb-16"
        >
          {/* Section Label with Cosmic Glow */}
          <motion.div variants={itemVariants} className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-magenta/20 to-neon-cyan/20 rounded-full blur-xl"></div>
            <span className="relative px-6 py-2 bg-black/40 backdrop-blur-xl border border-neon-blue/30 rounded-full inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-magenta text-sm font-medium tracking-wider">
                ✨ WHY HACKBITS 3.0
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 variants={itemVariants} className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              Why HackBits 3.0?
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto font-space leading-relaxed">
            Experience the ultimate coding challenge with features designed to help you 
            learn, build, and grow as a developer in this cosmic journey.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
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
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Card Content */}
              <div className="relative bg-black/60 backdrop-blur-xl border border-neon-blue/20 rounded-2xl p-6 hover:border-neon-blue/40 transition-all duration-300 h-full overflow-hidden">
                
                {/* Cosmic Background Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/5 to-neon-magenta/5 rounded-full blur-3xl" />
                
                {/* Icon with Gradient Background */}
                <motion.div 
                  className={`inline-block p-4 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-4 relative overflow-hidden`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] relative z-10">
                    {feature.icon}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className={`font-orbitron text-xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-2`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm font-space leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Stat Badge */}
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-10 border border-neon-blue/20 backdrop-blur-sm`}>
                  <span className={`text-xs font-medium text-${feature.color} drop-shadow-[0_0_5px_currentColor]`}>
                    {feature.stats}
                  </span>
                </div>

                {/* Bottom Border Animation */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section - By the Numbers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3 variants={itemVariants} className="text-center text-2xl font-orbitron mb-12">
            <span className="bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              HackBits by the Numbers
            </span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Orbital Ring */}
                <motion.div 
                  className={`absolute -inset-2 border border-${highlight.gradient.split(' ')[0].replace('from-', '')}/20 rounded-full`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Content */}
                <div className="relative bg-black/50 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-6 text-center hover:border-neon-blue/40 transition-all duration-300">
                  <motion.div 
                    className={`text-3xl md:text-4xl font-orbitron font-bold bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent mb-2`}
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
                  <div className="text-white font-orbitron text-sm mb-1">{highlight.label}</div>
                  <div className="text-gray-500 text-xs">{highlight.description}</div>
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
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* What You'll Gain */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-neon-blue/20 rounded-2xl p-6 h-full">
              <h4 className="font-orbitron text-lg text-neon-blue mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> What You'll Gain
              </h4>
              <ul className="space-y-3">
                {[
                  'Hands-on experience with real-world projects',
                  'Mentorship from industry experts',
                  'Networking opportunities',
                  'Certificate of participation',
                  'Exclusive cosmic swag'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-400 text-sm flex items-start gap-2 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-neon-blue mt-1 text-lg">✦</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-neon-magenta/20 rounded-2xl p-6 h-full">
              <h4 className="font-orbitron text-lg text-neon-magenta mb-4 flex items-center gap-2">
                <span className="text-2xl">👥</span> Who Can Participate
              </h4>
              <ul className="space-y-3">
                {[
                  'College students (any year)',
                  'Self-taught developers',
                  'Tech enthusiasts',
                  'Designers & developers',
                  'Open to all skill levels'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-400 text-sm flex items-start gap-2 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-neon-magenta mt-1 text-lg">✦</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-neon-cyan/20 rounded-2xl p-6 h-full">
              <h4 className="font-orbitron text-lg text-neon-cyan mb-4 flex items-center gap-2">
                <span className="text-2xl">💪</span> Why Participate
              </h4>
              <ul className="space-y-3">
                {[
                  'Build your portfolio',
                  'Learn new technologies',
                  'Compete for exciting prizes',
                  'Get noticed by recruiters',
                  'Join a community of innovators'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-400 text-sm flex items-start gap-2 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-neon-cyan mt-1 text-lg">✦</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Cosmic Divider */}
        <motion.div 
          className="w-full h-px mt-20 relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-magenta to-transparent blur-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHackBits;