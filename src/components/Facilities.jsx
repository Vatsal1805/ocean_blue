import { motion } from 'framer-motion';
import { 
  IconBook, 
  IconHome, 
  IconFileText, 
  IconClipboardCheck, 
  IconMessages, 
  IconMapPin 
} from '@tabler/icons-react';

export default function Facilities() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const facilities = [
    {
      Icon: IconBook,
      title: "Library Access",
      desc: "Open to all enrolled students. Reference books, past papers, and study material — no extra cost."
    },
    {
      Icon: IconHome,
      title: "No Homework Policy",
      desc: "Learning is completed in class. Students leave with clarity, not pending tasks."
    },
    {
      Icon: IconFileText,
      title: "Physical Question Banks",
      desc: "Printed question banks for 4th to 12th — built from 15 years of board exam patterns, given to every student."
    },
    {
      Icon: IconClipboardCheck,
      title: "Practice Paper Sets",
      desc: "Board exam simulation with Paper 1, 2, and 3 — followed by dedicated doubt solving sessions."
    },
    {
      Icon: IconMessages,
      title: "In-Class Doubt Solving",
      desc: "Every 3-hour session includes doubt solving in the third hour — right after teaching and revision."
    },
    {
      Icon: IconMapPin,
      title: "Two Branch Locations",
      desc: "Conveniently located in Vastral and Nikol, Ahmedabad. Walk in at either branch."
    }
  ];

  return (
    <section className="relative w-full bg-brand-secondaryBg py-20 md:py-[120px] border-b border-brand-border overflow-hidden select-none">
      {/* Subtle tiled background doodle overlay for visual continuity (2.5% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none max-w-3xl">
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ OUR FACILITIES ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-brand-charcoal font-normal leading-tight">
            Everything You Need. All In One Place.
          </h2>
        </div>

        {/* 3x2 Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1100px]"
        >
          {facilities.map((fac, idx) => {
            const IconComponent = fac.Icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  borderColor: "#201D72",
                  boxShadow: "0 12px 32px rgba(32, 29, 114, 0.08)"
                }}
                className="bg-brand-primaryBg border border-brand-border rounded-[16px] p-8 flex flex-col items-start text-left cursor-default transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className="text-brand-navy group-hover:text-brand-yellow transition-colors duration-300">
                  <IconComponent size={28} stroke={1.5} />
                </div>

                {/* Heading */}
                <h3 className="font-sans font-semibold text-[16px] text-brand-charcoal mt-5 leading-tight">
                  {fac.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-[14px] text-brand-grey leading-relaxed mt-3">
                  {fac.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
