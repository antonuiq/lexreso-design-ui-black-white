import React from 'react';

export const Gallery2: React.FC = () => {
    const images = [
        { src: 'https://picsum.photos/seed/m1/600/800', alt: 'Image 1', span: 'col-span-1' },
        { src: 'https://picsum.photos/seed/m2/800/600', alt: 'Image 2', span: 'col-span-1 md:col-span-2' },
        { src: 'https://picsum.photos/seed/m3/800/600', alt: 'Image 3', span: 'col-span-1 md:col-span-2' },
        { src: 'https://picsum.photos/seed/m4/600/800', alt: 'Image 4', span: 'col-span-1' },
    ];
    return (
        <div className="py-20">
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold tracking-tight">Project Highlights</h2>
                 <p className="mt-4 text-lg text-gray-600">Explore some of our favorite moments and creations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className={`${image.span} overflow-hidden rounded-lg group`}>
                         <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                ))}
            </div>
        </div>
    );
};