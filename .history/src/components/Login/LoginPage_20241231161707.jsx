import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex overflow-hidden bg-teal-900 rounded-lg shadow-lg">
        {/* Left Section with Logo */}
        <div className="flex items-center justify-center p-8 bg-teal-700">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/250" // Replace with your logo URL
              alt="Logo"
              className="w-48 h-48"
            />
            <h1 className="mt-4 text-2xl font-bold text-white">ENTEEPRIISE</h1>
            <p className="mt-2 text-sm text-white">MANAGEMENT SOFTWARE</p>
          </div>
        </div>

        {/* Right Section with Login Form */}
        <div className="flex flex-col justify-center p-8 bg-gray-100">
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
