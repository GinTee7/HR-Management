// import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div data-aos="fade-up" className="bg-gray-100">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid py-5 md:grid-cols-3">
          {/* company details */}
          <div className="px-4 py-8 ">
            <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
              <img src={footerLogo} alt="Logo" className="w-16" />
              Minh Long
            </h1>
            <p className="">
              Các sản phẩm của chúng tôi luôn tạo ra những cây khỏe mạnh hơn, dễ
              trồng, giúp tăng đáng kể năng suất và lợi nhuận cho người nông dân
              Việt Nam.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Trụ sở chính: Số 98, Ấp Đông Thành, Xã Thạnh Đông A, Tân Hiệp, Kiên Giang</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>1900 8982</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-10 text-center border-t-2 border-gray-300/50">
            @copyright 2025 || Minh Long Management System
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
