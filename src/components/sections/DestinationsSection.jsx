import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const destinations = [
  {
    id: 1,
    name: 'Europe',
    packages: '01 Package',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'South East Asia',
    packages: '03 Package',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Middle East',
    packages: '02 Package',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Vietnam',
    packages: '02 Package',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Africa',
    packages: '04 Package',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    name: 'Singapore & Malaysia',
    packages: '01 Package',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800'
  }
];

const DestinationsSection = () => {
  return (
    <Section className="py-16 md:py-[100px] bg-white">
      <Container className="max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-8">
          
          {/* Left Side */}
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-1 md:mb-4 text-text-muted border-none px-0 bg-transparent">
              <span className="text-primary mr-2">★</span> Popular destinations
            </Badge>
            <h2 className="text-[28px] md:text-[32px] font-semibold text-text-main leading-tight">
              Discover Our Most<br />Loved Travel Destinations
            </h2>
          </div>
          
          {/* Right Side */}
          <div className="max-w-lg flex flex-col items-start">
            <p className="text-text-main text-sm md:text-base leading-relaxed md:mb-6">
              Explore handpicked destinations filled with breathtaking landscapes, unforgettable experiences, and luxury travel moments across the world.
            </p>
            <Button variant="primary" className="hidden md:flex rounded-xl cursor-pointer px-6 py-3 mt-4 md:mt-0">
              Explore more destinations
            </Button>
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
                <h4 className="text-base md:text-[18px] text-text-main font-semibold">{dest.name}</h4>
                <span className="text-xs md:text-sm text-text-muted font-medium">{dest.packages}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-8 w-full">
          <Button variant="primary" className="rounded-xl cursor-pointer px-6 py-3 w-full">
            Explore more destinations
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default DestinationsSection;
