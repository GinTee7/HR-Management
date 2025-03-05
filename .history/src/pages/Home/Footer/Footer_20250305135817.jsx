import 'aos/dist/aos.css';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerLogo from '@assets/logo.png';

const Footer = () => {
    return (
        <div className='py-10 bg-gray-100'>
            <section className='max-w-6xl px-4 mx-auto'>
                <div className='grid gap-8 md:grid-cols-3'>
                    <div className='space-y-4'>
                        <h1 className='flex items-center gap-3 text-2xl font-bold'>
                            <img src={footerLogo} alt='Logo' className='w-14' />
                            Minh Long
                        </h1>
                        <p className='text-gray-700'>
                            Các sản phẩm của chúng tôi giúp cây trồng khỏe mạnh,
                            dễ trồng, tăng năng suất và lợi nhuận cho nông dân
                            Việt Nam.
                        </p>
                        <div className='flex items-center gap-3 text-gray-600'>
                            <FaLocationArrow className='text-lg' />
                            <p>
                                Trụ sở: Số 98, Ấp Đông Thành, Xã Thạnh Đông A,
                                Tân Hiệp, Kiên Giang
                            </p>
                        </div>
                        <div className='flex items-center gap-3 text-gray-600'>
                            <FaMobileAlt className='text-lg' />
                            <p>1900 8982</p>
                        </div>
                        <div className='flex gap-4 text-gray-600'>
                            <a
                                href='#'
                                className='transition hover:text-blue-500'
                            >
                                <FaInstagram className='text-2xl' />
                            </a>
                            <a
                                href='#'
                                className='transition hover:text-blue-500'
                            >
                                <FaFacebook className='text-2xl' />
                            </a>
                            <a
                                href='#'
                                className='transition hover:text-blue-500'
                            >
                                <FaLinkedin className='text-2xl' />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6 sm:grid-cols-3'>
                        <div>
                            <h2 className='mb-4 text-xl font-semibold'>
                                Liên kết
                            </h2>
                            <ul className='space-y-2 text-gray-700'>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/home'>Trang chủ</Link>
                                </li>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/aboutus'>Giới thiệu</Link>
                                </li>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/shop'>Sản phẩm</Link>
                                </li>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/'>Đăng nhập</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-4 text-xl font-semibold'>
                                Sản phẩm
                            </h2>
                            <ul className='space-y-2 text-gray-700'>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/product'>Phân bón</Link>
                                </li>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/product'>Thuốc trừ sâu</Link>
                                </li>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/product'>Thuốc trừ bệnh</Link>
                                </li>
                                <li className='transition hover:text-blue-500'>
                                    <Link to='/product'>
                                        Thuốc bảo vệ thực vật
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <iframe
                                title='Google Map'
                                width='100%'
                                height='200'
                                frameBorder='0'
                                className='rounded-lg shadow-md'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.964573733607!2d105.0840441758133!3d10.821334889341088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a8dc1f86ef3af%3A0x95d26b10806bf5bb!2zU8ahbiBwaOG7kSAxMDAgxJDDrG5nIEdpYW5n!5e0!3m2!1sen!2s!4v1707920845673'
                                allowFullScreen=''
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className='pt-6 mt-10 text-center text-gray-600 border-t'>
                    © 2025 || Hệ thống quản lý Minh Long
                </div>
            </section>
        </div>
    );
};

export default Footer;
