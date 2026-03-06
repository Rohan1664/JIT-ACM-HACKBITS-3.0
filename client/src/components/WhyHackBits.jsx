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
      title: '16 Hour Hackathon',
      description: 'Non-stop coding marathon to build innovative solutions'
    },
    {
      icon: '👥',
      title: 'Team Registration',
      description: 'Register your team of up to 4 members easily'
    },
    {
      icon: '🚀',
      title: 'Expert Mentors',
      description: 'Guidance from industry experts throughout the event'
    },
    {
      icon: '🏆',
      title: 'Exciting Prizes',
      description: 'Win amazing prizes and recognition for your innovations'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="whyhackbits" className="py-20 bg-space-deep relative overflow-hidden">
      {/* Background Gradient */}
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
            <span className="bg-gradient-to-r from-neon-blue to-neon-magenta bg-clip-text text-transparent">
              Why Hack BITS 3.0?
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of hackathons with cutting-edge features
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-space-dark/50 backdrop-blur-sm border border-neon-blue/10 rounded-xl p-6 text-center hover:border-neon-blue/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm font-space">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-orbitron font-bold text-neon-blue mb-2">16</div>
            <div className="text-gray-400 font-space">HOURS OF CODING</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-orbitron font-bold text-neon-magenta mb-2">4</div>
            <div className="text-gray-400 font-space">MAX TEAM MEMBERS</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-orbitron font-bold text-neon-cyan mb-2">∞</div>
            <div className="text-gray-400 font-space">POSSIBILITIES</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHackBits;