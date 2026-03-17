import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import group from "../assets/images/group.png";
import clock from "../assets/images/clock.png";
import cup from "../assets/images/cup.png";
import rocket from "../assets/images/rocket.png";
import target from "../assets/images/target.png";
import bussinessman from "../assets/images/bussinessman.png";

/* ── Static star data – no runtime random inside render ── */
const STARS = Array.from({ length: 25 }, () => ({
  w: Math.random() * 2 + 1,
  l: Math.random() * 100,
  t: Math.random() * 100,
  opacity: Math.random() * 0.35 + 0.1,
}));

/* ── Variants ── */
const section = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const heading = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const card = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const statBox = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhyHackBits = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const features = [
    {
      icon: clock,
      title: "8-Hour Hackathon",
      description: "Per Day Non-stop coding marathon to build innovative solutions from scratch",
      stats: "Non-Stop",
    },
    {
      icon: group,
      title: "Team Collaboration",
      description: "Register your team of up to 4 members and collaborate with brilliant minds",
      stats: "2-4 Members",
    },
    {
      icon: rocket,
      title: "Expert Mentorship",
      description: "Get guidance from industry experts throughout the event",
      stats: "24/7 Support",
    },
    {
      icon: cup,
      title: "Exciting Prizes",
      description: "Win amazing prizes, swag, and recognition for your solutions",
      stats: "₹50K+ Prizes",
    },
  ];

  const highlights = [
    { number: "16", label: "Hours", description: "continuous coding" },
    { number: "4", label: "Members", description: "per team maximum" },
    { number: "50K+", label: "Prizes", description: "worth of rewards" },
  ];

  const benefitSections = [
    {
      icon: target,
      title: "What You'll Gain",
      alt: "target",
      items: [
        "Hands-on project experience",
        "Mentorship from experts",
        "Networking opportunities",
        "Certificate of participation",
        "Exclusive hackathon swag",
      ],
    },
    {
      icon: group,
      title: "Who Can Participate",
      alt: "group",
      items: [
        "College students",
        "Self-taught developers",
        "Tech enthusiasts",
        "Designers & developers",
        "All skill levels welcome",
      ],
    },
    {
      icon: bussinessman,
      title: "Why Participate",
      alt: "why",
      items: [
        "Build your portfolio",
        "Learn new technologies",
        "Compete for prizes",
        "Get recruiter visibility",
        "Join an innovation community",
      ],
    },
  ];

  return (
    <section
      id="whyhackbits"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-black"
    >
      {/* ── Static star field ── */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              width: s.w,
              height: s.w,
              left: `${s.l}%`,
              top: `${s.t}%`,
              opacity: s.opacity,
              "--dur": `${(Math.random() * 4 + 4).toFixed(1)}s`,
              animationDelay: `${(Math.random() * 3).toFixed(1)}s`,
            }}
          />
        ))}

        {/* Nebula glow */}
        <div
          className="absolute inset-0 animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle at 25% 35%, rgba(56,189,248,0.10) 0%, transparent 52%), radial-gradient(circle at 75% 65%, rgba(14,165,233,0.10) 0%, transparent 52%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Title ── */}
        <motion.div
          ref={ref}
          variants={section}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={heading} className="inline-block mb-3">
            <span className="px-5 py-1.5 bg-black/40 backdrop-blur-xl border border-sky-300/25 rounded-full text-xs tracking-widest text-sky-300 font-medium">
              ✦ THE EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            variants={heading}
            className="font-orbitron text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              Why HackBlitz 3.0?
            </span>
          </motion.h2>

          <motion.p variants={heading} className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate coding challenge with features designed to
            help you learn, build, and grow as a developer.
          </motion.p>
        </motion.div>

        {/* ── Feature Cards ── */}
        <motion.div
          variants={section}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -8,
                boxShadow: "0 0 24px -4px rgba(56,189,248,0.25)",
              }}
              className="bg-black/40 border border-sky-300/25 rounded-xl p-6 text-center
                         transition-colors duration-300 hover:border-sky-300/55 group cursor-default"
            >
              {/* Icon with subtle glow on hover */}
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 rounded-full bg-sky-300/0 group-hover:bg-sky-300/12 blur-lg transition-all duration-400" />
                <img src={feature.icon} alt={feature.title} loading="lazy" className="w-10 h-10 mx-auto relative z-10" />
              </div>

              <h3 className="font-orbitron text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{feature.description}</p>
              <span className="text-sky-300 text-xs border border-sky-400/40 px-3 py-1 rounded-full">
                {feature.stats}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Highlights ── */}
        <motion.div
          variants={section}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={statBox}
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px -6px rgba(56,189,248,0.3)" }}
              className="aspect-square bg-black/40 border border-sky-300/25 rounded-xl
                         flex flex-col items-center justify-center text-center p-4 sm:p-6
                         hover:border-sky-300/60 transition-all duration-300 cursor-default"
            >
              <div className="text-2xl sm:text-4xl font-orbitron text-sky-300">{item.number}</div>
              <div className="text-white text-sm font-semibold mt-2">{item.label}</div>
              <div className="text-white/50 text-xs mt-1 max-w-[120px]">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Benefits ── */}
        <motion.div
          variants={section}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {benefitSections.map((benefit, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -5 }}
              className="bg-black/40 border border-sky-300/25 rounded-xl p-6 hover:border-sky-300/50 transition-all duration-300"
            >
              <h4 className="text-sky-300 font-orbitron mb-4 flex items-center gap-2">
                <img src={benefit.icon} className="w-5" alt={benefit.alt} />
                {benefit.title}
              </h4>
              <ul className="space-y-2 text-white/80 text-sm">
                {benefit.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-300/60 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHackBits;