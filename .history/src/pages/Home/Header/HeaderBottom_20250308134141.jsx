import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaCaretDown, FaShoppingCart } from 'react-icons/fa';

const HeaderBottom = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [showUser, setShowUser] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/signin'); // Chuyển hướng về trang đăng nhập
    };

    return (
        <div className='flex items-center justify-between p-4 bg-gray-200'>
            <div className='text-lg font-semibold'>Shop</div>

            <div className='relative'>
                <div
                    onClick={() => setShowUser(!showUser)}
                    className='flex items-center cursor-pointer'
                >
                    <FaUser className='mr-2' />
                    <FaCaretDown />
                </div>

                {showUser && (
                    <div className='absolute right-0 p-4 mt-2 bg-white rounded-lg shadow-lg'>
                        {token ? (
                            <>
                                <Link to='/profile' className='block mb-2'>
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className='block w-full text-left text-red-500'
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to='/signin' className='block mb-2'>
                                    Login
                                </Link>
                                <Link to='/signup' className='block'>
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>

            <Link to='/cart'>
                <FaShoppingCart className='text-xl' />
            </Link>
        </div>
    );
};

export default HeaderBottom;
