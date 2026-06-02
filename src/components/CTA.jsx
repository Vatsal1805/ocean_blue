import { motion } from 'framer-motion';

export default function CTA() {
  const headlineText = "Your First Class Is Free.";
  const words = headlineText.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Much faster, snappier word stagger (50ms)
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <section id="cta" className="relative w-full bg-brand-navy py-[140px] border-b border-white/10 overflow-hidden select-none">
      {/* Subtle background radial gradient for high-end warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,35,126,0.5)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle background doodle texture (inverted for white outlines at 2.5% opacity on dark background) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] invert"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-6 block"
        >
          [ ADMISSIONS COHORT ]
        </motion.span>

        {/* Cinematic Headline - Split into Words */}
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-[42px] sm:text-[54px] md:text-[64px] text-white font-normal leading-tight mb-5"
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block mr-3 md:mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subtext - Fades in snappily after headline completes */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.35 },
            y: { duration: 0.6, delay: 0.35 }
          }}
          className="font-sans font-light text-[16px] sm:text-[20px] text-white/60 max-w-2xl mb-10 leading-relaxed"
        >
          No commitment. Book a free demo class for 4th to 12th school tuitions, JEE/NEET, or language programs.
        </motion.p>

        {/* Snappy Breathing Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.6 },
            y: { duration: 0.6, delay: 0.6 }
          }}
        >
          <motion.a
            href="#contact"
            animate={{ 
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-brand-yellow text-brand-navy font-sans text-[16px] font-semibold hover:bg-brand-yellowDeep transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
            style={{
              willChange: "transform"
            }}
          >
            Book Your Free Demo Class →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
