import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import sarah from '../assets/sarah.jfif';
import sobia from '../assets/sobia.webp';
import maria from '../assets/maria.jfif';
import aisha from '../assets/ayesha-o.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonialsData = [
    { 
      id: 1, 
      name: "Sarah J.", 
      role: "Founder, GreenCorp", 
      quote: "Ahmed and his team transformed our vague idea into a seamless digital product. Highly professional!",
      image: sarah
    },
    { 
      id: 2, 
      name: "Sobia K.", 
      role: "CEO, TechFlow", 
      quote: "Outstanding front-end expertise. They work fast and deliver clean, performant code. Unmatched quality and speed.",
      image: sobia
    },
    { 
      id: 3, 
      name: "Maria L.", 
      role: "Project Manager", 
      quote: "Communication was smooth, and the UX design blew us away. Highly recommended for any professional work.",
      image: maria
    },
    { 
      id: 4, 
      name: "Aisha R.", 
      role: "Creative Director", 
      quote: "The animation and motion work they put into the UI made the whole app feel premium. Great attention to detail.",
      image: aisha
    }
  ];

  return (
    <section id="testimonials" className="bg-[#0f172a] py-24 border-t border-gray-800 overflow-hidden cursor-pointer">
      <div className="w-full px-4 md:px-10">
        <div className="mb-20 text-center">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black text-[#e5e7eb] uppercase tracking-tighter">
              Client <span className="text-[#22c55e]">Testimonials</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#22c55e] mt-3 rounded-full mx-auto shadow-[0_0_15px_#22c55e]"></div>
          </div>
        </div>

        <div className="max-w-350 mx-auto relative px-2"> 
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
            // Pagination configuration
            pagination={{ 
                clickable: true,
                el: '.custom-swiper-pagination', // Custom element use karenge
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10" // Swiper ke neeche thodi jagah
          >
            {testimonialsData.map((t) => (
              <SwiperSlide key={t.id} className="h-auto flex"> {/* 'flex' slides ki height barabar karne ke liye */}
                <div className="bg-[#1e293b]/40 border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center relative group hover:border-[#22c55e]/40 transition-all duration-500 backdrop-blur-sm w-full">
                  
                  <FaQuoteLeft className="text-5xl text-[#3b82f6]/10 absolute top-8 left-8" />

                  {/* Content area with grow to push profile to bottom */}
                  <div className="relative z-10 mb-8 grow">
                    <p className="text-gray-300 text-lg italic leading-relaxed">"{t.quote}"</p>
                  </div>

                  <div className="relative z-10 flex flex-col items-center gap-4 mt-auto">
                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#3b82f6] to-[#a855f7] p-0.75 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                            {t.image ? (
                              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-2xl font-black text-white">{t.name.charAt(0)}</span>
                            )}
                        </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#22c55e] transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#22C55E] uppercase tracking-widest mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Pagination (Dots) - Swiper box ke bahar yahan aayega */}
          <div className="custom-swiper-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

     
    </section>
  );
};

export default Testimonials;