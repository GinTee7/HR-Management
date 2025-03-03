import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Table, Checkbox, InputNumber } from "antd";
import Breadcrumbs from "@components/pageProps/Breadcrumbs";
import ItemCard from "./ItemCard";
import { motion } from "framer-motion";

const Cart = () => {
  const sampleProducts = [
    {
      _id: "1",
      name: "Thuốc trừ sâu",
      code: "P001",
      image:
        "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: 50,
      quantity: 2,
      stock: 10,
    },
    {
      _id: "2",
      name: "Phân bón hữu cơ",
      code: "P002",
      image:
        "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: 120,
      quantity: 1,
      stock: 5,
    },
    {
      _id: "3",
      name: "Thuốc diệt cỏ",
      code: "P003",
      image:
        "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: 75,
      quantity: 3,
      stock: 8,
    },
  ];

  const [products] = useState(sampleProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleQuantityChange = (id, value) => {
    setProducts(
      products.map((product) =>
        product._id === id ? { ...product, quantity: value } : product
      )
    );
  };

  const toggleProductSelection = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const columns = [
    {
      title: "Chọn",
      dataIndex: "select",
      key: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedProducts.includes(record._id)}
          onChange={() => toggleProductSelection(record._id)}
        />
      ),
    },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    { title: "Mã sản phẩm", dataIndex: "code", key: "code" },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, record) => (
        <InputNumber
          min={1}
          max={record.stock}
          value={record.quantity}
          onChange={(value) => handleQuantityChange(record._id, value)}
        />
      ),
    },
    { title: "Kho có sẵn", dataIndex: "stock", key: "stock" },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="Sản phẩm" className="w-12 h-12" />
      ),
    },
  ];

  useEffect(() => {
    const price = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    setShippingCharge(totalAmt <= 200 ? 30 : totalAmt <= 400 ? 25 : 20);
  }, [totalAmt]);

  return (
    <div className="w-full bg-[#F2F8FC] min-h-screen py-10">
      <Breadcrumbs title="Giỏ hàng" />
      {products.length > 0 ? (
        <div className="px-4 mx-auto mt-6 max-w-container">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Danh sách sản phẩm</h2>
            <Button
              type="primary"
              onClick={handleOpenModal}
              style={{
                backgroundColor: "#D3D4D8",
                color: "#31473A",
                borderColor: "#D3D4D8",
              }}
            >
              Tạo đơn hàng
            </Button>
          </div>

          <div className="w-full overflow-hidden bg-white rounded-md shadow-md">
            <div className="grid items-center w-full h-20 grid-cols-5 px-4 text-lg font-semibold bg-gray-200 border-b border-gray-300 text-primeColor">
              <h2 className="col-span-2 text-center">Sản phẩm</h2>
              <h2 className="text-left">Giá</h2>
              <h2 className="text-left">Số lượng</h2>
              <h2 className="text-left">Tổng</h2>
            </div>
            <div className="p-4 mt-5 space-y-4">
              {products.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6 max-w-7xl">
            <div className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-md shadow-lg w-96">
              <h1 className="text-2xl font-semibold text-right text-gray-700">
                Tổng giỏ hàng
              </h1>
              <div className="border-t border-gray-300">
                <p className="flex justify-between py-2 text-lg font-medium text-gray-600">
                  Tạm tính{" "}
                  <span className="font-semibold text-gray-800">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex justify-between py-2 text-lg font-medium text-gray-600">
                  Phí vận chuyển{" "}
                  <span className="font-semibold text-gray-800">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex justify-between py-2 pt-3 text-xl font-bold text-gray-800 border-t border-gray-300">
                  Tổng cộng{" "}
                  <span className="text-green-600">
                    ${totalAmt + shippingCharge}
                  </span>
                </p>
              </div>
              <Link to="/order">
                <button className="w-full py-3 text-lg font-semibold text-white transition rounded-md bg-primeColor hover:bg-black">
                  Thanh toán ngay
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 py-10"
        >
          <div className="max-w-md p-6 text-center bg-white border border-gray-200 rounded-md shadow-lg">
            <h1 className="text-xl font-bold text-gray-700 uppercase">
              Giỏ hàng trống
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Giỏ hàng của bạn đang chờ được lấp đầy. Hãy bắt đầu mua sắm ngay!
            </p>
            <Link to="/shop">
              <button className="px-6 py-2 mt-4 text-lg font-semibold text-white rounded-md bg-primeColor hover:bg-black">
                Tiếp tục mua sắm
              </button>
            </Link>
          </div>
        </motion.div>
      )}

      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={1000}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            style={{
              backgroundColor: "#D3D4D8",
              color: "#31473A",
              borderColor: "#D3D4D8",
            }}
          >
            Xác nhận đơn hàng
          </Button>,
        ]}
      >
        <div>
          <h3 className="text-lg font-semibold">Thông tin đại lý</h3>
          <p>
            <strong>Tên:</strong> Đại lý nông nghiệp 
          </p>
          <p>
            <strong>SĐT:</strong> 0123-456-789
          </p>
          <p>
            <strong>Địa chỉ:</strong> 123 Đường Nguyễn Xiển, Thành phố Thủ Đức
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Chi tiết sản phẩm</h3>
          <Table
            columns={columns}
            dataSource={products}
            rowKey="_id"
            pagination={false}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
