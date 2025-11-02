import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import type { JobOpening } from '../../types';
import { Button } from '../ui/Button';

export const Careers1: React.FC = () => {
    const jobs: JobOpening[] = [
        { title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote' },
        { title: 'Product Designer', department: 'Design', location: 'New York, NY' },
        { title: 'Backend Engineer (Go)', department: 'Engineering', location: 'Remote' },
        { title: 'Marketing Manager', department: 'Marketing', location: 'San Francisco, CA' },
    ];

    return (
        <div className="py-20">
            <SectionHeader
                kicker="We're hiring"
                title="Join Our Team"
                subtitle="Help us build the future of the web. We're looking for passionate people to join our team."
            />
            <div className="mt-12 max-w-3xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg">
                    <ul role="list" className="divide-y divide-gray-200">
                        {jobs.map((job) => (
                            <li key={job.title}>
                                <a href="#" className="block hover:bg-gray-50">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-base font-medium text-black truncate">{job.title}</p>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {job.department}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    {job.location}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                <span className="hidden md:inline">Apply now &rarr;</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center">
                <Button variant="secondary">View all open positions</Button>
            </div>
        </div>
    );
};