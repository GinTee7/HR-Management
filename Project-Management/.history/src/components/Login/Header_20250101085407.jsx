import { useState } from "react";
import { Disclosure, DisclosureButton, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../../assets/logo.png";
import vietnam from "../../assets/vietnam.png";
import unitedkingdom from "../../assets/united-kingdom.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    name: "English",
    flag: unitedkingdom,
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang) => {
    const languageData = {
      en: { name: "English", flag: unitedkingdom },
      vi: { name: "Tiếng Việt", flag: vietnam },
    };
    setCurrentLanguage(languageData[lang]);
    setIsDropdownOpen(false);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="h-20 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md group hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block w-6 h-6" />
              <XMarkIcon className="hidden w-6 h-6" />
            </DisclosureButton>
          </div>

          <div className="flex items-center justify-center flex-1 sm:justify-start">
            {/* <div className="flex items-center shrink-0">
              <Link to="/">
                <img
                  alt="Logo"
                  src={logo}
                  className="w-auto h-16 rounded-2xl"
                />
              </Link>
            </div> */}
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mt-4 mr-4">
              <Link to="/">
                <Button
                  type="button"
                  className="relative w-auto min-w-[100px] px-4 py-2 rounded-full bg-gray-800 text-gray-400 hover:text-white"
                >
                  Login
                </Button>
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/register">
                <Button
                  type="button"
                  className="relative w-auto min-w-[100px] px-4 py-2 rounded-full bg-gray-800 text-gray-400 hover:text-white"
                >
                  Sign Up
                </Button>
              </Link>
            </div>

            <div className="relative mt-4">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded hover:bg-gray-600"
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="w-5 h-5 mr-2 rounded-full"
                />
                {currentLanguage.name}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gray-700 rounded shadow-lg w-36">
                  <ul>
                    <li>
                      <button
                        onClick={() => changeLanguage("en")}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
                      >
                        <img
                          src={unitedkingdom}
                          alt="English"
                          className="w-5 h-5 mr-2 rounded-full"
                        />
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => changeLanguage("vi")}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
                      >
                        <img
                          src={vietnam}
                          alt="Tiếng Việt"
                          className="w-5 h-5 mr-2 rounded-full"
                        />
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
    </Disclosure>
  );
};

export default Header;
