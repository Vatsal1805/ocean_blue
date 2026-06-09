import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconChevronDown, 
  IconArrowLeft, 
  IconArrowRight, 
  IconTrophy,
  IconUser
} from '@tabler/icons-react';

// CountUp Helper Component with Intersection Observer
function CountUp({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHasStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const endNum = parseFloat(end.toString().replace(/,/g, ''));
    if (isNaN(endNum)) {
      setCount(end);
      return;
    }

    const isFloat = end.toString().includes('.');
    const startTime = performance.now();

    const updateCount = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const val = progress * endNum;
      
      if (isFloat) {
        setCount(val.toFixed(1));
      } else {
        setCount(Math.floor(val));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endNum);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, end, duration]);

  const formatNumber = (num) => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) return num;
    if (end.toString().includes('.')) return num.toString();
    return parsed.toLocaleString('en-IN');
  };

  return (
    <span ref={elementRef} className="will-change-contents">
      {formatNumber(count)}{suffix}
    </span>
  );
}

const getResultImgUrl = (filename) => {
  return new URL(`../../Assets/Results/${filename}`, import.meta.url).href;
};

const resultPhotos = [
  "IMG_9096.JPG.jpeg", "IMG_9097.JPG.jpeg", "IMG_9101.JPG.jpeg", "IMG_9102.JPG.jpeg",
  "IMG_9103.JPG.jpeg", "IMG_9104.JPG.jpeg", "IMG_9106.JPG.jpeg", "IMG_9107.JPG.jpeg",
  "IMG_9111.JPG.jpeg", "IMG_9114.JPG.jpeg", "IMG_9115.JPG.jpeg", "IMG_9116.JPG.jpeg",
  "IMG_9117.JPG.jpeg", "IMG_9120.JPG.jpeg", "IMG_9121.JPG.jpeg", "IMG_9123.JPG.jpeg",
  "IMG_9126.JPG.jpeg", "IMG_9127.JPG.jpeg", "IMG_9128.JPG.jpeg", "IMG_9133.JPG.jpeg",
  "IMG_9136.JPG.jpeg", "IMG_9137.JPG.jpeg"
];

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedYear, setExpandedYear] = useState(null);

  // Dynamic SEO Meta Tags
  useEffect(() => {
    document.title = "Student Results & Toppers — Ocean Blue Education & Spoken English Ahmedabad | JEE NEET IELTS Board";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "See the results of Ocean Blue Education & Spoken English students across JEE, NEET, Board 10th & 12th, and IELTS programs. 10,000+ students guided since 2009. Vastral & Nikol, Ahmedabad."
      );
    }
  }, []);

  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const ctaHeadlineText = "Your Name Could Be Here.";
  const ctaWords = ctaHeadlineText.split(" ");

  const ctaContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const ctaWordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  // Section 2 - Featured Toppers Data
  const featuredToppers = [
    {
      badge: "JEE MAINS 2024",
      score: "AIR 2847",
      name: "Student Topper",
      program: "JEE Mains · 2024 Batch",
      quote: "The Physics and Maths coaching here completely changed how I approach problems.",
      image: getResultImgUrl("IMG_9096.JPG.jpeg")
    },
    {
      badge: "NEET UG 2024",
      score: "620 / 720",
      name: "Student Topper",
      program: "NEET UG · 2024 Batch",
      quote: "Biology sessions and NCERT focus at Ocean Blue Education & Spoken English gave me the clarity I needed to crack NEET.",
      image: getResultImgUrl("IMG_9097.JPG.jpeg")
    },
    {
      badge: "IELTS 2024",
      score: "Band 7.5",
      name: "Student Topper",
      program: "IELTS Academic · 2024 Batch",
      quote: "From band 5.5 to 7.5 in one attempt. The mock tests made all the difference.",
      image: getResultImgUrl("IMG_9101.JPG.jpeg")
    }
  ];

  // Section 3 - Archive Grid Data (40 placeholders - 8 per category to demo pagination)
  const allResults = [
    // JEE (8 results)
    { id: 1, category: "JEE", badge: "JEE MAINS 2024", score: "99.85 PR", name: "Aarav Patel", program: "JEE Mains · 2024 Batch" },
    { id: 2, category: "JEE", badge: "JEE MAINS 2024", score: "AIR 2847", name: "Dev Patel", program: "JEE Mains · 2024 Batch" },
    { id: 3, category: "JEE", badge: "JEE ADVANCED 2024", score: "AIR 1890", name: "Pooja Mehta", program: "JEE Advanced · 2024 Batch" },
    { id: 4, category: "JEE", badge: "JEE MAINS 2024", score: "99.12 PR", name: "Karan Desai", program: "JEE Mains · 2024 Batch" },
    { id: 5, category: "JEE", badge: "JEE ADVANCED 2024", score: "AIR 3120", name: "Rohan Shah", program: "JEE Advanced · 2024 Batch" },
    { id: 6, category: "JEE", badge: "JEE MAINS 2023", score: "98.95 PR", name: "Sneha Vyas", program: "JEE Mains · 2023 Batch" },
    { id: 7, category: "JEE", badge: "JEE ADVANCED 2023", score: "AIR 4512", name: "Anuj Kothari", program: "JEE Advanced · 2023 Batch" },
    { id: 8, category: "JEE", badge: "JEE MAINS 2023", score: "98.60 PR", name: "Vijay Shah", program: "JEE Mains · 2023 Batch" },
    
    // NEET (8 results)
    { id: 9, category: "NEET", badge: "NEET UG 2024", score: "645 / 720", name: "Riddhi Dave", program: "NEET UG · 2024 Batch" },
    { id: 10, category: "NEET", badge: "NEET UG 2024", score: "620 / 720", name: "Manoj Panchal", program: "NEET UG · 2024 Batch" },
    { id: 11, category: "NEET", badge: "NEET UG 2024", score: "612 / 720", name: "Nirav Kadam", program: "NEET UG · 2024 Batch" },
    { id: 12, category: "NEET", badge: "NEET UG 2023", score: "634 / 720", name: "Dr. Meera Amin", program: "NEET UG · 2023 Batch" },
    { id: 13, category: "NEET", badge: "NEET UG 2023", score: "605 / 720", name: "Vikas Sharma", program: "NEET UG · 2023 Batch" },
    { id: 14, category: "NEET", badge: "NEET UG 2023", score: "601 / 720", name: "Anjana Sen", program: "NEET UG · 2023 Batch" },
    { id: 15, category: "NEET", badge: "NEET UG 2022", score: "610 / 720", name: "Rahul Prajapati", program: "NEET UG · 2022 Batch" },
    { id: 16, category: "NEET", badge: "NEET UG 2022", score: "598 / 720", name: "Hiral Patel", program: "NEET UG · 2022 Batch" },
    
    // Board 10th (8 results)
    { id: 17, category: "Board 10th", badge: "BOARD 10TH GSEB", score: "99.4 PR", name: "Karan Desai", program: "GSEB Class 10 · 2024 Batch" },
    { id: 18, category: "Board 10th", badge: "BOARD 10TH GSEB", score: "98.8 PR", name: "Hardik Joshi", program: "GSEB Class 10 · 2024 Batch" },
    { id: 19, category: "Board 10th", badge: "BOARD 10TH CBSE", score: "97.5 PR", name: "Manish Rajput", program: "CBSE Class 10 · 2024 Batch" },
    { id: 20, category: "Board 10th", badge: "BOARD 10TH GSEB", score: "96.4 PR", name: "Tushar Panchal", program: "GSEB Class 10 · 2023 Batch" },
    { id: 21, category: "Board 10th", badge: "BOARD 10TH CBSE", score: "95.2 PR", name: "Amit Sharma", program: "CBSE Class 10 · 2024 Batch" },
    { id: 22, category: "Board 10th", badge: "BOARD 10TH GSEB", score: "94.8 PR", name: "Pratik Vyas", program: "GSEB Class 10 · 2023 Batch" },
    { id: 23, category: "Board 10th", badge: "BOARD 10TH GSEB", score: "94.2 PR", name: "Nikhil Mehta", program: "GSEB Class 10 · 2022 Batch" },
    { id: 24, category: "Board 10th", badge: "BOARD 10TH CBSE", score: "93.5 PR", name: "Deepak Kothari", program: "CBSE Class 10 · 2022 Batch" },

    // Board 12th (8 results)
    { id: 25, category: "Board 12th", badge: "BOARD 12TH GSEB SCI", score: "98.2 PR", name: "Rohan Shah", program: "GSEB Class 12 Sci · 2024 Batch" },
    { id: 26, category: "Board 12th", badge: "BOARD 12TH GSEB SCI", score: "99.1 PR", name: "Kiran Patel", program: "GSEB Class 12 Sci · 2024 Batch" },
    { id: 27, category: "Board 12th", badge: "BOARD 12TH CBSE SCI", score: "98.2 PR", name: "Jignesh Bhavsar", program: "CBSE Class 12 Sci · 2024 Batch" },
    { id: 28, category: "Board 12th", badge: "BOARD 12TH GSEB SCI", score: "97.8 PR", name: "Rajesh Sen", program: "GSEB Class 12 Sci · 2023 Batch" },
    { id: 29, category: "Board 12th", badge: "BOARD 12TH GSEB COM", score: "95.6 PR", name: "Niranjan Mehta", program: "GSEB Class 12 Com · 2024 Batch" },
    { id: 30, category: "Board 12th", badge: "BOARD 12TH CBSE SCI", score: "94.5 PR", name: "Aditya Shah", program: "CBSE Class 12 Sci · 2023 Batch" },
    { id: 31, category: "Board 12th", badge: "BOARD 12TH GSEB SCI", score: "93.8 PR", name: "Sanjay Raval", program: "GSEB Class 12 Sci · 2022 Batch" },
    { id: 32, category: "Board 12th", badge: "BOARD 12TH GSEB COM", score: "93.1 PR", name: "Bhavin Patel", program: "GSEB Class 12 Com · 2022 Batch" },

    // IELTS / PTE (8 results)
    { id: 33, category: "IELTS / PTE", badge: "IELTS ACADEMIC", score: "Band 7.5", name: "Sneha Vyas", program: "IELTS Academic · 2024 Batch" },
    { id: 34, category: "IELTS / PTE", badge: "IELTS ACADEMIC", score: "Band 8.0", name: "Rajesh Trivedi", program: "IELTS Academic · 2023 Batch" },
    { id: 35, category: "IELTS / PTE", badge: "IELTS ACADEMIC", score: "Band 8.0", name: "Aman Mehta", program: "IELTS Prep · 2024 Batch" },
    { id: 36, category: "IELTS / PTE", badge: "IELTS GENERAL", score: "Band 7.5", name: "Dharmesh Kothari", program: "IELTS Prep · 2024 Batch" },
    { id: 37, category: "IELTS / PTE", badge: "PTE ACADEMIC", score: "Score 78", name: "Parth Vyas", program: "PTE Prep · 2024 Batch" },
    { id: 38, category: "IELTS / PTE", badge: "IELTS ACADEMIC", score: "Band 7.0", name: "Rishi Prajapati", program: "IELTS Prep · 2023 Batch" },
    { id: 39, category: "IELTS / PTE", badge: "IELTS GENERAL", score: "Band 7.0", name: "Jatin Solanki", program: "IELTS Prep · 2022 Batch" },
    { id: 40, category: "IELTS / PTE", badge: "PTE ACADEMIC", score: "Score 72", name: "Nisha Patel", program: "PTE Prep · 2023 Batch" }
  ].map((r, idx) => ({
    ...r,
    image: getResultImgUrl(resultPhotos[idx % resultPhotos.length])
  }));

  // Filtering & Pagination Logic
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const filteredResults = activeFilter === "All"
    ? allResults
    : allResults.filter(r => r.category === activeFilter);

  // Pagination page size set to 5 cards per page
  const totalPages = Math.ceil(filteredResults.length / 5);

  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Clamped page numbers for mobile responsiveness (max 3 numbers visible)
  const getVisiblePageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);
    
    if (currentPage === 1) {
      end = 3;
    } else if (currentPage === totalPages) {
      start = totalPages - 2;
    }
    
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const getBadgeStyles = (category) => {
    switch (category) {
      case "JEE":
      case "NEET":
        return "bg-brand-navy text-white";
      case "Board 10th":
      case "Board 12th":
        return "bg-brand-yellow text-brand-navy";
      case "IELTS / PTE":
        return "bg-brand-secondaryBg text-brand-navy border border-brand-border";
      default:
        return "bg-brand-secondaryBg text-brand-charcoal";
    }
  };

  // Section 4 - Year-wise Accordion Data
  const archiveYears = [
    {
      year: "2024-25",
      count: "12 Results",
      stats: [
        "100% Pass Rate in 10th & 12th Board Exams",
        "94% of JEE candidates qualified for JEE Advanced",
        "88% of IELTS/PTE candidates achieved 7.0+ Band"
      ],
      items: [
        { name: "Student Placeholder", score: "AIR 2847", badge: "JEE Mains" },
        { name: "Student Placeholder", score: "620 / 720", badge: "NEET UG" },
        { name: "Student Placeholder", score: "Band 7.5", badge: "IELTS Academic" }
      ]
    },
    {
      year: "2023-24",
      count: "15 Results",
      stats: [
        "100% GSEB & CBSE Board Pass Rate",
        "90% NEET students secured top medical college seats",
        "82% IELTS candidates achieved 7.5+ Band Score"
      ],
      items: [
        { name: "Student Placeholder", score: "634 / 720", badge: "NEET UG" },
        { name: "Student Placeholder", score: "Band 8.0", badge: "IELTS Academic" },
        { name: "Student Placeholder", score: "96.4 PR", badge: "Board 10th" }
      ]
    },
    {
      year: "2022-23",
      count: "18 Results",
      stats: [
        "99.4% Board student success & satisfaction rate",
        "88% JEE qualification rate across batches",
        "80% IELTS candidates got visa approvals on first attempt"
      ],
      items: [
        { name: "Student Placeholder", score: "AIR 3105", badge: "JEE Advanced" },
        { name: "Student Placeholder", score: "601 / 720", badge: "NEET UG" },
        { name: "Student Placeholder", score: "96.2 PR", badge: "Board 12th" }
      ]
    }
  ];

  return (
    <div className="bg-brand-primaryBg min-h-screen relative overflow-hidden select-none">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative min-h-[50vh] bg-[#fafaf8] flex flex-col items-center justify-center pt-28 pb-16 px-5 md:px-16 overflow-hidden border-b border-brand-border">
        
        {/* Moleskine dot grid pattern */}
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

        {/* Soft radial spotlight gradient centered behind the text */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(250, 250, 248, 0.7) 0%, rgba(250, 250, 248, 0) 75%)',
          }}
        />

        {/* Top Left Breadcrumb */}
        <div className="absolute top-24 left-6 md:left-16 z-20">
          <nav className="font-sans font-light text-[12px] text-[#888888] flex items-center gap-1.5 select-none">
            <Link to="/" className="hover:text-brand-navy transition-colors duration-200">Home</Link>
            <span>/</span>
            <span className="text-brand-charcoal">Results</span>
          </nav>
        </div>

        {/* Hero Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center select-none"
        >
          <motion.span 
            variants={itemVariants}
            className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block"
          >
            [ STUDENT ACHIEVEMENTS ]
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[clamp(36px,8vw,64px)] text-brand-charcoal font-normal leading-tight tracking-tight max-w-3xl"
          >
            Our Students Deliver.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-sans font-light text-[15px] sm:text-[18px] text-brand-grey leading-relaxed mt-5 max-w-xl text-center"
          >
            15+ years of board toppers, JEE qualifiers, NEET rankers, and IELTS achievers.
          </motion.p>

          {/* Quick Stats Grid - 2x2 on mobile, row on desktop */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-x-12 gap-y-6 mt-10 select-none z-10 w-full max-w-lg md:max-w-none px-4"
          >
            {[
              { end: "10000", label: "Students Guided", suffix: "+" },
              { end: "4.7", label: "Google Rating", suffix: "★" },
              { end: "15", label: "Years of Results", suffix: "+" },
              { end: "2009", label: "Established", suffix: "" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="font-serif text-[clamp(28px,5vw,48px)] text-brand-navy font-bold leading-none tracking-tight">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
                <span className="font-sans font-light text-[12px] sm:text-[13px] text-[#555555] mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — FEATURED TOPPERS */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        
        {/* Moleskine dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 select-none max-w-2xl">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
              [ FEATURED ACHIEVEMENTS ]
            </span>
            <h2 className="font-serif text-[clamp(32px,6vw,52px)] text-[#1a1a1a] font-normal leading-tight">
              Our Best Results.
            </h2>
            <p className="font-sans font-light text-[13.5px] sm:text-[14px] text-brand-grey italic mt-2.5">
              * Placeholder results — client will provide actual student data shortly.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-stretch">
            {featuredToppers.map((topper, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#fafaf8] border border-brand-border border-t-4 border-t-brand-yellow rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Circular Student Photo Placeholder */}
                <div className="w-20 h-20 rounded-full bg-[#f3f2ee] border border-brand-border flex items-center justify-center text-brand-navy/30 shadow-inner relative overflow-hidden select-none">
                  {topper.image ? (
                    <img 
                      src={topper.image} 
                      alt={topper.name} 
                      className="w-full h-full object-cover object-center" 
                    />
                  ) : (
                    <IconUser size={36} stroke={1.5} />
                  )}
                </div>

                {/* Exam Badge */}
                <span className="bg-brand-yellow text-brand-navy font-sans font-semibold text-[11px] uppercase tracking-wider rounded-full px-4 py-1 mt-6 select-none">
                  {topper.badge}
                </span>

                {/* Score */}
                <div className="font-serif text-[clamp(32px,4.5vw,48px)] text-brand-navy font-normal mt-4 leading-none tracking-tight select-none">
                  {topper.score}
                </div>

                {/* Student Name */}
                <h4 className="font-sans font-semibold text-[18px] text-[#1a1a1a] mt-3">
                  {topper.name}
                </h4>

                {/* Program + Year */}
                <p className="font-sans font-light text-[13.5px] text-brand-grey mt-0.5 select-none">
                  {topper.program}
                </p>

                {/* Short Quote */}
                <p className="font-sans font-light italic text-[14px] text-[#555555] mt-6 pt-6 border-t border-brand-border leading-relaxed w-full">
                  "{topper.quote}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Disclaimer */}
          <p className="font-sans font-light text-[12px] text-brand-grey italic mt-12 text-center select-none">
            * All results shown are placeholders. Actual student data will be updated by Ocean Blue Education & Spoken English.
          </p>

        </div>
      </section>

      {/* SECTION 3 — FILTER + PAGINATED RESULTS GRID */}
      <section className="relative w-full bg-brand-secondaryBg py-20 md:py-[120px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6 select-none max-w-2xl">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
              [ ALL RESULTS ]
            </span>
            <h2 className="font-serif text-[clamp(28px,5vw,48px)] text-[#1a1a1a] font-normal leading-tight">
              Complete Results Archive.
            </h2>
          </div>

          {/* Filter tabs row - scrollable on mobile */}
          <div className="w-full flex justify-center mt-6 mb-12 px-2 overflow-hidden">
            <div className="flex flex-row overflow-x-auto whitespace-nowrap scrollbar-none gap-2 max-w-full pb-3 md:pb-0 px-2 justify-start md:justify-center">
              {["All", "Board 10th", "Board 12th", "JEE", "NEET", "IELTS / PTE"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleFilterChange(tab)}
                  className={`px-5 py-2.5 rounded-full font-sans text-[13.5px] font-medium transition-all duration-300 cursor-pointer min-h-[44px] touch-manipulation select-none ${
                    activeFilter === tab
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-[#fafaf8] border border-brand-border text-brand-grey hover:text-brand-charcoal hover:bg-[#fafaf8]/80'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid with framer motion animate presence */}
          <div className="w-full min-h-[450px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
              <AnimatePresence mode="popLayout">
                {paginatedResults.map((topper) => (
                  <motion.div
                    key={`${activeFilter}-${currentPage}-${topper.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="bg-[#fafaf8] border border-brand-border rounded-[16px] p-6 flex flex-col justify-between hover:border-brand-navy hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default group"
                  >
                    <div>
                      {/* Card Header Row with Photo Placeholder */}
                      <div className="flex items-center justify-between w-full select-none">
                        {/* Circular Student Photo Placeholder */}
                        <div className="w-12 h-12 rounded-full bg-[#f3f2ee] border border-brand-border flex items-center justify-center text-brand-navy/30 shadow-inner relative overflow-hidden">
                          {topper.image ? (
                            <img 
                              src={topper.image} 
                              alt={topper.name} 
                              className="w-full h-full object-cover object-center" 
                            />
                          ) : (
                            <IconUser size={22} stroke={1.5} />
                          )}
                        </div>
                        <span className={`px-3 py-1 font-sans text-[10.5px] font-semibold tracking-wider uppercase rounded-full select-none ${getBadgeStyles(topper.category)}`}>
                          {topper.badge}
                        </span>
                      </div>

                      {/* Score */}
                      <div className="font-serif text-[32px] text-brand-navy font-normal mt-5 leading-none tracking-tight select-none">
                        {topper.score}
                      </div>

                      {/* Name */}
                      <h4 className="font-sans font-semibold text-[15px] text-[#1a1a1a] mt-3 group-hover:text-brand-navy transition-colors duration-200">
                        {topper.name}
                      </h4>
                    </div>

                    {/* Program details */}
                    <div className="font-sans font-light text-[13px] text-brand-grey mt-2 border-t border-[#f0eee8] pt-3.5 select-none w-full">
                      {topper.program}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Row */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 select-none">
              {/* Previous button */}
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`w-9 h-9 rounded-full border border-brand-border flex items-center justify-center transition-all duration-200 min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer ${
                  currentPage === 1
                    ? 'opacity-40 cursor-not-allowed text-brand-grey bg-transparent'
                    : 'text-brand-navy bg-[#fafaf8] hover:bg-[#fafaf8]/80 hover:border-brand-navy'
                }`}
              >
                <IconArrowLeft size={16} />
              </button>

              {/* Page Numbers */}
              {getVisiblePageNumbers().map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-sans font-medium text-[13.5px] transition-all duration-200 min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer ${
                    currentPage === num
                      ? 'bg-brand-yellow text-brand-navy font-bold shadow-sm border border-brand-yellow'
                      : 'bg-[#fafaf8] border border-brand-border text-brand-grey hover:text-brand-charcoal hover:border-brand-grey'
                  }`}
                >
                  {num}
                </button>
              ))}

              {/* Next button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`w-9 h-9 rounded-full border border-brand-border flex items-center justify-center transition-all duration-200 min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer ${
                  currentPage === totalPages
                    ? 'opacity-40 cursor-not-allowed text-brand-grey bg-transparent'
                    : 'text-brand-navy bg-[#fafaf8] hover:bg-[#fafaf8]/80 hover:border-brand-navy'
                }`}
              >
                <IconArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4 — YEAR-WISE ARCHIVE */}
      <section className="relative w-full bg-[#fafaf8] py-20 md:py-[100px] px-5 md:px-16 border-b border-brand-border overflow-hidden">
        
        {/* Moleskine dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(26, 26, 26, 0.03) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-start mb-12 select-none">
            <span className="font-sans font-bold text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
              [ YEAR BY YEAR ]
            </span>
            <h2 className="font-serif text-[clamp(28px,5vw,48px)] text-[#1a1a1a] font-normal leading-tight">
              Results by Academic Year.
            </h2>
            <p className="font-sans font-light text-[15px] sm:text-[16px] text-brand-grey mt-2">
              Ocean Blue Education & Spoken English's track record since 2009 — updated every academic year.
            </p>
          </div>

          {/* Accordion Rows */}
          <div className="flex flex-col w-full border-t border-brand-border">
            {archiveYears.map((item, idx) => {
              const isOpen = expandedYear === item.year;
              return (
                <div key={idx} className="border-b border-brand-border w-full">
                  {/* Accordion Trigger */}
                  <div
                    onClick={() => setExpandedYear(isOpen ? null : item.year)}
                    className="flex justify-between items-center py-5 cursor-pointer select-none group min-h-[48px] touch-manipulation"
                  >
                    <div className="flex items-center">
                      <span className="font-sans font-semibold text-[17px] sm:text-[18px] text-[#1a1a1a] group-hover:text-brand-navy transition-colors duration-200">
                        {item.year}
                      </span>
                      <span className="font-sans font-light text-[12px] sm:text-[13px] text-brand-grey ml-3 bg-brand-secondaryBg rounded-full px-3 py-0.5 select-none">
                        {item.count}
                      </span>
                    </div>
                    
                    {/* Rotating Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-brand-navy"
                    >
                      <IconChevronDown size={20} />
                    </motion.div>
                  </div>

                  {/* Accordion Panel Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pt-2 text-left flex flex-col gap-6 w-full">
                          {/* Cards row - 3 columns */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                            {item.items.map((subItem, sIdx) => (
                              <div key={sIdx} className="bg-brand-secondaryBg border border-brand-border/60 rounded-xl p-4.5 flex flex-col justify-between shadow-sm">
                                <div>
                                  <span className="text-[10px] font-sans font-bold text-brand-navy/60 tracking-wider uppercase block mb-1">
                                    {subItem.badge}
                                  </span>
                                  <h5 className="font-sans font-semibold text-[14px] text-[#1a1a1a]">
                                    {subItem.name}
                                  </h5>
                                </div>
                                <div className="font-serif text-[20px] text-brand-navy font-bold mt-2.5 leading-none">
                                  {subItem.score}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Stats text block (inline list below cards) */}
                          <div className="bg-[#f3f2ee]/50 border border-brand-border/40 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4.5 select-none w-full">
                            {item.stats.map((stat, stIdx) => (
                              <div key={stIdx} className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                                <span className="font-sans font-light text-[13.5px] text-[#555555]">
                                  {stat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Archive Footer Note */}
          <div className="font-sans font-light text-[13px] text-[#999999] italic mt-8 text-center select-none">
            * Previous year results will be added progressively. Contact Ocean Blue Education & Spoken English for complete results.
          </div>

        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="relative w-full bg-brand-yellow py-24 px-5 md:px-16 overflow-hidden text-center select-none border-t border-brand-border">
        
        {/* Subtle background doodle texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.12] mix-blend-multiply"
          style={{
            backgroundImage: "url('/doodle_bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "360px auto",
          }}
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Word Stagger headline */}
          <motion.h2
            variants={ctaContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-[clamp(32px,6vw,52px)] text-brand-navy font-normal leading-tight mb-4"
          >
            {ctaWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={ctaWordVariants}
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <p className="font-sans font-light text-[16px] sm:text-[17px] text-brand-navy/80 mt-3 max-w-xl text-center leading-relaxed">
            10,000+ students have trusted Ocean Blue Education & Spoken English since 2009. Join them.
          </p>

          <div className="mt-10">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center bg-brand-navy hover:bg-[#15134e] text-white font-sans font-semibold text-[15px] rounded-full px-9 py-4 shadow-md transition-all duration-300 cursor-pointer"
            >
              <motion.span
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center"
              >
                Book Your Free Demo Class &rarr;
              </motion.span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
