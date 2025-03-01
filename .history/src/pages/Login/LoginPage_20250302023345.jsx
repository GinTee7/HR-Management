import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '@assets/logo.png';

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0] p-6'>
            <div className='flex flex-col w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-xl md:flex-row'>
                {/* Left Section - Logo */}
                <div className='hidden md:flex items-center justify-center w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] p-6'>
                    <img
                        src={logo}
                        alt={t('Enterprise Logo')}
                        className='object-contain w-[80%] h-auto shadow-xl rounded-lg'
                    />
                </div>

                {/* Right Section - Login Form */}
                <div className='flex flex-col justify-center w-full p-8 bg-white md:w-1/2'>
                    {/* Language Selector */}
                    <div className='flex justify-end mb-4 space-x-2'>
                        <button
                            onClick={() => changeLanguage('en')}
                            className='px-3 py-1 text-sm font-semibold transition bg-gray-200 rounded-md hover:bg-gray-300'
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('vi')}
                            className='px-3 py-1 text-sm font-semibold transition bg-gray-200 rounded-md hover:bg-gray-300'
                        >
                            VI
                        </button>
                    </div>

                    <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>
                        {t('Welcome Back')}
                    </h2>

                    <form className='flex flex-col w-full gap-4'>
                        <input
                            className='w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F4F] focus:bg-white'
                            type='text'
                            placeholder={t('Username')}
                        />

                        <div className='relative flex items-center'>
                            <input
                                className='w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F4F] focus:bg-white'
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder={t('Password')}
                            />
                            <button
                                type='button'
                                onClick={() =>
                                    setPasswordVisible(!passwordVisible)
                                }
                                className='absolute text-gray-500 transition right-4 hover:text-teal-600'
                            >
                                {passwordVisible ? t('Hide') : t('Show')}
                            </button>
                        </div>

                        <button
                            type='submit'
                            className='w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]'
                        >
                            {t('Login')}
                        </button>

                        <div className='mt-4 text-center'>
                            <a
                                href='/forgot-password'
                                className='text-sm font-medium text-teal-700 hover:underline'
                            >
                                {t('Forgot your password?')}
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
