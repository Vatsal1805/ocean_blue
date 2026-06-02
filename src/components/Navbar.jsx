import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeProgram, closeProgram }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (activeProgram) return; // don't track scroll sections if program details page is active
    
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      const sections = ['home', 'courses', 'about', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProgram]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    if (activeProgram) {
      closeProgram();
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-4 right-4 md:left-12 md:right-12 h-[64px] px-8 md:px-10 flex items-center justify-between z-50 bg-brand-primaryBg/75 backdrop-blur-xl border transition-all duration-300 rounded-full shadow-[0_8px_30px_rgba(10,22,40,0.03)] ${
          hasScrolled ? 'border-brand-yellow/30' : 'border-brand-border/40'
        }`}
      >
        {/* Left Side: Brand Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="flex items-center gap-1.5 font-sans font-medium text-[18px] text-brand-charcoal tracking-tight select-none"
        >
          Ocean Blue
          <span className="w-[8px] h-[8px] rounded-full bg-brand-yellow" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = !activeProgram && activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`font-sans text-[15px] transition-colors duration-300 relative group py-1 ${
                  isActive ? 'text-brand-charcoal font-semibold' : 'text-brand-grey hover:text-brand-charcoal font-light'
                }`}
              >
                {item.label}
                {/* Premium micro-animation: Hover underline expand in yellow */}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                {/* Active nav dot indicator: small #f5c800 dot below active link */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-yellow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Enroll Now Pill */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-yellow text-brand-navy font-sans text-[14px] font-semibold hover:bg-brand-yellowDeep transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-4 text-brand-charcoal focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-full h-[1px] bg-brand-charcoal transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
            }`}
          />
          <span
            className={`w-full h-[1px] bg-brand-charcoal transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-full h-[1px] bg-brand-charcoal transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[88px] left-4 right-4 bg-brand-primaryBg/95 backdrop-blur-xl border border-brand-border/40 rounded-[24px] shadow-[0_16px_40px_rgba(10,22,40,0.08)] flex flex-col p-8 gap-6 md:hidden z-40"
          >
            {navItems.map((item) => {
              const isActive = !activeProgram && activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick();
                  }}
                  className={`font-sans text-[18px] transition-colors duration-300 ${
                    isActive ? 'text-brand-charcoal font-semibold' : 'text-brand-grey hover:text-brand-charcoal font-light'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick();
              }}
              className="inline-flex items-center justify-center w-full py-3 rounded-full bg-brand-yellow text-brand-navy font-sans text-[15px] font-semibold hover:bg-brand-yellowDeep transition-all duration-300 mt-2"
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
