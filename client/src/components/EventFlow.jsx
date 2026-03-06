import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventFlow = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const schedule = {
    day1: [
      { 
        time: '08:00 AM', 
        endTime: '10:00 AM',
        event: 'Registration & Inauguration', 
        description: 'Participant registration and ID verification. Inauguration ceremony with guests and faculty. Overview of HACKBITS 3.0 objectives and theme.',
        location: 'Main Auditorium',
        type: 'ceremony',
        icon: '🎪'
      },
      { 
        time: '10:00 AM', 
        endTime: '11:00 AM',
        event: 'Team Formation & Ideation', 
        description: 'Finalize teams and brainstorm ideas. Mentors available for guidance. Pitch your ideas and get feedback.',
        location: 'Workshop Area',
        type: 'workshop',
        icon: '💡'
      },
      { 
        time: '11:00 AM', 
        endTime: '01:00 PM',
        event: 'Hacking Begins', 
        description: 'Coding starts! Build your innovative solutions. First sprint of development begins.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '💻'
      },
      { 
        time: '01:00 PM', 
        endTime: '02:00 PM',
        event: 'Lunch Break', 
        description: 'Networking and refreshments. Connect with fellow participants and mentors.',
        location: 'Food Court',
        type: 'break',
        icon: '🍕'
      },
      { 
        time: '02:00 PM', 
        endTime: '06:00 PM',
        event: 'Development Phase', 
        description: 'Continue building with mentor check-ins. Regular guidance from industry experts.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '⚙️'
      },
      { 
        time: '06:00 PM', 
        endTime: '08:00 PM',
        event: 'Evaluation Checkpoint 1', 
        description: 'First progress review by judges. Get feedback and suggestions for improvement.',
        location: 'Evaluation Zone',
        type: 'evaluation',
        icon: '📊'
      },
      { 
        time: '08:00 PM', 
        endTime: '10:00 PM',
        event: 'Dinner & Networking', 
        description: 'Break and connect with fellow hackers. Mini games and activities.',
        location: 'Food Court',
        type: 'break',
        icon: '🌙'
      },
      { 
        time: '10:00 PM', 
        endTime: '08:00 AM',
        event: 'Overnight Hacking', 
        description: 'Continue coding through the night. Energy drinks and snacks available.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '🌃'
      }
    ],
    day2: [
      { 
        time: '08:00 AM', 
        endTime: '10:00 AM',
        event: 'Morning Hacking Session', 
        description: 'Continue development from day one. Mentors available for guidance and technical support.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '☀️'
      },
      { 
        time: '10:00 AM', 
        endTime: '12:00 PM',
        event: 'Technical Workshops', 
        description: 'Parallel workshops on cutting-edge technologies. Choose your track.',
        location: 'Workshop Halls',
        type: 'workshop',
        icon: '🔧'
      },
      { 
        time: '12:00 PM', 
        endTime: '01:00 PM',
        event: 'Lunch Break', 
        description: 'Refresh and network with fellow participants.',
        location: 'Food Court',
        type: 'break',
        icon: '🥗'
      },
      { 
        time: '01:00 PM', 
        endTime: '04:00 PM',
        event: 'Development Sprint', 
        description: 'Intense coding session. Focus on implementing core features.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '⚡'
      },
      { 
        time: '04:00 PM', 
        endTime: '06:00 PM',
        event: 'Mentor Checkpoint 2', 
        description: 'Progress review with mentors. Get feedback on implementation.',
        location: 'Evaluation Zone',
        type: 'evaluation',
        icon: '📋'
      },
      { 
        time: '06:00 PM', 
        endTime: '08:00 PM',
        event: 'Mini Games & Activities', 
        description: 'Fun team-building activities. Refresh your mind with exciting games.',
        location: 'Activity Zone',
        type: 'break',
        icon: '🎮'
      },
      { 
        time: '08:00 PM', 
        endTime: '10:00 PM',
        event: 'Dinner & Tech Talks', 
        description: 'Dinner with informal tech talks from industry experts.',
        location: 'Food Court',
        type: 'break',
        icon: '🍽️'
      },
      { 
        time: '10:00 PM', 
        endTime: '08:00 AM',
        event: 'Night Development', 
        description: 'Continue building through the night. Snacks and energy drinks available.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '🌠'
      }
    ],
    day3: [
      { 
        time: '08:00 AM', 
        endTime: '09:00 AM',
        event: 'Breakfast', 
        description: 'Morning refreshments. Energy boost for the final stretch.',
        location: 'Food Court',
        type: 'break',
        icon: '☕'
      },
      { 
        time: '09:00 AM', 
        endTime: '11:00 AM',
        event: 'Final Development', 
        description: 'Last stretch of coding and bug fixes. Polish your project for presentation.',
        location: 'Main Arena',
        type: 'hacking',
        icon: '🚀'
      },
      { 
        time: '11:00 AM', 
        endTime: '12:00 PM',
        event: 'Submission Deadline', 
        description: 'Final project submission in prescribed format. No extensions will be given.',
        location: 'Submission Portal',
        type: 'deadline',
        icon: '⏰'
      },
      { 
        time: '12:00 PM', 
        endTime: '02:00 PM',
        event: 'Project Presentations', 
        description: 'Teams present their projects to judges. 5-minute presentation + 3-minute Q&A.',
        location: 'Presentation Halls',
        type: 'presentation',
        icon: '🎤'
      },
      { 
        time: '02:00 PM', 
        endTime: '03:00 PM',
        event: 'Judging & Evaluation', 
        description: 'Final evaluation by panel of judges. Scoring based on innovation, implementation, and impact.',
        location: 'Judging Area',
        type: 'evaluation',
        icon: '🏆'
      },
      { 
        time: '03:00 PM', 
        endTime: '04:00 PM',
        event: 'Closing Ceremony', 
        description: 'Results announcement and prize distribution. Vote of thanks and group photo.',
        location: 'Main Auditorium',
        type: 'ceremony',
        icon: '🎉'
      }
    ]
  };

  const getEventTypeColor = (type) => {
    const colors = {
      ceremony: 'from-neon-blue to-neon-purple',
      workshop: 'from-neon-cyan to-neon-blue',
      hacking: 'from-neon-magenta to-neon-purple',
      break: 'from-neon-purple to-neon-magenta',
      evaluation: 'from-neon-blue to-neon-magenta',
      deadline: 'from-neon-magenta to-neon-cyan',
      presentation: 'from-neon-cyan to-neon-purple'
    };
    return colors[type] || 'from-neon-blue to-neon-cyan';
  };

  const getEventTypeIcon = (type) => {
    const icons = {
      ceremony: '🎪',
      workshop: '💡',
      hacking: '💻',
      break: '🍕',
      evaluation: '📊',
      deadline: '⏰',
      presentation: '🎤'
    };
    return icons[type] || '📌';
  };

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="eventflow" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]">
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

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.02) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Cosmic Timeline Path */}
      <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FF00FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0,100 Q 200,150 400,200 T 800,300 T 1200,400"
          stroke="url(#timeline-gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="15 15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        />
      </svg>

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
                🚀 3-DAY COSMIC JOURNEY
              </span>
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              Event Flow
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto font-space leading-relaxed">
            Your 3-day expedition through innovation - every moment counts!
          </motion.p>
        </motion.div>

        {/* Day Selector with Cosmic Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex justify-center mb-12"
        >
          <div className="relative group">
            {/* Orbital Glow */}
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-magenta rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Selector Container */}
            <div className="relative bg-black/60 backdrop-blur-xl border border-neon-blue/30 rounded-2xl p-2 flex gap-2">
              {[
                { id: 'day1', label: 'Day 1', date: 'March 24', gradient: 'from-neon-blue to-neon-cyan' },
                { id: 'day2', label: 'Day 2', date: 'March 25', gradient: 'from-neon-magenta to-neon-purple' },
                { id: 'day3', label: 'Day 3', date: 'March 26', gradient: 'from-neon-cyan to-neon-magenta' }
              ].map((day) => (
                <motion.button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className="relative px-6 md:px-8 py-3 rounded-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedDay === day.id && (
                    <motion.div
                      layoutId="activeDay"
                      className={`absolute inset-0 bg-gradient-to-r ${day.gradient}`}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex flex-col items-center">
                    <span className={`font-orbitron text-sm md:text-base font-bold ${
                      selectedDay === day.id ? 'text-white' : 'text-gray-400'
                    }`}>{day.label}</span>
                    <span className={`text-xs ${
                      selectedDay === day.id ? 'text-white/80' : 'text-gray-500'
                    }`}>{day.date}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Cosmic Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-blue via-neon-magenta to-neon-cyan opacity-30" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-neon-blue via-neon-magenta to-neon-cyan"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ originY: 0 }}
              />
              
              {/* Floating orbs on timeline */}
              {schedule[selectedDay].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2"
                  style={{ top: `${(index / (schedule[selectedDay].length - 1)) * 100}%` }}
                >
                  <motion.div 
                    className="w-full h-full bg-neon-blue rounded-full"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5],
                      boxShadow: [
                        '0 0 5px #00E5FF',
                        '0 0 15px #FF00FF',
                        '0 0 5px #00E5FF'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Events */}
            {schedule[selectedDay].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node with Cosmic Glow */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 z-10">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-magenta rounded-full"
                    animate={{ 
                      scale: [1, 1.8, 1],
                      boxShadow: [
                        '0 0 10px rgba(0,229,255,0.5)',
                        '0 0 30px rgba(255,0,255,0.8)',
                        '0 0 10px rgba(0,229,255,0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <div className="absolute inset-1 bg-[#030014] rounded-full" />
                </div>

                {/* Time Column */}
                <div className={`md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <motion.div 
                    className="inline-block bg-black/40 backdrop-blur-xl border border-neon-blue/30 rounded-xl p-4 hover:border-neon-blue/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                  >
                    <span className="font-orbitron text-lg font-bold bg-gradient-to-r from-neon-blue to-neon-magenta bg-clip-text text-transparent">
                      {item.time}
                    </span>
                    <span className="text-gray-600 text-sm mx-2">→</span>
                    <span className="font-orbitron text-sm text-gray-400">{item.endTime}</span>
                  </motion.div>
                </div>

                {/* Event Card */}
                <div className={`md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                  >
                    {/* Orbital Glow Effect */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${getEventTypeColor(item.type)} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Card */}
                    <div className="relative bg-black/60 backdrop-blur-xl border border-neon-blue/20 rounded-2xl p-6 hover:border-neon-blue/40 transition-all duration-300 overflow-hidden">
                      
                      {/* Cosmic Background Effect */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/5 to-neon-magenta/5 rounded-full blur-3xl" />
                      
                      {/* Header with Icon */}
                      <div className="flex items-start gap-4 mb-3">
                        <motion.div 
                          className={`p-3 rounded-xl bg-gradient-to-r ${getEventTypeColor(item.type)} bg-opacity-10 relative overflow-hidden`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span className="text-2xl relative z-10">{item.icon || getEventTypeIcon(item.type)}</span>
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className={`font-orbitron text-lg font-bold bg-gradient-to-r ${getEventTypeColor(item.type)} bg-clip-text text-transparent`}>
                            {item.event}
                          </h3>
                          <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.location}
                          </p>
                        </div>
                      </div>

                      {/* Description (Expandable) */}
                      <AnimatePresence>
                        {selectedEvent === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 text-sm font-space leading-relaxed mt-3 pt-3 border-t border-neon-blue/20">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand/Collapse Indicator */}
                      <motion.button 
                        className="absolute bottom-2 right-2 text-gray-600 hover:text-neon-blue transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.svg 
                          className={`w-4 h-4 transform transition-transform duration-300 ${selectedEvent === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={selectedEvent === index ? { y: [0, 2, 0] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Timeline Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { type: 'ceremony', label: 'Ceremony', color: 'from-neon-blue to-neon-purple' },
            { type: 'hacking', label: 'Hacking', color: 'from-neon-magenta to-neon-purple' },
            { type: 'break', label: 'Break', color: 'from-neon-purple to-neon-magenta' },
            { type: 'evaluation', label: 'Evaluation', color: 'from-neon-blue to-neon-magenta' },
            { type: 'workshop', label: 'Workshop', color: 'from-neon-cyan to-neon-blue' },
            { type: 'presentation', label: 'Presentation', color: 'from-neon-cyan to-neon-purple' }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-neon-blue/20"
              whileHover={{ scale: 1.05, borderColor: '#00E5FF' }}
            >
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
              <span className="text-xs text-gray-400">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          className="mt-12 text-center"
        >
          <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-magenta rounded-xl blur-xl opacity-20" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-neon-blue/30 rounded-xl px-8 py-4">
              <p className="text-gray-400 text-sm">
                <span className="text-neon-cyan mr-2">⚠️</span>
                Schedule is subject to minor changes. All participants will be notified of any updates.
              </p>
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

export default EventFlow;