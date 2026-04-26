import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({ label, error, className, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-sm font-semibold text-text-muted ml-1 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={twMerge(
          'input-field',
          error && 'border-red-500/50 focus:ring-red-500/20 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-400 mt-1.5 ml-1 font-medium">{error}</p>
      )}
    </div>
  );
};

export default Input;
