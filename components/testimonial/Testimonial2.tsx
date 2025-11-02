import React from 'react';
import type { Testimonial } from '../../types';

export const Testimonial2: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            quote: 'The DX is incredible. I can focus on my code and the platform handles the rest. It feels like magic.',
            author: 'Jane Cooper',
            role: 'Developer, Acme Inc.',
            avatarUrl: 'https://picsum.photos/seed/t2/100/100',
        },
        {
            quote: 'Our performance metrics have improved significantly since we switched. Global deployment is a game-changer.',
            author: 'John Smith',
            role: 'CTO, Stark Industries',
            avatarUrl: 'https://picsum.photos/seed/t3/100/100',
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">What our customers are saying</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.author} className="p-8 bg-gray-50 rounded-lg">
                        <p className="text-gray-800">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center space-x-4">
                            <img className="w-10 h-10 rounded-full" src={testimonial.avatarUrl} alt={testimonial.author} />
                            <div>
                                <p className="font-semibold">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};