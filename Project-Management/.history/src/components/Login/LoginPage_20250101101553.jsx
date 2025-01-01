import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./image/logo.png";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-[1100px] h-[600px] overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center w-1/2 bg-gradient-to-b from-[#2E4F4F] to-[#3A6565] rounded-l-lg"
        >
          <motion.img
            src={logo}
            alt="Enterprise Logo"
            className="object-cover w-[85%] h-[85%] shadow-xl rounded-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center w-1/2 p-10 bg-white rounded-r-lg"
        >
          <motion.h2
            className="mb-6 text-5xl font-extrabold text-center text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome Back
          </motion.h2>
          <form className="flex flex-col w-full gap-5">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
              type="text"
              placeholder="Username"
            />

            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-[#2E4F4F] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute text-gray-500 right-4 top-4 hover:text-teal-600"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2E4F4F]"
            >
              Login
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-center"
            >
              <a
                href="/forgot-password"
                className="text-sm font-medium text-teal-700 hover:underline"
              >
                Forgot your password?
              </a>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
