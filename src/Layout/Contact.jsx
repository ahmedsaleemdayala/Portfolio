import React from 'react';
import { FaLocationDot, FaPhone, FaMapLocationDot, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const socialLinks = {
    whatsapp: "https://wa.me/+923333093878",
    instagram: "https://www.instagram.com/asdayala/",
    linkedin: "https://www.linkedin.com/in/ahmed-saleem-31100a382/",
    github: "https://github.com/ahmedsaleemdayala"
  };

  const contactInfo = [
    { icon: <FaMapLocationDot/>, title: "Head Office", detail: "Office # 1012, Al Najeebi Electronic Bazar, Saddar, Karachi, Pakistan." },
    { icon: <FaPhone />, title: "Technical Support", detail: "Tel: 021-32711414" },
    { icon: <FaWhatsapp />, title: "Direct Contact", detail: "+92 333 3093878", link: socialLinks.whatsapp }
  ];

  return (
    <>
    <section id="contact" className="bg-[#0f172a] py-24 px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
      
      {/* Subtle Purple and Blue abstract glow bars for tech look */}
      <div className="absolute top-0 right-0 w-1 h-32 bg-[#3b82f6] blur-[2px]"></div>
      <div className="absolute bottom-10 left-0 w-1 h-24 bg-[#a855f7] blur-[2px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: Contact Info - Techy Glassmorphism card */}
        <div className="md:w-1/2 w-full bg-[#1e293b]/40 border border-gray-800 rounded-3xl p-10 backdrop-blur-md">
          <div className="mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-black text-[#e5e7eb] uppercase tracking-tighter">
                Contact <span className="text-[#3b82f6]">Us</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#3b82f6] mt-3 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
            </div>
            <p className="text-gray-400 mt-6 leading-relaxed max-w-md">
              Whether you need a free quote, want to discuss a project, or just have a technical query, my team is here to assist. Let's build something extraordinary.
            </p>
          </div>

          <div className="space-y-10">
            {contactInfo.map((info, idx) => (
              <a key={idx} href={info.link} target="_blank" rel="noreferrer" className={`flex gap-6 items-start ${info.link ? 'hover:text-[#22c55e]' : ''} group`}>
                <div className="text-4xl text-[#3b82f6] cursor-pointer group-hover:text-[#22c55e] transition-colors mt-1 p-4 bg-[#3b82f6]/5 rounded-xl">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#e5e7eb] group-hover:text-white">{info.title}</h4>
                  <p className="text-gray-300 group-hover:text-white mt-1 leading-relaxed max-w-xs">{info.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Simple Contact Form (Not Functional, as per request) */}
        <form className="md:w-1/2 w-full bg-[#1e293b]/20 border border-gray-800 rounded-3xl p-10 flex flex-col gap-6">
            <h3 className="text-2xl font-black text-[#e5e7eb] mb-6 uppercase tracking-wider">Send a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="bg-[#1e293b] border border-gray-700 rounded-lg p-4 text-[#e5e7eb] placeholder-gray-500 focus:border-[#3b82f6] focus:ring-0 focus:outline-none"/>
                <input type="email" placeholder="Email Address" className="bg-[#1e293b] border border-gray-700 rounded-lg p-4 text-[#e5e7eb] placeholder-gray-500 focus:border-[#3b82f6] focus:ring-0 focus:outline-none"/>
            </div>
            
            <input type="tel" placeholder="Phone Number" className="bg-[#1e293b] border border-gray-700 rounded-lg p-4 text-[#e5e7eb] placeholder-gray-500 focus:border-[#3b82f6] focus:ring-0 focus:outline-none"/>
            <textarea placeholder="Your Message..." rows="5" className="bg-[#1e293b] border border-gray-700 rounded-lg p-4 text-[#e5e7eb] placeholder-gray-500 focus:border-[#3b82f6] focus:ring-0 focus:outline-none"></textarea>
            <button 
  type="submit" 
  className="relative group bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-black uppercase text-lg cursor-pointer transition-all duration-300 mt-6 border-2 border-transparent hover:border-[#a855f7] hover:bg-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
>
  <span className="group-hover:bg-linear-to-r group-hover:from-[#3b82f6] group-hover:via-[#a855f7] group-hover:to-[#22c55e] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    Submit Request
  </span>
</button>
        </form>
      </div>
    </section>

    {/* --- FOOTER --- */}
    <footer className="bg-[#0f172a] py-10 px-6 border-t border-gray-800 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 font-bold text-sm">
           © 2026 <span className='bg-linear-to-r from-[#3b82f6] via-[#a855f7] to-[#22c55e] bg-clip-text text-transparent'>NextGenzCoder</span> | Designed with <span className="text-red-500">❤️</span> in Karachi
        </p>
        
        {/* Simple Social Footer Links - Techy icons on hover */}
        <div className="flex gap-6 items-center text-3xl">
           <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="text-[#22c55e] hover:brightness-125 transition-transform"><FaWhatsapp /></a>
           <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-[#a855f7] hover:brightness-125 transition-transform"><FaInstagram /></a>
           <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-[#3b82f6] hover:brightness-125 transition-transform"><FaLinkedinIn /></a>
           <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-[black] hover:scale-125 transition-transform"><FaGithub /></a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Contact;