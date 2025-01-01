import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateUsername = (username) => username.trim() !== "";
  const validatePassword = (password) => password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateUsername(username)) {
      alert("Username cannot be empty");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      navigate("/admin");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center max-h-screen bg-gray-200">
      <div className="flex shadow-lg bg-white border rounded-lg w-[1200px] h-[500px]">
        {/* Left Section with Image */}
        <div className="flex items-center justify-center w-1/2 bg-teal-700 rounded-l-lg">
          <img
            src="https://via.placeholder.com/400" // Replace with your actual image URL
            alt="Brand Logo"
            className="object-contain rounded-lg w-80 h-80"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-1/2 px-20 bg-teal-800 rounded-r-lg">
          <h2 className="mb-8 text-5xl font-bold text-center text-white">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
            {/* Username Input */}
            <input
              className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute text-gray-500 right-3 top-3"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-lg font-semibold text-white rounded-lg focus:outline-none transition-all ${
                loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-300 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
