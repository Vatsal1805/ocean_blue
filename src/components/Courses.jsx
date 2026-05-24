import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("School Tuitions");
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const courseCategories = {
    "School Tuitions": [
      {
        badge: "K-10 TUITIONS",
        course: "Primary & Secondary (4th–10th)",
        description: "Building strong conceptual foundations in Mathematics, Science, and English for ICSE, CBSE, and GSEB board standards.",
        duration: "Academic Year",
        batch: "Max 12 Students",
        letter: "S",
        highlights: [
          "Comprehensive Syllabus Coverage",
          "Weekly Concept & Doubt Audits",
          "Board Exam Mock Practice Drills",
          "Small, Focus-Driven Batch Sizes"
        ]
      },
      {
        badge: "11th–12th COHORTS",
        course: "Senior Secondary (11th–12th)",
        description: "Advanced stream-specific coaching for Science (Physics, Chemistry, Biology, Maths) and Commerce (Accountancy, Economics).",
        duration: "Academic Year",
        batch: "Max 15 Students",
        letter: "H",
        highlights: [
          "Stream-Specialized Expert Faculty",
          "NCERT & Board Pattern Focus",
          "Daily Practice Problem (DPP) Sheets",
          "Regular Parents-Teacher Audits"
        ]
      }
    ],
    "Competitive Prep": [
      {
        badge: "ENGINEERING ENTRANCE",
        course: "JEE Main & Advanced",
        description: "Elite, rigorous coaching designed by specialized mathematics and physics mentors to crack national engineering entrance exams.",
        duration: "1 & 2 Year Programs",
        batch: "Max 10 Students",
        letter: "J",
        highlights: [
          "Concept-Based Lecture Frameworks",
          "Simulated Mock Testing Centers",
          "Rank-Boosting Doubt Clinics",
          "Objective Problem Speed Drills"
        ]
      },
      {
        badge: "MEDICAL ENTRANCE",
        course: "NEET UG Prep",
        description: "Comprehensive biology, chemistry, and physics coaching to secure top ranks in the medical common entrance test.",
        duration: "1 & 2 Year Programs",
        batch: "Max 10 Students",
        letter: "N",
        highlights: [
          "Specialized NCERT Biology Focus",
          "Weekly Simulated OMR Sheet Tests",
          "High-Yield Physics Practice",
          "Detailed Mock Performance Audits"
        ]
      }
    ],
    "Language Programs": [
      {
        badge: "STUDY ABROAD EXAMS",
        course: "IELTS & PTE Coaching",
        description: "Complete, specialized training in reading, writing, listening, and speaking modules to clear international language tests.",
        duration: "6 Weeks to 3 Months",
        batch: "Max 8 Students",
        letter: "I",
        highlights: [
          "Mock Speaking & Writing Evaluations",
          "Listening & Reading Speed Drills",
          "Certified Native-Fluent Instructors",
          "Personalized Band-Score Audits"
        ]
      },
      {
        badge: "ENGLISH COGNITIVE SKILLS",
        course: "Spoken English & Fluency",
        description: "Polishing your pronunciation, everyday conversation abilities, and stage confidence to express yourself articulate in any crowd.",
        duration: "3 Months",
        batch: "Max 12 Students",
        letter: "E",
        highlights: [
          "Everyday Dialog & Small Talk",
          "Public Speaking & Debate Drills",
          "Accent & Pronunciation Coaching",
          "Interactive Vocabulary Audits"
        ]
      }
    ]
  };

  const categories = Object.keys(courseCategories);
  const categoryCourses = courseCategories[activeCategory];
  const activeCourse = categoryCourses[activeCourseIndex];
  const hasMultipleCourses = categoryCourses.length > 1;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveCourseIndex(0);
  };

  const handleNextCourse = () => {
    setActiveCourseIndex((prev) => (prev + 1) % categoryCourses.length);
  };

  const handlePrevCourse = () => {
    setActiveCourseIndex((prev) => (prev - 1 + categoryCourses.length) % categoryCourses.length);
  };

  return (
    <section id="courses" className="w-full bg-[#fafaf8] py-[100px] border-b border-[#dddbd4] relative overflow-hidden">
      {/* High-visibility education doodle background sketch layer with multiply blend mode */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-multiply"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 px-6 select-none">
        <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
          [ CURRICULUM SYLLABUS ]
        </span>
        <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1a1a] font-normal leading-tight">
          What We Teach.
        </h2>
      </div>

      {/* Tabs Navigation (Categories: Beginner, Intermediate, Advanced) */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-12 px-6">
        <div className="flex bg-[#f3f2ee] p-1.5 rounded-full border border-[#dddbd4] flex-wrap justify-center gap-1 md:gap-2">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-6 py-2.5 rounded-full font-sans text-[13px] md:text-[14px] font-medium transition-colors duration-300 outline-none select-none cursor-pointer ${
                  isActive ? 'text-[#fafaf8]' : 'text-[#888888] hover:text-[#1a1a1a]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-[#0a1628] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Course Display */}
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col justify-center min-h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeCourseIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:h-[420px] bg-[#fafaf8] border border-[#dddbd4] border-l-[4px] border-l-[#0a1628] rounded-[24px] p-8 md:p-[48px_52px] shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-stretch gap-10 md:gap-12 relative overflow-hidden"
          >
            {/* Background Watermark Letter */}
            <div className="absolute right-6 bottom-[-20px] font-serif text-[240px] text-[#1a1a1a] opacity-[0.03] select-none font-normal leading-none pointer-events-none z-0">
              {activeCourse.letter}
            </div>

            {/* Left Column (55% on desktop) - General Info */}
            <div className="w-full md:w-[55%] flex flex-col items-start justify-center text-left relative z-10">
              {/* Badge */}
              <span className="inline-flex px-3 py-1 bg-[#0a1628] text-white font-sans text-[11px] font-medium tracking-[0.1em] uppercase rounded-full">
                {activeCourse.badge}
              </span>

              {/* Course Title */}
              <h3 className="mt-5 font-serif text-[32px] md:text-[42px] text-[#1a1a1a] font-medium leading-tight mb-4">
                {activeCourse.course}
              </h3>

              {/* Description */}
              <p className="font-sans font-light text-[15px] md:text-[16px] text-[#888888] leading-[1.6] mb-8">
                {activeCourse.description}
              </p>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-6 font-sans font-light text-[13px] text-[#888888] mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{activeCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>{activeCourse.batch}</span>
                </div>
              </div>

              {/* Enroll Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-[32px] py-[14px] bg-[#0a1628] text-white font-sans text-[14px] font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm"
              >
                Enroll Now
              </a>
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden md:block w-[1px] bg-[#dddbd4] self-stretch my-2 relative z-10" />

            {/* Right Column (45% on desktop) - Detailed Syllabus Highlights */}
            <div className="w-full md:w-[45%] flex flex-col items-start justify-center text-left relative z-10">
              <h4 className="font-sans font-semibold text-[15px] uppercase tracking-[0.1em] text-[#1a1a1a] mb-5">
                What You Will Master:
              </h4>
              
              <ul className="flex flex-col gap-4 w-full">
                {activeCourse.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-[#0a1628] font-sans text-[11px] font-semibold mt-0.5 flex-shrink-0 select-none">
                      {i + 1}
                    </span>
                    <span className="font-sans font-light text-[15px] text-[#666666] leading-snug">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows & Pagination indicator (Visible only if Category has multiple courses) */}
        {hasMultipleCourses && (
          <div className="flex items-center justify-end gap-4 mt-6 select-none">
            <span className="font-sans font-light text-[13px] text-[#888888]">
              {activeCourseIndex + 1} of {categoryCourses.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrevCourse}
                className="w-10 h-10 rounded-full border border-[#dddbd4] bg-[#fafaf8] text-[#0a1628] flex items-center justify-center hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all duration-300 cursor-pointer outline-none shadow-sm"
                aria-label="Previous Course"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextCourse}
                className="w-10 h-10 rounded-full border border-[#dddbd4] bg-[#fafaf8] text-[#0a1628] flex items-center justify-center hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all duration-300 cursor-pointer outline-none shadow-sm"
                aria-label="Next Course"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
