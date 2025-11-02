import React from 'react';
import { Button } from '../ui/Button';

export const Cta1: React.FC = () => {
    return (
        <div className="bg-black text-white rounded-lg px-8 md:px-12 py-16 md:py-20">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Ready to dive in?</h2>
                    <p className="mt-2 text-gray-300">Start your free trial today. No credit card required.</p>
                </div>
                <div className="mt-6 md:mt-0 flex-shrink-0">
                    <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-200">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};