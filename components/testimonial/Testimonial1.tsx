import React from 'react';
import type { Testimonial } from '../../types';

export const Testimonial1: React.FC = () => {
    const testimonial: Testimonial = {
        quote: "This platform has completely transformed our development workflow. We're shipping features faster than ever before.",
        author: 'Sarah Dayan',
        role: 'Staff Engineer, Algolia',
        avatarUrl: 'https://picsum.photos/seed/t1/100/100',
    };

    return (
        <section className="py-20">
            <figure className="max-w-3xl mx-auto text-center">
                <blockquote>
                    <p className="text-2xl md:text-3xl font-medium">"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center space-x-4">
                    <img className="w-12 h-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.author} />
                    <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                </figcaption>
            </figure>
        </section>
    );
};