import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';

const paginationItems = [
    {
        _id: '1',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu BestKill',
        price: 120000,
        color: 'Xanh',
        des: 'Thuốc trừ sâu hiệu quả cao, bảo vệ mùa màng khỏi các loại sâu bệnh.'
    },
    {
        _id: '2',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        price: 150000,
        color: 'Vàng',
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.'
    },
    {
        _id: '3',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        price: 200000,
        color: 'Đỏ',
        des: 'Phân bón cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.'
    }
];

const Items = ({ currentItems }) => {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {currentItems.map(item => (
                <div
                    key={item._id}
                    className='relative p-4 transition-transform bg-white rounded-lg shadow-lg hover:scale-105'
                >
                    <img
                        className='object-cover w-full h-48 rounded-md'
                        src={item.img || 'https://via.placeholder.com/150'}
                        alt={item.productName || 'Hình ảnh sản phẩm'}
                    />
                    <div className='mt-4'>
                        <h2 className='text-lg font-semibold truncate'>
                            {item.productName}
                        </h2>
                        <p className='text-gray-600'>
                            {item.price.toLocaleString()} VNĐ
                        </p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <button className='flex items-center gap-2 text-sm text-green-600 hover:text-green-800'>
                            <FaShoppingCart /> Thêm vào giỏ hàng
                        </button>
                        <Link
                            to='/product'
                            className='flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800'
                        >
                            <MdOutlineLabelImportant /> Xem chi tiết
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Pagination = ({ itemsPerPage = 3 }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = paginationItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(paginationItems.length / itemsPerPage);

    const handlePageClick = event => {
        const newOffset =
            (event.selected * itemsPerPage) % paginationItems.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='container p-6 mx-auto'>
            <Items currentItems={currentItems} />
            <div className='flex flex-col items-center mt-6'>
                <ReactPaginate
                    nextLabel='>'
                    previousLabel='<'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    containerClassName='flex space-x-2 text-lg font-semibold'
                    pageLinkClassName='px-3 py-1 border rounded-md hover:bg-gray-200'
                    previousLinkClassName='px-3 py-1 border rounded-md hover:bg-gray-200'
                    nextLinkClassName='px-3 py-1 border rounded-md hover:bg-gray-200'
                    activeClassName='bg-blue-500 text-white'
                />
                <p className='mt-4 text-gray-600'>
                    Hiển thị từ {itemOffset + 1} đến {endOffset} trên tổng số{' '}
                    {paginationItems.length} sản phẩm
                </p>
            </div>
        </div>
    );
};

export default Pagination;
