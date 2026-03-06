import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventFlow = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const schedule = {
    day1: [
      { time: '08:00 AM – 10:00 AM', event: 'Registration & Inauguration', description: 'Participant registration and ID verification. Inauguration ceremony with guests and faculty. Overview of HACKBITS 3.0 objectives and theme.' },
      { time: '10:00 AM – 11:00 AM', event: 'Team Formation & Ideation', description: 'Finalize teams and brainstorm ideas. Mentors available for guidance.' },
      { time: '11:00 AM – 01:00 PM', event: 'Hacking Begins', description: 'Coding starts! Build your innovative solutions.' },
      { time: '01:00 PM – 02:00 PM', event: 'Lunch Break', description: 'Networking and refreshments.' },
      { time: '02:00 PM – 06:00 PM', event: 'Development Phase', description: 'Continue building with mentor check-ins.' },
      { time: '06:00 PM – 08:00 PM', event: 'Evaluation Checkpoint 1', description: 'First progress review by judges.' },
      { time: '08:00 PM – 10:00 PM', event: 'Dinner & Networking', description: 'Break and connect with fellow hackers.' },
      { time: '10:00 PM – 08:00 AM', event: 'Overnight Hacking', description: 'Continue coding through the night.' }
    ],
    day2: [
      { time: '08:00 AM – 09:00 AM', event: 'Breakfast', description: 'Morning refreshments.' },
      { time: '09:00 AM – 11:00 AM', event: 'Final Development', description: 'Last stretch of coding and bug fixes.' },
      { time: '11:00 AM – 12:00 PM', event: 'Submission Deadline', description: 'Final project submission in prescribed format.' },
      { time: '12:00 PM – 02:00 PM', event: 'Project Presentations', description: 'Teams present their projects to judges.' },
      { time: '02:00 PM – 03:00 PM', event: 'Judging & Evaluation', description: 'Final evaluation by panel of judges.' },
      { time: '03:00 PM – 04:00 PM', event: 'Closing Ceremony', description: 'Results announcement and prize distribution.' }
    ],
     day3: [
      { time: '08:00 AM – 09:00 AM', event: 'Breakfast', description: 'Morning refreshments.' },
      { time: '09:00 AM – 11:00 AM', event: 'Final Development', description: 'Last stretch of coding and bug fixes.' },
      { time: '11:00 AM – 12:00 PM', event: 'Submission Deadline', description: 'Final project submission in prescribed format.' },
      { time: '12:00 PM – 02:00 PM', event: 'Project Presentations', description: 'Teams present their projects to judges.' },
      { time: '02:00 PM – 03:00 PM', event: 'Judging & Evaluation', description: 'Final evaluation by panel of judges.' },
      { time: '03:00 PM – 04:00 PM', event: 'Closing Ceremony', description: 'Results announcement and prize distribution.' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="eventflow" className="py-20 bg-space-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-dark to-space-deep opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Event Flow
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your 16-hour journey from idea to innovation
          </motion.p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-space-deep/50 rounded-lg p-1 border border-neon-blue/20">
            <button
              onClick={() => setSelectedDay('day1')}
              className={`px-8 py-3 rounded-lg font-space transition-all duration-300 ${
                selectedDay === 'day1'
                  ? 'bg-neon-blue text-space-dark'
                  : 'text-gray-400 hover:text-neon-blue'
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setSelectedDay('day2')}
              className={`px-8 py-3 rounded-lg font-space transition-all duration-300 ${
                selectedDay === 'day2'
                  ? 'bg-neon-blue text-space-dark'
                  : 'text-gray-400 hover:text-neon-blue'
              }`}
            >
              Day 2
            </button>
            <button
              onClick={() => setSelectedDay('day3')}
              className={`px-8 py-3 rounded-lg font-space transition-all duration-300 ${
                selectedDay === 'day3'
                  ? 'bg-neon-blue text-space-dark'
                  : 'text-gray-400 hover:text-neon-blue'
              }`}
            >
              Day 3
            </button>
          </div>
        </div>

        {/* Schedule Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {schedule[selectedDay].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-4 mb-6 last:mb-0"
              >
                <div className="md:w-1/4">
                  <div className="bg-space-deep/50 backdrop-blur-sm border border-neon-blue/20 rounded-lg px-4 py-3 text-center">
                    <span className="font-orbitron text-neon-blue font-bold">{item.time}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-space-deep/30 backdrop-blur-sm border border-neon-blue/10 rounded-lg p-4 hover:border-neon-blue/30 transition-all duration-300">
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-gray-400 text-sm font-space">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventFlow;