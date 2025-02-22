import React, { useState } from "react";
import logo from "./image/logo.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0]">
      <div className="flex shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-[1100px] h-[600px] overflow-hidden">
        <div className="flex items-center justify-center w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] rounded-l-lg mt-4">
          <img
            src={logo}
            alt="Enterprise Logo"
            className="object-cover w-[85%] h-[85%] shadow-xl rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center w-1/2 p-10 bg-white rounded-r-lg">
          <h2 className="mb-6 text-5xl font-extrabold text-center text-gray-800">
            Welcome Back
          </h2>
          <form className="flex flex-col w-full gap-5">
            <input
              className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
              type="text"
              placeholder="Username"
            />

            <div className="relative">
              <input
                className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute text-gray-500 right-4 top-4 hover:text-teal-600"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
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
