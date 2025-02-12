import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "@assets/Logo.png";
import CoverImage from "@assets/aboutus2.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Profile = ({ isLoggedIn }) => {
  const purchaseHistory = [
    { id: 1, date: "2024-02-01", item: "Thuốc trừ sâu A", quantity: 2, amount: "200,000VNĐ" },
    { id: 2, date: "2024-02-05", item: "Phân bón hữu cơ B", quantity: 1, amount: "200,000VNĐ" },
    { id: 3, date: "2024-02-10", item: "Hạt giống C", quantity: 5, amount: "750,000VNĐ" },
  ];

  return (
    <>
      <Navbar />

      <main className="w-full mt-24 overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img src={CoverImage} alt="User Cover" className="object-cover w-full h-48" />

          <div className="sm:w-[80%] w-[90%] mx-auto flex items-center gap-4 -mt-4">
            <img
              src={ProfilePic}
              alt="User Profile"
              className="w-24 h-24 rounded-md outline outline-2 outline-offset-2 outline-blue-500"
            />
            <h1 className="font-serif text-2xl text-gray-800 dark:text-white">Đại lý</h1>
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center mt-4">
            <p className="text-center text-gray-700 w-fit dark:text-gray-400 text-md">
              Chúng tôi là đại lý chuyên cung cấp các loại thuốc bảo vệ thực vật, phân bón hữu cơ, 
              hạt giống và dụng cụ nông nghiệp chất lượng cao, giúp bà con nông dân tăng năng suất và bảo vệ mùa màng.
            </p>

            <div className="flex flex-col justify-center w-full gap-2 py-6">
              <div className="flex flex-col justify-center w-full gap-2 sm:flex-row">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                      <dd className="text-lg font-semibold">John</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                      <dd className="text-lg font-semibold">Doe</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                      <dd className="text-lg font-semibold">johndoe@gmail.com</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                      <dd className="text-lg font-semibold">+123456789</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="w-full p-4 text-center bg-gray-100 rounded-lg dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Role</h2>
              <p className="text-lg text-blue-600 dark:text-blue-400">Đại lý 1</p>
            </div>

            <div className="w-full mt-6 mb-10">
              <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">Lịch Sử Mua Hàng</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border border-collapse border-gray-300 dark:border-gray-700">
                  <thead className="bg-gray-200 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Ngày</th>
                      <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Sản phẩm</th>
                      <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Số lượng</th>
                      <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Số tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseHistory.map((order) => (
                      <tr key={order.id} className="text-center bg-white dark:bg-gray-900">
                        <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{order.date}</td>
                        <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{order.item}</td>
                        <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{order.quantity}</td>
                        <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
