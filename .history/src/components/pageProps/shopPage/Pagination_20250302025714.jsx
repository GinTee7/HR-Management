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

function Items({ currentItems }) {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 mdl:gap-4 lg:gap-6'>
            {currentItems.map(item => (
                <div
                    key={item._id}
                    className='relative w-full overflow-hidden transition-transform transform bg-white shadow-md rounded-xl hover:scale-105'
                >
                    <div className='relative w-full h-[300px] flex flex-col justify-between'>
                        <img
                            className='object-cover w-full h-48 rounded-t-xl'
                            src={item.img || 'https://via.placeholder.com/150'}
                            alt={item.productName}
                        />
                        <div className='p-4'>
                            <h2 className='text-lg font-semibold text-gray-800 truncate'>
                                {item.productName.length > 25
                                    ? `${item.productName.substring(0, 25)}...`
                                    : item.productName}
                            </h2>
                            <p className='mt-1 text-sm font-medium text-gray-600'>
                                {item.price.toLocaleString()} VNĐ
                            </p>
                            <p className='mt-1 text-xs text-gray-500'>
                                {item.category || 'Chưa phân loại'}
                            </p>
                        </div>
                        <div className='absolute bottom-0 left-0 w-full py-2 transition-opacity duration-500 bg-white opacity-0 group-hover:opacity-100'>
                            <div className='flex items-center justify-between px-4'>
                                <button className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-700'>
                                    <FaShoppingCart /> Thêm vào giỏ hàng
                                </button>
                                <Link
                                    to='/product'
                                    className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600'
                                >
                                    <MdOutlineLabelImportant /> Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const Pagination = ({ itemsPerPage }) => {
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
        <div className='w-full p-4'>
            <Items currentItems={currentItems} />
            <div className='flex flex-col items-center justify-center mt-6'>
                <ReactPaginate
                    nextLabel='>'
                    previousLabel='<'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    containerClassName='flex space-x-2 text-sm font-medium'
                    pageClassName=''
                    pageLinkClassName='w-9 h-9 flex items-center justify-center border rounded-lg text-gray-700 hover:bg-gray-100'
                    previousClassName=''
                    previousLinkClassName='w-9 h-9 flex items-center justify-center border rounded-lg text-gray-700 hover:bg-gray-100'
                    nextClassName=''
                    nextLinkClassName='w-9 h-9 flex items-center justify-center border rounded-lg text-gray-700 hover:bg-gray-100'
                    activeClassName='bg-green-600 text-white'
                />
                <p className='mt-2 text-sm text-gray-600'>
                    Hiển thị {itemOffset + 1} -{' '}
                    {Math.min(
                        itemOffset + itemsPerPage,
                        paginationItems.length
                    )}{' '}
                    trên tổng số {paginationItems.length} sản phẩm
                </p>
            </div>
        </div>
    );
};

export default Pagination;
