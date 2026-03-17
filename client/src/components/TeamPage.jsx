import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import sponsor1 from '../assets/images/jitacm.avif';
import sponsor2 from '../assets/images/jitacm.avif';
import sponsor3 from '../assets/images/jitacm.avif';


import executive1 from '../assets/executivemembers/ayushdhole.jpeg';
import executive2 from '../assets/executivemembers/rohanfasate.jpeg';
import executive3 from '../assets/executivemembers/isha.jpeg';
import executive4 from '../assets/executivemembers/riyasharma.jpeg';
import executive5 from '../assets/executivemembers/nayan.jpeg';
import executive6 from '../assets/executivemembers/sairamchavla.jpeg';
import executive7 from '../assets/executivemembers/yashtanwani.jpeg';
import executive8 from '../assets/executivemembers/ronitratnani.jpeg';
import executive9 from '../assets/executivemembers/lavychawla.jpeg';
import executive10 from '../assets/executivemembers/ayushdhole.jpeg';


import acmMember1 from '../assets/members/meher2.jpg';
import acmMember2 from '../assets/members/waley.jpg';
import acmMember3 from '../assets/members/sujalhadge.JPG';
import acmMember4 from '../assets/members/omdhage.JPG';
import acmMember5 from '../assets/members/ayushmishra.JPG';
import acmMember6 from '../assets/members/samirshaikh.JPG';
import acmMember7 from '../assets/members/harshita.JPG';
import acmMember8 from '../assets/members/sujalhadge.JPG';
import acmMember9 from '../assets/members/sujalhadge.JPG';
import acmMember10 from '../assets/members/sujalhadge.JPG';
import acmMember11 from '../assets/members/sujalhadge.JPG';
import acmMember12 from '../assets/members/sujalhadge.JPG';
import acmMember13 from '../assets/members/sujalhadge.JPG';
import acmMember14 from '../assets/members/sujalhadge.JPG';
import acmMember15 from '../assets/members/sujalhadge.JPG';

// Import social media icons from image folder
import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';

/* ── Static data ── */
const SPONSORS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Tech Company ${i + 1}`,
  logo: [sponsor1, sponsor2, sponsor3][i % 3],
  tier: ['Platinum', 'Gold', 'Silver', 'Gold', 'Silver', 'Platinum', 'Bronze', 'Bronze'][i] + ' Sponsor',
}));

const EXECUTIVE_MEMBERS = [
  { id:1, name:'Ayush Dhole', image:executive1 },
  { id:2, name:'Rohan Fasate', image:executive2 },
  { id:3, name:'Isha', image:executive3 },
  { id:4, name:'Riya Sharma', image:executive4 },
  { id:5, name:'Nayan', image:executive5 },
  { id:6, name:'Sairam Chavla', image:executive6 },
  { id:7, name:'Yash Tanwani', image:executive7 },
  { id:8, name:'Ronit Ratnani', image:executive8 },
  { id:9, name:'Lavy Chawla', image:executive9 },
  { id:10, name:'Divya Nair', image:executive10 },
];

const ACM_MEMBERS = [
  { id:1, name:'Meher', post:'Technical Head', image:acmMember1 },
  { id:2, name:'Waley', post:'Event Management Head', image:acmMember2 },
  { id:3, name:'Sujal Hadge', post:'PR & Outreach Head', image:acmMember3 },
  { id:4, name:'Om Dhage', post:'Design Head', image:acmMember4 },
  { id:5, name:'Ayush Mishra', post:'Content Lead', image:acmMember5 },
  { id:6, name:'Samir Shaikh', post:'Treasurer', image:acmMember6 },
  { id:7, name:'Harshita', post:'Web Master', image:acmMember7 },
  { id:8, name:'Member 8', post:'Research Lead', image:acmMember8 },
  { id:9, name:'Member 9', post:'Competitive Programming Head', image:acmMember9 },
  { id:10, name:'Member 10', post:'Women in Tech Lead', image:acmMember10 },
  { id:11, name:'Member 11', post:'Cloud Computing Lead', image:acmMember11 },
  { id:12, name:'Member 12', post:'Cybersecurity Lead', image:acmMember12 },
  { id:13, name:'Member 13', post:'Blockchain Lead', image:acmMember13 },
  { id:14, name:'Member 14', post:'Open Source Lead', image:acmMember14 },
  { id:15, name:'Member 15', post:'ML Lead', image:acmMember15 },
];

/* ── Static background stars ── */
const STAR_DATA = Array.from({ length: 40 }, () => ({
  w: Math.random() * 2 + 1,
  l: Math.random() * 100,
  t: Math.random() * 100,
  dur: (Math.random() * 5 + 4).toFixed(1),
  delay: (Math.random() * 3).toFixed(1),
}));

/* ── Animation variants ── */
const SLIDE_VARIANTS = {
  enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d < 0 ? 300 : -300, opacity: 0 })
};

const CONTAINER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const ITEM_VARIANTS = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Social icons from image folder ── */
const SocialIcons = React.memo(({ size = 'default' }) => {
  const iconClass = size === 'large' ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-6 h-6 sm:w-7 sm:h-7';
  const base = `flex items-center justify-center ${iconClass} text-sky-300 transition-all duration-250 bg-black/30 border border-sky-300/25 rounded-full hover:border-sky-300 hover:bg-sky-300/10`;

  const socialIcons = [
    { icon: instagramIcon, link: 'https://instagram.com/acm_jit', name: 'instagram' },
    { icon: linkedinIcon, link: 'https://www.linkedin.com/in/jit-acm-student-chapter', name: 'linkedin' },
    { icon: githubIcon, link: 'https://github.com/jitacm', name: 'github' }
  ];

  return (
    <>
      {socialIcons.map((social, i) => (
        <motion.a
          key={i}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          className={base}
        >
          <img src={social.icon} alt={social.name} className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert" />
        </motion.a>
      ))}
    </>
  );
});

/* ── Member Card with larger text ── */
const MemberCard = React.memo(({ member, size = 'default' }) => {
  const isExec = size === 'large';
  const cardClass = `relative flex flex-col items-center w-full bg-black/30 backdrop-blur-xl border border-sky-300/20 rounded-xl sm:rounded-2xl hover:border-sky-300/45 transition-all duration-300 ${isExec ? 'p-4 sm:p-5 md:p-6 lg:p-7' : 'p-3 sm:p-4 md:p-5'} aspect-square`;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8, boxShadow: '0 12px 36px -8px rgba(56,189,248,0.25)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative group w-full"
    >
      <div className={cardClass}>
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-sky-300/5 to-blue-400/5 rounded-full blur-3xl" />

        {/* Avatar */}
        <div className={`relative overflow-hidden border-2 border-sky-300/25 rounded-full group-hover:border-sky-300/60 transition-all duration-300 ${isExec ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32' : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28'} mt-2 sm:mt-3`}>
          <img src={member.image} alt={member.name} className="object-cover w-full h-full" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </div>

        {/* Info with larger text */}
        <div className="w-full mt-2 sm:mt-3 md:mt-4 text-center">
          <h3 className={`font-bold text-white font-orbitron leading-tight px-1 ${isExec ? 'text-sm sm:text-base md:text-lg lg:text-xl' : 'text-xs sm:text-sm md:text-base'}`}>
            {member.name}
          </h3>
          {member.post && (
            <p className={`font-semibold text-sky-300 font-space mt-1 sm:mt-2 ${isExec ? 'text-xs sm:text-sm md:text-base' : 'text-[11px] sm:text-xs md:text-sm'}`}>
              {member.post}
            </p>
          )}
          {member.description && (
            <p className={`hidden sm:block text-white/50 font-space line-clamp-2 mt-1 sm:mt-2 ${isExec ? 'text-[11px] sm:text-xs md:text-sm' : 'text-[10px] sm:text-[11px] md:text-xs'}`}>
              {member.description}
            </p>
          )}
          <div className={`hidden sm:flex justify-center gap-2 sm:gap-3 ${isExec ? 'mt-3 sm:mt-4' : 'mt-2 sm:mt-3'}`}>
            <SocialIcons size={isExec ? 'large' : 'default'} />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ── Section header with larger text ── */
const SectionHeader = ({ title }) => (
  <motion.div variants={ITEM_VARIANTS} className="mb-6 sm:mb-8 md:mb-10 text-center">
    <h2 className="relative inline-block font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold">
      <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{title}</span>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </h2>
  </motion.div>
);

/* ── Navigation Buttons ── */
const NavigationButtons = ({ onPrev, onNext, isPrevDisabled, isNextDisabled }) => (
  <>
    <motion.button
      onClick={onPrev}
      disabled={isPrevDisabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/25 text-sky-300 hover:bg-sky-300/15 transition-all ${isPrevDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
    >
      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
    </motion.button>
    <motion.button
      onClick={onNext}
      disabled={isNextDisabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/25 text-sky-300 hover:bg-sky-300/15 transition-all ${isNextDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
    >
      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </motion.button>
  </>
);

/* ── Mobile Navigation ── */
const MobileNav = ({ onPrev, onNext, isPrevDisabled, isNextDisabled, page, totalPages }) => (
  <div className="flex justify-between items-center mt-4 sm:hidden">
    <motion.button onClick={onPrev} disabled={isPrevDisabled} whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/25 text-sky-300 ${isPrevDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
    </motion.button>
    <span className="text-white/60 font-space text-sm">Page {page} of {totalPages}</span>
    <motion.button onClick={onNext} disabled={isNextDisabled} whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/25 text-sky-300 ${isNextDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </motion.button>
  </div>
);

/* ── Pagination Dots ── */
const PaginationDots = ({ total, current, onChange }) => (
  <motion.div variants={ITEM_VARIANTS} className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
    {Array.from({ length: total }).map((_, i) => (
      <motion.button
        key={i}
        onClick={() => onChange(i + 1)}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.9 }}
        className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${current === i + 1 ? 'bg-sky-300 w-5 sm:w-6' : 'bg-sky-300/25 hover:bg-sky-300/45 w-2 sm:w-2.5'}`}
      />
    ))}
  </motion.div>
);

const TeamPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  
  // Pagination states
  const [executivePage, setExecutivePage] = useState(1);
  const [acmPage, setAcmPage] = useState(1);
  const [direction, setDirection] = useState(0);
  
  // Auto-scroll states
  const [isExecutiveHovered, setIsExecutiveHovered] = useState(false);
  const [isAcmHovered, setIsAcmHovered] = useState(false);
  
  // Items per page based on screen size
  const [executivePerPage, setExecutivePerPage] = useState(4);
  const [acmPerPage, setAcmPerPage] = useState(5);

  // Handle resize for responsive items per page
  const handleResize = useCallback(() => {
    const w = window.innerWidth;
    setExecutivePerPage(w < 640 ? 2 : w < 768 ? 2 : w < 1024 ? 3 : 4);
    setAcmPerPage(w < 640 ? 2 : w < 768 ? 2 : w < 1024 ? 3 : 5);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Calculate total pages
  const executiveTotalPages = useMemo(() => Math.ceil(EXECUTIVE_MEMBERS.length / executivePerPage), [executivePerPage]);
  const acmTotalPages = useMemo(() => Math.ceil(ACM_MEMBERS.length / acmPerPage), [acmPerPage]);

  // Get current page members
  const currentExecutiveMembers = useMemo(() => 
    EXECUTIVE_MEMBERS.slice((executivePage - 1) * executivePerPage, executivePage * executivePerPage), 
    [executivePage, executivePerPage]
  );
  
  const currentAcmMembers = useMemo(() => 
    ACM_MEMBERS.slice((acmPage - 1) * acmPerPage, acmPage * acmPerPage), 
    [acmPage, acmPerPage]
  );

  // Auto-scroll effects
  useEffect(() => {
    if (isExecutiveHovered || executiveTotalPages <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setExecutivePage(prev => prev < executiveTotalPages ? prev + 1 : 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [executiveTotalPages, isExecutiveHovered]);

  useEffect(() => {
    if (isAcmHovered || acmTotalPages <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setAcmPage(prev => prev < acmTotalPages ? prev + 1 : 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [acmTotalPages, isAcmHovered]);

  // Navigation handlers
  const nextExecutivePage = useCallback(() => {
    if (executivePage < executiveTotalPages) {
      setDirection(1);
      setExecutivePage(p => p + 1);
    }
  }, [executivePage, executiveTotalPages]);

  const prevExecutivePage = useCallback(() => {
    if (executivePage > 1) {
      setDirection(-1);
      setExecutivePage(p => p - 1);
    }
  }, [executivePage]);

  const nextAcmPage = useCallback(() => {
    if (acmPage < acmTotalPages) {
      setDirection(1);
      setAcmPage(p => p + 1);
    }
  }, [acmPage, acmTotalPages]);

  const prevAcmPage = useCallback(() => {
    if (acmPage > 1) {
      setDirection(-1);
      setAcmPage(p => p - 1);
    }
  }, [acmPage]);

  const handleExecutivePageChange = useCallback((page) => {
    setDirection(page > executivePage ? 1 : -1);
    setExecutivePage(page);
  }, [executivePage]);

  const handleAcmPageChange = useCallback((page) => {
    setDirection(page > acmPage ? 1 : -1);
    setAcmPage(page);
  }, [acmPage]);

  return (
    <LazyMotion features={domAnimation}>
      <main id="teampage" className="relative min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000] scroll-mt-20">

        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          {STAR_DATA.map((s, i) => (
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
          <div
            className="absolute inset-0 animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.12) 0%, transparent 52%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.12) 0%, transparent 52%)',
            }}
          />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.015) 1px, transparent 0)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">

          {/* Hero title with larger text */}
          <motion.div
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 sm:mb-16 text-center"
          >
            <h1 className="mb-3 sm:mb-4 font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-blue-400 bg-clip-text text-transparent">Our Team</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-space px-4">
              Meet the amazing people behind Hackblitz 3.0
            </p>
          </motion.div>

          {/* ── Sponsors (infinite scroll) ── */}
          <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={CONTAINER_VARIANTS} className="mb-12 sm:mb-16 md:mb-20 overflow-hidden">
            <SectionHeader title="Our Sponsors" />
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
              >
                {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((s, i) => (
                  <div key={`${s.id}-${i}`} className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-52">
                    <motion.div className="relative group" whileHover={{ scale: 1.04 }} transition={{ duration: 0.25 }}>
                      <div className="absolute inset-0 bg-sky-300/0 group-hover:bg-sky-300/10 rounded-lg transition-all duration-300 blur-lg" />
                      <div className="relative p-3 sm:p-4 md:p-5 bg-black/30 backdrop-blur-sm border border-sky-300/15 rounded-lg sm:rounded-xl hover:border-sky-300/35 transition-all duration-300">
                        <div className="flex items-center justify-center p-2 sm:p-3 aspect-square">
                          <img src={s.logo} alt={s.name} className="object-contain w-full h-full" loading="lazy" />
                        </div>
                        <div className="mt-2 sm:mt-3 text-center">
                          <p className="text-xs sm:text-sm font-medium text-white/80 font-space truncate">{s.name}</p>
                          <p className="text-[10px] sm:text-xs text-sky-300/60 font-space truncate">{s.tier}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── Executive Members with Auto-scroll & Pagination ── */}
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-12 sm:mb-16 md:mb-20"
            onMouseEnter={() => setIsExecutiveHovered(true)}
            onMouseLeave={() => setIsExecutiveHovered(false)}
          >
            <SectionHeader title="Executive Members" />
            <div className="relative">
              <NavigationButtons 
                onPrev={prevExecutivePage} 
                onNext={nextExecutivePage} 
                isPrevDisabled={executivePage === 1} 
                isNextDisabled={executivePage === executiveTotalPages} 
              />
              <div className="overflow-hidden px-0 sm:px-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={executivePage}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                  >
                    {currentExecutiveMembers.map(member => (
                      <MemberCard key={member.id} member={member} size="large" />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              <MobileNav 
                onPrev={prevExecutivePage} 
                onNext={nextExecutivePage} 
                isPrevDisabled={executivePage === 1} 
                isNextDisabled={executivePage === executiveTotalPages} 
                page={executivePage} 
                totalPages={executiveTotalPages} 
              />
            </div>
            {executiveTotalPages > 1 && (
              <PaginationDots 
                total={executiveTotalPages} 
                current={executivePage} 
                onChange={handleExecutivePageChange} 
              />
            )}
          </motion.div>

          {/* ── ACM Members with Auto-scroll & Pagination ── */}
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-12 sm:mb-16 md:mb-20"
            onMouseEnter={() => setIsAcmHovered(true)}
            onMouseLeave={() => setIsAcmHovered(false)}
          >
            <SectionHeader title="ACM Members" />
            <div className="relative">
              <NavigationButtons 
                onPrev={prevAcmPage} 
                onNext={nextAcmPage} 
                isPrevDisabled={acmPage === 1} 
                isNextDisabled={acmPage === acmTotalPages} 
              />
              <div className="overflow-hidden px-0 sm:px-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={acmPage}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
                  >
                    {currentAcmMembers.map(member => (
                      <MemberCard key={member.id} member={member} size="default" />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              <MobileNav 
                onPrev={prevAcmPage} 
                onNext={nextAcmPage} 
                isPrevDisabled={acmPage === 1} 
                isNextDisabled={acmPage === acmTotalPages} 
                page={acmPage} 
                totalPages={acmTotalPages} 
              />
            </div>
            {acmTotalPages > 1 && (
              <PaginationDots 
                total={acmTotalPages} 
                current={acmPage} 
                onChange={handleAcmPageChange} 
              />
            )}
          </motion.div>
        </div>
      </main>
    </LazyMotion>
  );
};

export default TeamPage;