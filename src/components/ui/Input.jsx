import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-3 bg-white border border-border-light text-text-main placeholder-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors ${className}`}
      {...props}
    />
  );
};

export default Input;
