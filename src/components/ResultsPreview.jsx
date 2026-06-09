import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ResultsPreview() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const toppers = [
    {
      badge: "JEE MAINS 2024",
      initials: "AR",
      score: "AIR 2847",
      name: "Student Placeholder",
      exam: "JEE Mains · 2024 Batch",
      quote: "The Physics and Maths coaching here completely changed how I approach problems."
    },
    {
      badge: "BOARD 10TH 2024",
      initials: "PM",
      score: "94.6%",
      name: "Student Placeholder",
      exam: "10th Board · GSEB · 2024",
      quote: "The 3-hour structured sessions and practice papers made sure I was fully prepared for boards."
    },
    {
      badge: "IELTS ACADEMIC 2024",
      initials: "TR",
      score: "Band 7.5",
      name: "Student Placeholder",
      exam: "IELTS Academic · 2024 Batch",
      quote: "Ocean Blue Education & Spoken English's IELTS coaching is structured and thorough. I achieved my target band score in the first attempt."
    },
    {
      badge: "IELTS GENERAL 2024",
      initials: "NP",
      score: "Band 7.0",
      name: "Student Placeholder",
      exam: "IELTS General · 2024 Batch",
      quote: "The writing task coaching and mock tests at Ocean Blue Education & Spoken English helped me improve from band 5.5 to 7.0."
    }
  ];

  return (
    <section className="relative w-full bg-brand-navy py-20 md:py-[120px] border-b border-white/10 overflow-hidden select-none">
      {/* Subtle background radial gradient for high-end warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,41,148,0.35)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle background doodle texture (inverted for white outlines at 2.5% opacity on dark background) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.018] invert"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none max-w-3xl">
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ OUR TOPPERS ]
          </span>
          <h2 className="font-serif text-[42px] sm:text-[52px] text-white font-normal leading-tight">
            Results Across Every Program.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-white/60 leading-relaxed mt-4 max-w-2xl text-center">
            JEE · NEET · Board Exams · IELTS · PTE — 15 years of student success across every program.
          </p>
        </div>

        {/* Staggered Topper Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-[1200px] mx-auto"
        >
          {toppers.map((topper, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white/[0.06] border border-white/[0.12] rounded-[20px] px-6 py-7 lg:px-7 lg:py-6 flex flex-col items-start text-left relative z-10 overflow-hidden shadow-xl"
            >
              {/* Exam Badge Pill */}
              <span className="inline-flex px-3.5 py-1 bg-brand-yellow text-brand-navy font-sans text-[10px] font-bold tracking-[0.1em] uppercase rounded-full select-none">
                {topper.badge}
              </span>

              {/* Photo / Initials Circle (72px) */}
              <div 
                className="w-18 h-18 rounded-full border border-white/[0.12] flex items-center justify-center mt-6 text-white select-none overflow-hidden relative"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <span className="font-sans font-semibold text-[18px] text-white">
                  {topper.initials}
                </span>
              </div>

              {/* Student Name */}
              <h3 className="font-sans font-semibold text-[16px] lg:text-[15px] text-white mt-5 leading-tight">
                {topper.name}
              </h3>

              {/* Score Highlight */}
              <div className="font-serif text-[36px] lg:text-[32px] text-brand-yellow font-bold mt-2 leading-none tracking-tight select-none">
                {topper.score}
              </div>

              {/* Exam details */}
              <span className="font-sans font-light text-[13px] text-white/50 mt-1 leading-none">
                {topper.exam}
              </span>

              {/* Quote Review */}
              <p className="font-sans font-light text-[13px] lg:text-[12px] text-white/60 leading-relaxed mt-5 pt-5 border-t border-white/[0.06] w-full italic">
                "{topper.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA Link */}
        <Link 
          to="/results"
          className="inline-block mt-12 font-sans font-semibold text-[14px] text-brand-yellow hover:text-white hover:underline transition-all duration-300 select-none cursor-pointer"
        >
          View All Results &rarr;
        </Link>

      </div>
    </section>
  );
}
