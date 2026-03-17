import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import sponsor1 from '../assets/images/jitacm.avif';
import sponsor2 from '../assets/images/jitacm.avif';
import sponsor3 from '../assets/images/jitacm.avif';
import executive1 from '../assets/images/jitacm.avif';
import executive2 from '../assets/images/jitacm.avif';
import executive3 from '../assets/images/jitacm.avif';
import executive4 from '../assets/images/jitacm.avif';
import executive5 from '../assets/images/jitacm.avif';
import executive6 from '../assets/images/jitacm.avif';
import executive7 from '../assets/images/jitacm.avif';
import executive8 from '../assets/images/jitacm.avif';
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
  { id:1, name:'Dr. Rajesh Kumar', post:'Faculty Coordinator', image:executive1, description:'Head of Computer Science Department' },
  { id:2, name:'Prof. Sneha Patel', post:'ACM Chapter Advisor', image:executive2, description:'15+ years of experience in academia' },
  { id:3, name:'Amit Sharma', post:'President', image:executive3, description:'Final Year CSE, Lead Organizer Hackblitz 3.0' },
  { id:4, name:'Priya Gupta', post:'Vice President', image:executive4, description:'Third Year CSE, Technical Lead' },
  { id:5, name:'Vikram Mehta', post:'General Secretary', image:executive5, description:'Third Year CSE' },
  { id:6, name:'Neha Singh', post:'Treasurer', image:executive6, description:'Second Year CSE' },
  { id:7, name:'Rahul Verma', post:'Technical Head', image:executive7, description:'Third Year CSE' },
  { id:8, name:'Anjali Desai', post:'Design Head', image:executive8, description:'Second Year CSE' },
];

const ACM_MEMBERS = [
  { id:1, name:'Rahul Verma', post:'Technical Head', image:acmMember1, description:'Full Stack Developer' },
  { id:2, name:'Neha Singh', post:'Event Management Head', image:acmMember2, description:'Second Year CSE' },
  { id:3, name:'Vikram Mehta', post:'PR & Outreach Head', image:acmMember3, description:'Third Year CSE' },
  { id:4, name:'Anjali Desai', post:'Design Head', image:acmMember4, description:'UI/UX Designer' },
  { id:5, name:'Karan Joshi', post:'Content Lead', image:acmMember5, description:'Second Year CSE' },
  { id:6, name:'Divya Nair', post:'Treasurer', image:acmMember6, description:'Third Year CSE' },
  { id:7, name:'Rohan Gupta', post:'Web Master', image:acmMember7, description:'Second Year CSE' },
  { id:8, name:'Pooja Sharma', post:'Research Lead', image:acmMember8, description:'Third Year CSE' },
  { id:9, name:'Akash Singh', post:'Competitive Programming Head', image:acmMember9, description:'Third Year CSE' },
  { id:10, name:'Sneha Reddy', post:'Women in Tech Lead', image:acmMember10, description:'Second Year CSE' },
  { id:11, name:'Arjun Mehta', post:'Machine Learning Lead', image:acmMember11, description:'Third Year CSE' },
  { id:12, name:'Kavya Sharma', post:'Cloud Computing Lead', image:acmMember12, description:'Second Year CSE' },
  { id:13, name:'Rishi Patel', post:'Cybersecurity Lead', image:acmMember13, description:'Third Year CSE' },
  { id:14, name:'Ishita Gupta', post:'Blockchain Lead', image:acmMember14, description:'Second Year CSE' },
  { id:15, name:'Tanmay Kumar', post:'Open Source Lead', image:acmMember15, description:'Third Year CSE' },
];

// Create duplicated arrays for infinite scroll (3 copies each)
const DUPLICATED_SPONSORS = [...SPONSORS, ...SPONSORS, ...SPONSORS];
const DUPLICATED_EXECUTIVE = [...EXECUTIVE_MEMBERS, ...EXECUTIVE_MEMBERS, ...EXECUTIVE_MEMBERS];
const DUPLICATED_ACM = [...ACM_MEMBERS, ...ACM_MEMBERS, ...ACM_MEMBERS];

/* ── Static background stars ── */
const STAR_DATA = Array.from({ length: 40 }, () => ({
  w: Math.random() * 2 + 1,
  l: Math.random() * 100,
  t: Math.random() * 100,
  dur: (Math.random() * 5 + 4).toFixed(1),
  delay: (Math.random() * 3).toFixed(1),
}));

/* ── Animation variants ── */
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
          <p className={`font-semibold text-sky-300 font-space mt-1 sm:mt-2 ${isExec ? 'text-xs sm:text-sm md:text-base' : 'text-[11px] sm:text-xs md:text-sm'}`}>
            {member.post}
          </p>
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

const TeamPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

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

          {/* ── Sponsors (FASTER infinite scroll) ── */}
          <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={CONTAINER_VARIANTS} className="mb-12 sm:mb-16 md:mb-20 overflow-hidden">
            <SectionHeader title="Our Sponsors" />
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-4 sm:gap-6"
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 15, ease: 'linear' } }} // Faster: 28→15
              >
                {DUPLICATED_SPONSORS.map((s, i) => (
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

          {/* ── Executive Members (FASTER infinite scroll) ── */}
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-12 sm:mb-16 md:mb-20 overflow-hidden"
          >
            <SectionHeader title="Executive Members" />
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' } }} // Faster: 35→18
              >
                {DUPLICATED_EXECUTIVE.map((member, index) => (
                  <div key={`${member.id}-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <MemberCard member={member} size="large" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── ACM Members (FASTER infinite scroll) ── */}
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-12 sm:mb-16 md:mb-20 overflow-hidden"
          >
            <SectionHeader title="ACM Members" />
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-3 sm:gap-4 md:gap-5"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }} // Faster: 40→20
              >
                {DUPLICATED_ACM.map((member, index) => (
                  <div key={`${member.id}-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <MemberCard member={member} size="default" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </LazyMotion>
  );
};

export default TeamPage;