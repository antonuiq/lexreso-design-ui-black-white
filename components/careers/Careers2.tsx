import React from 'react';
import { Button } from '../ui/Button';

export const Careers2: React.FC = () => {
    return (
        <div className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Come work with us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We’re a passionate group of people working to build the future of web development. We're always looking for talented people to join our team.
                    </p>
                    <div className="mt-6">
                        <Button>See open roles</Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img className="rounded-lg" src="https://picsum.photos/seed/c1/300/400" alt="Team photo 1" />
                    <img className="rounded-lg mt-8" src="https://picsum.photos/seed/c2/300/400" alt="Team photo 2" />
                </div>
            </div>
        </div>
    );
};