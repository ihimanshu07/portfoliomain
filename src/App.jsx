import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, Sun, Moon, X } from 'lucide-react';
import { 
  SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiFramer, 
  SiJavascript, SiTypescript, SiPrisma, SiExpress, 
  SiPostman, SiDocker, SiSass, SiNextdotjs, SiShadcnui, 
  SiX, SiDiscord, SiSteam, SiFigma, SiWebflow, SiGmail
} from 'react-icons/si';

const Portfolio = () => {
  useEffect(() => {
    document.title = "Gaurav";
  }, []);

  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fontStyle = {
    fontFamily: '"Inter", sans-serif',
    letterSpacing: '-0.03em',
  };

  const theme = {
    text: isDark ? "text-white" : "text-black",
    subText: isDark ? "text-gray-400" : "text-gray-500",
    dock: isDark ? "bg-[#111]/90 md:bg-[#111]/80 border-gray-800" : "bg-white/90 md:bg-white/80 border-gray-200",
    markerColor: isDark ? "#EAB308" : "#FDE047",
  };

  const rippleTransition = {
    duration: 1.2,
    ease: [0.4, 0, 0.2, 1],
  };

  const textColorTransition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1.0],
  };

  return (
    <motion.div 
      style={fontStyle}
      initial={false}
      animate={{ 
        color: isDark ? "#ffffff" : "#000000", 
      }}
      transition={textColorTransition}
      className="min-h-screen w-full overflow-x-hidden relative flex flex-col items-center justify-center selection:bg-green-200 selection:text-green-900"
    >
      
      
      <div className="absolute inset-0 z-0 bg-[#fafafa] overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-100"
          
          animate={{ 
            backgroundPosition: ["0px 0px", "32px 32px"] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: `radial-gradient(#c0c0c6 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: 'radial-gradient(circle at 50% 50%, #e6ffec 0%, #f0fff4 25%, #fafafa 70%)' }}
        />
      </div>

      
      <motion.div 
        className="absolute inset-0 z-0 bg-[#050505]"
        initial={false}
        animate={{ 
          clipPath: isDark ? "circle(150% at 50px 50px)" : "circle(0% at 50px 50px)" 
        }}
        transition={rippleTransition}
      >
        
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0px 0px", "32px 32px"] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: `radial-gradient(#333333 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: 'radial-gradient(circle at 50% 50%, #1a2e1f 0%, #0d120f 40%, #050505 80%)' }}
        />
      </motion.div>
      
      
      <motion.button
        onClick={() => setIsDark(!isDark)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-6 left-6 md:top-8 md:left-8 z-50 p-3 rounded-full ${isDark ? "bg-gray-800 text-white" : "bg-white text-black shadow-sm border border-gray-200"} transition-all duration-300`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

    
      <div className={`fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-4 md:gap-8 text-sm font-semibold transition-colors duration-500 ${isDark ? "text-white" : "text-black"}`}>
        <div 
          onClick={() => setIsMenuOpen(true)}
          
          className="hover:text-green-500 transition-colors cursor-pointer flex items-center gap-1"
        >
          PROJECTS <ArrowUpRight size={16} />
        </div>

        <a 
          href="https://drive.google.com/file/d/1OpDm3WplLjDBTwpeH1_mIkXHeBq9K3uW/view?usp=drive_link"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 transition-colors"
        >
          RESUME <ArrowUpRight size={16} />
        </a>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
            className={`fixed inset-0 z-[100] flex flex-col ${isDark ? "bg-[#0a0a0a]" : "bg-[#f4f4f0]"}`}
          >
              <div className="flex justify-end p-8">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 text-sm font-bold ${isDark ? "text-white" : "text-black"} hover:text-green-500 transition-colors`}
                >
                   CLOSE <X size={24} />
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-8 md:px-20 gap-4 md:gap-8">
               {[
                 { title: "Structured Address Data Compilance", link: "https://github.com/" },
                 { title: "Portfolio v1", link: "https://gaurav-profile.vercel.app/" },
                 { title: "Movie-Finder", link: "https://movie-finder-two-kappa.vercel.app/" },
                 { title: "Task manager", link: "https://zohoassignement-60051334413.catalystserverless.in" },
                 { title: "De-fi investment", link: "https://github.com/ihimanshu07/De-fi-investment-platform.git" }
               ].map((project, i) => (
                 <motion.a
                   key={i}
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                   className={`block text-3xl md:text-7xl font-extrabold cursor-pointer transition-all duration-300 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-black"} hover:pl-4`}
                 >
                   {project.title}
                 </motion.a>
               ))}
              </div>
              <div className={`p-8 md:p-12 ${isDark ? "bg-[#111]" : "bg-black"} text-white flex flex-col md:flex-row justify-between items-center gap-4`}>
                 <div className="text-sm font-medium opacity-70">© WORLD IS A CRUEL PLACE.</div>
                 <div className="flex gap-6 text-sm font-bold">
                    <a href="https://github.com/ihimanshu07" target="_blank" rel="noreferrer" className="cursor-pointer hover:text-green-400">GITHUB</a>
                    <a href="https://www.linkedin.com/in/gauravsingh31/" target="_blank" rel="noreferrer" className="cursor-pointer hover:text-blue-600">LINKEDIN</a>
                    
                 </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>

    
      
      <main className="z-10 flex flex-col items-center text-center w-full max-w-5xl px-4 pt-20 md:pt-0">
        
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
              <span className="font-normal">I'm</span> Gaurav
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex items-center justify-center gap-2 md:gap-3 text-2xl md:text-5xl font-semibold tracking-tight flex-wrap"
          >
          
            <span className="transition-colors duration-500 font-normal">a</span>
            
            <motion.span 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(110, 231, 134, 0.5)"
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }} 
              className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-[#6ee786] text-black shadow-[0_0_20px_rgba(110,231,134,0.3)] cursor-default"
            >
              Fullstack dev.
            </motion.span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-2xl md:text-5xl font-normal tracking-tight transition-colors duration-500 opacity-90"
          >
            chasing ikigai{' '}
            <motion.span 
              className="relative inline-block px-1 z-10 cursor-pointer"
              initial={{ scale: 1, filter: "none" }}
              animate={{ scale: 1, filter: "none" }}
              whileHover={{ 
                scale: 1.05,
                filter: `drop-shadow(0 0 15px ${theme.markerColor})` 
              }}
              transition={{ duration: 0.2 }}
            >
               <div className="absolute inset-0 w-full h-full -z-10 transform scale-110 translate-y-1 md:translate-y-2">
                 <HandDrawnHighlight color={theme.markerColor} className="w-full h-full opacity-90" />
               </div>
               <span className="relative z-10 font-bold text-inherit">
                  everyday.
               </span>
            </motion.span>
          </motion.h2>
        </div>

        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 px-4 w-full max-w-4xl"
        >
          <TechIcon Icon={SiJavascript} color="#F7DF1E" label="JavaScript" />
          <TechIcon Icon={SiTypescript} color="#3178C6" label="TypeScript" />
          <TechIcon Icon={SiReact} color="#61DAFB" label="React" />
          <TechIcon Icon={SiNextdotjs} color={isDark ? "#ffffff" : "#000000"} label="Next.js" />
          
          <TechIcon Icon={SiFigma} color="#F24E1E" label="Figma" />
          <TechIcon Icon={SiTailwindcss} color="#06B6D4" label="Tailwind" />
          <TechIcon Icon={SiShadcnui} color={isDark ? "#ffffff" : "#000000"} label="ShadCN" />
          
          
          <TechIcon Icon={SiNodedotjs} color="#339933" label="Node.js" />
          <TechIcon Icon={SiExpress} color={isDark ? "#ffffff" : "#000000"} label="Express" />
          <TechIcon Icon={SiMongodb} color="#47A248" label="MongoDB" />
          <TechIcon Icon={SiPostman} color="#FF6C37" label="Postman" />
        </motion.div>

        <AvailabilityBadge isDark={isDark} />

        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
         className={`fixed bottom-10 flex items-center gap-4 px-5 py-4 ${theme.dock} backdrop-blur-xl border rounded-full shadow-2xl z-50`}

        >
          <DockIcon icon={<Github size={20} />} href="https://github.com/ihimanshu07" color={isDark ? "#ffffff" : "#000000"} label="GitHub" />
          <DockIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/gauravsingh31/" color="#0A66C2" label="LinkedIn" />
       
          
          <ImageDockIcon src="/gmail.png" href="mailto:himanshu8115832782@gmail.com" label="Gmail" />
        </motion.div>

      </main>
    </motion.div>
  );
};




const DockIcon = ({ icon, href, color, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.2, y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="relative flex items-center justify-center group md:p-1"
    >
      <div 
        className="transition-all duration-300"
        style={{ 
          color: color,
          filter: isHovered ? `drop-shadow(0 0 15px ${color})` : 'none'
        }}
      >
        {icon}
      </div>
    </motion.a>
  );
};

const ImageDockIcon = ({ src, href, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.2, y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="relative flex items-center justify-center group md:p-1"
    >
      <img 
        src={src}
        alt={label}
        className="w-5 h-5 object-contain transition-all duration-300"
        style={{ 
          filter: isHovered ? `drop-shadow(0 0 15px rgba(234, 67, 53, 0.6))` : 'none'
        }}
      />
    </motion.a>
  );
};

const AvailabilityBadge = ({ isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className={`mt-10 md:mt-16 z-40 px-4 py-1.5 rounded-full border flex items-center gap-2.5 shadow-sm backdrop-blur-md transition-colors duration-500 ${
       isDark ? "bg-[#111]/80 border-gray-800 text-gray-200" : "bg-white/90 border-gray-200 text-gray-700"
    }`}
  >
    <div className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
    </div>
    <span className="text-xs font-semibold tracking-wide">Available for work</span>
  </motion.div>
);

const TechIcon = ({ Icon, color, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const randomDuration = useMemo(() => 4 + Math.random() * 3, []);
  const randomDelay = useMemo(() => Math.random() * 2, []);

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ y: -5, scale: 1.15 }}
      layout
      className="relative flex flex-col items-center group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Icon 
        size={26}
        className="transition-all duration-300"
        style={{ 
          color: color,
          filter: isHovered ? `drop-shadow(0 0 12px ${color})` : 'none'
        }}
      />
      <span className="absolute -bottom-8 text-[10px] font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.div>
  );
};

const HandDrawnHighlight = ({ color, className }) => (
  <svg viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      <path d="M10.4875 59.5643C-5.85331 47.8236 3.25026 23.4364 21.4881 14.6291C58.962 -3.47097 113.727 20.5936 156.642 21.7809C191.202 22.737 224.85 6.97056 257.052 12.2242C285.861 16.9246 309.461 42.4776 294.551 66.8221C278.033 93.7955 237.968 80.3732 207.793 81.8709C164.391 84.0251 120.303 88.9105 77.0689 84.2388C47.8023 81.0771 26.3067 70.9333 10.4875 59.5643Z" fill={color}/>
  </svg>
);

export default Portfolio;