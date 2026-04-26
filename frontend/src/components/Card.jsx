import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, title, subtitle, footer }) => {
  return (
    <div className={twMerge('glass-card p-6 transition-all duration-300 hover:border-border-hover', className)}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-bold text-text-main tracking-tight">{title}</h3>}
          {subtitle && <p className="text-sm text-text-muted mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="relative">
        {children}
      </div>
      {footer && (
        <div className="mt-6 pt-6 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
