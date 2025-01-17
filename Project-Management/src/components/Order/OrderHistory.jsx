import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OrderHistory = () => {
  const [filter, setFilter] = useState("all");

  const cartItems = [
    { id: 1, name: "Thuốc trừ sâu", status: "chờ xác nhận", img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png", price: "200,000 VND" },
    { id: 2, name: "Thuốc trừ sâu 2", status: "đang giao hàng", img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg", price: "150,000 VND" },
    { id: 3, name: "Phân bón", status: "đã giao", img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png", price: "250,000 VND" },
    { id: 4, name: "Thuốc trừ bệnh", status: "đã hủy", img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg", price: "300,000 VND" },
    { id: 5, name: "Thuốc trừ ốc", status: "đang giao hàng", img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png", price: "180,000 VND" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredItems =
    filter === "all" ? cartItems : cartItems.filter((item) => item.status === filter);

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Giỏ Hàng</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setFilter("chờ xác nhận")}
          className={`px-4 py-2 rounded ${filter === "chờ xác nhận" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Chờ xác nhận
        </button>
        <button
          onClick={() => setFilter("đang giao hàng")}
          className={`px-4 py-2 rounded ${filter === "đang giao hàng" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Đang giao hàng
        </button>
        <button
          onClick={() => setFilter("đã giao")}
          className={`px-4 py-2 rounded ${filter === "đã giao" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Đã giao
        </button>
        <button
          onClick={() => setFilter("đã hủy")}
          className={`px-4 py-2 rounded ${filter === "đã hủy" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Đã hủy
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 duration-200 bg-white border rounded shadow-sm hover:shadow-md"
            data-aos="fade-up"
          >
            {/* Product Image */}
            <div className="h-48 overflow-hidden rounded">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Product Details */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="mt-2 text-xl font-semibold text-blue-500">{item.price}</p>
              <p className="text-sm text-gray-600 capitalize">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
