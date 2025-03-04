import React, { useState } from 'react';

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
        <div className='flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg'>
            <h2 className='text-4xl font-semibold text-gray-800'>
                {productInfo.productName}
            </h2>

            <p className='text-xl font-semibold text-gray-700'>
                Mô tả sản phẩm
            </p>
            <p className='text-base text-gray-600'>{productInfo.des}</p>

            <p className='text-xl font-semibold text-gray-700'>Đặc tính</p>
            <p className='text-base text-gray-600'>{productInfo.features}</p>

            <p className='text-xl font-semibold text-gray-700'>Công dụng</p>
            <p className='text-base text-gray-600'>{productInfo.usage}</p>

            <p className='text-xl font-semibold text-gray-700'>Quy cách</p>
            <p className='text-base text-gray-600'>
                {productInfo.specifications}
            </p>

            <p className='text-sm text-gray-500'>
                Hãy là người đầu tiên để lại đánh giá.
            </p>

            <p className='text-sm font-normal text-gray-600'>
                <span className='text-base font-medium text-gray-800'>
                    Danh mục:
                </span>{' '}
                {productInfo.categories}
            </p>
            <p className='text-sm font-normal text-gray-600'>
                <span className='text-base font-medium text-gray-800'>
                    Thẻ:
                </span>{' '}
                {productInfo.tags.join(', ')}
            </p>
            <p className='text-sm font-normal text-gray-600'>
                <span className='text-base font-medium text-gray-800'>
                    Mã sản phẩm:
                </span>{' '}
                {productInfo.sku}
            </p>

            <div className='flex items-center gap-4 mt-4'>
                <button className='px-6 py-4 text-lg text-white duration-300 bg-black rounded-lg hover:bg-gray-900'>
                    Contact
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
