import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { FaTag } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';

const products = {
    'Thuốc trừ sâu': [
        {
            _id: '1',
            img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
            productName: 'Thuốc trừ sâu BestKill',
            price: 120000,
            des: 'Thuốc trừ sâu hiệu quả cao, bảo vệ mùa màng khỏi các loại sâu bệnh.'
        }
    ],
    'Thuốc diệt cỏ': [
        {
            _id: '2',
            img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
            productName: 'Thuốc diệt cỏ WeedAway',
            price: 150000,
            des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.'
        }
    ],
    'Phân bón': [
        {
            _id: '3',
            img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
            productName: 'Phân bón Carbo Max',
            price: 200000,
            des: 'Phân bón cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.'
        }
    ]
};

const Items = ({ items = [] }) => {
    return (
        <div className='grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3'>
            {items.length > 0 ? (
                items.map(item => (
                    <div
                        key={item._id}
                        className='flex flex-col overflow-hidden transition-transform transform bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl'
                    >
                        <img
                            className='object-cover w-full h-56'
                            src={item.img || 'https://via.placeholder.com/150'}
                            alt={item.productName || 'Hình ảnh sản phẩm'}
                        />
                        <div className='flex flex-col justify-between p-6'>
                            <h2 className='text-xl font-bold text-gray-800 truncate'>
                                {item.productName}
                            </h2>
                            <p className='mt-2 text-lg text-gray-600'>
                                {item.des}
                            </p>
                            <div className='flex items-center justify-between mt-4'>
                                <span className='text-xl font-semibold text-blue-500'>
                                    {item.price.toLocaleString()} đ
                                </span>
                                <Link
                                    to='/product'
                                    className='flex items-center gap-2 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700'
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

const ProductSection = () => {
    return (
        <div className='container p-8 mx-auto bg-gray-100 rounded-lg'>
            {Object.entries(products).map(([category, items]) => (
                <div key={category} className='mb-12'>
                    <h2 className='mb-6 text-3xl font-bold text-gray-900'>
                        {category}
                    </h2>
                    <Items items={items} />
                </div>
            ))}
        </div>
    );
};

export default ProductSection;
