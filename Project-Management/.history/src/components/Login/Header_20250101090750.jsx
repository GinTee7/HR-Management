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
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="relative inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center flex-1 sm:justify-start">
            <div className="flex items-center shrink-0">
              <Link to="/">
                <img
                  alt="Logo"
                  src="/mnt/data/image.png"
                  className="w-auto h-16 rounded-2xl"
                />
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mt-4 mr-4">
              <Link to="/">
                <button
                  type="button"
                  className="relative w-auto min-w-[100px] px-4 py-2 rounded-full bg-[#E7F0FD] text-gray-700 border border-gray-300 hover:bg-gray-200"
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="relative mt-4">
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

      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
