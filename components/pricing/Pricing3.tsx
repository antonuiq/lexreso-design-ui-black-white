import React from 'react';

interface PricingItem {
    service: string;
    price: string;
    included: string[];
}

export const Pricing3: React.FC = () => {
    const pricingItems: PricingItem[] = [
        {
            service: 'Branding',
            price: '$2,500',
            included: ['Logo design', 'Creative direction', 'Identity design'],
        },
        {
            service: 'Product Design',
            price: '$3,500',
            included: ['Design system', 'Prototyping', 'User Interface design'],
        },
        {
            service: 'Development',
            price: '$4,500',
            included: ['Web apps', 'Landing pages', 'Websites'],
        },
        {
            service: 'Art Direction',
            price: '$3,000',
            included: ['Brand guidelines', 'Creative direction', 'Custom solutions'],
        },
        {
            service: 'Motion Design',
            price: '$2,800',
            included: ['Logo Animation', '2D & 3D Animation', 'Motion Graphics'],
        },
    ];

    return (
        <div className="py-20">
            <div className="mb-12">
                <h2 className="text-4xl font-bold tracking-tight">Services</h2>
            </div>
            <div className="space-y-0">
                {pricingItems.map((item, index) => (
                    <div
                        key={index}
                        className="group py-8 border-b border-gray-200 hover:border-black transition-colors duration-300"
                    >
                        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start lg:items-center">
                            <a href="#" className="text-2xl font-bold hover:opacity-70 transition-opacity">
                                {item.service}
                            </a>
                            <div className="flex flex-col gap-1 md:items-end lg:items-center">
                                <div className="text-lg font-medium md:text-right lg:text-center">
                                    from {item.price}
                                </div>
                                <div className="text-gray-600 flex flex-col lg:hidden gap-1 md:text-right md:items-end">
                                    {item.included.map((inc, idx) => (
                                        <span key={idx}>{inc}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-gray-600 text-right hidden lg:flex lg:flex-row lg:justify-end">
                                {item.included.map((inc, idx) => (
                                    <React.Fragment key={idx}>
                                        <span>{inc}</span>
                                        {idx < item.included.length - 1 && <span className="mx-2">|</span>}
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
