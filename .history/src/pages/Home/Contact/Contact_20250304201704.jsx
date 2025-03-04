import React from 'react';
import {
    FaMapMarkerAlt,
    FaClock,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa';
import hero3 from '@assets/hero3.png';

const ContactPage = () => {
    return (
        <div
            className='flex items-center justify-center min-h-screen p-8 bg-center bg-cover'
            style={{
                backgroundImage: `url(${hero3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='container p-8 mx-auto bg-white shadow-lg bg-opacity-90 rounded-xl'>
                <h2 className='mb-6 text-4xl font-bold text-center text-gray-900'>
                    Liên Hệ
                </h2>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
                        <h3 className='mb-4 text-2xl font-semibold text-gray-800'>
                            Thông tin liên hệ
                        </h3>
                        <p className='flex items-center gap-3 mb-3 text-lg text-gray-700'>
                            <FaMapMarkerAlt className='text-red-500' /> Số 98,
                            Ấp Đông Thành, Xã Thạnh Đông A, Tân Hiệp, Kiên Giang
                        </p>
                        <p className='flex items-center gap-3 mb-3 text-lg text-gray-700'>
                            <FaClock className='text-blue-500' /> Thứ 2 đến Thứ
                            7: 7h30 đến 17h
                        </p>
                        <p className='flex items-center gap-3 mb-3 text-lg text-gray-700'>
                            <FaPhoneAlt className='text-green-500' /> 1900 89 82
                        </p>
                        <p className='flex items-center gap-3 text-lg text-gray-700'>
                            <FaEnvelope className='text-purple-500' />{' '}
                            info@minhlongagro.com
                        </p>
                    </div>

                    <div className='overflow-hidden rounded-lg shadow-md'>
                        <iframe
                            title='Google Maps'
                            className='w-full h-full min-h-[300px]'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.964573733607!2d105.0840441758133!3d10.821334889341088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a8dc1f86ef3af%3A0x95d26b10806bf5bb!2zU8ahbiBwaOG7kSAxMDAgxJDDrG5nIEdpYW5n!5e0!3m2!1sen!2s!4v1707920845673'
                            allowFullScreen=''
                            loading='lazy'
                        ></iframe>
                    </div>
                </div>

                <div className='p-6 mt-8 bg-gray-100 rounded-lg shadow-md'>
                    <h3 className='mb-4 text-2xl font-semibold text-gray-800'>
                        Gửi thắc mắc cho chúng tôi
                    </h3>
                    <p className='mb-6 text-gray-600'>
                        Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng
                        tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có
                        thể.
                    </p>
                    <form className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <input
                            type='text'
                            placeholder='Tên của bạn'
                            className='w-full p-3 border border-gray-300 rounded-lg'
                            required
                        />
                        <input
                            type='email'
                            placeholder='Email của bạn'
                            className='w-full p-3 border border-gray-300 rounded-lg'
                            required
                        />
                        <input
                            type='tel'
                            placeholder='Số điện thoại của bạn'
                            className='w-full p-3 border border-gray-300 rounded-lg'
                            required
                        />
                        <textarea
                            placeholder='Nội dung'
                            className='w-full col-span-1 p-3 border border-gray-300 rounded-lg md:col-span-2'
                            rows='4'
                            required
                        ></textarea>
                        <button
                            type='submit'
                            className='w-full px-6 py-3 text-white transition-all bg-black rounded-lg hover:bg-gray-800 md:w-auto'
                        >
                            GỬI CHO CHÚNG TÔI
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
