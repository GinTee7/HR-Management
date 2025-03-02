import React, { useState, useMemo } from 'react';
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
    },
    {
        _id: '4',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ bệnh FungicidePro',
        price: 180000,
        color: 'Trắng',
        des: 'Ngăn chặn hiệu quả các loại bệnh hại trên cây trồng.'
    },
    {
        _id: '5',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân vi lượng GrowBetter',
        price: 100000,
        color: 'Xanh lá',
        des: 'Cải thiện chất lượng đất và tăng năng suất mùa màng.'
    },
    {
        _id: '6',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc bảo vệ thực vật ShieldCrop',
        price: 175000,
        color: 'Cam',
        des: 'Giúp cây trồng phát triển khỏe mạnh, tăng năng suất và bảo vệ mùa màng.'
    },
    {
        _id: '7',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt nấm AntiFungi',
        price: 140000,
        color: 'Tím',
        des: 'Chống lại các loại nấm gây hại cho cây trồng.'
    },
    {
        _id: '8',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón hữu cơ GreenLife',
        price: 160000,
        color: 'Xanh lá cây',
        des: 'Phân hữu cơ tự nhiên, bảo vệ đất và tăng năng suất cây trồng.'
    },
    {
        _id: '9',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ cỏ QuickWeed',
        price: 125000,
        color: 'Xám',
        des: 'Diệt cỏ nhanh chóng, không ảnh hưởng đến cây trồng.'
    },
    {
        _id: '10',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón cao cấp SuperGrow',
        price: 230000,
        color: 'Nâu',
        des: 'Phân bón chuyên dụng giúp cây phát triển mạnh và cho năng suất cao.'
    },
    {
        _id: '11',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt sâu HighProtect',
        price: 145000,
        color: 'Hồng',
        des: 'Thuốc hiệu quả cao trong việc bảo vệ cây trồng khỏi sâu hại.'
    },
    {
        _id: '12',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón chuyên dụng PowerMax',
        price: 190000,
        color: 'Xanh ngọc',
        des: 'Phân bón giúp cải thiện chất lượng đất và tăng cường sinh trưởng cây trồng.'
    },
    {
        _id: '13',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu EcoKill',
        price: 155000,
        color: 'Xanh lam',
        des: 'Thuốc trừ sâu an toàn, thân thiện với môi trường.'
    },
    {
        _id: '14',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón lá LeafBoost',
        price: 120000,
        color: 'Vàng',
        des: 'Phân bón dạng lá giúp cây hấp thụ nhanh chóng và hiệu quả.'
    },
    {
        _id: '15',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc bảo vệ lá LeafGuard',
        price: 170000,
        color: 'Xanh lục',
        des: 'Bảo vệ lá cây khỏi các loại bệnh và sâu hại.'
    }
];

const Items = ({ currentItems }) => {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {currentItems.map(item => (
                <div
                    key={item._id}
                    className='relative p-4 transition-transform bg-gray-100 rounded-lg shadow-lg hover:scale-105'
                >
                    <img
                        className='object-cover w-full h-48 rounded-md'
                        src={item.img || 'https://via.placeholder.com/150'}
                        alt={item.productName || 'Hình ảnh sản phẩm'}
                    />
                    <div className='mt-4'>
                        <h2 className='text-lg font-semibold text-gray-800 truncate'>
                            {item.productName}
                        </h2>
                        <p className='font-medium text-green-600'>
                            {item.price.toLocaleString()} VNĐ
                        </p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <button className='flex items-center gap-2 px-3 py-1 text-sm text-black bg-green-500 rounded-md hover:bg-green-700'>
                            <FaShoppingCart /> Thêm vào giỏ hàng
                        </button>
                        <Link
                            to='/product'
                            className='flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-700'
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
                    pageLinkClassName='px-3 py-1 border rounded-md hover:bg-gray-300'
                    previousLinkClassName='px-3 py-1 border rounded-md hover:bg-gray-300'
                    nextLinkClassName='px-3 py-1 border rounded-md hover:bg-gray-300'
                    activeClassName='bg-blue-500 text-white'
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
