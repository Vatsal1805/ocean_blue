import { motion } from 'framer-motion';
import { IconAward, IconUsers, IconTarget } from '@tabler/icons-react';

export default function About() {
  const leftVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rightVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

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
        
        {/* Cinematic Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left max-w-3xl mb-16 md:mb-20"
        >
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ ESTABLISHED 2009 ]
          </span>
          <h1 className="font-serif text-[42px] sm:text-[54px] md:text-[68px] text-brand-charcoal font-normal leading-[1.05] tracking-tight">
            15+ Years of Trust.<br />
            <span className="text-brand-navy font-light italic">Ocean Blue.</span>
          </h1>
          <p className="font-sans font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed mt-6">
            An elite academic sanctuary in Ahmedabad, dedicated to tuition excellence, entrance prep, and global language mastery.
          </p>
        </motion.div>

        {/* Story split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start border-t border-brand-border pt-16">
          
          {/* Left Column (The Philosophy) */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h2 className="font-serif text-[28px] md:text-[36px] text-brand-charcoal font-normal leading-tight mb-6">
              Our Philosophy
            </h2>
            <div className="flex flex-col gap-6 font-sans font-light text-[16px] text-[#555555] leading-relaxed">
              <p>
                Founded in Vastral, Ahmedabad in 2009, Ocean Blue Education was established with a singular mission: to provide expert, concept-first tuition and coaching. Under the direction of Mr. Dhananjay Rajput, our classes are characterized by custom printed study materials, individual student tracking, and dedicated parent-teacher meetings.
              </p>
              <p>
                Over the past 15 years, we have grown from a single room to two fully equipped branches in Vastral and Nikol. We guide CBSE, ICSE, and GSEB board standards (Class 4 to 12) to conceptual dominance, while preparing older science batches for competitive engineering (JEE PCM) and medical (NEET PCB) entrances.
              </p>
              <p>
                We believe in small batch structures (12 to 15 students maximum) to keep learning intimate, ensuring teachers have the room to target each student's doubt individually.
              </p>
            </div>

            {/* Values cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full">
              <div className="flex flex-col items-start p-5 bg-brand-secondaryBg border border-brand-border rounded-xl">
                <IconAward className="text-brand-navy" size={24} />
                <h4 className="font-sans font-semibold text-[15px] text-brand-charcoal mt-3">Expert Faculty</h4>
                <p className="font-sans font-light text-[12px] text-brand-grey mt-1">Specialized mentors for board and entrance tracks.</p>
              </div>
              <div className="flex flex-col items-start p-5 bg-brand-secondaryBg border border-brand-border rounded-xl">
                <IconUsers className="text-brand-navy" size={24} />
                <h4 className="font-sans font-semibold text-[15px] text-brand-charcoal mt-3">Small Batches</h4>
                <p className="font-sans font-light text-[12px] text-brand-grey mt-1">Strict 12–15 student limit for personal attention.</p>
              </div>
              <div className="flex flex-col items-start p-5 bg-brand-secondaryBg border border-brand-border rounded-xl">
                <IconTarget className="text-brand-navy" size={24} />
                <h4 className="font-sans font-semibold text-[15px] text-brand-charcoal mt-3">Result Driven</h4>
                <p className="font-sans font-light text-[12px] text-brand-grey mt-1">Decade of top-tier scorers across boards.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Director's Message) */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full"
          >
            <div className="bg-brand-navy text-white rounded-[24px] p-8 md:p-10 relative overflow-hidden shadow-xl border border-white/[0.08] text-left">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,205,0,0.1)_0%,transparent_50%)]" />
              
              <span className="font-sans font-medium text-[10px] text-brand-yellow tracking-[0.15em] uppercase mb-6 block">
                [ DIRECTOR'S MESSAGE ]
              </span>

              <p className="font-serif text-[20px] md:text-[22px] font-normal leading-relaxed text-white/90 italic">
                "We don't teach to complete a syllabus; we teach to build understanding. When a student truly grasps the underlying logic of physics or grammar, grades take care of themselves."
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/[0.06]">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-navy flex items-center justify-center font-serif text-[18px] font-bold select-none">
                  DR
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[16px] text-white">Mr. Dhananjay Rajput</h4>
                  <p className="font-sans font-light text-[12px] text-white/50">Founder & Director · Est. 2009</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
