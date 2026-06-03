import { motion } from 'framer-motion';

export default function Hero() {
  // Parent variants to orchestrate children stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Child elements fade up from 20px below with a sleek exponential easing
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for standard Apple premium pacing
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-brand-primaryBg text-center px-6 md:px-16 overflow-hidden pt-[72px]"
    >
      {/* 1. Moleskine dot grid pattern: #1a1a1a charcoal dots at 3% opacity, 1.5px diameter, spaced 28px */}
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

      {/* 2. Soft radial spotlight gradient centered behind the text so dots recede slightly */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(250, 250, 248, 0.7) 0%, rgba(250, 250, 248, 0) 75%)',
        }}
      />

      {/* 3. Large barely visible watermark letter "E" on the right side */}
      {/* <div 
        className="absolute right-[-20px] md:right-[8%] bottom-[5%] md:bottom-[10%] font-serif text-[240px] sm:text-[360px] md:text-[500px] font-bold text-brand-charcoal opacity-[0.03] select-none pointer-events-none z-[1] leading-none"
      >
        E
      </div> */}

      {/* 4. Centered Editorial Content Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto w-full text-center px-4"
      >
        {/* Cinematic High-Impact Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[46px] sm:text-[72px] md:text-[88px] text-brand-charcoal leading-[1.05] font-normal tracking-tight max-w-4xl mb-6 select-none"
        >
          <span className="block">One Institute.</span>
          <span className="block text-brand-navy font-light italic">Every Goal.</span>
        </motion.h1>

        {/* Premium Body Copy */}
        <motion.p
          variants={itemVariants}
          className="font-sans font-light text-[16px] md:text-[18px] text-brand-grey max-w-2xl leading-relaxed mb-10"
        >
          School tuitions, competitive prep, and language programs — all under one roof in Ahmedabad.
        </motion.p>

        {/* Premium Dual CTA Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md z-10"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-yellow text-brand-navy font-sans text-[15px] font-semibold border border-brand-yellow hover:bg-brand-yellowDeep hover:border-brand-yellowDeep transition-all duration-300"
          >
            Enroll Now
          </a>
          <a
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border-[1.5px] border-brand-yellow text-brand-navy font-sans text-[15px] font-semibold bg-transparent hover:bg-brand-yellowDeep hover:border-brand-yellowDeep transition-all duration-300"
          >
            View Courses
          </a>
        </motion.div>

        {/* trust indicator bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Overlapping monochrome dark circles */}
          <div className="flex -space-x-3 select-none">
            <div className="w-8 h-8 rounded-full border border-brand-border bg-brand-secondaryBg flex items-center justify-center text-[10px] text-brand-grey font-mono">
              01
            </div>
            <div className="w-8 h-8 rounded-full border border-brand-border bg-brand-primaryBg flex items-center justify-center text-[10px] text-brand-grey font-mono">
              02
            </div>
            <div className="w-8 h-8 rounded-full border border-brand-border bg-brand-secondaryBg flex items-center justify-center text-[10px] text-brand-grey font-mono">
              03
            </div>
          </div>
          {/* trust details copy */}
          <span className="font-sans font-light text-[14px] text-brand-grey tracking-wide">
            15+ Years of Trust (Since 2009) &middot; 10,000+ Students &middot; 4.7★ (147 Google Reviews)
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
