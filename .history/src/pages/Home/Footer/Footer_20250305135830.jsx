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
        <div className='bg-gray-100'>
            <section className='max-w-[1200px] mx-auto'>
                <div className='grid py-5 md:grid-cols-3'>
                    <div className='px-4 py-8 '>
                        <h1 className='flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
                            <img src={footerLogo} alt='Logo' className='w-16' />
                            Minh Long
                        </h1>
                        <p className=''>
                            Các sản phẩm của chúng tôi luôn tạo ra những cây
                            khỏe mạnh hơn, dễ trồng, giúp tăng đáng kể năng suất
                            và lợi nhuận cho người nông dân Việt Nam.
                        </p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>
                                Trụ sở chính: Số 98, Ấp Đông Thành, Xã Thạnh
                                Đông A, Tân Hiệp, Kiên Giang
                            </p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt />
                            <p>1900 8982</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href='#'>
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href='#'>
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href='#'>
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10 '>
                        <div className=''>
                            <div className='px-4 py-8 '>
                                <h1 className='mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left'>
                                    Liên kết quan trọng
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/home'>Trang chủ</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/aboutus'>Giới thiệu</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/shop'>Sản phẩm</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/'>Đăng nhập</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=''>
                            <div className='px-4 py-8 '>
                                <h1 className='mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left'>
                                    Các loại sản phẩm
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/product'>Phân bón</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/product'>Thuốc trừ sâu</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/product'>
                                            Thuốc trừ bệnh
                                        </Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-blue-500'>
                                        <Link to='/product'>
                                            Thuốc bảo vệ thực vật
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='px-4 py-8 w-96'>
                            <div className='w-full h-72'>
                                <iframe
                                    title='Google Map'
                                    width='110%'
                                    height='100%'
                                    frameBorder='0'
                                    scrolling='no'
                                    marginHeight='0'
                                    marginWidth='0'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.964573733607!2d105.0840441758133!3d10.821334889341088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a8dc1f86ef3af%3A0x95d26b10806bf5bb!2zU8ahbiBwaOG7kSAxMDAgxJDDrG5nIEdpYW5n!5e0!3m2!1sen!2s!4v1707920845673'
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='py-10 text-center border-t-2 border-gray-300/50'>
                        © 2025 || Hệ thống quản lý Minh Long
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
