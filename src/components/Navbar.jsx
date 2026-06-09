import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';

const logoUrl = new URL('../../Assets/our team/logo.png', import.meta.url).href;

export default function Navbar({ activeProgram, closeProgram }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', to: '/' },
    { label: 'COURSES', to: '/courses' },
    { label: 'IELTS', to: '/ielts' },
    { label: 'ABOUT US', to: '/about' },
    { label: 'RESULTS', to: '/results' },
  ];

  const handleNavClick = () => {
    if (activeProgram) {
      closeProgram();
    }
  };

  const handleEnquiryClick = () => {
    setMobileMenuOpen(false);
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
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-2 font-sans font-medium text-[18px] text-brand-charcoal tracking-tight select-none cursor-pointer"
        >
          <img
            src={logoUrl}
            alt="Ocean Blue Education & Spoken English Logo"
            className="w-8 h-8 object-contain flex-shrink-0"
          />
          <span className="hidden sm:inline">Ocean Blue Education & Spoken English</span>
          <span className="sm:hidden">Ocean Blue</span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={handleNavClick}
              className={({ isActive }) => 
                `font-sans text-[13px] tracking-widest font-semibold transition-colors duration-300 relative group py-1 select-none cursor-pointer ${
                  isActive ? 'text-brand-charcoal' : 'text-brand-grey hover:text-brand-charcoal'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {/* Hover underline expand in yellow */}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                  {/* Active nav dot indicator centered below */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-brand-yellow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Side: Enquiry Pill CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/#contact"
            onClick={handleNavClick}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-yellow text-[#1a1a1a] font-sans text-[14px] font-medium hover:bg-brand-yellowDeep transition-all duration-300 select-none shadow-sm cursor-pointer"
          >
            Enquiry
          </Link>
        </div>

        {/* Mobile Hamburger Toggle (Visible on Mobile Only) */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col justify-between w-6 h-4 text-brand-charcoal focus:outline-none cursor-pointer"
          aria-label="Open Menu"
        >
          <span className="w-full h-[1.5px] bg-brand-charcoal" />
          <span className="w-full h-[1.5px] bg-brand-charcoal" />
          <span className="w-full h-[1.5px] bg-brand-charcoal" />
        </button>
      </header>

      {/* Full-Screen Sliding Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-brand-primaryBg z-50 flex flex-col justify-between p-8 md:hidden"
          >
            {/* Header / Top Row */}
            <div className="flex items-center justify-between w-full h-[64px]">
              <Link
                to="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick();
                }}
                className="flex items-center gap-2 font-sans font-medium text-[18px] text-brand-charcoal tracking-tight select-none"
              >
                <img
                  src={logoUrl}
                  alt="Ocean Blue Education & Spoken English Logo"
                  className="w-8 h-8 object-contain flex-shrink-0"
                />
                <span className="hidden sm:inline">Ocean Blue Education & Spoken English</span>
                <span className="sm:hidden">Ocean Blue</span>
              </Link>

              {/* Close Button X */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-8 h-8 focus:outline-none cursor-pointer"
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6 text-brand-charcoal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Centered Navigation Links */}
            <nav className="flex flex-col items-center justify-center gap-8 my-auto select-none">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick();
                  }}
                  className={({ isActive }) => 
                    `font-sans text-[18px] font-medium tracking-widest transition-colors duration-300 relative py-1 cursor-pointer ${
                      isActive ? 'text-brand-charcoal font-semibold' : 'text-brand-grey'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Bottom Actions - Full Width Enquiry */}
            <div className="w-full pb-8">
              <Link
                to="/#contact"
                onClick={handleEnquiryClick}
                className="inline-flex items-center justify-center w-full py-4 rounded-full bg-brand-yellow text-[#1a1a1a] font-sans text-[15px] font-semibold hover:bg-brand-yellowDeep transition-all duration-300 select-none shadow-md cursor-pointer text-center"
              >
                Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
