import React from 'react';

const Card = ({
  children,
  className = '',
  padding = 'md', // 'none' | 'sm' | 'md' | 'lg'
  hover = false,
  ...props
}) => {
  // Base classes: Note we use rounded-xl per user preference
  const baseClasses = 'bg-white border border-gray-200 overflow-hidden rounded-xl';
  
  const hoverClasses = hover ? 'transition-shadow duration-300 hover:shadow-lg' : '';

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      case 'md':
      default:
        return 'p-6';
    }
  };

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${getPaddingClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
