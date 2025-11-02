import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeIcon, ZapIcon, GlobeIcon, CheckCircle } from '../icons';
import type { Feature } from '../../types';

export const Features1: React.FC = () => {
    const features: Feature[] = [
        {
            icon: <ZapIcon />,
            title: 'Blazing Fast',
            description: 'Our infrastructure is built for extreme performance. Your users will experience lightning-fast load times, leading to higher engagement and satisfaction.',
        },
        {
            icon: <GlobeIcon />,
            title: 'Global Scale',
            description: 'Deploy your applications to our global edge network with a single command. We ensure low latency and high availability, no matter where your users are.',
        },
        {
            icon: <CodeIcon />,
            title: 'Developer Focused',
            description: 'We provide a seamless, intuitive experience designed to make developers more productive. Focus on your code, and let us handle the infrastructure.',
        },
        {
            icon: <CheckCircle />,
            title: 'Secure by Default',
            description: 'Benefit from automatic HTTPS, DDoS mitigation, and robust security protocols. We prioritize the safety and integrity of your applications and data.',
        },
    ];
    return (
        <div className="py-20">
            <SectionHeader
                kicker="Why Choose Us"
                title="A Better Way to Build"
                subtitle="Our platform is engineered for the modern web, providing an unparalleled experience for developers and users alike."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                    <div key={feature.title} className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white mx-auto">
                            {feature.icon}
                        </div>
                        <h3 className="mt-5 text-lg font-medium">{feature.title}</h3>
                        <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};