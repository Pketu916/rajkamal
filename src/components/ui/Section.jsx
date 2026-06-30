import React from 'react';

const Section = ({
  children,
  className = '',
  bg = 'main', // 'main' | 'alt' | 'primary'
  paddingTop = 'full', // 'none' | 'half' | 'full'
  paddingBottom = 'full', // 'none' | 'half' | 'full'
  id
}) => {
  const getPaddingTop = () => {
    switch (paddingTop) {
      case 'none': return 'pt-0';
      case 'half': return 'pt-6 md:pt-10';
      case 'full': return 'pt-10 md:pt-[60px]';
      default: return 'pt-10 md:pt-[60px]';
    }
  };

  const getPaddingBottom = () => {
    switch (paddingBottom) {
      case 'none': return 'pb-0';
      case 'half': return 'pb-6 md:pb-10';
      case 'full': return 'pb-10 md:pb-[60px]';
      default: return 'pb-10 md:pb-[60px]';
    }
  };

  const getBgColor = () => {
    switch (bg) {
      case 'alt': return 'bg-bg-alt';
      case 'primary': return 'bg-primary text-white';
      case 'main':
      default: return 'bg-bg-main';
    }
  };

  return (
    <section id={id} className={`w-full scroll-mt-24 md:scroll-mt-32 ${getBgColor()} ${getPaddingTop()} ${getPaddingBottom()} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
