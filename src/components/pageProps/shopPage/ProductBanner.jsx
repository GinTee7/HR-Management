import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gridViewActive, setGridViewActive] = useState(true);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGridViewClick = () => {
    setGridViewActive(true);
  };

  const handleListViewClick = () => {
    setGridViewActive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-center mt-28">
      {/* View Toggle Buttons */}
      <div className="flex items-center gap-4 mr-auto">
        <button
          onClick={handleGridViewClick}
          className={`w-8 h-8 text-lg flex items-center justify-center cursor-pointer rounded-md transition ${
            gridViewActive
              ? "bg-primeColor text-white"
              : "border border-gray-300 text-[#737373]"
          }`}
          aria-label="Grid View"
        >
          <BsGridFill />
        </button>
        <button
          onClick={handleListViewClick}
          className={`w-8 h-8 text-base flex items-center justify-center cursor-pointer rounded-md transition ${
            !gridViewActive
              ? "bg-primeColor text-white"
              : "border border-gray-300 text-[#737373]"
          }`}
          aria-label="List View"
        >
          <ImList />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full lg:w-[500px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl mt-4 md:mt-0 md:ml-auto md:mr-28">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Tìm kiếm sản phẩm ở đây"
        />
        <FaSearch className="w-5 h-5" />
      </div>

      {/* Sorting & Items Per Page */}
      <div className="flex items-center gap-4 mt-4 md:gap-6 md:mt-0">
        {/* Sorting Dropdown */}
        <div className="relative flex items-center gap-2 text-base text-[#767676]">
          <label htmlFor="sortBy" className="block">
            Sắp xếp theo:
          </label>
          <div className="relative">
            <select
              id="sortBy"
              className="w-32 px-4 py-1 text-base border border-gray-200 rounded-md cursor-pointer md:w-52 text-primeColor focus:ring-2 focus:ring-primeColor"
            >
              <option value="Best Sellers">Bán chạy</option>
              <option value="New Arrival">Mới nhất</option>
              <option value="Featured">Nổi bật</option>
              <option value="Final Offer">Ưu đãi cuối cùng</option>
            </select>
          </div>
        </div>

        {/* Items Per Page Dropdown */}
        <div className="relative flex items-center gap-2 text-[#767676]">
          <label htmlFor="itemsPerPage" className="block">
            Hiển thị:
          </label>
          <div className="relative">
            <select
              id="itemsPerPage"
              onChange={(e) => itemsPerPageFromBanner(Number(e.target.value))}
              className="w-16 px-4 py-1 text-base border border-gray-200 rounded-md cursor-pointer md:w-20 text-primeColor focus:ring-2 focus:ring-primeColor"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
