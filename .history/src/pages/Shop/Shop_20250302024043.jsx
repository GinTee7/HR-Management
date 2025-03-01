import React, { useState } from 'react';
import Breadcrumbs from '@components/pageProps/Breadcrumbs';
import Pagination from '@components/pageProps/shopPage/Pagination';
import ProductBanner from '@components/pageProps/shopPage/ProductBanner';
import ShopSideNav from '@components/pageProps/shopPage/ShopSideNav';

const Shop = () => {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const itemsPerPageFromBanner = itemsPerPage => {
        setItemsPerPage(itemsPerPage);
    };

    return (
        <div className='px-6 mx-auto bg-[#F2F8FC] min-h-screen py-6'>
            <Breadcrumbs title='Sản phẩm' />
            <div className='flex flex-col gap-6 pb-20 mdl:flex-row'>
                {/* Sidebar Navigation */}
                <div className='sticky top-0 hidden w-full h-full mdl:w-1/4 mdl:flex'>
                    <ShopSideNav />
                </div>

                {/* Main Content */}
                <div className='flex flex-col w-full gap-6 mdl:w-3/4'>
                    <ProductBanner
                        itemsPerPageFromBanner={itemsPerPageFromBanner}
                    />
                    <Pagination itemsPerPage={itemsPerPage} />
                </div>
            </div>
        </div>
    );
};

export default Shop;
