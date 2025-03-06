import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import HeaderTitle from '@components/HeaderTitle/HeaderTitle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShoppingCart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextArrow, PrevArrow } from './CustomArrows';
import Img from '@assets/Avatar.jpg';
import homePageBanner from '@assets/homePageBanner.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

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
        <div
            className='bg-[#F2F8FC] py-10'
            style={{ backgroundImage: `url(${homePageBanner})` }}
        >
            {/* Services*/}
            <div className='container'>
                <HeaderTitle
                    title='Sản phẩm'
                    subtitle='Sản phẩm của chúng tôi'
                    description='Cung cấp các giải pháp nông nghiệp chất lượng cao.'
                />
                {servicesData.length > 0 ? (
                    <Slider {...sliderSettings} className='relative px-2 pb-10'>
                        {servicesData.map((service, index) => (
                            <div
                                key={service.id}
                                className='px-2'
                                data-aos='fade-up'
                                data-aos-delay={index * 100}
                            >
                                <div className='relative flex flex-col items-center p-6 transition-all bg-white border border-gray-300 shadow-lg rounded-2xl hover:shadow-xl'>
                                    <div className='relative flex items-center justify-center h-64'>
                                        <img
                                            className='object-contain w-auto max-h-full'
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
                                    <div className='w-full mt-4 text-center'>
                                        <span className='px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-full shadow-md'>
                                            THUỐC TRỪ CỎ
                                        </span>
                                        <h2 className='text-lg font-semibold text-[#31473A] mt-3'>
                                            {service.name}
                                        </h2>
                                    </div>
                                    <button className='flex items-center gap-2 px-8 py-3 mt-5 text-lg font-medium text-white transition bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg'>
                                        <FaShoppingCart /> Thêm vào giỏ hàng
                                    </button>
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

            {/* Banner */}
            <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative bg-cover bg-center mt-10'>
                <div className='container p-10 rounded-lg shadow-lg '>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                        <div data-aos='flip-up'>
                            <img
                                src={Img}
                                alt='biryani img'
                                className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'
                            />
                        </div>
                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1
                                data-aos='fade-up'
                                className='text-3xl font-bold sm:text-4xl'
                            >
                                Về Minh Long
                            </h1>
                            <p
                                data-aos='fade-up'
                                className='text-sm leading-5 tracking-wide text-gray-600'
                            >
                                Công Ty TNHH BVTV Minh Long được xây dựng từ
                                hoài bão phát triển nông nghiệp của những con
                                người đã có hơn 30 năm gắn bó với nông nghiệp.
                                <br />
                                <br />
                                Thấu hiểu được nỗi vất vả của nhà nông, Công Ty
                                Minh Long quyết tâm phục vụ vì lợi ích người
                                nông dân. Các sản phẩm do Công ty Minh Long sản
                                xuất và phân phối luôn đáp ứng các tiêu chí khắt
                                khe về chất lượng, được các cơ quan quản lý công
                                nhận, được người dân tin dùng.
                            </p>
                            <div className='flex gap-6'>
                                <div data-aos='fade-up'>
                                    <GrSecure className='w-20 h-20 p-5 text-4xl rounded-full shadow-md bg-violet-100' />
                                </div>
                                <div data-aos='fade-up' data-aos-delay='200'>
                                    <IoFastFood className='w-20 h-20 p-5 text-4xl bg-orange-100 rounded-full shadow-md' />
                                </div>
                                <div data-aos='fade-up' data-aos-delay='400'>
                                    <GiFoodTruck className='w-20 h-20 p-5 text-4xl bg-green-100 rounded-full shadow-md' />
                                </div>
                            </div>
                            <div data-aos='fade-up' data-aos-delay='500'>
                                <button className='px-6 py-3 text-white transition rounded-full shadow-lg bg-gradient-to-r from-primary to-secondary hover:shadow-md'>
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
