import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// SCHEDULE data (kept as is for brevity - same as original)
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
    { time:'06:30 PM', endTime:'06:45 PM', event:'Day 1 Closing', description:'Closing announcements for Day 1 and instructions for the next stage.', location:'Main Auditorium', type:'ceremony', icon:'🌙' }
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
    { time:'06:30 PM', endTime:'07:00 PM', event:'Event Closing', description:'Official closing of HACKBLITZ 3.0 and farewell to participants.', location:'Main Auditorium', type:'ceremony', icon:'🎉' }
  ]
};

const EVENT_TYPE_COLORS = { ceremony:'from-sky-300 to-blue-400', workshop:'from-sky-300 to-blue-400', hacking:'from-sky-300 to-blue-400', break:'from-sky-300 to-blue-400', evaluation:'from-sky-300 to-blue-400', deadline:'from-sky-300 to-blue-400', presentation:'from-sky-300 to-blue-400', discussion:'from-sky-300 to-blue-400', announcement:'from-sky-300 to-blue-400', mentorship:'from-sky-300 to-blue-400' };
const DAY_SELECTOR_ITEMS = [{ id:'day1', label:'Day 1', date:'March 24', gradient:'from-sky-400 to-blue-400' }, { id:'day2', label:'Day 2', date:'March 25', gradient:'from-sky-400 to-blue-400' }];

const containerVariants = { hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ staggerChildren:0.1, delayChildren:0.2 } } };
const itemVariants = { hidden:{ x:-20, opacity:0 }, visible:{ x:0, opacity:1, transition:{ type:"spring", stiffness:100, damping:12 } } };

const STAR_POSITIONS = Array.from({ length:30 }, () => ({ width:Math.random()*2+1, height:Math.random()*2+1, left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, opacity:Math.random()*0.5+0.2, duration:Math.random()*4+3 }));
const PARTICLE_POSITIONS = Array.from({ length:10 }, (_,i) => ({ width:Math.random()*4+1, height:Math.random()*4+1, left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, background:i%2===0?'#38BDF8':'#0EA5E9', yOffset:(Math.random()-0.5)*150, xOffset:(Math.random()-0.5)*150, duration:20+Math.random()*30 }));
const SHOOTING_STAR_POSITIONS = Array.from({ length:2 }, (_,i) => ({ top:`${Math.random()*60}%`, left:`${Math.random()*100}%`, rotate:Math.random()*30-15, duration:4+Math.random()*3, delay:i*5 }));

const StarField = React.memo(() => (
  <div className="absolute inset-0">{STAR_POSITIONS.map((s,i)=>(
    <motion.div key={`star-${i}`} className="absolute rounded-full bg-white" style={{ width:s.width,height:s.height,left:s.left,top:s.top,opacity:s.opacity }}
      animate={{ opacity:[0.2,0.5,0.2] }} transition={{ duration:s.duration, repeat:Infinity, ease:"linear" }} />
  ))}</div>
));

const Particles = React.memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">{PARTICLE_POSITIONS.map((p,i)=>(
    <motion.div key={`dust-${i}`} className="absolute rounded-full" style={{ width:p.width,height:p.height,left:p.left,top:p.top,background:p.background,filter:'blur(1px)',opacity:0.2 }}
      animate={{ y:[0,p.yOffset], x:[0,p.xOffset] }} transition={{ duration:p.duration, repeat:Infinity, ease:"linear" }} />
  ))}</div>
));

const ShootingStars = React.memo(() => (
  <div className="absolute inset-0 pointer-events-none hidden md:block">{SHOOTING_STAR_POSITIONS.map((s,i)=>(
    <motion.div key={`shooting-${i}`} className="absolute h-0.5 w-24 sm:w-32 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
      style={{ top:s.top, left:s.left, transform:`rotate(${s.rotate}deg)`, filter:'blur(2px)' }}
      animate={{ x:[0,500], y:[0,300], opacity:[0,1,0] }} transition={{ duration:s.duration, delay:s.delay, repeat:Infinity, ease:"linear" }} />
  ))}</div>
));

const EventCard = React.memo(({ item, index, isSelected, onClick, getEventTypeColor }) => (
  <motion.div whileHover={{ scale:1.02, y:-5 }} className="relative group cursor-pointer" onClick={onClick}>
    <div className={`absolute -inset-1 bg-gradient-to-r ${getEventTypeColor(item.type)} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
    <div className="relative bg-black/40 backdrop-blur-xl border border-sky-300/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-sky-300/40 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-sky-100/5 to-blue-200/5 rounded-full blur-3xl" />
      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className={`p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-gradient-to-r ${getEventTypeColor(item.type)} bg-opacity-10 relative overflow-hidden flex-shrink-0`}>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl relative z-10">{item.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-orbitron text-sm sm:text-base md:text-lg font-bold text-white truncate">{item.event}</h3>
          <div className="flex flex-wrap items-center gap-1 mt-0.5 sm:mt-1">
            <span className="font-orbitron text-[10px] sm:text-xs md:text-sm font-bold bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{item.time}</span>
            <span className="text-white/40 text-[8px] sm:text-xs">→</span>
            <span className="font-orbitron text-[10px] sm:text-xs md:text-sm text-white/100">{item.endTime}</span>
          </div>
          <p className="text-white/100 text-[10px] sm:text-xs mt-0.5 sm:mt-1 flex items-center gap-1">
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{item.location}</span>
          </p>
        </div>
      </div>
      <AnimatePresence>{isSelected && (
        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.2 }} className="overflow-hidden">
          <p className="text-white/100 text-[11px] sm:text-xs md:text-sm font-space leading-relaxed mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-sky-300/20">{item.description}</p>
        </motion.div>
      )}</AnimatePresence>
      <button className="absolute bottom-2 right-2 text-white/40 hover:text-sky-300 transition-colors">
        <svg className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </motion.div>
));

const EventFlow = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleEventClick = useCallback((index) => setSelectedEvent(prev => prev === index ? null : index), []);
  const handleDaySelect = useCallback((dayId) => { setSelectedDay(dayId); setSelectedEvent(null); }, []);
  const currentSchedule = useMemo(() => SCHEDULE[selectedDay], [selectedDay]);
  const getEventTypeColor = useCallback((type) => EVENT_TYPE_COLORS[type] || 'from-sky-300 to-blue-400', []);

  return (
    <LazyMotion features={domAnimation}>
      <section id="eventflow" className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000]">
        <div className="absolute inset-0">
          <StarField />
          <motion.div className="absolute inset-0" style={{ background:'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.15) 0%, transparent 50%)', filter:'blur(80px)' }}
            animate={{ opacity:[0.2,0.3,0.2] }} transition={{ duration:15, repeat:Infinity }} />
          <Particles /><ShootingStars />
          <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.02) 1px, transparent 0)', backgroundSize:'50px 50px' }} />
        </div>

        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none hidden md:block">
          <defs><linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" /><stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.5" /><stop offset="100%" stopColor="#38BDF8" stopOpacity="0.5" /></linearGradient></defs>
          <path d="M 0,100 Q 200,150 400,200 T 800,300 T 1200,400" stroke="url(#timeline-gradient)" strokeWidth="2" fill="none" strokeDasharray="15 15" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div ref={ref} initial="hidden" animate={inView?"visible":"hidden"} variants={containerVariants} className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div variants={itemVariants} className="relative inline-block mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300/20 via-sky-400/20 to-blue-400/20 rounded-full blur-xl" />
              <span className="relative px-4 sm:px-6 py-1.5 sm:py-2 bg-black/40 backdrop-blur-xl border border-sky-300/30 rounded-full inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 text-xs sm:text-sm font-medium tracking-wider">🚀 3-DAY COSMIC JOURNEY</span>
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">Event Flow</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-space leading-relaxed px-4">
              Your 3-day expedition through innovation - every moment counts!
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, type:"spring", stiffness:100 }} className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <div className="relative group w-full max-w-md mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-200 rounded-2xl blur-2xl opacity-30" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-sky-100/10 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 flex gap-1 sm:gap-2">
                {DAY_SELECTOR_ITEMS.map(day => (
                  <motion.button key={day.id} onClick={()=>handleDaySelect(day.id)} className="relative flex-1 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl transition-all duration-300 overflow-hidden" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}>
                    {selectedDay===day.id && <motion.div layoutId="activeDay" className={`absolute inset-0 bg-gradient-to-r ${day.gradient}`} transition={{ type:"spring", duration:0.5 }} />}
                    <span className="relative z-10 flex flex-col items-center">
                      <span className={`font-orbitron text-xs sm:text-sm md:text-base font-bold ${selectedDay===day.id?'text-white':'text-white/60'}`}>{day.label}</span>
                      <span className={`text-[10px] sm:text-xs ${selectedDay===day.id?'text-white':'text-white/40'}`}>{day.date}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={selectedDay} initial={{ opacity:0, x:-50 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:50 }} transition={{ duration:0.3, type:"spring", stiffness:100 }} className="max-w-4xl mx-auto relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-200 to-blue-200 opacity-30" />
                <motion.div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-400 to-blue-400" initial={{ scaleY:0 }} animate={{ scaleY:1 }} transition={{ duration:1, ease:"easeInOut" }} style={{ originY:0 }} />
                {currentSchedule.map((_,i) => i%2===0 && (
                  <motion.div key={i} className="absolute left-1/2 -translate-x-1/2 w-2 h-2 hidden md:block" style={{ top:`${(i/(currentSchedule.length-1))*100}%` }}>
                    <div className="w-full h-full bg-sky-500 rounded-full" />
                  </motion.div>
                ))}
              </div>

              {currentSchedule.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-4 sm:mb-6 md:mb-8 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-200 rounded-full" />
                    <div className="absolute inset-1 bg-[#030014] rounded-full" />
                  </div>
                  <div className="w-full md:w-5/12 pl-10 md:pl-0">
                    <EventCard item={item} index={i} isSelected={selectedEvent===i} onClick={()=>handleEventClick(i)} getEventTypeColor={getEventTypeColor} />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div className="w-full h-px mt-12 sm:mt-16 md:mt-20 relative" initial={{ opacity:0, scaleX:0 }} animate={inView?{ opacity:1, scaleX:1 }:{}} transition={{ duration:1, delay:1 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default EventFlow;