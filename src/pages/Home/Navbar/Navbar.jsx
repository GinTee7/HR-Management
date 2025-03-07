import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Logo from '@assets/Logo.png';
import vietnam from '@assets/vietnam.png';
import unitedkingdom from '@assets/united-kingdom.png';
import AvatarPlaceholder from '@assets/Avatar.jpg';

const Menu = [
    { id: 1, name: 'Trang chủ', link: '/' },
    { id: 2, name: 'Về chúng tôi', link: '/aboutus' },
    { id: 3, name: 'Sản phẩm', link: '/shop' },
];

const languageData = {
    en: { code: 'en', name: 'English', flag: unitedkingdom },
    vi: { code: 'vi', name: 'Tiếng Việt', flag: vietnam }
};

const Navbar = ({ isLoggedIn, onLogout, user }) => {
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);

    const currentLanguage = useMemo(
        () => languageData[i18n.language] || languageData.en,
        [i18n.language]
    );

    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen(prev => !prev);
    }, []);

    const toggleLogoDropdown = useCallback(() => {
        setIsLogoDropdownOpen(prev => !prev);
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
            if (!event.target.closest('.logo-dropdown')) {
                setIsLogoDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='fixed top-0 left-0 z-50 w-full shadow-xl bg-gradient-to-r from-[#000000] to-[#434343]'>
            <div className='container py-3 sm:py-0'>
                <div className='flex items-center justify-between'>
                    {/* Logo Dropdown */}
                    <div className='relative logo-dropdown'>
                        <button onClick={toggleLogoDropdown} className='flex items-center gap-2'>
                            <div className='relative w-20 h-20 my-3 overflow-hidden bg-white rounded-full'>
                                <img src={Logo} alt='Logo' className='absolute top-0 left-0 object-cover w-full h-full rounded-full' />
                            </div>
                        </button>
                        {isLoggedIn && isLogoDropdownOpen && (
                            <div className='absolute left-0 w-48 mt-2 bg-white rounded shadow-lg'>
                                <ul>
                                    <li>
                                        <Link to='/profile' className='block px-4 py-2 text-[#555] hover:bg-[#555] hover:text-white'>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/cart' className='block px-4 py-2 text-[#555] hover:bg-[#555] hover:text-white'>
                                            Tạo đơn hàng
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={onLogout}
                                            className='block w-full px-4 py-2 text-left text-[#555] hover:bg-[#555] hover:text-white'
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='flex items-center gap-4'>
                        <ul className='hidden gap-4 sm:flex'>
                            {Menu.map(({ id, name, link }) => (
                                <li key={id}>
                                    <Link
                                        to={link}
                                        className={classNames(
                                            'inline-block px-4 py-2 rounded duration-300',
                                            location.pathname === link
                                                ? 'bg-[#555] text-[#E2E2E2] font-bold'
                                                : 'text-white hover:bg-[#555] hover:text-[#E2E2E2]'
                                        )}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                            {/* Conditional menu item */}
                            <li>
                                <Link
                                    to={isLoggedIn ? '/order-history' : '/contact'}
                                    className={classNames(
                                        'inline-block px-4 py-2 rounded duration-300',
                                        location.pathname === (isLoggedIn ? '/order-history' : '/contact')
                                            ? 'bg-[#555] text-[#E2E2E2] font-bold'
                                            : 'text-white hover:bg-[#555] hover:text-[#E2E2E2]'
                                    )}
                                >
                                    {isLoggedIn ? 'Lịch sử mua hàng' : 'Liên hệ'}
                                </Link>
                            </li>
                        </ul>

                        {/* Language Dropdown */}
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
                                        {Object.values(languageData).map(({ code, name, flag }) => (
                                            <li key={code}>
                                                <button
                                                    onClick={() => changeLanguage(code)}
                                                    className='flex items-center w-full px-4 py-2 text-sm text-[#555] hover:bg-[#555] hover:text-white'
                                                >
                                                    <img src={flag} alt={name} className='w-5 h-5 mr-2 rounded-full' />
                                                    {t(name)}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* User Info */}
                        {isLoggedIn ? (
                            <div className='flex items-center gap-2'>
                                <img src={AvatarPlaceholder} alt='User Avatar' className='w-8 h-8 rounded-full' />
                                <span className='text-white'>{user.username}</span>
                            </div>
                        ) : (
                            <Link to='/signin' className='px-4 py-2 bg-[#555] text-[#E2E2E2] rounded-full'>
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;