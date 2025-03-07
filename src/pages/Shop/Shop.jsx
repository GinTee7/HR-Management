import React, { useState } from 'react';
import Breadcrumbs from '@components/pageProps/Breadcrumbs';
import Pagination from '@components/pageProps/shopPage/Pagination';
import ProductBanner from '@components/pageProps/shopPage/ProductBanner';

const Shop = () => {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const itemsPerPageFromBanner = itemsPerPage => {
        setItemsPerPage(itemsPerPage);
    };

    return (
        <div className='px-6 mx-auto bg-[#F2F8FC] min-h-screen py-6'>
            {/* <Breadcrumbs title='Sản phẩm' itemsPerPageFromBanner={itemsPerPageFromBanner}/> */}
            <div className='flex flex-col gap-6 pb-20'>
                {/* Main Content */}
                <div className='flex flex-col w-full gap-6'>
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
