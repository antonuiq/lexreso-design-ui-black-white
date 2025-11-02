import React from 'react';
import { CodeIcon, ZapIcon, GlobeIcon } from '../icons';
import type { Feature } from '../../types';

export const Features2: React.FC = () => {
    const features: Feature[] = [
        {
            icon: <ZapIcon />,
            title: 'Instant Previews for Every Push',
            description: 'Get shareable preview URLs for every git push, automatically. Collaborate with your team by commenting directly on any component, page, or element.',
        },
        {
            icon: <CodeIcon />,
            title: 'Infrastructure-from-Code',
            description: 'Our platform intelligently analyzes your framework to determine optimal build and infrastructure settings. No more complex YAML configurations.',
        },
        {
            icon: <GlobeIcon />,
            title: 'Dynamic at the Speed of Static',
            description: 'Enjoy the benefits of static sites with the power of dynamic rendering. Our global edge network serves content from the closest location to your users.',
        },
    ];

    return (
        <div className="py-20">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight">Everything you need to succeed</h2>
                <p className="mt-4 text-lg text-gray-600">
                    A fully-featured platform that grows with you.
                </p>
            </div>
            <div className="mt-12 space-y-12">
                {features.map((feature, index) => (
                    <div key={feature.title} className={`grid md:grid-cols-2 gap-12 items-center`}>
                        <div className={`${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                            <div className="p-3 inline-block bg-gray-100 rounded-lg">
                                {feature.icon}
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-80">
                           <img src={`https://picsum.photos/seed/${index}/600/400?grayscale`} alt={feature.title} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};