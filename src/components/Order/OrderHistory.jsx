import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const OrderHistory = () => {
  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelReason, setCancelReason] = useState("");
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const orders = [
    {
      id: "HD001",
      date: "21/03/2024",
      buyer: "Nguyễn Văn A",
      status: "chờ xác nhận",
      products: [
        {
          id: "SP001",
          name: "Thuốc trừ sâu",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 2,
          price: 200000,
        },
        {
          id: "SP002",
          name: "Phân bón",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 1,
          price: 150000,
        },
        {
          id: "SP003",
          name: "Giống cây trồng",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 3,
          price: 50000,
        },
      ],
      paymentMethod: "COD",
    },
    {
      id: "HD002",
      date: "20/03/2024",
      buyer: "Trần Thị B",
      status: "đang giao hàng",
      products: [
        {
          id: "SP004",
          name: "Thuốc trừ sâu 2",
          img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
          quantity: 1,
          price: 150000,
        },
        {
          id: "SP005",
          name: "Phân bón",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 3,
          price: 250000,
        },
        {
          id: "SP006",
          name: "Hạt giống hoa",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 5,
          price: 120000,
        },
      ],
      paymentMethod: "PayOS",
    },
    {
      id: "HD003",
      date: "19/03/2024",
      buyer: "Nguyễn Thị C",
      status: "đã giao",
      products: [
        {
          id: "SP007",
          name: "Thuốc trừ sâu 3",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 1,
          price: 180000,
        },
        {
          id: "SP008",
          name: "Phân bón 2",
          img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
          quantity: 2,
          price: 200000,
        },
        {
          id: "SP009",
          name: "Giống cây trồng 2",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 4,
          price: 70000,
        },
      ],
      paymentMethod: "COD",
    },
    {
      id: "HD004",
      date: "18/03/2024",
      buyer: "Lê Văn D",
      status: "đã hủy",
      products: [
        {
          id: "SP010",
          name: "Giống cây trồng",
          img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
          quantity: 5,
          price: 500000,
        },
        {
          id: "SP011",
          name: "Thuốc trừ sâu 2",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 3,
          price: 100000,
        },
      ],
      paymentMethod: "PayOS",
    },
    {
      id: "HD005",
      date: "17/03/2024",
      buyer: "Phạm Thị E",
      status: "chờ xác nhận",
      products: [
        {
          id: "SP012",
          name: "Thuốc trừ sâu 4",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 3,
          price: 300000,
        },
        {
          id: "SP013",
          name: "Phân bón 3",
          img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
          quantity: 1,
          price: 200000,
        },
      ],
      paymentMethod: "COD",
    },
    {
      id: "HD006",
      date: "16/03/2024",
      buyer: "Trần Văn F",
      status: "đang giao hàng",
      products: [
        {
          id: "SP014",
          name: "Phân bón 4",
          img: "https://nongnghiepdep.com/wp-content/uploads/2023/12/thuoc-tru-sau-bestkill.jpg",
          quantity: 2,
          price: 220000,
        },
        {
          id: "SP015",
          name: "Giống cây trồng 3",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 5,
          price: 120000,
        },
        {
          id: "SP016",
          name: "Thuốc trừ sâu 5",
          img: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
          quantity: 3,
          price: 300000,
        },
      ],
      paymentMethod: "PayOS",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredOrders = orders.filter((order) => filter === "all" || order.status === filter);

  const handleCancelOrder = () => {
    console.log("Đơn hàng bị hủy. Lý do:", cancelReason);
    setIsCancelModalOpen(false);
    setCancelReason("");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "chờ xác nhận":
        return "bg-yellow-500";
      case "đang giao hàng":
        return "bg-blue-500";
      case "đã giao":
        return "bg-green";
      case "đã hủy":
        return "bg-red-500";
      default:
        return "bg-primeColor";
    }
  };

  return (
    <div className="container py-10 w-full bg-[#F2F8FC] max-w-none pt-32">
      <h1 className="mb-6 text-2xl font-bold">Lịch sử đơn hàng</h1>

      <div className="flex gap-4 mb-6">
        {["all", "chờ xác nhận", "đang giao hàng", "đã giao", "đã hủy"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded text-white transition-all duration-300 ${filter === status ? getStatusColor(status) : "bg-gray-300"}`}
          >
            {status === "all" ? "Tất cả" : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 transition-all bg-white border rounded shadow-sm cursor-pointer hover:shadow-md"
            data-aos="fade-up"
            onClick={() => setSelectedOrder(order)}
          >
            <h2 className="text-lg font-bold">Hóa đơn: {order.id}</h2>
            <p className="text-sm text-gray-600">Người mua: {order.buyer}</p>
            <p className="text-sm text-gray-600">Ngày đặt hàng: {order.date}</p>
            <p className="text-sm text-gray-600 capitalize">Trạng thái: {order.status}</p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-6 bg-white rounded shadow-lg w-[450px] relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <IoClose
                className="absolute text-2xl cursor-pointer top-4 right-4"
                onClick={() => setSelectedOrder(null)}
              />
              <h2 className="mb-4 text-lg font-bold">Chi tiết hóa đơn {selectedOrder.id}</h2>
              <div className="space-y-4">
                {selectedOrder.products.map((product) => (
                  <div key={product.id} className="flex items-center pb-2 border-b">
                    <img src={product.img} alt={product.name} className="w-16 h-16 rounded" />
                    <div className="ml-4">
                      <p className="font-bold">{product.name}</p>
                      <p className="text-sm">Số lượng: {product.quantity}</p>
                      <p className="text-sm">Giá: {product.price.toLocaleString()} VND</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 font-bold text-right">
                Tổng tiền: {selectedOrder.products.reduce((sum, p) => sum + p.price * p.quantity, 0).toLocaleString()} VND
              </div>
              {selectedOrder.status === "chờ xác nhận" && selectedOrder.paymentMethod !== "PayOS" && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setIsCancelModalOpen(true)}
                    className="px-4 py-2 text-white bg-red-500 rounded"
                  >
                    Hủy đơn hàng
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal hủy đơn hàng */}
      {isCancelModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="p-6 bg-white rounded shadow-lg w-96"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <h2 className="mb-4 text-lg font-bold">Lý do hủy đơn hàng</h2>
            <textarea
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nhập lý do hủy đơn hàng"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleCancelOrder}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Hủy đơn hàng
              </button>
              <button
                onClick={() => setIsCancelModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default OrderHistory;
