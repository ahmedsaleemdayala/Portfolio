import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase, SiVite } from 'react-icons/si';

const Skills = () => {
  const skillSet = [
    { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
    { name: "JS", icon: FaJs, color: "#f7df1e" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Git", icon: FaGitAlt, color: "#f05032" },
    { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    { name: "Vite", icon: SiVite, color: "#646cff" },
    { name: "TS", icon: SiTypescript, color: "#3178c6" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
  ];

  return (
    <section id="skills" className="bg-[#0f172a] py-24 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
       <div className="mb-20 text-center">
  {/* Wrapper for Heading + Line */}
  <div className="inline-block relative">
    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
      Technology <span className="text-[#a855f7]">Ecosystem</span>
    </h2>
    
    {/* Animated Underline - Ab ye text ke bilkul niche aayegi */}
    <div className="w-24 h-1.5 bg-[#a855f7] mt-3 rounded-full mx-auto shadow-[0_0_15px_#a855f7]"></div>
  </div>
  
  
</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillSet.map((skill, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="bg-[#1e293b]/50 p-8 cursor-pointer rounded-2xl border border-gray-800 flex flex-col items-center group hover:border-[#a855f7]/50 transition-all">
              <skill.icon className="text-5xl mb-4 group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
              <p className="text-gray-400 font-bold group-hover:text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;