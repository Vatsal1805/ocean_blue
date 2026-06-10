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
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
        
        {/* Left Side: Trophy + Award Name & News Group */}
        <div className="flex flex-row items-start justify-start gap-3 w-full sm:w-auto">
          <IconTrophy size={26} className="text-brand-navy flex-shrink-0 mt-0.5" stroke={2} />
          <div className="font-sans text-brand-navy leading-tight flex flex-col items-start text-left">
            <span className="font-semibold text-[15px] sm:text-[16px]">
              Best Education Institute in Gujarat
            </span>
            <span className="font-light text-[13px] sm:text-[14px] opacity-90 mt-0.5">
              — Divya Bhaskar News & Media Group
            </span>
            <span className="font-light text-[11.5px] sm:text-[13px] opacity-75 mt-1.5 sm:hidden block">
              Presented by Shri Balvantsinh Rajput, Honorable Minister of Gujarat
            </span>
          </div>
        </div>

        {/* Right Side: Presenter Name (Hidden on Mobile, shown on tablet/desktop) */}
        <div className="hidden sm:block font-sans font-light text-[13px] text-brand-navy opacity-75 text-right max-w-xs md:max-w-md">
          Presented by Shri Balvantsinh Rajput, Honorable Minister of Gujarat
        </div>

      </div>
    </motion.section>
  );
}
