import React from 'react';
import { Navbar2 } from '../navigation/Navbar2';
import { Footer1 } from '../footer/Footer1';
import type { BlogPost } from '../../types';

export const SingleBlogPostPage: React.FC = () => {
    const post = {
        title: 'A Guide to Modern Web Development',
        author: 'Alex Johnson',
        authorAvatar: 'https://picsum.photos/seed/spp/40/40',
        date: 'June 5, 2024',
        readTime: '9 min read',
        imageUrl: 'https://picsum.photos/seed/spp-main/1200/600',
        category: 'Technology',
    };

    const relatedPosts: Partial<BlogPost>[] = [
        { id: 1, title: 'Understanding React Hooks', imageUrl: 'https://picsum.photos/seed/rp1/600/400', category: 'Engineering' },
        { id: 2, title: 'The Future of CSS: What\'s Next?', imageUrl: 'https://picsum.photos/seed/rp2/600/400', category: 'Design' },
        { id: 3, title: 'State Management in Large Applications', imageUrl: 'https://picsum.photos/seed/rp3/600/400', category: 'Engineering' },
    ];


    return (
         <div className="bg-white">
            <Navbar2 />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <article>
                    <header className="text-center mb-12">
                        <p className="text-base font-semibold text-gray-600 uppercase">{post.category}</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
                        <div className="mt-6 flex justify-center items-center space-x-4">
                            <img className="h-10 w-10 rounded-full" src={post.authorAvatar} alt={post.author} />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <p className="text-sm text-gray-500">{post.date} &middot; {post.readTime}</p>
                            </div>
                        </div>
                    </header>
                    
                    <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-12 shadow-lg"/>

                    <div className="prose prose-lg text-gray-800 mx-auto">
                        <p>
                            The landscape of web development is in a constant state of flux. Frameworks rise and fall, new tools emerge, and best practices evolve. Navigating this ecosystem can be challenging, but by focusing on core principles and adaptable technologies, developers can build robust, scalable, and maintainable applications for the modern web.
                        </p>
                        
                        <h2>The Component-Based Architecture</h2>
                        <p>
                            At the heart of modern frontend development is the concept of component-based architecture, popularized by libraries like React, Vue, and Svelte. This paradigm encourages breaking down complex user interfaces into small, reusable, and self-contained pieces.
                        </p>
                        
                        <img src="https://picsum.photos/seed/spp-img1/500/300?grayscale" alt="Code on a screen" className="rounded-lg float-left mr-6 mb-4 w-1/2 shadow-md" />

                        <p>
                            This approach offers numerous benefits. It improves code organization, making it easier to reason about and maintain. Reusability accelerates development time, as components can be shared across different parts of an application or even between projects. Furthermore, it facilitates better team collaboration, as developers can work on different components in parallel without stepping on each other's toes.
                        </p>
                        
                        <p>
                            State management within these components is a critical aspect. While simple applications might get by with local component state, larger applications often require more sophisticated solutions like Redux, MobX, or the built-in context APIs provided by frameworks to manage global application state efficiently.
                        </p>

                        <blockquote>
                            "The key to building for the web of tomorrow is to embrace modularity and declarative UIs. Focus on what you want to build, not how to build it."
                        </blockquote>
                        
                        <h2>Styling and Design Systems</h2>
                        <p>
                            Styling has also seen a significant evolution. From CSS-in-JS libraries like Styled Components and Emotion to utility-first frameworks like Tailwind CSS, developers now have powerful tools to create consistent and scalable design systems.
                        </p>
                        <ul>
                            <li><strong>Utility-First CSS:</strong> Provides low-level utility classes to build designs directly in your markup, offering maximum flexibility.</li>
                            <li><strong>CSS-in-JS:</strong> Colocates styles with the components that use them, preventing style leaks and promoting encapsulation.</li>
                            <li><strong>Component Libraries:</strong> Pre-built UI components (e.g., Material-UI, Ant Design) that can be used to quickly assemble interfaces.</li>
                        </ul>
                         <img src="https://picsum.photos/seed/spp-img2/400/250?grayscale" alt="UI Design sketch" className="rounded-lg float-right ml-6 mb-4 w-2/5 shadow-md" />
                        <p>
                           Regardless of the chosen method, the goal is to create a consistent visual language that enhances user experience. A well-implemented design system ensures that buttons, forms, and other UI elements look and behave predictably across the entire application.
                        </p>
                        
                        <h2>Conclusion</h2>
                        <p>
                            The modern web is dynamic and exciting. By embracing component-based architectures, thoughtful state management, and systematic styling approaches, developers are better equipped than ever to build incredible digital experiences. The journey requires continuous learning, but the principles of modularity and user-centric design remain a constant guide.
                        </p>
                    </div>
                </article>

                <div className="mt-24 pt-12 border-t border-gray-200">
                    <h2 className="text-2xl font-bold tracking-tight text-center">Related Articles</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {relatedPosts.map((relatedPost) => (
                            <div key={relatedPost.id} className="group">
                                <a href="#">
                                    <div className="overflow-hidden rounded-lg">
                                        <img src={relatedPost.imageUrl} alt={relatedPost.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-sm font-semibold text-gray-500">{relatedPost.category}</p>
                                        <h3 className="mt-1 text-base font-semibold text-black group-hover:underline">{relatedPost.title}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer1 />
        </div>
    );
};