import React, { useState } from 'react';
import { Button } from '../../ui/Button';

const tabs = ['Профиль', 'Пароль', 'Уведомления', 'История платежей'];

export const AccountContent: React.FC = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Профиль':
                return <ProfileSettings />;
            case 'Пароль':
                 return <PasswordSettings />;
            default:
                return (
                    <div className="text-center py-12 text-gray-500">
                        <h3 className="text-lg font-medium">Содержимое для {activeTab}</h3>
                        <p>Это заполнитель для настроек "{activeTab}".</p>
                    </div>
                );
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-2">Настройки аккаунта</h1>
            <p className="text-gray-600 mb-6">Управляйте своим профилем, паролем и настройками уведомлений.</p>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === tab
                                    ? 'border-black text-black'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="mt-8">
                {renderTabContent()}
            </div>
        </div>
    );
};


const ProfileSettings = () => (
    <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Имя</label>
                <input type="text" name="first-name" id="first-name" defaultValue="Иван" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Фамилия</label>
                <input type="text" name="last-name" id="last-name" defaultValue="Иванов" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
            </div>
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Электронная почта</label>
            <input type="email" name="email" id="email" defaultValue="ivan.ivanov@example.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
        </div>
        <div className="pt-4 flex justify-end">
            <Button type="submit">Сохранить изменения</Button>
        </div>
    </form>
);

const PasswordSettings = () => (
     <form className="space-y-6 max-w-lg">
        <div>
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Текущий пароль</label>
            <input type="password" name="current-password" id="current-password"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
        </div>
         <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Новый пароль</label>
            <input type="password" name="new-password" id="new-password"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
        </div>
         <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Подтвердите новый пароль</label>
            <input type="password" name="confirm-password" id="confirm-password"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm" />
        </div>
        <div className="pt-4 flex justify-end">
            <Button type="submit">Обновить пароль</Button>
        </div>
    </form>
);