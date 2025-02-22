import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "./image/logo.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-full max-w-[1100px] h-auto md:h-[600px] overflow-hidden">
        {/* Left Section */}
        <div className="flex items-center justify-center w-full md:w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <img
            src={logo}
            alt={t("Enterprise Logo")}
            className="object-cover w-[85%] max-w-[300px] h-auto shadow-xl rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-full p-8 bg-white rounded-b-lg md:w-1/2 md:rounded-r-lg">
          <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-800 md:text-5xl">
            {t("Welcome Back")}
          </h2>
          <form className="flex flex-col w-full gap-5">
            {/* Username Input */}
            <input
              className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
              type="text"
              placeholder={t("Username")}
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
                type={passwordVisible ? "text" : "password"}
                placeholder={t("Password")}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute text-gray-500 right-4 top-4 hover:text-teal-600"
              >
                {passwordVisible ? t("Hide") : t("Show")}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
            >
              {t("Login")}
            </button>

            {/* Forgot Password */}
            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-teal-700 hover:underline"
              >
                {t("Forgot your password?")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
