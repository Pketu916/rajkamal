import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Section from '../ui/Section';
import Container from '../ui/Container';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';

const solutions = [
  {
    title: 'Domestic Holiday Packages',
    desc: 'Explore beautiful destinations across India with carefully curated holiday experiences designed for families, couples, and adventure travelers.',
    btnText: 'Explore packages',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'International Holiday Packages',
    desc: 'Discover world-class destinations with customized international tours, luxury stays, and seamless travel planning.',
    btnText: 'Explore packages',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Flight Booking',
    desc: 'Easy and hassle-free domestic and international flight bookings with flexible travel options and expert assistance.',
    btnText: 'Book your tickets',
    image: 'https://images.unsplash.com/photo-1436491865332-7a6150090f14?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Train Booking',
    desc: 'Convenient railway ticket booking services for smooth and comfortable travel experiences across destinations.',
    btnText: 'Book your tickets',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Hotel & Resort Booking',
    desc: 'Premium hotels, luxury resorts, and handpicked stays tailored to your comfort, style, and travel needs.',
    btnText: 'Find your stay',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Luxury Cruise Booking',
    desc: 'Experience unforgettable cruise vacations with premium onboard experiences, scenic destinations, and curated luxury journeys.',
    btnText: 'Explore cruises',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Visa Assistance',
    desc: 'Professional visa guidance and documentation support to simplify your international travel process.',
    btnText: 'Get visa support',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Travel Insurance',
    desc: 'Comprehensive travel protection for safe, secure, and worry-free journeys anywhere in the world.',
    btnText: 'Secure your journey',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Transfers',
    desc: 'Comfortable airport transfers and local transportation services for seamless travel from arrival to departures.',
    btnText: 'Book transfers',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800'
  }
];

const SolutionsSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Section className="py-16 md:py-[100px] bg-bg-alt overflow-hidden">
      <Container className="max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-6">
          <div className="max-w-3xl">
            <div className="max-w-[460px]">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-text-main mb-2 md:mb-4 leading-tight">
                Curated Travel Solutions for Every Journey
              </h2>
            </div>
            <p className="text-text-muted text-sm md:text-lg leading-relaxed">
              From personalized holidays and luxury stays to visa assistance and seamless bookings, we provide complete travel services designed to make every journey smooth, comfortable, and unforgettable.
            </p>
          </div>
          
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex gap-4 flex-shrink-0">
            <button 
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors focus:outline-none ${
                isBeginning ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors focus:outline-none ${
                isEnd ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
              }`}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full">
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
            slidesPerView="auto"
            spaceBetween={20}
            className="w-full !overflow-visible"
          >
            {solutions.map((solution, idx) => (
              <SwiperSlide 
                key={idx} 
                className="max-w-[280px] sm:max-w-[400px]" 
              >
                {/* Solution Card with Border Radius and Smooth Hover */}
                <div className="group relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-200 rounded-xl cursor-pointer shadow-sm select-none">
                  
                  {/* Background Image */}
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
                  />
                  
                  {/* Content Overlay */}
                  {/* Smooth height transition using percentages */}
                  <div className="absolute left-[6px] right-[6px] bottom-[6px]  h-[45%] group-hover:h-[calc(100%-12px)]  transition-all duration-500 ease-in-out">
                    
                    {/* The Inner White Box */}
                    <div className="bg-white w-full h-full p-4 md:p-8 flex flex-col rounded-xl md:rounded-xl shadow-lg border border-border-light/50">
                      
                      <h3 className="text-lg md:text-2xl text-text-main mb-2 md:mb-3 font-semibold leading-tight">
                        {solution.title}
                      </h3>
                      
                      <p className="text-text-muted text-sm md:text-base leading-relaxed line-clamp-4">
                        {solution.desc}
                      </p>
                      
                      {/* Button Container - Hidden by default, reveals on hover */}
                      <div className="mt-auto pt-4 hidden group-hover:flex">
                        <Button variant="primary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {solution.btnText}
                        </Button>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-8 w-full">
          <button 
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors focus:outline-none ${
              isBeginning ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors focus:outline-none ${
              isEnd ? 'bg-[#F2F2F2] text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-hover cursor-pointer'
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </Container>
    </Section>
  );
};

export default SolutionsSection;
