import React, { useState } from 'react';
import { CloseIcon } from '../icons';

export const Banner2: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-gray-100 border-b border-gray-200">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-black">
                    <a href="#" className="underline hover:text-gray-700">
                        Join our conference on June 7th &rarr;
                    </a>
                </p>
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                   <CloseIcon />
                </button>
            </div>
        </div>
    );
};