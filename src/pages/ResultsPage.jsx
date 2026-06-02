import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResultsPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Results' },
    { id: 'entrance', label: 'JEE & NEET' },
    { id: 'boards', label: 'Board Exams' },
    { id: 'language', label: 'IELTS / PTE' }
  ];

  const results = [
    {
      category: 'entrance',
      badge: "JEE MAINS 2024",
      name: "Dev Patel",
      score: "AIR 2847",
      exam: "JEE Mains · 2024 Batch",
      quote: "The Physics and Maths coaching here completely changed how I approach problems."
    },
    {
      category: 'language',
      badge: "IELTS ACADEMIC",
      name: "Sneha Vyas",
      score: "Band 7.5",
      exam: "IELTS Academic · 2024 Batch",
      quote: "I went from band 5.5 to 7.5 in one attempt. The mock tests made all the difference."
    },
    {
      category: 'boards',
      badge: "CLASS 12 SCIENCE",
      name: "Rohan Shah",
      score: "98.2 PR",
      exam: "GSEB Board · 2024 Batch",
      quote: "Daily practice exams and standard error correction sheets cured all my organic chemistry doubts."
    },
    {
      category: 'boards',
      badge: "CLASS 10 GSEB",
      name: "Karan Desai",
      score: "99.4 PR",
      exam: "GSEB Class 10 Topper",
      quote: "Very small batch sizes. Teachers answered every single algebraic question directly in class."
    },
    {
      category: 'entrance',
      badge: "NEET UG 2023",
      name: "Dr. Meera Amin",
      score: "634 / 720",
      exam: "NEET UG Medical Entrance",
      quote: "The Biology NCERT concept breakdowns and Sunday evaluation trackers are simply unbeatable."
    },
    {
      category: 'language',
      badge: "IELTS ACADEMIC",
      name: "Rajesh Trivedi",
      score: "Band 8.0",
      exam: "IELTS Academic · 2023 Batch",
      quote: "1-on-1 articulation audits with Dhananjay Sir helped me secure my study visa for Canada."
    }
  ];

  const filteredResults = filter === 'all' 
    ? results 
    : results.filter(r => r.category === filter);

  return (
    <div className="bg-brand-primaryBg min-h-screen pt-28 pb-20 relative overflow-hidden select-none">
      {/* Subtle background doodle sketch layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 select-none"
        >
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ OUTCOMES & TRIUMPHS ]
          </span>
          <h1 className="font-serif text-[42px] sm:text-[54px] text-brand-charcoal font-normal leading-tight">
            Proven Outcomes.
          </h1>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-brand-grey leading-relaxed mt-4 max-w-xl">
            Celebrating 15+ years of top-tier scores in board standards, competitive engineering/medical entrances, and overseas language exams.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full font-sans text-[13px] font-semibold transition-all duration-300 cursor-pointer select-none ${
                filter === cat.id 
                  ? 'bg-brand-yellow text-brand-navy shadow-sm' 
                  : 'bg-brand-secondaryBg text-brand-grey border border-brand-border/60 hover:text-brand-charcoal hover:bg-brand-border/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic scoreboards grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredResults.map((topper, idx) => (
              <motion.div
                layout
                key={topper.name + topper.badge}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-navy text-white rounded-[24px] p-8 flex flex-col items-start text-left relative overflow-hidden shadow-lg border border-white/[0.08]"
              >
                {/* Visual Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,205,0,0.06)_0%,transparent_50%)]" />

                {/* Exam Badge Pill */}
                <span className="inline-flex px-3 py-0.5 bg-brand-yellow text-brand-navy font-sans text-[10px] font-bold tracking-[0.1em] uppercase rounded-full select-none mb-6">
                  {topper.badge}
                </span>

                {/* Photo Placeholder Circle */}
                <div className="w-14 h-14 rounded-full bg-white/[0.06] border-2 border-white/[0.12] flex items-center justify-center text-white/20 select-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>

                {/* Student Name */}
                <h3 className="font-sans font-semibold text-[16px] text-white mt-4 leading-tight">
                  {topper.name}
                </h3>

                {/* Score */}
                <div className="font-serif text-[30px] md:text-[34px] text-brand-yellow font-bold mt-1 leading-none tracking-tight select-none">
                  {topper.score}
                </div>

                {/* Exam year */}
                <span className="font-sans font-light text-[12px] text-white/50 mt-1 leading-none">
                  {topper.exam}
                </span>

                {/* Quote */}
                <p className="font-sans font-light text-[13px] text-white/60 leading-relaxed mt-4 pt-4 border-t border-white/[0.06] w-full italic">
                  "{topper.quote}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
