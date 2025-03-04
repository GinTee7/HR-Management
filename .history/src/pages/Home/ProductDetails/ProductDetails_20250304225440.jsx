import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@components/pageProps/Breadcrumbs';
import ProductInfo from '@components/pageProps/productDetails/ProductInfo';
import FeaturedProductsSection from '@components/pageProps/productDetails/featuredProducts';

const ProductDetails = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState('');
    const [productInfo, setProductInfo] = useState({
        id: 1,
        productName: 'Thuốc trừ sâu A',
        price: 150.0,
        des: 'Hiệu quả cao trong việc tiêu diệt sâu bọ, bảo vệ cây trồng một cách tối ưu.',
        features: 'Thuốc dưỡng',
        usage: 'Vô gạo tới cậy, hạt to sáng chắc',
        specifications: 'Chai 500ml',
        img: 'https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png',
        badge: 'Sản phẩm mới',
        categories: 'Thuốc trừ sâu, Nông nghiệp',
        tags: ['hiệu quả', 'an toàn', 'chất lượng cao'],
        sku: 'TTS-2024-01'
    });

    useEffect(() => {
        if (location.state?.item) {
            setProductInfo(location.state.item);
        }
        setPrevLocation(location.pathname);
    }, [location]);

    return (
        <div className='w-full min-h-screen mt-32 bg-gray-100'>
            <div className='w-full mx-auto border-b-[1px] border-b-gray-300'>
                <div className='w-full px-4 mx-auto'>
                    <div className='xl:-mt-10 -mt-7'>
                        <Breadcrumbs title='' prevLocation={prevLocation} />
                    </div>
                    <div className='grid w-full h-full grid-cols-1 gap-4 p-4 pb-10 -mt-5 md:grid-cols-2 xl:grid-cols-6 xl:-mt-8'>
                        <div className='h-full'>
                            <FeaturedProductsSection />
                        </div>
                        <div className='h-full xl:col-span-2'>
                            <img
                                className='object-cover w-full h-full rounded-lg'
                                src={productInfo.img}
                                alt={productInfo.productName}
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full h-full gap-6 md:col-span-2 xl:col-span-3 xl:p-14'>
                            <ProductInfo productInfo={productInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
