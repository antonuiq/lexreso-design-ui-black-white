import React, { useState } from 'react';
import type { FaqItem } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { ChevronDown } from '../icons';

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <dt>
                <button onClick={onClick} className="w-full flex justify-between items-start text-left text-gray-400">
                    <span className="text-base font-medium text-black">{item.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                        <ChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-600">{item.answer}</p>
                </dd>
            )}
        </div>
    );
};


export const Faq1: React.FC = () => {
    const faqs: FaqItem[] = [
        {
            question: "What's the best thing about the platform?",
            answer: "It's built with modern technologies and a focus on developer experience, making it incredibly fast and easy to use. The global edge network ensures your users have the best performance, no matter where they are.",
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can sign up for a free Hobby account to test out the platform. No credit card is required to get started.",
        },
        {
            question: "How do you handle security?",
            answer: "Security is our top priority. We provide automatic HTTPS, DDoS mitigation, and follow industry best practices to keep your applications and data safe.",
        },
        {
            question: "Can I use my own domain?",
            answer: "Absolutely. Custom domains are supported on all plans, including the free Hobby plan.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-20">
            <SectionHeader
                kicker="FAQ"
                title="Frequently Asked Questions"
                subtitle="Have a different question? Contact our support team."
            />
            <div className="mt-12 max-w-3xl mx-auto">
                <dl className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqAccordionItem 
                            key={faq.question} 
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </dl>
            </div>
        </div>
    );
};