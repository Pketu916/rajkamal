import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import BadgeStarIcon from '../ui/BadgeStarIcon';

// Import data from the JSON file
import packagesData from '../../data/packages.json';

import popularPackagesImg1 from '../../assets/images/Popular Packages/Popular Packages 1.png';
import popularPackagesImg2 from '../../assets/images/Popular Packages/Popular Packages 2.png';
import popularPackagesImg3 from '../../assets/images/Popular Packages/Popular Packages 3.png';

const popularPackageImagesById = {
  1: popularPackagesImg1,
  2: popularPackagesImg2,
  3: popularPackagesImg3
};

const PopularPackagesSection = () => {
  // Use all packages except the first 4
  const popularPackages = packagesData.slice(4);

  return (
    <Section id="popular" className="bg-bg-alt">
      <Container className="max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-8">
          
          {/* Left Side */}
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-1 md:mb-4 text-text-muted border-none px-0 bg-transparent">
              <BadgeStarIcon /> Popular packages
            </Badge>
            <h2 className="text-[26px] md:text-[32px] font-semibold text-text-main leading-tight mb-2 md:mb-0">
              Explore Our Popular<br />Travel Packages
            </h2>
          </div>
          
          {/* Right Side */}
          <div className="max-w-[372px] flex flex-col items-start ">
            <p className="text-text-main text-sm md:text-base leading-relaxed md:mb-4 ">
              Curated domestic and international travel experiences designed for seamless and unforgettable journeys.
            </p>
            <a href="#packages" className="hidden md:inline-flex items-center justify-center bg-primary text-white hover:bg-primary-hover rounded-[12px] md:rounded-[14px] cursor-pointer px-6 py-3 mt-4 md:mt-0 font-medium transition-colors">
              Explore more packages
            </a>
          </div>
        </div>

        {/* 3-Column Grid of Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularPackages.map(pkg => (
            <a 
              key={pkg.id} 
              id={`package-${pkg.id}`}
              href={pkg.whatsappLink || `#package-${pkg.id}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col scroll-mt-24 md:scroll-mt-32 bg-[#f5f5f5] p-2 rounded-xl cursor-pointer transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-[220px] overflow-hidden rounded-xl mb-2 md:mb-3 flex-shrink-0">
                <img 
                  src={popularPackageImagesById[pkg.id] ?? pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Content Inner Box */}
              <div className="bg-white rounded-xl p-4 lg:p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[20px] md:text-[24px] text-text-main mb-3 leading-tight !font-normal">
                  {pkg.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>
                
                {/* Includes - Hidden as requested */}
                {/*
                <div className="mb-3">
                  <p className="text-base !text-[#090909CC] font-medium text-text-main mb-2">Includes</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    {pkg.includes.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex items-center text-[13px] md:text-sm text-text-main">
                          <svg className="w-3.5 h-3.5 text-primary mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </div>
                        {idx < pkg.includes.length - 1 && (
                          <span className="text-border-light select-none">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                */}
                
                {/* Duration */}
                <div className="mb-5 mt-auto">
                  <p className="text-base !text-[#090909CC] font-medium text-text-main mb-2">Duration</p>
                  <div className="flex items-center text-[13px] md:text-sm text-text-main">
                    <svg className="w-3.5 h-3.5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}></rect>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}></line>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}></line>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}></line>
                    </svg>
                    {pkg.duration}
                  </div>
                </div>
                
                {/* Explore Link */}
                <div >
                  <span className="inline-flex items-center text-primary text-sm md:text-base">
                    <span className="underline underline-offset-3 ">Explore Package</span>
                    {/* Rotate-45 by default (up-right), rotates to 0 (right) on hover */}
                    <svg  className="w-2 h-2 md:w-3 md:h-3 ml-1.5 md:ml-2 transform rotate-0 group-hover:rotate-45 transition-transform duration-300"  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5357 0.535645L0.535721 10.5356" stroke="#CA4700" stroke-width="1.07143" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5357 7.87136V0.535645H3.20001" stroke="#CA4700" stroke-width="1.07143" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-8 w-full">
          <a href="#packages" className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary-hover rounded-[12px] md:rounded-[14px] cursor-pointer px-6 py-3 w-full font-medium transition-colors">
            Explore more packages
          </a>
        </div>

      </Container>
    </Section>
  );
};

export default PopularPackagesSection;
