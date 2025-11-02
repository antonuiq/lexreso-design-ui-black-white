import React, { useState } from 'react';

// UI Components
import { Button } from './components/ui/Button';
import { SectionHeader } from './components/ui/SectionHeader';

// Component Sections
import { Navbar2 } from './components/navigation/Navbar2';
import { Hero1 } from './components/hero/Hero1';
import { Hero2 } from './components/hero/Hero2';
import { Hero3 } from './components/hero/Hero3';
import { Features1 } from './components/features/Features1';
import { Features2 } from './components/features/Features2';
import { Features3 } from './components/features/Features3';
import { Features4 } from './components/features/Features4';
import { Features5 } from './components/features/Features5';
import { Cta1 } from './components/cta/Cta1';
import { Cta3 } from './components/cta/Cta3';
import { Team1 } from './components/team/Team1';
import { Team2 } from './components/team/Team2';
import { Logos1 } from './components/logos/Logos1';
import { Logos2 } from './components/logos/Logos2';
import { Gallery1 } from './components/gallery/Gallery1';
import { Gallery2 } from './components/gallery/Gallery2';
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';
import { Testimonial1 } from './components/testimonial/Testimonial1';
import { Testimonial2 } from './components/testimonial/Testimonial2';
import { Careers1 } from './components/careers/Careers1';
import { Careers2 } from './components/careers/Careers2';
import { Faq1 } from './components/faq/Faq1';
import { Faq2 } from './components/faq/Faq2';
import { Contact1 } from './components/contact/Contact1';
import { Contact2 } from './components/contact/Contact2';
import { Footer1 } from './components/footer/Footer1';
import { Banner1 } from './components/banners/Banner1';
import { Banner2 } from './components/banners/Banner2';
import { TextSection1 } from './components/text/TextSection1';
import { Tabs1 } from './components/tabs/Tabs1';
import { Tabs2 } from './components/tabs/Tabs2';
import { BlogSection1 } from './components/blog/BlogSection1';
import { BlogSection2 } from './components/blog/BlogSection2';
import { BlogSection3 } from './components/blog/BlogSection3';
import { BlogPage } from './components/blog/BlogPage';
import { BlogPostPage } from './components/blog/BlogPostPage';
import { SingleBlogPostPage } from './components/blog/SingleBlogPostPage';
import { AccountArea } from './components/account/AccountArea';
import { HowItWorks1 } from './components/steps/HowItWorks1';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="border-t border-gray-200">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wider mb-12">{title}</h2>
      <div className="space-y-16">
        {React.Children.map(children, (child, index) => (
          <div>
            {child}
            {index < React.Children.count(children) - 1 && <div className="mt-16 border-b border-dashed border-gray-300"></div>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

enum Page {
  ComponentLibrary,
  BlogPage,
  BlogPostPage,
  SingleBlogPostPage,
  AccountArea,
}

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.ComponentLibrary);

    const renderPage = () => {
        switch (currentPage) {
            case Page.BlogPage:
                return <BlogPage />;
            case Page.BlogPostPage:
                return <BlogPostPage />;
            case Page.SingleBlogPostPage:
                return <SingleBlogPostPage />;
            case Page.AccountArea:
                return <AccountArea />;
            case Page.ComponentLibrary:
            default:
                return (
                    <main className="bg-white text-black font-sans">
                      <div className="text-center py-16 border-b border-gray-200">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">LEX RESO</h1>
                        <p className="mt-4 text-xl text-gray-600">A showcase of reusable components built with React and Tailwind CSS.</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button onClick={() => setCurrentPage(Page.BlogPage)}>View Blog Page</Button>
                            <Button onClick={() => setCurrentPage(Page.BlogPostPage)} variant="secondary">View Blog Post Page</Button>
                            <Button onClick={() => setCurrentPage(Page.SingleBlogPostPage)} variant="ghost">View Single Post Template</Button>
                            <Button onClick={() => setCurrentPage(Page.AccountArea)}>View Account Area</Button>
                        </div>
                      </div>
                      
                      <Section title="Navigation (Navbar)"><Navbar2 /></Section>
                      <Section title="Hero / Header Section"><Hero1 /><Hero2 /><Hero3 /></Section>
                      <Section title="Features"><Features1 /><Features2 /><Features3 /><Features4 /><Features5 /></Section>
                      <Section title="How It Works (Steps)"><HowItWorks1 /></Section>
                      <Section title="CTA Section"><Cta1 /><Cta3 /></Section>
                      <Section title="Team"><Team1 /><Team2 /></Section>
                      <Section title="Logos"><Logos1 /><Logos2 /></Section>
                      <Section title="Gallery"><Gallery1 /><Gallery2 /></Section>
                      <Section title="Pricing"><Pricing1 /><Pricing3 /><Pricing4 /></Section>
                      <Section title="Testimonial"><Testimonial1 /><Testimonial2 /></Section>
                      <Section title="Careers Section"><Careers1 /><Careers2 /></Section>
                      <Section title="FAQ Section"><Faq1 /><Faq2 /></Section>
                      <Section title="Contact Section"><Contact1 /><Contact2 /></Section>
                      <Section title="Footer"><Footer1 /></Section>
                      <Section title="Banners"><Banner1 /><Banner2 /></Section>
                      <Section title="Text Section (for policy pages)"><TextSection1 /></Section>
                      <Section title="Tabs (Tab blocks)"><Tabs1 /><Tabs2 /></Section>
                      <Section title="Blog Section (widget)"><BlogSection3 /><BlogSection1 /><BlogSection2 /></Section>
                    </main>
                );
        }
    };

    return (
      <div className="antialiased">
        {currentPage !== Page.ComponentLibrary && (
          <div className="bg-gray-100 p-4 text-center">
            <Button onClick={() => setCurrentPage(Page.ComponentLibrary)}>&larr; Back to Component Library</Button>
          </div>
        )}
        {renderPage()}
      </div>
    );
};

export default App;