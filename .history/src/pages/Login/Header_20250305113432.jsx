import logo from '@assets/logo.png';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import vietnam from '@assets/vietnam.png';
import unitedkingdom from '@assets/united-kingdom.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState({
        code: 'en',
        name: t('English'),
        flag: unitedkingdom
    });

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = lang => {
        const languageData = {
            en: { code: 'en', name: t('English'), flag: unitedkingdom },
            vi: { code: 'vi', name: t('Tiếng Việt'), flag: vietnam }
        };
        const selectedLanguage = languageData[lang];
        setCurrentLanguage(selectedLanguage);
        i18n.changeLanguage(lang);
        setIsDropdownOpen(false);
    };

    return (
        <nav className='bg-[#2E4F4F] shadow-md'>
            <div className='h-24 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10'>
                <div className='relative flex items-center justify-between h-20'>
                    {/* Logo */}
                    <div className='flex items-center mt-4'>
                        <Link to='/'>
                            <img
                                alt='Logo'
                                src={logo}
                                className='w-20 h-20 rounded-full mp-6'
                            />
                        </Link>
                    </div>

                    {/* Buttons */}
                    <div className='flex items-center mt-4 space-x-6'>
                        <Link to='/'>
                            <button
                                type='button'
                                className='relative px-6 py-3 text-lg font-medium rounded-full bg-[#E7F0FD] text-gray-700 border border-gray-300 hover:bg-[#2E4F4F] hover:text-white'
                            >
                                {t('Login')}
                            </button>
                        </Link>

                        <div className='relative'>
                            <button
                                onClick={toggleDropdown}
                                className='flex items-center px-6 py-3 text-lg font-medium text-gray-700 bg-[#E7F0FD] rounded-full border border-gray-300 hover:bg-[#2E4F4F] hover:text-white'
                            >
                                <img
                                    src={currentLanguage.flag}
                                    alt={currentLanguage.name}
                                    className='w-5 h-5 mr-2 rounded-full'
                                />
                                {currentLanguage.name}
                            </button>

                            {isDropdownOpen && (
                                <div className='absolute right-0 w-40 mt-2 bg-white rounded shadow-lg'>
                                    <ul>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    changeLanguage('en')
                                                }
                                                className='flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#2E4F4F] hover:text-white'
                                            >
                                                <img
                                                    src={unitedkingdom}
                                                    alt='English'
                                                    className='w-5 h-5 mr-2 rounded-full'
                                                />
                                                {t('English')}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    changeLanguage('vi')
                                                }
                                                className='flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#2E4F4F] hover:text-white'
                                            >
                                                <img
                                                    src={vietnam}
                                                    alt='Tiếng Việt'
                                                    className='w-5 h-5 mr-2 rounded-full'
                                                />
                                                {t('Tiếng Việt')}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
