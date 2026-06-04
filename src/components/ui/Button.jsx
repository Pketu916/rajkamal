import React from 'react';

const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  ...props
}) => {
  // Base classes: Note we use rounded-xl per user preference
  const baseClasses = 'inline-flex items-center justify-center !font-medium transition-colors focus:outline-none !rounded-[12px] md:!rounded-[14px] cursor-pointer';
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white hover:bg-primary-hover';
      case 'secondary':
        return 'bg-bg-alt text-text-main hover:bg-gray-200';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-white';
      case 'ghost':
        return 'bg-transparent text-text-main hover:bg-bg-alt';
      default:
        return 'bg-primary text-white hover:bg-primary-hover';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-[22px] py-[14px] text-lg';
      case 'md':
      default:
        return 'px-[22px] py-2.5 md:py-[14px] text-base';
    }
  };

  return (
    <button
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
