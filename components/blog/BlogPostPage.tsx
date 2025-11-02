import React from 'react';
import { Navbar2 } from '../navigation/Navbar2';
import { Footer1 } from '../footer/Footer1';

export const BlogPostPage: React.FC = () => {
    const post = {
        title: 'Optimizing Web Performance: A Deep Dive',
        author: 'Jane Doe',
        authorAvatar: 'https://picsum.photos/seed/b1/40/40',
        date: 'March 16, 2023',
        readTime: '6 min read',
        imageUrl: 'https://picsum.photos/seed/bpp/1200/600',
    };

    return (
         <div className="bg-white">
            <Navbar2 />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <p className="text-base font-semibold text-gray-600 uppercase">Engineering</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
                    <div className="mt-6 flex justify-center items-center space-x-4">
                        <img className="h-10 w-10 rounded-full" src={post.authorAvatar} alt={post.author} />
                        <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.date} &middot; {post.readTime}</p>
                        </div>
                    </div>
                </div>
                
                <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-12"/>

                <div className="prose prose-lg text-gray-800 mx-auto">
                    <p>
                        Web performance is no longer a niche concern for engineers; it's a critical component of user experience, conversion rates, and even search engine rankings. In this post, we'll explore several advanced techniques to optimize your web applications, ensuring they are not just functional, but also incredibly fast.
                    </p>
                    <h2>Code Splitting and Lazy Loading</h2>
                    <p>
                        One of the most effective strategies for improving initial load times is to reduce the amount of JavaScript that needs to be downloaded and parsed. Modern bundlers like Webpack and Rollup make code-splitting straightforward.
                    </p>
                    <pre><code>{`
// Example of dynamic import in React
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
                    `}</code></pre>
                    <p>
                        By lazy-loading components, you only serve the necessary code for the initial view, deferring the rest until it's actually needed. This is particularly useful for features that are below the fold or only accessible after user interaction.
                    </p>
                    <h2>Image Optimization</h2>
                    <img src="https://picsum.photos/seed/img1/400/300?grayscale" alt="Abstract design" className="rounded-lg float-right ml-6 mb-4 w-1/2" />
                    <p>
                        Images are often the largest assets on a web page. Properly optimizing them is crucial. This involves several steps:
                    </p>
                    <ul>
                        <li><strong>Choosing the right format:</strong> Use modern formats like WebP or AVIF which offer better compression than JPEG or PNG.</li>
                        <li><strong>Compression:</strong> Use tools like ImageOptim or online services to reduce file size without sacrificing too much quality.</li>
                        <li><strong>Responsive Images:</strong> Use the <code>&lt;picture&gt;</code> element or the <code>srcset</code> attribute to serve different image sizes for different screen resolutions.</li>
                    </ul>
                     <p>
                        This ensures that users on mobile devices aren't downloading large desktop-sized images, which significantly improves load times and saves data. Automation in your build pipeline can handle this process seamlessly.
                    </p>
                     <blockquote>
                        "The fastest request is the one that's never made. Optimizing assets is the first step towards a better user experience."
                    </blockquote>
                     <img src="https://picsum.photos/seed/img2/400/250?grayscale" alt="Server racks" className="rounded-lg float-left mr-6 mb-4 w-2/5" />
                    <h2>Leveraging a CDN</h2>
                    <p>
                        A Content Delivery Network (CDN) is a network of servers distributed globally. By serving your assets from a CDN, you ensure that users receive data from a server that is geographically close to them, which reduces latency. Most modern deployment platforms have a CDN built-in, handling caching and distribution for you.
                    </p>
                    
                    <h2>Conclusion</h2>
                    <p>
                        Performance is a journey, not a destination. By continuously applying these techniques and monitoring your application's metrics using tools like Lighthouse and WebPageTest, you can provide a superior experience for your users that translates to better business outcomes. Stay vigilant, test often, and keep optimizing.
                    </p>
                </div>
            </div>
            <Footer1 />
        </div>
    );
};