
import React from 'react';
import { Button } from '../ui/Button';

export const Hero2: React.FC = () => {
  return (
    <div className="relative py-24 sm:py-32">
       <div 
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          The Platform for Modern Web Experiences
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Build and deploy your applications with the performance and reliability of a global edge network. From frontend to backend, we've got you covered.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">Get started</Button>
          <a href="#" className="text-base font-semibold leading-7 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
