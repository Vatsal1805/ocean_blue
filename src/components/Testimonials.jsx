import { useState } from 'react';

export default function Testimonials() {
  const [isRow1Hovered, setIsRow1Hovered] = useState(false);
  const [isRow2Hovered, setIsRow2Hovered] = useState(false);

  const testimonials = [
    {
      quote: "The conceptual depth in physics and mathematics classes is unmatched. The systematic test-prep strategy and daily doubt clinics gave me the edge I needed to succeed.",
      name: "Aarav Sharma",
      track: "IIT JEE Aspirant"
    },
    {
      quote: "The biology lectures and weekly mock OMR diagnostics are exceptional. The coaching team gave me absolute clarity on complex zoology and anatomy concepts.",
      name: "Meera Patel",
      track: "NEET UG Candidate"
    },
    {
      quote: "The IELTS preparation and personalized vocabulary feedback sessions were incredible. I went from feeling stuck to securing my target band score for study abroad.",
      name: "Kabir Mehta",
      track: "IELTS Academy Student"
    },
    {
      quote: "As a Class 10 board student, the conceptual clarity in Science and Mathematics was a game-changer. The teachers bridge the gap between textbook formulas and real-world logic.",
      name: "Ishaan Desai",
      track: "Class 10 Board Topper"
    },
    {
      quote: "The Senior Secondary Science lectures are highly detailed. With dedicated NCERT sheets and parent-teacher tracking, they ensure excellent preparation for board exams.",
      name: "Riya Sen",
      track: "Class 12 Science Student"
    },
    {
      quote: "The spoken English modules and public speaking drills completely cured my stage fright. I can now converse, debate, and present in public with complete fluency.",
      name: "Devang Vyas",
      track: "Fluent English Alumni"
    }
  ];

  // Helper to render one card
  const renderCard = (item, idx) => (
    <div
      key={idx}
      className="bg-[#0d1f3c] border border-white/[0.08] rounded-[16px] p-[28px_32px] w-[320px] flex-shrink-0 flex flex-col items-start text-left select-none"
    >
      {/* 5 Stars */}
      <div className="flex text-white text-[14px] leading-none select-none tracking-wider">
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
        {item.track} · Ocean Blue Academy
      </p>
    </div>
  );

  return (
    <section id="testimonials" className="w-full bg-[#0a1628] py-[120px] border-b border-white/10 overflow-hidden relative">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6 select-none">
          <span className="font-sans font-light text-[11px] text-white/40 tracking-[0.25em] uppercase mb-4 block">
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
