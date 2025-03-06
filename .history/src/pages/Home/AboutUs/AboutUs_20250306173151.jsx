import React from 'react';
import TeamImage from '@assets/aboutus.png';
import Image from '@assets/image.png';
import CallToActionImage from '@assets/aboutus2.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <motion.header
                className='relative w-full h-[40rem] bg-cover bg-center text-white'
                style={{ backgroundImage: `url(${TeamImage})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            ></motion.header>
            <section className='container px-6 py-12 mx-auto'>
                <div className='flex flex-col items-center gap-8 md:flex-row'>
                    <motion.div
                        className='md:w-1/2'
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className='text-lg leading-7 text-gray-700'>
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
                        className='ml-4 md:w-2/5'
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={Image}
                            alt='Our Team'
                            className='object-cover w-full rounded-lg shadow-lg h-80'
                        />
                    </motion.div>
                </div>
            </section>
            <motion.section
                className='relative text-white bg-center bg-cover py-80'
                style={{ backgroundImage: `url(${Image})` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='container relative px-6 mx-auto text-center'>
                    <h2 className='mb-6 text-5xl font-bold'>
                        Cam kết của chúng tôi
                    </h2>
                    <p className='mt-4 text-xl'>
                        Chúng tôi cam kết cung cấp các giải pháp nông nghiệp
                        chất lượng cao, mang lại hiệu quả kinh tế cho nông dân.
                    </p>
                </div>
            </motion.section>
            <motion.section
                className='relative py-24 text-white bg-center bg-cover'
                style={{ backgroundImage: `url(${CallToActionImage})` }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='container relative px-6 mx-auto text-center'>
                    <h2 className='text-3xl font-bold'>Hãy Cùng Đồng Hành</h2>
                    <p className='mt-4 text-lg'>
                        Tham gia cùng chúng tôi trên hành trình mang lại giá trị
                        cho cộng đồng.
                    </p>
                    <Link to='/contact'>
                        <motion.button
                            className='px-6 py-3 mt-6 font-semibold transition duration-200 bg-white rounded-full text-primary hover:bg-gray-200'
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
