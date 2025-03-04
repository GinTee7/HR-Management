import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import Badge from './Badge';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = props => {
    const _id = props.productName;
    const idString = _id => {
        return String(_id).toLowerCase().split(' ').join('');
    };
    const rootId = idString(_id);

    const navigate = useNavigate();
    const productItem = props;
    const handleProductDetails = () => {
        navigate(`/product`, {
            state: {
                item: productItem
            }
        });
    };

    return (
        <div className='relative w-full group'>
            <div className='relative overflow-hidden max-w-80 max-h-80'>
                <div>
                    <img
                        src={props.img}
                        alt={props.productName}
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='absolute top-6 left-8'>
                    {props.badge && <Badge text='New' />}
                </div>
                <div className='w-full absolute bg-white bottom-[-130px] group-hover:bottom-0 duration-700'>
                    <ul className='flex flex-col items-center justify-center w-full gap-2 p-4 border border-gray-200 rounded-md shadow-md'>
                        <li className='flex items-center justify-end w-full gap-2 pb-1 text-sm font-medium text-gray-600 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary hover:border-primary'>
                            <FaShoppingCart />
                            <span>Thêm vào giỏ hàng</span>
                        </li>
                        {/* <li className='flex items-center justify-end w-full gap-2 pb-1 text-sm font-medium text-gray-600 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary hover:border-primary'>
                            <Link
                                to='/product'
                                className='flex items-center gap-2'
                            >
                                <MdOutlineLabelImportant />
                                <span>Xem chi tiết</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className='max-w-80 py-6 flex flex-col justify-between gap-1 border-[1px] border-t-0 px-4 min-h-[180px]'>
                <div className='flex items-center justify-between font-titleFont'>
                    {/* Loại bỏ truncate ở đây */}
                    <h2 className='text-lg font-bold text-primeColor'>
                        {props.productName}
                    </h2>
                    <p className='text-[#767676] text-[14px]'>
                        {props.price} VND
                    </p>
                </div>
                <div>
                    <p className='text-[#767676] text-[14px]'>{props.color}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
