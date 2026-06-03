import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../data/programs';
import * as Icons from 'lucide-react';

function CourseCard({ program }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Initialize coordinates on mouse enter to prevent initial frame drift
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

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={() => {
        const getProgramAnchor = (id) => {
          switch (id) {
            case 'school':
              return 'primary';
            case 'secondary':
              return 'senior';
            case 'jee-neet':
              return 'jee-neet';
            case 'language':
              return 'language';
            default:
              return '';
          }
        };
        navigate(`/courses#${getProgramAnchor(program.id)}`);
      }}
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        cursor: isHovered ? 'none' : 'default' 
      }}
      className="bg-[#fafaf8] border border-[#dddbd4] border-l-[4px] border-l-brand-yellow rounded-[24px] p-8 flex flex-col items-start justify-between text-left cursor-pointer transition-all duration-300 relative group min-h-[220px]"
    >
      {/* 1. Custom Magnetic Custom Cursor Circle */}
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
        className="w-full h-full flex flex-col justify-between items-start z-0 relative"
      >
        {/* Background Watermark Letter */}
        <div className="absolute right-6 bottom-[-20px] font-serif text-[180px] text-[#1a1a1a] opacity-[0.02] select-none font-normal leading-none pointer-events-none z-0 transition-transform duration-300 group-hover:scale-105">
          {program.letter}
        </div>

        <div className="w-full relative z-10 flex flex-col items-start">
          
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
          <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mt-3 mb-6 max-w-md">
            {program.summary}
          </p>
        </div>

        {/* Explore Link at Bottom */}
        <span 
          className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13px] text-brand-navy group-hover:text-brand-yellow transition-colors duration-200 mt-2 relative z-10 select-none"
        >
          <span>Explore Curriculum & Timings</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </motion.div>
    </div>
  );
}

export default function Courses({ openProgram }) {
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
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ CURRICULUM SYLLABUS ]
          </span>
          <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1a1a] font-normal leading-tight">
            What We Teach.
          </h2>
        </div>

        {/* 2x2 Grid Layout - Single Column on Mobile, 2x2 on sm and above */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {PROGRAMS.map((program) => (
            <CourseCard
              key={program.id}
              program={program}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
