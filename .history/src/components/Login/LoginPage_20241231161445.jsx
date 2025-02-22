import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="overflow-hidden bg-white rounded-lg shadow-md w-96">
        {/* Header */}
        <div className="flex flex-col items-center py-6 text-white bg-teal-800">
          <img
            src="https://via.placeholder.com/100" // Replace with your logo URL
            alt="Logo"
            className="w-20 h-20 mb-4 rounded-full"
          />
          <h1 className="text-lg font-semibold">
            Enteepriise Management Software
          </h1>
        </div>
        {/* Login Form */}
        <div className="p-6 bg-gray-50">
          <h2 className="mb-4 text-2xl font-bold text-center text-teal-800">
            LOGIN
          </h2>
          <form>
            {/* Username Field */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Admin"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <span className="absolute inset-y-0 flex items-center text-gray-500 right-4">
                  👁️
                </span>
              </div>
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
              className="w-full py-2 text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700"
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
