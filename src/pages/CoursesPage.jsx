import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconSchool, 
  IconTarget, 
  IconGlobe, 
  IconClock, 
  IconUsers, 
  IconTrendingUp, 
  IconBook, 
  IconAward, 
  IconClipboardCheck, 
  IconFileText, 
  IconCheck, 
  IconPhone, 
  IconArrowRight, 
  IconChevronRight 
} from '@tabler/icons-react';

export default function CoursesPage() {
  const { hash } = useLocation();
  const [activeStream, setActiveStream] = useState('science');
  const [activeCareerStream, setActiveCareerStream] = useState('pcm');
  const [activeScienceGroup, setActiveScienceGroup] = useState('pcm');

  // Dynamic SEO Meta Tags injection
  useEffect(() => {
    document.title = "Our Programs — Ocean Blue Education & Spoken English | 4th–12th, JEE, NEET, Spoken English, Ahmedabad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore all coaching programs at Ocean Blue Education & Spoken English — 4th to 12th tuition (CBSE/ICSE/GSEB), JEE, NEET, Foundation, Spoken English, Basic English, and Reading & Writing. Vastral & Nikol, Ahmedabad.");
    }
  }, []);

  // Smooth scroll to element hash ID on URL load / hash updates
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  // Framer Motion Animation Variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const heroItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardStaggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const timelineItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-[#fafaf8] min-h-screen relative overflow-hidden select-none">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative min-h-[50vh] bg-[#fafaf8] flex flex-col items-center justify-center pt-28 pb-18 px-5 md:px-16 overflow-hidden border-b border-[#dddbd4]">
        
        {/* Moleskine dot grid pattern: charcoal dots at 3% opacity, 1.5px diameter, spaced 28px */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        
        {/* High-visibility education doodle background sketch layer with multiply blend mode */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-multiply"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        {/* Soft radial spotlight gradient centered behind the text */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(250, 250, 248, 0.7) 0%, rgba(250, 250, 248, 0) 75%)',
          }}
        />

        {/* Soft blurred glowing ambient blobs */}
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none z-0" />
        <div className="absolute -left-20 -top-20 w-[350px] h-[350px] rounded-full bg-[#1a237e]/5 blur-3xl pointer-events-none z-0" />

        {/* Top Left Breadcrumb */}
        <div className="absolute top-24 left-6 md:left-16 z-20">
          <nav className="font-sans font-light text-[12px] text-[#888888] flex items-center gap-1.5 select-none">
            <Link to="/" className="hover:text-brand-navy transition-colors duration-200">Home</Link>
            <span>/</span>
            <span className="text-brand-charcoal">Courses</span>
          </nav>
        </div>

        {/* Center Content */}
        <motion.div 
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center select-none"
        >
          <motion.span 
            variants={heroItemVariants}
            className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block"
          >
            [ OUR PROGRAMS ]
          </motion.span>
          
          <motion.h1 
            variants={heroItemVariants}
            className="font-serif text-[30px] sm:text-[38px] md:text-[64px] text-brand-charcoal font-normal leading-tight tracking-tight max-w-2xl animate-fade-in"
          >
            Every Standard. <span className="text-brand-navy font-light italic relative inline-block">Every Stream.</span>
          </motion.h1>
          
          <motion.p 
            variants={heroItemVariants}
            className="font-sans font-light text-[15px] sm:text-[18px] text-brand-grey leading-relaxed mt-5 max-w-xl text-center"
          >
            From 4th standard foundations to entrance exam excellence — all under one roof.
          </motion.p>

          {/* Program Anchor Pills Row (Horizontal Scroll on Mobile) */}
          <motion.div 
            variants={heroItemVariants}
            className="w-full max-w-4xl mt-9 select-none z-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5 px-2 select-none">
              <a href="#primary" className="inline-block bg-white/80 backdrop-blur-md border border-[#dddbd4] hover:border-brand-yellow hover:bg-[#f3f2ee] hover:text-brand-navy rounded-full px-5 py-2 font-sans font-light text-[13px] text-[#555555] hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
                4th – 10th
              </a>
              <a href="#senior" className="inline-block bg-white/80 backdrop-blur-md border border-[#dddbd4] hover:border-brand-yellow hover:bg-[#f3f2ee] hover:text-brand-navy rounded-full px-5 py-2 font-sans font-light text-[13px] text-[#555555] hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
                11th – 12th
              </a>
              <a href="#jee-neet" className="inline-block bg-white/80 backdrop-blur-md border border-[#dddbd4] hover:border-brand-yellow hover:bg-[#f3f2ee] hover:text-brand-navy rounded-full px-5 py-2 font-sans font-light text-[13px] text-[#555555] hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
                JEE & NEET
              </a>
              <a href="#foundation" className="inline-block bg-white/80 backdrop-blur-md border border-[#dddbd4] hover:border-brand-yellow hover:bg-[#f3f2ee] hover:text-brand-navy rounded-full px-5 py-2 font-sans font-light text-[13px] text-[#555555] hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
                Foundation
              </a>
              <a href="#language" className="inline-block bg-white/80 backdrop-blur-md border border-[#dddbd4] hover:border-brand-yellow hover:bg-[#f3f2ee] hover:text-brand-navy rounded-full px-5 py-2 font-sans font-light text-[13px] text-[#555555] hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
                Spoken English
              </a>
              <a href="#language" className="inline-block bg-white/80 backdrop-blur-md border border-[#dddbd4] hover:border-brand-yellow hover:bg-[#f3f2ee] hover:text-brand-navy rounded-full px-5 py-2 font-sans font-light text-[13px] text-[#555555] hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
                Basic English & Reading
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — PRIMARY & SECONDARY (id="primary") */}
      <section id="primary" className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Headline block */}
          <div className="flex flex-col items-start text-left mb-12">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ 4TH TO 10TH STANDARD ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              Primary & Secondary.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] max-w-2xl mt-4 leading-relaxed">
              Strong conceptual foundations across CBSE, ICSE, and GSEB boards — with our unique 3-hour structured session that ensures every student leaves the class with clarity.
            </p>
          </div>

          {/* Staggered Grid Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[60px] items-start"
          >
            
            {/* Left Column (55%) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="lg:col-span-7 flex flex-col gap-8 text-left"
            >
              {/* Board Selection */}
              <div>
                <div className="flex flex-wrap gap-2.5">
                  {["CBSE", "ICSE", "GSEB"].map((board) => (
                    <span key={board} className="bg-[#f3f2ee] border border-[#dddbd4] rounded-full px-4 py-1.5 font-sans font-semibold text-[13px] text-[#1a237e] select-none">
                      {board}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subjects Covered Card */}
              <div className="bg-white border border-[#dddbd4] rounded-[20px] p-6 md:p-8 text-left shadow-sm mt-4">
                <span className="font-sans font-semibold text-[11px] text-[#999999] tracking-[0.12em] block uppercase mb-6 select-none">
                  SUBJECTS COVERED
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Classes 4th - 6th Group */}
                  <div className="flex flex-col gap-4">
                    <div className="border-l-3 border-[#f5c800] pl-3 select-none">
                      <span className="font-sans font-semibold text-[14px] text-[#1a1a1a] block">Classes 4th – 6th</span>
                      <span className="font-sans font-light text-[11px] text-[#888888] block mt-0.5">Foundational Primary Stream</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Maths", "EVS", "English", "Hindi", "Sanskrit", "Gujarati"].map((sub) => (
                        <span 
                          key={sub} 
                          className="bg-[#fafaf8] border border-[#dddbd4] rounded-full px-3 py-1.5 font-sans font-medium text-[12.5px] text-[#555555] shadow-2xs hover:border-[#1a237e] hover:text-[#1a237e] hover:scale-[1.02] cursor-default transition-all duration-200 select-none"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Classes 7th - 10th Group */}
                  <div className="flex flex-col gap-4">
                    <div className="border-l-3 border-[#1a237e] pl-3 select-none">
                      <span className="font-sans font-semibold text-[14px] text-[#1a1a1a] block">Classes 7th – 10th</span>
                      <span className="font-sans font-light text-[11px] text-[#888888] block mt-0.5">Secondary School Board Prep</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Maths", "Science", "Social Studies", "English", "Hindi", "Gujarati", "Sanskrit", "English Grammar"].map((sub) => (
                        <span 
                          key={sub} 
                          className="bg-[#fafaf8] border border-[#dddbd4] rounded-full px-3 py-1.5 font-sans font-medium text-[12.5px] text-[#555555] shadow-2xs hover:border-[#1a237e] hover:text-[#1a237e] hover:scale-[1.02] cursor-default transition-all duration-200 select-none"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* 3-Hour Session Structure Card */}
              <div className="bg-[#1a237e] border border-white/5 rounded-[20px] p-7 md:p-9 text-left relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-yellow/5 blur-2xl pointer-events-none" />
                <span className="font-sans font-semibold text-[11px] text-[#f5c800] tracking-[0.12em] uppercase block mb-6 select-none">
                  OUR 3-HOUR SESSION STRUCTURE
                </span>
                <div className="flex flex-col w-full">
                  
                  {/* Row 1 */}
                  <div className="flex gap-4 pb-4.5 border-b border-white/10 mb-4.5 items-start">
                    <IconClock size={18} className="text-[#f5c800] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans font-semibold text-[14px] text-white block mb-0.5">Hour 1 & 2</span>
                      <p className="font-sans font-light text-[13.5px] text-white/70 leading-normal">Concept teaching with examples and practice</p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex gap-4 pb-4.5 border-b border-white/10 mb-4.5 items-start">
                    <IconClock size={18} className="text-[#f5c800] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans font-semibold text-[14px] text-white block mb-0.5">Hour 3</span>
                      <p className="font-sans font-light text-[13.5px] text-white/70 leading-normal">In-class test on today's topic + revision</p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex gap-4 items-start">
                    <IconClock size={18} className="text-[#f5c800] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans font-semibold text-[14px] text-white block mb-0.5">Anytime</span>
                      <p className="font-sans font-light text-[13.5px] text-white/70 leading-normal">Doubt solving — no time limit, approach teachers freely</p>
                    </div>
                  </div>

                </div>
                <div className="font-sans font-light text-[11.5px] text-white/40 block mt-6 pt-3.5 border-t border-white/10 select-none">
                  * Applies to all 4th–12th standard batches
                </div>
              </div>

              {/* Timings Card */}
              <div className="bg-[#f3f2ee] border border-[#dddbd4] rounded-[20px] p-6 md:p-8 text-left shadow-sm">
                <span className="font-sans font-semibold text-[11px] text-[#999999] tracking-[0.12em] uppercase block mb-4 select-none">
                  BATCH TIMINGS
                </span>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pb-3.5 border-b border-[#dddbd4]/60">
                    <span className="font-sans font-semibold text-[14px] text-[#1a1a1a]">GSEB Batches</span>
                    <span className="font-sans font-light text-[13.5px] text-[#555555]">2:00 PM – 5:00 PM (Mon–Sat)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-sans font-semibold text-[14px] text-[#1a1a1a]">CBSE / ICSE Batches</span>
                    <span className="font-sans font-light text-[13.5px] text-[#555555]">5:00 PM – 8:00 PM (Mon–Sat)</span>
                  </div>
                </div>

                {/* Sub breakdown details row */}
                <div className="mt-5 pt-4.5 border-t border-[#dddbd4]/60 flex flex-wrap gap-x-5 gap-y-2 font-sans font-light text-[12px] text-[#888888] select-none">
                  <div><strong className="font-medium text-[#555555]">2:00–3:00</strong> Lecture 1</div>
                  <div><strong className="font-medium text-[#555555]">3:00–4:00</strong> Lecture 2</div>
                  <div><strong className="font-medium text-[#555555]">4:00–5:00</strong> Exam & Rev</div>
                  <div><strong className="font-medium text-[#555555]">5:00–7:00</strong> Doubt/Extra</div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-2 text-left">
                <Link 
                  to="/#contact" 
                  className="inline-flex items-center justify-center bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[14px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300"
                >
                  Enquire About This Program &rarr;
                </Link>
              </div>

            </motion.div>

            {/* Right Column (45%) — 60-Day Board Prep */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
              }}
              className="lg:col-span-5 w-full"
            >
              <div className="bg-[#fafaf8] border-[2.5px] border-[#f5c800] rounded-[24px] p-7 md:p-9 text-left relative z-10 shadow-sm overflow-hidden">
                {/* Header badge */}
                <span className="bg-[#f5c800] text-[#1a1a1a] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 inline-block select-none mb-6">
                  60-DAY BOARD PREP
                </span>
                
                <h3 className="font-serif text-[28px] text-[#1a1a1a] font-normal leading-tight mb-2">
                  Board Exam Intensive
                </h3>
                
                <p className="font-sans font-light text-[14px] text-[#888888] leading-relaxed mb-8">
                  Our 60-day crash program for 10th and 12th board students — three papers per day, doubt solving, and full syllabus revision before exams.
                </p>

                {/* Timeline */}
                <div className="relative pl-9 flex flex-col gap-8">
                  
                  {/* Drawing connecting line */}
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute left-[13px] top-[26px] bottom-[26px] w-[2px] bg-[#dddbd4] origin-top z-0"
                  />

                  {/* Item 1 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      1
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Paper 1</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">7:00 AM – 9:30 AM &middot; First subject paper</p>
                    </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      2
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Paper 2</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">10:00 AM – 12:30 PM &middot; Second subject paper</p>
                    </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      3
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Paper 3</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">2:00 PM – 4:30 PM &middot; Third subject paper</p>
                    </div>
                  </motion.div>

                  {/* Item 4 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      4
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Doubt Solving</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">5:00 PM – 8:00 PM &middot; Full doubt clearing session</p>
                    </div>
                  </motion.div>

                </div>

                <div className="font-sans font-light text-[12px] text-[#999999] mt-8 select-none text-left">
                  * Available for 10th & 12th Board Students
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 3 — SENIOR SECONDARY (id="senior") */}
      <section id="senior" className="relative w-full bg-[#f3f2ee] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-start text-left mb-12">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ 11TH & 12TH STANDARD ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              Senior Secondary.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] max-w-2xl mt-4 leading-relaxed">
              Science and Commerce stream coaching aligned with CBSE and GSEB syllabi. Board-exam focused, result-driven, with 60-day intensive board preparation.
            </p>
          </div>

          {/* Stream Switching Tabs */}
          <div className="flex items-center gap-3 mb-10 select-none">
            <button
              onClick={() => setActiveStream('science')}
              className={`rounded-full px-6 py-2.5 font-sans font-medium text-[14px] transition-all duration-300 outline-none cursor-pointer ${
                activeStream === 'science' 
                  ? 'bg-[#1a237e] text-white shadow-sm'
                  : 'bg-white border border-[#dddbd4] text-[#888888] hover:text-[#1a1a1a]'
              }`}
            >
              Science
            </button>
            <button
              onClick={() => setActiveStream('commerce')}
              className={`rounded-full px-6 py-2.5 font-sans font-medium text-[14px] transition-all duration-300 outline-none cursor-pointer ${
                activeStream === 'commerce' 
                  ? 'bg-[#1a237e] text-white shadow-sm'
                  : 'bg-white border border-[#dddbd4] text-[#888888] hover:text-[#1a1a1a]'
              }`}
            >
              Commerce
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[60px] items-start">
            
            {/* Left Column (55%) — Subjects Swapper */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              
              {/* Dynamic Stream Subjects list with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStream}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full text-left"
                >
                  <span className="font-sans font-semibold text-[13.5px] uppercase tracking-wider text-[#1a1a1a] block mb-6 select-none">
                    Subjects Covered ({activeStream === 'science' ? 'Science' : 'Commerce'}):
                  </span>
                  
                  {activeStream === 'science' ? (
                    <div>
                      {/* Sub-group switcher */}
                      <div className="flex gap-2.5 mb-6 select-none">
                        {[
                          { id: 'pcm', label: 'PCM (Group A)' },
                          { id: 'pcb', label: 'PCB (Group B)' }
                        ].map((group) => (
                          <button
                            key={group.id}
                            onClick={() => setActiveScienceGroup(group.id)}
                            className={`rounded-full px-5 py-2 font-sans font-semibold text-[12.5px] transition-all duration-300 outline-none cursor-pointer ${
                              activeScienceGroup === group.id
                                ? 'bg-[#1a237e] text-white shadow-sm'
                                : 'bg-white border border-[#dddbd4] text-[#888888] hover:text-[#1a1a1a] hover:border-[#1a237e]'
                            }`}
                          >
                            {group.label}
                          </button>
                        ))}
                      </div>

                      {/* Animated Science Group Subjects */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeScienceGroup}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {(activeScienceGroup === 'pcm' ? [
                            { title: "Physics & Mechanics", desc: "CBSE & GSEB" },
                            { title: "Chemistry", desc: "CBSE & GSEB" },
                            { title: "Higher Mathematics", desc: "CBSE & GSEB" },
                            { title: "English", desc: "CBSE & GSEB" }
                          ] : [
                            { title: "Physics", desc: "CBSE & GSEB" },
                            { title: "Chemistry", desc: "CBSE & GSEB" },
                            { title: "Biology (Zoology & Botany)", desc: "CBSE & GSEB" },
                            { title: "English", desc: "CBSE & GSEB" }
                          ]).map((sub) => (
                            <div 
                              key={sub.title} 
                              className="bg-white border border-[#dddbd4] rounded-[16px] p-5 flex items-center gap-4 hover:border-[#1a237e] hover:shadow-2xs transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] flex-shrink-0">
                                <IconBook size={20} stroke={1.5} />
                              </div>
                              <div>
                                <span className="font-sans font-semibold text-[15px] text-[#1a1a1a] block">{sub.title}</span>
                                <span className="font-sans font-light text-[12px] text-[#888888]">{sub.desc}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div>
                      {/* Commerce subjects */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { title: "Accounts", desc: "CBSE & GSEB" },
                          { title: "Statistics", desc: "CBSE & GSEB" },
                          { title: "Economics", desc: "CBSE & GSEB" },
                          { title: "Business Administration", desc: "CBSE & GSEB" },
                          { title: "English", desc: "CBSE & GSEB" }
                        ].map((sub, idx) => (
                          <div 
                            key={sub.title} 
                            className={`bg-white border border-[#dddbd4] rounded-[16px] p-5 flex items-center gap-4 hover:border-[#1a237e] hover:shadow-2xs transition-all duration-300 ${
                              idx === 4 ? 'sm:col-span-2' : ''
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] flex-shrink-0">
                              <IconBook size={20} stroke={1.5} />
                            </div>
                            <div>
                              <span className="font-sans font-semibold text-[15px] text-[#1a1a1a] block">{sub.title}</span>
                              <span className="font-sans font-light text-[12px] text-[#888888]">{sub.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="font-sans font-light text-[12.5px] text-[#999999] mt-5 select-none text-left">
                        * Pathway includes CA Foundation, BBA, and B.Com preparation.
                      </p>
                    </div>
                  )}

                  {/* Dynamic Stream Board labels */}
                  <div className="flex gap-2 mt-6">
                    {["CBSE", "GSEB"].map((board) => (
                      <span key={board} className="bg-white border border-[#dddbd4] rounded-full px-3.5 py-1 font-sans font-medium text-[11px] text-[#1a237e] select-none">
                        {board}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Batch details card */}
              <div className="bg-white border border-[#dddbd4] rounded-[20px] p-6 md:p-8 text-left shadow-sm mt-4">
                <span className="font-sans font-semibold text-[11px] text-[#999999] tracking-[0.12em] uppercase block mb-4 select-none">
                  BATCH TIMINGS
                </span>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                  <span className="font-sans font-semibold text-[14px] text-[#1a1a1a]">Science & Commerce Cohorts</span>
                  <span className="font-sans font-light text-[14px] text-[#555555]">5:00 PM – 8:00 PM (Mon–Sat)</span>
                </div>
              </div>

              {/* Enquiry Button */}
              <div className="mt-2 text-left">
                <Link 
                  to="/#contact" 
                  className="inline-flex items-center justify-center bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[14px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300"
                >
                  Enquire About This Program &rarr;
                </Link>
              </div>

            </div>

            {/* Right Column (45%) — Same 60-Day card labeled for 12th Board */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#fafaf8] border-[2.5px] border-[#f5c800] rounded-[24px] p-7 md:p-9 text-left relative z-10 shadow-sm overflow-hidden">
                {/* Header badge */}
                <span className="bg-[#f5c800] text-[#1a1a1a] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 inline-block select-none mb-6">
                  60-DAY BOARD PREP
                </span>
                
                <h3 className="font-serif text-[28px] text-[#1a1a1a] font-normal leading-tight mb-2">
                  Board Exam Intensive
                </h3>
                
                <p className="font-sans font-light text-[14px] text-[#888888] leading-relaxed mb-8">
                  Our 60-day crash program for 10th and 12th board students — three papers per day, doubt solving, and full syllabus revision before exams.
                </p>

                {/* Timeline */}
                <div className="relative pl-9 flex flex-col gap-8">
                  
                  {/* Drawing connecting line */}
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute left-[13px] top-[26px] bottom-[26px] w-[2px] bg-[#dddbd4] origin-top z-0"
                  />

                  {/* Item 1 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      1
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Paper 1</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">7:00 AM – 9:30 AM &middot; First subject paper</p>
                    </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      2
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Paper 2</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">10:00 AM – 12:30 PM &middot; Second subject paper</p>
                    </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      3
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Paper 3</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">2:00 PM – 4:30 PM &middot; Third subject paper</p>
                    </div>
                  </motion.div>

                  {/* Item 4 */}
                  <motion.div 
                    variants={timelineItemVariants}
                    className="relative z-10 flex gap-4 text-left items-start"
                  >
                    <div className="absolute -left-[35px] w-7 h-7 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-sans font-medium text-[11px] shadow-sm select-none">
                      4
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a] block mb-0.5">Doubt Solving</span>
                      <p className="font-sans font-light text-[13px] text-[#555555]">5:00 PM – 8:00 PM &middot; Full doubt clearing session</p>
                    </div>
                  </motion.div>

                </div>

                <div className="font-sans font-light text-[12px] text-[#999999] mt-8 select-none text-left">
                  * For 12th Board Students
                </div>
              </div>
            </div>

          </div>

          {/* Career Opportunities Interactive Section */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#fafaf8] border border-[#dddbd4] rounded-[24px] p-6 md:p-12 mt-16 md:mt-24 text-left relative overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="max-w-3xl">
              <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] block uppercase">
                [ CAREER ROADMAPS AFTER 10TH ]
              </span>
              <h3 className="font-serif text-[32px] md:text-[42px] text-[#1a1a1a] font-normal leading-tight mt-3">
                What Can You Become?
              </h3>
              <p className="font-sans font-light text-[15px] text-[#888888] mt-3 leading-relaxed">
                Choosing the right stream after 10th is one of the most critical decisions parents and students make. Compare preparation focus, target entrance exams, and potential career paths below.
              </p>
            </div>

            {/* Stream Selector Interactive Tabs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10 border-b border-[#dddbd4] pb-6">
              {[
                { id: 'pcm', label: 'PCM (Group A)', desc: 'Engineering & Technology', dot: 'bg-blue-600' },
                { id: 'pcb', label: 'PCB (Group B)', desc: 'Medical & Life Sciences', dot: 'bg-emerald-600' },
                { id: 'commerce', label: 'Commerce', desc: 'Business & Finance', dot: 'bg-amber-500' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCareerStream(tab.id)}
                  className={`flex-1 rounded-[16px] p-5 border text-left transition-all duration-300 outline-none cursor-pointer ${
                    activeCareerStream === tab.id
                      ? 'bg-[#1a237e] border-[#1a237e] text-white shadow-md'
                      : 'bg-white border-[#dddbd4] text-[#555555] hover:border-[#1a237e] hover:text-[#1a1a1a]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${tab.dot}`} />
                    <span className="font-sans font-semibold text-[16px] tracking-wide block">
                      {tab.label}
                    </span>
                  </div>
                  <span className={`font-sans font-light text-[13px] block mt-1 ${
                    activeCareerStream === tab.id ? 'text-white/80' : 'text-[#888888]'
                  }`}>
                    {tab.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Dynamic Stream Content with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCareerStream}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 items-stretch"
              >
                {/* Column 1: Preparation Focus & Target Exams (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Preparation Box */}
                  <div className="bg-[#f3f2ee] rounded-[16px] p-6 border border-[#dddbd4]">
                    <span className="font-sans font-bold text-[11px] text-[#1a237e] tracking-wider uppercase block mb-3 select-none">
                      1. Preparation & Focus (11th & 12th)
                    </span>
                    <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed">
                      {activeCareerStream === 'pcm' && "Focus on Core Mathematics, Physics, and Chemistry. Develop analytical thinking, problem-solving speed, and logical reasoning for engineering entrance exams."}
                      {activeCareerStream === 'pcb' && "Focus on Biology (Botany & Zoology), Chemistry, and Physics. Build strong conceptual recall, diagrammatic precision, and scientific vocabulary."}
                      {activeCareerStream === 'commerce' && "Focus on Accountancy, Economics, Business Studies, and Statistics. Develop understanding of corporate finances, market dynamics, and auditing concepts."}
                    </p>
                  </div>

                  {/* Target Exams Box */}
                  <div className="bg-[#f3f2ee]/50 rounded-[16px] p-6 border border-[#dddbd4]">
                    <span className="font-sans font-bold text-[11px] text-[#1a237e] tracking-wider uppercase block mb-4 select-none">
                      2. Target Entrance Exams
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeCareerStream === 'pcm' && ["JEE Mains & Advanced", "GUJCET", "NATA (Architecture)", "NDA (Defense)", "BITSAT"].map((exam) => (
                        <span key={exam} className="bg-white border border-[#dddbd4] rounded-full px-3.5 py-1.5 font-sans font-medium text-[12px] text-[#1a1a1a] shadow-xs">
                          {exam}
                        </span>
                      ))}
                      {activeCareerStream === 'pcb' && ["NEET-UG", "GUJCET (Pharmacy)", "AIIMS B.Sc Nursing", "ICAR Agriculture", "IISER Aptitude Test"].map((exam) => (
                        <span key={exam} className="bg-white border border-[#dddbd4] rounded-full px-3.5 py-1.5 font-sans font-medium text-[12px] text-[#1a1a1a] shadow-xs">
                          {exam}
                        </span>
                      ))}
                      {activeCareerStream === 'commerce' && ["CA Foundation", "CSEET (Company Sec.)", "CMA Foundation", "CUET (Top Commerce Colleges)", "IPMAT (IIM Integrated MBA)"].map((exam) => (
                        <span key={exam} className="bg-white border border-[#dddbd4] rounded-full px-3.5 py-1.5 font-sans font-medium text-[12px] text-[#1a1a1a] shadow-xs">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Career Destinations - Core vs. New-Age (8 Cols) */}
                <div className="lg:col-span-8 bg-[#f3f2ee]/30 border border-[#dddbd4] rounded-[20px] p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-sans font-bold text-[11px] text-[#1a237e] tracking-wider uppercase block mb-6 select-none">
                      3. Career Outcomes & Destinations
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Sub-column 1: Core / Traditional Careers */}
                      <div>
                        <div className="flex items-center gap-2 border-b border-[#dddbd4] pb-3 mb-4">
                          <IconAward size={18} className="text-[#1a237e]" />
                          <span className="font-sans font-semibold text-[15px] text-[#1a1a1a]">Core & Traditional Careers</span>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {activeCareerStream === 'pcm' && [
                            "Mechanical / Electrical / Civil Engineer",
                            "Software Developer & IT Consultant",
                            "Research Scientist (ISRO, DRDO)",
                            "Professional Architect (B.Arch)",
                            "Commercial Pilot / Aviation Officer"
                          ].map((career) => (
                            <li key={career} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1a237e] mt-2 flex-shrink-0" />
                              <span className="font-sans font-light text-[14px] text-[#555555]">{career}</span>
                            </li>
                          ))}
                          {activeCareerStream === 'pcb' && [
                            "General Physician & Surgeon (MBBS)",
                            "Dental Surgeon & Specialist (BDS)",
                            "Pharmacist & Drug Inspector",
                            "Registered Nurse & Healthcare Expert",
                            "Veterinary Doctor & Animal Surgeon"
                          ].map((career) => (
                            <li key={career} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1a237e] mt-2 flex-shrink-0" />
                              <span className="font-sans font-light text-[14px] text-[#555555]">{career}</span>
                            </li>
                          ))}
                          {activeCareerStream === 'commerce' && [
                            "Chartered Accountant (CA)",
                            "Company Secretary (CS)",
                            "Investment Banker & Asset Manager",
                            "Statutory Auditor & Finance Controller",
                            "Tax Consultant & Corporate Legal Advisor"
                          ].map((career) => (
                            <li key={career} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1a237e] mt-2 flex-shrink-0" />
                              <span className="font-sans font-light text-[14px] text-[#555555]">{career}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sub-column 2: New-Age / Emerging Careers */}
                      <div>
                        <div className="flex items-center gap-2 border-b border-[#dddbd4] pb-3 mb-4">
                          <IconGlobe size={18} className="text-[#f5c800]" />
                          <span className="font-sans font-semibold text-[15px] text-[#1a1a1a]">New-Age & Emerging Careers</span>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {activeCareerStream === 'pcm' && [
                            "AI & Machine Learning Specialist",
                            "Cybersecurity & Forensic Analyst",
                            "Data Scientist & Analytics Expert",
                            "Robotics & Automation Engineer",
                            "Full-Stack Web3 & Blockchain Engineer"
                          ].map((career) => (
                            <li key={career} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c800] mt-2 flex-shrink-0" />
                              <span className="font-sans font-light text-[14px] text-[#555555]">{career}</span>
                            </li>
                          ))}
                          {activeCareerStream === 'pcb' && [
                            "Biotechnology Researcher",
                            "Geneticist & Genomics Analyst",
                            "Bioinformatics Data Scientist",
                            "Clinical Trial Manager & Virologist",
                            "Agricultural & Food Technologist"
                          ].map((career) => (
                            <li key={career} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c800] mt-2 flex-shrink-0" />
                              <span className="font-sans font-light text-[14px] text-[#555555]">{career}</span>
                            </li>
                          ))}
                          {activeCareerStream === 'commerce' && [
                            "FinTech Product Analyst",
                            "Data Analyst & Business Intelligence Lead",
                            "Corporate Law & Mergers Consultant",
                            "Digital Brand Manager & Strategist",
                            "Behavioral Economist & Market Researcher"
                          ].map((career) => (
                            <li key={career} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c800] mt-2 flex-shrink-0" />
                              <span className="font-sans font-light text-[14px] text-[#555555]">{career}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Flagship Counselling CTA Banner */}
            <div className="bg-[#1a237e] rounded-[20px] p-6 md:p-10 mt-12 text-left text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              {/* Background decorative touch */}
              <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[#f5c800]/5 rounded-l-full pointer-events-none" />

              <div className="max-w-2xl relative z-10">
                <h4 className="font-sans font-semibold text-[20px] md:text-[24px] text-[#f5c800]">
                  Unsure which stream fits your child's aptitude?
                </h4>
                <p className="font-sans font-light text-[14px] text-white/80 mt-2.5 leading-relaxed">
                  Choosing between PCM, PCB, and Commerce shouldn't be based on guesswork. Our senior academic counsellors guide hundreds of parents and students in Ahmedabad through professional stream selection and planning every year.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10 flex-shrink-0">
                <a
                  href="https://wa.me/919033552048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[14.5px] rounded-full px-7 py-4 shadow-sm transition-all duration-300 gap-2 text-center"
                >
                  <IconPhone size={17} />
                  Chat with Counsellor
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-sans font-medium text-[14.5px] rounded-full px-7 py-4 transition-all duration-300 text-center"
                >
                  Book Free Visit &rarr;
                </Link>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 4 — JEE & NEET (id="jee-neet") */}
      <section id="jee-neet" className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-start text-left mb-16">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ ENTRANCE EXAM PREP ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              JEE & NEET.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] max-w-2xl mt-4 leading-relaxed">
              Rigorous coaching for IIT-JEE and NEET. Concept clarity, OMR practice, mock tests, and expert science mentors — designed for students serious about engineering and medical careers.
            </p>
          </div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: JEE Prep */}
            <div className="bg-[#f3f2ee]/50 border border-[#dddbd4] rounded-[24px] p-8 md:p-10 text-left shadow-sm flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#dddbd4] pb-5 select-none">
                <span className="bg-[#1a237e] text-white font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5">
                  JEE MAINS & ADVANCED
                </span>
                <span className="font-sans font-light text-[13px] text-[#888888]">Engineering Core</span>
              </div>

              {/* Subjects tags */}
              <div>
                <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-3.5 select-none">
                  Core Subjects:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {["Physics", "Chemistry", "Mathematics"].map((sub) => (
                    <div key={sub} className="bg-white border-l-[3px] border-l-[#1a237e] border border-[#dddbd4] border-l-3 rounded-lg p-3 text-center">
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a]">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration and logistics */}
              <div className="bg-white border border-[#dddbd4] rounded-[14px] p-5">
                <span className="font-sans font-semibold text-[13px] text-[#1a1a1a] flex items-center gap-2 mb-1">
                  <IconClock size={16} className="text-[#1a237e]" />
                  <span>Program Structure</span>
                </span>
                <span className="font-sans font-light text-[13px] text-[#555555]">
                  12 Month Comprehensive Prep batched from <strong>5:30 AM – 8:00 AM</strong> or <strong>7:00 PM – 9:30 PM</strong>.
                </span>
              </div>

              {/* Features list */}
              <div>
                <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-3 select-none">
                  Key Deliverables:
                </span>
                <div className="flex flex-col gap-2.5">
                  {["OMR Practice Sheet Sets", "Weekly National-Level Mock Tests", "Chapter-wise Evaluation Loops", "Daily Revision & Doubt-clearance clinics", "In-house Printed DPP Question Bank Archives"].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-[14px] font-sans font-light text-[#555555]">
                      <IconCheck size={16} className="text-[#f5c800] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: NEET Prep */}
            <div className="bg-[#f3f2ee]/50 border border-[#dddbd4] rounded-[24px] p-8 md:p-10 text-left shadow-sm flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#dddbd4] pb-5 select-none">
                <span className="bg-[#1a237e] text-white font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5">
                  NEET UG
                </span>
                <span className="font-sans font-light text-[13px] text-[#888888]">Medical Core</span>
              </div>

              {/* Subjects tags */}
              <div>
                <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-3.5 select-none">
                  Core Subjects:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {["Physics", "Chemistry", "Biology"].map((sub) => (
                    <div key={sub} className="bg-white border-l-[3px] border-l-[#1a237e] border border-[#dddbd4] border-l-3 rounded-lg p-3 text-center">
                      <span className="font-sans font-semibold text-[13.5px] text-[#1a1a1a]">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration and logistics */}
              <div className="bg-white border border-[#dddbd4] rounded-[14px] p-5">
                <span className="font-sans font-semibold text-[13px] text-[#1a1a1a] flex items-center gap-2 mb-1">
                  <IconClock size={16} className="text-[#1a237e]" />
                  <span>Program Structure</span>
                </span>
                <span className="font-sans font-light text-[13px] text-[#555555]">
                  12 Month Intensive Medical Prep batched from <strong>5:30 AM – 8:00 AM</strong> or <strong>7:00 PM – 9:30 PM</strong>.
                </span>
              </div>

              {/* Features list */}
              <div>
                <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-3 select-none">
                  Key Deliverables:
                </span>
                <div className="flex flex-col gap-2.5">
                  {["OMR Practice Sheets", "Weekly Target NEET Mock Tests", "Special Biology Diagram Mastery Sessions", "Pure NCERT Line-by-line review", "Immediate Error & doubt correction hours"].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-[14px] font-sans font-light text-[#555555]">
                      <IconCheck size={16} className="text-[#f5c800] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Full-width bottom highlight strip */}
          <div className="mt-12 w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[16px] p-7 md:p-9 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
            <span className="font-sans font-light text-[15px] sm:text-[17px] text-[#555555] text-center md:text-left leading-relaxed">
              ⭐ <strong>10,000+ Students</strong> have trusted Ocean Blue Education & Spoken English for academic and entrance prep success since 2009.
            </span>
            <Link 
              to="/#contact"
              className="bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[14px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300 flex-shrink-0 whitespace-nowrap cursor-pointer"
            >
              Book Free Demo Class
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 5 — FOUNDATION COURSES (id="foundation") */}
      <section id="foundation" className="relative w-full bg-[#f3f2ee] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-start text-left mb-16">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ FOUNDATION PROGRAMS ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              Foundation Courses.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] max-w-2xl mt-4 leading-relaxed">
              Competitive and scholarship examinations that fall between 4th to 10th standard — outside board exams. Building early academic strength for future entrance success.
            </p>
          </div>

          {/* Three Cards Grid */}
          <motion.div 
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch"
          >
            
            {/* Card 1 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[4px] border-t-[#f5c800] rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-[24px] text-[#1a1a1a] font-normal mb-3">
                  Junior Foundation
                </h3>
                <span className="bg-[#f3f2ee] rounded-md px-3 py-1 font-sans text-[11.5px] text-[#1a237e] inline-block font-semibold mb-5">
                  Class 4–6 Batch
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed mb-6">
                  Building strong bases in Maths, Science, and English for young learners. Focuses on deep conceptual clarity and early exam exposure.
                </p>
              </div>
              <div className="pt-4 border-t border-[#dddbd4]/60 flex justify-between items-center select-none">
                <span className="font-sans font-light text-[12px] text-[#888888]">Duration: Academic Year</span>
                <Link to="/#contact" className="font-sans font-semibold text-[13.5px] text-[#1a237e] hover:underline flex items-center gap-0.5">
                  Enquire <IconChevronRight size={14} className="mt-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[4px] border-t-[#f5c800] rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-[24px] text-[#1a1a1a] font-normal mb-3">
                  Middle Foundation
                </h3>
                <span className="bg-[#f3f2ee] rounded-md px-3 py-1 font-sans text-[11.5px] text-[#1a237e] inline-block font-semibold mb-5">
                  Class 7–8 Batch
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed mb-6">
                  Strengthening core subjects before entering crucial board years. Introduction to complex problem-solving formulas and competitive mental logic models.
                </p>
              </div>
              <div className="pt-4 border-t border-[#dddbd4]/60 flex justify-between items-center select-none">
                <span className="font-sans font-light text-[12px] text-[#888888]">Duration: Academic Year</span>
                <Link to="/#contact" className="font-sans font-semibold text-[13.5px] text-[#1a237e] hover:underline flex items-center gap-0.5">
                  Enquire <IconChevronRight size={14} className="mt-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[4px] border-t-[#f5c800] rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-[24px] text-[#1a1a1a] font-normal mb-3">
                  Pre-Board Foundation
                </h3>
                <span className="bg-[#f3f2ee] rounded-md px-3 py-1 font-sans text-[11.5px] text-[#1a237e] inline-block font-semibold mb-5">
                  Class 9–10 Spec
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed mb-6">
                  Intensive preparation for students before crucial board levels. NTSE, scholarship exams, and early engineering/medical basic curriculum blueprints.
                </p>
              </div>
              <div className="pt-4 border-t border-[#dddbd4]/60 flex justify-between items-center select-none">
                <span className="font-sans font-light text-[12px] text-[#888888]">Duration: Academic Year</span>
                <Link to="/#contact" className="font-sans font-semibold text-[13.5px] text-[#1a237e] hover:underline flex items-center gap-0.5">
                  Enquire <IconChevronRight size={14} className="mt-0.5" />
                </Link>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 6 — LANGUAGE PROGRAMS (id="language") */}
      <section id="language" className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-start text-left mb-16">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ LANGUAGE & COMMUNICATION ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              Spoken English & More.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] max-w-2xl mt-4 leading-relaxed">
              From complete beginners to working professionals — our language programs build real communication skills, not just textbook English.
            </p>
          </div>

          {/* Three horizontal cards stacked */}
          <div className="flex flex-col gap-10 w-full text-left">
            
            {/* Card 1: Spoken English */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch">
              {/* Left Column (40%) */}
              <div className="md:w-[40%] bg-[#1a237e] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden flex-shrink-0">
                <div className="absolute font-serif text-[110px] text-white/5 select-none pointer-events-none -right-4 -bottom-6 font-bold">
                  SE
                </div>
                <h3 className="font-serif text-[32px] text-white font-normal mb-2 leading-tight">
                  Spoken English
                </h3>
                <span className="font-sans font-light text-[13.5px] text-white/70 block mb-5">
                  2-Hour Intensive Batches
                </span>
                <span className="bg-white text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 select-none">
                  ALL LEVELS WELCOME
                </span>
              </div>

              {/* Right Column (60%) */}
              <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-4 select-none">
                    What You'll Learn:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    {[
                      "Knowledge A to Z — Fluency base",
                      "Complete Grammar foundation modules",
                      "Vocabulary & lexical expansion",
                      "Audio Visual listening clinics",
                      "Stage & presentation confidence",
                      "Personalized feedback cycles",
                      "Practical roleplays & daily conversation",
                      "Lifetime support access services"
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-[14px] font-sans font-light text-[#555555]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c800] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#dddbd4]/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="font-sans font-light text-[12.5px] text-[#888888] max-w-sm leading-relaxed select-none">
                    * Ideal for school & college students, working professionals, and homemakers looking for fluency.
                  </span>
                  <Link 
                    to="/#contact"
                    className="bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[13.5px] rounded-full px-6 py-2.5 shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Enquire Spoken English
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Basic English */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch">
              {/* Left Column (40%) */}
              <div className="md:w-[40%] bg-[#f3f2ee] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden flex-shrink-0">
                <div className="absolute font-serif text-[110px] text-[#1a1a1a]/5 select-none pointer-events-none -right-4 -bottom-6 font-bold">
                  BE
                </div>
                <h3 className="font-serif text-[32px] text-[#1a237e] font-normal mb-2 leading-tight">
                  Basic English
                </h3>
                <span className="font-sans font-light text-[13.5px] text-[#888888] block mb-5">
                  Flexible Course Duration
                </span>
                <span className="bg-[#f5c800] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 select-none">
                  FOR BEGINNERS
                </span>
              </div>

              {/* Right Column (60%) */}
              <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-4 select-none">
                    What You'll Learn:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    {[
                      "Custom printed beginner modules",
                      "Grammar from the absolute ground-up",
                      "Alphabet & primary vocabulary lists",
                      "Interactive sentence structuring",
                      "Double/Triple revision cycles",
                      "Simplified stress-free lectures",
                      "One-on-one translation tracking",
                      "Confidence-building conversation drills"
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-[14px] font-sans font-light text-[#555555]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c800] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#dddbd4]/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="font-sans font-light text-[12.5px] text-[#888888] max-w-sm leading-relaxed select-none">
                    * Specially targeted for young school pupils or adults needing a fresh starting point in English basics.
                  </span>
                  <Link 
                    to="/#contact"
                    className="bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[13.5px] rounded-full px-6 py-2.5 shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Enquire Basic English
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Reading & Writing */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch">
              {/* Left Column (40%) */}
              <div className="md:w-[40%] bg-[#1a237e] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden flex-shrink-0">
                <div className="absolute font-serif text-[110px] text-white/5 select-none pointer-events-none -right-4 -bottom-6 font-bold">
                  RW
                </div>
                <h3 className="font-serif text-[32px] text-white font-normal mb-2 leading-tight">
                  Reading & Writing
                </h3>
                <span className="font-sans font-light text-[13.5px] text-white/70 block mb-5">
                  3 Months or Less Duration
                </span>
                <span className="bg-white text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 select-none">
                  TRILINGUAL SCOPE
                </span>
              </div>

              {/* Right Column (60%) */}
              <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#1a1a1a] block mb-4 select-none">
                    What You'll Learn:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    {[
                      "English, Hindi, and Gujarati guidance",
                      "Exclusive Mon–Fri study sheets",
                      "Phonetics & correct pronunciation lists",
                      "Comprehension & rapid speed drills",
                      "Creative essay & letter drafting",
                      "Spelling error remediation drills",
                      "Individual handwriting & structural checkups",
                      "Structured vocabulary exercises"
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-[14px] font-sans font-light text-[#555555]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c800] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#dddbd4]/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="font-sans font-light text-[12.5px] text-[#888888] max-w-sm leading-relaxed select-none">
                    * Trilingual focus allows children and professionals to pick and improve their native and secondary language syntax.
                  </span>
                  <Link 
                    to="/#contact"
                    className="bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[13.5px] rounded-full px-6 py-2.5 shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Enquire Reading & Writing
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Full-width bottom helpline strip */}
          <div className="mt-12 w-full bg-[#1a237e] border border-white/5 rounded-[16px] p-8 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-md relative overflow-hidden select-none">
            <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-white/[0.02] pointer-events-none" />
            
            <div className="text-center lg:text-left">
              <h4 className="font-serif text-[22px] sm:text-[25px] text-white font-normal mb-1">
                Not sure which language program fits you?
              </h4>
              <p className="font-sans font-light text-[13.5px] text-white/60">
                Contact our counselors directly for a free spoken and writing level evaluation.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 z-10 select-none">
              <a 
                href="https://wa.me/919033552048" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#1a237e] hover:bg-[#f5c800] hover:text-[#1a1a1a] font-sans font-semibold text-[13.5px] rounded-full px-6 py-3 shadow-sm transition-all duration-300 cursor-pointer"
              >
                WhatsApp Us
              </a>
              <a 
                href="tel:+919909041161"
                className="bg-transparent border border-white/40 text-white hover:bg-white/10 font-sans font-medium text-[13.5px] rounded-full px-6 py-3 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
              >
                <IconPhone size={15} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — EXCLUSIVE STUDY MATERIAL */}
      <section className="relative w-full bg-[#f3f2ee] py-20 md:py-[100px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16 select-none">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ OUR MATERIAL ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
              Exclusive Study Material.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] max-w-xl mt-4 leading-relaxed">
              Every enrolled student receives Ocean Blue Education & Spoken English's specially designed modules, notes, worksheets, and practice papers — built from 15 years of teaching experience.
            </p>
          </div>

          {/* 2x2 Grid */}
          <motion.div 
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-stretch"
          >
            {/* Card 1 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[3.5px] border-t-[#f5c800] rounded-[18px] p-8 shadow-sm flex flex-col gap-4.5"
            >
              <div className="w-11 h-11 rounded-lg bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] flex-shrink-0">
                <IconBook size={22} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-[21px] text-[#1a1a1a] font-normal mb-2">Custom Modules & Notes</h4>
                <p className="font-sans font-light text-[13.5px] text-[#555555] leading-relaxed">
                  Written and printed by our faculty. Not borrowed from publishers. Designed specifically for our concepts-first curriculum.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[3.5px] border-t-[#f5c800] rounded-[18px] p-8 shadow-sm flex flex-col gap-4.5"
            >
              <div className="w-11 h-11 rounded-lg bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] flex-shrink-0">
                <IconClipboardCheck size={22} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-[21px] text-[#1a1a1a] font-normal mb-2">Practice Worksheets</h4>
                <p className="font-sans font-light text-[13.5px] text-[#555555] leading-relaxed">
                  Chapter-wise worksheets for every single topic. Reinforces physical classroom learning with structured homework tracking.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[3.5px] border-t-[#f5c800] rounded-[18px] p-8 shadow-sm flex flex-col gap-4.5"
            >
              <div className="w-11 h-11 rounded-lg bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] flex-shrink-0">
                <IconFileText size={22} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-[21px] text-[#1a1a1a] font-normal mb-2">Practice Paper Sets</h4>
                <p className="font-sans font-light text-[13.5px] text-[#555555] leading-relaxed">
                  Paper 1, Paper 2, Paper 3 — exact board-pattern mock papers printed in booklet sets for systematic exam preparation.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[3.5px] border-t-[#f5c800] rounded-[18px] p-8 shadow-sm flex flex-col gap-4.5"
            >
              <div className="w-11 h-11 rounded-lg bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] flex-shrink-0">
                <IconAward size={22} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-[21px] text-[#1a1a1a] font-normal mb-2">15 Years of Refinement</h4>
                <p className="font-sans font-light text-[13.5px] text-[#555555] leading-relaxed">
                  Our study materials are constantly updated every academic year based on syllabus edits and board feedback.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 8 — COURSES CTA STRIP */}
      <section className="relative w-full bg-[#fafaf8] py-20 px-5 md:px-16 overflow-hidden border-t border-[#dddbd4]">
        {/* Moleskine dot grid pattern: charcoal dots at 3% opacity */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* High-visibility education doodle background sketch layer with multiply blend mode */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-multiply"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center select-none">
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block select-none">
            [ PERSONALIZED GUIDANCE ]
          </span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[34px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight max-w-2xl"
          >
            Not sure which program is right for you?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-[15px] sm:text-[17px] text-[#555555] max-w-xl mt-5 leading-relaxed text-center"
          >
            Talk to our counselors. We will help you find the right academic batch, the right timing, and the right track for your future milestones.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center select-none"
          >
            {/* CTA 1 */}
            <Link 
              to="/#contact"
              className="w-full sm:w-auto text-center bg-[#fecd00] hover:bg-[#e0b400] text-[#201D72] font-sans font-semibold text-[15px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              Book Free Demo Class
            </Link>
            
            {/* CTA 2 */}
            <a 
              href="https://wa.me/919033552048"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center bg-transparent border-[1.5px] border-[#201D72] text-[#201D72] hover:bg-[#201D72]/5 font-sans font-medium text-[15px] rounded-full px-8 py-3.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              WhatsApp Us Now
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
