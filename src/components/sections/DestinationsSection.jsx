import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import BadgeStarIcon from '../ui/BadgeStarIcon';

import destinationsImg1 from '../../assets/images/Destinations/Destinations 1.webp';
import destinationsImg2 from '../../assets/images/Destinations/Destinations 2.webp';
import destinationsImg3 from '../../assets/images/Destinations/Destinations 3.webp';
import destinationsImg4 from '../../assets/images/Destinations/Destinations 4.webp';
import destinationsImg5 from '../../assets/images/Destinations/Destinations 5.webp';
import destinationsImg6 from '../../assets/images/Destinations/Destinations 6.webp';

import packagesDataFull from '../../data/packages.json';

const destinationsMap = {};
packagesDataFull.forEach(pkg => {
  const destName = pkg.destination || 'Other';
  if (!destinationsMap[destName]) {
    destinationsMap[destName] = {
      id: destName,
      name: destName,
      count: 0,
      image: pkg.image // Use the first package's image as the destination cover
    };
  }
  destinationsMap[destName].count += 1;
});

// Convert map to array and sort by count descending
const destinations = Object.values(destinationsMap)
  .sort((a, b) => b.count - a.count)
  .map(dest => ({
    ...dest,
    packages: `${dest.count < 10 ? '0' + dest.count : dest.count} Package${dest.count > 1 ? 's' : ''}`
  }));

const DestinationsSection = () => {
  return (
    <Section id="destinations" className="bg-white">
      <Container className="max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-8">
          
          {/* Left Side */}
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-1 md:mb-4 text-text-muted border-none px-0 bg-transparent">
              <BadgeStarIcon /> Popular destinations
            </Badge>
            <h2 className="text-[26px] md:text-[32px] font-semibold text-text-main leading-tight">
              Discover Our Most<br />Loved Travel Destinations
            </h2>
          </div>
          
          {/* Right Side */}
          <div className="max-w-lg flex flex-col items-start md:max-w-1/2">
            <p className="text-text-main text-sm md:text-base leading-relaxed md:mb-4">
              Explore handpicked destinations filled with breathtaking landscapes, unforgettable experiences, and luxury travel moments across the world.
            </p>
            <a href="#packages" className="hidden md:inline-flex items-center justify-center bg-primary text-white hover:bg-primary-hover rounded-[12px] md:rounded-[14px] cursor-pointer px-6 py-3 mt-4 md:mt-0 font-medium transition-colors">
              Explore more destinations
            </a>
          </div>
        </div>

        {/* 3-Column Grid of Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map(dest => (
            <div 
              key={dest.id} 
              className="relative group w-full h-[320px] md:h-[380px] overflow-hidden rounded-xl cursor-pointer shadow-sm"
            >
              {/* Background Image */}
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
              />
              
              {/* Inner White Box */}
              <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <h4 className="text-base md:text-[18px] text-text-main !font-normal">{dest.name}</h4>
                <span className="text-xs md:text-sm text-text-muted font-medium">{dest.packages}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-8 w-full">
          <a href="#packages" className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary-hover rounded-[12px] md:rounded-[14px] cursor-pointer px-6 py-3 w-full font-medium transition-colors">
            Explore more destinations
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default DestinationsSection;
