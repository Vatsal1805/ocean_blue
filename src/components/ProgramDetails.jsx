import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../data/programs';
import Contact from './Contact';
import { BookOpen, Clock, Users, ArrowLeft } from 'lucide-react';

export default function ProgramDetails({ programId, closeProgram }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const program = PROGRAMS.find((p) => p.id === programId);

  if (!program) return null;

  return (
    <div 
      className={`page-enter ${visible ? 'page-enter-active' : ''} bg-[#fafaf8] min-h-screen pt-28 pb-20 relative overflow-hidden select-none`}
    >
      {/* Subtle tiled background doodle overlay for visual continuity (15% opacity with multiply) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Floating Back Pill Button */}
        <button 
          onClick={closeProgram} 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#dddbd4] bg-[#fafaf8]/80 backdrop-blur-md text-brand-navy hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition-all duration-300 font-sans text-[13px] font-semibold shadow-sm cursor-pointer select-none mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Programs</span>
        </button>

        {/* Cinematic Split Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (65%): General Info & Subjects list */}
          <div className="lg:col-span-8 flex flex-col items-start text-left w-full">
            {/* Badge */}
            <span className="inline-flex px-3 py-1 bg-brand-yellow text-brand-navy font-sans text-[11px] font-semibold tracking-[0.1em] uppercase rounded-full">
              {program.badge}
            </span>

            {/* Title */}
            <h1 className="mt-5 font-serif text-[42px] md:text-[54px] text-[#1a1a1a] font-normal leading-tight">
              {program.title}
            </h1>

            {/* Rich Description */}
            <p className="mt-6 font-sans font-light text-[16px] md:text-[18px] text-[#666666] leading-relaxed max-w-3xl">
              {program.description}
            </p>

            {/* Subject Scope */}
            <div className="mt-12 w-full">
              {program.streams ? (
                <div className="flex flex-col gap-6">
                  <h3 className="font-sans font-semibold text-[15px] uppercase tracking-[0.1em] text-[#1a1a1a] mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-navy" />
                    <span>Specialized Preparation Streams:</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {program.streams.map((stream) => (
                      <div 
                        key={stream.id}
                        className="bg-white/80 backdrop-blur-md border border-[#dddbd4] rounded-[24px] p-6 shadow-sm hover:border-brand-yellow hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex px-2.5 py-0.5 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-navy font-sans text-[10px] font-semibold tracking-[0.05em] uppercase rounded-full">
                              {stream.badge}
                            </span>
                          </div>
                          <h4 className="font-serif text-[22px] text-[#1a1a1a] font-normal leading-tight">
                            {stream.title}
                          </h4>
                          <p className="mt-1 font-sans font-light text-[12px] uppercase tracking-[0.1em] text-[#999999] mb-4">
                            {stream.subtitle}
                          </p>
                          <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mb-6">
                            {stream.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-3 mt-auto">
                          <h5 className="font-sans font-semibold text-[11px] uppercase tracking-[0.1em] text-[#1a1a1a] mb-1">
                            Core Modules:
                          </h5>
                          {stream.subjects.map((sub, i) => (
                            <div 
                              key={i} 
                              className="flex items-center gap-3 bg-[#f3f2ee]/50 border border-[#dddbd4] rounded-[14px] p-3 transition-all duration-300 hover:border-brand-yellow hover:bg-white"
                            >
                              <span className="w-5 h-5 rounded-full bg-brand-yellow text-brand-navy flex items-center justify-center font-sans text-[10px] font-semibold flex-shrink-0 select-none">
                                0{i + 1}
                              </span>
                              <span className="font-sans font-light text-[13px] text-[#1a1a1a] leading-tight">
                                {sub}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-sans font-semibold text-[15px] uppercase tracking-[0.1em] text-[#1a1a1a] mb-6 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-navy" />
                    <span>Curriculum & Subjects Covered:</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {program.subjects.map((sub, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 bg-[#f3f2ee]/50 border border-[#dddbd4] rounded-[16px] p-4 transition-all duration-300 hover:border-brand-yellow hover:bg-white"
                      >
                        <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-navy flex items-center justify-center font-sans text-[11px] font-semibold flex-shrink-0 select-none">
                          0{i + 1}
                        </span>
                        <span className="font-sans font-light text-[15px] text-[#1a1a1a] leading-tight">
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (35%): Logistics & Schedules Info */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-[#fafaf8]/80 backdrop-blur-md border border-[#dddbd4] rounded-[24px] p-8 shadow-sm flex flex-col gap-6 text-left">
              <h3 className="font-sans font-semibold text-[13px] uppercase tracking-[0.15em] text-brand-label">
                Course Details
              </h3>
              
              {/* Timings */}
              <div>
                <span className="font-sans font-semibold text-[14px] text-brand-navy flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Batch Timings</span>
                </span>
                <ul className="flex flex-col gap-2 font-sans font-light text-[14px] text-[#666666]">
                  {program.timings.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#dddbd4]" />

              {/* Capacities */}
              <div>
                <span className="font-sans font-semibold text-[14px] text-brand-navy flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4" />
                  <span>Max Batch Capacity</span>
                </span>
                <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed">
                  Strictly limited to a maximum of <strong className="font-semibold text-brand-navy">{program.batchLimit} students</strong> per batch to guarantee individualized concept focus and direct mentoring.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Separator to Admissions Form */}
        <div className="w-full h-[1px] bg-[#dddbd4] my-16" />

        {/* Inline Prefilled Admissions Signup */}
        <div className="w-full relative">
          <Contact prefilledProgram={program.title} />
        </div>

      </div>
    </div>
  );
}
