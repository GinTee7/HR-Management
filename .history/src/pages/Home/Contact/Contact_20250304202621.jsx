import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    FaMapMarkerAlt,
    FaClock,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa';
import hero3 from '@assets/hero3.png';

const schema = yup.object().shape({
    name: yup.string().required('Tên không được để trống'),
    email: yup
        .string()
        .email('Email không hợp lệ')
        .required('Email là bắt buộc'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
        .min(10, 'Số điện thoại ít nhất 10 số')
        .required('Số điện thoại là bắt buộc'),
    message: yup.string().required('Nội dung không được để trống')
});

const ContactInfo = () => (
    <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
        <h3 className='mb-4 text-2xl font-semibold text-gray-800'>
            Thông tin liên hệ
        </h3>
        <p className='flex items-center gap-3 mb-3 text-lg text-gray-700'>
            <FaMapMarkerAlt className='text-red-500' /> Số 98, Ấp Đông Thành, Xã
            Thạnh Đông A, Tân Hiệp, Kiên Giang
        </p>
        <p className='flex items-center gap-3 mb-3 text-lg text-gray-700'>
            <FaClock className='text-blue-500' /> Thứ 2 đến Thứ 7: 7h30 đến 17h
        </p>
        <p className='flex items-center gap-3 mb-3 text-lg text-gray-700'>
            <FaPhoneAlt className='text-green-500' /> 1900 89 82
        </p>
        <p className='flex items-center gap-3 text-lg text-gray-700'>
            <FaEnvelope className='text-purple-500' /> info@minhlongagro.com
        </p>
    </div>
);

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log('Form Data:', data);
        alert('Gửi thông tin thành công!');
    };

    return (
        <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='mb-4 text-2xl font-semibold text-gray-800'>
                Gửi thắc mắc cho chúng tôi
            </h3>
            <p className='mb-6 text-gray-600'>
                Nếu bạn có thắc mắc gì, hãy gửi yêu cầu và chúng tôi sẽ liên lạc
                lại với bạn sớm nhất có thể.
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 gap-4 md:grid-cols-2'
            >
                <input
                    {...register('name')}
                    placeholder='Tên của bạn'
                    className='input'
                />
                <p className='text-red-500'>{errors.name?.message}</p>

                <input
                    {...register('email')}
                    placeholder='Email của bạn'
                    className='input'
                />
                <p className='text-red-500'>{errors.email?.message}</p>

                <input
                    {...register('phone')}
                    placeholder='Số điện thoại của bạn'
                    className='input'
                />
                <p className='text-red-500'>{errors.phone?.message}</p>

                <textarea
                    {...register('message')}
                    placeholder='Nội dung'
                    className='input md:col-span-2'
                    rows='4'
                ></textarea>
                <p className='text-red-500'>{errors.message?.message}</p>

                <button
                    type='submit'
                    className='w-full px-6 py-3 text-white transition-all bg-black rounded-lg hover:bg-gray-800 md:w-auto'
                >
                    GỬI CHO CHÚNG TÔI
                </button>
            </form>
        </div>
    );
};

const ContactPage = () => {
    return (
        <div
            className='flex items-center justify-center min-h-screen p-8 bg-center bg-cover'
            style={{ backgroundImage: `url(${hero3})` }}
        >
            <div className='container p-8 mx-auto bg-white shadow-lg rounded-xl'>
                <h2 className='mb-6 text-4xl font-bold text-center text-gray-900'>
                    Liên Hệ
                </h2>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <ContactInfo />
                    <div className='overflow-hidden rounded-lg shadow-md'>
                        <iframe
                            title='Google Maps'
                            className='w-full h-full min-h-[300px]'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.964573733607!2d105.0840441758133!3d10.821334889341088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a8dc1f86ef3af%3A0x95d26b10806bf5bb!2zU8ahbiBwaOG7kSAxMDAgxJDDrG5nIEdpYW5n!5e0!3m2!1sen!2s!4v1707920845673'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
