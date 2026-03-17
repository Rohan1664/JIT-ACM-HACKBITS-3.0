import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clock from '../assets/images/clock.png';
import notebook from '../assets/images/notebook.png';
import group from '../assets/images/group.png';
import tick from '../assets/images/tick.png';
import submission from '../assets/images/submission.png';
import handshake from '../assets/images/handshake.png';
import scale from '../assets/images/scale.png';
import programming from '../assets/images/programming.png';

/* ── Static star data ── */
const STARS = Array.from({ length: 35 }, () => ({
  w: Math.random() * 2 + 1,
  l: Math.random() * 100,
  t: Math.random() * 100,
  dur: (Math.random() * 5 + 4).toFixed(1),
  delay: (Math.random() * 3).toFixed(1),
}));

/* ── Framer variants ── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const RulesGuidelines = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const rules = [
    {
      category: '16-Hour Timeline',
      icon: clock,
      items: [
        'The hackathon is a 16-hour continuous coding event; teams must adhere strictly to the given timeline.',
        'All coding must be done only during the official hackathon duration.',
        'Time tracking will be monitored throughout the event.',
      ],
    },
    {
      category: 'No Pre-Built Code',
      icon: notebook,
      items: [
        'Use of pre-built code, templates, or previously developed projects is prohibited.',
        'Teams may use open-source libraries, APIs, and frameworks, provided they are properly acknowledged.',
        'All code must be written during the hackathon hours.',
      ],
    },
    {
      category: 'Team Composition',
      icon: group,
      items: [
        'Teams must consist of the registered members only.',
        'Maximum team size: 4 members',
        'Minimum team size: 2 members',
        'Cross-college teams are allowed.',
      ],
    },
    {
      category: 'Evaluation Checkpoints',
      icon: tick,
      items: [
        'Regular evaluation checkpoints will be conducted.',
        'Progress updates required every 4 hours.',
        'Final evaluation based on innovation and implementation.',
      ],
    },
    {
      category: 'Submission Deadline',
      icon: submission,
      items: [
        'Teams must submit their final project before the deadline.',
        'Late submissions will not be accepted.',
        'Submit code, documentation, and presentation.',
      ],
    },
    {
      category: 'Mentor Guidance',
      icon: handshake,
      items: [
        'Mentors are available for guidance.',
        'Direct implementation by mentors is not allowed.',
        'Mentors will be available throughout the event.',
      ],
    },
    {
      category: 'Misconduct Policy',
      icon: scale,
      items: [
        'Any misconduct will result in disqualification.',
        'Respect all participants and organizers.',
        'Maintain a collaborative environment.',
      ],
    },
    {
      category: 'Ethical Coding',
      icon: programming,
      items: [
        'Follow ethical coding practices.',
        'Give credit to external resources.',
        'Original work only.',
      ],
    },
    {
      category: 'Final Decision',
      icon: tick,
      items: [
        'Judges decision is final.',
        'No appeals after results.',
        'Organizers may modify rules if necessary.',
      ],
    },
  ];

  return (
    <section
      id="rules"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* CSS-animated star field – tiny, low opacity */}
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              width: s.w,
              height: s.w,
              left: `${s.l}%`,
              top: `${s.t}%`,
              opacity: 0.18,
              '--dur': `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        {/* Nebula glow – CSS only, no JS animation */}
        <div
          className="absolute inset-0 animate-glow-pulse"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.11) 0%, transparent 52%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.11) 0%, transparent 52%)',
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.015) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div variants={fadeUpItem} className="relative inline-block mb-3 sm:mb-4">
            <span className="relative px-4 sm:px-6 py-1.5 sm:py-2 bg-black/40 backdrop-blur-xl border border-sky-300/25 rounded-full inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 text-xs sm:text-sm font-medium tracking-wider">
                📋 COSMIC CODE OF CONDUCT
              </span>
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpItem}
            className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
          >
            <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              Rules & Guidelines
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="text-white/75 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-space leading-relaxed px-4"
          >
            Navigate your cosmic journey through these essential guidelines.
            Fair play ensures everyone reaches the stars!
          </motion.p>
        </motion.div>

        {/* ── Rule cards ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 36px -10px rgba(56,189,248,0.3)',
              }}
              className="group relative cursor-default"
            >
              {/* Card */}
              <div className="relative bg-black/35 backdrop-blur-xl border border-sky-300/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-sky-300/60 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-300/6 to-blue-400/6 rounded-full blur-3xl" />

                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 relative z-10">
                  <motion.div
                    className="p-2 sm:p-3 rounded-lg bg-sky-300/8 border border-sky-300/20 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    <img
                      src={rule.icon}
                      alt={rule.category}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    />
                  </motion.div>
                  <h3 className="font-orbitron text-white/90 text-sm sm:text-base font-bold flex-1">
                    {rule.category}
                  </h3>
                </div>

                {/* Rules list */}
                <ul className="space-y-2 sm:space-y-2.5 flex-1 relative z-10">
                  {rule.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-white/75 text-xs sm:text-sm font-space flex items-start gap-2 sm:gap-3"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400/70 flex-shrink-0 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px mt-12 sm:mt-16 md:mt-20 relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default RulesGuidelines;