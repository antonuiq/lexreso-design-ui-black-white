import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const Contact1: React.FC = () => {
    return (
        <div className="py-20">
            <SectionHeader
                kicker="Contact Us"
                title="Get in Touch"
                subtitle="We’d love to hear from you. Please fill out this form."
            />
            <div className="mt-12 max-w-lg mx-auto">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="full-name" className="sr-only">Full name</label>
                        <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md" placeholder="Full name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md" placeholder="Message"></textarea>
                    </div>
                    <div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};