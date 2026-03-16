import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import group from "../assets/images/group.png";
import clock from "../assets/images/clock.png";
import cup from "../assets/images/cup.png";
import rocket from "../assets/images/rocket.png";
import target from "../assets/images/target.png";
import bussinessman from "../assets/images/bussinessman.png";

const WhyHackBits = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  /* Generate stars only once */
  const stars = useMemo(() => {
    return [...Array(25)].map(() => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2
    }));
  }, []);

  const features = [
    {
      icon: clock,
      title: "16-Hour Hackathon",
      description:
        "Non-stop coding marathon to build innovative solutions from scratch",
      stats: "Non-Stop"
    },
    {
      icon: group,
      title: "Team Collaboration",
      description:
        "Register your team of up to 4 members and collaborate with brilliant minds",
      stats: "2-4 Members"
    },
    {
      icon: rocket,
      title: "Expert Mentorship",
      description:
        "Get guidance from industry experts throughout the event",
      stats: "24/7 Support"
    },
    {
      icon: cup,
      title: "Exciting Prizes",
      description:
        "Win amazing prizes, swag, and recognition for your solutions",
      stats: "₹50K+ Prizes"
    }
  ];

  const highlights = [
    { number: "16", label: "Hours", description: "continuous coding" },
    { number: "4", label: "Members", description: "per team maximum" },
    { number: "50K+", label: "Prizes", description: "worth of rewards" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="whyhackbits"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#020617] via-[#030b1a] to-black"
    >

      {/* Light Star Background (no animation) */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.width,
              height: star.height,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-orbitron text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              Why HackBlitz 3.0?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Experience the ultimate coding challenge with features designed to
            help you learn, build, and grow as a developer.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-black/40 border border-blue-500/50 rounded-xl p-6 text-center"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                loading="lazy"
                className="w-10 h-10 mx-auto mb-4"
              />

              <h3 className="font-orbitron text-lg text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-white/100 text-sm mb-4">
                {feature.description}
              </p>

              <span className="text-sky-300 text-xs border border-sky-400/50 px-3 py-1 rounded-full">
                {feature.stats}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="aspect-square bg-black/40 border border-blue-500/40 rounded-xl flex flex-col items-center justify-center text-center p-4 sm:p-6 hover:border-sky-300/70 transition-all duration-300"
            >
              <div className="text-2xl sm:text-4xl font-orbitron text-sky-300">
                {item.number}
              </div>
              <div className="text-white text-sm font-semibold mt-2">
                {item.label}
              </div>

              <div className="text-white/60 text-xs mt-1 max-w-[120px]">
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >

          {/* Gain */}
          <motion.div
            variants={itemVariants}
            className="bg-black/40 border border-blue-500/60 rounded-xl p-6"
          >
            <h4 className="text-sky-300 font-orbitron mb-4 flex items-center gap-2">
              <img src={target} className="w-5" alt="target" />
              What You'll Gain
            </h4>

            <ul className="space-y-2 text-white/100 text-sm">
              <li>Hands-on project experience</li>
              <li>Mentorship from experts</li>
              <li>Networking opportunities</li>
              <li>Certificate of participation</li>
              <li>Exclusive hackathon swag</li>
            </ul>
          </motion.div>

          {/* Participants */}
          <motion.div
            variants={itemVariants}
            className="bg-black/40 border border-blue-500/60 rounded-xl p-6"
          >
            <h4 className="text-sky-300 font-orbitron mb-4 flex items-center gap-2">
              <img src={group} className="w-5" alt="group" />
              Who Can Participate
            </h4>

            <ul className="space-y-2 text-white/100 text-sm">
              <li>College students</li>
              <li>Self-taught developers</li>
              <li>Tech enthusiasts</li>
              <li>Designers & developers</li>
              <li>All skill levels welcome</li>
            </ul>
          </motion.div>

          {/* Why */}
          <motion.div
            variants={itemVariants}
            className="bg-black/40 border border-blue-500/60 rounded-xl p-6"
          >
            <h4 className="text-sky-300 font-orbitron mb-4 flex items-center gap-2">
              <img src={bussinessman} className="w-5" alt="why" />
              Why Participate
            </h4>

            <ul className="space-y-2 text-white/100 text-sm">
              <li>Build your portfolio</li>
              <li>Learn new technologies</li>
              <li>Compete for prizes</li>
              <li>Get recruiter visibility</li>
              <li>Join an innovation community</li>
            </ul>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyHackBits;