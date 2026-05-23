import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: "ti-chalkboard",
      title: "Expert Faculty",
      desc: "Trained coaches with real-world fluency experience."
    },
    {
      icon: "ti-calendar",
      title: "Structured Batches",
      desc: "Fixed schedules so learning never slips."
    },
    {
      icon: "ti-message-circle",
      title: "Real-World Practice",
      desc: "Conversations built around actual situations."
    },
    {
      icon: "ti-users",
      title: "Small Batch Sizes",
      desc: "Maximum 12 students per batch for personal attention."
    },
    {
      icon: "ti-star",
      title: "Proven Results",
      desc: "4.7 stars across 147 verified Google reviews."
    },
    {
      icon: "ti-clock",
      title: "Flexible Timings",
      desc: "Morning and evening batches to fit your schedule."
    }
  ];

  return (
    <section id="about" className="w-full bg-[#f3f2ee] py-[120px] relative border-b border-[#dddbd4]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
            [ WHY CHOOSE US ]
          </span>
          <h2 className="font-serif text-[42px] sm:text-[52px] text-[#1a1a1a] font-normal leading-[1.15] max-w-3xl">
            Built Around One Thing.<br />
            Your Progress.
          </h2>
        </div>

        {/* 2-Column, 3-Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                opacity: { duration: 0.6, ease: "easeOut", delay: idx * 0.1 },
                y: { duration: 0.6, ease: "easeOut", delay: idx * 0.1 }
              }}
              whileHover={{ 
                y: -6,
                borderColor: "#999999",
                boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              className="bg-[#fafaf8] border border-[#dddbd4] rounded-[16px] p-8 flex flex-col items-start text-left cursor-default transition-all duration-200"
              style={{
                willChange: "transform, box-shadow, border-color"
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center">
                <i className={`ti ${card.icon} text-[24px] text-[#1a1a1a]`} />
              </div>

              {/* Title */}
              <h3 className="font-sans font-semibold text-[17px] text-[#1a1a1a] mt-4 leading-tight">
                {card.title}
              </h3>

              {/* Description (one line) */}
              <p className="font-sans font-light text-[14px] text-[#888888] mt-2 truncate w-full">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
