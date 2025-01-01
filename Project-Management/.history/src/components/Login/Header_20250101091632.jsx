import logo from "./image/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#2E4F4F] shadow-md">
      <div className="h-24 px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center justify-center flex-1 sm:justify-start">
            <div className="flex items-center shrink-0">
              <Link to="/">
                <img
                  alt="Logo"
                  src={logo}
                  className="w-20 h-20 rounded-full mp-6"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center pr-4">
            <Link to="/">
              <button
                type="button"
                className="relative px-6 py-3 text-lg font-medium rounded-full bg-[#E7F0FD] text-gray-700 border border-gray-300 hover:bg-[#2E4F4F] hover:text-white"
              >
                Login
              </button>
            </Link>

            <div className="relative ml-6">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-6 py-3 text-lg font-medium text-gray-700 bg-[#E7F0FD] rounded-full border border-gray-300 hover:bg-[#2E4F4F] hover:text-white"
              >
                Language
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 w-40 mt-2 bg-white rounded shadow-lg">
                  <ul>
                    <li>
                      <button
                        onClick={() => {}}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#2E4F4F] hover:text-white"
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {}}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#2E4F4F] hover:text-white"
                      >
                        Tiếng Việt
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
