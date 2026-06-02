import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      label: "Standard Classroom",
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
    },
    {
      label: "JEE Physics Lecture",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
    },
    {
      label: "NEET Biology Cohort",
      src: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&q=80"
    },
    {
      label: "Mathematics Doubt Clinic",
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
    },
    {
      label: "Board Exam Study Room",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
    },
    {
      label: "IELTS Mock Speaking",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
    },
    {
      label: "Interactive Group Debate",
      src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80"
    },
    {
      label: "Vocal Articulation Drill",
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
    }
  ];

  return (
    <section id="gallery" className="w-full bg-[#f3f2ee] py-[100px] border-b border-[#dddbd4] overflow-hidden relative">
      {/* Subtle tiled background doodle overlay for visual continuity (2.5% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />
      
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 px-6 select-none">
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ OUR INSTITUTE ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
            Inside Ocean Blue.
          </h2>
        </div>

        {/* Single Gallery Marquee Row */}
        <div 
          className="w-full overflow-hidden flex relative select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="animate-marquee-left flex gap-4"
            style={{ 
              animation: `marquee-left ${isMobile ? '20s' : '30s'} linear infinite`,
              animationPlayState: isHovered ? 'paused' : 'running',
              willChange: "transform"
            }}
          >
            {/* Duplicated twice in the DOM for seamless loop */}
            {[...images, ...images].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: '#fecd00'
                }}
                transition={{ duration: 0.2 }}
                className="w-[220px] md:w-[280px] h-[160px] md:h-[200px] flex-shrink-0 rounded-[16px] overflow-hidden border border-[#dddbd4] relative cursor-pointer"
                style={{
                  willChange: "transform, border-color"
                }}
              >
                {/* Image tag taking full width and height with 20% grayscale */}
                <img 
                  src={img.src} 
                  alt={img.label}
                  className="w-full h-full object-cover object-center"
                  style={{ filter: "grayscale(20%)" }}
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                {/* Bottom Label Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex items-end justify-start">
                  <span className="font-sans font-light text-[12px] text-white tracking-[0.05em] leading-none select-none">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
