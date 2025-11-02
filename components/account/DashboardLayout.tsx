import React, { useState } from 'react';
import { Navbar2 } from '../navigation/Navbar2';
import { DashboardSidebar } from './DashboardSidebar';
import { AccountContent } from './pages/AccountContent';
import { PlaceholderContent } from './pages/PlaceholderContent';
import { Bell, CreditCard, LifeBuoy } from '../icons';

export const DashboardLayout: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<string>('Account');

    const renderContent = () => {
        switch (activeComponent) {
            case 'Account':
                return <AccountContent />;
            case 'Setting':
            case 'Billing':
            case 'Subscribtion':
            case 'Support':
            case 'Services':
            case 'usage limits':
            case 'History':
            case 'new order':
            default:
                return <PlaceholderContent title={activeComponent} />;
        }
    };

    const StatusBar = () => (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                             <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
                             <span>Баланс: <span className="font-semibold">$1,234.56</span></span>
                        </div>
                         <div className="flex items-center">
                             <Bell className="w-4 h-4 mr-2 text-gray-500" />
                             <span>Уведомления: <span className="font-semibold">3</span></span>
                        </div>
                         <div className="flex items-center">
                             <span className="font-semibold">Лимиты использования</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                         <a href="#" className="flex items-center hover:text-black transition-colors text-gray-600">
                             <LifeBuoy className="w-4 h-4 mr-2" />
                             <span>Написать в поддержку</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar2 />
            <StatusBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex">
                    <DashboardSidebar activeItem={activeComponent} setActiveItem={setActiveComponent} />
                    <main className="flex-1 pl-8">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};