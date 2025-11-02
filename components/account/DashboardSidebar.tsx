import React from 'react';

interface DashboardSidebarProps {
    activeItem: string;
    setActiveItem: (item: string) => void;
}

const menuItems = [
    {
        block: 'Block 1',
        items: ['Account', 'Setting', 'Billing', 'Subscribtion', 'Support', 'Заглушка 1.1', 'Заглушка 1.2']
    },
    {
        block: 'Block 2',
        items: ['Services', 'usage limits', 'History', 'new order', 'Заглушка 2.1', 'Заглушка 2.2', 'Заглушка 2.3']
    },
    {
        block: 'Block 3',
        items: ['Заглушка 3.1', 'Заглушка 3.2', 'Заглушка 3.3', 'Заглушка 3.4', 'Заглушка 3.5']
    },
    {
        block: 'Block 4',
        items: ['Exit', 'Danger', 'Заглушка 4.1', 'Заглушка 4.2']
    }
];

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeItem, setActiveItem }) => {
    return (
        <aside className="w-64 flex-shrink-0">
            <nav className="space-y-8">
                {menuItems.map(section => (
                    <div key={section.block}>
                        <ul className="space-y-1">
                            {section.items.map(item => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveItem(item);
                                        }}
                                        className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                            activeItem === item
                                                ? 'bg-gray-200 text-black'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                                        }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
};