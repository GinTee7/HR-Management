import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice'; // ✅ Import action từ Redux
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '@assets/logo.png';

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch(); // ✅ Dùng dispatch để gửi action
    const navigate = useNavigate();

    const API_URL =
        'https://7d53-2405-4802-9171-74d0-99ef-cf6b-c234-b678.ngrok-free.app/api/auth/login';

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(
                API_URL,
                { userName, password },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            console.log('✅ Login successful:', response.data);
            const { token, roleName, userType, department } = response.data;

            if (token) {
                // ✅ Gửi action Redux
                dispatch(
                    loginSuccess({
                        token,
                        role: roleName,
                        userType,
                        department
                    })
                );

                // ✅ Chuyển hướng dựa theo userType & department
                if (userType === 'ADMIN') {
                    navigate('/admin');
                } else if (userType === 'EMPLOYEE') {
                    if (department === 'SALES MANAGER') {
                        navigate('/business-manager');
                    } else if (department === 'WAREHOUSE MANAGER') {
                        navigate('/warehouse-manager');
                    } else {
                        navigate('/employee-dashboard'); // ✅ Mặc định cho nhân viên
                    }
                } else if (userType === 'AGENCY') {
                    navigate('/agency-dashboard');
                } else {
                    navigate('/'); // ✅ Trang mặc định nếu không xác định được userType
                }
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (err) {
            console.error('❌ Login Error:', err.response?.data || err.message);
            setError('Invalid username or password');
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0] p-6'>
            <div className='flex flex-col w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-xl max-w-7xl md:flex-row'>
                <div className='hidden md:flex items-center justify-center w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] p-6'>
                    <img
                        src={logo}
                        alt='Enterprise Logo'
                        className='object-contain w-[80%] h-auto shadow-xl rounded-lg'
                    />
                </div>

                <div className='flex flex-col justify-center w-full p-8 bg-white md:w-1/2'>
                    <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>
                        Welcome Back
                    </h2>

                    <form
                        className='flex flex-col w-full gap-4'
                        onSubmit={handleSubmit}
                    >
                        <input
                            className='w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F4F] focus:bg-white'
                            type='text'
                            name='userName'
                            placeholder='Username'
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            required
                        />

                        <input
                            className='w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F4F] focus:bg-white'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />

                        {error && (
                            <p className='text-center text-red-600'>{error}</p>
                        )}

                        <button
                            type='submit'
                            className='w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]'
                        >
                            Login
                        </button>

                        <div className='mt-4 text-center'>
                            <a
                                href='/forgot-password'
                                className='text-sm font-medium text-teal-700 hover:underline'
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <div className='mt-4 text-center'>
                            <p className='text-gray-700'>
                                Don't have an account?
                            </p>
                            <button
                                type='button'
                                onClick={() => navigate('/signup')}
                                className='font-medium text-teal-700 hover:underline'
                            >
                                Create an account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
