import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex shadow-lg bg-white border rounded-lg w-[1200px] h-[500px]">
        {/* Left Section with Image */}
        <div className="flex items-center justify-center w-1/2 bg-teal-700 rounded-l-lg">
          <img
            src="https://via.placeholder.com/400" // Replace with your actual image URL
            alt="Brand Logo"
            className="object-contain rounded-lg w-80 h-80"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-1/2 px-20 bg-teal-800 rounded-r-lg">
          <h2 className="mb-8 text-5xl font-bold text-center text-white">
            Login
          </h2>
          <form className="flex flex-col w-full gap-6">
            {/* Username Input */}
            <input
              className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter your username"
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute text-gray-500 right-3 top-3"
              >
                {/* Replace with an icon */}
                👁️
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-300 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
