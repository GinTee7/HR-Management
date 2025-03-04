import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLabelImportant } from 'react-icons/md';

const paginationItems = [
    {
        _id: '1',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu BestKill',
        color: 'Xanh',
        des: 'Thuốc trừ sâu hiệu quả cao, bảo vệ mùa màng khỏi các loại sâu bệnh.',
        category: 'Thuốc trừ sâu'
    },
    {
        _id: '2',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt cỏ WeedAway',
        color: 'Vàng',
        des: 'Giải pháp diệt cỏ tận gốc, an toàn cho đất và cây trồng.',
        category: 'Thuốc trừ sâu'
    },
    {
        _id: '3',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón Carbo Max',
        color: 'Đỏ',
        des: 'Phân bón cung cấp dinh dưỡng tối ưu cho cây trồng, giúp cây phát triển khỏe mạnh.',
        category: 'Thuốc trừ sâu'
    },
    {
        _id: '4',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ bệnh FungicidePro',
        color: 'Trắng',
        des: 'Ngăn chặn hiệu quả các loại bệnh hại trên cây trồng.',
        category: 'Phân bón'
    },
    {
        _id: '5',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân vi lượng GrowBetter',
        color: 'Xanh lá',
        des: 'Cải thiện chất lượng đất và tăng năng suất mùa màng.',
        category: 'Phân bón'
    },
    {
        _id: '6',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc bảo vệ thực vật ShieldCrop',
        color: 'Cam',
        des: 'Giúp cây trồng phát triển khỏe mạnh, tăng năng suất và bảo vệ mùa màng.',
        category: 'Phân bón'
    },
    {
        _id: '7',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt nấm AntiFungi',
        color: 'Tím',
        des: 'Chống lại các loại nấm gây hại cho cây trồng.',
        category: 'Phân bón'
    },
    {
        _id: '8',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón hữu cơ GreenLife',
        color: 'Xanh lá cây',
        des: 'Phân hữu cơ tự nhiên, bảo vệ đất và tăng năng suất cây trồng.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '9',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ cỏ QuickWeed',
        color: 'Xám',
        des: 'Diệt cỏ nhanh chóng, không ảnh hưởng đến cây trồng.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '10',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón cao cấp SuperGrow',
        color: 'Nâu',
        des: 'Phân bón chuyên dụng giúp cây phát triển mạnh và cho năng suất cao.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '11',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc diệt sâu HighProtect',
        color: 'Hồng',
        des: 'Thuốc hiệu quả cao trong việc bảo vệ cây trồng khỏi sâu hại.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '12',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón chuyên dụng PowerMax',
        color: 'Xanh ngọc',
        des: 'Phân bón giúp cải thiện chất lượng đất và tăng cường sinh trưởng cây trồng.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '13',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc trừ sâu EcoKill',
        color: 'Xanh lam',
        des: 'Thuốc trừ sâu an toàn, thân thiện với môi trường.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '14',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        productName: 'Phân bón lá LeafBoost',
        color: 'Vàng',
        des: 'Phân bón dạng lá giúp cây hấp thụ nhanh chóng và hiệu quả.',
        category: 'Thuốc trừ ốc'
    },
    {
        _id: '15',
        img: 'https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg',
        productName: 'Thuốc bảo vệ lá LeafGuard',
        color: 'Xanh lục',
        des: 'Bảo vệ lá cây khỏi các loại bệnh và sâu hại.',
        category: 'Thuốc trừ ốc'
    }
];

const categorizeProducts = items => {
    return items.reduce((categories, item) => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
        return categories;
    }, {});
};

const Items = ({ items = [] }) => {
    return (
        <div className='grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3'>
            {items.length > 0 ? (
                items.map(item => (
                    <div
                        key={item._id}
                        className='flex flex-col overflow-hidden transition-transform transform bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl'
                    >
                        <img
                            className='object-cover w-full h-56'
                            src={item.img || 'https://via.placeholder.com/150'}
                            alt={item.productName || 'Hình ảnh sản phẩm'}
                        />
                        <div className='flex flex-col justify-between p-6'>
                            <h2 className='text-xl font-bold text-gray-800 truncate'>
                                {item.productName}
                            </h2>
                            <p className='mt-2 text-lg text-gray-600'>
                                {item.des}
                            </p>
                            <div className='flex items-center justify-between mt-4'>
                                <Link
                                    to='/product'
                                    className='flex items-center gap-2 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700'
                                >
                                    <MdOutlineLabelImportant /> Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center text-gray-500'>
                    Không có sản phẩm nào.
                </p>
            )}
        </div>
    );
};

const ProductSection = () => {
    const categorizedProducts = categorizeProducts(paginationItems);

    return (
        <div className='container p-8 mx-auto bg-gray-100 rounded-lg'>
            {Object.entries(categorizedProducts).map(([category, items]) => (
                <div key={category} className='mb-12'>
                    <h2 className='mb-6 text-3xl font-bold text-gray-900'>
                        {category}
                    </h2>
                    <Items items={items} />
                </div>
            ))}
        </div>
    );
};

export default Pagination;
