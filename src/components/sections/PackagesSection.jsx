import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

import pkg1 from '../../assets/images/Packages/Packages-1.png';
import pkg2 from '../../assets/images/Packages/Packages-2.png';

const packagesData = [
  {
    id: 1,
    title: 'Vietnam Escape',
    duration: '5 Nights / 6 Days',
    desc: 'Experience breathtaking landscapes, vibrant culture, scenic cruises, and unforgettable local experiences across Vietnam.',
    badge: '🔥 Limited Seats',
    includes: ['Flights', 'Hotel Stay', 'Breakfast', 'Sightseeing', 'Airport Transfers'],
    oldPrice: '₹79,999',
    newPrice: '₹59,999 / Person',
    saveText: 'Save Up To 25%',
    image: pkg1,
    imagePosition: 'left' // 'left' or 'right'
  },
  {
    id: 2,
    title: 'Bali Getaway',
    duration: '4 Nights / 5 Days',
    desc: 'Relax in tropical paradise with beautiful beaches, luxury resorts, island adventures, and peaceful retreats.',
    badge: '✨ Hot Deal',
    includes: ['Resort Stay', 'Airport Transfers', 'Breakfast', 'Island Tours'],
    oldPrice: '₹69,999',
    newPrice: '₹49,999 / Person',
    saveText: 'Save Up To 25%',
    image: pkg2,
    imagePosition: 'right'
  }
];

// Reusable Package Card Component
const PackageCard = ({ data }) => {
  const isLeft = data.imagePosition === 'left';
  
  return (
    <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-24 items-center w-full mb-16 md:mb-32 last:mb-0`}>
      {/* Image Side */}
      <div className="w-full lg:w-1/2">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-auto object-contain "
        />
      </div>
      
      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        {/* Badge */}
        <Badge variant="outline" className="mb-2 md:mb-4 text-text-main border-border-light rounded-xl px-4 py-1.5 shadow-sm">
          <span className="mr-2">{data.badge.split(' ')[0]}</span> 
          <span className="font-medium text-primary">{data.badge.split(' ').slice(1).join(' ')}</span>
        </Badge>
        
        {/* Title */}
        <h3 className="text-[20px] md:text-[24px] font-semibold text-text-main mb-2 md:mb-3">
          {data.title}
        </h3>
        
        {/* Duration */}
        <p className="font-bold text-text-main mb-2 md:mb-3">{data.duration}</p>
        
        {/* Description */}
        <p className="text-text-muted mb-4 md:mb-6 leading-relaxed max-w-lg">
          {data.desc}
        </p>
        
        {/* Includes */}
        <div className="mb-4 md:mb-6 w-full">
          <p className="text-base text-text-main font-medium mb-3">Includes</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 max-w-[300px]">
            {data.includes.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center text-[15px] text-text-main">
                  <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
                {idx < data.includes.length - 1 && (
                  <span className="text-border-light font-light select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Pricing */}
        <div className="items-center flex flex-wrap gap-4 mb-4 md:mb-6">
          <span className="text-text-muted line-through text-lg">{data.oldPrice}</span>
          <span className="text-base font-semibold text-text-main">{data.newPrice}</span>
          <span className="text-green-600 font-semibold text-sm flex items-center ml-2">
            {/* <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 24 24"> */}
            <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3431 4.51552C11.1965 4.33592 11.0715 4.13976 10.9707 3.93103C10.8941 3.70273 10.8421 3.46692 10.8155 3.22759C10.7889 2.68854 10.5873 2.17286 10.2414 1.75862C9.82436 1.41057 9.3047 1.20889 8.76207 1.18448C8.52624 1.15719 8.29393 1.10518 8.06896 1.02931C7.86385 0.927758 7.67118 0.802787 7.49483 0.656897C7.08287 0.278699 6.55719 0.0476909 6 0C5.44644 0.0499127 4.92473 0.280773 4.51552 0.656897C4.33592 0.803465 4.13976 0.928457 3.93103 1.02931C3.70273 1.10589 3.46692 1.1579 3.22759 1.18448C2.68854 1.21111 2.17286 1.41267 1.75862 1.75862C1.41057 2.17564 1.20889 2.6953 1.18448 3.23793C1.15719 3.47376 1.10518 3.70607 1.02931 3.93103C0.927758 4.13615 0.802787 4.32881 0.656897 4.50517C0.276687 4.91581 0.0453604 5.44221 0 6C0.0476139 6.55415 0.278789 7.07657 0.656897 7.48448C0.803465 7.66408 0.928457 7.86024 1.02931 8.06896C1.10589 8.29727 1.1579 8.53308 1.18448 8.77241C1.21111 9.31146 1.41267 9.82714 1.75862 10.2414C2.17564 10.5894 2.6953 10.7911 3.23793 10.8155C3.47726 10.8421 3.71308 10.8941 3.94138 10.9707C4.1465 11.0722 4.33916 11.1972 4.51552 11.3431C4.92473 11.7192 5.44644 11.9501 6 12C6.55356 11.9501 7.07527 11.7192 7.48448 11.3431C7.66408 11.1965 7.86024 11.0715 8.06896 10.9707C8.29727 10.8941 8.53308 10.8421 8.77241 10.8155C9.31146 10.7889 9.82714 10.5873 10.2414 10.2414C10.5894 9.82436 10.7911 9.3047 10.8155 8.76207C10.8421 8.52274 10.8941 8.28692 10.9707 8.05862C11.0722 7.8535 11.1972 7.66084 11.3431 7.48448C11.7212 7.07657 11.9524 6.55415 12 6C11.9524 5.44585 11.7212 4.92343 11.3431 4.51552ZM3.93103 4.44828C3.93103 4.34598 3.96137 4.24597 4.01821 4.16091C4.07504 4.07585 4.15582 4.00956 4.25034 3.97041C4.34485 3.93126 4.44885 3.92102 4.54918 3.94097C4.64952 3.96093 4.74168 4.01019 4.81402 4.08253C4.88636 4.15487 4.93562 4.24703 4.95558 4.34737C4.97554 4.4477 4.96529 4.5517 4.92614 4.64622C4.887 4.74073 4.8207 4.82151 4.73564 4.87835C4.65058 4.93518 4.55058 4.96552 4.44828 4.96552C4.31109 4.96552 4.17953 4.91102 4.08253 4.81402C3.98553 4.71702 3.93103 4.58546 3.93103 4.44828ZM5.39483 7.83621C5.34797 7.90736 5.28427 7.96584 5.20937 8.00644C5.13448 8.04705 5.05071 8.06852 4.96552 8.06896C4.86383 8.07013 4.76433 8.03938 4.68103 7.98103C4.56765 7.9052 4.48881 7.78764 4.46169 7.65395C4.43456 7.52026 4.46135 7.38128 4.53621 7.26724L6.60517 4.16379C6.63919 4.10037 6.68607 4.04475 6.74282 4.00048C6.79956 3.95621 6.86492 3.92427 6.93471 3.9067C7.0045 3.88913 7.07719 3.88632 7.14813 3.89844C7.21907 3.91057 7.2867 3.93737 7.34669 3.97712C7.40669 4.01688 7.45772 4.06871 7.49654 4.12932C7.53536 4.18992 7.5611 4.25796 7.57212 4.32908C7.58314 4.4002 7.5792 4.47284 7.56055 4.54235C7.54189 4.61186 7.50894 4.67671 7.46379 4.73276L5.39483 7.83621ZM7.55172 8.06896C7.44942 8.06896 7.34942 8.03863 7.26436 7.98179C7.1793 7.92496 7.113 7.84418 7.07386 7.74966C7.03471 7.65515 7.02446 7.55115 7.04442 7.45081C7.06438 7.35048 7.11364 7.25832 7.18598 7.18598C7.25832 7.11364 7.35048 7.06438 7.45081 7.04442C7.55115 7.02446 7.65515 7.03471 7.74966 7.07386C7.84418 7.113 7.92496 7.1793 7.98179 7.26436C8.03863 7.34942 8.06896 7.44942 8.06896 7.55172C8.06896 7.6889 8.01447 7.82047 7.91747 7.91747C7.82047 8.01447 7.6889 8.06896 7.55172 8.06896Z" fill="#00972D"/>
</svg>

            {data.saveText}
          </span>
        </div>
        
        {/* Button */}
        <Button variant="primary" className=" w-full md:w-auto flex items-center justify-center text-base px-8 py-3">
          <svg className="w-[18px] h-[18px] mr-2 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0.476183 17.3864C0.43625 17.5559 0.485922 17.7351 0.613511 17.8578C0.707986 17.9503 0.832654 18 0.96218 18C1.00504 18 1.04691 17.9951 1.08685 17.9854L5.14351 16.9306C6.3181 17.477 7.5716 17.7536 8.87854 17.7536C13.7727 17.7536 17.7553 13.772 17.7553 8.87679C17.7553 3.98261 13.771 0 8.87679 0C3.98261 0 0 3.98261 0 8.87679C0 10.5676 0.473335 12.2029 1.37425 13.6219L0.476183 17.3864ZM4.93203 4.92469L5.57484 4.31402C5.8193 4.08222 6.20596 4.09196 6.43776 4.33642L7.88604 5.86262C8.11785 6.10709 8.1081 6.49374 7.86364 6.72554L7.23056 7.32941C7.23056 7.32941 6.39294 7.83294 8.14803 9.52861L8.2201 9.60555C9.82325 11.4454 10.3696 10.635 10.3696 10.635L11.0027 10.0312C11.2472 9.79936 11.6338 9.8091 11.8656 10.0536L13.2896 11.5525C13.5214 11.7969 13.5116 12.1836 13.2672 12.4154L12.6244 13.0261C12.1335 13.4926 11.4449 13.7069 10.7816 13.5695C9.88168 13.3855 8.5347 12.7465 6.72696 10.9485C6.76202 10.9885 6.79708 11.0255 6.83215 11.0683L6.613 10.8385C6.65001 10.8784 6.688 10.9135 6.72501 10.9505C5.02253 9.05516 4.45372 7.67699 4.31639 6.76917C4.21899 6.09422 4.44114 5.39122 4.93203 4.92469Z" fill="white"/>
          </svg>
          Enquire on whatsApp
        </Button>
      </div>
    </div>
  );
};

const PackagesSection = () => {
  return (
    <Section className="py-16 md:py-[100px] bg-white">
      <Container className="max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-2 md:gap-6">
          <div className=" max-w-lg ">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-text-main leading-tight">
              Limited-Time Fixed Departure Packages
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-text-main text-sm md:text-base leading-relaxed">
              Discover exciting group departures to handpicked international destinations with seamless planning, curated experiences, and exclusive travel offers.
            </p>
          </div>
        </div>

        {/* Packages List */}
        <div className="flex flex-col w-full">
          {packagesData.map(pkg => (
            <PackageCard key={pkg.id} data={pkg} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PackagesSection;
