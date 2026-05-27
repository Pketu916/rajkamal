import React from 'react';

const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'gray'
  icon,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center py-1 text-text-xs !font-medium uppercase tracking-wider rounded-[14px] border';
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-[#81818133] text-primary bg-transparent';
      case 'gray':
        return 'border-border-light text-text-muted bg-bg-alt';
      case 'primary':
      default:
        return 'border-primary-light bg-primary-light text-primary';
    }
  };

  return (
    <span className={`${baseClasses} ${getVariantClasses()} ${className}`}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
