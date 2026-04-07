import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technology Ecosystem', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    
  ];

  return (
    <nav className="bg-[#0f172a] text-[#e5e7eb] sticky top-0 z-50 border-b border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter bg-linear-to-r from-[#3b82f6] via-[#a855f7] to-[#22c55e] bg-clip-text text-transparent cursor-pointer">
              NexgenzCoder
            </span>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#22c55e] transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Hire Me Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/+923333093878"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-[#0f172a] px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:bg-linear-to-r from-[#3b82f6] via-[#a855f7] to-[#22c55e]"
            >
              <MessageCircle size={18} />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-[#e5e7eb] hover:text-[#22c55e] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-b border-gray-700 animate-in slide-in-from-top duration-300 ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#0f172a] hover:text-[#22c55e]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/+923333093878"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-linear-to-r from-[#3b82f6] to-[#a855f7] text-white px-6 py-3 rounded-lg font-bold"
            >
              Hire Me (WhatsApp)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;