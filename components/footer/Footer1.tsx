
import React from 'react';
import { TwitterIcon, GithubIcon } from '../icons';

export const Footer1: React.FC = () => {
    const sections = [
        {
            title: 'Product',
            links: ['Features', 'Pricing', 'Integrations', 'Templates'],
        },
        {
            title: 'Company',
            links: ['About', 'Careers', 'Blog', 'Contact'],
        },
        {
            title: 'Resources',
            links: ['Docs', 'Support', 'API Status', 'Community'],
        },
        {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Service'],
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">{section.title}</h3>
                            <ul className="mt-4 space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-base text-gray-600 hover:text-black">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2">
                         <span className="font-bold text-lg tracking-wider">LEX RESO</span>
                    </div>
                    <p className="mt-4 sm:mt-0 text-base text-gray-500">&copy; {new Date().getFullYear()} Lex Reso, Inc. All rights reserved.</p>
                     <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-black"><TwitterIcon /></a>
                        <a href="#" className="text-gray-400 hover:text-black"><GithubIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};