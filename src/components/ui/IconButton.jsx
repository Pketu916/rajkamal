import React from 'react';

const IconButton = ({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'gray'
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center w-10 h-10 transition-colors focus:outline-none rounded-xl border';
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-border-light text-text-main hover:border-primary hover:text-primary bg-transparent';
      case 'gray':
        return 'border-bg-alt bg-bg-alt text-text-main hover:bg-gray-200';
      case 'primary':
      default:
        return 'border-primary bg-primary text-white hover:bg-primary-hover';
    }
  };

  return (
    <button
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
