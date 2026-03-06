import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RulesGuidelines = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rules = [
    {
      category: '⏰ 16-Hour Timeline',
      items: [
        'The hackathon is a 16-hour continuous coding event; teams must adhere strictly to the given timeline.',
        'All coding must be done only during the official hackathon duration.'
      ]
    },
    {
      category: '📝 No Pre-Built Code',
      items: [
        'Use of pre-built code, templates, or previously developed projects is prohibited.',
        'Teams may use open-source libraries, APIs, and frameworks, provided they are properly acknowledged.'
      ]
    },
    {
      category: '👥 Team Composition',
      items: [
        'Teams must consist of the registered members only; no substitution is allowed after the event begins.',
        'Maximum team size: 4 members'
      ]
    },
    {
      category: '✅ Evaluation Checkpoints',
      items: [
        'Regular evaluation checkpoints will be conducted by judges and mentors.'
      ]
    },
    {
      category: '📋 Submission Deadline',
      items: [
        'Teams must submit their final project before the submission deadline in the prescribed format.'
      ]
    },
    {
      category: '🤝 Mentor Guidance',
      items: [
        'Mentors are available for guidance, but direct implementation by mentors is not allowed.'
      ]
    },
    {
      category: '⚖️ Misconduct Policy',
      items: [
        'Any form of misconduct, rule violation, or unfair practice will result in immediate disqualification.'
      ]
    },
    {
      category: '👨‍💻 Ethical Coding',
      items: [
        'Participants must follow ethical coding practices; plagiarism or code copying will lead to disqualification.'
      ]
    },
    {
      category: '🏁 Final Decision',
      items: [
        'The decision of the judges and organizing committee will be final and binding.'
      ]
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="rules" className="py-20 bg-space-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-deep to-space-purple/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-magenta to-neon-purple bg-clip-text text-transparent">
              Rules & Guidelines
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read and follow these rules carefully to ensure a fair and successful hackathon experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-space-dark/50 backdrop-blur-sm border border-neon-blue/10 rounded-xl p-6 hover:border-neon-magenta/30 transition-all duration-300"
            >
              <h3 className="font-orbitron text-lg font-bold text-neon-magenta mb-3">
                {rule.category}
              </h3>
              <ul className="space-y-2">
                {rule.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm font-space flex items-start gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning Box */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-red-500 text-2xl">⚠️</span>
            <span className="font-orbitron text-red-500 font-bold">Important</span>
          </div>
          <p className="text-gray-300 font-space">
            Violation of any rule may result in disqualification. When in doubt, consult a mentor or organizer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesGuidelines;