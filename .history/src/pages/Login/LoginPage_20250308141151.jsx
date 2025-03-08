import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
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
            const { token, roleName } = response.data;

            if (token) {
                dispatch(loginSuccess({ token, role: roleName }));

                // ✅ Điều hướng theo role
                switch (roleName) {
                    case 'ADMIN':
                        navigate('/admin/dashboard');
                        break;
                    case 'WAREHOUSE MANAGER':
                        navigate('/warehouse-manager/dashboard');
                        break;
                    case 'SALES MANAGER':
                        navigate('/business-manager/dashboard');
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
