import React from 'react';

interface Step {
    step: string;
    title: string;
    description: string;
}

export const HowItWorks1: React.FC = () => {
    const steps: Step[] = [
        {
            step: 'Step 1',
            title: 'Send email',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            step: 'Step 2',
            title: 'Meet online',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            step: 'Step 3',
            title: 'Price estimation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            step: 'Step 4',
            title: 'Work together',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            step: 'Step 5',
            title: 'Review results',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            step: 'Step 6',
            title: 'Launch project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
    ];

    return (
        <div className="py-20">
            <div className="mb-12">
                <h2 className="text-4xl font-bold tracking-tight">Working process</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                {steps.map((step) => (
                    <div
                        key={step.step}
                        className="group pb-8 border-b border-gray-200 hover:border-black transition-colors duration-300"
                    >
                        <div className="grid grid-cols-[auto_1fr] gap-8">
                            <div className="text-sm text-gray-500">{step.step}</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
