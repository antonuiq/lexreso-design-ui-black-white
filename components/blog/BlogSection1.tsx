import React from 'react';
import type { BlogPost } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';

export const BlogSection1: React.FC = () => {
    const posts: BlogPost[] = [
        {
            id: 1,
            category: 'Engineering',
            title: 'Optimizing Web Performance',
            author: 'Jane Doe',
            authorAvatar: 'https://picsum.photos/seed/b1/40/40',
            date: 'Mar 16, 2023',
            readTime: '6 min read',
            imageUrl: 'https://picsum.photos/seed/b1/600/400',
            excerpt: 'Learn about the latest techniques for making your websites faster and more efficient.'
        },
        {
            id: 2,
            category: 'Design',
            title: 'The Principles of Good UI',
            author: 'John Smith',
            authorAvatar: 'https://picsum.photos/seed/b2/40/40',
            date: 'Mar 10, 2023',
            readTime: '8 min read',
            imageUrl: 'https://picsum.photos/seed/b2/600/400',
            excerpt: 'A deep dive into the core principles that make user interfaces intuitive and delightful.'
        },
        {
            id: 3,
            category: 'Product',
            title: 'Our 2023 Product Roadmap',
            author: 'Sam Wilson',
            authorAvatar: 'https://picsum.photos/seed/b3/40/40',
            date: 'Mar 1, 2023',
            readTime: '4 min read',
            imageUrl: 'https://picsum.photos/seed/b3/600/400',
            excerpt: "A look at what's coming next for our platform and how it will help you build better."
        },
    ];

    return (
        <div className="py-20">
            <SectionHeader
                kicker="From the Blog"
                title="Latest News and Updates"
                subtitle="Stay up to date with the latest from our team."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.id} className="group">
                        <a href="#">
                           <div className="overflow-hidden rounded-lg">
                             <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                           </div>
                            <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-500">{post.category}</p>
                                <h3 className="mt-1 text-lg font-semibold text-black group-hover:underline">{post.title}</h3>
                                <p className="mt-2 text-base text-gray-600">{post.excerpt}</p>
                                <div className="mt-4 flex items-center space-x-3">
                                    <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="text-sm font-medium">{post.author}</p>
                                        <p className="text-sm text-gray-500">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};