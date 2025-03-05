import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-3 bg-[#D3D4D8] text-white rounded-full shadow-lg hover:bg-[#31473A] transition-all duration-300'
        >
            <FaArrowRight size={20} />
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-3 bg-[#D3D4D8] text-white rounded-full shadow-lg hover:bg-[#31473A] transition-all duration-300'
        >
            <FaArrowLeft size={20} />
        </button>
    );
};

export { NextArrow, PrevArrow };
