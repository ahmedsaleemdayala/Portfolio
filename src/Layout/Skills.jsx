import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaBootstrap, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase, SiVite,
  SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiPrisma,
  SiJsonwebtokens, SiSocketdotio, SiPostman, SiVercel,
} from 'react-icons/si';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools'];

const skillSet = [
  // ---- Frontend ----
  { name: "HTML5",      icon: FaHtml5,        color: "#e34c26", category: "Frontend" },
  { name: "CSS3",       icon: FaCss3Alt,      color: "#264de4", category: "Frontend" },
  { name: "JavaScript", icon: FaJs,           color: "#f7df1e", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript,   color: "#3178c6", category: "Frontend" },
  { name: "React",      icon: FaReact,        color: "#61dafb", category: "Frontend" },
  { name: "Next.js",    icon: SiNextdotjs,    color: "#ffffff", category: "Frontend" },
  { name: "Tailwind",   icon: SiTailwindcss,  color: "#38bdf8", category: "Frontend" },
  { name: "Bootstrap",  icon: FaBootstrap,    color: "#7952b3", category: "Frontend" },

  // ---- Backend ----
  { name: "Node.js",    icon: FaNodeJs,       color: "#68a063", category: "Backend" },
  { name: "Express",    icon: SiExpress,      color: "#e5e7eb", category: "Backend" },
  { name: "MongoDB",    icon: SiMongodb,      color: "#47a248", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql,   color: "#5b8def", category: "Backend" },
  { name: "Supabase",   icon: SiSupabase,     color: "#3ecf8e", category: "Backend" },
  { name: "Firebase",   icon: SiFirebase,     color: "#ffca28", category: "Backend" },
  { name: "Prisma",     icon: SiPrisma,       color: "#8b9dff", category: "Backend" },
  { name: "JWT Auth",   icon: SiJsonwebtokens,color: "#d63aff", category: "Backend" },
  { name: "Socket.IO",  icon: SiSocketdotio,  color: "#e5e7eb", category: "Backend" },

  // ---- Tools ----
  { name: "Git",        icon: FaGitAlt,       color: "#f05032", category: "Tools" },
  { name: "GitHub",     icon: FaGithub,       color: "#e5e7eb", category: "Tools" },
  { name: "Vite",       icon: SiVite,         color: "#646cff", category: "Tools" },
  { name: "Postman",    icon: SiPostman,      color: "#ff6c37", category: "Tools" },
  { name: "Vercel",     icon: SiVercel,       color: "#e5e7eb", category: "Tools" },
  { name: "Figma",      icon: FaFigma,        color: "#f24e1e", category: "Tools" },
];

const Skills = () => {
  const [active, setActive] = useState('All');

  const visible = active === 'All'
    ? skillSet
    : skillSet.filter((s) => s.category === active);

  return (
    <section id="skills" className="bg-[#0f172a] py-24 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">

        <div className="mb-12 text-center">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Technology <span className="text-[#a855f7]">Ecosystem</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#a855f7] mt-3 rounded-full mx-auto shadow-[0_0_15px_#a855f7]"></div>
          </div>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">
            From pixel-perfect interfaces to the APIs and databases running behind them — here is the full stack I build with.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors border ${
                active === cat
                  ? 'text-white border-[#a855f7]/60'
                  : 'text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="skillPill"
                  className="absolute inset-0 rounded-full bg-[#a855f7]/15 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -10 }}
                className="bg-[#1e293b]/50 p-8 cursor-pointer rounded-2xl border border-gray-800 flex flex-col items-center group hover:border-[#a855f7]/50 transition-colors"
              >
                <skill.icon
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ color: skill.color }}
                />
                <p className="text-gray-400 font-bold group-hover:text-white text-center">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
