import { Disclosure, DisclosureButton, Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="h-20 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex items-center justify-center flex-1 sm:justify-start">
                <div className="flex items-center shrink-0">
                  {/* <Link to="/">
                    <img
                      alt="Logo"
                      src={logo}
                      className="w-auto h-16 rounded-2xl"
                    />
                  </Link> */}
                </div>
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
                    Language
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-700 rounded shadow-lg w-36">
                      <ul>
                        <li>
                          <button
                            onClick={() => {}}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
                          >
                            English
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {}}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                About
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
