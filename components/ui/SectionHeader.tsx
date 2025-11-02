
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  kicker?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, kicker, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      {kicker && <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{kicker}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};
