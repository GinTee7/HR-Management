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
            <p className='text-xl font-semibold'>{productInfo.price}₫</p>
            <p className='text-base text-gray-600'>{productInfo.des}</p>
            <p className='text-sm'>Hãy là người đầu tiên để lại đánh giá.</p>
            <div className='flex items-center gap-4'>
                <div className='flex items-center border border-gray-300'>
                    <button
                        onClick={handleDecrease}
                        className='px-4 py-2 text-lg bg-gray-100 hover:bg-gray-200'
                    >
                        -
                    </button>
                    <p className='px-4 py-2 text-lg'>{quantity}</p>
                    {/* <button
                        onClick={handleIncrease}
                        className='px-4 py-2 text-lg bg-gray-100 hover:bg-gray-200'
                    >
                        +
                    </button> */}
                </div>
                {/* <button
          className="px-6 py-4 text-lg text-white duration-300 bg-black hover:bg-gray-900 font-titleFont"
        >
          Thêm vào giỏ hàng
        </button> */}
            </div>

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
        </div>
    );
};

export default ProductInfo;
