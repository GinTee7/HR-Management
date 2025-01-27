import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/logo.png";
import vietnam from "../../../assets/vietnam.png";
import unitedkingdom from "../../../assets/united-kingdom.png";

const Menu = [
  {
    id: 1,
    name: "Trang chủ",
    link: "/home",
  },
  {
    id: 2,
    name: "Về chúng tôi",
    link: "/aboutus",
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
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    name: t("English"),
    flag: unitedkingdom,
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang) => {
    const languageData = {
      en: { code: "en", name: t("English"), flag: unitedkingdom },
      vi: { code: "vi", name: t("Tiếng Việt"), flag: vietnam },
    };
    const selectedLanguage = languageData[lang];
    setCurrentLanguage(selectedLanguage);
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full shadow-xl bg-gradient-to-r from-red-500 to-red-700">
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <a
              href="/home"
              className="flex gap-2 text-2xl font-bold sm:text-3xl"
            >
              <div className="relative w-20 h-20 my-3 overflow-hidden bg-white rounded-full">
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
                    className={`inline-block px-4 py-2 text-white duration-300 rounded ${
                      location.pathname === menu.link
                        ? "bg-yellow-300 text-red-800"
                        : "hover:bg-yellow-500 hover:text-red-800"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 text-white bg-yellow-500 border border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-red-800"
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="w-5 h-5 mr-2 rounded-full"
                />
                {currentLanguage.name}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 w-40 mt-2 bg-white rounded shadow-lg">
                  <ul>
                    <li>
                      <button
                        onClick={() => changeLanguage("en")}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-800 hover:bg-yellow-500 hover:text-white"
                      >
                        <img
                          src={unitedkingdom}
                          alt="English"
                          className="w-5 h-5 mr-2 rounded-full"
                        />
                        {t("English")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => changeLanguage("vi")}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-800 hover:bg-yellow-500 hover:text-white"
                      >
                        <img
                          src={vietnam}
                          alt="Tiếng Việt"
                          className="w-5 h-5 mr-2 rounded-full"
                        />
                        {t("Tiếng Việt")}
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Login/Logout Section */}
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="px-4 py-1 text-red-800 duration-200 bg-yellow-300 rounded-full hover:bg-yellow-500 hover:text-white"
              >
                Đăng xuất
              </button>
            ) : (
              <button className="px-4 py-1 text-red-800 duration-200 bg-yellow-300 rounded-full hover:bg-yellow-500 hover:text-white">
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
