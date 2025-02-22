import logo from "./image/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#E7F0FD] shadow-md">
      <div className="h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center flex-1 sm:justify-start">
            <div className="flex items-center shrink-0">
              <Link to="/">
                <img
                  alt="Logo"
                  src={logo}
                  className="w-auto h-16 rounded-2xl"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center pr-2">
            <Link to="/">
              <button
                type="button"
                className="relative px-4 py-2 rounded-full bg-[#E7F0FD] text-gray-700 border border-gray-300 hover:bg-gray-200"
              >
                Login
              </button>
            </Link>

            <div className="relative ml-4">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-[#E7F0FD] rounded border border-gray-300 hover:bg-gray-200"
              >
                Language
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded shadow-lg w-36">
                  <ul>
                    <li>
                      <button
                        onClick={() => {}}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {}}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
