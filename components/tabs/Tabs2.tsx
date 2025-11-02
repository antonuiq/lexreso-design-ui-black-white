import React, { useState } from 'react';
import { CodeIcon, ZapIcon, GlobeIcon } from '../icons';

const tabsData = [
    {
        name: 'Develop',
        icon: <CodeIcon />,
        content: 'Our platform provides a seamless development experience. From local development to production, everything is designed to make you more productive. Connect your Git repository and we do the rest.'
    },
    {
        name: 'Preview',
        icon: <ZapIcon />,
        content: 'Generate a preview deployment for every git push. Share a URL with your team to gather feedback and iterate faster. Previews are production-like environments, so what you see is what you get.'
    },
    {
        name: 'Ship',
        icon: <GlobeIcon />,
        content: 'Deploy your application to our global edge network with a single command or a git push. Your users will get the best performance, and you get peace of mind with our robust and scalable infrastructure.'
    },
];

export const Tabs2: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-3 lg:gap-8 items-start">
                <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
                    {tabsData.map((tab, index) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center p-4 rounded-lg text-left transition-colors w-full ${
                                activeTab === index ? 'bg-gray-100' : 'hover:bg-gray-50'
                            }`}
                        >
                            <div className={`mr-4 p-2 rounded-md ${activeTab === index ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>{tab.icon}</div>
                            <span className="font-semibold">{tab.name}</span>
                        </button>
                    ))}
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-2 bg-gray-100 p-8 rounded-lg min-h-[12rem]">
                    <p>{tabsData[activeTab].content}</p>
                </div>
            </div>
        </div>
    );
};