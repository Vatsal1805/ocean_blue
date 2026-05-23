import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

// Custom high-performance easeOut count-up hook utilizing requestAnimationFrame
function useCountUp(target, duration = 1500, isDecimal = false, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const targetVal = parseFloat(target);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOut quadratic curve: progress * (2 - progress)
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * targetVal;

      if (isDecimal) {
        setCount(Math.round(currentVal * 10) / 10);
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetVal);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, isDecimal, trigger]);

  // Format decimals to display trailing .0 (e.g. 5.0 instead of 5 during count)
  if (isDecimal) {
    return count.toFixed(1);
  }
  return count;
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { target: "500", suffix: "+", label: "Students Trained", isDecimal: false },
    { target: "4.7", suffix: "★", label: "Google Rating", isDecimal: true },
    { target: "147", suffix: "", label: "Reviews", isDecimal: false },
    { target: "5.0", suffix: "+", label: "Years Teaching", isDecimal: true },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-brand-secondaryBg border-b border-brand-border py-[60px]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-4 divide-x divide-brand-border items-center">
          {stats.map((stat, idx) => {
            const displayVal = useCountUp(stat.target, 1500, stat.isDecimal, isInView);

            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-1 sm:px-4"
              >
                {/* Stat Number */}
                <div className="font-serif text-[28px] sm:text-[42px] md:text-[52px] font-bold text-brand-charcoal leading-none tracking-tight select-none">
                  {displayVal}
                  {stat.suffix}
                </div>
                {/* Stat Label */}
                <span className="font-sans font-light text-[10px] sm:text-[12px] md:text-[13px] text-brand-grey tracking-wide mt-2">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
