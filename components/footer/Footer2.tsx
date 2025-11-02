
import React from 'react';
import { VercelLogo } from '../icons';
import { Button } from '../ui/Button';

export const Footer2: React.FC = () => {
    const links = ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'];
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-8 xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <VercelLogo />
                        <p className="text-base text-gray-400">
                            Build and deploy the future of the web.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                           <div>{/* Empty div for spacing */}</div>
                           <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                {links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">{link}</a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                         <div className="md:grid md:grid-cols-1 md:gap-8">
                           <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
                                <p className="mt-4 text-base text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
                                <form className="mt-4 sm:flex sm:max-w-md">
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <Button type="submit">Subscribe</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} Project, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
