import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    setMessage("If that email is registered, we will send you a reset link.");
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "##e6f0fd" }}>
      <div className="p-8 rounded-lg shadow-md bg-green w-96">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-white">Forgot Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          {message && <p className="mb-4 text-sm text-green-500">{message}</p>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-400"
            >
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
