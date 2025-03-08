import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // const [formData, setFormData] = useState({
    //     username: 'johndoe',
    //     email: 'johndoe@gmail.com',
    //     phone: '0123456789',
    //     userType: 'EMPLOYEE',
    //     fullName: 'John Doe',
    //     position: 'Software Engineer',
    //     department: 'IT',
    //     agencyName: '',
    //     street: '123 Main Street',
    //     wardName: 'Ward 1',
    //     districtName: 'District A',
    //     provinceName: 'Province X',
    //     createdAt: '2025-03-08T04:27:46.020Z'
    // });

    const [errors, setErrors] = useState({});

    const API_URL =
        'https://7d53-2405-4802-9171-74d0-99ef-cf6b-c234-b678.ngrok-free.app/api/auth/register';

    const validateInputs = () => {
        let newErrors = {};

        if (!formData.email.includes('@gmail.com')) {
            newErrors.email = t(
                'Email must be a valid Gmail address (e.g., example@gmail.com)'
            );
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = t('Phone number must be exactly 10 digits');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateInputs()) {
            return;
        }

        try {
            await axios.post(API_URL, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            toast.success(
                t('Registration successful! Please wait for admin approval.'),
                {
                    position: 'top-right',
                    autoClose: 3000
                }
            );

            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (err) {
            console.error(
                'Registration Error:',
                err.response?.data || err.message
            );
            toast.error(
                t('Registration failed. Please check your information.'),
                {
                    position: 'top-right'
                }
            );
        }
    };

    return (
        <div className='flex items-center justify-center bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0] min-h-screen'>
            <div className='flex shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-[800px] p-10'>
                <div className='w-full'>
                    <h2 className='mb-6 text-3xl font-extrabold text-center text-gray-800'>
                        {t('Sign Up')}
                    </h2>
                    <form
                        className='grid grid-cols-2 gap-5'
                        onSubmit={handleSubmit}
                    >
                        {/* USER DETAILS */}
                        <div className='flex flex-col gap-5'>
                            <input
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                type='text'
                                name='fullName'
                                placeholder={t('Full Name')}
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                type='text'
                                name='username'
                                placeholder={t('Username')}
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className={`w-full px-5 py-3 text-lg bg-gray-100 border ${
                                    errors.email
                                        ? 'border-red-500'
                                        : 'border-gray-400'
                                } rounded-lg`}
                                type='email'
                                name='email'
                                placeholder={t('Email')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && (
                                <span className='text-red-500'>
                                    {errors.email}
                                </span>
                            )}
                            <input
                                className={`w-full px-5 py-3 text-lg bg-gray-100 border ${
                                    errors.phone
                                        ? 'border-red-500'
                                        : 'border-gray-400'
                                } rounded-lg`}
                                type='text'
                                name='phone'
                                placeholder={t('Phone')}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            {errors.phone && (
                                <span className='text-red-500'>
                                    {errors.phone}
                                </span>
                            )}

                            <select
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                name='userType'
                                value={formData.userType}
                                onChange={handleChange}
                            >
                                <option value='EMPLOYEE'>
                                    {t('Employee')}
                                </option>
                                <option value='AGENCY'>{t('Agency')}</option>
                            </select>

                            {formData.userType === 'EMPLOYEE' && (
                                <>
                                    <input
                                        className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                        type='text'
                                        name='position'
                                        placeholder={t('Position')}
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                        type='text'
                                        name='department'
                                        placeholder={t('Department')}
                                        value={formData.department}
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                            )}

                            {formData.userType === 'AGENCY' && (
                                <input
                                    className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                    type='text'
                                    name='agencyName'
                                    placeholder={t('Agency Name')}
                                    value={formData.agencyName}
                                    onChange={handleChange}
                                    required
                                />
                            )}
                        </div>

                        {/* ADDRESS DETAILS */}
                        <div className='flex flex-col gap-5'>
                            <input
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                type='text'
                                name='street'
                                placeholder={t('Street')}
                                value={formData.street}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                type='text'
                                name='wardName'
                                placeholder={t('Ward')}
                                value={formData.wardName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                type='text'
                                name='districtName'
                                placeholder={t('District')}
                                value={formData.districtName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className='w-full px-5 py-3 text-lg bg-gray-100 border border-gray-400 rounded-lg'
                                type='text'
                                name='provinceName'
                                placeholder={t('Province')}
                                value={formData.provinceName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-full col-span-2 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:opacity-90'
                        >
                            {t('Sign Up')}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUpPage;
