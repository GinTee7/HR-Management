import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/ApiService";
import logo from "@assets/logo.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login({ username, password });
      console.log("Login successful:", response);

      const { token, role } = response;

      if (token) {
        localStorage.setItem("token", token);
      }

      if (role === 1) {
        navigate("/admin");
      } else if (role === 2) {
        navigate("/home");
      } 
      else if (role === 3) {
        navigate("/warehouse-manager");
      }else {
        setError("Unauthorized access");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0]">
      <div className="flex shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-[1100px] h-[566px] overflow-hidden mt-4 mb-4">
        <div className="flex items-center justify-center w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] rounded-l-lg">
          <img
            src={logo}
            alt={t("Enterprise Logo")}
            className="object-cover w-[85%] h-[85%] shadow-xl rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center w-1/2 p-10 bg-white rounded-r-lg">
          <h2 className="mb-6 font-sans text-4xl font-extrabold text-center text-gray-800">
            {t("Welcome Back")}
          </h2>
          <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit}>
            <input
              className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
              type="text"
              placeholder={t("Username")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <div className="relative flex items-center">
              <input
                className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
                type={passwordVisible ? "text" : "password"}
                placeholder={t("Password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute text-gray-500 right-4 hover:text-teal-600"
              >
                {passwordVisible ? t("Hide") : t("Show")}
              </button>
            </div>

            {error && <p className="text-center text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
            >
              {t("Login")}
            </button>

            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-teal-700 hover:underline"
              >
                {t("Forgot your password?")}
              </a>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-700">{t("Don't have an account?")}</p>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="font-medium text-teal-700 hover:underline"
              >
                {t("Create an account")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
