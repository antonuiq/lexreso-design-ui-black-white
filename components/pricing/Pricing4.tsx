import React from 'react';

interface ServiceItem {
    number: string;
    service: string;
    subServices: string[];
}

export const Pricing4: React.FC = () => {
    const serviceItems: ServiceItem[] = [
        {
            number: '01',
            service: 'Branding',
            subServices: ['Logo design', 'Creative direction', 'Identity design'],
        },
        {
            number: '02',
            service: 'Product Design',
            subServices: ['Design system', 'Prototyping', 'User Interface design'],
        },
        {
            number: '03',
            service: 'Development',
            subServices: ['Web apps', 'Landing pages', 'Websites'],
        },
        {
            number: '04',
            service: 'Art Direction',
            subServices: ['Brand guidelines', 'Creative direction', 'Custom solutions'],
        },
        {
            number: '05',
            service: 'Motion Design',
            subServices: ['Logo Animation', '2D & 3D Animation', 'Motion Graphics'],
        },
    ];

    return (
        <div className="py-20">
            <div className="mb-12">
                <h2 className="text-4xl font-bold tracking-tight">Services</h2>
            </div>
            <div className="space-y-0">
                {serviceItems.map((item) => (
                    <div
                        key={item.number}
                        className="group py-8 border-b border-gray-200 hover:border-black transition-colors duration-300"
                    >
                        <div className="grid grid-cols-[auto_1fr_1fr] md:grid-cols-[auto_auto_1fr] gap-4 md:gap-8 items-start md:items-center">
                            <div className="text-sm text-gray-500">[{item.number}]</div>
                            <a href="#" className="text-2xl font-bold hover:opacity-70 transition-opacity">
                                {item.service}
                            </a>
                            <div className="text-gray-600 flex flex-col md:flex-row md:justify-end gap-1 md:gap-0">
                                {item.subServices.map((sub, index) => (
                                    <React.Fragment key={index}>
                                        <a href="#" className="hover:text-black transition-colors">
                                            {sub}
                                        </a>
                                        {index < item.subServices.length - 1 && <span className="hidden md:inline mx-2">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
