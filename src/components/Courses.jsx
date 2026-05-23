import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Courses() {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const courses = [
    {
      badge: "BEGINNER",
      course: "Foundation English",
      description: "Master the fundamentals of spoken English — pronunciation, basic grammar, and everyday conversation.",
      duration: "3 Months",
      batch: "Max 12 Students",
      letter: "F"
    },
    {
      badge: "INTERMEDIATE",
      course: "Business Communication",
      description: "Learn professional English for meetings, emails, presentations, and workplace conversations.",
      duration: "3 Months",
      batch: "Max 12 Students",
      letter: "B"
    },
    {
      badge: "ADVANCED",
      course: "Interview Preparation",
      description: "Sharpen your English for job interviews, HR rounds, and high-pressure professional settings.",
      duration: "6 Weeks",
      batch: "Max 8 Students",
      letter: "I"
    },
    {
      badge: "ADVANCED",
      course: "Public Speaking Mastery",
      description: "Command any room. Build stage confidence, delivery, and articulation for any audience.",
      duration: "8 Weeks",
      batch: "Max 8 Students",
      letter: "P"
    }
  ];

  useEffect(() => {
    const activeStates = new Map();

    const callback = (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index, 10);
        if (entry.isIntersecting) {
          activeStates.set(index, true);
        } else {
          activeStates.delete(index);
        }
      });

      if (activeStates.size > 0) {
        const activeIndices = Array.from(activeStates.keys());
        const maxIndex = Math.max(...activeIndices);
        setActiveCard(maxIndex);
      } else {
        setActiveCard(null);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.6,
    });

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="courses" className="w-full bg-[#fafaf8] py-20 border-b border-[#dddbd4] relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20 px-6 select-none">
        <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
          [ CURRICULUM SYLLABUS ]
        </span>
        <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1a1a] font-normal leading-tight">
          What We Teach.
        </h2>
      </div>

      {/* Outer container (runway) */}
      <div 
        ref={containerRef}
        className="relative w-full h-auto md:h-[480vh]"
      >
        {courses.map((course, idx) => {
          const cardNum = idx + 1;
          
          // Incremental z-indexes for sticky stack overlay behavior
          const zIndexClass = 
            idx === 0 ? "z-[1] md:z-[1]" :
            idx === 1 ? "z-[2] md:z-[2]" :
            idx === 2 ? "z-[3] md:z-[3]" :
            "z-[4] md:z-[4]";

          // Separating stack layers using no extra margin on desktop for tight, continuous stacking
          const spacingClass = "mb-8 md:mb-0";

          return (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              data-index={cardNum}
              className={`relative md:sticky md:top-0 h-auto md:h-screen w-full flex items-start justify-center md:pt-[12vh] pt-8 ${zIndexClass} ${spacingClass}`}
            >
              {/* Card Inner Content */}
              <div className="max-w-[860px] w-[90%] bg-[#fafaf8] border border-[#dddbd4] border-l-[4px] border-l-[#0a1628] rounded-[20px] p-8 md:p-[48px_52px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0">
                {/* Left Column (60%) */}
                <div className="w-full md:w-[60%] flex flex-col items-start justify-center text-left">
                  {/* Badge */}
                  <span className="inline-flex px-3 py-1 bg-[#0a1628] text-white font-sans text-[11px] font-medium tracking-[0.1em] uppercase rounded-full">
                    {course.badge}
                  </span>

                  {/* Course Title */}
                  <h3 className="mt-5 font-serif text-[32px] md:text-[42px] text-[#1a1a1a] font-medium leading-tight mb-4">
                    {course.course}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-light text-[16px] text-[#888888] leading-[1.6] line-clamp-2 mb-7">
                    {course.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-6 font-sans font-light text-[13px] text-[#888888] mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>{course.batch}</span>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-[28px] py-[12px] bg-[#0a1628] text-white font-sans text-[14px] font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm"
                  >
                    Enroll Now
                  </a>
                </div>

                {/* Right Column (40%) */}
                <div className="w-full md:w-[40%] flex items-center justify-center relative min-h-[160px] md:min-h-full">
                  <div className="font-serif text-[150px] md:text-[200px] text-[#1a1a1a] opacity-5 select-none font-normal leading-none">
                    {course.letter}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed Card Counter */}
      <div 
        className={`fixed bottom-10 right-12 z-[100] hidden md:flex items-baseline gap-1 select-none transition-opacity duration-500 ${
          activeCard !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="font-sans font-medium text-[18px] text-[#0a1628]">
          {activeCard ? `0${activeCard}` : '01'}
        </span>
        <span className="font-sans font-light text-[14px] text-[#888888]">
          / 04
        </span>
      </div>

      {/* Fixed Scroll Progress Line */}
      <div 
        className={`fixed right-6 top-0 w-[2px] h-screen bg-[#dddbd4] z-[99] hidden md:block transition-opacity duration-500 ${
          activeCard !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <motion.div
          className="w-[2px] h-full bg-[#0a1628] origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </section>
  );
}
