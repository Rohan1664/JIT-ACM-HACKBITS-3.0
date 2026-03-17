import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ── Schedule data ── */
const SCHEDULE = {
  day1: [
    { time:'08:00 AM', endTime:'09:00 AM', event:'Reporting & Registration', description:'Participant reporting time followed by registration and verification process.', location:'Registration Desk', type:'ceremony', icon:'📝' },
    { time:'09:00 AM', endTime:'09:15 AM', event:'Keynote Session', description:'Opening keynote session introducing the hackathon theme, rules, and expectations.', location:'Main Auditorium', type:'ceremony', icon:'🎤' },
    { time:'09:15 AM', endTime:'12:15 PM', event:'Coding Round 1', description:'Participants start building their projects and implementing innovative ideas.', location:'Main Arena', type:'hacking', icon:'💻' },
    { time:'12:15 PM', endTime:'01:15 PM', event:'Mentoring Round', description:'Mentors guide teams, review progress, and provide suggestions for improvement.', location:'Mentor Zone', type:'mentorship', icon:'🧑‍🏫' },
    { time:'01:15 PM', endTime:'01:45 PM', event:'Lunch Break', description:'Lunch break for participants to relax, network, and recharge before the next round.', location:'Food Court', type:'break', icon:'🍱' },
    { time:'01:45 PM', endTime:'02:45 PM', event:'Evaluation Round 1', description:'Judges review team progress and evaluate the first stage of development.', location:'Evaluation Zone', type:'evaluation', icon:'📊' },
    { time:'02:45 PM', endTime:'05:45 PM', event:'Coding Round 2', description:'Participants continue coding, refining features, and preparing their projects.', location:'Main Arena', type:'hacking', icon:'💻' },
    { time:'05:45 PM', endTime:'06:00 PM', event:'Evaluation Round 2', description:'Second evaluation by judges to review completed work and project progress.', location:'Evaluation Zone', type:'evaluation', icon:'📈' },
    { time:'06:00 PM', endTime:'06:15 PM', event:'Feedback Session', description:'Judges provide feedback to participants about their project performance.', location:'Main Auditorium', type:'discussion', icon:'💬' },
    { time:'06:15 PM', endTime:'06:30 PM', event:'Elimination Round (Day 1 Results)', description:'Announcement of Day 1 results and selection of teams advancing to the next stage.', location:'Main Auditorium', type:'announcement', icon:'🏁' },
    { time:'06:30 PM', endTime:'06:45 PM', event:'Day 1 Closing', description:'Closing announcements for Day 1 and instructions for the next stage.', location:'Main Auditorium', type:'ceremony', icon:'🌙' },
  ],
  day2: [
    { time:'08:30 AM', endTime:'09:00 AM', event:'Reporting & Verification', description:'Participants report to the venue and complete verification for Day 2 activities.', location:'Registration Desk', type:'ceremony', icon:'📝' },
    { time:'09:00 AM', endTime:'12:00 PM', event:'Coding Round', description:'Teams continue working on their projects and implementing new features.', location:'Main Arena', type:'hacking', icon:'💻' },
    { time:'12:00 PM', endTime:'01:00 PM', event:'Mentoring & Coding', description:'Mentors review team progress and provide suggestions while teams continue development.', location:'Mentor Zone', type:'mentorship', icon:'🧑‍🏫' },
    { time:'01:00 PM', endTime:'01:30 PM', event:'Lunch Break', description:'Lunch break for participants to relax and recharge before the final rounds.', location:'Food Court', type:'break', icon:'🍱' },
    { time:'01:30 PM', endTime:'05:00 PM', event:'Final Coding Round', description:'Final development phase where teams complete their projects and prepare for evaluation.', location:'Main Arena', type:'hacking', icon:'⚙️' },
    { time:'05:00 PM', endTime:'05:45 PM', event:'Evaluation Round 4', description:'Judges evaluate the final project submissions and presentations.', location:'Evaluation Zone', type:'evaluation', icon:'📊' },
    { time:'05:45 PM', endTime:'06:00 PM', event:'Feedback Session', description:'Judges provide feedback on projects and highlight innovative solutions.', location:'Main Auditorium', type:'discussion', icon:'💬' },
    { time:'06:00 PM', endTime:'06:30 PM', event:'Winner Announcement & Closing Ceremony', description:'Announcement of winners, vote of thanks, and group photoshoot marking the completion of HackBlitz 3.0.', location:'Main Auditorium', type:'announcement', icon:'🏆' },
    { time:'06:30 PM', endTime:'07:00 PM', event:'Event Closing', description:'Official closing of HACKBLITZ 3.0 and farewell to participants.', location:'Main Auditorium', type:'ceremony', icon:'🎉' },
  ],
};

const DAY_SELECTOR_ITEMS = [
  { id: 'day1', label: 'Day 1', date: 'March 24', gradient: 'from-sky-400 to-blue-400' },
  { id: 'day2', label: 'Day 2', date: 'March 25', gradient: 'from-sky-400 to-blue-400' },
];

/* ── Static background data ── */
const STAR_DATA = Array.from({ length: 28 }, () => ({
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
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const daySwitch = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir < 0 ? 40 : -40, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }),
};

/* ── Event Card ── */
const EventCard = React.memo(({ item, index, isSelected, onClick }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 8px 30px -8px rgba(56,189,248,0.25)' }}
    className="relative group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative bg-black/40 backdrop-blur-xl border border-sky-300/20 rounded-xl sm:rounded-2xl p-3 sm:p-4
                    hover:border-sky-300/45 transition-all duration-300 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />

      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 rounded-xl bg-sky-300/8 border border-sky-300/20 flex-shrink-0">
          <span className="text-xl sm:text-2xl relative z-10">{item.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-orbitron text-sm sm:text-base font-bold text-white truncate">{item.event}</h3>
          <div className="flex flex-wrap items-center gap-1 mt-0.5 sm:mt-1">
            <span className="font-orbitron text-[10px] sm:text-xs font-bold text-sky-300">{item.time}</span>
            <span className="text-white/35 text-[8px] sm:text-xs">→</span>
            <span className="font-orbitron text-[10px] sm:text-xs text-white/70">{item.endTime}</span>
          </div>
          <p className="text-white/55 text-[10px] sm:text-xs mt-0.5 sm:mt-1 flex items-center gap-1">
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{item.location}</span>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/75 text-[11px] sm:text-xs font-space leading-relaxed mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-sky-300/15">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="absolute bottom-2 right-2 text-white/35 hover:text-sky-300 transition-colors">
        <svg
          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </motion.div>
));

const EventFlow = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [direction, setDirection] = useState(1);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const handleEventClick = useCallback(
    (i) => setSelectedEvent((prev) => (prev === i ? null : i)),
    []
  );
  const handleDaySelect = useCallback((dayId) => {
    setDirection(dayId === 'day2' ? 1 : -1);
    setSelectedDay(dayId);
    setSelectedEvent(null);
  }, []);

  const currentSchedule = useMemo(() => SCHEDULE[selectedDay], [selectedDay]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="eventflow"
        className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]"
      >
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Stars */}
          {STAR_DATA.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-star-twinkle"
              style={{
                width: s.w,
                height: s.w,
                left: `${s.l}%`,
                top: `${s.t}%`,
                opacity: 0.2,
                '--dur': `${s.dur}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}

          {/* Nebula */}
          <div
            className="absolute inset-0 animate-glow-pulse"
            style={{
              background:
                'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.12) 0%, transparent 52%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.12) 0%, transparent 52%)',
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.015) 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
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
                  🚀 3-DAY COSMIC JOURNEY
                </span>
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpItem}
              className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
            >
              <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                Event Flow
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUpItem}
              className="text-white/75 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-space leading-relaxed px-4"
            >
              Your 3-day expedition through innovation — every moment counts!
            </motion.p>
          </motion.div>

          {/* ── Day Selector ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8 sm:mb-10 md:mb-12"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative bg-black/55 backdrop-blur-xl border border-sky-300/15 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 flex gap-1 sm:gap-2">
                {DAY_SELECTOR_ITEMS.map((day) => (
                  <motion.button
                    key={day.id}
                    onClick={() => handleDaySelect(day.id)}
                    className="relative flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {selectedDay === day.id && (
                      <motion.div
                        layoutId="activeDay"
                        className={`absolute inset-0 bg-gradient-to-r ${day.gradient}`}
                        transition={{ type: 'spring', duration: 0.48, bounce: 0.18 }}
                      />
                    )}
                    <span className="relative z-10 flex flex-col items-center">
                      <span className={`font-orbitron text-xs sm:text-sm font-bold ${selectedDay === day.id ? 'text-white' : 'text-white/55'}`}>
                        {day.label}
                      </span>
                      <span className={`text-[10px] sm:text-xs ${selectedDay === day.id ? 'text-white/80' : 'text-white/35'}`}>
                        {day.date}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Schedule ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selectedDay}
              custom={direction}
              variants={daySwitch}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-4xl mx-auto relative"
            >
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block">
                <div className="absolute inset-0 bg-sky-300/20" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-sky-400 to-blue-400"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                />
              </div>

              {currentSchedule.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-4 sm:mb-6 md:mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Node dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full" />
                    <div className="absolute inset-1 bg-[#030014] rounded-full" />
                  </div>

                  <div className="w-full md:w-5/12 pl-10 md:pl-0">
                    <EventCard
                      item={item}
                      index={i}
                      isSelected={selectedEvent === i}
                      onClick={() => handleEventClick(i)}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

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
    </LazyMotion>
  );
};

export default EventFlow;