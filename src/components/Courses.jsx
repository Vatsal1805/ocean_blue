import { motion } from 'framer-motion';
import { PROGRAMS } from '../data/programs';
import * as Icons from 'lucide-react';

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
          <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
            [ CURRICULUM SYLLABUS ]
          </span>
          <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1a1a] font-normal leading-tight">
            What We Teach.
          </h2>
        </div>

        {/* 2x2 Grid Layout - Single Column on Mobile, 2x2 on sm and above */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {PROGRAMS.map((program) => {
            const IconComponent = Icons[program.icon] || Icons.GraduationCap;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -6,
                  borderColor: "#0a1628",
                  boxShadow: "0 12px 32px rgba(10, 22, 40, 0.04)"
                }}
                onClick={() => openProgram(program.id)}
                className="bg-[#fafaf8] border border-[#dddbd4] border-l-[4px] border-l-[#0a1628] rounded-[24px] p-8 flex flex-col items-start justify-between text-left cursor-pointer transition-all duration-300 relative overflow-hidden group min-h-[220px]"
              >
                {/* Background Watermark Letter */}
                <div className="absolute right-6 bottom-[-20px] font-serif text-[180px] text-[#1a1a1a] opacity-[0.02] select-none font-normal leading-none pointer-events-none z-0 transition-transform duration-300 group-hover:scale-105">
                  {program.letter}
                </div>

                <div className="w-full relative z-10 flex flex-col items-start">
                  
                  {/* Top Row: Icon and Badge */}
                  <div className="flex items-center justify-between w-full mb-6 gap-4">
                    <div className="w-11 h-11 rounded-[12px] bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-[#0a1628] group-hover:bg-[#0a1628] group-hover:text-white group-hover:border-[#0a1628] transition-all duration-300">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="px-3 py-1 bg-[#0a1628]/5 border border-[#0a1628]/10 text-[#0a1628] font-sans text-[11px] font-medium tracking-[0.05em] uppercase rounded-full">
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
                  className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13px] text-[#0a1628] group-hover:text-[#0d1f3c] transition-colors duration-200 mt-2 relative z-10 select-none"
                >
                  <span>Explore Curriculum & Timings</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
