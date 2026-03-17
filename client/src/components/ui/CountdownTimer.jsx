import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        const next = {
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        };
        setPrevTime(timeLeft);
        setTimeLeft(next);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const blocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEC', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-nowrap justify-center gap-3 sm:gap-5">
      {blocks.map((block, index) => {
        const display = String(block.value).padStart(2, '0');
        return (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="relative bg-black/50 backdrop-blur-md border border-sky-300/30 rounded-xl flex flex-col items-center justify-center w-[68px] sm:w-[88px] py-3 sm:py-4 overflow-hidden group hover:border-sky-300/60 transition-colors duration-300">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-sky-300/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-blue-400/8 to-transparent" />

              {/* Number with flip effect */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={display}
                  initial={{ y: -18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 18, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-sky-300 text-glow-blue relative z-10"
                >
                  {display}
                </motion.div>
              </AnimatePresence>

              <div className="font-space text-[10px] sm:text-xs text-white/50 mt-1 tracking-widest relative z-10">
                {block.label}
              </div>

              {/* Bottom shimmer accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
            </div>

            {/* Separator dots */}
            {index < blocks.length - 1 && (
              <div className="absolute flex flex-col gap-1 top-1/2 -translate-y-1/2 -right-2 sm:-right-3">
                <span className="w-1 h-1 rounded-full bg-sky-300/50" />
                <span className="w-1 h-1 rounded-full bg-sky-300/50" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CountdownTimer;