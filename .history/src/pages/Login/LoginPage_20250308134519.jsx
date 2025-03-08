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

    const API_URL = 'https://your-api.com/api/auth/login';

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
            const { token, roleName } = response.data;

            if (token) {
                dispatch(loginSuccess({ token, role: roleName })); // ✅ Gửi action Redux

                // ✅ Chuyển hướng dựa theo role
                switch (roleName) {
                    case 'ADMIN':
                        navigate('/admin');
                        break;
                    case 'AGENCY':
                        navigate('/');
                        break;
                    case 'WAREHOUSE MANAGER':
                        navigate('/warehouse-manager');
                        break;
                    case 'SALES MANAGER':
                        navigate('/business-manager');
                        break;
                    default:
                        navigate('/');
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
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='p-6 bg-white rounded-lg shadow-lg w-96'>
                <img src={logo} alt='Logo' className='w-20 mx-auto mb-4' />
                <h2 className='mb-4 text-2xl font-semibold text-center'>
                    Login
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='w-full p-2 mb-3 border rounded-lg'
                        placeholder='Username'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        className='w-full p-2 mb-3 border rounded-lg'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className='text-red-500'>{error}</p>}
                    <button
                        type='submit'
                        className='w-full p-2 text-white bg-blue-600 rounded-lg'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
