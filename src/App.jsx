import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgramDetails from './components/ProgramDetails';

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
    }, 50); // small delay lets the DOM re-render first
  };

  return (
    <div className="relative min-h-screen bg-brand-primaryBg text-brand-charcoal w-full overflow-x-clip selection:bg-brand-navy selection:text-brand-white">
      {/* Fixed Navigation Header */}
      <Navbar activeProgram={activeProgram} closeProgram={closeProgram} />

      {activeProgram ? (
        /* Detailed Program View Page */
        <main>
          <ProgramDetails programId={activeProgram} closeProgram={closeProgram} />
        </main>
      ) : (
        /* Single Page Landing Homepage Views */
        <main>
          {/* 1. Full Viewport Hero Banner */}
          <Hero />

          {/* 2. Thin Statistics Bar */}
          <Statistics />

          {/* 3. Courses 2x2 Interactive Grid */}
          <Courses openProgram={openProgram} />

          {/* 4. Differentiators Section */}
          <WhyChooseUs />

          {/* 5. Double Marquee Testimonials */}
          <Testimonials />

          {/* 6. Looping Academic Gallery */}
          <Gallery />

          {/* 7. Selective Admissions CTA */}
          <CTA />

          {/* 8. Admissions Form Section */}
          <Contact />
        </main>
      )}

      {/* 9. Premium Professional Footer */}
      <Footer />
    </div>
  );
}
