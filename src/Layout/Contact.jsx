import React, { useState } from 'react';
import { FaPhone, FaMapLocationDot, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' };

// Netlify Forms url-encoded body expect karta hai, JSON nahi
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Contact = () => {
  const socialLinks = {
    whatsapp: "https://wa.me/+923333093878",
    instagram: "https://www.instagram.com/asdayala/",
    linkedin: "https://www.linkedin.com/in/ahmed-saleem-31100a382/",
    github: "https://github.com/ahmedsaleemdayala"
  };

  const contactInfo = [
    { icon: <FaMapLocationDot />, title: "Head Office", detail: "Office # 1012, Al Najeebi Electronic Bazar, Saddar, Karachi, Pakistan." },
    { icon: <FaPhone />, title: "Technical Support", detail: "Tel: 021-32711414" },
    { icon: <FaWhatsapp />, title: "Direct Contact", detail: "+92 333 3093878", link: socialLinks.whatsapp }
  ];

  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setFeedback('');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFeedback("Message received. I'll reply within 24 hours.");
        setForm(INITIAL_FORM);
      } else {
        setStatus('error');
        setFeedback("Message could not be sent. Please reach me on WhatsApp.");
      }
    } catch (err) {
      console.error('Form error:', err);
      setStatus('error');
      setFeedback('Network error. Check your connection and send again.');
    }
  };

  const inputClass =
    "bg-[#1e293b] border border-gray-700 rounded-lg p-4 text-[#e5e7eb] placeholder-gray-500 focus:border-[#3b82f6] focus:ring-0 focus:outline-none transition-colors";

  return (
    <>
      <section id="contact" className="bg-[#0f172a] py-24 px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">

        {/* Subtle Purple and Blue abstract glow bars for tech look */}
        <div className="absolute top-0 right-0 w-1 h-32 bg-[#3b82f6] blur-[2px]"></div>
        <div className="absolute bottom-10 left-0 w-1 h-24 bg-[#a855f7] blur-[2px]"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">

          {/* Left Side: Contact Info */}
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
              {contactInfo.map((info, idx) => {
                const Wrapper = info.link ? 'a' : 'div';
                return (
                  <Wrapper
                    key={idx}
                    {...(info.link ? { href: info.link, target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex gap-6 items-start group"
                  >
                    <div className="text-4xl text-[#3b82f6] group-hover:text-[#22c55e] transition-colors mt-1 p-4 bg-[#3b82f6]/5 rounded-xl">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#e5e7eb] group-hover:text-white">{info.title}</h4>
                      <p className="text-gray-300 group-hover:text-white mt-1 leading-relaxed max-w-xs">{info.detail}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Form — Netlify Forms */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="md:w-1/2 w-full bg-[#1e293b]/20 border border-gray-800 rounded-3xl p-10 flex flex-col gap-6"
          >
            {/* Netlify ke liye zaroori hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <h3 className="text-2xl font-black text-[#e5e7eb] mb-6 uppercase tracking-wider">Send a Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text" name="name" required
                value={form.name} onChange={handleChange}
                placeholder="Full Name" className={inputClass}
              />
              <input
                type="email" name="email" required
                value={form.email} onChange={handleChange}
                placeholder="Email Address" className={inputClass}
              />
            </div>

            <input
              type="tel" name="phone"
              value={form.phone} onChange={handleChange}
              placeholder="Phone Number" className={inputClass}
            />
            <textarea
              name="message" rows="5" required
              value={form.message} onChange={handleChange}
              placeholder="Tell me about your project..." className={inputClass}
            ></textarea>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="relative group bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-black uppercase text-lg cursor-pointer transition-all duration-300 mt-2 border-2 border-transparent hover:border-[#a855f7] hover:bg-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="group-hover:bg-linear-to-r group-hover:from-[#3b82f6] group-hover:via-[#a855f7] group-hover:to-[#22c55e] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </span>
            </button>

            {feedback && (
              <div className="text-center">
                <p
                  role="status"
                  className={`text-sm font-bold ${status === 'sent' ? 'text-[#22c55e]' : 'text-red-400'}`}
                >
                  {feedback}
                </p>
                {status === 'error' && (
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-[#22c55e] font-bold text-sm underline underline-offset-4 hover:brightness-125"
                  >
                    Message me on WhatsApp instead
                  </a>
                )}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f172a] py-10 px-6 border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-bold text-sm">
            © 2026 <span className='bg-linear-to-r from-[#3b82f6] via-[#a855f7] to-[#22c55e] bg-clip-text text-transparent'>NextGenzCoder</span> | Designed with <span className="text-red-500">❤️</span> in Karachi
          </p>

          <div className="flex gap-6 items-center text-3xl">
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="text-[#22c55e] hover:brightness-125 transition-transform"><FaWhatsapp /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-[#a855f7] hover:brightness-125 transition-transform"><FaInstagram /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-[#3b82f6] hover:brightness-125 transition-transform"><FaLinkedinIn /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white hover:scale-110 transition-transform"><FaGithub /></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;