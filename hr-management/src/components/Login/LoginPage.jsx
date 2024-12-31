import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    console.log("Logged in with:", { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "##e6f0fd" }}>
      <div className="p-8 rounded-lg shadow-md bg-green w-96">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-white">LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-bold text-gray-400"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-400"
            >
              Password
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Link
                to="/forgot-password"
                className="mb-4 text-sm font-bold text-white"
              >
                Forgot Password?
              </Link>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
