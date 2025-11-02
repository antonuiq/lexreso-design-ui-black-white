import React from 'react';
import { Button } from '../ui/Button';

export const Cta3: React.FC = () => {
    return (
        <div className="py-20">
            <div className="bg-gray-50 rounded-2xl px-8 md:px-12 py-16 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-6">Technologies & Approach</h2>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We use modern, secure tools and proprietary technologies to deliver fast and reliable solutions. Our approach combines automation, scalability, and compliance in one ecosystem.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            All systems are built with data protection, performance optimization, and future scalability in mind.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Button size="lg">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
