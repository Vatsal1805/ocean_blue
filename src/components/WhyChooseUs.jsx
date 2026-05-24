import { motion } from 'framer-motion';
import { BookOpen, Calendar, MessageSquare, Users, Award, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      Icon: BookOpen,
      title: "Expert Faculty",
      desc: "Specialized science & commerce mentors alongside certified IELTS & language experts."
    },
    {
      Icon: Calendar,
      title: "Structured Batches",
      desc: "Goal-oriented academic tracks with comprehensive mock exams and progress trackers."
    },
    {
      Icon: MessageSquare,
      title: "Real-World Practice",
      desc: "Conceptual problem-solving, active debates, and interactive classroom discussions."
    },
    {
      Icon: Users,
      title: "Small Batch Sizes",
      desc: "Strict 12-to-15 student cap per batch. Guaranteed individual focus and attention."
    },
    {
      Icon: Award,
      title: "Proven Success",
      desc: "4.7★ rated across 147+ verified Google reviews by Vastral & Nikol families."
    },
    {
      Icon: Clock,
      title: "Flexible Timings",
      desc: "Batch options from 7:00 AM to 9:00 PM to fit school, college, and coaching routines."
    }
  ];

  return (
    <section id="about" className="w-full bg-[#f3f2ee] py-[120px] relative border-b border-[#dddbd4] overflow-hidden">
      {/* Subtle tiled background doodle overlay for visual continuity (2.5% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
            [ WHY CHOOSE US ]
          </span>
          <h2 className="font-serif text-[42px] sm:text-[52px] text-[#1a1a1a] font-normal leading-[1.15] max-w-3xl">
            Built Around One Thing.<br />
            Your Fluency.
          </h2>
        </div>

        {/* 3-Column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.Icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: idx * 0.08 
                }}
                whileHover={{ 
                  y: -8,
                  borderColor: "#0a1628",
                  boxShadow: "0 12px 40px rgba(10, 22, 40, 0.04)",
                }}
                className="bg-[#fafaf8] border border-[#dddbd4] rounded-[20px] p-8 flex flex-col items-start text-left cursor-default transition-all duration-300 group"
              >
                {/* Icon Container with subtle scale animation on card hover */}
                <div className="w-12 h-12 rounded-[14px] bg-[#f3f2ee] border border-[#dddbd4] flex items-center justify-center text-[#0a1628] group-hover:bg-[#0a1628] group-hover:text-white group-hover:border-[#0a1628] transition-all duration-300">
                  <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="font-sans font-semibold text-[18px] text-[#1a1a1a] mt-6 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-[14px] text-[#666666] leading-relaxed mt-3">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
