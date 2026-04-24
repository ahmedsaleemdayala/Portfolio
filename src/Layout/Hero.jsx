import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../assets/Ahmed Saleem.jpeg'; // Ensure file name matches exactly

const Hero = () => {
  const whatsappLink = "https://wa.me/+923333093878";

  return (
    <section className="relative min-h-screen lg:h-screen bg-[#0f172a] overflow-hidden flex items-center py-20 lg:py-0">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 md:w-100 md:h-100 bg-[#3b82f6] opacity-[0.07] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[0%] w-80 h-80 md:w-125 md:h-125 bg-[#a855f7] opacity-[0.07] blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT CONTENT (Text Section) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h4 className="text-[#22c55e] font-mono tracking-[0.3em] mb-4 text-xs md:text-sm font-bold">
              HI, I'M
            </h4>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] leading-tight tracking-tighter">
              AHMED SALEEM <br />
              <span className="text-transparent text-3xl md:text-4xl bg-clip-text bg-linear-to-r from-[#3b82f6] via-[#a855f7] to-[#22c55e] inline-block mt-2">
                FRONT END DEVELOPER
              </span>
            </h1>

            <div className="w-20 h-1.5 bg-[#22c55e] my-6 md:my-8 rounded-full shadow-[0_0_15px_#22c55e] mx-auto lg:mx-0"></div>

            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed font-light mx-auto lg:mx-0">
              Building Responsive, User-Centric Web Experiences with a focus on modern tech and premium aesthetics.
            </p>
            
            <div className="mt-10">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-[#0f172a] transition-all duration-300 bg-[#22c55e] rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  Hire Me
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT (Image & Tech elements) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Main Image Wrapper */}
            <div className="relative z-10 p-1.5 border border-gray-800 rounded-4xl md:rounded-[2.5rem] bg-[#1e293b]/30 backdrop-blur-sm">
              <div className="w-64 h-80 md:w-96 md:h-120 overflow-hidden rounded-[1.8rem] md:rounded-4xl border border-gray-700 shadow-2xl">
                <img 
                  src={myPicture}
                  alt="Ahmed Saleem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 1. TOP RIGHT: React Dev (Floating) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 md:-right-8 bg-[#0f172a]/90 border border-gray-700 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
            >
              <div className="flex gap-1.5 mb-1.5 md:mb-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
              </div>
              <p className="text-[#3b82f6] font-mono text-[10px] md:text-xs font-bold">{"<React.Dev />"}</p>
            </motion.div>

            {/* 2. BOTTOM LEFT: NPM Success (Floating + Loading Bar) */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
              className="absolute bottom-6 -left-4 md:-left-12 bg-[#0f172a]/90 border border-gray-800 p-4 md:p-5 rounded-xl md:rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
            >
              <p className="text-[#a855f7] font-mono text-[10px] md:text-xs font-bold">{"npm install success"}</p>
              <div className="mt-2 h-1 w-16 md:w-24 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="h-full bg-[#22c55e]"
                ></motion.div>
              </div>
            </motion.div>

            {/* Neon Glow behind the image */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#3b82f6] to-[#22c55e] opacity-20 blur-[100px] -z-10 rounded-full scale-75"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;