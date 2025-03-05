import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import HeaderTitle from '@components/HeaderTitle/HeaderTitle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextArrow, PrevArrow } from './CustomArrows';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    const refreshServices = async () => {
        try {
            const response = await axios.get(
                'https://67890c382c874e66b7d76465.mockapi.io/products'
            );
            setServicesData(response.data);
        } catch (error) {
            console.error('Lỗi khi làm mới dữ liệu:', error);
        }
    };

    useEffect(() => {
        refreshServices();
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <div className='bg-[#F2F8FC]'>
            <div className='py-5 pb-12 lg:py-28'>
                <div className='container'>
                    <HeaderTitle
                        title='Sản phẩm'
                        subtitle='Sản phẩm của chúng tôi'
                        description='Cung cấp các giải pháp nông nghiệp chất lượng cao.'
                    />
                    {servicesData.length > 0 ? (
                        <Slider {...sliderSettings} className='relative pb-8'>
                            {servicesData.map((service, index) => (
                                <div
                                    key={service.id}
                                    className='px-4'
                                    data-aos='fade-up'
                                    data-aos-delay={index * 100}
                                >
                                    <div className='relative w-full bg-[#D3D4D8] group rounded-2xl overflow-hidden '>
                                        <div className='relative overflow-hidden max-w-80 h-[380px] flex flex-col justify-between'>
                                            <div>
                                                <img
                                                    className='object-cover w-full h-72'
                                                    src={
                                                        service.img ||
                                                        'https://via.placeholder.com/150'
                                                    }
                                                    alt={
                                                        service.name ||
                                                        'Hình ảnh sản phẩm'
                                                    }
                                                />
                                            </div>
                                            <div className='flex flex-col p-4'>
                                                <h2 className='text-lg font-bold truncate text-[#31473A] leading-tight'>
                                                    {service.name.length > 20
                                                        ? `${service.name.substring(
                                                              0,
                                                              20
                                                          )}...`
                                                        : service.name}
                                                </h2>
                                                <p className='text-[#767676] text-[16px] font-semibold mt-0 leading-tight'>
                                                    {service.price
                                                        ? `${service.price.toLocaleString()} VNĐ`
                                                        : '0 VNĐ'}
                                                </p>
                                                <p className='text-[#767676] text-[14px] leading-tight'>
                                                    {service.category ||
                                                        'Chưa phân loại'}
                                                </p>
                                            </div>
                                            <div className='w-full absolute bg-white bottom-[-100px] group-hover:bottom-0 group-hover:translate-y-[-80px] translate-y-full duration-700 ease-in-out'>
                                                <ul className='flex flex-col items-center justify-center w-full gap-2 p-4 border border-gray-200 rounded-md shadow-md'>
                                                    <li className='flex items-center justify-end w-full gap-2 pb-1 text-sm font-medium text-gray-600 duration-300 border-b border-gray-200 cursor-pointer hover:text-[#31473A] hover:border-[#31473A]'>
                                                        <FaShoppingCart />
                                                        <span>
                                                            Thêm vào giỏ hàng
                                                        </span>
                                                    </li>
                                                    <li className='flex items-center justify-end w-full gap-2 pb-1 text-sm font-medium text-gray-600 duration-300 border-b border-gray-200 cursor-pointer hover:text-[#31473A] hover:border-[#31473A]'>
                                                        <Link
                                                            to='/product'
                                                            className='flex items-center gap-2'
                                                        >
                                                            <MdOutlineLabelImportant />
                                                            <span>
                                                                Xem chi tiết
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p className='mt-8 text-center text-gray-500'>
                            Đang tải sản phẩm...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
