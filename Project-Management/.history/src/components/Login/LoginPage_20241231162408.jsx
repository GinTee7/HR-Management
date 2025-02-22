import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-teal-900 rounded-2xl flex shadow-2xl w-[600px] h-[600px]">
        {/* Left Section (Image and Branding) */}
        <div className="flex flex-col items-center justify-center w-1/2 p-6 bg-teal-700 rounded-l-2xl">
          <img
            src="https://via.placeholder.com/150" // Replace with your logo URL
            alt="Logo"
            className="rounded-lg w-36 h-36"
          />
          <h1 className="mt-4 text-2xl font-bold text-white">ENTEEPRIISE</h1>
          <p className="mt-2 text-sm text-center text-white">
            MANAGEMENT SOFTWARE
          </p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="flex flex-col justify-center w-1/2 px-8 py-10 bg-teal-800 rounded-r-2xl">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            LOGIN
          </h2>
          <form>
            {/* Username Input */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm text-gray-300"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Admin"
                className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 bg-teal-600 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Password Input */}
            <div className="relative mb-4">
              <label
                className="block mb-2 text-sm text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 bg-teal-600 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute text-gray-300 right-3 top-[38px] hover:text-white"
              >
                👁️ {/* Replace with an eye icon */}
              </button>
            </div>
            {/* Forgot Password */}
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
