import React, { useRef, useEffect, useState, Suspense } from "react";
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

  const earthY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "10%"]
  );

  const leftAstronautY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-15%"]
  );

  const rightAstronautY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-10%"]
  );

  const starsCount = isMobile ? 20 : 50;

  const handleRegisterClick = () => {
    window.open("https://forms.google.com/your-registration-form", "_blank");
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#050b1a] to-black"
    >
      {/* Background */}
      <div className="absolute inset-0">

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(starsCount)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-40 animate-pulse"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Nebula */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(147,51,234,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,229,255,0.1) 0%, transparent 50%)",
            filter: "blur(60px)",
          }}
        />

        {/* Particle background only desktop */}
        {!isMobile && <ParticleBackground />}
      </div>

      {/* Earth */}
      <motion.div
        style={{ y: earthY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-10"
      >
        <div className="relative w-[500px] md:w-[700px] lg:w-[900px]">
          <img
            src={earthImg}
            alt="Earth"
            loading="lazy"
            className="w-full opacity-90"
          />
        </div>
      </motion.div>

      {/* Left Astronaut */}
      {!isMobile && (
        <motion.img
          src={astronaut2}
          alt="Astronaut"
          loading="lazy"
          style={{ y: leftAstronautY }}
          className="absolute left-0 top-[30%] w-[280px] z-20"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      )}

      {/* Right Astronaut */}
      {!isMobile && (
        <motion.img
          src={astronautEarth}
          alt="Astronaut"
          loading="lazy"
          style={{ y: rightAstronautY }}
          className="absolute right-0 top-[25%] w-[380px] z-20"
          animate={{ y: [-10, 9, -10] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">

        {/* Logo */}
        <div className="mb-6">
          <img
            src={jitacmLogo}
            alt="JIT ACM"
            loading="lazy"
            className="h-28 mx-auto"
          />
        </div>

        <p className="text-sky-300 text-2xl font-bold">
          JIT ACM STUDENT CHAPTER
        </p>

        <p className="text-white text-xl mt-2">PRESENTS</p>

        {/* Hackbits Logo */}
        <div className="mt-4 mb-4">
          <img
            src={hackbitsLogo}
            alt="Hackbits"
            loading="lazy"
            className="h-28 mx-auto"
          />
        </div>

        {/* Tagline */}
        <div className="flex justify-center gap-4 text-sky-300 font-semibold mb-4">
          <span>Innovate</span>
          <span>Build</span>
          <span>Compete</span>
        </div>

        {/* Description */}
        <p className="text-white/80 max-w-3xl mx-auto mb-6">
          Join us for an unforgettable experience at Hackblitz, where innovation
          meets competition! Participate in an intense 2-days hackathon at
          Jhulelal Institute of Technology, Nagpur organized by ACM Student
          Chapter.
        </p>

        {/* Countdown */}
        <div className="mb-6">
          <CountdownTimer targetDate="2026-03-24T08:00:00" />
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegisterClick}
          className="border border-sky-300 px-8 py-3 rounded-full text-white font-bold hover:bg-sky-300 hover:text-black transition"
        >
          REGISTER NOW
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">

          {[
            { label: "Days", value: "2", icon: submission },
            { label: "Duration", value: "16h", icon: clock },
            { label: "Team Size", value: "2-4", icon: group },
            { label: "Dates", value: "24-25", icon: tick },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-black/40 border border-sky-300/40 rounded-lg p-4"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                loading="lazy"
                className="w-8 mx-auto mb-2"
              />
              <div className="text-sky-300 font-bold text-xl">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-sky-300 mt-2 rounded"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;