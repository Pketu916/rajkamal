import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Section from '../ui/Section';
import Container from '../ui/Container';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';

import travelSolutionImg1 from '../../assets/images/Travel Solution/Travel Solution 1.png';
import travelSolutionImg2 from '../../assets/images/Travel Solution/Travel Solution 2.png';
import travelSolutionImg3 from '../../assets/images/Travel Solution/Travel Solution 3.png';
import travelSolutionImg4 from '../../assets/images/Travel Solution/Travel Solution 4.png';
import travelSolutionImg5 from '../../assets/images/Travel Solution/Travel Solution 5.png';
import travelSolutionImg6 from '../../assets/images/Travel Solution/Travel Solution 6.png';
import travelSolutionImg7 from '../../assets/images/Travel Solution/Travel Solution 7.png';
import travelSolutionImg8 from '../../assets/images/Travel Solution/Travel Solution 8.png';
import travelSolutionImg9 from '../../assets/images/Travel Solution/Travel Solution 9.png';

const solutions = [
  {
    title: 'Domestic Holiday Packages',
    desc: 'Explore beautiful destinations across India with carefully curated holiday experiences designed for families, couples, and adventure travelers.',
    btnText: 'Explore packages',
    image: travelSolutionImg1
  },
  {
    title: 'International Holiday Packages',
    desc: 'Discover world-class destinations with customized international tours, luxury stays, and seamless travel planning.',
    btnText: 'Explore packages',
    image: travelSolutionImg2
  },
  {
    title: 'Flight Booking',
    desc: 'Easy and hassle-free domestic and international flight bookings with flexible travel options and expert assistance.',
    btnText: 'Book your tickets',
    image: travelSolutionImg3
  },
  {
    title: 'Train Booking',
    desc: 'Convenient railway ticket booking services for smooth and comfortable travel experiences across destinations.',
    btnText: 'Book your tickets',
    image: travelSolutionImg4
  },
  {
    title: 'Hotel & Resort Booking',
    desc: 'Premium hotels, luxury resorts, and handpicked stays tailored to your comfort, style, and travel needs.',
    btnText: 'Find your stay',
    image: travelSolutionImg5
  },
  {
    title: 'Luxury Cruise Booking',
    desc: 'Experience unforgettable cruise vacations with premium onboard experiences, scenic destinations, and curated luxury journeys.',
    btnText: 'Explore cruises',
    image: travelSolutionImg6
  },
  {
    title: 'Visa Assistance',
    desc: 'Professional visa guidance and documentation support to simplify your international travel process.',
    btnText: 'Get visa support',
    image: travelSolutionImg7
  },
  {
    title: 'Travel Insurance',
    desc: 'Comprehensive travel protection for safe, secure, and worry-free journeys anywhere in the world.',
    btnText: 'Secure your journey',
    image: travelSolutionImg8
  },
  {
    title: 'Transfers',
    desc: 'Comfortable airport transfers and local transportation services for seamless travel from arrival to departures.',
    btnText: 'Book transfers',
    image: travelSolutionImg9
  }
];

const SolutionsSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Section className="bg-bg-alt overflow-hidden">
      <Container className="max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-6">
          <div className="max-w-3xl">
            <div className="max-w-[460px]">
              <h2 className="text-[26px] md:text-[32px] font-semibold text-text-main mb-2 md:mb-4 leading-tight">
                Curated Travel Solutions for Every Journey
              </h2>
            </div>
            <p className="text-text-muted text-sm md:text-lg leading-relaxed">
              From personalized holidays and luxury stays to visa assistance and seamless bookings, we provide complete travel services designed to make every journey smooth, comfortable, and unforgettable.
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className={`inline-flex items-center justify-center h-10 w-10 md:w-15 md:h-15 rounded-xl transition-colors focus:outline-none ${
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
                  <div className="absolute left-[6px] right-[6px] bottom-[6px] flex flex-col justify-end">
                    
                    {/* The Inner White Box */}
                    <div className="bg-white w-full p-4 md:p-6 flex flex-col rounded-xl shadow-lg border border-border-light/50 transition-all duration-500 ease-in-out">
                      
                      <h3 className="text-lg md:text-2xl text-text-main mb-2 md:mb-3 !font-normal leading-tight">
                        {solution.title}
                      </h3>
                      
                      {/* Text Section (Mobile: hidden by default. Desktop: visible by default. Shows on hover/tap) */}
                      <div className="grid grid-rows-[0fr] md:grid-rows-[1fr] group-hover:grid-rows-[1fr] group-active:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-text-muted text-sm md:text-base leading-relaxed line-clamp-4">
                            {solution.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Expansion Filler (Creates the huge white box effect on hover like in the Figma design) */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-active:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="h-[80px] md:h-[180px]"></div>
                        </div>
                      </div>
                      
                      {/* Button Container (Mobile: visible by default. Desktop: hidden by default. Shows on hover) */}
                      <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] group-active:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="pt-3 md:pt-4 opacity-100 md:opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-in-out">
                            <Button variant="primary">
                              {solution.btnText}
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className={`inline-flex items-center justify-center h-10 w-10 md:w-15 md:h-15 rounded-xl transition-colors focus:outline-none ${
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
