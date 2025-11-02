
import React from 'react';
import { Button } from '../ui/Button';

export const Hero3: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 sm:py-24">
            <div className="text-left">
                <p className="text-base font-semibold text-gray-600 uppercase">Build, scale, succeed</p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Infrastructure for the Modern Internet
                </h1>
                <p className="mt-6 text-lg text-gray-500">
                    A composable platform with thoughtful defaults and global infrastructure, designed to help you build and scale your next big idea.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                    <Button size="lg">Contact Sales</Button>
                    <Button size="lg" variant="secondary">Explore Documentation</Button>
                </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <img src="https://picsum.photos/600/400?grayscale" alt="Product screenshot" className="rounded-lg shadow-xl"/>
            </div>
        </div>
    );
};
