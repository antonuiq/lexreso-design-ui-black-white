import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import type { TeamMember } from '../../types';

export const Team1: React.FC = () => {
    const team: TeamMember[] = [
        { name: 'Leslie Alexander', role: 'Co-Founder / CEO', avatarUrl: 'https://picsum.photos/seed/1/200/200' },
        { name: 'Michael Foster', role: 'Co-Founder / CTO', avatarUrl: 'https://picsum.photos/seed/2/200/200' },
        { name: 'Dries Vincent', role: 'VP of Product', avatarUrl: 'https://picsum.photos/seed/3/200/200' },
        { name: 'Lindsay Walton', role: 'Head of Design', avatarUrl: 'https://picsum.photos/seed/4/200/200' },
    ];
    return (
        <div className="py-20">
            <SectionHeader
                kicker="Our Team"
                title="Meet the people behind the platform"
                subtitle="We’re a small team of designers and developers, passionate about creating amazing products."
            />
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                    <div key={member.name} className="text-center">
                        <img className="mx-auto h-32 w-32 rounded-full" src={member.avatarUrl} alt={member.name} />
                        <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};