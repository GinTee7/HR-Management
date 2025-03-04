import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLabelImportant } from 'react-icons/md';

const featuredProducts = [
    {
        _id: '1',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu BestKill',
        des: 'Bảo vệ mùa màng khỏi các loại sâu bệnh với công thức tiên tiến.',
        category: 'Sản phẩm nổi bật'
    },
    {
        _id: '2',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.',
        category: 'Sản phẩm nổi bật'
    },
    {
        _id: '3',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        des: 'Cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.',
        category: 'Sản phẩm nổi bật'
    }
];

const FeaturedItems = ({ items = [] }) => {
    return (
        <div className='grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3'>
            {items.length > 0 ? (
                items.map(item => (
                    <div
                        key={item._id}
                        className='flex flex-col overflow-hidden transition-transform transform bg-white shadow-xl rounded-2xl hover:scale-105 hover:shadow-2xl'
                    >
                        <img
                            className='object-cover w-full h-64 rounded-t-2xl'
                            src={item.img || 'https://via.placeholder.com/150'}
                            alt={item.productName || 'Hình ảnh sản phẩm'}
                        />
                        <div className='flex flex-col justify-between p-6'>
                            <h2 className='text-2xl font-bold text-gray-800 truncate'>
                                {item.productName}
                            </h2>
                            <p className='mt-3 text-lg text-gray-600'>
                                {item.des}
                            </p>
                            <div className='flex items-center justify-between mt-6'>
                                <Link
                                    to='/product'
                                    className='flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700'
                                >
                                    <MdOutlineLabelImportant /> Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center text-gray-500'>
                    Không có sản phẩm nào.
                </p>
            )}
        </div>
    );
};

const FeaturedProductsSection = () => {
    return (
        <div className='container p-10 mx-auto rounded-lg shadow-lg bg-gray-50'>
            <h2 className='mb-8 text-4xl font-bold text-center text-gray-900'>
                Sản phẩm nổi bật
            </h2>
            <FeaturedItems items={featuredProducts} />
        </div>
    );
};

export default FeaturedProductsSection;
