import React, { useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import bgImage from '../../assets/images/Form/Form Image.png';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    groupSize: '01',
    preferredDestination: '',
    mealPlan: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!googleScriptUrl) {
      setSubmitStatus({
        type: 'error',
        message:
          'Google Sheets webhook is not configured. Add VITE_GOOGLE_SHEETS_WEBHOOK_URL in your .env file.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const submittedAtIndia = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date());

      const payload = JSON.stringify({
        ...formData,
        submittedAt: submittedAtIndia
      });

      await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });

      setSubmitStatus({
        type: 'success',
        message: 'Inquiry submitted successfully.'
      });
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        groupSize: '01',
        preferredDestination: '',
        mealPlan: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to submit right now. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="relative w-full py-16 lg:py-[100px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage} 
          alt="Beautiful landscape background" 
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-10 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mt-0 md:mt-10">
            <h2 className="text-[28px] md:text-[48px] leading-[1.1] font-semibold text-text-main mb-2 md:mb-6">
              Let's Turn Your Travel Dreams Into Reality
            </h2>
            <p className="text-text-main font-medium text-base md:text-lg mb-8 md:mb-10 max-w-[500px] leading-relaxed">
              From dream vacations and luxury stays to visa assistance and seamless travel planning Rajkamal holidays is here to make every journey effortless, memorable, and stress-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="px-8 py-3.5 text-base shadow-lg hover:shadow-xl cursor-pointer">
                Discover your journey
              </Button>
              {/* Secondary button using backdrop blur */}
              <button className="rounded-xl px-8 py-3.5 bg-white/30 border border-white/60 hover:bg-white/50 text-text-main font-semibold backdrop-blur-md transition-all shadow-sm cursor-pointer">
                Talk to our expert
              </button>
            </div>
          </div>

          {/* Right Side: Form with Glassmorphism (Blur effect) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#00000066] backdrop-blur-xl rounded-xl p-6 md:p-10 border border-white/20 shadow-2xl">
              <h3 className="text-white text-[28px] md:text-[32px] mb-6 md:mb-8">
                Let's Plan Your Holiday
              </h3>
              
              <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label className="text-white text-[15px] font-semibold mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm" 
                      placeholder="Enter your full name" 
                      required
                    />
                  </div>
                  
                  {/* Email Address */}
                  <div className="flex flex-col">
                    <label className="text-white text-[15px] font-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm" 
                      placeholder="Enter your email address" 
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-col">
                    <label className="text-white text-[15px] font-semibold mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm" 
                      placeholder="Enter your phone number" 
                      required
                    />
                  </div>

                  {/* Group Size */}
                  <div className="flex flex-col">
                    <label className="text-white text-[15px] font-semibold mb-2">Group Size</label>
                    <div className="relative">
                      <select
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="w-full bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm appearance-none"
                      >
                        <option value="01" className="text-text-main">01</option>
                        <option value="02" className="text-text-main">02</option>
                        <option value="03" className="text-text-main">03</option>
                        <option value="04+" className="text-text-main">04+</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Destination */}
                  <div className="flex flex-col">
                    <label className="text-white text-[15px] font-semibold mb-2">Preferred Destination</label>
                    <div className="relative">
                      <select
                        name="preferredDestination"
                        value={formData.preferredDestination}
                        onChange={handleChange}
                        className="w-full bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm appearance-none"
                        required
                      >
                        <option value="" disabled className="text-text-main">Select your destination</option>
                        <option value="europe" className="text-text-main">Europe</option>
                        <option value="asia" className="text-text-main">Asia</option>
                        <option value="middle-east" className="text-text-main">Middle East</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Meal Plan */}
                  <div className="flex flex-col">
                    <label className="text-white text-[15px] font-semibold mb-2">Meal Plan</label>
                    <div className="relative">
                      <select
                        name="mealPlan"
                        value={formData.mealPlan}
                        onChange={handleChange}
                        className="w-full bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm appearance-none"
                        required
                      >
                        <option value="" disabled className="text-text-main">Select your meal</option>
                        <option value="breakfast" className="text-text-main">Breakfast</option>
                        <option value="half-board" className="text-text-main">Half Board</option>
                        <option value="full-board" className="text-text-main">Full Board</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Message */}
                <div className="flex flex-col md:mt-2">
                  <label className="text-white text-[15px] font-semibold mb-2">Message</label>
                  <textarea 
                    rows="2" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF33] border border-white/30 rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-black/40 transition-all text-sm resize-none" 
                    placeholder="Share your travel preferences, dates, or special requirements"
                  ></textarea>
                </div>

                {submitStatus.message && (
                  <p
                    className={`text-sm font-medium ${
                      submitStatus.type === 'success' ? 'text-green-300' : 'text-red-300'
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                )}
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-text-main font-bold text-base rounded-xl py-4 hover:bg-gray-100 transition-colors md:mt-2 shadow-lg cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default ContactFormSection;
