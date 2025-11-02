
import React from 'react';
import { Button } from '../ui/Button';

export const Cta2: React.FC = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-lg sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start Building Your Next Idea
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Join thousands of developers deploying with our platform.
                Import your git repository and get started for free.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Deploy for Free
                </Button>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Contact Sales <span aria-hidden="true">→</span>
                </a>
            </div>
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};
