import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons for different rule categories
const RuleIcons = {
  '⏰ 16-Hour Timeline': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  '📝 No Pre-Built Code': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  '👥 Team Composition': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  '✅ Evaluation Checkpoints': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  '📋 Submission Deadline': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  '🤝 Mentor Guidance': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  '⚖️ Misconduct Policy': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  '👨‍💻 Ethical Coding': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  '🏁 Final Decision': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
};

const RulesGuidelines = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rules = [
    {
      category: '16-Hour Timeline',
      icon: '⏰',
      gradient: 'from-neon-blue to-neon-cyan',
      items: [
        'The hackathon is a 16-hour continuous coding event; teams must adhere strictly to the given timeline.',
        'All coding must be done only during the official hackathon duration.',
        'Time tracking will be monitored throughout the event.'
      ],
      color: 'neon-blue'
    },
    {
      category: 'No Pre-Built Code',
      icon: '📝',
      gradient: 'from-neon-magenta to-neon-purple',
      items: [
        'Use of pre-built code, templates, or previously developed projects is prohibited.',
        'Teams may use open-source libraries, APIs, and frameworks, provided they are properly acknowledged.',
        'All code must be written during the hackathon hours.'
      ],
      color: 'neon-magenta'
    },
    {
      category: 'Team Composition',
      icon: '👥',
      gradient: 'from-neon-cyan to-neon-blue',
      items: [
        'Teams must consist of the registered members only; no substitution is allowed after the event begins.',
        'Maximum team size: 4 members',
        'Minimum team size: 2 members',
        'Cross-college teams are allowed.'
      ],
      color: 'neon-cyan'
    },
    {
      category: 'Evaluation Checkpoints',
      icon: '✅',
      gradient: 'from-neon-purple to-neon-magenta',
      items: [
        'Regular evaluation checkpoints will be conducted by judges and mentors.',
        'Progress updates required every 4 hours.',
        'Final evaluation based on innovation, implementation, and presentation.'
      ],
      color: 'neon-purple'
    },
    {
      category: 'Submission Deadline',
      icon: '📋',
      gradient: 'from-neon-blue to-neon-magenta',
      items: [
        'Teams must submit their final project before the submission deadline in the prescribed format.',
        'Late submissions will not be accepted under any circumstances.',
        'Submit code, documentation, and presentation video.'
      ],
      color: 'neon-blue'
    },
    {
      category: 'Mentor Guidance',
      icon: '🤝',
      gradient: 'from-neon-cyan to-neon-purple',
      items: [
        'Mentors are available for guidance, but direct implementation by mentors is not allowed.',
        'Seek advice on architecture, APIs, and best practices.',
        'Mentors will be available throughout the event.'
      ],
      color: 'neon-cyan'
    },
    {
      category: 'Misconduct Policy',
      icon: '⚖️',
      gradient: 'from-neon-magenta to-neon-blue',
      items: [
        'Any form of misconduct, rule violation, or unfair practice will result in immediate disqualification.',
        'Respect all participants, mentors, and organizers.',
        'Maintain a positive and collaborative environment.'
      ],
      color: 'neon-magenta'
    },
    {
      category: 'Ethical Coding',
      icon: '👨‍💻',
      gradient: 'from-neon-purple to-neon-cyan',
      items: [
        'Participants must follow ethical coding practices; plagiarism or code copying will lead to disqualification.',
        'Give credit to any external resources used.',
        'Original work only.'
      ],
      color: 'neon-purple'
    },
    {
      category: 'Final Decision',
      icon: '🏁',
      gradient: 'from-neon-blue to-neon-purple',
      items: [
        'The decision of the judges and organizing committee will be final and binding.',
        'No appeals will be entertained after results are announced.',
        'Organizers reserve the right to modify rules if necessary.'
      ],
      color: 'neon-blue'
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

  return (
    <section id="rules" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]">
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
            background: 'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)',
            filter: 'blur(80px)'
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#FF00FF' : '#FFFFFF',
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

        {/* Shooting Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
                filter: 'blur(2px)'
              }}
              animate={{
                x: [0, 500],
                y: [0, 300],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay - Cosmic Style */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.02) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }} />

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
                📋 COSMIC CODE OF CONDUCT
              </span>
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              Rules & Guidelines
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-3xl mx-auto font-space leading-relaxed">
            Navigate your cosmic journey through these essential guidelines. 
            Fair play ensures everyone reaches the stars!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {rules.map((rule, index) => (
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
                className={`absolute -inset-0.5 bg-gradient-to-r ${rule.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Card Content */}
              <div className="relative bg-black/60 backdrop-blur-xl border border-neon-blue/20 rounded-2xl p-6 hover:border-neon-blue/40 transition-all duration-300 h-full flex flex-col overflow-hidden">
                
                {/* Cosmic Background Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/5 to-neon-magenta/5 rounded-full blur-3xl" />
                
                {/* Header with Icon and Category */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-r ${rule.gradient} bg-opacity-10 relative overflow-hidden`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-2xl filter drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] relative z-10">
                      {rule.icon}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  <h3 className={`font-orbitron text-lg font-bold bg-gradient-to-r ${rule.gradient} bg-clip-text text-transparent flex-1`}>
                    {rule.category}
                  </h3>
                </div>

                {/* Rules List */}
                <ul className="space-y-3 flex-1 relative z-10">
                  {rule.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-300 text-sm font-space flex items-start gap-3 group/item"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1, x: 3 }}
                    >
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${rule.gradient} flex-shrink-0 shadow-[0_0_8px_currentColor]`} />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Border Gradient with Animation */}
                <motion.div 
                  className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${rule.gradient}`}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notice Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/20 via-neon-purple/20 to-neon-magenta/20 rounded-3xl blur-2xl" />
          
          {/* Content */}
          <motion.div 
            className="relative bg-black/60 backdrop-blur-xl border border-neon-magenta/30 rounded-3xl p-8 text-center overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,0,255,0.2) 50%, transparent 70%)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Floating Orbs */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-neon-magenta/20 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                    filter: [
                      'drop-shadow(0 0 10px #FF00FF)',
                      'drop-shadow(0 0 20px #00E5FF)',
                      'drop-shadow(0 0 10px #FF00FF)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-4xl">⚠️</span>
                </motion.div>
                <h3 className="font-orbitron text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-blue">
                  Important Notice
                </h3>
              </div>
              
              <p className="text-gray-300 font-space text-lg max-w-3xl mx-auto mb-4">
                Violation of any rule may result in immediate disqualification. When in doubt, consult a mentor or organizer.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {[
                  { text: 'No Plagiarism', color: 'neon-magenta', icon: '❌' },
                  { text: 'Strict Timeline', color: 'neon-blue', icon: '⏰' },
                  { text: 'Be Respectful', color: 'neon-cyan', icon: '🤝' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className={`px-4 py-2 bg-${item.color}/10 rounded-full border border-${item.color}/30 backdrop-blur-sm`}
                    whileHover={{ scale: 1.05, borderColor: '#00E5FF' }}
                  >
                    <span className={`text-${item.color} text-sm font-medium`}>
                      {item.icon} {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Total Rules', value: '9', icon: '📋', gradient: 'from-neon-blue to-neon-cyan' },
            { label: 'Team Size', value: '2-4', icon: '👥', gradient: 'from-neon-magenta to-neon-purple' },
            { label: 'Duration', value: '16h', icon: '⏰', gradient: 'from-neon-cyan to-neon-blue' },
            { label: 'Checkpoints', value: '4', icon: '✅', gradient: 'from-neon-purple to-neon-magenta' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />
              <div className="relative bg-black/50 backdrop-blur-sm border border-neon-blue/20 rounded-xl p-4 text-center hover:border-neon-blue/40 transition-all duration-300">
                <motion.span 
                  className="text-2xl mb-1 block"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 5px rgba(0,229,255,0.3))',
                      'drop-shadow(0 0 15px rgba(255,0,255,0.3))',
                      'drop-shadow(0 0 5px rgba(0,229,255,0.3))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.span>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
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

export default RulesGuidelines;