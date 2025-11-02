
import React from 'react';
import { ChevronDown, ArrowRight, MenuIcon, CloseIcon } from '../icons';
import { Button } from '../ui/Button';
import type { NavItem } from '../../types';

export const Navbar1: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems: NavItem[] = [
        { name: 'Features', href: '#' },
        { name: 'Docs', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Pricing', href: '#' },
    ];
    
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <a href="#" className="flex items-center space-x-2">
                            <span className="font-bold text-xl tracking-wider">LEX RESO</span>
                        </a>
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map(item => (
                                <a key={item.name} href={item.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contact</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Login</a>
                        <Button size="md">Sign Up</Button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map(item => (
                            <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-5 space-y-2">
                            <a href="#" className="block text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Contact</a>
                            <a href="#" className="block text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Login</a>
                             <Button size="md" className="w-full">Sign Up</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};