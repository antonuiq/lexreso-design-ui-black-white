import React from 'react';
import { Button } from '../ui/Button';

interface ForgotPasswordPageProps {
    onSignInClick: () => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onSignInClick }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
                <div className="text-center">
                     <a href="#" className="inline-block mb-6 font-bold text-2xl tracking-wider">LEX RESO</a>
                    <h2 className="text-2xl font-bold tracking-tight">Забыли пароль?</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Без проблем. Введите свой адрес электронной почты ниже, и мы вышлем вам ссылку для его сброса.
                    </p>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="sr-only">Электронная почта</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                            placeholder="Электронная почта"
                        />
                    </div>
                    
                    <Button type="submit" className="w-full">
                        Отправить ссылку для сброса
                    </Button>
                </form>
                <div className="text-center text-sm">
                    <button onClick={onSignInClick} className="font-medium text-black hover:underline">
                        Вернуться ко входу
                    </button>
                </div>
            </div>
        </div>
    );
};