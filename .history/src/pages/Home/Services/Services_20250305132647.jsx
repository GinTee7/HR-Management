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
                                    <div className='relative overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl'>
                                        <div className='overflow-hidden max-w-80 h-[380px] flex flex-col justify-between'>
                                            <div className='relative h-72'>
                                                <img
                                                    className='object-cover w-full h-full rounded-t-xl'
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
                                            <div className='p-4 text-center'>
                                                <h2 className='text-lg font-bold text-[#31473A] truncate'>
                                                    {service.name}
                                                </h2>
                                                <p className='text-[#767676] text-[16px] font-semibold mt-1'>
                                                    {service.price
                                                        ? `${service.price.toLocaleString()} VNĐ`
                                                        : '0 VNĐ'}
                                                </p>
                                            </div>
                                            <div className='absolute bottom-0 left-0 flex flex-col items-center w-full gap-2 p-4 bg-green-100 rounded-b-xl'>
                                                <button className='flex items-center gap-2 px-4 py-2 text-white transition bg-green-500 rounded-lg hover:bg-green-600'>
                                                    <FaShoppingCart /> Thêm vào
                                                    giỏ hàng
                                                </button>
                                                <Link
                                                    to='/product'
                                                    className='flex items-center gap-2 text-green-600 hover:underline'
                                                >
                                                    <MdOutlineLabelImportant />{' '}
                                                    Xem chi tiết
                                                </Link>
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
