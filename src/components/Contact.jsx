import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
    <section id="contact" className="w-full bg-[#fafaf8] py-[120px] border-b border-[#dddbd4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="font-sans font-light text-[11px] text-[#999999] tracking-[0.25em] uppercase mb-4 block">
            [ GET IN TOUCH ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
            Start Your Journey.
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
            <h3 className="font-sans font-semibold text-[18px] text-[#1a1a1a] mb-2 leading-tight">
              Ocean Blue Spoken English
            </h3>
            
            <p className="font-sans font-light text-[15px] text-[#888888] mb-4 leading-relaxed max-w-md">
              Radhe Chamber, 110, Vastral, Ahmedabad, Gujarat 382418
            </p>

            <span className="font-sans font-medium text-[15px] text-[#1a1a1a] mb-2 block leading-none">
              090335 52048
            </span>

            <p className="font-sans font-light text-[14px] text-[#888888] mb-8 leading-none">
              Open until 8:00 PM
            </p>

            {/* Map Placeholder Box */}
            <div className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[12px] h-[180px] flex flex-col items-center justify-center select-none">
              <i className="ti ti-map-pin text-[32px] text-[#dddbd4] mb-2" />
              <span className="font-sans font-light text-[13px] text-[#999999] tracking-wide">
                Vastral, Ahmedabad
              </span>
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
