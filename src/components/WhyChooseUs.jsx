import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconHome, 
  IconFileText, 
  IconClock, 
  IconAward,
  IconDeviceLaptop,
  IconLeaf,
  IconMicrophone2
} from '@tabler/icons-react';

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      num: "01",
      Icon: IconHome,
      title: "No Homework Concept",
      desc: "We believe real learning happens inside the classroom. Every session is designed to be complete — students leave with clarity, not pending tasks. No academic stress carried home.",
      details: [
        "Complete learning within class hours",
        "No pending assignments outside coaching",
        "Designed for students balancing school and coaching schedules"
      ]
    },
    {
      num: "02",
      Icon: IconClock,
      title: "No Time Limit Learning Support",
      desc: "Students can approach teachers for guidance and doubt-solving whenever required — before class, after class, or between sessions. There is no time limit on learning support at Ocean Blue.",
      details: [
        "Doubt solving available beyond class hours",
        "Teachers accessible for personal guidance",
        "No question left unanswered"
      ]
    },
    {
      num: "03",
      Icon: IconFileText,
      title: "Exclusive Study Material",
      desc: "Every enrolled student receives Ocean Blue's specially designed modules, notes, worksheets, and practice papers — built from 15 years of teaching experience. Not borrowed from publishers. Printed and distributed to every student.",
      details: [
        "Custom modules and notes by our faculty",
        "Chapter-wise worksheets and practice papers",
        "Updated every academic year based on board changes"
      ]
    },
    {
      num: "04",
      Icon: IconDeviceLaptop,
      title: "Smart Classrooms",
      desc: "Our classrooms are equipped with modern technology for interactive learning — audio-visual tools, digital boards, and structured learning environments that make complex concepts simple and engaging.",
      details: [
        "Modern audio-visual teaching tools",
        "Interactive digital classroom environment",
        "Technology-enabled concept delivery"
      ]
    },
    {
      num: "05",
      Icon: IconLeaf,
      title: "Stress-Free Study Material",
      desc: "Our study material is designed with one principle — no unnecessary load on students. Clear language, structured layouts, and progressive difficulty. Students can read, understand, and revise without feeling overwhelmed.",
      details: [
        "Designed for easy self-reading at home",
        "Progressive difficulty across all chapters",
        "No unnecessary content load on students"
      ]
    },
    {
      num: "06",
      Icon: IconMicrophone2,
      title: "Everyday Spoken English Practice",
      desc: "Regardless of which academic program a student is enrolled in, daily spoken English practice is integrated into every student's experience at Ocean Blue. Communication confidence is built alongside board and entrance exam preparation — every single day.",
      details: [
        "Daily practice sessions for all enrolled students",
        "Fluency built alongside academic programs",
        "Real conversation practice, not just textbook exercises"
      ]
    },
    {
      num: "07",
      Icon: IconAward,
      title: "Award-Winning Institute",
      desc: "Honored with the Best Education Institute in Gujarat Award by Divya Bhaskar News & Media Group. Presented by Shri Balvantsinh Rajput, Honorable Minister of Gujarat — recognizing our commitment to educational excellence.",
      details: [
        "Best Education Institute in Gujarat — Divya Bhaskar",
        "Recognized by Honorable Minister of Gujarat",
        "15+ years of consistent academic results"
      ]
    }
  ];

  const activeSection = sections[activeTab] || sections[0];

  return (
    <section id="why-choose-us" className="relative w-full bg-[#fafaf8] py-[120px] border-b border-brand-border overflow-hidden select-none">
      {/* High-visibility education doodle background sketch layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-multiply"
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
            [ WHY CHOOSE US ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
            Built Around One Thing. Your Success.
          </h2>
        </div>

        {/* Desktop Layout (Split-Screen Swapper) */}
        <div className="hidden md:grid grid-cols-12 gap-12 items-stretch min-h-[480px]">
          
          {/* Left Column: Navigation Buttons */}
          <div className="col-span-5 flex flex-col justify-start gap-3">
            {sections.map((section, idx) => {
              const IconComponent = section.Icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={section.num}
                  onClick={() => setActiveTab(idx)}
                  className={`group w-full text-left p-6 rounded-[16px] border transition-all duration-300 flex items-center justify-between cursor-pointer outline-none select-none ${
                    isActive 
                      ? 'bg-brand-secondaryBg border-brand-border border-l-[4px] border-l-brand-yellow shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-brand-secondaryBg/40 hover:border-brand-border/40'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-sans font-medium text-[13px] transition-colors duration-200 ${
                      isActive ? 'text-brand-navy font-bold' : 'text-[#888888]'
                    }`}>
                      {section.num}
                    </span>
                    <span className={`font-sans text-[16px] transition-all duration-200 ${
                      isActive ? 'text-brand-charcoal font-semibold translate-x-1' : 'text-[#555555]'
                    }`}>
                      {section.title}
                    </span>
                  </div>
                  <div className={`transition-all duration-300 ${
                    isActive 
                      ? 'text-brand-navy scale-110' 
                      : 'text-[#888888]/80 group-hover:text-brand-navy'
                  }`}>
                    <IconComponent size={18} stroke={isActive ? 2 : 1.5} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Card with Fade & Slide Animation */}
          <div className="col-span-7">
            <div className="bg-[#f3f2ee] border border-brand-border rounded-[24px] p-10 lg:p-12 h-full flex flex-col justify-between shadow-sm relative overflow-hidden">
              {/* Subtle light yellow accent glow background */}
              <div className="absolute top-0 right-0 w-[240px] h-[240px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full"
                >
                  {/* Content Area */}
                  <div>
                    {/* Large Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-[#fafaf8] border border-brand-border flex items-center justify-center text-brand-navy mb-8 shadow-sm">
                      {(() => {
                        const ActiveIcon = activeSection.Icon;
                        return <ActiveIcon size={24} stroke={1.8} />;
                      })()}
                    </div>

                    <h3 className="font-serif text-[28px] text-brand-charcoal font-normal mb-4 leading-tight">
                      {activeSection.title}
                    </h3>
                    
                    <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-xl">
                      {activeSection.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="flex flex-col gap-3.5 mt-8 pt-8 border-t border-brand-border/60">
                    {activeSection.details.map((detail, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="font-sans font-light text-[14px] text-brand-charcoal/80 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Mobile Layout (Clean Vertical Accordions) */}
        <div className="md:hidden flex flex-col gap-4 w-full">
          {sections.map((section, idx) => {
            const IconComponent = section.Icon;
            const isOpen = activeTab === idx;
            return (
              <div 
                key={section.num}
                className="bg-[#f3f2ee] border border-brand-border rounded-[16px] overflow-hidden"
              >
                {/* Header button */}
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left select-none cursor-pointer outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-sans font-semibold text-[12px] ${
                      isOpen ? 'text-brand-navy' : 'text-[#888888]'
                    }`}>
                      {section.num}
                    </span>
                    <span className={`font-sans font-semibold text-[15px] ${
                      isOpen ? 'text-brand-charcoal' : 'text-[#555555]'
                    }`}>
                      {section.title}
                    </span>
                  </div>
                  <div className={`transition-colors duration-200 ${
                    isOpen ? 'text-brand-navy' : 'text-[#888888]'
                  }`}>
                    <IconComponent size={18} stroke={1.5} />
                  </div>
                </button>

                {/* Smooth Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-1 border-t border-brand-border/60">
                        <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed mb-5">
                          {section.desc}
                        </p>
                        <div className="flex flex-col gap-2.5">
                          {section.details.map((detail, dIdx) => (
                            <div key={dIdx} className="font-sans font-light text-[13px] text-[#555555] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
