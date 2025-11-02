import React from 'react';

const LogoPlaceholder = ({ name }: { name: string }) => (
    <div className="flex justify-center items-center h-12 text-gray-400 font-medium">{name}</div>
);

export const Logos2: React.FC = () => {
    const logos = ['Acme Inc', 'Stark Industries', 'Wayne Enterprises', 'Globex Corp', 'Cyberdyne', 'Umbrella Corp'];
    return (
        <div className="py-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5">
                {logos.map((logo) => (
                    <div key={logo} className="p-6 bg-gray-50 flex justify-center">
                        <LogoPlaceholder name={logo} />
                    </div>
                ))}
            </div>
        </div>
    );
};