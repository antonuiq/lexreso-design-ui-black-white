import React from 'react';

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="h-10 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">{name}</div>
);

export const Logos1: React.FC = () => {
    const logos = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];
    return (
        <div className="py-20">
            <h2 className="text-center text-base font-semibold text-gray-600">
                Trusted by the world’s most innovative teams
            </h2>
            <div className="mt-8 flex justify-center items-center gap-x-8 sm:gap-x-12 flex-wrap">
                {logos.map((logo) => (
                     <div key={logo} className="grayscale hover:grayscale-0 transition-all">
                        <LogoPlaceholder name={logo} />
                    </div>
                ))}
            </div>
        </div>
    );
};