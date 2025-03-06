import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeamImage from '@assets/aboutus.png';
import Image from '@assets/image.png';
import CallToActionImage from '@assets/aboutus2.jpg';

const AboutUs = () => {
    return (
        <div className='bg-gray-100'>
            {/* Hero Section */}
            <motion.header
                className='relative w-full h-[45rem] bg-cover bg-center text-white flex items-center justify-center shadow-lg'
                style={{ backgroundImage: `url(${TeamImage})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className='text-5xl font-bold text-center drop-shadow-lg'>
                    Về Chúng Tôi
                </h1>
            </motion.header>

            {/* About Section */}
            <section className='container px-6 py-20 mx-auto'>
                <div className='grid items-center gap-12 md:grid-cols-2'>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className='text-xl leading-8 text-gray-800'>
                            CÔNG TY TNHH MINH LONG AGRO được xây dựng từ hoài
                            bão phát triển nông nghiệp của những con người đã có
                            hơn 30 năm gắn bó với nông nghiệp. Các sản phẩm do
                            Công Ty Minh Long sản xuất và phân phối luôn đáp ứng
                            các tiêu chí khắt khe về chất lượng, được các cơ
                            quan quản lý công nhận, được người nông dân tin
                            dùng.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={Image}
                            alt='Our Team'
                            className='object-cover w-full shadow-2xl rounded-xl h-96'
                        />
                    </motion.div>
                </div>
            </section>

            {/* Commitment Section */}
            <motion.section
                className='relative py-48 text-white bg-center bg-cover'
                style={{ backgroundImage: `url(${Image})` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-60'></div>
                <div className='container relative px-6 mx-auto text-center'>
                    <h2 className='text-5xl font-bold'>
                        Cam kết của chúng tôi
                    </h2>
                    <p className='mt-6 text-2xl'>
                        Chúng tôi cam kết cung cấp các giải pháp nông nghiệp
                        chất lượng cao, mang lại hiệu quả kinh tế cho nông dân.
                    </p>
                </div>
            </motion.section>

            {/* Call To Action Section */}
            <motion.section
                className='relative text-white bg-center bg-cover py-28'
                style={{ backgroundImage: `url(${CallToActionImage})` }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='container relative px-6 mx-auto text-center'>
                    <h2 className='text-4xl font-bold'>Hãy Cùng Đồng Hành</h2>
                    <p className='mt-6 text-xl'>
                        Tham gia cùng chúng tôi trên hành trình mang lại giá trị
                        cho cộng đồng.
                    </p>
                    <Link to='/contact'>
                        <motion.button
                            className='px-8 py-4 mt-8 text-lg font-semibold transition duration-200 bg-white rounded-full shadow-xl text-primary hover:bg-gray-200'
                            whileHover={{ scale: 1.1 }}
                        >
                            Liên Hệ Ngay
                        </motion.button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutUs;
