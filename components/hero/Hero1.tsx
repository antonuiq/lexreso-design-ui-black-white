
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from '../icons';

export const Hero1: React.FC = () => {
    return (
        <div className="text-center py-20 sm:py-28">
            <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <span className="text-xs bg-black rounded-full text-white px-3 py-1.5 mr-3">New</span>
                <span className="text-sm font-medium">Announcing our next round of funding.</span>
                <ArrowRight />
            </a>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter">
                Develop. Preview. <span className="block">Ship.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                The best development experience with a focus on performance, scalability, and security.
            </p>
            <div className="mt-8 flex justify-center items-center space-x-4">
                <Button size="lg">Start Deploying</Button>
                <Button size="lg" variant="secondary">Get a Demo</Button>
            </div>
        </div>
    );
};