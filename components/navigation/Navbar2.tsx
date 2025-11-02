import React, { useState } from 'react';
import { ChevronDown, MenuIcon, CloseIcon } from '../icons';
import { Button } from '../ui/Button';
import type { NavItem } from '../../types';

export const Navbar2: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

    const navItems: NavItem[] = [
        { 
            name: 'Solutions', 
            href: '#', 
            subItems: [
                { name: 'For Startups', href: '#' },
                { name: 'For Enterprise', href: '#' },
                { name: 'For E-commerce', href: '#' },
                { name: 'For Agencies', href: '#' },
                { name: 'Compare', href: '#' },
            ] 
        },
        { name: 'Resources', href: '#' },
        { name: 'Company', href: '#' },
        { name: 'Pricing', href: '#' },
    ];
    
    const handleMobileSubmenuToggle = (itemName: string) => {
        setOpenMobileSubmenu(openMobileSubmenu === itemName ? null : itemName);
    };

    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center space-x-2.5">
                            <span className="font-bold text-xl tracking-wider">LEX RESO</span>
                        </a>
                    </div>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map(item => (
                            <div 
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                                onMouseLeave={() => item.subItems && setOpenDropdown(null)}
                            >
                                <a href={item.href} className="flex items-center text-base font-medium text-gray-500 hover:text-black transition-colors">
                                    <span>{item.name}</span>
                                    {item.subItems && <ChevronDown className="ml-1" />}
                                </a>
                                {item.subItems && openDropdown === item.name && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className="py-1" role="menu" aria-orientation="vertical">
                                            {item.subItems.map(subItem => (
                                                <a href={subItem.href} key={subItem.name} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors" role="menuitem">
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center space-x-3">
                        <Button variant="secondary">Sign In</Button>
                        <Button variant="primary">Request Demo</Button>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                             {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map(item => (
                             <div key={item.name}>
                                <a 
                                    href={item.href} 
                                    onClick={(e) => {
                                        if (item.subItems) {
                                            e.preventDefault();
                                            handleMobileSubmenuToggle(item.name);
                                        }
                                    }}
                                    className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                                >
                                    <span>{item.name}</span>
                                    {item.subItems && <ChevronDown className={`ml-1 transform transition-transform duration-200 ${openMobileSubmenu === item.name ? 'rotate-180' : ''}`} />}
                                </a>
                                {item.subItems && openMobileSubmenu === item.name && (
                                    <div className="pl-6 pt-2 pb-1 space-y-1">
                                        {item.subItems.map(subItem => (
                                            <a href={subItem.href} key={subItem.name} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50">
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-4 space-y-3">
                             <Button variant="secondary" className="w-full">Sign In</Button>
                             <Button variant="primary" className="w-full">Request Demo</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};