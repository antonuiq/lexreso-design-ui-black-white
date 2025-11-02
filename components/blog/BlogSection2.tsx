import React from 'react';
import type { BlogPost } from '../../types';

export const BlogSection2: React.FC = () => {
    const posts: BlogPost[] = [
        {
            id: 4,
            category: 'Case Study',
            title: 'How Acme Inc. Scaled to Millions of Users',
            author: 'Emily White',
            authorAvatar: '',
            date: 'Feb 25, 2023',
            readTime: '7 min read',
            imageUrl: 'https://picsum.photos/seed/b4/800/600',
            excerpt: 'Discover how one of our customers leveraged our platform to achieve incredible scale and performance.'
        },
        {
            id: 5,
            category: 'Tutorial',
            title: 'Building a Real-time App with our API',
            author: 'Michael Brown',
            authorAvatar: '',
            date: 'Feb 18, 2023',
            readTime: '12 min read',
            imageUrl: '',
            excerpt: 'A step-by-step guide to building a full-stack, real-time application from scratch.'
        },
    ];

    return (
        <div className="py-20">
             <div className="text-left mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Recent Publications</h2>
                <a href="#" className="mt-2 text-base text-gray-600 hover:text-black">
                    View all posts &rarr;
                </a>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <a href="#" className="group block">
                    <img src={posts[0].imageUrl} alt={posts[0].title} className="w-full h-80 object-cover rounded-lg mb-4" />
                    <p className="font-semibold text-gray-500">{posts[0].category}</p>
                    <h3 className="mt-1 text-2xl font-bold text-black group-hover:underline">{posts[0].title}</h3>
                    <p className="mt-2 text-gray-600">{posts[0].excerpt}</p>
                </a>
                <div className="space-y-8">
                    {posts.slice(1).map(post => (
                        <a href="#" key={post.id} className="group block border-t border-gray-200 pt-8">
                             <p className="font-semibold text-gray-500">{post.category}</p>
                            <h3 className="mt-1 text-xl font-bold text-black group-hover:underline">{post.title}</h3>
                             <p className="mt-2 text-gray-600">{post.excerpt}</p>
                            <p className="mt-3 text-sm text-gray-500">{post.date} &middot; {post.readTime}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};