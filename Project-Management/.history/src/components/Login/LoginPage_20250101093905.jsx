import React, { useState } from "react";
import logo from "./image/logo.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E7F0FD]">
      <div className="flex shadow-xl bg-white border border-[#2E4F4F] rounded-lg w-[1100px] h-[600px] overflow-hidden">
        {/* Left Section */}
        <div className="flex items-center justify-center w-1/2 bg-[#2E4F4F] rounded-l-lg">
          <img
            src={logo}
            alt="Enterprise Logo"
            className="object-cover border-4 border-white rounded-full shadow-md w-96 h-96"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-1/2 p-10 bg-white">
          <h2 className="mb-8 text-4xl font-extrabold text-center text-gray-800">
            Welcome Back
          </h2>
          <form className="flex flex-col w-full gap-6">
            {/* Username Input */}
            <input
              className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
              type="text"
              placeholder="Username"
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute text-gray-500 right-3 top-3 hover:text-teal-600"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-bold text-white bg-[#2E4F4F] rounded-lg shadow-lg hover:bg-[#2E4F4F] focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-teal-600 hover:underline"
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
