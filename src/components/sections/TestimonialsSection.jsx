import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Section from '../ui/Section';
import Container from '../ui/Container';

// Import testimonial data
import testimonialsData from '../../data/testimonials.json';

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Section className="bg-white overflow-hidden">
      <Container className="max-w-[1280px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-6">
          <div className="max-w-xl">
            <h2 className="text-[26px] md:text-[32px] font-semibold text-text-main leading-tight mb-2 md:mb-3">
              What Our Travelers Say
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-[420px]">
              Real experiences from travelers who explored the world with Rajkamal holidays.
            </p>
          </div>
          
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex gap-2 flex-shrink-0">
            <button 
              className={`inline-flex items-center justify-center h-10 w-10 md:w-15 md:h-15 rounded-xl transition-colors focus:outline-none ${
                isBeginning ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className={`inline-flex items-center justify-center h-10 w-10 md:w-15 md:h-15 rounded-xl transition-colors focus:outline-none ${
                isEnd ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
              }`}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-end ">
          
          {/* Left Column: Video Thumbnail */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div 
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group mb-4 shadow-sm"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Video Thumbnail Image */}
              <img 
                src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=800" 
                alt="Family walking by the lake" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <svg width="64" height="64" viewBox="0 0 99 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M79.8703 24.6598L47.103 5.93305C34.9728 -0.933424 23.3152 -1.86976 14.1782 3.28009C5.04113 8.42995 0 19.0418 0 32.7747V70.2282C0 83.9612 5.04113 94.573 14.1782 99.7228C18.1166 101.908 22.5275 103 27.0961 103C33.3975 103 40.1715 100.971 47.103 97.0699L79.8703 78.3431C92.0005 71.4766 98.617 61.8012 98.617 51.3454C98.617 40.8896 91.843 31.6823 79.8703 24.6598Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Watch Travel Moments text */}
            <button 
              className="flex items-center text-sm font-medium text-text-main hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.98 1.33301C4.3 1.33301 1.31334 4.31967 1.31334 7.99967C1.31334 11.6797 4.3 14.6663 7.98 14.6663C11.66 14.6663 14.6467 11.6797 14.6467 7.99967C14.6467 4.31967 11.6667 1.33301 7.98 1.33301ZM9.98 9.48634L8.04667 10.5997C7.80667 10.7397 7.54 10.8063 7.28 10.8063C7.01334 10.8063 6.75334 10.7397 6.51334 10.5997C6.03334 10.3197 5.74667 9.82634 5.74667 9.26634V7.03301C5.74667 6.47967 6.03334 5.97967 6.51334 5.69967C6.99334 5.41967 7.56667 5.41967 8.05334 5.69967L9.98667 6.81301C10.4667 7.09301 10.7533 7.58634 10.7533 8.14634C10.7533 8.70634 10.4667 9.20634 9.98 9.48634Z" fill="#171717"/>
              </svg>
              Watch Travel Moments
            </button>
          </div>

          {/* Right Column: Swiper Slider */}
          <div className="w-full min-w-0">
            <Swiper
              grabCursor={true}
              onInit={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onProgress={(swiper, progress) => {
                setIsBeginning(progress <= 0);
                setIsEnd(progress >= 1);
              }}
              slidesPerView="auto"
              spaceBetween={20}
              className="w-full !overflow-visible [clip-path:polygon(0_-100%,_200vw_-100%,_200vw_200%,_0_200%)]"
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide 
                  key={testimonial.id} 
                  className="max-w-[300px] md:max-w-[320px] flex !h-auto"
                >
                  <div className="bg-[#F2F2F2] rounded-xl p-6 md:p-8 flex flex-col w-full h-full shadow-sm">
                    {/* Big Quote Icon */}
                    <svg className="w-10 h-10 text-primary mb-4 md:mb-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 2 21L.995 19.34C4.305 18.232 5.969 15.393 5.969 12.019H2V3h7.983zm14.017 0v7.391C24 16.095 20.269 19.961 16 21l-1.005-1.66c3.31-1.108 4.974-3.947 4.974-7.321H16V3h8z"/>
                    </svg>
                    
                    {/* Testimonial Text */}
                    <p className="text-text-main text-sm md:text-[15px] leading-relaxed mb-8 md:mb-10 flex-grow">
                      {testimonial.quote}
                    </p>
                    
                    {/* User Info */}
                    <div className="flex items-center mt-auto flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-xl object-cover mr-4"
                      />
                      <div className="flex flex-col">
                        <h4 className=" text-text-main text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <span className="text-[11px] md:text-xs text-text-muted mt-0.5">
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-2 mt-8 w-full">
          <button 
            className={`inline-flex items-center justify-center h-10 w-10 md:w-15 md:h-15 rounded-xl transition-colors focus:outline-none ${
              isBeginning ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className={`inline-flex items-center justify-center h-10 w-10 md:w-15 md:h-15 rounded-xl transition-colors focus:outline-none ${
              isEnd ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </Container>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-xl text-white transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube Iframe */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/35npVaFGHMY?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </Section>
  );
};

export default TestimonialsSection;
