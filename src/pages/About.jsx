import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  IconTrophy, 
  IconUser, 
  IconPhone, 
  IconHeart, 
  IconHeartHandshake, 
  IconSchool 
} from '@tabler/icons-react';

export default function About() {
  
  // Dynamic SEO Meta Tags
  useEffect(() => {
    document.title = "About Us — Ocean Blue Education & Spoken English | Est. 2009 | Vastral & Nikol Ahmedabad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about Ocean Blue Education & Spoken English — established in 2009 by Mr. Dhananjay Rajput. Award-winning coaching institute in Ahmedabad with 10,000+ students guided across boards, JEE, NEET, IELTS, and language programs."
      );
    }
  }, []);

  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const teamContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const teamCardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-[#fafaf8] min-h-screen relative overflow-hidden select-none">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative min-h-[50vh] bg-[#fafaf8] flex flex-col items-center justify-center pt-28 pb-16 px-5 md:px-16 overflow-hidden border-b border-brand-border">
        
        {/* Moleskine dot grid pattern */}
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

        {/* Top Left Breadcrumb */}
        <div className="absolute top-24 left-6 md:left-16 z-20">
          <nav className="font-sans font-light text-[12px] text-[#888888] flex items-center gap-1.5 select-none">
            <Link to="/" className="hover:text-brand-navy transition-colors duration-200">Home</Link>
            <span>/</span>
            <span className="text-brand-charcoal">About Us</span>
          </nav>
        </div>

        {/* Hero Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center select-none"
        >
          <motion.span 
            variants={itemVariants}
            className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 hidden sm:block"
          >
            [ OUR STORY ]
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[38px] sm:text-[64px] text-brand-charcoal font-normal leading-tight tracking-tight max-w-3xl"
          >
            15 Years of Shaping Futures.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-sans font-light text-[15px] sm:text-[18px] text-brand-grey leading-relaxed mt-5 max-w-xl text-center"
          >
            From a single classroom in Vastral to 10,000+ students guided — this is Ocean Blue Education & Spoken English.
          </motion.p>

          {/* Quick Stats Row */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-8 font-sans font-light text-[13px] sm:text-[14px] text-[#555555] select-none z-10"
          >
            <span>Est. 2009</span>
            <span className="w-[1px] h-3.5 bg-[#dddbd4] hidden sm:inline-block" />
            <span>10,000+ Students</span>
            <span className="w-[1px] h-3.5 bg-[#dddbd4] hidden sm:inline-block" />
            <span>2 Branches</span>
            <span className="w-[1px] h-3.5 bg-[#dddbd4] hidden sm:inline-block" />
            <span>Best Institute Award</span>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — ABOUT THE INSTITUTE */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        
        {/* Moleskine dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column (55% on desktop) */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
                [ ABOUT US ]
              </span>
              <h2 className="font-serif text-[34px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight mb-6">
                Ocean Blue Education & Spoken English.
              </h2>
              
              <div className="flex flex-col gap-6 font-sans font-light text-[16px] sm:text-[17px] text-[#555555] leading-relaxed">
                <p>
                  Established in 2009, Ocean Blue Education & Spoken English has emerged as one of Ahmedabad's most trusted and result-oriented educational institutions. With a mission to provide quality education, skill development, and personality enhancement, we have successfully guided more than 10,000 students and alumni towards academic excellence and career success.
                </p>
                <p>
                  At Ocean Blue Education & Spoken English, we believe that every student is unique and deserves personalized attention. Our experienced faculty members focus on concept-based learning, regular assessments, and individual mentoring to help students achieve outstanding results.
                </p>
              </div>
            </motion.div>

            {/* Right Column (45% on desktop) */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4 w-full text-left"
            >
              {/* Card 1 */}
              <div className="bg-[#f3f2ee] border border-[#dddbd4] border-l-[3px] border-l-brand-yellow rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="font-sans font-semibold text-[11px] text-brand-navy tracking-wider uppercase block mb-2 select-none">
                  OUR VISION
                </span>
                <p className="font-sans font-light text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                  To become India's most trusted educational organization by providing innovative, affordable, and result-oriented education that transforms lives.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f3f2ee] border border-[#dddbd4] border-l-[3px] border-l-brand-yellow rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="font-sans font-semibold text-[11px] text-brand-navy tracking-wider uppercase block mb-2 select-none">
                  OUR MISSION
                </span>
                <p className="font-sans font-light text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                  To empower students with knowledge, confidence, communication skills, and values that help them excel in academics, careers, and life.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f3f2ee] border border-[#dddbd4] border-l-[3px] border-l-brand-yellow rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="font-sans font-semibold text-[11px] text-brand-navy tracking-wider uppercase block mb-3 select-none">
                  OUR MOTTO
                </span>
                <p className="font-serif text-[20px] text-brand-navy italic font-normal mb-1.5">
                  "Where Education Meets Success"
                </p>
                <p className="font-sans font-light text-[14px] text-[#888888]">
                  जहाँ शिक्षा मिलती है सफलता से
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — AWARD & RECOGNITION */}
      <section className="relative w-full bg-brand-navy py-20 px-5 md:px-16 border-b border-brand-border overflow-hidden">
        
        {/* Subtle background radial gradient for high-end warm glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,205,0,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Subtle background doodle texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] invert"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
        >
          {/* Trophy Icon */}
          <div className="text-brand-yellow mb-5">
            <IconTrophy size={48} stroke={1.5} />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-[32px] sm:text-[40px] text-white font-normal leading-tight">
            Best Education Institute in Gujarat
          </h2>

          {/* Subtext */}
          <p className="font-sans font-light text-[15px] sm:text-[17px] text-white/70 mt-4 leading-relaxed max-w-2xl text-center">
            Honored by Divya Bhaskar News & Media Group. Award presented by Shri Balvantsinh Rajput, Honorable Minister of Gujarat — recognizing Ocean Blue's outstanding contribution to education.
          </p>

          {/* Detail Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 select-none">
            <span className="bg-white/5 border border-white/10 rounded-full px-5 py-2 font-sans font-medium text-[12px] sm:text-[13px] text-brand-yellow">
              Divya Bhaskar News & Media Group
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-5 py-2 font-sans font-medium text-[12px] sm:text-[13px] text-brand-yellow">
              Presented by Honorable Minister of Gujarat
            </span>
          </div>

          {/* Award Photo Placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-[20px] w-full max-w-[400px] h-[200px] mt-10 flex flex-col items-center justify-center select-none shadow-sm">
            <span className="font-sans font-light text-[13px] text-white/40">
              Award Photo — Client to Provide
            </span>
          </div>

        </motion.div>
      </section>

      {/* SECTION 4 — FOUNDER */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        
        {/* Moleskine dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column (Photo & Basic Info - 40% width) */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 lg:col-span-5 flex flex-col items-center text-center w-full"
            >
              {/* Photo Placeholder */}
              <div className="w-56 h-56 rounded-full bg-[#f3f2ee] border border-[#dddbd4] overflow-hidden flex flex-col items-center justify-center select-none shadow-sm hover:shadow-md transition-shadow duration-300 mx-auto">
                <img 
                  src={new URL('../../Assets/our team/Founder.png', import.meta.url).href} 
                  alt="Mr. Dhananjay Rajput - Founder & Director" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Title & Name */}
              <div className="mt-6 select-none">
                <h4 className="font-sans font-semibold text-[17px] text-[#1a1a1a]">Mr. Dhananjay Rajput</h4>
                <p className="font-sans font-light text-[13.5px] text-[#888888] mt-1">Founder </p>
                <a 
                  href="tel:+918000328054" 
                  className="inline-flex items-center gap-1.5 font-sans font-light text-[13px] text-brand-navy hover:underline mt-2 cursor-pointer"
                >
                  <IconPhone size={14} className="mt-0.5" />
                  <span>+91 80003 28054</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column (Bio & Highlights - 60% width) */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="md:col-span-7 lg:col-span-7 flex flex-col items-start text-left w-full"
            >
              <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
                [ FOUNDER ]
              </span>
              <h3 className="font-serif text-[34px] sm:text-[42px] text-[#1a1a1a] font-normal leading-tight select-none">
                Mr. Dhananjay Rajput
              </h3>
              <p className="font-sans font-light text-[15px] sm:text-[16px] text-brand-grey mt-2 block select-none">
                Founder, Ocean Blue Education & Spoken English
              </p>

              {/* Biography paragraph */}
              <p className="font-sans font-light text-[16px] sm:text-[17px] text-[#555555] leading-relaxed mt-6">
                Under the leadership of Mr. Dhananjay Rajput, Ocean Blue Education & Spoken English has grown from a vision of accessible, quality education into one of Ahmedabad's most trusted coaching institutions. Since founding Ocean Blue Education & Spoken English in 2009, he has guided the institute through 15 years of consistent academic results, student success stories, and community impact.
              </p>

              {/* Founder Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 w-full select-none">
                <div className="bg-[#f3f2ee] border border-[#dddbd4] rounded-xl p-4 sm:p-5 text-center">
                  <span className="font-serif text-[24px] sm:text-[28px] text-brand-navy font-bold block leading-none mb-1.5">
                    2009
                  </span>
                  <span className="font-sans font-light text-[11.5px] sm:text-[12px] text-[#888888] leading-tight block">
                    Founded Ocean Blue Education & Spoken English
                  </span>
                </div>
                <div className="bg-[#f3f2ee] border border-[#dddbd4] rounded-xl p-4 sm:p-5 text-center">
                  <span className="font-serif text-[24px] sm:text-[28px] text-brand-navy font-bold block leading-none mb-1.5">
                    15+
                  </span>
                  <span className="font-sans font-light text-[11.5px] sm:text-[12px] text-[#888888] leading-tight block">
                    Years Leading
                  </span>
                </div>
                <div className="bg-[#f3f2ee] border border-[#dddbd4] rounded-xl p-4 sm:p-5 text-center">
                  <span className="font-serif text-[24px] sm:text-[28px] text-brand-navy font-bold block leading-none mb-1.5">
                    10,000+
                  </span>
                  <span className="font-sans font-light text-[11.5px] sm:text-[12px] text-[#888888] leading-tight block">
                    Students Guided
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — CO-FOUNDER / DIRECTOR */}
      <section className="relative w-full bg-[#f3f2ee] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column (Bio & Highlights - 60% width) */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 lg:col-span-7 flex flex-col items-start text-left w-full order-2 md:order-1"
            >
              <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
                [ DIRECTOR ]
              </span>
              <h3 className="font-serif text-[34px] sm:text-[42px] text-[#1a1a1a] font-normal leading-tight select-none">
                Mr. Niraj Rajput
              </h3>
              <p className="font-sans font-light text-[15px] sm:text-[16px] text-brand-grey mt-2 block select-none">
                Managing Director, Ocean Blue Education & Spoken English
              </p>

              {/* Biography paragraph */}
              <p className="font-sans font-light text-[16px] sm:text-[17px] text-[#555555] leading-relaxed mt-6">
                Mr. Niraj Rajput co-leads Ocean Blue Education & Spoken English alongside the founder, overseeing academic operations, student welfare, and institutional growth. His dedication to personalized student attention and quality teaching standards has been central to Ocean Blue Education & Spoken English's reputation across Vastral and Nikol.
              </p>

              {/* Co-founder Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 w-full select-none">
                <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-xl p-4 sm:p-5 text-center">
                  <span className="font-serif text-[24px] sm:text-[28px] text-brand-navy font-bold block leading-none mb-1.5">
                    Est. 2009
                  </span>
                  <span className="font-sans font-light text-[11.5px] sm:text-[12px] text-[#888888] leading-tight block">
                    Joined Directorship
                  </span>
                </div>
                <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-xl p-4 sm:p-5 text-center">
                  <span className="font-serif text-[24px] sm:text-[28px] text-brand-navy font-bold block leading-none mb-1.5">
                    2 Branches
                  </span>
                  <span className="font-sans font-light text-[11.5px] sm:text-[12px] text-[#888888] leading-tight block">
                    Academic Expansion
                  </span>
                </div>
                <div className="bg-[#fafaf8] border border-[#dddbd4] rounded-xl p-4 sm:p-5 text-center">
                  <span className="font-serif text-[24px] sm:text-[28px] text-brand-navy font-bold block leading-none mb-1.5">
                    15+ Years
                  </span>
                  <span className="font-sans font-light text-[11.5px] sm:text-[12px] text-[#888888] leading-tight block">
                    Of Trust & Results
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column (Photo & Basic Info - 40% width) */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="md:col-span-5 lg:col-span-5 flex flex-col items-center text-center w-full order-1 md:order-2"
            >
              {/* Photo Placeholder */}
              <div className="w-56 h-56 rounded-full bg-[#f3f2ee] border border-[#dddbd4] flex flex-col items-center justify-center gap-2 select-none shadow-sm hover:shadow-md transition-shadow duration-300 mx-auto">
                <IconUser size={48} className="text-[#dddbd4]" stroke={1} />
                <span className="font-sans font-light text-[12px] text-[#999999]">Director Photo</span>
              </div>

              {/* Title & Name */}
              <div className="mt-6 select-none">
                <h4 className="font-sans font-semibold text-[17px] text-[#1a1a1a]">Mr. Niraj Rajput</h4>
                <p className="font-sans font-light text-[13.5px] text-[#888888] mt-1">Managing Director</p>
                <a 
                  href="tel:+919033552048" 
                  className="inline-flex items-center gap-1.5 font-sans font-light text-[13px] text-brand-navy hover:underline mt-2 cursor-pointer"
                >
                  <IconPhone size={14} className="mt-0.5" />
                  <span>+91 90335 52048</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR TEAM */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        
        {/* Moleskine dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 select-none max-w-2xl">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
              [ OUR FACULTY ]
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
              The People Behind Your Success.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[17px] text-[#888888] leading-relaxed mt-4">
              Experienced mentors, subject specialists, and dedicated educators — all committed to one goal: your results.
            </p>
          </div>

          {/* Grid of Faculty placeholders */}
          <motion.div 
            variants={teamContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center items-stretch"
          >
            {[
              { subject: "Mathematics Specialist" },
              { subject: "Physics Specialist" },
              { subject: "Chemistry Specialist" },
              { subject: "Biology Specialist" },
              { subject: "IELTS & Language Mentor" },
              { subject: "Spoken English Coach" }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={teamCardVariants}
                className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 flex flex-col items-center justify-between shadow-sm hover:border-brand-navy hover:scale-[1.01] hover:shadow-md transition-all duration-300 select-none group"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Photo circle */}
                  <div className="w-20 h-20 rounded-full bg-[#f3f2ee] border-2 border-[#dddbd4] group-hover:border-brand-yellow flex items-center justify-center mb-5 select-none transition-colors duration-300">
                    <IconUser size={28} className="text-[#dddbd4]" stroke={1.5} />
                  </div>
                  
                  {/* Name */}
                  <h4 className="font-sans font-semibold text-[16px] text-[#1a1a1a]">
                    Faculty Member
                  </h4>
                  {/* Subject */}
                  <span className="font-sans font-light text-[13.5px] text-[#888888] block mt-1">
                    {member.subject}
                  </span>
                </div>

                {/* Years badge */}
                <div className="mt-5 w-full flex justify-center">
                  <span className="bg-[#f3f2ee] rounded-full px-3 py-1 font-sans font-light text-[11.5px] text-[#888888] select-none">
                    3+ Years at OB
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom disclaimer */}
          <div className="font-sans font-light text-[13.5px] text-[#999999] italic mt-10 select-none">
            * Faculty profiles will be updated with photos and names shortly.
          </div>

        </div>
      </section>

      {/* SECTION 7 — SOCIAL COMMITMENT */}
      <section className="relative w-full bg-brand-navy py-20 md:py-[100px] px-5 md:px-16 border-b border-brand-border overflow-hidden select-none">
        
        {/* Subtle background radial gradient for high-end warm glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,205,0,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Subtle background doodle texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] invert"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Section Header */}
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-3 block">
            [ OUR COMMITMENT ]
          </span>
          <h2 className="font-serif text-[34px] sm:text-[48px] text-white font-normal leading-tight text-center">
            Education Beyond Classrooms.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[17px] text-white/70 mt-4 leading-relaxed max-w-xl text-center">
            Ocean Blue Education & Spoken English actively participates in social welfare initiatives — because education is not limited to classrooms.
          </p>

          {/* Cards Grid */}
          <motion.div 
            variants={teamContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-14 text-left items-stretch"
          >
            {/* Card 1 */}
            <motion.div 
              variants={teamCardVariants}
              className="bg-white/[0.05] border border-white/[0.1] rounded-[20px] p-8 flex flex-col gap-5 hover:border-brand-yellow/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="text-brand-yellow">
                <IconHeart size={28} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[16px] text-white">
                  Supporting Old Age Homes
                </h4>
                <p className="font-sans font-light text-[13.5px] sm:text-[14px] text-white/60 leading-relaxed mt-2.5">
                  Active involvement in supporting elderly communities and old age homes in Ahmedabad.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={teamCardVariants}
              className="bg-white/[0.05] border border-white/[0.1] rounded-[20px] p-8 flex flex-col gap-5 hover:border-brand-yellow/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="text-brand-yellow">
                <IconHeartHandshake size={28} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[16px] text-white">
                  Helping the Differently Abled
                </h4>
                <p className="font-sans font-light text-[13.5px] sm:text-[14px] text-white/60 leading-relaxed mt-2.5">
                  Providing support and assistance to mentally challenged individuals through community initiatives.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={teamCardVariants}
              className="bg-white/[0.05] border border-white/[0.1] rounded-[20px] p-8 flex flex-col gap-5 hover:border-brand-yellow/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="text-brand-yellow">
                <IconSchool size={28} stroke={1.5} />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[16px] text-white">
                  Educational Assistance
                </h4>
                <p className="font-sans font-light text-[13.5px] sm:text-[14px] text-white/60 leading-relaxed mt-2.5">
                  Providing educational support and assistance to deserving students who need help accessing quality education.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="relative w-full bg-brand-yellow py-20 px-5 md:px-16 overflow-hidden text-center select-none">
        
        {/* Subtle background doodle texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.12] mix-blend-multiply"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="font-serif text-[34px] sm:text-[48px] text-brand-navy font-normal leading-tight">
            Join the Ocean Blue Education & Spoken English Family.
          </h2>
          <p className="font-sans font-light text-[15px] sm:text-[17px] text-brand-navy/80 mt-3 max-w-xl text-center leading-relaxed">
            10,000+ students have trusted us. Be the next success story.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center bg-brand-navy hover:bg-[#15134e] text-white font-sans font-semibold text-[15px] rounded-full px-8 py-3.5 shadow-sm transition-all duration-300 mt-8 cursor-pointer hover:scale-[1.02]"
          >
            Book Free Demo Class &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
