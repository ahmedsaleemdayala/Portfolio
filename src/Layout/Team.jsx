import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Ahmed from '../assets/Ahmed Saleem.jpeg';
import Hassan from '../assets/hassan.jpeg';
import Farrukh from '../assets/farrukh.png';
import ayesha from '../assets/ayesha.jpg';


const Team = () => {
  const teamLinks = {
    whatsapp: "https://wa.me/+923333093878",
    linkedin: "https://www.linkedin.com/in/ahmed-saleem-31100a382/",
    github: "https://github.com/ahmedsaleemdayala"
  };

  const teamData = [
    { 
        id: 1, 
        name: "Ahmed Saleem", 
        role: "Team Leader", 
        image: Ahmed, // Add Image Path Here
            linkedin: "#", 
        github: "#", 
        whatsapp: "#", 
        color: "#a855f7" 
    },
    { 
        id: 2, 
        name: "Farrukh Ullah", 
        role: "Front End Developer", 
        image: Farrukh, // Set to null if image not available
        linkedin: "#", 
        github: "#", 
        whatsapp: "#", 
        color: "#a855f7" 
    },
    { 
        id: 3, 
        name: "Hassan", 
        role: "Back End Developer", 
        image: Hassan, // Set to null if image not available
        linkedin: "#", 
        github: "#", 
        whatsapp: "#", 
        color: "#a855f7" 
    },
    { 
        id: 4, 
        name: "Ayesha Khan", 
        role: "UI/UX Designer", 
        image: ayesha, 
        linkedin: "#", 
        github: "#", 
        whatsapp: "#", 
        color: "#a855f7" 
    },
  ];

  return (
    <section id="team" className="bg-[#0f172a] py-24 px-6 lg:px-8 border-t border-gray-800 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Heading with Underline */}
        <div className="mb-20 text-center">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black text-[#e5e7eb] uppercase tracking-tighter">
              Our <span className="text-[#a855f7]">Team</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#a855f7] mt-3 rounded-full mx-auto shadow-[0_0_15px_#a855f7]"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamData.map((member) => (
            <div 
              key={member.id} 
              className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#a855f7]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] backdrop-blur-sm"
            >
              
              {/* Profile Picture Area */}
              <div className="aspect-square bg-gray-800 relative flex items-center justify-center p-8 overflow-hidden">
                 <div className="absolute inset-0 bg-[#3b82f6] opacity-0 group-hover:opacity-10 transition-opacity blur-[100px] rounded-full"></div>
                 
                 {/* --- PICTURE SECTION UPDATED --- */}
                 <div className="w-40 h-40 rounded-full border-4 border-gray-700 bg-gray-700 overflow-hidden flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                    {member.image ? (
                        // If image exists, show the image
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        // If image is missing, show initials
                        <span className="text-6xl font-black text-gray-500 uppercase">
                            {member.name.charAt(0)}
                        </span>
                    )}
                 </div>
                 {/* ------------------------------- */}
              </div>

              {/* Name & Role */}
              <div className="p-8 text-center relative z-20">
                <h3 className="text-2xl font-bold text-[#e5e7eb] group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#a855f7] uppercase tracking-wider bg-[#3b82f6]/10 px-3 py-1 rounded-full mt-2 inline-block">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex gap-4 items-center justify-center mt-8 text-2xl" style={{ color: member.color }}>
                   <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:scale-125 hover:brightness-125 transition-transform"><FaLinkedin /></a>
                   <a href={member.github} target="_blank" rel="noreferrer" className="hover:scale-125 hover:brightness-125 transition-transform"><FaGithub /></a>
                   <a href={member.whatsapp} target="_blank" rel="noreferrer" className="hover:scale-125 hover:brightness-125 transition-transform"><FaWhatsapp /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;