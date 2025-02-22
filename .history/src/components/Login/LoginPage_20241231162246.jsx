import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-teal-900 rounded-2xl flex shadow-2xl w-[80%] max-w-5xl">
        {/* Left Section (Image and Branding) */}
        <div className="flex flex-col items-center justify-center w-1/2 p-12 bg-teal-700 rounded-l-2xl">
          <img
            src="https://via.placeholder.com/400" // Replace with your logo URL
            alt="Logo"
            className="rounded-lg w-72 h-72"
          />
          <h1 className="mt-6 text-4xl font-bold text-white">ENTEEPRIISE</h1>
          <p className="mt-4 text-lg text-white">MANAGEMENT SOFTWARE</p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="flex flex-col justify-center w-1/2 p-16 bg-teal-800 rounded-r-2xl">
          <h2 className="mb-10 text-5xl font-bold text-center text-white">
            LOGIN
          </h2>
          <form>
            {/* Username Input */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Admin"
                className="w-full p-5 text-lg text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Password Input */}
            <div className="relative mb-8">
              <input
                type="password"
                placeholder="********"
                className="w-full p-5 text-lg text-white placeholder-gray-300 bg-teal-600 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute text-gray-300 right-5 top-4 hover:text-white"
              >
                👁️ {/* Replace with an eye icon for show/hide functionality */}
              </button>
            </div>
            {/* Forgot Password */}
            <div className="mb-8 text-right">
              <a href="#" className="text-blue-400 text-md hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 text-xl font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
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
