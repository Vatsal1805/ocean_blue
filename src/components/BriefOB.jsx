import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BriefOB() {
  const leftVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rightVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  const highlightCards = [
    { value: "10,000+", label: "Students & Alumni Guided" },
    { value: "Est. 2009", label: "15+ Years of Trust" },
    { value: "Vastral & Nikol", label: "2 Branches in Ahmedabad" }
  ];

  return (
    <section className="relative w-full bg-brand-primaryBg py-20 md:py-[120px] border-b border-brand-border overflow-hidden select-none">
      {/* Subtle tiled background doodle overlay for visual continuity (2.5% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column (55% width on desktop) */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 flex flex-col items-start text-left w-full"
        >
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ ABOUT US ]
          </span>
          <h2 className="font-serif text-[36px] md:text-[48px] text-brand-charcoal font-normal leading-tight">
            Ocean Blue Education.
          </h2>
          <p className="font-sans font-light text-[16px] md:text-[17px] text-[#555555] leading-relaxed mt-5 max-w-2xl">
            Established in 2009, Ocean Blue Education & Spoken English has emerged as one of Ahmedabad's most trusted and result-oriented educational institutions. With a mission to provide quality education, skill development, and personality enhancement, we have successfully guided more than 10,000 students and alumni towards academic excellence and career success.
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center gap-1 mt-8 font-sans font-semibold text-[14px] text-brand-navy hover:text-brand-yellow hover:underline transition-all duration-300 select-none cursor-pointer"
          >
            <span>Know More About Us</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>

        {/* Right Column (45% width on desktop) */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 flex flex-col gap-4 w-full"
        >
          {highlightCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-brand-secondaryBg border border-brand-border border-l-[3px] border-l-brand-yellow rounded-xl p-5 md:p-6 text-left shadow-sm hover:shadow-md hover:border-brand-navy transition-all duration-300 flex flex-col justify-center"
            >
              <span className="font-serif text-[26px] md:text-[32px] text-brand-navy font-bold leading-none tracking-tight">
                {card.value}
              </span>
              <span className="font-sans font-light text-[13px] md:text-[14px] text-brand-grey tracking-wide mt-2">
                {card.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
