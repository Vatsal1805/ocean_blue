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

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-primaryBg text-brand-charcoal w-full overflow-x-clip selection:bg-brand-navy selection:text-brand-white">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Single Page Sections Container */}
      <main>
        {/* 1. Full Viewport Hero Banner */}
        <Hero />

        {/* 2. Thin Statistics Bar */}
        <Statistics />

        {/* 3. Courses Staggered Cards */}
        <Courses />

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

      {/* 9. Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
