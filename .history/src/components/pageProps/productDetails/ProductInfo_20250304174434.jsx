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
        <div className='flex flex-col gap-5'>
            <h2 className='text-4xl font-semibold'>
                {productInfo.productName}
            </h2>
            <p className='text-xl font-semibold'>Mô tả sản phẩm</p>
            <p className='text-base text-gray-600'>{productInfo.des}</p>
            <p className='text-sm'>Hãy là người đầu tiên để lại đánh giá.</p>

            <p className='text-sm font-normal'>
                <span className='text-base font-medium'>Danh mục:</span>{' '}
                {productInfo.categories}
            </p>
            <p className='text-sm font-normal'>
                <span className='text-base font-medium'>Thẻ:</span>{' '}
                {productInfo.tags.join(', ')}
            </p>
            <p className='text-sm font-normal'>
                <span className='text-base font-medium'>Mã sản phẩm:</span>{' '}
                {productInfo.sku}
            </p>
            <div className='flex items-center gap-4'>
                <button className='px-6 py-4 text-lg text-white duration-300 bg-black hover:bg-gray-900 font-titleFont'>
                    Contact
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
