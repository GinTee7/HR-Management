import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-teal-900 rounded-lg shadow-lg md:flex-row">
        {/* Left Section with Logo */}
        <div className="flex items-center justify-center p-6 bg-teal-700 rounded-l-lg">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/250" // Replace with your logo URL
              alt="Logo"
              className="w-48 h-48 mx-auto"
            />
            <h1 className="mt-4 text-2xl font-bold text-white">ENTEEPRIISE</h1>
            <p className="mt-2 text-sm text-white">MANAGEMENT SOFTWARE</p>
          </div>
        </div>

        {/* Right Section with Login Form */}
        <div className="flex flex-col justify-center p-8 bg-gray-100 rounded-r-lg">
          {/* Top Navigation */}
          <div className="flex justify-between mb-6">
            <button className="text-sm font-medium text-gray-600">LOGIN</button>
            <button className="flex items-center space-x-1 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" // Replace with a small flag image
                alt="English"
                className="w-5 h-5 rounded-full"
              />
              <span className="font-medium text-gray-600">English</span>
            </button>
          </div>

          {/* Login Form */}
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            LOGIN
          </h2>
          <form>
            {/* Username */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Admin"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Password */}
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span className="absolute text-gray-500 cursor-pointer right-3 top-3">
                👁️ {/* Replace with an eye icon if needed */}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-teal-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white transition duration-300 bg-teal-600 rounded-lg hover:bg-teal-700"
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
