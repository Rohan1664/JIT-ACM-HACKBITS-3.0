import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import social media icons from image folder
import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name:'Home', href:'#home' }, { name:'Why HackBlitz', href:'#whyhackbits' },
    { name:'Event Flow', href:'#eventflow' }, { name:'Rules', href:'#rules' },
    { name:'Our Team', href:'#teampage' }
  ];

  const socialLinks = [
    { name:'instagram', icon:instagramIcon, link:'https://instagram.com/acm_jit' },
    { name:'linkedin', icon:linkedinIcon, link:'https://www.linkedin.com/in/jit-acm-student-chapter' },
    { name:'github', icon:githubIcon, link:'https://github.com/jitacm' }
  ];

  const containerVariants = { hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ staggerChildren:0.1, delayChildren:0.2 } } };
  const itemVariants = { hidden:{ y:30, opacity:0 }, visible:{ y:0, opacity:1, transition:{ type:"spring", stiffness:100, damping:12 } } };
  const glowVariants = { initial:{ scale:1 }, hover:{ scale:1.1, transition:{ type:"spring", stiffness:400, damping:17 } } };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#020617] via-[#030b1a] to-[#000000] border-t border-sky-300/20 py-8 sm:py-10 md:py-12 overflow-hidden mt-12 sm:mt-16 md:mt-20">
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0" style={{ background:'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.15) 0%, transparent 50%)', filter:'blur(80px)' }}
          animate={{ opacity:[0.2,0.4,0.2], scale:[1,1.1,1] }} transition={{ duration:15, repeat:Infinity }} />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_,i)=>(
            <motion.div key={i} className="absolute rounded-full" style={{ width:Math.random()*3+1, height:Math.random()*3+1, left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, background:i%2===0?'#38BDF8':'#0EA5E9', filter:'blur(1px)', opacity:0.2 }}
              animate={{ y:[0,(Math.random()-0.5)*100], x:[0,(Math.random()-0.5)*100], opacity:[0.1,0.4,0.1] }} transition={{ duration:15+Math.random()*20, repeat:Infinity, ease:"linear" }} />
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(2)].map((_,i)=>(
            <motion.div key={`shooting-${i}`} className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
              style={{ top:`${Math.random()*30}%`, left:`${Math.random()*100}%`, transform:`rotate(${Math.random()*30-15}deg)`, filter:'blur(2px)' }}
              animate={{ x:[0,400], y:[0,200], opacity:[0,1,0] }} transition={{ duration:3+Math.random()*2, delay:i*7, repeat:Infinity, ease:"linear" }} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.02) 1px, transparent 0)', backgroundSize:'50px 50px' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView?"visible":"hidden"} variants={containerVariants} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10">
          
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-300/20 via-sky-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
            <div className="relative">
              <motion.h3 className="font-orbitron text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" whileHover={{ scale:1.05 }} transition={{ type:"spring", stiffness:400 }}>
                <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">HACK</span>
                <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">BLITZ</span>
                <span className="text-cyan-200 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]"> 3.0</span>
              </motion.h3>
              <p className="text-white/100 text-xs sm:text-sm font-space relative">
                JIT ACM STUDENT CHAPTER
                <motion.span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-sky-300 to-blue-400" initial={{ width:0 }} whileHover={{ width:48 }} transition={{ duration:0.3 }} />
              </p>
              <p className="text-white/100 text-xs sm:text-sm font-space mt-2">Jhulelal Institute of Technology, Nagpur</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4 relative inline-block" whileHover={{ scale:1.05 }}>
              Quick Links
              <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400" initial={{ scaleX:0 }} whileHover={{ scaleX:1 }} transition={{ duration:0.3 }} />
            </motion.h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map(l => (
                <motion.li key={l.name} whileHover={{ x:5 }} transition={{ type:"spring", stiffness:400 }}>
                  <a href={l.href} className="text-white/100 hover:text-sky-300 transition-colors duration-300 text-xs sm:text-sm font-space flex items-center gap-2 group">
                    <motion.span className="w-1 h-1 rounded-full bg-sky-300 opacity-0 group-hover:opacity-100" animate={{ scale:[1,1.5,1] }} transition={{ duration:1, repeat:Infinity }} />
                    {l.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4 relative inline-block" whileHover={{ scale:1.05 }}>
              Contact
              <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400" initial={{ scaleX:0 }} whileHover={{ scaleX:1 }} transition={{ duration:0.3 }} />
            </motion.h4>
            <ul className="space-y-2 sm:space-y-3">
              {[{ icon:'📧', text:'acmjit@jitnagpur.edu.in' }, { icon:'📍', text:'Nagpur, India' }].map((item,i)=>(
                <motion.li key={i} className="text-white/100 text-xs sm:text-sm font-space flex items-center gap-2 sm:gap-3 group" whileHover={{ x:5 }}>
                  <span className="text-base sm:text-lg filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] text-sky-300">{item.icon}</span>
                  <span className="group-hover:text-sky-300 transition-colors duration-300 break-all">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4 relative inline-block" whileHover={{ scale:1.05 }}>
              Follow Us
              <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400" initial={{ scaleX:0 }} whileHover={{ scaleX:1 }} transition={{ duration:0.3 }} />
            </motion.h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map(s => (
                <motion.a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer" variants={glowVariants} initial="initial" whileHover="hover" className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-sky-300/30 flex items-center justify-center text-sky-300 hover:border-sky-300 hover:text-sky-300 transition-all duration-300 backdrop-blur-sm bg-black/20 overflow-hidden">
                    <img src={s.icon} alt={s.name} className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 filter brightness-0 invert" />
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x:['-100%','200%'] }} transition={{ duration:2, repeat:Infinity, ease:"linear" }} />
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div className="mt-3 sm:mt-4 flex items-center gap-1 sm:gap-2 text-white/100 text-[10px] sm:text-xs" animate={{ opacity:[1,1,1] }} transition={{ duration:3, repeat:Infinity }}>
              <span className="text-sky-400">✦</span><span>Join our cosmic community</span><span className="text-sky-400">✦</span>
            </motion.div>
          </motion.div>

          {/* Map - Always visible */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <motion.h4 className="font-orbitron text-sky-400 text-sm sm:text-base mb-3 sm:mb-4 relative inline-block" whileHover={{ scale:1.05 }}>
              Location
              <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-blue-400" initial={{ scaleX:0 }} whileHover={{ scaleX:1 }} transition={{ duration:0.3 }} />
            </motion.h4>
            <div className="rounded-xl overflow-hidden border border-sky-300/30 shadow-[0_0_20px_rgba(56,189,248,0.3)] max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">
              <iframe 
                title="JIT Location" 
                src="https://www.google.com/maps?q=Jhulelal+Institute+of+Technology+Nagpur&output=embed" 
                width="100%" 
                height="160" 
                style={{ border:0 }} 
                loading="lazy" 
                className="w-full h-[140px] sm:h-[160px] md:h-[180px]" 
              />
            </div>
            <p className="text-white/80 text-[10px] sm:text-xs mt-2 font-space">Jhulelal Institute of Technology, Nagpur</p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} initial="hidden" animate={inView?"visible":"hidden"} className="relative mt-8 sm:mt-10 md:mt-12">
          <motion.div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg, transparent, #38BDF8, #0EA5E9, #38BDF8, transparent)', filter:'blur(2px)' }}
            animate={{ opacity:[0.3,0.8,0.3], scaleX:[0.95,1,0.95] }} transition={{ duration:3, repeat:Infinity }} />
          <div className="pt-6 sm:pt-8 text-center relative">
            <motion.div className="absolute left-1/4 -top-4 w-12 h-12 sm:w-16 sm:h-16 bg-sky-300/10 rounded-full blur-2xl" animate={{ y:[0,-20,0], opacity:[0.2,0.4,0.2] }} transition={{ duration:5, repeat:Infinity }} />
            <motion.div className="absolute right-1/4 -bottom-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/10 rounded-full blur-2xl" animate={{ y:[0,20,0], opacity:[0.2,0.4,0.2] }} transition={{ duration:5, repeat:Infinity }} />
            <p className="text-white/100 text-xs sm:text-sm font-space relative z-10">
              © {currentYear} HACKBLITZ 3.0. All rights reserved.
              <motion.span className="block text-[10px] sm:text-xs mt-1 text-sky-500" animate={{ opacity:[1,1,1] }} transition={{ duration:3, repeat:Infinity }}>Made with 💻 in the cosmos</motion.span>
            </p>
          </div>
        </motion.div>

        <motion.div className="w-full h-px mt-6 sm:mt-8 relative" initial={{ opacity:0 }} animate={inView?{ opacity:1 }:{}} transition={{ duration:1, delay:1 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;