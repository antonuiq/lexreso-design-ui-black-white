import React from 'react';
import { Button } from '../ui/Button';

interface SignUpPageProps {
    onSignInClick: () => void;
    onForgotPasswordClick: () => void;
}

const countries = [ "США", "Канада", "Великобритания", "Австралия", "Германия", "Франция" ];

export const SignUpPage: React.FC<SignUpPageProps> = ({ onSignInClick, onForgotPasswordClick }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
                <div className="text-center">
                    <a href="#" className="inline-block mb-6 font-bold text-2xl tracking-wider">LEX RESO</a>
                    <h2 className="text-2xl font-bold tracking-tight">Создайте новый аккаунт</h2>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Имя</label>
                            <input id="first-name" name="first-name" type="text" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="Иван" />
                        </div>
                        <div>
                             <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Фамилия</label>
                            <input id="last-name" name="last-name" type="text" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="Иванов" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Электронная почта</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
                        <input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="••••••••" />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Страна</label>
                        <select id="country" name="country" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                            <option value="" disabled selected>Выбрать страну</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" name="terms" type="checkbox" required className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                                Я согласен с <a href="#" className="text-black hover:underline">Условиями использования</a> и <a href="#" className="text-black hover:underline">Политикой конфиденциальности</a>
                            </label>
                        </div>
                    </div>
                    
                    <Button type="submit" className="w-full">
                        Зарегистрироваться
                    </Button>
                </form>
                 <div className="flex items-center justify-between text-sm">
                    <button onClick={onSignInClick} className="font-medium text-black hover:underline">
                        Войти
                    </button>
                    <button onClick={onForgotPasswordClick} className="font-medium text-black hover:underline">
                        Забыл пароль
                    </button>
                </div>
            </div>
        </div>
    );
};