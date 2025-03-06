import React, { useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { ImList } from 'react-icons/im';
import { GoTriangleDown } from 'react-icons/go';

const ProductBanner = ({ itemsPerPageFromBanner }) => {
    const [gridViewActive, setGridViewActive] = useState(true);

    const handleGridViewClick = () => {
        setGridViewActive(true);
    };

    const handleListViewClick = () => {
        setGridViewActive(false);
    };

    return (
        <div className='flex flex-col justify-between w-full md:flex-row md:items-center'>
            {/* View Toggle Buttons */}
            <div className='flex items-center gap-4'>
                <button
                    onClick={handleGridViewClick}
                    className={`w-8 h-8 text-lg flex items-center justify-center cursor-pointer rounded-md transition ${
                        gridViewActive
                            ? 'bg-primeColor text-white'
                            : 'border border-gray-300 text-[#737373]'
                    }`}
                    aria-label='Grid View'
                >
                    <BsGridFill />
                </button>
                <button
                    onClick={handleListViewClick}
                    className={`w-8 h-8 text-base flex items-center justify-center cursor-pointer rounded-md transition ${
                        !gridViewActive
                            ? 'bg-primeColor text-white'
                            : 'border border-gray-300 text-[#737373]'
                    }`}
                    aria-label='List View'
                >
                    <ImList />
                </button>
            </div>

            {/* Sorting & Items Per Page */}
            <div className='flex items-center gap-4 mt-4 md:gap-6 md:mt-0'>
                {/* Sorting Dropdown */}
                <div className='relative flex items-center gap-2 text-base text-[#767676]'>
                    <label htmlFor='sortBy' className='block'>
                        Sắp xếp theo:
                    </label>
                    <div className='relative'>
                        <select
                            id='sortBy'
                            className='w-32 px-4 py-1 text-base border border-gray-200 rounded-md cursor-pointer md:w-52 text-primeColor focus:ring-2 focus:ring-primeColor'
                        >
                            <option value='Best Sellers'>Bán chạy</option>
                            <option value='New Arrival'>Mới nhất</option>
                            <option value='Featured'>Nổi bật</option>
                            <option value='Final Offer'>
                                Ưu đãi cuối cùng
                            </option>
                        </select>
                        <span className='absolute right-3 top-2.5 text-sm pointer-events-none'>
                            <GoTriangleDown />
                        </span>
                    </div>
                </div>

                {/* Items Per Page Dropdown */}
                <div className='relative flex items-center gap-2 text-[#767676]'>
                    <label htmlFor='itemsPerPage' className='block'>
                        Hiển thị:
                    </label>
                    <div className='relative'>
                        <select
                            id='itemsPerPage'
                            onChange={e =>
                                itemsPerPageFromBanner(Number(e.target.value))
                            }
                            className='w-16 px-4 py-1 text-base border border-gray-200 rounded-md cursor-pointer md:w-20 text-primeColor focus:ring-2 focus:ring-primeColor'
                        >
                            <option value='12'>12</option>
                            <option value='24'>24</option>
                            <option value='36'>36</option>
                            <option value='48'>48</option>
                        </select>
                        <span className='absolute right-3 top-2.5 text-sm pointer-events-none'>
                            <GoTriangleDown />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;
