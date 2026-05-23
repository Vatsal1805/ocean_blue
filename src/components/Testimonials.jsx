import { useState } from 'react';

export default function Testimonials() {
  const [isRow1Hovered, setIsRow1Hovered] = useState(false);
  const [isRow2Hovered, setIsRow2Hovered] = useState(false);

  const testimonials = [
    {
      quote: "The structure and cohort selection at Ocean Blue are impeccable. The speech audits completely reshaped my public speaking delivery.",
      name: "Aarav Sharma"
    },
    {
      quote: "It is a high-society sanctuary for polished dialogue. I developed conversational eloquence that immediately won over my business clients.",
      name: "Meera Patel"
    },
    {
      quote: "The vocal stress audits and accent coaching were game-changers for me. I transformed my cadence from flat to highly persuasive.",
      name: "Kabir Mehta"
    },
    {
      quote: "We simulated high-stakes executive boardrooms and press interviews. I learned how to command any room with verbal confidence under intense pressure.",
      name: "Ishaan Desai"
    },
    {
      quote: "No boring textbook fill-in-the-blank drills. Every session is active conversation designed around real-world high-impact situations.",
      name: "Riya Sen"
    },
    {
      quote: "I mastered impromptu rhetoric and structuring persuasive arguments. It helped me successfully lead our global project presentation.",
      name: "Devang Vyas"
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
        Student · Ocean Blue Spoken English
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
            They Came. They Spoke. They Led.
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
