import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import CountdownTimer from "./ui/CountdownTimer";
import ParticleBackground from "./ui/ParticleBackground";

import jitacmLogo from "../assets/images/jitacm.avif";
import hackbitsLogo from "../assets/images/hackbits3.0.avif";
import astronautEarth from "../assets/images/astronaut-earth.avif";
import astronaut2 from "../assets/images/astronaut2.png";
import earthImg from "../assets/images/earth.avif";
import group from "../assets/images/group.png";
import clock from "../assets/images/clock.png";
import submission from "../assets/images/submission.png";
import tick from "../assets/images/tick.png";

/* ── Static star data generated once ── */
const STAR_DATA = Array.from({ length: 55 }, (_, i) => ({
  w: Math.random() * 2 + 1,
  l: Math.random() * 100,
  t: Math.random() * 100,
  dur: (Math.random() * 5 + 4).toFixed(1),
  delay: (Math.random() * 4).toFixed(1),
}));

/* ── Framer-motion variants ── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeDrop = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const navSlide = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const statCard = {
  hidden: { opacity: 0, scale: 0.88, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Smooth scroll-linked parallax */
  const earthY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "8%"]
  );
  const leftAstronautY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-12%"]
  );
  const rightAstronautY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-8%"]
  );

  const handleRegisterClick = () => {
    window.open("https://forms.google.com/your-registration-form", "_blank");
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#050b1a] to-black pt-24"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Static star field */}
        <div className="absolute inset-0">
          {STAR_DATA.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-star-twinkle"
              style={{
                width: s.w,
                height: s.w,
                left: `${s.l}%`,
                top: `${s.t}%`,
                "--dur": `${s.dur}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Nebula glow orbs */}
        <div
          className="absolute inset-0 animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle at 28% 38%, rgba(147,51,234,0.12) 0%, transparent 52%), radial-gradient(circle at 72% 62%, rgba(56,189,248,0.12) 0%, transparent 52%)",
          }}
        />

        {/* Particle canvas – desktop only */}
        {!isMobile && <ParticleBackground />}
      </div>

      {/* ── Earth parallax ── */}
      <motion.div
        style={{ y: earthY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-10"
      >
        <div className="relative w-[500px] md:w-[700px] lg:w-[900px]">
          <img src={earthImg} alt="Earth" loading="lazy" className="w-full opacity-90" />
        </div>
      </motion.div>

      {/* ── Left Astronaut – gentle float ── */}
      {!isMobile && (
        <motion.img
          src={astronaut2}
          alt="Astronaut"
          loading="lazy"
          style={{ y: leftAstronautY }}
          className="absolute left-0 top-[30%] w-[280px] z-20 animate-float"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />
      )}

      {/* ── Right Astronaut – gentle float, offset phase ── */}
      {!isMobile && (
        <motion.img
          src={astronautEarth}
          alt="Astronaut"
          loading="lazy"
          style={{ y: rightAstronautY }}
          className="absolute right-0 top-[25%] w-[380px] z-20 animate-float-slow"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        />
      )}

      {/* ── Main Content ── */}
      <motion.div
        className="relative z-30 container mx-auto px-6 text-center items-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={fadeDrop} className="mb-6">
          <img src={jitacmLogo} alt="JIT ACM" loading="lazy" className="h-28 mx-auto" />
        </motion.div>

        {/* Chapter title */}
        <motion.p variants={fadeUp} className="text-sky-300 text-2xl font-bold">
          JIT ACM STUDENT CHAPTER
        </motion.p>

        <motion.p variants={fadeUp} className="text-white text-xl mt-2">
          PRESENTS
        </motion.p>

        {/* Hackbits Logo */}
        <motion.div
          variants={fadeDrop}
          className="mt-6 mb-6 flex justify-center items-center w-full"
        >
          <img
            src={hackbitsLogo}
            alt="Hackbits"
            loading="lazy"
            className="h-26 md:h-28 lg:h-32 object-contain ml-[-35px]"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 text-sky-300 font-semibold mb-4 text-lg tracking-widest"
        >
          {["Innovate", "Build", "Compete"].map((word, i) => (
            <span key={i} className="relative group">
              {word}
              <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-sky-300 transition-all duration-400" />
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p variants={fadeUp} className="text-white/75 max-w-3xl mx-auto mb-8 leading-relaxed">
          Join us for an unforgettable experience at Hackblitz, where innovation
          meets competition! Participate in an intense 2-days hackathon at
          Jhulelal Institute of Technology, Nagpur organized by ACM Student Chapter.
        </motion.p>

        {/* Countdown */}
        <motion.div variants={fadeUp} className="m-8">
          <CountdownTimer targetDate="2026-03-24T08:00:00" />
        </motion.div>

        {/* Register Button */}
        <motion.button
          variants={fadeUp}
          onClick={handleRegisterClick}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="relative border border-sky-300 px-10 py-3.5 rounded-full text-white font-bold overflow-hidden group animate-ring-pulse"
        >
          {/* Shimmer overlay */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:animate-shimmer" />
          <span className="relative z-10 group-hover:text-sky-300 transition-colors duration-300">
            REGISTER NOW
          </span>
        </motion.button>

        {/* Stats */}
        <motion.div
          variants={heroContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
        >
          {[
            { label: "Days", value: "2", icon: submission },
            { label: "Duration per day", value: "8h", icon: clock },
            { label: "Team Size", value: "2-4", icon: group },
            { label: "Dates", value: "24-25", icon: tick },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={statCard}
              whileHover={{ y: -6, borderColor: "rgba(56,189,248,0.7)" }}
              className="bg-black/40 border border-sky-300/30 rounded-xl p-4 transition-colors duration-300 cursor-default"
            >
              <img src={stat.icon} alt={stat.label} loading="lazy" className="w-8 mx-auto mb-2" />
              <div className="text-sky-300 font-bold text-xl">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;