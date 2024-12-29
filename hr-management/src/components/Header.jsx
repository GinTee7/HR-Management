import React from "react";
import Avatar from "../img/Avatar.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 text-white bg-transparent">
      <div className="flex items-center">
        <img
          src={Avatar}
          alt="Avatar"
          className="w-12 h-12 border-4 border-white rounded-full"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 font-bold rounded bg-green">
            Login
          </button>
        </Link>
        <button className="px-4 py-2 font-bold rounded bg-green">
          English
        </button>
      </div>
    </header>
  );
}

export default Header;
