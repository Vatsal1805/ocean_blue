import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ResultsPreview() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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

  const getResultImgUrl = (filename) => {
    return new URL(`../../Assets/Results/${filename}`, import.meta.url).href;
  };

  const toppers = [
    {
      badge: "JEE MAINS 2024",
      name: "Dev Patel",
      score: "AIR 2847",
      exam: "JEE Mains · 2024 Batch",
      quote: "The Physics and Maths coaching here completely changed how I approach problems.",
      image: getResultImgUrl("IMG_9096.JPG.jpeg")
    },
    {
      badge: "IELTS 2024",
      name: "Sneha Vyas",
      score: "Band 7.5",
      exam: "IELTS Academic · 2024 Batch",
      quote: "I went from band 5.5 to 7.5 in one attempt. The mock tests made all the difference.",
      image: getResultImgUrl("IMG_9101.JPG.jpeg")
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
        <div className="flex flex-col items-center text-center mb-16 select-none max-w-2xl">
          <span className="font-sans font-medium text-[11px] text-white/40 tracking-[0.25em] uppercase mb-4 block">
            [ OUR TOPPERS ]
          </span>
          <h2 className="font-serif text-[42px] sm:text-[52px] text-white font-normal leading-tight">
            Our Students Deliver.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-white/60 leading-relaxed mt-4 max-w-xl">
            15+ years of results across boards, entrance exams, and language tests.
          </p>
        </div>

        {/* Staggered Topper Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          {toppers.map((topper, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white/[0.04] border border-white/[0.1] rounded-[24px] p-8 md:p-10 flex flex-col items-start text-left relative z-10 overflow-hidden shadow-xl"
            >
              {/* Exam Badge Pill */}
              <span className="inline-flex px-3.5 py-1 bg-brand-yellow text-brand-navy font-sans text-[10px] font-bold tracking-[0.1em] uppercase rounded-full select-none">
                {topper.badge}
              </span>

              {/* Photo Placeholder Circle */}
              <div className="w-16 h-16 rounded-full bg-white/[0.06] border-2 border-white/[0.12] flex items-center justify-center mt-6 text-white/20 select-none overflow-hidden relative">
                {topper.image ? (
                  <img 
                    src={topper.image} 
                    alt={topper.name} 
                    className="w-full h-full object-cover object-center" 
                  />
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                )}
              </div>

              {/* Student Name */}
              <h3 className="font-sans font-semibold text-[18px] text-white mt-5 leading-tight">
                {topper.name}
              </h3>

              {/* Score Highlight */}
              <div className="font-serif text-[36px] md:text-[40px] text-brand-yellow font-bold mt-2 leading-none tracking-tight select-none">
                {topper.score}
              </div>

              {/* Exam details */}
              <span className="font-sans font-light text-[13px] text-white/50 mt-1 leading-none">
                {topper.exam}
              </span>

              {/* Quote Review */}
              <p className="font-sans font-light text-[14px] text-white/60 leading-relaxed mt-5 pt-5 border-t border-white/[0.06] w-full italic">
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
