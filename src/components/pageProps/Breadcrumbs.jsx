import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Breadcrumbs = ({ prevLocation, title }) => {
    const location = useLocation();
    const [locationPath, setLocationPath] = useState("");
    const [showUser, setShowUser] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setLocationPath(
            location.pathname.split("/").filter(Boolean).join(" / ")
        );
    }, [location]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex flex-col w-full px-6 py-4 mt-16 bg-gray-100 rounded-md shadow-sm xl:py-6">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-3xl font-bold text-primeColor font-titleFont">
                    {title}
                </h1>

                <div className="flex justify-center flex-grow">
                    <div className="relative w-full max-w-[400px] h-[40px] text-base text-primeColor bg-white flex items-center gap-2 px-4 rounded-xl">
                        <input
                            className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                            type="text"
                            onChange={handleSearch}
                            value={searchQuery}
                            placeholder="Tìm kiếm sản phẩm ở đây"
                        />
                        <FaSearch className="w-4 h-4" />
                    </div>
                </div>

                <div className="relative flex items-center gap-4">
                    
                    <div onClick={() => setShowUser(!showUser)} className="flex cursor-pointer">
                        <FaUser />
                        <FaCaretDown />
                    </div>
                    {showUser && (
                        <motion.ul
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                        >
                            <Link to="/signin">
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Login
                                </li>
                            </Link>
                            <Link onClick={() => setShowUser(false)} to="/signup">
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Sign Up
                                </li>
                            </Link>
                            <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                Profile
                            </li>
                            <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                Others
                            </li>
                        </motion.ul>
                    )}

                    <Link to="/cart">
                        <div className="relative">
                            <FaShoppingCart />
                            <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full font-titleFont top-2 -right-2 bg-primeColor">
                                0
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <p className="flex items-center mt-2 text-sm font-medium text-gray-600 capitalize">
                <span>{prevLocation || "Home"}</span>
                <HiOutlineChevronRight className="mx-1 text-gray-500" />
                <span className="font-semibold text-primeColor">
                    {locationPath}
                </span>
            </p>
        </div>
    );
};

export default Breadcrumbs;
