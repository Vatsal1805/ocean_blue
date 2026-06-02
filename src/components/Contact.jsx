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
      setFormData({ name: '', phone: '', program: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full bg-[#fafaf8] py-[120px] border-b border-[#dddbd4] relative overflow-hidden select-none">
      {/* High-visibility education doodle background sketch layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.1] mix-blend-multiply"
        style={{
          backgroundImage: "url('/doodle_bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "360px auto",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="font-sans font-medium text-[11px] text-brand-label tracking-[0.25em] uppercase mb-4 block">
            [ GET IN TOUCH ]
          </span>
          <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1a1a1a] font-normal leading-tight">
            Start Your Journey.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start overflow-hidden">
          
          {/* Left Column (Details & Map) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left w-full"
          >
            <h3 className="font-sans font-semibold text-[18px] text-[#1a1a1a] mb-2 leading-tight">
              Ocean Blue Education
            </h3>
            
            <div className="flex flex-col w-full mb-6">
              
              {/* Vastral Head Office Card */}
              <div className="bg-[#f3f2ee] border border-[#dddbd4] border-l-[3px] border-l-brand-yellow rounded-xl p-5 md:p-6 text-left shadow-sm">
                <span className="font-sans font-semibold text-[11px] uppercase tracking-[0.1em] text-brand-navy block mb-2 select-none">
                  Vastral Branch (Head Office)
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed mb-4">
                  107-114 First Floor, 220-228 Second Floor, Radhe Chamber, Opp. Madhav Part-4, Nr. Karnavati Cross Road, Vastral, Ahmedabad &ndash; 382418
                </p>
                <div className="flex flex-col gap-1 text-[13px] font-sans font-light text-[#555555]">
                  <div>Dhananjay Rajput: <strong className="font-semibold text-brand-navy">+91 80003 28054</strong></div>
                  <div>Niraj Rajput: <strong className="font-semibold text-brand-navy">+91 90335 52048</strong></div>
                  <div>Office: <strong className="font-semibold text-brand-navy">+91 99090 41161</strong></div>
                </div>
              </div>

              {/* Nikol Branch Card */}
              <div className="bg-[#f3f2ee] border border-[#dddbd4] border-l-[3px] border-l-brand-yellow rounded-xl p-5 md:p-6 text-left shadow-sm mt-4">
                <span className="font-sans font-semibold text-[11px] uppercase tracking-[0.1em] text-brand-navy block mb-2 select-none">
                  Nikol Branch
                </span>
                <p className="font-sans font-light text-[14px] text-[#555555] leading-relaxed mb-3">
                  Nikol, Ahmedabad
                </p>
                <div className="text-[13px] font-sans font-light text-[#555555]">
                  Phone: <strong className="font-semibold text-brand-navy">+91 80003 28054</strong>
                </div>
              </div>
            </div>

            <p className="font-sans font-light text-[13px] text-[#888888] mb-6 leading-none">
              Open: 7:00 AM &ndash; 9:00 PM &middot; Mon &ndash; Sat
            </p>

            {/* Google Map */}
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
            className="lg:col-span-6 w-full"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 bg-[#f3f2ee] border border-[#dddbd4] rounded-[24px] shadow-sm select-none">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-navy flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-[22px] text-[#1a1a1a] font-normal mb-2">Message Sent</h3>
                <p className="font-sans font-light text-[14px] text-[#888888] max-w-xs leading-relaxed">
                  Thank you! We will get in touch with you shortly to schedule your academic counseling session and seat booking.
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
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-brand-yellow transition-colors duration-200 outline-none"
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
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-brand-yellow transition-colors duration-200 outline-none"
                  />
                </div>

                {/* Program Selector Dropdown */}
                <div className="flex flex-col items-start w-full">
                  <select
                    required
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] focus:border-brand-yellow transition-colors duration-200 outline-none appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      backgroundSize: '16px'
                    }}
                  >
                    <option value="" disabled hidden>Select Program of Interest</option>
                    <option value="4th–10th Tuition (GSEB)">4th–10th Tuition (GSEB)</option>
                    <option value="4th–10th Tuition (CBSE/ICSE)">4th–10th Tuition (CBSE/ICSE)</option>
                    <option value="11th–12th Science">11th–12th Science</option>
                    <option value="11th–12th Commerce">11th–12th Commerce</option>
                    <option value="JEE Preparation">JEE Preparation</option>
                    <option value="NEET Preparation">NEET Preparation</option>
                    <option value="Foundation Courses">Foundation Courses</option>
                    <option value="IELTS Preparation">IELTS Preparation</option>
                    <option value="PTE Preparation">PTE Preparation</option>
                    <option value="Spoken English">Spoken English</option>
                    <option value="Basic English">Basic English</option>
                    <option value="Reading & Writing">Reading & Writing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="flex flex-col items-start w-full">
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full bg-[#f3f2ee] border border-[#dddbd4] rounded-[10px] p-[14px_16px] font-sans font-light text-[15px] text-[#1a1a1a] placeholder-[#999999] focus:border-brand-yellow transition-colors duration-200 outline-none h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-yellow text-brand-navy font-sans font-semibold text-[15px] py-[14px] rounded-[10px] hover:bg-brand-yellowDeep transition-all duration-300 shadow-sm cursor-pointer select-none"
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
