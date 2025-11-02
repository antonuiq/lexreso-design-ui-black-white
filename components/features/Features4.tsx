import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import type { Feature } from '../../types';

export const Features4: React.FC = () => {
    const features: Feature[] = [
        {
            title: 'Creative ideas',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            title: 'Expert in tools',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            title: 'Pixel-perfect design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            title: 'Clean & minimal design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            title: 'Modern & responsive',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            title: 'Fast performance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
    ];

    return (
        <div className="py-20">
            <SectionHeader
                kicker=""
                title="Why choose me?"
                subtitle=""
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={feature.title}
                        className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
                    >
                        <div className="text-sm text-gray-500 mb-6 group-hover:text-gray-300">
                            [{String(index + 1).padStart(2, '0')}]
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-600 group-hover:text-gray-300">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
