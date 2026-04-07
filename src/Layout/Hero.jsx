import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../assets/Ahmed Saleem.jpeg'; // Apni image ka path yahan dein

const Hero = () => {
  const whatsappLink = "https://wa.me/+923333093878";

  return (
  <section className="relative h-screen bg-[#0f172a] overflow-hidden flex items-center">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-100 h-100 bg-[#3b82f6] opacity-[0.07] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[0%] w-125 h-125 bg-[#a855f7] opacity-[0.07] blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#22c55e] font-mono tracking-[0.3em] mb-4 text-sm font-bold">
              HI, I'M
            </h4>
            
            <h1 className="text-5xl md:text-8xl font-black text-[#e5e7eb] leading-[0.9] tracking-tighter">
              AHMED SALEEM <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3b82f6] via-[#a855f7] to-[#22c55e] inline-block mt-2">
                FRONT END <br /> DEVELOPER
              </span>
            </h1>

            <div className="w-20 h-1.5 bg-[#22c55e] my-8 rounded-full shadow-[0_0_15px_#22c55e]"></div>

            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed font-light">
              Building Responsive, User-Centric Web Experiences with a focus on modern tech and premium aesthetics.
            </p>
            
            {/* --- OWN HERO BUTTON --- */}
            <div className="mt-12">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-[#0f172a] transition-all duration-300 bg-[#22c55e] rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-95 overflow-hidden"
              >
                {/* Shine effect on hover */}
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
            className="relative flex justify-center"
          >
            {/* Main Image Wrapper */}
            <div className="relative z-10 p-2 border border-gray-800 rounded-[2.5rem] bg-[#1e293b]/30 backdrop-blur-sm">
              <div className="w-75 h-100 md:w-105 md:h-130 overflow-hidden rounded-4xl border border-gray-700 shadow-2xl">
                <img 
                  src={myPicture}
                  alt="Ahmed Saleem"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-2000"
                />
              </div>
            </div>

            {/* Floating Elements (Tech Vibe) */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 right-0 md:-right-8 bg-[#0f172a]/90 border border-gray-700 p-4 rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
            >
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <p className="text-[#3b82f6] font-mono text-xs">{"<React.Dev />"}</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="absolute bottom-10 -left-6 md:-left-12 bg-[#0f172a]/90 border border-gray-800 p-5 rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
            >
              <p className="text-[#a855f7] font-mono text-xs">{"npm install success"}</p>
              <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#22c55e]"></div>
              </div>
            </motion.div>

            {/* Neon Glow behind the image */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#3b82f6] to-[#22c55e] opacity-20 blur-[120px] -z-10 rounded-full scale-75"></div>
          </motion.div>

        </div>
        
      </div>

 
  
    </section>
  );
};

export default Hero;