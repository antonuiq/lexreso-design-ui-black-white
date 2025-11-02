import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export const Gallery1: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/seed/g1/600/400', alt: 'Gallery image 1' },
    { src: 'https://picsum.photos/seed/g2/600/400', alt: 'Gallery image 2' },
    { src: 'https://picsum.photos/seed/g3/600/400', alt: 'Gallery image 3' },
    { src: 'https://picsum.photos/seed/g4/600/400', alt: 'Gallery image 4' },
    { src: 'https://picsum.photos/seed/g5/600/400', alt: 'Gallery image 5' },
    { src: 'https://picsum.photos/seed/g6/600/400', alt: 'Gallery image 6' },
  ];

  return (
    <div className="py-20">
      <SectionHeader
        kicker="Our Work"
        title="Visual Showcase"
        subtitle="A glimpse into the projects we're proud of."
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};