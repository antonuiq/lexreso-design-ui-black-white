import React from 'react';
import type { BlogPost } from '../../types';
import { Navbar2 } from '../navigation/Navbar2';
import { Footer1 } from '../footer/Footer1';

export const BlogPage: React.FC = () => {
    const posts: BlogPost[] = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        category: i % 3 === 0 ? 'Engineering' : i % 3 === 1 ? 'Design' : 'Product',
        title: `Blog Post Title ${i + 1}`,
        author: `Author ${i + 1}`,
        authorAvatar: `https://picsum.photos/seed/bp${i}/40/40`,
        date: `Mar ${17 - i}, 2023`,
        readTime: `${Math.floor(Math.random() * 5) + 4} min read`,
        imageUrl: `https://picsum.photos/seed/bp${i}/600/400`,
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }));

    return (
        <div className="bg-white">
            <Navbar2 />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">The Blog</h1>
                    <p className="mt-4 text-xl text-gray-600">News, articles, and insights from our team.</p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            <Footer1 />
        </div>
    );
};