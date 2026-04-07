import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaTasks, FaSmile, FaGitAlt } from 'react-icons/fa';

// Custom Counter Hook
const useCounter = (end, duration, startAnim) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnim) return;

    let start = 0;
    const increment = end / (duration / 16); 
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnim]);

  return count;
};

const StatCard = ({ stat, inView }) => {
  const count = useCounter(stat.end, 1000, inView);

  return (
    <div className="bg-[#1e293b]/40 border border-gray-800 p-10 rounded-3xl flex flex-col items-center text-center group hover:border-[#3b82f6]/30 hover:scale-105 transition-transform">
      <div className="text-4xl mb-6 transition-transform group-hover:scale-110" style={{ color: stat.color }}>
        {stat.icon}
      </div>
      <div className="text-6xl font-black mb-2 tracking-tighter" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </div>
      <p className="text-gray-400 font-bold uppercase text-xs tracking-widest group-hover:text-white transition-colors">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsData = [
    { id: 1, end: 1, label: "Year Experience", suffix: "+", color: "#22c55e", icon: <FaUserGraduate /> },
    { id: 2, end: 50, label: "Projects Completed", suffix: "+", color: "#3b82f6", icon: <FaTasks /> },
    { id: 3, end: 20, label: "Happy Clients", suffix: "+", color: "#a855f7", icon: <FaSmile /> },
    { id: 4, end: 1000, label: "Code Commits", suffix: "+", color: "#e5e7eb", icon: <FaGitAlt /> },
  ];

  return (
    <section ref={ref} className="bg-[#0f172a] py-24 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* --- ADDED HEADING SECTION --- */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#e5e7eb] tracking-tight uppercase">
            Key <span className="text-[#3b82f6]">Statistics</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#3b82f6] mt-4 rounded-full mx-auto shadow-[0_0_15px_#3b82f6]"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {statsData.map((s) => (
            <StatCard key={s.id} stat={s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;