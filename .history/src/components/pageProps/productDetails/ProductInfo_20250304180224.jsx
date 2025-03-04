import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaShoppingCart, FaTag } from 'react-icons/fa';
import { MdOutlineRequestQuote } from 'react-icons/md';

const ProductInfo = ({ productInfo }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className='flex flex-col gap-6 p-8 bg-white border border-gray-200 shadow-lg rounded-xl'>
            {/* <h2 className='text-4xl font-bold tracking-wide text-gray-900'>
                {productInfo.productName}
            </h2> */}

            <p className='pb-2 text-2xl font-semibold text-gray-800 border-b'>
                Mô tả sản phẩm
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
                {productInfo.des}
            </p>

            <p className='pb-2 text-2xl font-semibold text-gray-800 border-b'>
                Đặc tính
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
                {productInfo.features}
            </p>

            <p className='pb-2 text-2xl font-semibold text-gray-800 border-b'>
                Công dụng
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
                {productInfo.usage}
            </p>

            <p className='pb-2 text-2xl font-semibold text-gray-800 border-b'>
                Quy cách
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
                {productInfo.specifications}
            </p>

            <div className='grid grid-cols-2 gap-4 mt-4 text-lg text-gray-700'>
                <p>
                    <FaTag className='inline text-gray-900' />{' '}
                    <span className='font-medium text-gray-900'>Danh mục:</span>{' '}
                    {productInfo.categories}
                </p>
                <p>
                    <FaShoppingCart className='inline text-gray-900' />{' '}
                    <span className='font-medium text-gray-900'>
                        Mã sản phẩm:
                    </span>{' '}
                    {productInfo.sku}
                </p>
                <p className='col-span-2'>
                    <span className='font-medium text-gray-900'>Thẻ:</span>{' '}
                    {productInfo.tags.join(', ')}
                </p>
                <p className='mt-4 text-sm italic text-gray-500'>
                    Hãy là người đầu tiên để lại đánh giá.
                </p>
            </div>

            <div className='flex flex-col items-center gap-6 mt-6 md:flex-row'>
                <button className='flex items-center gap-3 px-8 py-4 text-lg text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700'>
                    <FaPhoneAlt /> Liên hệ đặt hàng
                </button>

                <button className='flex items-center gap-3 px-8 py-4 text-lg text-green-600 transition-all border border-green-600 rounded-lg hover:bg-green-50'>
                    <FaEnvelope /> Gửi email tư vấn
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
