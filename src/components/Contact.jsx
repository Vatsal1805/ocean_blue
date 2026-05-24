import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact({ prefilledProgram }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    program: prefilledProgram || '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, program: prefilledProgram }));
    }
  }, [prefilledProgram]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full bg-[#fafaf8] py-[120px] border-b border-[#dddbd4] relative overflow-hidden">
      {/* High-visibility education doodle background sketch layer with multiply blend mode */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.1] mix-blend-multiply"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
            [ FREE FLUENCY ASSESSMENT ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
            Book Your Speaking Audit.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start overflow-hidden">
          
          {/* Left Column (Details & Map) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start text-left w-full"
          >
            <h3 className="font-sans font-semibold text-[20px] text-[#1a1a1a] mb-6 leading-tight">
              Ocean Blue Education
            </h3>
            
            <div className="flex flex-col gap-6 w-full mb-8">
              {/* Vastral Branch */}
              <div>
                <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-[#0a1628] block mb-1">
                  Vastral Branch (Head Office)
                </span>
                <p className="font-sans font-light text-[15px] text-[#888888] leading-relaxed max-w-sm mb-1">
                  Radhe Chamber, 110, Vastral, Ahmedabad, Gujarat 382418
                </p>
                <span className="font-sans font-medium text-[15px] text-[#1a1a1a]">
                  +91 90335 52048
                </span>
              </div>

              {/* Nikol Branch */}
              <div>
                <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-[#0a1628] block mb-1">
                  Nikol Branch
                </span>
                <p className="font-sans font-light text-[15px] text-[#888888] leading-relaxed max-w-sm mb-1">
                  Nikol Main Road, Nikol, Ahmedabad, Gujarat 382350
                </p>
                <span className="font-sans font-medium text-[15px] text-[#1a1a1a]">
                  +91 80003 28054
                </span>
              </div>
            </div>

            <p className="font-sans font-light text-[14px] text-[#888888] mb-8 leading-none">
              Timing: 7:00 AM – 9:00 PM
            </p>

            {/* Real Interactive Google Map */}
            <div className="w-full rounded-[12px] overflow-hidden border border-[#dddbd4] h-[180px] relative">
              <iframe
                title="Ocean Blue Vastral Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1189445422894!2d72.65651527606132!3d22.99920151676646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87178cb7194f%3A0xb3de38ea346bd400!2sRadhe%20Chamber%2C%20Vastral%2C%20Ahmedabad%2C%20Gujarat%20382418!5e0!3m2!1sen!2sin!4v1716548000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column (Premium Application Form) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 bg-[#f3f2ee] border border-[#dddbd4] rounded-[12px]">
                <div className="w-12 h-12 rounded-full bg-[#0a1628] text-white flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-[22px] text-[#1a1a1a] font-normal mb-2">Message Sent</h3>
                <p className="font-sans font-light text-[14px] text-[#888888] max-w-xs leading-relaxed">
                  Thank you! We will get in touch with you shortly to schedule your spoken English audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                {/* Name Field */}
                <div className="flex flex-col items-start w-full">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-[#0a1628] transition-colors duration-200 outline-none"
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col items-start w-full">
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-[#0a1628] transition-colors duration-200 outline-none"
                  />
                </div>

                {/* Program Interest Field */}
                <div className="flex flex-col items-start w-full">
                  <input
                    required
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    placeholder="Program of Interest (e.g. JEE Prep, Spoken English)"
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-[#0a1628] transition-colors duration-200 outline-none"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col items-start w-full">
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-[#0a1628] transition-colors duration-200 outline-none h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0a1628] text-white font-sans font-medium text-[15px] py-[14px] rounded-[10px] hover:bg-opacity-95 transition-all duration-300 shadow-sm cursor-pointer select-none"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
