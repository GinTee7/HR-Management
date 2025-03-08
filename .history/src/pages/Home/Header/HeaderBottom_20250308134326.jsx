import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from 'react-icons/fa';
import Flex from './Flex';
import { Link, useNavigate } from 'react-router-dom';

const HeaderBottom = () => {
    const [show, setShow] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Trạng thái đăng nhập
    const navigate = useNavigate();
    const ref = useRef();

    // ✅ Kiểm tra token khi tải trang
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token found:', token); // Debug
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShow(false);
                setShowUser(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSearch = e => {
        setSearchQuery(e.target.value);
    };

    const handleLogout = () => {
        console.log('Logging out...'); // Debug
        localStorage.removeItem('token'); // ✅ Xóa token khi logout
        localStorage.removeItem('roleName'); // ✅ Xóa role nếu có
        setIsLoggedIn(false); // ✅ Cập nhật trạng thái
        navigate('/signin'); // ✅ Chuyển hướng về trang đăng nhập
    };

    return (
        <div className='w-full bg-[#F2F8FC] relative pt-24'>
            <div className='mx-auto max-w-container'>
                <Flex className='flex flex-col items-start justify-between w-full h-full px-4 pb-4 lg:flex-row lg:items-center lg:pb-0 lg:h-24'>
                    {/* Mua hàng */}
                    <div
                        onClick={() => setShow(!show)}
                        ref={ref}
                        className='flex items-center gap-2 cursor-pointer h-14 text-primeColor'
                    >
                        <HiOutlineMenuAlt4 className='w-5 h-5' />
                        <p className='text-[14px] font-normal'>Mua hàng</p>
                    </div>

                    {/* Thanh tìm kiếm */}
                    <div className='relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl'>
                        <input
                            className='flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]'
                            type='text'
                            onChange={handleSearch}
                            value={searchQuery}
                            placeholder='Tìm kiếm sản phẩm ở đây'
                        />
                        <FaSearch className='w-5 h-5' />
                    </div>

                    {/* User & Cart */}
                    <div className='relative flex items-center gap-4 pr-6 mt-2 cursor-pointer lg:mt-0'>
                        <div
                            onClick={() => setShowUser(!showUser)}
                            className='flex'
                        >
                            <FaUser />
                            <FaCaretDown />
                        </div>

                        {showUser && (
                            <motion.ul
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className='absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6'
                            >
                                {isLoggedIn ? (
                                    <>
                                        <Link to='/profile'>
                                            <li className='text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer'>
                                                Profile
                                            </li>
                                        </Link>
                                        <li
                                            onClick={handleLogout}
                                            className='text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer'
                                        >
                                            Logout
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <Link to='/signin'>
                                            <li className='text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer'>
                                                Login
                                            </li>
                                        </Link>
                                        <Link to='/signup'>
                                            <li className='text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer'>
                                                Sign Up
                                            </li>
                                        </Link>
                                    </>
                                )}
                            </motion.ul>
                        )}

                        {/* Cart */}
                        <Link to='/cart'>
                            <div className='relative'>
                                <FaShoppingCart />
                                <span className='absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full font-titleFont top-3 -right-2 bg-primeColor'>
                                    0
                                </span>
                            </div>
                        </Link>
                    </div>
                </Flex>
            </div>
        </div>
    );
};

export default HeaderBottom;
