import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OrderHistory = () => {
  const [filter, setFilter] = useState("all");
  const [searchId, setSearchId] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const cartItems = [
    {
      id: 1,
      productId: "SP001",
      name: "Thuốc trừ sâu",
      status: "chờ xác nhận",
      img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: "200,000 VND",
      date: "21/03/2024",
      buyer: "Nguyễn Văn A",
    },
    {
      id: 2,
      productId: "SP002",
      name: "Thuốc trừ sâu 2",
      status: "đang giao hàng",
      img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
      price: "150,000 VND",
      date: "20/03/2024",
      buyer: "Trần Thị B",
    },
    {
      id: 3,
      productId: "SP003",
      name: "Phân bón",
      status: "đã giao",
      img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: "250,000 VND",
      date: "19/03/2024",
      buyer: "Lê Văn C",
    },
    {
      id: 4,
      productId: "SP004",
      name: "Thuốc trừ bệnh",
      status: "đã hủy",
      img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
      price: "300,000 VND",
      date: "18/03/2024",
      buyer: "Phạm Văn D",
    },
    {
      id: 5,
      productId: "SP005",
      name: "Thuốc trừ bệnh AA",
      status: "đang giao hàng",
      img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
      price: "300,000 VND",
      date: "18/03/2024",
      buyer: "Ngô Bá D",
    },
    {
      id: 6,
      productId: "SP006",
      name: "Thuốc trừ sâu BB",
      status: "đã giao",
      img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
      price: "300,000 VND",
      date: "18/03/2024",
      buyer: "Dương Thị F",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredItems = cartItems.filter(
    (item) =>
      (filter === "all" || item.status === filter) &&
      (searchId === "" || item.productId.includes(searchId)) &&
      (searchDate === "" || item.date.includes(searchDate))
  );

  const handleCancelClick = (order) => {
    if (order.paymentMethod === "PayOs") {
      alert("Không thể hủy đơn hàng thanh toán qua PayOs");
      return;
    }
    setSelectedOrder(order);
    setCancelModal(true);
  };

  const confirmCancel = () => {
    if (!cancelReason.trim()) {
      alert("Vui lòng nhập lý do hủy đơn hàng");
      return;
    }
    alert(
      `Đơn hàng ${selectedOrder.productId} đã bị hủy với lý do: ${cancelReason}`
    );
    setCancelModal(false);
    setCancelReason("");
  };

  return (
    <div className="container py-10 w-full bg-[#F2F8FC] max-w-none pt-32">
      <h1 className="mb-6 text-2xl font-bold">Lịch sử mua hàng</h1>

      <div className="flex gap-4 mb-6">
        {["all", "chờ xác nhận", "đang giao hàng", "đã giao", "đã hủy"].map(
          (status) => {
            let bgColor = "bg-[#000000]";

            if (status === "chờ xác nhận") bgColor = "bg-yellow-500";
            if (status === "đang giao hàng") bgColor = "bg-blue-500";
            if (status === "đã giao") bgColor = "bg-[#75ba75]";
            if (status === "đã hủy") bgColor = "bg-red-500";

            return (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded text-white transition-all duration-300 
          ${filter === status ? bgColor : "bg-gray-300"}`}
              >
                {status === "all"
                  ? "Tất cả"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            );
          }
        )}
      </div>

      <div className="flex flex-col space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start p-4 bg-white border rounded shadow-sm"
            data-aos="fade-up"
          >
            <img src={item.img} alt={item.name} className="w-20 h-20 rounded" />
            <div className="ml-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-600">
                Mã sản phẩm: {item.productId}
              </p>
              <p className="text-sm text-gray-600">Người mua: {item.buyer}</p>
              <p className="text-sm text-gray-600">
                Ngày thanh toán: {item.date}
              </p>
              <p className="text-lg font-semibold text-[#31473A]">
                {item.price}
              </p>
              <p className="text-sm text-gray-600 capitalize">
                Trạng thái: {item.status}
              </p>
              {item.status === "chờ xác nhận" &&
                item.paymentMethod !== "PayOs" && (
                  <button
                    onClick={() => handleCancelClick(item)}
                    className="p-2 mt-2 text-white bg-red-500 rounded"
                  >
                    Hủy đơn hàng
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>

      {cancelModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded shadow-lg w-96">
            <h2 className="mb-4 text-lg font-bold">Lý do hủy đơn hàng</h2>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Nhập lý do hủy..."
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setCancelModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Đóng
              </button>
              <button
                onClick={confirmCancel}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Xác nhận hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
