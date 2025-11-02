import React from 'react';
import type { FaqItem } from '../../types';

export const Faq2: React.FC = () => {
    const faqs: FaqItem[] = [
        {
            question: 'How do I get started?',
            answer: 'You can start by signing up for a free account. From there, you can connect your Git repository and deploy your first project in minutes.',
        },
        {
            question: 'What frameworks are supported?',
            answer: 'We support over 30 frameworks out of the box, including Next.js, React, Vue, Svelte, and more. Our system automatically detects your framework and configures the optimal build settings.',
        },
        {
            question: 'Can I scale my application?',
            answer: 'Yes, our platform is designed to scale seamlessly from personal projects to enterprise-level applications with millions of users.',
        },
        {
            question: 'What is the pricing model?',
            answer: 'We have a free tier for personal projects and paid plans for teams and businesses that offer more features and higher limits. You can find more details on our pricing page.',
        },
    ];

    return (
        <div className="py-20 bg-gray-50 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-black">Common questions</h2>
                        <p className="mt-4 text-lg text-gray-600">Can’t find the answer you’re looking for? Reach out to our customer support team.</p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <dl className="space-y-12">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <dt className="text-lg font-medium text-black">{faq.question}</dt>
                                    <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};