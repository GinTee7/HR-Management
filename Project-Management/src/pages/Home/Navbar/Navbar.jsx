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
    link: "/shop",
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
