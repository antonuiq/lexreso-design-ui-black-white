import React from 'react';

export const TextSection1: React.FC = () => {
    return (
        <div className="py-20">
            <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg text-gray-800 mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to our Privacy Policy. Your privacy is critically important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                    </p>
                    
                    <h3>2.1 Log Data</h3>
                    <p>
                        When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
                    </p>

                    <h2>3. Security</h2>
                    <p>
                        The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                    </p>

                    <ul>
                        <li>We only retain collected information for as long as necessary to provide you with your requested service.</li>
                        <li>What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
                    </ul>

                    <h2>4. Links to Other Sites</h2>
                    <p>
                        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                    </p>
                </div>
            </div>
        </div>
    );
};