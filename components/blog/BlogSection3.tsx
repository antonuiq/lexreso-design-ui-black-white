import React from 'react';
import type { BlogPost } from '../../types';
import { Button } from '../ui/Button';

export const BlogSection3: React.FC = () => {
    const posts: BlogPost[] = [
        {
            id: 1,
            category: 'Engineering',
            title: 'Optimizing Web Performance',
            author: 'Jane Doe',
            authorAvatar: '',
            date: '',
            readTime: '',
            imageUrl: 'https://picsum.photos/seed/bs3_1/600/400',
            excerpt: 'Learn the latest techniques for making your websites faster and more efficient for a better user experience.'
        },
        {
            id: 2,
            category: 'Design',
            title: 'The Principles of Good UI',
            author: 'John Smith',
            authorAvatar: '',
            date: '',
            readTime: '',
            imageUrl: 'https://picsum.photos/seed/bs3_2/600/400',
            excerpt: 'A deep dive into the core principles that make user interfaces intuitive, accessible, and delightful to use.'
        },
        {
            id: 3,
            category: 'Product',
            title: 'Our 2023 Product Roadmap',
            author: 'Sam Wilson',
            authorAvatar: '',
            date: '',
            readTime: '',
            imageUrl: 'https://picsum.photos/seed/bs3_3/600/400',
            excerpt: "A look at what's coming next for our platform and how new features will help you build even better products."
        },
        {
            id: 4,
            category: 'Case Study',
            title: 'How Acme Inc. Scaled to Millions',
            author: 'Emily White',
            authorAvatar: '',
            date: '',
            readTime: '',
            imageUrl: 'https://picsum.photos/seed/bs3_4/600/400',
            excerpt: 'Discover how one of our customers leveraged our platform to achieve incredible scale and performance.'
        },
        {
            id: 5,
            category: 'Tutorial',
            title: 'Building a Real-time App',
            author: 'Michael Brown',
            authorAvatar: '',
            date: '',
            readTime: '',
            imageUrl: 'https://picsum.photos/seed/bs3_5/600/400',
            excerpt: 'A step-by-step guide to building a full-stack, real-time application from scratch using our API.'
        },
    ];

    return (
        <div className="py-20">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Последние статьи блога</h2>
                <Button variant="secondary">Наш блог &rarr;</Button>
            </div>
            <div className="flex space-x-8 -mx-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                {posts.map((post) => (
                    <div key={post.id} className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <a href="#" className="group block">
                            <div className="overflow-hidden rounded-lg">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-black group-hover:underline">{post.title}</h3>
                                <p className="mt-1 text-base text-gray-600 line-clamp-2">{post.excerpt}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};