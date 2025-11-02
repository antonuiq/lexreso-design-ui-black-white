import React, { useState } from 'react';
import { SignInPage } from './SignInPage';
import { SignUpPage } from './SignUpPage';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import { DashboardLayout } from './DashboardLayout';

type AccountView = 'signin' | 'signup' | 'forgot_password' | 'dashboard';

export const AccountArea: React.FC = () => {
    const [view, setView] = useState<AccountView>('signin');
    
    // In a real app, this would be based on authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignIn = () => {
        // Simulate successful login
        setIsAuthenticated(true);
    };

    const renderContent = () => {
        if (isAuthenticated) {
            return <DashboardLayout />;
        }

        switch (view) {
            case 'signin':
                return <SignInPage onSignUpClick={() => setView('signup')} onForgotPasswordClick={() => setView('forgot_password')} onSignInSuccess={handleSignIn} />;
            case 'signup':
                return <SignUpPage onSignInClick={() => setView('signin')} onForgotPasswordClick={() => setView('forgot_password')} />;
            case 'forgot_password':
                return <ForgotPasswordPage onSignInClick={() => setView('signin')} />;
            default:
                return <SignInPage onSignUpClick={() => setView('signup')} onForgotPasswordClick={() => setView('forgot_password')} onSignInSuccess={handleSignIn} />;
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {renderContent()}
        </div>
    );
};