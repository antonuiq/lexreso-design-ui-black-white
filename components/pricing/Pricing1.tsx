import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import type { PricingPlan } from '../../types';
import { CheckCircle } from '../icons';

export const Pricing1: React.FC = () => {
    const plans: PricingPlan[] = [
        {
            name: 'Hobby',
            price: '$0',
            frequency: '/month',
            description: 'For personal projects & experiments.',
            features: ['1 User', '1 Project', '1GB Storage', 'Community Support'],
            isFeatured: false,
        },
        {
            name: 'Pro',
            price: '$20',
            frequency: '/user/month',
            description: 'For professionals and small teams.',
            features: ['10 Users', 'Unlimited Projects', '100GB Storage', 'Priority Email Support'],
            isFeatured: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            frequency: '',
            description: 'For large organizations.',
            features: ['Unlimited Users', 'Dedicated Infrastructure', 'SLA', '24/7 Support'],
            isFeatured: false,
        },
    ];

    return (
        <div className="py-20">
            <SectionHeader
                kicker="Pricing"
                title="Plans for every team"
                subtitle="Start for free, then add a plan to unlock more features. No hidden fees."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {plans.map((plan) => (
                    <div key={plan.name} className={`p-8 border rounded-lg ${plan.isFeatured ? 'border-black' : 'border-gray-200'}`}>
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                        <p className="mt-4">
                            <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                            <span className="text-base font-medium text-gray-500">{plan.frequency}</span>
                        </p>
                        <p className="mt-4 text-gray-600">{plan.description}</p>
                        <Button className="w-full mt-6" variant={plan.isFeatured ? 'primary' : 'secondary'}>
                            {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                        </Button>
                        <ul className="mt-8 space-y-4 text-sm text-gray-600">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <CheckCircle />
                                    <span className="ml-3">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};