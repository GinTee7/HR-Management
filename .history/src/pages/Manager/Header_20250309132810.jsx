import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Logo from '@assets/Logo.png';
import vietnam from '@assets/vietnam.png';
import unitedkingdom from '@assets/united-kingdom.png';
import { Bell } from 'lucide-react';

const languageData = {
    en: { code: 'en', name: 'English', flag: unitedkingdom },
    vi: { code: 'vi', name: 'Tiếng Việt', flag: vietnam }
};

const Header = ({ isLoggedIn, onLogout, user }) => {
    const { t, i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentLanguage = useMemo(
        () => languageData[i18n.language] || languageData.en,
        [i18n.language]
    );

    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen(prev => !prev);
    }, []);

    const changeLanguage = useCallback(
        lang => {
            i18n.changeLanguage(lang);
            setIsDropdownOpen(false);
        },
        [i18n]
    );

    useEffect(() => {
        const handleClickOutside = event => {
            if (!event.target.closest('.language-dropdown')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='fixed top-0 left-0 z-50 w-full shadow-xl bg-gradient-to-r from-[#000000] to-[#434343]'>
            <div className='container py-3 sm:py-0'>
                <div className='flex items-center justify-between'>
                    <Link
                        to='/home'
                        className='flex gap-2 text-2xl font-bold sm:text-3xl'
                    >
                        <div className='relative w-20 h-20 my-3 overflow-hidden bg-white rounded-full'>
                            <img
                                src={Logo}
                                alt='Logo'
                                className='absolute top-0 left-0 object-cover w-full h-full rounded-full'
                            />
                        </div>
                    </Link>

                    <div className='flex items-center gap-4'>
                        <button className='text-white hover:text-gray-300'>
                            <Bell size={24} />
                        </button>

                        <div className='relative flex items-center gap-2'>
                            <button className='w-10 h-10 overflow-hidden border-2 border-white rounded-full'>
                                <img
                                    src={Logo}
                                    alt='User Avatar'
                                    className='object-cover w-full h-full'
                                />
                            </button>
                            <span className='text-white'>
                                {user?.name || 'Đại lý'}
                            </span>
                        </div>

                        <div className='relative language-dropdown'>
                            <button
                                onClick={toggleDropdown}
                                className='flex items-center px-4 py-2 bg-[#555] text-[#E2E2E2] border border-[#E2E2E2] rounded-full hover:bg-[#333] hover:text-white'
                            >
                                <img
                                    src={currentLanguage.flag}
                                    alt={currentLanguage.name}
                                    className='w-5 h-5 mr-2 rounded-full'
                                />
                                {t(currentLanguage.name)}
                            </button>
                            {isDropdownOpen && (
                                <div className='absolute right-0 w-40 mt-2 bg-white rounded shadow-lg'>
                                    <ul>
                                        {Object.values(languageData).map(
                                            ({ code, name, flag }) => (
                                                <li key={code}>
                                                    <button
                                                        onClick={() =>
                                                            changeLanguage(code)
                                                        }
                                                        className='flex items-center w-full px-4 py-2 text-sm text-[#555] hover:bg-[#555] hover:text-white'
                                                    >
                                                        <img
                                                            src={flag}
                                                            alt={name}
                                                            className='w-5 h-5 mr-2 rounded-full'
                                                        />
                                                        {t(name)}
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
