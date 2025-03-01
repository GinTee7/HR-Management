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
        <div className='w-full bg-[#F2F8FC]'>
            <Breadcrumbs title='Giỏ hàng' />
            {products.length > 0 ? (
                <div className='px-4 mx-auto max-w-container'>
                    <div className='w-full h-20 bg-[#F5F7F7] text-primeColor grid grid-cols-5 place-content-center px-6 text-lg font-semibold'>
                        <h2 className='col-span-2'>Product</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Sub Total</h2>
                    </div>
                    <div className='mt-5 space-y-4'>
                        {products.map(item => (
                            <ItemCard key={item._id} item={item} />
                        ))}
                    </div>
                    <div className='flex justify-end mt-6 max-w-7xl'>
                        <div className='flex flex-col gap-4 p-4 bg-white rounded-md shadow-md w-96'>
                            <h1 className='text-2xl font-semibold text-right'>
                                Cart totals
                            </h1>
                            <div className='border-t border-gray-300'>
                                <p className='flex justify-between py-2 text-lg font-medium'>
                                    Subtotal{' '}
                                    <span className='font-semibold'>
                                        ${totalAmt}
                                    </span>
                                </p>
                                <p className='flex justify-between py-2 text-lg font-medium'>
                                    Shipping Charge{' '}
                                    <span className='font-semibold'>
                                        ${shippingCharge}
                                    </span>
                                </p>
                                <p className='flex justify-between py-2 text-lg font-bold border-t border-gray-300'>
                                    Total{' '}
                                    <span>${totalAmt + shippingCharge}</span>
                                </p>
                            </div>
                            <Link to='/order'>
                                <button className='w-full py-2 text-white transition rounded-md bg-primeColor hover:bg-black'>
                                    Proceed to Checkout
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
                    <div className='max-w-md p-6 text-center bg-white rounded-md shadow-md'>
                        <h1 className='text-xl font-bold uppercase'>
                            Your Cart is Empty
                        </h1>
                        <p className='mt-2 text-sm text-gray-600'>
                            Your shopping cart is waiting to be filled. Start
                            shopping now!
                        </p>
                        <Link to='/shop'>
                            <button className='px-6 py-2 mt-4 text-lg font-semibold text-white rounded-md bg-primeColor hover:bg-black'>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Cart;
