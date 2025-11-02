import React from 'react';
import { Button } from '../ui/Button';

interface SignInPageProps {
    onSignUpClick: () => void;
    onForgotPasswordClick: () => void;
    onSignInSuccess: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ onSignUpClick, onForgotPasswordClick, onSignInSuccess }) => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form validation and API call
        // For this template, we'll just call the success handler
        onSignInSuccess();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
                <div className="text-center">
                    <a href="#" className="inline-block mb-6 font-bold text-2xl tracking-wider">LEX RESO</a>
                    <h2 className="text-2xl font-bold tracking-tight">Войдите в свой аккаунт</h2>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email-address" className="sr-only">Электронная почта</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                            placeholder="Электронная почта"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                            placeholder="Пароль"
                        />
                    </div>
                    
                    <Button type="submit" className="w-full">
                        Войти
                    </Button>
                </form>
                <div className="flex items-center justify-between text-sm">
                    <button onClick={onSignUpClick} className="font-medium text-black hover:underline">
                        Зарегистрироваться
                    </button>
                    <button onClick={onForgotPasswordClick} className="font-medium text-black hover:underline">
                        Забыл пароль
                    </button>
                </div>
            </div>
        </div>
    );
};