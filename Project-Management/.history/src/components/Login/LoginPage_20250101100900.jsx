import React, { useState } from "react";
import logo from "./image/logo.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-full max-w-[1100px] h-auto md:h-[600px] overflow-hidden">
        <div className="flex items-center justify-center w-full md:w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <img
            src={logo}
            alt="Enterprise Logo"
            className="object-cover w-[80%] max-w-[300px] h-auto shadow-xl rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center w-full p-6 bg-white rounded-b-lg md:w-1/2 md:p-10 md:rounded-r-lg">
          <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-800 md:text-5xl">
            Welcome Back
          </h2>
          <form className="flex flex-col w-full gap-4 md:gap-5">
            <input
              className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
              type="text"
              placeholder="Username"
            />

            <div className="relative">
              <input
                className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute text-gray-500 transform -translate-y-1/2 right-4 top-1/2 hover:text-teal-600"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="relative w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:before:bg-[#3A6565] focus:outline-none focus:ring-2 focus:ring-[#2E4F4F] before:absolute before:top-[-30px] before:left-[-30px] before:w-[calc(100%+60px)] before:h-[calc(100%+60px)] before:bg-transparent before:rounded-lg before:transition-all before:duration-300 hover:before:opacity-50 active:scale-95 active:before:bg-[#3A6565] active:before:transition-none"
            >
              Login
            </button>

            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-teal-700 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
