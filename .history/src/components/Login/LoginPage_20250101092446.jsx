import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="flex shadow-xl bg-white border rounded-lg w-[1100px] h-[600px] overflow-hidden">
        {/* Left Section with Image */}
        <div className="flex items-center justify-center w-1/2 bg-gradient-to-b from-teal-700 to-teal-900">
          <img
            src="https://via.placeholder.com/400"
            alt="Brand Logo"
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
              className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              placeholder="Username"
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="password"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute text-gray-500 right-3 top-3 hover:text-teal-600"
              >
                👁️
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-bold text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
