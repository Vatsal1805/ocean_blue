import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../data/programs';
import * as Icons from 'lucide-react';

function CourseCard({ program, idx, totalCards, isFullWidth }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const IconComponent = Icons[program.icon] || Icons.GraduationCap;
  const formattedIndex = String(idx + 1).padStart(2, '0');
  const formattedTotal = String(totalCards).padStart(2, '0');

  // Navigation target mapping
  const handleCardClick = () => {
    if (program.id === 'ielts') {
      navigate('/ielts');
    } else {
      const getProgramAnchor = (id) => {
        switch (id) {
          case 'school': return 'primary';
          case 'secondary': return 'senior';
          case 'jee-neet': return 'jee-neet';
          case 'language': return 'language';
          default: return '';
        }
      };
      navigate(`/courses#${getProgramAnchor(program.id)}`);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        cursor: isHovered ? 'none' : 'default' 
      }}
      className={`bg-[#fafaf8] border border-[#dddbd4] border-l-[4px] border-l-brand-yellow rounded-[24px] p-8 flex transition-all duration-300 relative group cursor-pointer ${
        isFullWidth 
          ? 'flex-col md:flex-row md:items-stretch md:justify-between min-h-[220px] md:min-h-[280px]' 
          : 'flex-col items-start justify-between min-h-[220px] md:min-h-[280px]'
      }`}
    >
      {/* 1. Custom Hover Cursor Circle */}
      <motion.div
        style={{ position: 'absolute', pointerEvents: 'none', zIndex: 20 }}
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          x: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
          y: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
        className="w-[120px] h-[120px] rounded-full bg-brand-navy flex items-center justify-center text-center p-3"
      >
        <span className="font-sans font-semibold text-[9px] tracking-[0.1em] uppercase text-white leading-[1.4] select-none">
          Click to<br />Explore &rarr;
        </span>
      </motion.div>

      {/* 2. Dimmable Card Content Wrapper */}
      <motion.div
        animate={{ opacity: isHovered ? 0.4 : 1 }}
        transition={{ duration: 0.2 }}
        className={`w-full flex z-0 relative ${
          isFullWidth 
            ? 'flex-col md:flex-row md:items-stretch md:justify-between h-full' 
            : 'flex-col justify-between items-start h-full'
        }`}
      >
        {/* Left Column (Content) */}
        <div className={`flex flex-col items-start ${isFullWidth ? 'md:max-w-2xl w-full' : 'w-full'}`}>
          {/* Top Row: Icon and Badge */}
          <div className="flex items-center justify-between w-full mb-6 gap-4">
            <div className="w-11 h-11 rounded-[12px] bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-brand-navy group-hover:bg-brand-yellow group-hover:text-brand-navy group-hover:border-brand-yellow transition-all duration-300">
              <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="px-3 py-1 bg-brand-yellow text-brand-navy font-sans text-[11px] font-semibold tracking-[0.05em] uppercase rounded-full select-none">
              {program.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-sans font-semibold text-[20px] md:text-[22px] text-[#1a1a1a] leading-tight">
            {program.title}
          </h3>

          {/* Summary Description */}
          <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mt-3 mb-6 max-w-xl">
            {program.summary}
          </p>
        </div>

        {/* Right Column (Watermark + Counter + Link) */}
        <div className={`relative flex flex-col justify-between items-end ${
          isFullWidth 
            ? 'min-w-[150px] md:border-l md:border-[#f0eee8] md:pl-10 mt-6 md:mt-0 w-full md:w-auto pt-6 md:pt-0 border-t border-[#f0eee8] md:border-t-0' 
            : 'w-full'
        }`}>
          {/* Card Counter */}
          <span className="font-sans font-semibold text-[13px] text-brand-grey tracking-wider select-none mb-4 md:mb-0">
            {formattedIndex} / {formattedTotal}
          </span>

          {/* Background Watermark Letter */}
          <div className={`font-serif text-[#1a1a1a] opacity-[0.02] select-none font-normal leading-none pointer-events-none transition-transform duration-300 group-hover:scale-105 ${
            isFullWidth
              ? 'absolute right-0 bottom-[-10px] text-[150px] hidden md:block'
              : 'absolute right-6 bottom-[-20px] text-[180px]'
          }`}>
            {program.letter}
          </div>

          {/* Explore Link */}
          <span 
            className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13px] text-brand-navy group-hover:text-brand-yellow transition-colors duration-200 mt-auto select-none"
          >
            <span>Explore Curriculum</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Courses() {
  const firstFour = PROGRAMS.slice(0, 4);
  const fifthCard = PROGRAMS[4];

  return (
    <section id="courses" className="w-full bg-[#fafaf8] py-[120px] border-b border-[#dddbd4] relative overflow-hidden">
      {/* Tiled education doodle background sketch layer (1.5% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ CURRICULUM SYLLABUS ]
          </span>
          <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1a1a] font-normal leading-tight">
            What We Teach.
          </h2>
        </div>

        {/* 2x2 Grid Layout for the first 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {firstFour.map((program, idx) => (
            <CourseCard
              key={program.id}
              program={program}
              idx={idx}
              totalCards={PROGRAMS.length}
              isFullWidth={false}
            />
          ))}
        </div>

        {/* Full-width bottom layout for the 5th card */}
        {fifthCard && (
          <div className="max-w-5xl mx-auto w-full mt-6">
            <CourseCard
              program={fifthCard}
              idx={4}
              totalCards={PROGRAMS.length}
              isFullWidth={true}
            />
          </div>
        )}

      </div>
    </section>
  );
}
