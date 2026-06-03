import { motion } from 'framer-motion';
import { IconTrophy } from '@tabler/icons-react';

export default function AwardStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-brand-yellow py-6 px-6 md:px-16 border-b border-brand-border/20 relative z-10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Left Side: Trophy + Award Name */}
        <div className="flex flex-row items-center justify-center gap-3">
          <IconTrophy size={24} className="text-brand-navy flex-shrink-0" stroke={2} />
          <div className="font-sans text-brand-navy leading-tight">
            <span className="font-semibold text-[15px] sm:text-[16px] mr-1.5">
              Best Education Institute in Gujarat
            </span>
            <span className="hidden sm:inline font-light text-[13px] sm:text-[14px] opacity-80">
              — Divya Bhaskar News & Media Group
            </span>
          </div>
        </div>

        {/* Right Side: Presenter Name (Hidden on Mobile) */}
        <div className="hidden md:block font-sans font-light text-[13px] text-brand-navy opacity-70 text-right">
          Presented by Shri Balvantsinh Rajput, Honorable Minister of Gujarat
        </div>

      </div>
    </motion.section>
  );
}
