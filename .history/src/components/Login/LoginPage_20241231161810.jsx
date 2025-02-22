import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex bg-teal-900 rounded-lg shadow-lg">
        {/* Left Section (Image and Branding) */}
        <div className="flex flex-col items-center justify-center p-8 bg-teal-700 rounded-l-lg">
          <img
            src="https://via.placeholder.com/300" // Replace with your logo URL
            alt="Logo"
            className="w-64 h-64 rounded-lg"
          />
          <h1 className="mt-4 text-2xl font-bold text-white">ENTEEPRIISE</h1>
          <p className="mt-2 text-sm text-white">MANAGEMENT SOFTWARE</p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="flex flex-col justify-center p-10 bg-teal-800 rounded-r-lg">
          <h2 className="mb-8 text-4xl font-bold text-center text-white">
            LOGIN
          </h2>
          <form>
            {/* Username Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Admin"
                className="w-full p-4 text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Password Input */}
            <div className="relative mb-6">
              <input
                type="password"
                placeholder="********"
                className="w-full p-4 text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute text-gray-300 right-4 top-4 hover:text-white"
              >
                👁️ {/* Replace with an eye icon for show/hide functionality */}
              </button>
            </div>
            {/* Forgot Password */}
            <div className="mb-6 text-right">
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
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
