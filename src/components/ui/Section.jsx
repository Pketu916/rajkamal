import React from 'react';

const Section = ({
  children,
  className = '',
  bg = 'main', // 'main' | 'alt' | 'primary'
  paddingTop = 'full', // 'none' | 'half' | 'full'
  paddingBottom = 'full', // 'none' | 'half' | 'full'
}) => {
  const getPaddingTop = () => {
    switch (paddingTop) {
      case 'none': return 'pt-0';
      case 'half': return 'pt-8 md:pt-12';
      case 'full': return 'pt-16 md:pt-24';
      default: return 'pt-16 md:pt-24';
    }
  };

  const getPaddingBottom = () => {
    switch (paddingBottom) {
      case 'none': return 'pb-0';
      case 'half': return 'pb-8 md:pb-12';
      case 'full': return 'pb-16 md:pb-24';
      default: return 'pb-16 md:pb-24';
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
    <section className={`w-full ${getBgColor()} ${getPaddingTop()} ${getPaddingBottom()} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
