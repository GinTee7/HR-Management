import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLabelImportant } from 'react-icons/md';

const featuredProducts = [
    {
        _id: '1',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu BestKill',
        des: 'Bảo vệ mùa màng khỏi các loại sâu bệnh với công thức tiên tiến.',
        category: 'Sản phẩm nổi bật',
        price: '150.000₫'
    },
    {
        _id: '2',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.',
        category: 'Sản phẩm nổi bật',
        price: '180.000₫'
    },
    {
        _id: '3',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        des: 'Cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.',
        category: 'Sản phẩm nổi bật',
        price: '200.000₫'
    }
];

   return (
        <div>
            <h3 className='font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]'>
                Sản phẩm đang giảm giá
            </h3>
            <div className='flex flex-col gap-2'>
                {products.map(item => (
                    <div
                        key={item.id}
                        className='flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2'
                    >
                        <div>
                            <img
                                className='w-24'
                                src={item.img}
                                alt={item.name}
                            />
                        </div>
                        <div className='flex flex-col gap-2 font-titleFont'>
                            <p className='text-base font-medium'>{item.name}</p>
                            <p className='text-sm font-semibold'>
                                {item.price}₫
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProductsSection;
