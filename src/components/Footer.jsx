export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1628] border-t border-white/[0.08] p-[28px_64px] select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Left Branding */}
        <div className="font-sans font-medium text-white text-[15px]">
          Ocean Blue
        </div>

        {/* Center Location */}
        <div className="font-sans font-light text-[#cccccc] text-[13px]">
          Ahmedabad, Gujarat
        </div>

        {/* Right Copyright */}
        <div className="font-sans font-light text-[#888888]/50 text-[12px]">
          © 2025 Ocean Blue Spoken English
        </div>

      </div>
    </footer>
  );
}
