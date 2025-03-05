import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Table, Input, InputNumber } from "antd";
import Breadcrumbs from "@components/pageProps/Breadcrumbs";
import { motion } from "framer-motion";

const Cart = () => {
  const sampleProducts = [
    {
      _id: "1",
      name: "Thuốc trừ sâu",
      code: "P001",
      image: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: 50,
      stock: 10,
    },
    {
      _id: "2",
      name: "Phân bón hữu cơ",
      code: "P002",
      image: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: 120,
      stock: 5,
    },
    {
      _id: "3",
      name: "Thuốc diệt cỏ",
      code: "P003",
      image: "https://karimonvn.com/wp-content/uploads/2024/01/Carbo-max-1-1.png",
      price: 75,
      stock: 8,
    },
  ];

  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenProductModal = () => setIsProductModalOpen(true);
  const handleCloseProductModal = () => setIsProductModalOpen(false);

  const handleQuantityChange = (id, value) => {
    setProducts(
      products.map((product) =>
        product._id === id ? { ...product, quantity: value } : product
      )
    );
  };
  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  const handleAddProduct = (product) => {
    if (!products.find((item) => item._id === product._id)) {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
    handleCloseProductModal();
  };

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

  const filteredProducts = sampleProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const productColumns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="Sản phẩm" className="w-12 h-12" />
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
      title: "Tổng tiền",
      key: "totalPrice",
      render: (_, record) => `$${record.price * record.quantity}`,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => handleRemoveProduct(record._id)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F2F8FC] min-h-screen py-10">
      <Breadcrumbs title="Giỏ hàng" />
      <div className="px-4 mx-auto mt-6 max-w-container">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Danh sách sản phẩm</h2>
          <Button type="primary" onClick={handleOpenModal} style={{ backgroundColor: "#D3D4D8", color: "#31473A" }}>
            Tạo đơn hàng
          </Button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={1000}
        footer={null}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Thông tin đại lý</h3>
            <p><strong>Tên:</strong> Đại lý nông nghiệp</p>
            <p><strong>SĐT:</strong> 0123-456-789</p>
            <p><strong>Địa chỉ:</strong> 123 Đường Nguyễn Xiển, Thành phố Thủ Đức</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold">Chi tiết sản phẩm</h3>
        <Button type="primary" onClick={handleOpenProductModal} style={{ backgroundColor: "#D3D4D8", color: "#31473A" }}>
          Chọn sản phẩm
        </Button>
        {products.length > 0 && (
          <Table
            columns={productColumns}
            dataSource={products}
            rowKey="_id"
            pagination={false}
          />
        )}
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
      </Modal>
      <Modal
        open={isProductModalOpen}
        onCancel={handleCloseProductModal}
        footer={null}
      >
        <Input.Search
          placeholder="Tìm sản phẩm..."
          allowClear
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2"
        />
        <Table
          columns={[
            {
              title: "Hình ảnh",
              dataIndex: "image",
              key: "image",
              render: (image) => (
                <img src={image} alt="Sản phẩm" className="w-12 h-12" />
              ),
            },
            { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
            { title: "Mã sản phẩm", dataIndex: "code", key: "code" },
            {
              title: "Hành động",
              key: "action",
              render: (_, record) => (
                <Button onClick={() => handleAddProduct(record)}>Thêm</Button>
              ),
            },
          ]}
          dataSource={filteredProducts}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      </Modal>
    </div>
  );
};

export default Cart;
