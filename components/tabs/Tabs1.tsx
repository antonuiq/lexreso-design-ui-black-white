import React, { useState } from 'react';

const tabsData = [
    {
        name: 'Analytics',
        content: (
            <div>
                <h3 className="text-xl font-semibold">Real-time Analytics</h3>
                <p className="mt-2 text-gray-600">Get insights into your traffic and performance. Understand your audience and optimize your site with our comprehensive analytics dashboard.</p>
                <img src="https://picsum.photos/seed/tab1/800/400?grayscale" alt="Analytics" className="mt-4 rounded-lg"/>
            </div>
        ),
    },
    {
        name: 'Functions',
        content: (
             <div>
                <h3 className="text-xl font-semibold">Serverless Functions</h3>
                <p className="mt-2 text-gray-600">Run your backend code without managing servers. Deploy functions at the edge, close to your users, for the lowest latency.</p>
                <img src="https://picsum.photos/seed/tab2/800/400?grayscale" alt="Functions" className="mt-4 rounded-lg"/>
            </div>
        ),
    },
    {
        name: 'Storage',
        content: (
            <div>
                <h3 className="text-xl font-semibold">Edge Storage</h3>
                <p className="mt-2 text-gray-600">Store your data globally. Our storage solutions are designed for performance, durability, and scale, perfectly integrated with our other services.</p>
                <img src="https://picsum.photos/seed/tab3/800/400?grayscale" alt="Storage" className="mt-4 rounded-lg"/>
            </div>
        ),
    },
];

export const Tabs1: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabsData.map((tab, index) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(index)}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === index
                                        ? 'border-black text-black'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="mt-8">
                    {tabsData[activeTab].content}
                </div>
            </div>
        </div>
    );
};