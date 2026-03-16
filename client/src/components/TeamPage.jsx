import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Static data moved outside component
// Sponsor Logos (replace with your actual images)
import sponsor1 from '../assets/images/jitacm.avif';
import sponsor2 from '../assets/images/jitacm.avif';
import sponsor3 from '../assets/images/jitacm.avif';

// Executive Member Photos
import executive1 from '../assets/images/jitacm.avif';
import executive2 from '../assets/images/jitacm.avif';
import executive3 from '../assets/images/jitacm.avif';
import executive4 from '../assets/images/jitacm.avif';
import executive5 from '../assets/images/jitacm.avif';
import executive6 from '../assets/images/jitacm.avif';
import executive7 from '../assets/images/jitacm.avif';
import executive8 from '../assets/images/jitacm.avif';

// ACM Member Photos
import acmMember1 from '../assets/images/jitacm.avif';
import acmMember2 from '../assets/images/jitacm.avif';
import acmMember3 from '../assets/images/jitacm.avif';
import acmMember4 from '../assets/images/jitacm.avif';
import acmMember5 from '../assets/images/jitacm.avif';
import acmMember6 from '../assets/images/jitacm.avif';
import acmMember7 from '../assets/images/jitacm.avif';
import acmMember8 from '../assets/images/jitacm.avif';
import acmMember9 from '../assets/images/jitacm.avif';
import acmMember10 from '../assets/images/jitacm.avif';
import acmMember11 from '../assets/images/jitacm.avif';
import acmMember12 from '../assets/images/jitacm.avif';
import acmMember13 from '../assets/images/jitacm.avif';
import acmMember14 from '../assets/images/jitacm.avif';
import acmMember15 from '../assets/images/jitacm.avif';

// Static data arrays - moved outside component
const SPONSORS = [
  { id: 1, name: 'Tech Company 1', logo: sponsor1, tier: 'Platinum Sponsor' },
  { id: 2, name: 'Tech Company 2', logo: sponsor2, tier: 'Gold Sponsor' },
  { id: 3, name: 'Tech Company 3', logo: sponsor3, tier: 'Silver Sponsor' },
  { id: 4, name: 'Tech Company 4', logo: sponsor1, tier: 'Gold Sponsor' },
  { id: 5, name: 'Tech Company 5', logo: sponsor2, tier: 'Silver Sponsor' },
  { id: 6, name: 'Tech Company 6', logo: sponsor3, tier: 'Platinum Sponsor' },
  { id: 7, name: 'Tech Company 7', logo: sponsor1, tier: 'Bronze Sponsor' },
  { id: 8, name: 'Tech Company 8', logo: sponsor2, tier: 'Bronze Sponsor' },
];

const EXECUTIVE_MEMBERS = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    post: 'Faculty Coordinator',
    image: executive1,
    description: 'Head of Computer Science Department',
  },
  {
    id: 2,
    name: 'Prof. Sneha Patel',
    post: 'ACM Chapter Advisor',
    image: executive2,
    description: '15+ years of experience in academia',
  },
  {
    id: 3,
    name: 'Amit Sharma',
    post: 'President',
    image: executive3,
    description: 'Final Year CSE, Lead Organizer Hackblitz 3.0',
  },
  {
    id: 4,
    name: 'Priya Gupta',
    post: 'Vice President',
    image: executive4,
    description: 'Third Year CSE, Technical Lead',
  },
  {
    id: 5,
    name: 'Vikram Mehta',
    post: 'General Secretary',
    image: executive5,
    description: 'Third Year CSE',
  },
  {
    id: 6,
    name: 'Neha Singh',
    post: 'Treasurer',
    image: executive6,
    description: 'Second Year CSE',
  },
  {
    id: 7,
    name: 'Rahul Verma',
    post: 'Technical Head',
    image: executive7,
    description: 'Third Year CSE',
  },
  {
    id: 8,
    name: 'Anjali Desai',
    post: 'Design Head',
    image: executive8,
    description: 'Second Year CSE',
  },
];

const ACM_MEMBERS = [
  {
    id: 1,
    name: 'Rahul Verma',
    post: 'Technical Head',
    image: acmMember1,
    description: 'Full Stack Developer',
  },
  {
    id: 2,
    name: 'Neha Singh',
    post: 'Event Management Head',
    image: acmMember2,
    description: 'Second Year CSE',
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    post: 'PR & Outreach Head',
    image: acmMember3,
    description: 'Third Year CSE',
  },
  {
    id: 4,
    name: 'Anjali Desai',
    post: 'Design Head',
    image: acmMember4,
    description: 'UI/UX Designer',
  },
  {
    id: 5,
    name: 'Karan Joshi',
    post: 'Content Lead',
    image: acmMember5,
    description: 'Second Year CSE',
  },
  {
    id: 6,
    name: 'Divya Nair',
    post: 'Treasurer',
    image: acmMember6,
    description: 'Third Year CSE',
  },
  {
    id: 7,
    name: 'Rohan Gupta',
    post: 'Web Master',
    image: acmMember7,
    description: 'Second Year CSE',
  },
  {
    id: 8,
    name: 'Pooja Sharma',
    post: 'Research Lead',
    image: acmMember8,
    description: 'Third Year CSE',
  },
  {
    id: 9,
    name: 'Akash Singh',
    post: 'Competitive Programming Head',
    image: acmMember9,
    description: 'Third Year CSE',
  },
  {
    id: 10,
    name: 'Sneha Reddy',
    post: 'Women in Tech Lead',
    image: acmMember10,
    description: 'Second Year CSE',
  },
  {
    id: 11,
    name: 'Arjun Mehta',
    post: 'Machine Learning Lead',
    image: acmMember11,
    description: 'Third Year CSE',
  },
  {
    id: 12,
    name: 'Kavya Sharma',
    post: 'Cloud Computing Lead',
    image: acmMember12,
    description: 'Second Year CSE',
  },
  {
    id: 13,
    name: 'Rishi Patel',
    post: 'Cybersecurity Lead',
    image: acmMember13,
    description: 'Third Year CSE',
  },
  {
    id: 14,
    name: 'Ishita Gupta',
    post: 'Blockchain Lead',
    image: acmMember14,
    description: 'Second Year CSE',
  },
  {
    id: 15,
    name: 'Tanmay Kumar',
    post: 'Open Source Lead',
    image: acmMember15,
    description: 'Third Year CSE',
  },
];

// Pre-calculate duplicated sponsors
const DUPLICATED_SPONSORS = [...SPONSORS, ...SPONSORS, ...SPONSORS];

// Animation variants - memoized
const SLIDE_VARIANTS = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ITEM_VARIANTS = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

// Pre-generate star positions
const STAR_POSITIONS = Array.from({ length: 50 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: Math.random() * 2 + 1,
  height: Math.random() * 2 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 2,
}));

// Pre-generate particle positions
const PARTICLE_POSITIONS = Array.from({ length: 30 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: Math.random() * 3 + 1,
  height: Math.random() * 3 + 1,
  opacity: Math.random() * 0.5 + 0.2,
  xRange: (Math.random() - 0.5) * 100,
  yRange: (Math.random() - 0.5) * 100,
  duration: Math.random() * 20 + 10,
}));

// Memoized components
const Stars = React.memo(() => (
  <div className="absolute inset-0">
    {STAR_POSITIONS.map((star, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute rounded-full bg-white"
        style={{
          width: star.width,
          height: star.height,
          left: star.left,
          top: star.top,
          opacity: star.opacity || 0.3,
        }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
));

Stars.displayName = 'Stars';

const Particles = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    {PARTICLE_POSITIONS.map((particle, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: particle.width,
          height: particle.height,
          left: particle.left,
          top: particle.top,
          opacity: particle.opacity,
        }}
        animate={{
          y: [0, particle.yRange],
          x: [0, particle.xRange],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: particle.duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </div>
));

Particles.displayName = 'Particles';

// Social Icons component
const SocialIcons = React.memo(({ size = 'default' }) => {
  const iconSizes = {
    default: 'w-5 h-5 sm:w-6 sm:h-6',
    large: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'
  };
  
  const iconClass = iconSizes[size] || iconSizes.default;
  const svgClass = size === 'large' ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4' : 'w-2.5 h-2.5 sm:w-3 sm:h-3';
  
  return (
    <>
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, y: -2 }}
        className={`flex items-center justify-center ${iconClass} text-sky-300 transition-all duration-300 bg-black/30 border border-sky-300/30 rounded-full hover:border-sky-300 hover:text-white`}
      >
        <svg className={svgClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, y: -2 }}
        className={`flex items-center justify-center ${iconClass} text-sky-300 transition-all duration-300 bg-black/30 border border-sky-300/30 rounded-full hover:border-sky-300 hover:text-white`}
      >
        <svg className={svgClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
        </svg>
      </motion.a>
    </>
  );
});

SocialIcons.displayName = 'SocialIcons';

// Member Card component
const MemberCard = React.memo(({ member, size = 'default' }) => {
  const isExecutive = size === 'large';
  
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      className="relative group w-full"
    >
      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-sky-300 to-blue-400 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl" />
      <div className={`relative flex flex-col items-center w-full transition-all duration-300 bg-black/30 backdrop-blur-xl border border-sky-300/20 rounded-xl sm:rounded-2xl hover:border-sky-300/40 ${
        isExecutive 
          ? 'p-3 sm:p-4 md:p-5 lg:p-6 aspect-square' 
          : 'p-2.5 sm:p-3 md:p-4 aspect-square'
      }`}>
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-sky-300/5 to-blue-400/5 rounded-full blur-3xl" />

        <div className={`relative w-full flex flex-col items-center ${isExecutive ? 'mt-1 sm:mt-2' : 'mt-0.5 sm:mt-1'}`}>
          <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-r from-sky-300 to-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-50" />
          <motion.div
            className={`relative overflow-hidden border-2 border-sky-300/30 rounded-full group-hover:border-sky-300 transition-all duration-300 ${
              isExecutive 
                ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' 
                : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sky-300/0 via-sky-300/20 to-sky-300/0"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

        <div className="w-full mt-1.5 sm:mt-2 md:mt-3 text-center">
          <h3 className={`font-bold text-white font-orbitron leading-tight px-1 ${
            isExecutive 
              ? 'text-xs sm:text-sm md:text-base lg:text-lg' 
              : 'text-[11px] sm:text-xs md:text-sm'
          }`}>
            {member.name}
          </h3>
          <p className={`font-semibold text-sky-300 font-space mt-0.5 sm:mt-1 ${
            isExecutive 
              ? 'text-[10px] sm:text-xs md:text-sm' 
              : 'text-[9px] sm:text-[11px] md:text-xs'
          }`}>
            {member.post}
          </p>

          {member.description && (
            <p className={`hidden sm:block text-white/60 font-space line-clamp-2 mt-0.5 sm:mt-1 ${
              isExecutive 
                ? 'text-[9px] sm:text-[10px] md:text-xs' 
                : 'text-[8px] sm:text-[9px] md:text-[11px]'
            }`}>
              {member.description}
            </p>
          )}

          <div className={`hidden sm:flex justify-center gap-1.5 sm:gap-2 ${
            isExecutive ? 'mt-2 sm:mt-3' : 'mt-1.5 sm:mt-2'
          }`}>
            <SocialIcons size={isExecutive ? 'large' : 'default'} />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

MemberCard.displayName = 'MemberCard';

const TeamPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [executivePage, setExecutivePage] = useState(1);
  const [acmPage, setAcmPage] = useState(1);
  const [direction, setDirection] = useState(0);

  const [executivePerPage, setExecutivePerPage] = useState(4);
  const [acmPerPage, setAcmPerPage] = useState(5);

  // Auto-scrolling refs and states
  const executiveAutoScrollRef = useRef(null);
  const acmAutoScrollRef = useRef(null);
  const [isExecutiveHovered, setIsExecutiveHovered] = useState(false);
  const [isAcmHovered, setIsAcmHovered] = useState(false);

  // Memoized calculations
  const executiveTotalPages = useMemo(
    () => Math.ceil(EXECUTIVE_MEMBERS.length / executivePerPage),
    [executivePerPage]
  );
  
  const acmTotalPages = useMemo(
    () => Math.ceil(ACM_MEMBERS.length / acmPerPage),
    [acmPerPage]
  );

  const currentExecutiveMembers = useMemo(
    () => EXECUTIVE_MEMBERS.slice(
      (executivePage - 1) * executivePerPage,
      executivePage * executivePerPage
    ),
    [executivePage, executivePerPage]
  );

  const currentAcmMembers = useMemo(
    () => ACM_MEMBERS.slice(
      (acmPage - 1) * acmPerPage,
      acmPage * acmPerPage
    ),
    [acmPage, acmPerPage]
  );

  // Handle resize with useCallback - Updated for 2 cards on mobile
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) { // mobile
      setExecutivePerPage(2);
      setAcmPerPage(2);
    } else if (width < 768) { // small tablet
      setExecutivePerPage(2);
      setAcmPerPage(2);
    } else if (width < 1024) { // tablet
      setExecutivePerPage(3);
      setAcmPerPage(3);
    } else { // desktop
      setExecutivePerPage(4);
      setAcmPerPage(5);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Auto-scroll effect for Executive Members
  useEffect(() => {
    if (isExecutiveHovered || executiveTotalPages <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setExecutivePage((prev) => (prev % executiveTotalPages) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [executiveTotalPages, isExecutiveHovered]);

  // Auto-scroll effect for ACM Members
  useEffect(() => {
    if (isAcmHovered || acmTotalPages <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setAcmPage((prev) => (prev % acmTotalPages) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [acmTotalPages, isAcmHovered]);

  // Memoized handlers
  const nextExecutivePage = useCallback(() => {
    if (executivePage < executiveTotalPages) {
      setDirection(1);
      setExecutivePage(prev => prev + 1);
    }
  }, [executivePage, executiveTotalPages]);

  const prevExecutivePage = useCallback(() => {
    if (executivePage > 1) {
      setDirection(-1);
      setExecutivePage(prev => prev - 1);
    }
  }, [executivePage]);

  const nextAcmPage = useCallback(() => {
    if (acmPage < acmTotalPages) {
      setDirection(1);
      setAcmPage(prev => prev + 1);
    }
  }, [acmPage, acmTotalPages]);

  const prevAcmPage = useCallback(() => {
    if (acmPage > 1) {
      setDirection(-1);
      setAcmPage(prev => prev - 1);
    }
  }, [acmPage]);

  const handleExecutivePageChange = useCallback((page) => {
    if (page > executivePage) {
      setDirection(1);
    } else if (page < executivePage) {
      setDirection(-1);
    }
    setExecutivePage(page);
  }, [executivePage]);

  const handleAcmPageChange = useCallback((page) => {
    if (page > acmPage) {
      setDirection(1);
    } else if (page < acmPage) {
      setDirection(-1);
    }
    setAcmPage(page);
  }, [acmPage]);

  return (
    <LazyMotion features={domAnimation}>
      <main
        id="teampage"
        className="relative min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000] scroll-mt-20"
      >
        <div className="absolute inset-0">
          <Stars />
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
              filter: 'blur(80px)',
            }}
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <Particles />
        </div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.02) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-16 text-center"
          >
            <h1 className="mb-3 sm:mb-4 font-orbitron text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-space px-4">
              Meet the amazing people behind Hackblitz 3.0
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={CONTAINER_VARIANTS}
            className="mb-12 sm:mb-16 md:mb-20 overflow-hidden"
          >
            <motion.div variants={ITEM_VARIANTS} className="mb-6 sm:mb-8 md:mb-10 text-center">
              <h2 className="relative inline-block font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Our Sponsors
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>

            <div className="relative w-full">
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {DUPLICATED_SPONSORS.map((sponsor, index) => (
                  <div
                    key={`${sponsor.id}-${index}`}
                    className="flex-shrink-0 w-24 sm:w-32 md:w-40 lg:w-48"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-sky-300 to-blue-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur-lg" />
                      <div className="relative p-2 sm:p-3 md:p-4 transition-all duration-300 bg-black/30 backdrop-blur-sm border border-sky-300/20 rounded-lg sm:rounded-xl hover:border-sky-300/40">
                        <div className="flex items-center justify-center p-2 sm:p-3 md:p-4 aspect-square">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="object-contain w-full h-full filter drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                            loading="lazy"
                          />
                        </div>
                        <div className="mt-1 sm:mt-2 text-center">
                          <p className="text-[10px] sm:text-xs font-medium text-white/90 font-space truncate">
                            {sponsor.name}
                          </p>
                          <p className="text-[8px] sm:text-[10px] text-sky-300/70 font-space truncate">
                            {sponsor.tier}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-12 sm:mb-16 md:mb-20"
            ref={executiveAutoScrollRef}
            onMouseEnter={() => setIsExecutiveHovered(true)}
            onMouseLeave={() => setIsExecutiveHovered(false)}
          >
            <motion.div variants={ITEM_VARIANTS} className="mb-6 sm:mb-8 md:mb-10 text-center">
              <h2 className="relative inline-block font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Executive Members
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>

            <div className="relative">
              <motion.button
                onClick={prevExecutivePage}
                disabled={executivePage === 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-20 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 hover:bg-sky-300/20 transition-all duration-300 ${
                  executivePage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextExecutivePage}
                disabled={executivePage === executiveTotalPages}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 z-20 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 hover:bg-sky-300/20 transition-all duration-300 ${
                  executivePage === executiveTotalPages ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              <div className="overflow-hidden px-0 sm:px-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={executivePage}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                  >
                    {currentExecutiveMembers.map((member) => (
                      <MemberCard key={member.id} member={member} size="large" />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mt-4 sm:hidden">
                <motion.button
                  onClick={prevExecutivePage}
                  disabled={executivePage === 1}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 ${
                    executivePage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <span className="text-white/80 font-space text-sm">
                  Page {executivePage} of {executiveTotalPages}
                </span>
                <motion.button
                  onClick={nextExecutivePage}
                  disabled={executivePage === executiveTotalPages}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 ${
                    executivePage === executiveTotalPages ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {executiveTotalPages > 1 && (
              <motion.div
                variants={ITEM_VARIANTS}
                className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8"
              >
                {Array.from({ length: executiveTotalPages }).map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleExecutivePageChange(i + 1)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      executivePage === i + 1
                        ? 'bg-sky-300 w-4 sm:w-6'
                        : 'bg-sky-300/30 hover:bg-sky-300/50 w-2 sm:w-3'
                    }`}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-12 sm:mb-16 md:mb-20"
            ref={acmAutoScrollRef}
            onMouseEnter={() => setIsAcmHovered(true)}
            onMouseLeave={() => setIsAcmHovered(false)}
          >
            <motion.div variants={ITEM_VARIANTS} className="mb-6 sm:mb-8 md:mb-10 text-center">
              <h2 className="relative inline-block font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                  ACM Members
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>

            <div className="relative">
              <motion.button
                onClick={prevAcmPage}
                disabled={acmPage === 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-20 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 hover:bg-sky-300/20 transition-all duration-300 ${
                  acmPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextAcmPage}
                disabled={acmPage === acmTotalPages}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 z-20 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 hover:bg-sky-300/20 transition-all duration-300 ${
                  acmPage === acmTotalPages ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              <div className="overflow-hidden px-0 sm:px-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={acmPage}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
                  >
                    {currentAcmMembers.map((member) => (
                      <MemberCard key={member.id} member={member} size="default" />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mt-4 sm:hidden">
                <motion.button
                  onClick={prevAcmPage}
                  disabled={acmPage === 1}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 ${
                    acmPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <span className="text-white/80 font-space text-sm">
                  Page {acmPage} of {acmTotalPages}
                </span>
                <motion.button
                  onClick={nextAcmPage}
                  disabled={acmPage === acmTotalPages}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-black/50 backdrop-blur-md border border-sky-300/30 text-sky-300 ${
                    acmPage === acmTotalPages ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {acmTotalPages > 1 && (
              <motion.div
                variants={ITEM_VARIANTS}
                className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8"
              >
                {Array.from({ length: acmTotalPages }).map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleAcmPageChange(i + 1)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      acmPage === i + 1
                        ? 'bg-sky-300 w-4 sm:w-6'
                        : 'bg-sky-300/30 hover:bg-sky-300/50 w-2 sm:w-3'
                    }`}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </LazyMotion>
  );
};

export default TeamPage;