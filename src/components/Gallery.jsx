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

  const getAssetImgUrl = (filename) => {
    return new URL(`../../Assets/Gallary/${filename}`, import.meta.url).href;
  };

  const images = [
    {
      label: "Celebrations",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.44 PM (1).jpeg")
    },
    {
      label: "Interactive Classroom Learning",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.30 PM (1).jpeg")
    },
    {
      label: "Concept Lectures",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.33 PM.jpeg")
    },
    {
      label: "Group Discussions",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.30 PM.jpeg")
    },
    {
      label: "Doubt Solving Clinics",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.31 PM.jpeg")
    },
    {
      label: "Board Exam Seminars",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.35 PM.jpeg")
    },
    {
      label: "Language Labs",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.39 PM.jpeg")
    },
    {
      label: "Republic Day Gatherings",
      src: getAssetImgUrl("WhatsApp Image 2026-06-08 at 6.29.45 PM.jpeg")
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
          <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ OUR INSTITUTE ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
            Inside Ocean Blue Education & Spoken English.
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
