import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
const categories = [
    {
        id: 'all',
        name: 'Tất cả',
        description: 'Xem tất cả sản phẩm',
        img: 'https://file.hstatic.net/200000907029/collection/frame_1000007588_0bc3cc48f8674e39afc50c673fedd617_large.png'
    },
    {
        id: 'thuoc-tru-oc',
        name: 'Thuốc trừ ốc',
        description: 'Sản phẩm giúp diệt trừ ốc hại',
        img: 'https://file.hstatic.net/200000907029/collection/thuoc_oc_301b66fbf3ed404ea44df944d1867904_large.png'
    },
    {
        id: 'thuoc-tru-co',
        name: 'Thuốc trừ cỏ',
        description: 'Giải pháp loại bỏ cỏ dại hiệu quả',
        img: 'https://file.hstatic.net/200000907029/collection/img_0972_302264953c2944e68eedd55aea744272_large.jpg'
    },
    {
        id: 'thuoc-tru-sau',
        name: 'Thuốc trừ sâu',
        description: 'Bảo vệ cây trồng khỏi sâu hại',
        img: 'https://file.hstatic.net/200000907029/collection/z5939099063265_aa5cf3959d9d1edc364b21a72aab7851_8d8e719d121f427297969efa543a8c85_large.jpg'
    },
    {
        id: 'thuoc-tru-benh',
        name: 'Thuốc trừ bệnh',
        description: 'Phòng và trị bệnh cây trồng',
        img: 'https://file.hstatic.net/200000907029/collection/z5936053526436_fc17259e3fece1a3fc5bfa23023fa64a_dc25ada98a23448282cd163f18a4108f_large.jpg'
    },
    {
        id: 'thuoc-duong',
        name: 'Thuốc dưỡng',
        description: 'Tăng cường sức khỏe cây trồng',
        img: 'https://file.hstatic.net/200000907029/collection/z5936057574639_1c1e3a63e4356ca2f391caa29dd33b6b_859007c8916a408d8486f00cbb98533d_large.jpg'
    },
    {
        id: 'phan-bon',
        name: 'Phân bón',
        description: 'Dinh dưỡng giúp cây phát triển tốt',
        img: 'https://file.hstatic.net/200000907029/collection/phan_bon_570x707_2cf7bacbaeb744f1a1ff00b12056ac05_large.jpg'
    }
];

const paginationItems = [
    {
        _id: '1',
        category: 'thuoc-tru-sau',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu BestKill',
        price: 120000,
        color: 'Xanh',
        des: 'Thuốc trừ sâu hiệu quả cao, bảo vệ mùa màng khỏi các loại sâu bệnh.'
    },
    {
        _id: '2',
        category: 'thuoc-tru-co',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        price: 150000,
        color: 'Vàng',
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.'
    },
    {
        _id: '3',
        category: 'phan-bon',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        price: 200000,
        color: 'Đỏ',
        des: 'Phân bón cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.'
    },
    {
        _id: '4',
        category: 'thuoc-tru-benh',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ bệnh FungicidePro',
        price: 180000,
        color: 'Trắng',
        des: 'Ngăn chặn hiệu quả các loại bệnh hại trên cây trồng.'
    },
    {
        _id: '5',
        category: 'phan-bon',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân vi lượng GrowBetter',
        price: 100000,
        color: 'Xanh lá',
        des: 'Cải thiện chất lượng đất và tăng năng suất mùa màng.'
    },
    {
        _id: '6',
        category: 'thuoc-tru-oc',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc bảo vệ thực vật ShieldCrop',
        price: 175000,
        color: 'Cam',
        des: 'Giúp cây trồng phát triển khỏe mạnh, tăng năng suất và bảo vệ mùa màng.'
    },
    {
        _id: '7',
        category: 'thuoc-tru-oc',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt nấm AntiFungi',
        price: 140000,
        color: 'Tím',
        des: 'Chống lại các loại nấm gây hại cho cây trồng.'
    },
    {
        _id: '8',
        category: 'phan-bon',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón hữu cơ GreenLife',
        price: 160000,
        color: 'Xanh lá cây',
        des: 'Phân hữu cơ tự nhiên, bảo vệ đất và tăng năng suất cây trồng.'
    },
    {
        _id: '9',
        category: 'thuoc-tru-co',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ cỏ QuickWeed',
        price: 125000,
        color: 'Xám',
        des: 'Diệt cỏ nhanh chóng, không ảnh hưởng đến cây trồng.'
    },
    {
        _id: '10',
        category: 'phan-bon',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón cao cấp SuperGrow',
        price: 230000,
        color: 'Nâu',
        des: 'Phân bón chuyên dụng giúp cây phát triển mạnh và cho năng suất cao.'
    },
    {
        _id: '11',
        category: 'thuoc-tru-sau',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt sâu HighProtect',
        price: 145000,
        color: 'Hồng',
        des: 'Thuốc hiệu quả cao trong việc bảo vệ cây trồng khỏi sâu hại.'
    },
    {
        _id: '12',
        category: 'phan-bon',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón chuyên dụng PowerMax',
        price: 190000,
        color: 'Xanh ngọc',
        des: 'Phân bón giúp cải thiện chất lượng đất và tăng cường sinh trưởng cây trồng.'
    },
    {
        _id: '13',
        category: 'thuoc-tru-sau',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu EcoKill',
        price: 155000,
        color: 'Xanh lam',
        des: 'Thuốc trừ sâu an toàn, thân thiện với môi trường.'
    },
    {
        _id: '14',
        category: 'phan-bon',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón lá LeafBoost',
        price: 120000,
        color: 'Vàng',
        des: 'Phân bón dạng lá giúp cây hấp thụ nhanh chóng và hiệu quả.'
    },
    {
        _id: '15',
        category: 'thuoc-duong',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc bảo vệ lá LeafGuard',
        price: 170000,
        color: 'Xanh lục',
        des: 'Bảo vệ lá cây khỏi các loại bệnh và sâu hại.'
    }
];

const Items = ({ currentItems }) => {
    return (
        <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-[#F3F7FC] auto-rows-fr'>
            {currentItems.map(item => (
                <div
                    key={item._id}
                    className='relative flex flex-col items-center overflow-hidden transition-all bg-white border border-gray-300 shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl w-full max-w-[450px] h-[550px] min-h-[550px]'
                >
                    {/* Ảnh sản phẩm */}
                    <div className='relative flex items-center justify-center w-full h-48 p-4 bg-white max-h-48'>
                        <img
                            className='object-contain w-full h-full max-w-[90%] max-h-[85%] transition-transform duration-300 hover:scale-110'
                            src={item.img || 'https://via.placeholder.com/300'}
                            alt={item.productName || 'Hình ảnh sản phẩm'}
                        />
                    </div>

                    {/* Nội dung sản phẩm */}
                    <div className='flex flex-col items-center flex-grow px-4 py-2 text-center'>
                        <h2 className='w-56 h-10 text-lg font-semibold text-gray-900 truncate'>
                            {item.productName}
                        </h2>
                        <p className='w-56 h-12 mt-2 text-sm text-gray-600 line-clamp-2'>
                            {item.des}
                        </p>

                        {/* Nút bấm */}
                        <Link
                            to='/product'
                            className='flex items-center gap-2 px-5 py-2 mt-4 text-sm font-medium text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-700 to-indigo-800 hover:shadow-lg hover:scale-105'
                        >
                            <MdOutlineArrowForwardIos className='text-xs' /> Xem
                            chi tiết
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Component Pagination
const Pagination = ({ itemsPerPage = 6 }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Lọc danh sách sản phẩm theo danh mục
    const filteredItems =
        selectedCategory === 'all'
            ? paginationItems
            : paginationItems.filter(
                  item => item.category === selectedCategory
              );

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

    const handlePageClick = event => {
        const newOffset =
            (event.selected * itemsPerPage) % filteredItems.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='w-full p-3 px-5 mx-auto rounded-lg max-w-screen-2xl'>
            {/* Danh sách sản phẩm */}
            <Items currentItems={currentItems} />

            {/* Hiển thị phân trang nếu có nhiều hơn 1 trang */}
            {pageCount > 1 && (
                <div className='flex flex-col items-center mt-6'>
                    <ReactPaginate
                        nextLabel='>'
                        previousLabel='<'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
                        containerClassName='flex space-x-2 text-lg font-semibold bg-white p-2 rounded-lg shadow-md'
                        pageClassName='px-4 py-2 border rounded-md hover:bg-gray-300'
                        pageLinkClassName='block px-4 py-2'
                        previousClassName='px-4 py-2 border rounded-md hover:bg-gray-300'
                        previousLinkClassName='block px-4 py-2'
                        nextClassName='px-4 py-2 border rounded-md hover:bg-gray-300'
                        nextLinkClassName='block px-4 py-2'
                        activeClassName='bg-blue-500 text-white rounded-md'
                    />
                    <p className='mt-4 text-gray-700'>
                        Hiển thị từ{' '}
                        {filteredItems.length > 0 ? itemOffset + 1 : 0} đến{' '}
                        {filteredItems.length > 0 ? endOffset : 0} trên tổng số{' '}
                        {filteredItems.length} sản phẩm
                    </p>
                </div>
            )}
        </div>
    );
};

export default Pagination;
