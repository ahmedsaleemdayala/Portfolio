import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // React Icons use kar rahe hain
import alghiza from '../assets/al-ghiza.png';
import bykea from '../assets/bykea.png';
import cake from '../assets/caklora.png';
import food from '../assets/foodpanda.png';
import stitch from '../assets/stitchbystitch.png';
import smit from '../assets/smit-feedback.png';
import travel from '../assets/travel.png';
import smitLanding from '../assets/smit.png';




const Projects = () => {
  // 8 Projects ka Data Array
  const projectsData = [
     {
      id: 1,
      title: "SMIT Landing Page",
      description: "A landing page for a fictional university built with React and Tailwind.",
      image: smitLanding,
      github: "https://github.com/ahmedsaleemdayala/SMIT-Landing-Page",
      live: "https://sylanimitlp.netlify.app/",
      tags: ["React", "Node", "Tailwind"]
    },
    {
      id: 2,
      title: "Travel Landing Page",
      description: "A beautiful landing page for a travel agency built with React and Tailwind.",
      image: travel,
      github: "https://github.com/ahmedsaleemdayala/Landing-Page-Travel",
      live: "https://landingtravelpge.netlify.app/",
      tags: ["React", "Node"]
    },
   
    // Aap aise hi mazeed 6 projects add kar sakte hain...
    { id: 3, title: "Stitch by Stitch", description: "A social media platform for stitching enthusiasts.", image: stitch, github: "https://github.com/ahmedsaleemdayala/stitch-by-Stitch", live: "https://stitch-by-stitch.netlify.app", tags: ["HTML", "CSS"] },
    { id: 4, title: "Caklora Cake", description: "A bakery website showcasing delicious cakes.", image: cake, github: "https://github.com/ahmedsaleemdayala/Cake-Landing-Page", live: "https://caklora.netlify.app", tags: ["HTML", "CSS"] },
    { id: 5, title: "Bykea Landing Page", description: "A landing page for a ride-hailing service.", image: bykea, github: "https://github.com/ahmedsaleemdayala/Bykea", live: "https://bykea-page.netlify.app", tags: ["HTML", "CSS"] },
    { id: 6, title: "Food Panda", description: "Live food delivery booking and tracking.", image: food, github: "https://github.com/ahmedsaleemdayala/Food-Panda", live: "https://food-pandaa.netlify.app/", tags: ["HTML", "CSS"] },
    { id: 7, title: "Al-Ghiza Talbeena", description: "A platform for healthy eating and recipes.", image: alghiza, github: "https://github.com/ahmedsaleemdayala/Al-Ghiza", live: "https://al-ghiza.netlify.app/", tags: ["HTML", "CSS"] },
    { id: 8, title: "SMIT Feedback Form", description: "A feedback form for students.", image: smit, github: "https://github.com/ahmedsaleemdayala/Feedback", live: "https://starlit-tanuki-5f9a23.netlify.app", tags: ["HTML", "CSS"] },
  ];

  return (
    <section id='projects' className="bg-[#0f172a] py-20 px-6 lg:px-8 min-h-screen border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
     <div className="mb-16 text-center">
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter inline-block">
    Successful <span className="text-[#22c55e]">Projects</span>
    
    {/* Line - Ab ye text ki width ke mutabiq niche aayegi */}
    <div className="w-24 h-1.5 bg-[#22c55e] mt-2 rounded-full mx-auto shadow-[0_0_15px_#22c55e]"></div>
  </h2>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#22c55e]/50 transition-all flex flex-col">
              <div className="aspect-video bg-gray-800">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-[#e5e7eb]">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2 mb-6 grow">{project.description}</p>

                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-700 transition-all text-sm">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#3b82f6] text-white hover:bg-[#22c55e] transition-all text-sm">
                    <FaExternalLinkAlt size={12} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;