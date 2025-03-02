import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '@components/pageProps/Breadcrumbs';
import ItemCard from './ItemCard';

const Cart = () => {
    const sampleProducts = [
        {
            _id: '1',
            name: 'Thuốc trừ sâu',
            image: 'https://via.placeholder.com/150',
            price: 50,
            quantity: 2
        },
        {
            _id: '2',
            name: 'Thuốc trừ sâu',
            image: 'https://via.placeholder.com/150',
            price: 120,
            quantity: 1
        },
        {
            _id: '3',
            name: 'Thuốc trừ sâu',
            image: 'https://via.placeholder.com/150',
            price: 75,
            quantity: 3
        }
    ];

    const [products, setProducts] = useState(sampleProducts);
    const [totalAmt, setTotalAmt] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);

    useEffect(() => {
        const price = products.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotalAmt(price);
    }, [products]);

    useEffect(() => {
        setShippingCharge(totalAmt <= 200 ? 30 : totalAmt <= 400 ? 25 : 20);
    }, [totalAmt]);

    return (
        <div className='w-full bg-[#F2F8FC] min-h-screen py-10'>
            <Breadcrumbs title='Giỏ hàng' />
            {products.length > 0 ? (
                <div className='px-4 mx-auto max-w-container'>
                    <div className='w-full overflow-hidden bg-white rounded-md shadow-md'>
                    <div className='grid items-center w-full h-20 grid-cols-5 px-4 text-lg font-semibold bg-gray-200 border-b border-gray-300 text-primeColor'>
                            <h2 className='col-span-2 text-center'>Sản phẩm</h2>
                            <h2 className='text-left'>Giá</h2>
                            <h2 className='text-left'>Số lượng</h2>
                            <h2 className='text-left'>Tổng</h2>
                        </div>
                        <div className='p-4 mt-5 space-y-4'>
                            {products.map(item => (
                                <ItemCard key={item._id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-end mt-6 max-w-7xl'>
                        <div className='flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-md shadow-lg w-96'>
                            <h1 className='text-2xl font-semibold text-right text-gray-700'>
                                Tổng giỏ hàng
                            </h1>
                            <div className='border-t border-gray-300'>
                                <p className='flex justify-between py-2 text-lg font-medium text-gray-600'>
                                    Tạm tính <span className='font-semibold text-gray-800'>${totalAmt}</span>
                                </p>
                                <p className='flex justify-between py-2 text-lg font-medium text-gray-600'>
                                    Phí vận chuyển <span className='font-semibold text-gray-800'>${shippingCharge}</span>
                                </p>
                                <p className='flex justify-between py-2 pt-3 text-xl font-bold text-gray-800 border-t border-gray-300'>
                                    Tổng cộng <span className='text-green-600'>${totalAmt + shippingCharge}</span>
                                </p>
                            </div>
                            <Link to='/order'>
                                <button className='w-full py-3 text-lg font-semibold text-white transition rounded-md bg-primeColor hover:bg-black'>
                                    Thanh toán ngay
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='flex flex-col items-center justify-center gap-4 py-10'
                >
                    <div className='max-w-md p-6 text-center bg-white border border-gray-200 rounded-md shadow-lg'>
                        <h1 className='text-xl font-bold text-gray-700 uppercase'>
                            Giỏ hàng trống
                        </h1>
                        <p className='mt-2 text-sm text-gray-600'>
                            Giỏ hàng của bạn đang chờ được lấp đầy. Hãy bắt đầu mua sắm ngay!
                        </p>
                        <Link to='/shop'>
                            <button className='px-6 py-2 mt-4 text-lg font-semibold text-white rounded-md bg-primeColor hover:bg-black'>
                                Tiếp tục mua sắm
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Cart;
