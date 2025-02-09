import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import Logo from "../../../assets/logo.png";
import vietnam from "../../../assets/vietnam.png";
import unitedkingdom from "../../../assets/united-kingdom.png";

const Menu = [
  { id: 1, name: "Trang chủ", link: "/home" },
  { id: 2, name: "Về chúng tôi", link: "/aboutus" },
  { id: 3, name: "Sản phẩm", link: "/shop" },
  { id: 4, name: "Lịch sử mua hàng", link: "/order-history" },
];

const languageData = {
  en: { code: "en", name: "English", flag: unitedkingdom },
  vi: { code: "vi", name: "Tiếng Việt", flag: vietnam },
};

const Navbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const currentLanguage = useMemo(
    () => languageData[i18n.language] || languageData.en,
    [i18n.language]
  );

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const changeLanguage = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      setIsDropdownOpen(false);
    },
    [i18n]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full shadow-xl bg-gradient-to-r from-[#ED4C5E] to-[#FECDA5]">
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/home" className="flex gap-2 text-2xl font-bold sm:text-3xl">
            <div className="relative w-20 h-20 my-3 overflow-hidden bg-white rounded-full">
              <img
                src={Logo}
                alt="Logo"
                className="absolute top-0 left-0 object-cover w-full h-full rounded-full"
              />
            </div>
          </Link>

          {/* Menu and Actions Section */}
          <div className="flex items-center gap-4">
            <ul className="hidden gap-4 sm:flex">
              {Menu.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className={classNames(
                      "inline-block px-4 py-2 rounded duration-300",
                      location.pathname === link
                        ? "bg-[#FECDA5] text-[#ED4C5E] font-bold"
                        : "text-white hover:bg-[#FECDA5] hover:text-[#ED4C5E]"
                    )}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 bg-[#FECDA5] text-[#ED4C5E] border border-[#ED4C5E] rounded-full hover:bg-[#ED4C5E] hover:text-white"
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="w-5 h-5 mr-2 rounded-full"
                />
                {t(currentLanguage.name)}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 w-40 mt-2 bg-white rounded shadow-lg">
                  <ul>
                    {Object.values(languageData).map(({ code, name, flag }) => (
                      <li key={code}>
                        <button
                          onClick={() => changeLanguage(code)}
                          className="flex items-center w-full px-4 py-2 text-sm text-[#ED4C5E] hover:bg-[#FECDA5] hover:text-white"
                        >
                          <img src={flag} alt={name} className="w-5 h-5 mr-2 rounded-full" />
                          {t(name)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Login/Logout Section */}
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="px-4 py-1 bg-[#FECDA5] text-[#ED4C5E] rounded-full hover:bg-[#ED4C5E] hover:text-white"
              >
                Đăng xuất
              </button>
            ) : (
              <button className="px-4 py-1 bg-[#FECDA5] text-[#ED4C5E] rounded-full hover:bg-[#ED4C5E] hover:text-white">
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
