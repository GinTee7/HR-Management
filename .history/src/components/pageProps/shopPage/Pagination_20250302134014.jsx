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
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 mdl:gap-3 lg:gap-10'>
            {currentItems?.map(item => (
                <div
                    key={item._id}
                    className='relative w-full overflow-hidden bg-gray-300 shadow-md max-w-60 rounded-2xl group'
                >
                    <div className='relative h-[280px] flex flex-col justify-between'>
                        <img
                            className='object-cover w-full h-48'
                            src={item.img || 'https://via.placeholder.com/150'}
                            alt={item.productName || 'Hình ảnh sản phẩm'}
                        />
                        <div className='flex flex-col p-3'>
                            <h2 className='text-sm font-bold truncate text-[#31473A] leading-tight'>
                                {item.productName.length > 20
                                    ? `${item.productName.substring(0, 20)}...`
                                    : item.productName}
                            </h2>
                            <p className='text-[#767676] text-[14px] font-semibold mt-0 leading-tight'>
                                {item.price
                                    ? `${item.price.toLocaleString()} VNĐ`
                                    : '0 VNĐ'}
                            </p>
                            <p className='text-[#767676] text-[12px] leading-tight'>
                                {item.color || 'Không xác định'}
                            </p>
                        </div>
                        <div className='absolute bottom-[-70px] w-full bg-white transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:translate-y-[-70px]'>
                            <ul className='flex flex-col items-center justify-center w-full gap-2 p-2 border border-gray-200 rounded-md shadow-md'>
                                <li className='flex items-center justify-end w-full gap-2 pb-1 text-xs font-medium text-gray-600 transition duration-300 border-b border-gray-200 cursor-pointer hover:text-[#31473A] hover:border-[#31473A]'>
                                    <FaShoppingCart />
                                    <span>Thêm vào giỏ hàng</span>
                                </li>
                                <li className='flex items-center justify-end w-full gap-2 pb-1 text-xs font-medium text-gray-600 transition duration-300 border-b border-gray-200 cursor-pointer hover:text-[#31473A] hover:border-[#31473A]'>
                                    <Link
                                        to='/product'
                                        className='flex items-center gap-2'
                                    >
                                        <MdOutlineLabelImportant />
                                        <span>Xem chi tiết</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Pagination = ({ itemsPerPage, paginationItems }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [itemStart, setItemStart] = useState(1);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = useMemo(
        () => paginationItems.slice(itemOffset, endOffset),
        [itemOffset, itemsPerPage, paginationItems]
    );
    const pageCount = Math.ceil(paginationItems.length / itemsPerPage);

    const handlePageClick = event => {
        const newOffset =
            (event.selected * itemsPerPage) % paginationItems.length;
        setItemOffset(newOffset);
        setItemStart(newOffset + 1);
    };

    return (
        <div className='p-3'>
            <Items currentItems={currentItems} />
            <div className='flex flex-col items-center justify-center mt-6 mdl:flex-row mdl:justify-between'>
                <ReactPaginate
                    nextLabel='>'
                    previousLabel='<'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    pageLinkClassName='w-9 h-9 border-[1px] border-gray-300 hover:border-gray-500 flex justify-center items-center transition duration-300'
                    pageClassName='mr-6'
                    previousClassName='mr-4'
                    previousLinkClassName='flex items-center justify-center w-9 h-9 border border-gray-300 hover:border-gray-500 transition duration-300'
                    nextClassName='ml-4'
                    nextLinkClassName='flex items-center justify-center w-9 h-9 border border-gray-300 hover:border-gray-500 transition duration-300'
                    containerClassName='flex text-base font-semibold py-5'
                    activeClassName='bg-black text-white'
                />
                <p className='text-base font-normal text-gray-500'>
                    Sản phẩm từ {itemStart} đến {endOffset} trên tổng số{' '}
                    {paginationItems.length} sản phẩm
                </p>
            </div>
        </div>
    );
};

export default Pagination;
