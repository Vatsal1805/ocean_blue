import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconGlobe, 
  IconCertificate, 
  IconPlane, 
  IconHeadphones, 
  IconBook2, 
  IconPencil, 
  IconMicrophone, 
  IconInfoCircle, 
  IconDownload, 
  IconClock, 
  IconPhone, 
  IconCheck, 
  IconChevronRight 
} from '@tabler/icons-react';

export default function IELTS() {
  const [submitted, setSubmitted] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'IELTS Academic',
    englishLevel: 'Intermediate',
    targetBand: '7.0',
    timing: 'Morning (7AM–9AM)',
    message: ''
  });

  // Dynamic SEO Meta Tags
  useEffect(() => {
    document.title = "IELTS · PTE · Study Abroad Visa — Ocean Blue Education & Spoken English Ahmedabad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Ocean Blue Education & Spoken English is an IDP and Pearson Authorised Partner in Ahmedabad. Expert IELTS, PTE preparation, and complete Visa assistance. Book your free assessment today.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        program: 'IELTS Academic',
        englishLevel: 'Intermediate',
        targetBand: '7.0',
        timing: 'Morning (7AM–9AM)',
        message: ''
      });
    }, 4000);
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const timelineItemVariants = {
    hidden: { x: -25, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-[#fafaf8] min-h-screen relative overflow-hidden select-none">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] bg-[#fafaf8] flex flex-col items-center justify-center pt-28 pb-16 px-5 md:px-16 overflow-hidden border-b border-[#dddbd4]">
        
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
            <span className="text-brand-charcoal">IELTS & PTE</span>
          </nav>
        </div>

        {/* Center Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center select-none"
        >
          <motion.span 
            variants={itemVariants}
            className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block"
          >
            [ IELTS · PTE · VISA ]
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[38px] sm:text-[64px] text-brand-charcoal font-normal leading-tight tracking-tight max-w-3xl"
          >
            Your Global Future <span className="text-brand-navy font-light italic relative inline-block">Starts Here.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-sans font-light text-[15px] sm:text-[18px] text-brand-grey leading-relaxed mt-5 max-w-xl text-center"
          >
            Expert IELTS and PTE preparation with complete Visa guidance. Helping students reach global universities since 2009.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center select-none z-10"
          >
            <a 
              href="/brochure.pdf" 
              download
              className="w-full sm:w-auto text-center bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[15px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300 cursor-pointer"
            >
              Download Brochure
            </a>
            <a 
              href="#assessment-form"
              className="w-full sm:w-auto text-center bg-transparent border-[1.5px] border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e]/5 font-sans font-medium text-[15px] rounded-full px-8 py-3.5 transition-all duration-300 cursor-pointer"
            >
              Book Free Assessment
            </a>
          </motion.div>

          {/* Authorised Partner badge area */}
          <motion.span 
            variants={itemVariants}
            className="font-sans font-medium text-[10.5px] text-[#999999] tracking-[0.15em] uppercase block mt-12 mb-3 select-none"
          >
            Authorised Partner
          </motion.span>
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 z-10"
          >
            <div className="bg-white border border-[#dddbd4] rounded-lg px-6 py-2.5 h-11 flex items-center justify-center shadow-sm select-none">
              <span className="font-sans font-bold text-[16px] text-[#1a237e]">IDP</span>
            </div>
            <div className="bg-white border border-[#dddbd4] rounded-lg px-6 py-2.5 h-11 flex items-center justify-center shadow-sm select-none">
              <span className="font-sans font-bold text-[16px] text-[#1a237e]">Pearson</span>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION 2 — WHAT WE OFFER */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[100px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-start text-left mb-14">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ OUR PROGRAMS ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              IELTS. PTE. Visa.
            </h2>
          </div>

          {/* Three Large Cards */}
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
                <div className="w-12 h-12 rounded-xl bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] mb-6 flex-shrink-0">
                  <IconGlobe size={24} stroke={1.5} />
                </div>
                <h3 className="font-serif text-[24px] text-[#1a1a1a] font-normal mb-3">
                  IELTS Preparation
                </h3>
                <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mb-6">
                  Academic and General Training IELTS preparation. All four modules — Listening, Reading, Writing, and Speaking — covered comprehensively with daily practice.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#dddbd4]/60 select-none">
                {["Academic", "General Training", "Mock Tests", "Band Guarantee"].map((pill) => (
                  <span key={pill} className="bg-[#f3f2ee] rounded-full px-2.5 py-1 font-sans text-[11px] font-medium text-[#555555]">
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[4px] border-t-[#1a237e] rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] mb-6 flex-shrink-0">
                  <IconCertificate size={24} stroke={1.5} />
                </div>
                <h3 className="font-serif text-[24px] text-[#1a1a1a] font-normal mb-3">
                  PTE Academic & Core
                </h3>
                <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mb-6">
                  PTE Academic for universities worldwide and PTE Core for Canada PR and immigration. Complete module coverage using actual computer simulation patterns.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#dddbd4]/60 select-none">
                {["PTE Academic", "PTE Core", "Speaking Practice", "Writing Tasks"].map((pill) => (
                  <span key={pill} className="bg-[#f3f2ee] rounded-full px-2.5 py-1 font-sans text-[11px] font-medium text-[#555555]">
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={cardItemVariants}
              className="bg-[#fafaf8] border border-[#dddbd4] border-t-[4px] border-t-[#f5c800] rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f3f2ee] flex items-center justify-center text-[#1a237e] mb-6 flex-shrink-0">
                  <IconPlane size={24} stroke={1.5} />
                </div>
                <h3 className="font-serif text-[24px] text-[#1a1a1a] font-normal mb-3">
                  Study Abroad & Visa
                </h3>
                <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mb-6">
                  End-to-end visa guidance from IELTS preparation to final visa approval. Step-by-step application support for Canada, Australia, UK, and more.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#dddbd4]/60 select-none">
                {["Canada", "Australia", "UK", "Offer Letter", "GIC Guidance"].map((pill) => (
                  <span key={pill} className="bg-[#f3f2ee] rounded-full px-2.5 py-1 font-sans text-[11px] font-medium text-[#555555]">
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 3 — IELTS MODULES (interactive swapper) */}
      <section className="relative w-full bg-[#f3f2ee] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden select-none">
        {/* High-visibility education doodle background sketch layer */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-start text-left mb-16 select-none">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ IELTS TEST MODULES ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              What We Cover.
            </h2>
          </div>

          {/* Desktop Layout (Split-Screen Swapper) */}
          <div className="hidden md:grid grid-cols-12 gap-12 items-stretch min-h-[440px]">
            
            {/* Left Column: Navigation Buttons */}
            <div className="col-span-5 flex flex-col justify-start gap-3">
              {[
                { num: "01", title: "Listening", duration: "40 Minutes", Icon: IconHeadphones },
                { num: "02", title: "Reading", duration: "50 Minutes", Icon: IconBook2 },
                { num: "03", title: "Writing", duration: "60 Minutes", Icon: IconPencil },
                { num: "04", title: "Speaking", duration: "11–14 Minutes", Icon: IconMicrophone }
              ].map((mod, idx) => {
                const IconComponent = mod.Icon;
                const isActive = activeModule === idx;
                return (
                  <button
                    key={mod.num}
                    onClick={() => setActiveModule(idx)}
                    className={`group w-full text-left p-6 rounded-[16px] border transition-all duration-300 flex items-center justify-between cursor-pointer outline-none select-none ${
                      isActive 
                        ? 'bg-white border-[#dddbd4] border-l-[4px] border-l-brand-yellow shadow-sm'
                        : 'bg-transparent border-transparent hover:bg-white/40 hover:border-[#dddbd4]/40'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <span className={`font-sans font-medium text-[13px] transition-colors duration-200 ${
                        isActive ? 'text-brand-navy font-bold' : 'text-[#888888]'
                      }`}>
                        {mod.num}
                      </span>
                      <div>
                        <span className={`font-sans text-[16px] block transition-all duration-200 ${
                          isActive ? 'text-brand-charcoal font-semibold translate-x-1' : 'text-[#555555]'
                        }`}>
                          {mod.title}
                        </span>
                        <span className="font-sans font-light text-[12px] text-[#888888] block">
                          {mod.duration}
                        </span>
                      </div>
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

            {/* Right Column: Detail Content Card */}
            <div className="col-span-7">
              <div className="bg-[#fafaf8] border border-brand-border rounded-[24px] p-10 lg:p-12 h-full flex flex-col justify-between shadow-sm relative overflow-hidden text-left">
                {/* Subtle yellow ambient blur glow */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {activeModule === 0 && (
                    <motion.div
                      key={0}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-brand-navy mb-8 shadow-sm">
                          <IconHeadphones size={24} stroke={1.8} />
                        </div>
                        <h3 className="font-serif text-[28px] text-brand-charcoal font-normal mb-4">
                          Listening Module
                        </h3>
                        <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-xl">
                          30 minutes of listening test followed by 10 minutes to transfer answers to the answer sheet. 4 sections, 40 questions total. Assesses key comprehension, details tracking, and note-taking speed.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-brand-border/60">
                        <div className="font-sans font-light text-[14px] text-brand-charcoal/80 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Duration:</strong> 40 minutes total (30 listening + 10 transfer time)</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-brand-charcoal/80 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Sections:</strong> 4 recordings of native speakers with increasing difficulty</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-brand-charcoal/80 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Questions:</strong> 40 questions (10 per section)</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-brand-charcoal/80 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Question Types:</strong> Fill in the Blanks, Label a Diagram, MCQs, Statement Completion</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeModule === 1 && (
                    <motion.div
                      key={1}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-brand-navy mb-8 shadow-sm">
                          <IconBook2 size={24} stroke={1.8} />
                        </div>
                        <h3 className="font-serif text-[28px] text-brand-charcoal font-normal mb-4">
                          Reading Module
                        </h3>
                        <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-xl">
                          40 questions across multiple reading passages. Academic test has 3 long passages, General Training has 5 shorter passages. Assesses comprehension, inference, scanning, and vocabulary.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-brand-border/60">
                        <div className="font-sans font-light text-[14px] text-brand-charcoal/80 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Duration:</strong> 50 minutes (strictly timed, no extra transfer time)</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-[#555555] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Academic Format:</strong> 3 long passages from books, journals, and reports</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-[#555555] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>General Training:</strong> 5 shorter passages from advertisements, guidelines, and handbooks</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-[#555555] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Question Types:</strong> Fill in Blanks, MCQs, True/False/Not Given, Heading Matching</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeModule === 2 && (
                    <motion.div
                      key={2}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-brand-navy mb-8 shadow-sm">
                          <IconPencil size={24} stroke={1.8} />
                        </div>
                        <h3 className="font-serif text-[28px] text-brand-charcoal font-normal mb-4">
                          Writing Module
                        </h3>
                        <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-xl">
                          Two writing tasks. Academic Task 1 requires describing a graph, diagram, or map. General Training Task 1 is a letter. Task 2 is a formal essay for both streams.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-brand-border/60">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="font-sans font-semibold text-[12px] text-brand-navy uppercase tracking-wider block mb-1">Academic</span>
                            <span className="font-sans font-light text-[13px] text-[#555555] block">Task 1: Graph (150-170w)</span>
                            <span className="font-sans font-light text-[13px] text-[#555555] block">Task 2: Essay (250-275w)</span>
                          </div>
                          <div>
                            <span className="font-sans font-semibold text-[12px] text-brand-navy uppercase tracking-wider block mb-1">General Training</span>
                            <span className="font-sans font-light text-[13px] text-[#555555] block">Task 1: Letter (150-170w)</span>
                            <span className="font-sans font-light text-[13px] text-[#555555] block">Task 2: Essay (250-275w)</span>
                          </div>
                        </div>
                        <div className="font-sans font-light text-[12px] text-brand-grey pt-3 border-t border-brand-border/60">
                          💡 <strong>Brochure Pro-Tip:</strong> Write at least the minimum word count &middot; Plan your time (20m Task 1 / 40m Task 2) &middot; Check spelling/grammar.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeModule === 3 && (
                    <motion.div
                      key={3}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-brand-navy mb-8 shadow-sm">
                          <IconMicrophone size={24} stroke={1.8} />
                        </div>
                        <h3 className="font-serif text-[28px] text-brand-charcoal font-normal mb-4">
                          Speaking Module
                        </h3>
                        <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-xl">
                          A face-to-face interview with an IELTS examiner. Three structured sections that assess fluency, coherence, vocabulary, grammar, and pronunciation.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-brand-border/60">
                        <div className="font-sans font-light text-[14px] text-brand-charcoal/80 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Section 1:</strong> Introduction & general questions (4–5 minutes)</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-[#555555] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Section 2:</strong> Cue Card topic talk (1 min prep, 2 mins speaking)</span>
                        </div>
                        <div className="font-sans font-light text-[14px] text-[#555555] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                          <span><strong>Section 3:</strong> Abstract cross-questioning (4–5 minutes)</span>
                        </div>
                        <div className="font-sans font-light text-[12px] text-brand-grey pt-3 border-t border-brand-border/60">
                          💡 <strong>Practice tip:</strong> Speak on diverse topics daily. Fluency and natural delivery matter as much as vocabulary complexity.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Mobile Layout (Clean Vertical Accordions) */}
          <div className="md:hidden flex flex-col gap-4 w-full text-left">
            {[
              { num: "01", title: "Listening", duration: "40 Minutes", Icon: IconHeadphones, desc: "30 minutes of listening test followed by 10 minutes to transfer answers. 4 sections, 40 questions.", details: ["Duration: 40 minutes total", "Sections: 4 sections", "Questions: 40 questions", "Question Types: Fill in the Blanks, MCQs, Diagram Labeling"] },
              { num: "02", title: "Reading", duration: "50 Minutes", Icon: IconBook2, desc: "40 questions across multiple passages. Academic has 3 long passages, General has 5 shorter passages.", details: ["Duration: 50 minutes", "Academic: 3 passages", "General: 5 passages", "Question Types: MCQs, True/False, Heading Matching"] },
              { num: "03", title: "Writing", duration: "60 Minutes", Icon: IconPencil, desc: "Two writing tasks. Task 1 is report/letter. Task 2 is essay writing.", details: ["Academic: Task 1 (150w) & Task 2 (250w)", "General: Task 1 (150w) & Task 2 (250w)", "Tip: Write at least the minimum word count"] },
              { num: "04", title: "Speaking", duration: "11–14 Minutes", Icon: IconMicrophone, desc: "Face-to-face interview with an examiner. 3 sections.", details: ["Section 1: Intro (4-5 mins)", "Section 2: Cue Card (3 mins)", "Section 3: Discussion (4-5 mins)"] }
            ].map((section, idx) => {
              const IconComponent = section.Icon;
              const isOpen = activeModule === idx;
              return (
                <div 
                  key={section.num}
                  className="bg-white border border-[#dddbd4] rounded-[16px] overflow-hidden"
                >
                  {/* Header button */}
                  <button
                    onClick={() => setActiveModule(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-5 text-left outline-none cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-sans font-semibold text-[12px] ${
                        isOpen ? 'text-brand-navy' : 'text-[#888888]'
                      }`}>
                        {section.num}
                      </span>
                      <div>
                        <span className={`font-sans font-semibold text-[15px] block ${
                          isOpen ? 'text-brand-charcoal' : 'text-[#555555]'
                        }`}>
                          {section.title}
                        </span>
                        <span className="font-sans font-light text-[11px] text-[#888888] block">
                          {section.duration}
                        </span>
                      </div>
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
                        <div className="px-5 pb-6 pt-1 border-t border-[#dddbd4]/60">
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

      {/* SECTION 4 — REQUIRED BAND SCORES */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[100px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16 select-none">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ BAND SCORE GUIDE ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
              What Band Score Do You Need?
            </h2>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-stretch mb-10">
            
            {/* Card 1 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 shadow-sm flex flex-col items-center justify-between">
              <div>
                <span className="font-serif text-[48px] sm:text-[52px] text-[#1a237e] font-normal leading-none block mb-4 select-none">
                  6.0 – 6.5
                </span>
                <span className="bg-[#f5c800] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 inline-block select-none mb-6">
                  UNDERGRADUATE PROGRAMS
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed">
                  Most undergraduate university degree courses in the UK, Canada, Australia, and New Zealand.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 shadow-sm flex flex-col items-center justify-between">
              <div>
                <span className="font-serif text-[48px] sm:text-[52px] text-[#1a237e] font-normal leading-none block mb-4 select-none">
                  6.5 – 7.0
                </span>
                <span className="bg-[#f3f2ee] border border-[#dddbd4] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 inline-block select-none mb-6">
                  POSTGRADUATE / MASTERS
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed">
                  Postgraduate and Master's programs at mid-tier and top-ranked universities globally.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 shadow-sm flex flex-col items-center justify-between">
              <div>
                <span className="font-serif text-[48px] sm:text-[52px] text-[#1a237e] font-normal leading-none block mb-4 select-none">
                  7.0+
                </span>
                <span className="bg-[#f5c800] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-4 py-1.5 inline-block select-none mb-6">
                  TOP UNIVERSITIES & MBA
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed">
                  Top-ranking Ivy league universities, competitive MBA courses, and technical research placements.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Info Strip */}
          <div className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[14px] p-5 flex items-center justify-center gap-3">
            <IconInfoCircle size={18} className="text-[#f5c800] flex-shrink-0" />
            <span className="font-sans font-light text-[14px] sm:text-[15px] text-[#555555] text-left">
              Higher band scores significantly increase admission opportunities and strengthen your study abroad visa approval profile.
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 5 — VISA PROCESS */}
      <section className="relative w-full bg-[#1a237e] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden select-none">
        {/* Glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
            [ STEP BY STEP ]
          </span>
          <h2 className="font-serif text-[34px] sm:text-[52px] text-white font-normal leading-tight">
            The Complete Visa Journey.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[17px] text-white/70 mt-3 max-w-xl text-center leading-relaxed">
            From IELTS preparation to final visa approval — we guide you through every step.
          </p>

          {/* Vertical Timeline */}
          <div className="w-full max-w-[720px] mt-16 pl-8 md:pl-12 relative flex flex-col gap-10 text-left">
            
            {/* SVG Connecting line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[23px] md:left-[35px] top-[24px] bottom-[24px] w-[2px] bg-white/20 origin-top z-0"
            />

            {[
              { num: 1, title: "IELTS Preparation", desc: "Achieve your target IELTS band score with our expert coaching." },
              { num: 2, title: "Apply for Offer Letter", desc: "Apply to your preferred college or university abroad." },
              { num: 3, title: "Receive Offer Letter", desc: "Get your official Offer Letter. Typically takes 4–8 weeks." },
              { num: 4, title: "Tuition Fees & GIC", desc: "Pay first-year tuition fees and complete GIC requirements." },
              { num: 5, title: "Medical & Documentation", desc: "Complete the medical examination and prepare all required documents." },
              { num: 6, title: "Visa Submission", desc: "Submit your complete visa application with all documents." },
              { num: 7, title: "Visa Approval", desc: "Receive your visa approval and begin your global journey." }
            ].map((step, sIdx) => (
              <motion.div 
                key={step.num}
                variants={timelineItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 flex gap-5 md:gap-7 items-start"
              >
                <div className="absolute -left-[24px] md:-left-[36px] w-12 h-12 rounded-full bg-[#f5c800] text-[#1a237e] flex items-center justify-center font-sans font-bold text-[18px] shadow-sm select-none">
                  {step.num}
                </div>
                <div className="pl-12">
                  <span className="font-sans font-semibold text-[16px] text-white block mb-1">
                    {step.title}
                  </span>
                  <p className="font-sans font-light text-[14px] text-white/60 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* SECTION 6 — PTE SECTION */}
      <section className="relative w-full bg-[#f3f2ee] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-start text-left mb-12">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ PTE ACADEMIC & CORE ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[52px] text-[#1a1a1a] font-normal leading-tight">
              PTE Exam Guide.
            </h2>
          </div>

          {/* Types of PTE row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-16">
            {/* PTE 1 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[16px] p-6 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-[20px] mb-2 leading-tight text-[#1a237e]">PTE Academic</h4>
                <p className="font-sans font-light text-[13px] text-[#666666] leading-relaxed">
                  Accepted by universities and colleges worldwide. Especially in Australia, New Zealand, UK, Canada, and more.
                </p>
              </div>
              <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-brand-navy mt-4 block">
                Duration: ~2 hours
              </span>
            </div>

            {/* PTE 2 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[16px] p-6 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-[20px] mb-2 leading-tight text-[#1a237e]">PTE Core</h4>
                <p className="font-sans font-light text-[13px] text-[#666666] leading-relaxed">
                  Mainly for Canada PR, work permits, and immigration purposes. Newly approved format.
                </p>
              </div>
              <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-brand-navy mt-4 block">
                Duration: ~2 hours
              </span>
            </div>

            {/* PTE 3 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[16px] p-6 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-[20px] mb-2 leading-tight text-[#1a237e]">PTE UK Visa</h4>
                <p className="font-sans font-light text-[13px] text-[#666666] leading-relaxed">
                  Approved for UK visa and work/study immigration applications.
                </p>
              </div>
              <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-brand-navy mt-4 block">
                Duration: ~2 hours
              </span>
            </div>

            {/* PTE 4 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[16px] p-6 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-[20px] mb-2 leading-tight text-[#1a237e]">PTE UK Family</h4>
                <p className="font-sans font-light text-[13px] text-[#666666] leading-relaxed">
                  Used for specific UK family, settlement, and citizenship visa applications.
                </p>
              </div>
              <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-brand-navy mt-4 block">
                Specific Modules
              </span>
            </div>
          </div>

          {/* Three Part Format Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            
            {/* Part 1 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-sans font-semibold text-[11px] text-[#999999] tracking-wider uppercase block mb-1.5 select-none">
                  PART 1
                </span>
                <h3 className="font-serif text-[24px] text-[#1a237e] mb-1 font-normal">
                  Speaking & Writing
                </h3>
                <span className="font-sans font-light text-[12.5px] text-[#888888] block mb-6">
                  ~54 – 67 Minutes
                </span>
                
                <ul className="flex flex-col gap-3 font-sans font-light text-[13.5px] text-[#555555]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Personal Introduction</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Read Aloud</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Repeat Sentence</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Describe Image</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Retell Lecture</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Answer Short Questions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Summarize Written Text</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Write Formal Essay</li>
                </ul>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-sans font-semibold text-[11px] text-[#999999] tracking-wider uppercase block mb-1.5 select-none">
                  PART 2
                </span>
                <h3 className="font-serif text-[24px] text-[#1a237e] mb-1 font-normal">
                  Reading Section
                </h3>
                <span className="font-sans font-light text-[12.5px] text-[#888888] block mb-6">
                  ~29 – 30 Minutes
                </span>
                
                <ul className="flex flex-col gap-3 font-sans font-light text-[13.5px] text-[#555555]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> MCQ (Single Answer)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> MCQ (Multiple Answers)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Re-order Paragraphs</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Reading: Fill in the Blanks</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Reading & Writing: Fill in Blanks</li>
                </ul>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 text-[#1a1a1a] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-sans font-semibold text-[11px] text-[#999999] tracking-wider uppercase block mb-1.5 select-none">
                  PART 3
                </span>
                <h3 className="font-serif text-[24px] text-[#1a237e] mb-1 font-normal">
                  Listening Section
                </h3>
                <span className="font-sans font-light text-[12.5px] text-[#888888] block mb-6">
                  ~30 – 43 Minutes
                </span>
                
                <ul className="flex flex-col gap-3 font-sans font-light text-[13.5px] text-[#555555]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Summarize Spoken Text</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Multiple Choice Questions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Fill in the Blanks</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Highlight Correct Summary</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Select Missing Word</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Highlight Incorrect Words</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f5c800] rounded-full" /> Write from Dictation</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7 — STUDENT RESULTS */}
      <section className="relative w-full bg-[#1a237e] py-20 px-5 md:px-16 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
              [ SUCCESS STORIES ]
            </span>
            <h2 className="font-serif text-[34px] sm:text-[48px] text-white font-normal leading-tight">
              Our IELTS & PTE Achievers.
            </h2>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch mb-8">
            
            {/* Card 1 */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-[16px] p-7 md:p-8 flex flex-col justify-between gap-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#f5c800] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-3 py-1 select-none">
                    IELTS ACADEMIC
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-[#fafaf8]/10 flex items-center justify-center font-serif text-[18px] text-white font-semibold select-none">
                    TR
                  </div>
                </div>
                <h4 className="font-serif text-[32px] text-[#f5c800] font-normal leading-none select-none">
                  Band 7.5
                </h4>
                <p className="font-sans font-light text-[13.5px] text-white/60 leading-relaxed italic">
                  "Ocean Blue Education & Spoken English's speaking sessions and mock tests helped me achieve my target band in the first attempt."
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.08] select-none">
                <span className="font-sans font-semibold text-[14px] text-white block">Trupti Rathod</span>
                <span className="font-sans font-light text-[12px] text-white/40">Canada &bull; University of Toronto</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-[16px] p-7 md:p-8 flex flex-col justify-between gap-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#f5c800] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-3 py-1 select-none">
                    IELTS GENERAL
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-[#fafaf8]/10 flex items-center justify-center font-serif text-[18px] text-white font-semibold select-none">
                    NP
                  </div>
                </div>
                <h4 className="font-serif text-[32px] text-[#f5c800] font-normal leading-none select-none">
                  Band 7.0
                </h4>
                <p className="font-sans font-light text-[13.5px] text-white/60 leading-relaxed italic">
                  "The writing task coaching here is exceptional. I improved from band 5.5 to 7.0 in 3 months."
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.08] select-none">
                <span className="font-sans font-semibold text-[14px] text-white block">Niraj Patel</span>
                <span className="font-sans font-light text-[12px] text-white/40">Australia &bull; Melbourne Migration</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.08] border border-white/[0.12] rounded-[16px] p-7 md:p-8 flex flex-col justify-between gap-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#f5c800] text-[#1a237e] font-sans font-bold text-[10px] tracking-wider uppercase rounded-full px-3 py-1 select-none">
                    PTE ACADEMIC
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-[#fafaf8]/10 flex items-center justify-center font-serif text-[18px] text-white font-semibold select-none">
                    AS
                  </div>
                </div>
                <h4 className="font-serif text-[32px] text-[#f5c800] font-normal leading-none select-none">
                  79 / 90
                </h4>
                <p className="font-sans font-light text-[13.5px] text-white/60 leading-relaxed italic">
                  "PTE preparation at Ocean Blue Education & Spoken English is structured and thorough. I felt completely ready on exam day."
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.08] select-none">
                <span className="font-sans font-semibold text-[14px] text-white block">Amit Shah</span>
                <span className="font-sans font-light text-[12px] text-white/40">UK &bull; University of Manchester</span>
              </div>
            </div>

          </div>

          <div className="font-sans font-light text-[12px] text-white/30 italic text-center select-none">
            * Results shown are placeholders. Actual student results will be updated by Ocean Blue Education & Spoken English.
          </div>

        </div>
      </section>

      {/* SECTION 8 — BROCHURE DOWNLOAD STRIP */}
      <section className="relative w-full bg-[#f5c800] py-14 px-5 md:px-16 overflow-hidden text-center select-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#1a237e] font-normal leading-tight">
            Get the Complete IELTS & PTE Guide.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[16px] text-[#1a237e]/80 max-w-xl mt-3 leading-relaxed">
            Download our detailed program brochure covering all modules, timings, fees, and visa process.
          </p>
          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center justify-center bg-[#1a237e] hover:bg-[#121858] text-white font-sans font-semibold text-[15px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300 mt-8 cursor-pointer"
          >
            Download Brochure PDF &rarr;
          </a>
        </div>
      </section>

      {/* SECTION 9 — ENQUIRY FORM */}
      <section id="assessment-form" className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 overflow-hidden">
        {/* Sketch Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <div className="max-w-xl mx-auto relative z-10 text-center">
          
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block select-none">
            [ GET IN TOUCH ]
          </span>
          <h2 className="font-serif text-[32px] sm:text-[44px] text-[#1a1a1a] font-normal leading-tight mb-10">
            Book Your Free IELTS Assessment.
          </h2>

          {submitted ? (
            <div className="bg-[#f3f2ee] border border-[#dddbd4] rounded-[20px] p-10 shadow-sm flex flex-col items-center select-none">
              <div className="w-12 h-12 rounded-full bg-[#f5c800] text-[#1a237e] flex items-center justify-center mb-4 shadow-sm">
                <IconCheck size={22} stroke={2.5} />
              </div>
              <h4 className="font-serif text-[22px] text-[#1a1a1a] font-normal mb-2">Request Submitted</h4>
              <p className="font-sans font-light text-[14px] text-[#888888] leading-relaxed max-w-xs">
                Thank you! Our language counsellors will contact you within 24 hours to schedule your speaking audit and language level test.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              
              {/* Name */}
              <div className="flex flex-col gap-1">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] outline-none transition-colors duration-200"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Mobile Number"
                  className="w-full bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] outline-none transition-colors duration-200"
                />
              </div>

              {/* Program Interest Dropdown */}
              <div className="flex flex-col gap-1">
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] outline-none transition-colors duration-200 cursor-pointer"
                >
                  <option value="IELTS Academic">IELTS Academic</option>
                  <option value="IELTS General Training">IELTS General Training</option>
                  <option value="PTE Academic">PTE Academic</option>
                  <option value="PTE Core">PTE Core</option>
                  <option value="VISA Assistance">VISA Assistance</option>
                  <option value="Study Abroad Counselling">Study Abroad Counselling</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              {/* Current Level */}
              <div className="flex flex-col gap-1">
                <select
                  name="englishLevel"
                  value={formData.englishLevel}
                  onChange={handleChange}
                  className="w-full bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] outline-none transition-colors duration-200 cursor-pointer"
                >
                  <option value="Beginner">Beginner / Elementary</option>
                  <option value="Pre-Intermediate">Pre-Intermediate</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Upper-Intermediate">Upper-Intermediate</option>
                  <option value="Advanced">Advanced / Fluent</option>
                </select>
              </div>

              {/* Target Band */}
              <div className="flex flex-col gap-1">
                <select
                  name="targetBand"
                  value={formData.targetBand}
                  onChange={handleChange}
                  className="w-full bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] outline-none transition-colors duration-200 cursor-pointer"
                >
                  <option value="6.0">Target Band: 6.0</option>
                  <option value="6.5">Target Band: 6.5</option>
                  <option value="7.0">Target Band: 7.0</option>
                  <option value="7.5">Target Band: 7.5</option>
                  <option value="8.0">Target Band: 8.0</option>
                  <option value="8.5">Target Band: 8.5+</option>
                </select>
              </div>

              {/* Timing */}
              <div className="flex flex-col gap-1">
                <select
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                  className="w-full bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] outline-none transition-colors duration-200 cursor-pointer"
                >
                  <option value="Morning (7AM–9AM)">Morning (7:00 AM – 9:00 AM)</option>
                  <option value="Afternoon">Afternoon Session</option>
                  <option value="Evening (6PM–8PM)">Evening (6:00 PM – 8:00 PM)</option>
                  <option value="Weekend">Weekend Special Batch</option>
                  <option value="Flexible">Flexible Timings</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific study abroad goals or doubts?"
                  className="w-full h-24 bg-[#f3f2ee] border border-[#dddbd4] focus:border-[#1a237e] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#f5c800] hover:bg-[#e6b800] text-[#1a1a1a] font-sans font-semibold text-[15px] rounded-[10px] py-4 shadow-sm transition-all duration-300 cursor-pointer text-center outline-none select-none"
              >
                Book Free Assessment &rarr;
              </button>

            </form>
          )}

          {/* Bottom helpline text */}
          <div className="mt-8 font-sans font-light text-[14px] text-[#888888] select-none">
            Or call our helpline directly: <a href="tel:+919033552048" className="font-semibold text-[#1a237e] hover:underline">+91 90335 52048</a> &middot; <a href="tel:+918000328054" className="font-semibold text-[#1a237e] hover:underline">+91 80003 28054</a>
          </div>

        </div>
      </section>

    </div>
  );
}
