import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://67890c382c874e66b7d76465.mockapi.io/products'
                );
                setServicesData(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };
        fetchData();
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div className='py-10 bg-gray-100'>
            <div className='container mx-auto'>
                <h2 className='mb-6 text-3xl font-bold text-center text-gray-800 uppercase'>
                    Sản phẩm nổi bật
                </h2>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                    {servicesData.map(service => (
                        <div
                            key={service.id}
                            className='flex flex-col items-center p-4 text-center transition duration-300 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg'
                            data-aos='fade-up'
                        >
                            <span
                                className='px-3 py-1 mb-2 text-sm font-semibold text-white rounded-full'
                                style={{
                                    backgroundColor:
                                        service.category === 'Thuốc trừ cỏ'
                                            ? '#38bdf8'
                                            : service.category ===
                                              'Thuốc trừ bệnh'
                                            ? '#f59e0b'
                                            : '#34d399'
                                }}
                            >
                                {service.category || 'Không phân loại'}
                            </span>
                            <img
                                src={
                                    service.img ||
                                    'https://via.placeholder.com/150'
                                }
                                alt={service.name}
                                className='object-cover w-40 h-40 mb-3 rounded-md'
                            />
                            <h3 className='text-lg font-bold text-gray-700'>
                                {service.name.length > 20
                                    ? `${service.name.substring(0, 20)}...`
                                    : service.name}
                            </h3>
                            <p className='mt-1 font-semibold text-gray-600 text-md'>
                                {service.price
                                    ? `${service.price.toLocaleString()} VNĐ`
                                    : '0 VNĐ'}
                            </p>
                            <div className='flex items-center gap-2 mt-3'>
                                <input
                                    type='number'
                                    min='1'
                                    value={cart[service.id] || 1}
                                    onChange={e =>
                                        setCart(prevCart => ({
                                            ...prevCart,
                                            [service.id]:
                                                parseInt(e.target.value) || 1
                                        }))
                                    }
                                    className='w-16 p-2 border rounded-md shadow-sm text-md focus:ring focus:ring-green-200'
                                />
                                <button className='flex items-center gap-2 px-5 py-2 text-white transition duration-300 bg-green-500 rounded-md shadow-md hover:bg-green-600'>
                                    <FaShoppingCart /> Thêm vào giỏ hàng
                                </button>
                            </div>
                            <Link
                                to='/product'
                                className='flex items-center gap-2 mt-3 text-blue-500 hover:underline text-md'
                            >
                                <MdOutlineLabelImportant /> Xem chi tiết
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
