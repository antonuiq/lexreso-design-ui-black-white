
import React from 'react';
import type { PricingPlan } from '../../types';
import { Button } from '../ui/Button';

export const Pricing2: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '49',
      frequency: '/month',
      description: 'A plan that scales with your business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
      ],
      isFeatured: false,
    },
    {
      name: 'Business',
      price: '99',
      frequency: '/month',
      description: 'A plan that scales with your business.',
      features: [
        '100 products',
        'Up to 25,000 subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
      ],
      isFeatured: true,
    },
  ];

  return (
    <div className="isolate overflow-hidden bg-gray-900 rounded-lg">
      <div className="px-6 pt-24 pb-96 text-center sm:pt-32">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The right price for you, <br/> whoever you are</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          We offer flexible pricing options for teams of any size.
        </p>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col justify-between rounded-3xl p-8 shadow-xl ring-1 ${plan.isFeatured ? 'ring-gray-900' : 'ring-gray-200'}`}
                >
                  <div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">{plan.frequency}</span>
                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                           <svg className="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                            </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="mt-8" variant={plan.isFeatured ? 'primary' : 'secondary'}>
                    Get started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
