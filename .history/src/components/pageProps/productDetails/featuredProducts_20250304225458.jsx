import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLabelImportant } from 'react-icons/md';

const FeaturedProductsSection = () => {
    const [products] = useState([
        {
            id: 1,
            img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
            name: 'Thuốc trừ sâu A',
            price: '150.000₫',
            features: 'Thuốc dưỡng'
        },
        {
            id: 2,
            img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
            name: 'Thuốc trừ sâu B',
            price: '180.000₫',
            features: 'Thuốc dưỡng'
        },
        {
            id: 3,
            img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
            name: 'Thuốc trừ sâu C',
            price: '200.000₫',
            features: 'Thuốc dưỡng'
        }
    ]);

    return (
        <div className='container p-10 mx-auto rounded-lg shadow-lg bg-gray-50'>
            <h2 className='mb-8 text-4xl font-bold text-center text-gray-900'>
                Sản phẩm nổi bật
            </h2>
            <div className='grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3'>
                {products.map(item => (
                    <div
                        key={item.id}
                        className='flex flex-col overflow-hidden transition-transform transform bg-white shadow-xl rounded-2xl hover:scale-105 hover:shadow-2xl'
                    >
                        <img
                            className='object-cover w-full h-64 rounded-t-2xl'
                            src={item.img || 'https://via.placeholder.com/150'}
                            alt={item.name || 'Hình ảnh sản phẩm'}
                        />
                        <div className='flex flex-col justify-between p-6'>
                            <h2 className='text-2xl font-bold text-gray-800 truncate'>
                                {item.name}
                            </h2>
                            <p className='mt-3 text-lg text-gray-600'>
                                {item.features}
                            </p>
                            <p className='mt-2 text-xl font-semibold text-blue-500'>
                                {item.price}
                            </p>
                            {/* <div className='flex items-center justify-between mt-6'>
                                <Link
                                    to='/product'
                                    className='flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700'
                                >
                                    <MdOutlineLabelImportant /> Xem chi tiết
                                </Link>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProductsSection;
