import React from "react";
import { useLocation, Link } from "react-router-dom";
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
    link: "/shop",
  },
  {
    id: 4,
    name: "Lịch sử mua hàng",
    link: "/order-history",
  },
];

const Navbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-xl">
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <a href="/home" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <div className="relative w-20 h-20 my-3 overflow-hidden bg-gray-200 rounded-full">
                <img
                  src={Logo}
                  alt="Logo"
                  className="absolute top-0 left-0 object-center w-full h-full rounded-full"
                />
              </div>
            </a>
          </div>

          {/* Menu and Actions Section */}
          <div className="flex items-center justify-between gap-4">
            <ul className="items-center hidden gap-4 sm:flex">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className={`inline-block px-2 py-2 duration-300 rounded ${
                      location.pathname === menu.link
                        ? "bg-primary text-white"
                        : "hover:text-primary"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Login/Logout Section */}
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-secondary to-red-500 hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <button className="px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105">
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
