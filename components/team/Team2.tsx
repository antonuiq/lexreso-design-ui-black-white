import React from 'react';
import type { TeamMember } from '../../types';
import { TelegramIcon, WhatsappIcon } from '../icons';

export const Team2: React.FC = () => {
    const team: TeamMember[] = [
        { name: 'Ava Johnson', role: 'Lead Engineer', avatarUrl: 'https://picsum.photos/seed/5/200/200' },
        { name: 'Ben Carter', role: 'Product Manager', avatarUrl: 'https://picsum.photos/seed/6/200/200' },
        { name: 'Chloe Davis', role: 'UX Researcher', avatarUrl: 'https://picsum.photos/seed/7/200/200' },
        { name: 'David Evans', role: 'Frontend Developer', avatarUrl: 'https://picsum.photos/seed/8/200/200' },
        { name: 'Emily Clark', role: 'Marketing Lead', avatarUrl: 'https://picsum.photos/seed/9/200/200' },
        { name: 'Frank Harris', role: 'DevOps Engineer', avatarUrl: 'https://picsum.photos/seed/10/200/200' },
    ];
    return (
        <div className="py-20">
            <div className="max-w-2xl mx-auto text-center">
                 <h2 className="text-3xl font-bold tracking-tight">Our Leadership</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We’re a dynamic group of individuals who are passionate about what we do.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                    <div key={member.name} className="p-6 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <img className="h-16 w-16 rounded-full" src={member.avatarUrl} alt={member.name} />
                            <div>
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                           Leading the team to build amazing things for our customers.
                        </p>
                         <div className="mt-4 flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-black"><TelegramIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-black"><WhatsappIcon /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};