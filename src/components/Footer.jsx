import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy border-t border-white/[0.08] relative overflow-hidden select-none pt-16 pb-8">
      {/* Subtle tiled background doodle overlay for visual continuity (1.5% opacity on dark background) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.015] invert"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand, Mission & Partners */}
          <div className="flex flex-col items-start text-left">
            <Link
              to="/"
              className="flex items-center gap-1.5 font-sans font-medium text-[20px] text-white tracking-tight mb-5 hover:text-brand-yellow transition-colors duration-200"
            >
              Ocean Blue Education
              <span className="w-[8px] h-[8px] rounded-full bg-brand-yellow animate-pulse" />
            </Link>
            <p className="font-sans font-light text-[14px] text-[#cccccc] leading-relaxed mb-6 max-w-xs">
              An elite academic sanctuary in Ahmedabad, dedicated to 4th to 12th tuition excellence, entrance prep success (JEE/NEET), and global language mastery.
            </p>
            
            {/* Director Contact details */}
            <div className="flex flex-col gap-2.5 font-sans font-light text-[13px] text-[#cccccc] mb-6 w-full">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                <span>Dhananjay Rajput: <strong className="font-semibold text-white">+91 80003 28054</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                <span>Niraj Rajput: <strong className="font-semibold text-white">+91 90335 52048</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                <span>Office: <strong className="font-semibold text-white">+91 99090 41161</strong></span>
              </div>
              <div className="flex items-center gap-2.5 mt-1 pt-1 border-t border-white/[0.05]">
                <Mail className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                <span>info@oceanblue.education</span>
              </div>
            </div>

            {/* IDP & Pearson Authorized Partner badges */}
            <div className="flex flex-col gap-2 w-full pt-1">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-white/40 block">
                Official Partner Placeholders:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="text-[9px] font-sans font-semibold uppercase tracking-wider text-brand-yellow px-2 py-1 bg-white/[0.06] rounded border border-white/[0.1] select-none hover:bg-white/[0.1] transition-colors duration-200">
                  IDP IELTS Partner
                </span>
                <span className="text-[9px] font-sans font-semibold uppercase tracking-wider text-brand-yellow px-2 py-1 bg-white/[0.06] rounded border border-white/[0.1] select-none hover:bg-white/[0.1] transition-colors duration-200">
                  Pearson PTE Partner
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-white/50 mb-6">
              Our Tracks
            </h4>
            <nav className="flex flex-col gap-3.5 font-sans font-light text-[14px] text-[#cccccc]">
              <Link to="/courses#primary" className="hover:text-brand-yellow transition-colors duration-200">
                4-10 Secondary Tuitions
              </Link>
              <Link to="/courses#senior" className="hover:text-brand-yellow transition-colors duration-200">
                11th–12th Sci & Com Cohorts
              </Link>
              <Link to="/courses#jee-neet" className="hover:text-brand-yellow transition-colors duration-200">
                JEE Main & Advanced Prep
              </Link>
              <Link to="/courses#jee-neet" className="hover:text-brand-yellow transition-colors duration-200">
                NEET UG Medical Coaching
              </Link>
              <Link to="/courses#language" className="hover:text-brand-yellow transition-colors duration-200">
                IELTS & PTE Academic
              </Link>
              <Link to="/courses#language" className="hover:text-brand-yellow transition-colors duration-200">
                Spoken English & Fluency
              </Link>
            </nav>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-white/50 mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3.5 font-sans font-light text-[14px] text-[#cccccc]">
              <Link to="/" className="hover:text-brand-yellow transition-colors duration-200">
                Home
              </Link>
              <Link to="/courses" className="hover:text-brand-yellow transition-colors duration-200">
                Programs
              </Link>
              <Link to="/ielts" className="hover:text-brand-yellow transition-colors duration-200">
                IELTS & PTE
              </Link>
              <Link to="/#why-choose-us" className="hover:text-brand-yellow transition-colors duration-200">
                Why Us
              </Link>
              <Link to="/results" className="hover:text-brand-yellow transition-colors duration-200">
                Results
              </Link>
              <Link to="/#contact" className="hover:text-brand-yellow transition-colors duration-200">
                Demo
              </Link>
            </nav>
          </div>

          {/* Column 4: Our Branches */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-white/50 mb-6">
              Our Locations
            </h4>
            <div className="flex flex-col gap-5 font-sans font-light text-[14px] text-[#cccccc] w-full">
              {/* Vastral Head Office */}
              <div>
                <span className="font-sans font-medium text-[13px] text-white block mb-1">
                  Vastral Branch (Head Office)
                </span>
                <div className="flex items-start gap-2 text-[13px] text-[#cccccc] leading-relaxed">
                  <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                  <span>107-114 First Floor, 220-228 Second Floor, Radhe Chamber, Vastral, Ahmedabad - 382418</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#cccccc] mt-1.5">
                  <Phone className="w-3.5 h-3.5 text-white/40" />
                  <span>+91 80003 28054</span>
                </div>
              </div>

              {/* Nikol Branch */}
              <div>
                <span className="font-sans font-medium text-[13px] text-white block mb-1">
                  Nikol Branch
                </span>
                <div className="flex items-start gap-2 text-[13px] text-[#cccccc] leading-relaxed">
                  <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                  <span>Nikol Main Road, Nikol, Ahmedabad - 382350</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#cccccc] mt-1.5">
                  <Phone className="w-3.5 h-3.5 text-white/40" />
                  <span>+91 80003 28054</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/[0.08] mb-8" />

        {/* Bottom Bar: Copyright & Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 font-sans font-light text-[12px] text-[#888888] relative z-10">
          <div>
            © 2026 Ocean Blue Education. All rights reserved.
          </div>
          <div className="font-sans font-light italic text-[13px] text-white/40 my-2 sm:my-0">
            "Where Education Meets Success"
          </div>
          <div className="flex items-center gap-6">
            <span>Vastral & Nikol, Ahmedabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
