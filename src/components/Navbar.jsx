import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className="fixed top-4 left-4 right-4 md:left-12 md:right-12 h-[64px] px-8 md:px-10 flex items-center justify-between z-50 bg-brand-primaryBg/75 backdrop-blur-xl border border-brand-border/40 rounded-full shadow-[0_8px_30px_rgba(10,22,40,0.03)] transition-all duration-300"
      >
        {/* Left Side: Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-1.5 font-sans font-medium text-[18px] text-brand-charcoal tracking-tight select-none"
        >
          Ocean Blue
          <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans font-light text-[15px] text-brand-grey hover:text-brand-charcoal transition-colors duration-300 relative group"
            >
              {item.label}
              {/* Premium micro-animation: Hover underline expand in navy */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-brand-navy transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side: Enroll Now Pill */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-navy text-brand-white font-sans text-[14px] font-medium border border-brand-navy hover:bg-transparent hover:text-brand-navy transition-all duration-300"
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans font-light text-[18px] text-brand-grey hover:text-brand-charcoal transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full py-3 rounded-full bg-brand-navy text-brand-white font-sans text-[15px] font-medium border border-brand-navy hover:bg-transparent hover:text-brand-navy transition-all duration-300 mt-2"
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
