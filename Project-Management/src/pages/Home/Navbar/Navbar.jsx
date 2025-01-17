// import React from "react";
import Logo from "../../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Trang chủ",
    link: "/home",
  },
  {
    id: 2,
    name: "Về chúng tôi",
    link: "/#about",
  },
  {
    id: 3,
    name: "Sản phẩm",
    link: "/#services",
  },
  {
    id: 4,
    name: "Lịch sử mua hàng",
    link: "/order-history",
  },
];
const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <div className="shadow-xl">
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div>
              <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
                <img src={Logo} alt="Logo" className="w-20 h-20 my-3 rounded-full" />
              </a>
            </div>

            {/* Menu and Actions Section */}
            <div className="flex items-center justify-between gap-4">
              <ul className="items-center hidden gap-4 sm:flex">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-4 duration-300 hover:text-primary"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Cart Section */}
              <a
                href="/cart"
                className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 6h14m-9-6V6m0 0h6m-6 0L9 3m3 3l1 3"
                  />
                </svg>
                <span className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
                  3
                </span>
              </a>

              {/* Login/Logout Section */}
              {isLoggedIn ? (
                <button
                  onClick={onLogout}
                  className="px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-secondary to-red-500 hover:scale-105"
                >
                  Logout
                </button>
              ) : (
                <button
                  className="px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
