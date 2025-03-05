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

    const handleQuantityChange = (id, quantity) => {
        setCart(prevCart => ({ ...prevCart, [id]: quantity }));
    };

    return (
        <div className='py-10 bg-gray-100'>
            <div className='container mx-auto'>
                <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>
                    Sản phẩm của chúng tôi
                </h2>
                <div className='p-6 overflow-x-auto bg-white rounded-lg shadow-lg'>
                    <table className='min-w-full text-lg border-collapse'>
                        <thead>
                            <tr className='text-lg text-gray-700 uppercase bg-gray-200'>
                                <th className='p-4 text-left'>Sản phẩm</th>
                                <th className='p-4 text-left'>Giá</th>
                                <th className='p-4 text-left'>Danh mục</th>
                                <th className='p-4 text-left'>Số lượng</th>
                                <th className='p-4 text-left'>Tổng</th>
                                <th className='p-4 text-center'>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicesData.map(service => (
                                <tr
                                    key={service.id}
                                    className='text-lg border-b hover:bg-gray-50'
                                >
                                    <td className='flex items-center gap-6 p-4'>
                                        <img
                                            src={
                                                service.img ||
                                                'https://via.placeholder.com/150'
                                            }
                                            alt={service.name}
                                            className='object-cover w-24 h-24 rounded-lg'
                                        />
                                        <span className='text-xl font-semibold text-gray-800'>
                                            {service.name}
                                        </span>
                                    </td>
                                    <td className='p-4 text-lg text-gray-700'>
                                        {service.price
                                            ? `${service.price.toLocaleString()} VNĐ`
                                            : '0 VNĐ'}
                                    </td>
                                    <td className='p-4 text-lg text-gray-700'>
                                        {service.category || 'Chưa phân loại'}
                                    </td>
                                    <td className='p-4'>
                                        <input
                                            type='number'
                                            min='1'
                                            value={cart[service.id] || 1}
                                            onChange={e =>
                                                handleQuantityChange(
                                                    service.id,
                                                    parseInt(e.target.value) ||
                                                        1
                                                )
                                            }
                                            className='w-24 p-3 text-lg border rounded-lg'
                                        />
                                    </td>
                                    <td className='p-4 text-lg font-semibold text-gray-700'>
                                        {(
                                            service.price *
                                            (cart[service.id] || 1)
                                        ).toLocaleString()}{' '}
                                        VNĐ
                                    </td>
                                    <td className='p-4 text-center'>
                                        <button className='flex items-center gap-3 px-6 py-3 text-lg text-white bg-green-500 rounded-lg hover:bg-green-600'>
                                            <FaShoppingCart /> Thêm vào giỏ hàng
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Services;
