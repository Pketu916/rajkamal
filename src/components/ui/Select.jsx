import React from 'react';

const Select = ({
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props
}) => {
  return (
    <div className="relative">
      <select
        className={`w-full px-4 py-3 bg-white border border-border-light text-text-main appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-xl transition-colors ${className}`}
        {...props}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
