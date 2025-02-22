import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validateUsername = (username) => username.trim() !== "";
  const validatePassword = (password) => password.length >= 8;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateUsername(username)) {
      alert(t("UsernameEmpty")); // Replaced toast.error with alert
      return;
    }

    if (!validatePassword(password)) {
      alert(t("PasswordShort")); // Replaced toast.error with alert
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://api.miadinh.dev/files/user/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || t("LoginFailed")); // Replaced toast.error with alert
        return;
      }

      const data = await response.json();
      alert(data.message || t("LoginSuccess")); // Replaced toast.success with alert

      localStorage.setItem("username", username);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      if (data.role === "user") {
        navigate("/user-homepage");
      }
      if (data.role === "admin") {
        navigate("/admin");
      }
    } catch (error) {
      alert(t("LoginFailed")); // Replaced toast.error with alert
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex shadow-lg bg-white border rounded-lg w-[600px] h-[600px]">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-1/2 bg-teal-700 rounded-l-lg">
          <h1 className="mt-4 text-2xl font-bold text-white">ENTEEPRIISE</h1>
          <p className="mt-2 text-sm text-white">MANAGEMENT SOFTWARE</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-1/2 p-6 bg-teal-800 rounded-r-lg">
          <h2 className="mb-6 text-3xl font-bold text-white">{t("Login")}</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-xs gap-4"
          >
            {/* Username Input */}
            <input
              className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder={t("EnterUsername")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={passwordVisible ? "text" : "password"}
                placeholder={t("Password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute text-gray-500 right-3 top-2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-4 text-sm font-semibold text-white rounded-lg focus:outline-none transition-all ${
                loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? t("LoggingIn") : t("Login")}
            </button>

            {/* Forgot Password */}
            <div className="mt-4 text-center">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-300 hover:underline"
              >
                {t("ForgotPassword")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
