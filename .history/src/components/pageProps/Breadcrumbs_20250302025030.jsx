import React, { useEffect, useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = ({ prevLocation, title }) => {
    const location = useLocation();
    const [locationPath, setLocationPath] = useState('');

    useEffect(() => {
        setLocationPath(
            location.pathname.split('/').filter(Boolean).join(' / ')
        );
    }, [location]);

    return (
        <div className='flex flex-col w-full gap-3 px-6 py-6 bg-gray-100 rounded-md shadow-sm xl:py-10'>
            <h1 className='text-4xl font-bold text-primeColor font-titleFont'>
                {title}
            </h1>
            <p className='flex items-center text-sm font-medium text-gray-600 capitalize'>
                <span>{prevLocation || 'Home'}</span>
                <HiOutlineChevronRight className='mx-1 text-gray-500' />
                <span className='font-semibold text-primeColor'>
                    {locationPath}
                </span>
            </p>
        </div>
    );
};

export default Breadcrumbs;
