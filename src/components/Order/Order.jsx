import React, { useState } from "react";
import { Link } from "react-router-dom";

const Order = () => {
  const [paymentMethod, setPaymentMethod] = useState("payos");

  return (
    <div className="px-4 py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Hóa đơn</h1>
        <p className="text-base font-medium text-gray-600">21 tháng 3, 2021 lúc 10:34 PM</p>
      </div>
      
      <div className="flex flex-col mt-10 space-y-4 xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex flex-col w-full space-y-4">
          <div className="w-full px-4 py-6 bg-gray-50">
            <p className="text-xl font-semibold text-gray-800">Giỏ hàng của khách hàng</p>
            <div className="flex flex-col mt-4 space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center justify-between pb-4 border-b">
                  <img className="w-20" src="https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png" alt="sản phẩm" />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">Thuốc trừ sâu</h3>
                  </div>
                  <p className="text-lg font-semibold">50,000VNĐ</p>
                  <p className="text-lg font-semibold">x1</p>
                  <p className="text-lg font-semibold">50,000VNĐ</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full px-4 py-6 bg-gray-50">
            <h3 className="text-xl font-semibold">Tóm tắt</h3>
            <div className="pb-4 mt-4 border-b">
              <div className="flex justify-between">
                <p className="text-base">Tạm tính</p>
                <p className="text-base">$100.00</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-base">Phí vận chuyển</p>
                <p className="text-base">$10.00</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <p className="text-base">Tổng cộng</p>
              <p className="text-base">$110.00</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 py-6 bg-gray-50 xl:w-96">
          <h3 className="text-xl font-semibold">Khách hàng</h3>
          <div className="flex flex-col mt-4 space-y-4">
            <p className="font-semibold">Trung Tín</p>
            <p className="text-sm">Email: trungtin07@gmail.com</p>
            <p className="text-sm">Địa chỉ giao hàng: 180 North King Street, MA</p>
            <p className="text-sm">Địa chỉ thanh toán: 180 North King Street, MA</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Phương thức thanh toán</h3>
            <div className="flex flex-col mt-4 space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="payos"
                  checked={paymentMethod === "payos"}
                  onChange={() => setPaymentMethod("payos")}
                />
                <span>PayOS</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span>Thanh toán trực tiếp</span>
              </label>
            </div>
          </div>
          
          <Link to="/checkout">
            <button className="w-full py-3 mt-6 text-white bg-gray-800">Tiến hành thanh toán</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
