import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Core layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgramDetails from './components/ProgramDetails';

// Homepage sections
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import BriefOB from './components/BriefOB';
import AwardStrip from './components/AwardStrip';
import Courses from './components/Courses';
import ResultsPreview from './components/ResultsPreview';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';

// Route page components
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import IELTS from './pages/IELTS';
import ResultsPage from './pages/ResultsPage';

// High-performance smooth scroll to anchor link assistant
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Homepage layout composite
function Homepage({ openProgram }) {
  return (
    <>
      <Hero />
      <Statistics />
      <BriefOB />
      <AwardStrip />
      <Courses openProgram={openProgram} />
      <ResultsPreview />
      <Facilities />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
    </>
  );
}

export default function App() {
  const [activeProgram, setActiveProgram] = useState(null);
  const savedScrollPosition = useRef(0);

  const openProgram = (programId) => {
    savedScrollPosition.current = window.scrollY;
    setActiveProgram(programId);
    window.scrollTo(0, 0);
  };

  const closeProgram = () => {
    setActiveProgram(null);
    setTimeout(() => {
      window.scrollTo(0, savedScrollPosition.current);
    }, 50);
  };

  return (
    <div className="relative min-h-screen bg-brand-primaryBg text-brand-charcoal w-full overflow-x-clip selection:bg-brand-navy selection:text-brand-white">
      {/* Global ScrollToHash coordinator */}
      <ScrollToHash />

      {/* Global Scroll Mask for beautiful floating header fade */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '88px',
        zIndex: 40,
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #fafaf8 0%, #fafaf8 65%, transparent 100%)'
      }} />

      {/* Professional WhatsApp Floating Button */}
      <a
        href="https://wa.me/919033552048"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-105 select-none"
      >
        {/* WhatsApp Vector Icon */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.762-4.352 9.765-9.755.002-2.618-1.01-5.078-2.854-6.924C16.34 2.08 13.889 1.069 11.272 1.068c-5.406 0-9.768 4.354-9.77 9.758-.001 1.716.453 3.393 1.317 4.884l-.993 3.626 3.72-.976-.489-.29zM17.387 14.1c-.292-.147-1.73-.854-1.997-.953-.267-.099-.462-.147-.657.147-.195.293-.755.953-.925 1.147-.17.195-.34.218-.633.072-.293-.147-1.236-.456-2.355-1.455-.869-.775-1.456-1.733-1.626-2.027-.17-.293-.018-.452.129-.597.132-.131.293-.34.44-.51.146-.17.195-.293.293-.487.098-.195.049-.366-.024-.513-.074-.147-.657-1.583-.901-2.17-.238-.574-.48-.496-.657-.504-.17-.008-.365-.01-.56-.01s-.513.073-.78.366c-.267.293-1.023 1.001-1.023 2.441s1.047 2.83 1.217 3.05c.17.22 2.062 3.149 4.996 4.414.698.302 1.243.482 1.668.617.7.223 1.337.192 1.84.117.56-.083 1.73-.707 1.975-1.391.243-.684.243-1.27.17-1.391-.073-.122-.267-.195-.56-.342z" />
        </svg>
      </a>

      {/* Navigation Header */}
      <Navbar activeProgram={activeProgram} closeProgram={closeProgram} />

      {activeProgram ? (
        /* Detailed Program View Overlay (supports older details) */
        <main>
          <ProgramDetails programId={activeProgram} closeProgram={closeProgram} />
        </main>
      ) : (
        /* Routes configuration */
        <main>
          <Routes>
            <Route path="/" element={<Homepage openProgram={openProgram} />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/ielts" element={<IELTS />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
      )}

      {/* Footer Links & Map Details */}
      <Footer />
    </div>
  );
}
