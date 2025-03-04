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
        des: 'Thuốc trừ sâu hiệu quả cao, bảo vệ mùa màng khỏi các loại sâu bệnh.'
    },
    {
        _id: '2',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        price: 150000,
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.'
    },
    {
        _id: '3',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        price: 200000,
        des: 'Phân bón cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.'
    },
    {
        _id: '4',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu BestKill',
        price: 120000,
        des: 'Thuốc trừ sâu hiệu quả cao, bảo vệ mùa màng khỏi các loại sâu bệnh.'
    },
    {
        _id: '5',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        price: 150000,
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.'
    },
    {
        _id: '6',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        price: 200000,
        des: 'Phân bón cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.'
    }
];

const Items = ({ currentItems }) => {
    return (
        <div className='grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3'>
            {currentItems.map(item => (
                <div
                    key={item._id}
                    className='overflow-hidden transition-transform transform bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl'
                >
                    <img
                        className='object-cover w-full h-56'
                        src={item.img || 'https://via.placeholder.com/150'}
                        alt={item.productName || 'Hình ảnh sản phẩm'}
                    />
                    <div className='p-4'>
                        <h2 className='text-xl font-semibold text-gray-800 truncate'>
                            {item.productName}
                        </h2>
                        <p className='mt-2 text-sm text-gray-600'>{item.des}</p>
                        <div className='flex items-center justify-between mt-4'>
                            <span className='text-lg font-bold text-red-500'>
                                {item.price.toLocaleString()} VNĐ
                            </span>
                            <Link
                                to='/product'
                                className='flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700'
                            >
                                <MdOutlineLabelImportant /> Xem chi tiết
                            </Link>
                        </div>
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
        <div className='container p-6 mx-auto bg-gray-100 rounded-lg'>
            <Items currentItems={currentItems} />
            <div className='flex flex-col items-center mt-6'>
                <ReactPaginate
                    nextLabel='>'
                    previousLabel='<'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    containerClassName='flex space-x-2 text-lg font-semibold bg-white p-2 rounded-lg shadow-md'
                    pageLinkClassName='px-4 py-2 border rounded-md hover:bg-gray-300'
                    previousLinkClassName='px-4 py-2 border rounded-md hover:bg-gray-300'
                    nextLinkClassName='px-4 py-2 border rounded-md hover:bg-gray-300'
                    activeClassName='bg-blue-500 text-white rounded-md'
                />
                <p className='mt-4 text-gray-700'>
                    Hiển thị từ {itemOffset + 1} đến {endOffset} trên tổng số{' '}
                    {paginationItems.length} sản phẩm
                </p>
            </div>
        </div>
    );
};

export default Pagination;
