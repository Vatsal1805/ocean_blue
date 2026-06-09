import { useState } from 'react';

export default function Testimonials() {
  const [isRow1Hovered, setIsRow1Hovered] = useState(false);
  const [isRow2Hovered, setIsRow2Hovered] = useState(false);

  const testimonials = [
    {
      quote: "My experience at Ocean Blue Education was exceptional! The highly experienced instructors provided tailored guidance, making complex concepts easy to understand. Their specialized approach fostered a supportive learning environment that truly elevated my skills and confidence.",
      name: "Hardik",
      track: "GSEB Class X Student"
    },
    {
      quote: "My experience was exceptional at Ocean Blue Education & Spoken English. Highly experienced instructors, tailored guidance, and supportive learning environment that elevated my confidence in spoken English. Highly recommended!",
      name: "Mansi Bhatt",
      track: "Spoken English Student"
    },
    {
      quote: "The structured preparation for IELTS, custom speaking slots, and IDP-partner level mock tests helped me secure my required band in the first attempt. Excellent guidance from all mentors!",
      name: "Rohan Patel",
      track: "IELTS Academy Student"
    },
    {
      quote: "Best coaching for JEE and NEET in Vastral. Detailed concept sheets, rigorous test series, and constant mentoring by Rajput sir helped me build problem-solving confidence.",
      name: "Aayushi Shah",
      track: "JEE Aspirant"
    },
    {
      quote: "Ocean Blue Education & Spoken English provides a perfect study atmosphere. The customized notes, regular evaluation sheets, and interactive board preparation classes were super helpful for my Class 12 boards.",
      name: "Karan Rajput",
      track: "Class 12 Commerce Student"
    },
    {
      quote: "The concept-first lectures and library facilities are outstanding. Teachers are always available for doubt-solving, even after class hours. I highly recommend it to everyone!",
      name: "Pooja Vaghela",
      track: "Class 10 Student"
    }
  ];

  // Helper to render one card
  const renderCard = (item, idx) => (
    <div
      key={idx}
      className="bg-brand-navyLight border border-white/[0.08] rounded-[16px] p-[28px_32px] w-[320px] flex-shrink-0 flex flex-col items-start text-left select-none"
    >
      {/* 5 Stars */}
      <div className="flex text-brand-yellow text-[14px] leading-none select-none tracking-wider">
        ★★★★★
      </div>

      {/* Quote */}
      <p className="font-sans font-light text-[15px] text-[#cccccc] leading-relaxed mt-3 line-clamp-3">
        "{item.quote}"
      </p>

      {/* Name */}
      <h4 className="font-sans font-medium text-[14px] text-white mt-4 leading-tight">
        {item.name}
      </h4>

      {/* Subtitle */}
      <p className="font-sans font-light text-[12px] text-white/40 mt-1 leading-tight">
        {item.track} · Ocean Blue Education & Spoken English
      </p>
    </div>
  );

  return (
    <section id="testimonials" className="w-full bg-brand-navy py-[120px] border-b border-white/10 overflow-hidden relative">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6 select-none">
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ WHAT OUR STUDENTS SAY ]
          </span>
          <h2 className="font-serif text-[42px] sm:text-[52px] text-white font-normal leading-tight">
            Dedicated Mentorship. Proven Outcomes.
          </h2>
        </div>

        {/* Double Marquee Grid */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Row 1: Moves Right ( scrolls from -50% to 0% ) */}
          <div 
            className="w-full overflow-hidden flex relative"
            onMouseEnter={() => setIsRow1Hovered(true)}
            onMouseLeave={() => setIsRow1Hovered(false)}
          >
            <div 
              className="animate-marquee-right flex gap-4"
              style={{ 
                animationPlayState: isRow1Hovered ? 'paused' : 'running',
                willChange: "transform"
              }}
            >
              {/* Duplicated twice for seamless looping */}
              {[...testimonials, ...testimonials].map((item, idx) => renderCard(item, idx))}
            </div>
          </div>

          {/* Row 2: Moves Left ( scrolls from 0% to -50% ) */}
          <div 
            className="w-full overflow-hidden flex relative"
            onMouseEnter={() => setIsRow2Hovered(true)}
            onMouseLeave={() => setIsRow2Hovered(false)}
          >
            <div 
              className="animate-marquee-left flex gap-4"
              style={{ 
                animationPlayState: isRow2Hovered ? 'paused' : 'running',
                willChange: "transform"
              }}
            >
              {/* Duplicated twice for seamless looping */}
              {[...testimonials, ...testimonials].map((item, idx) => renderCard(item, `row2-${idx}`))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
