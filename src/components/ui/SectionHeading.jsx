import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  rightContent,
  className = ''
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 ${className}`}>
      <div className="max-w-2xl">
        <h2 className="text-text-4xl md:text-text-5xl font-bold text-text-main mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-muted text-text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {rightContent && (
        <div className="flex-shrink-0">
          {rightContent}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
