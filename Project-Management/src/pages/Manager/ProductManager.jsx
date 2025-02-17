import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Form, Input, Space, Modal, AutoComplete } from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  const fetchProducts = () => {
    axios.get("https://67890c382c874e66b7d76465.mockapi.io/products")
      .then((response) => {
        const fetchedProducts = response.data.map((product) => ({
          ...product,
          key: product.id,
          image: product.image,
        }));
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        toast.error("Không thể tải sản phẩm từ API!");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddOrEditProduct = (values) => {
    if (editingProduct) {
      axios.put(`https://67890c382c874e66b7d76465.mockapi.io/products/${editingProduct.id}`, values)
        .then(() => {
          toast.success("Sản phẩm đã được cập nhật!");
          fetchProducts();
          setIsModalVisible(false);
          form.resetFields();
          setEditingProduct(null);
        })
        .catch((error) => {
          console.error("Error updating product:", error);
          toast.error("Lỗi cập nhật sản phẩm!");
        });
    } else {
      axios.post("https://67890c382c874e66b7d76465.mockapi.io/products", values)
        .then(() => {
          toast.success("Sản phẩm đã được thêm!");
          fetchProducts();
          setIsModalVisible(false);
          form.resetFields();
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          toast.error("Lỗi thêm sản phẩm!");
        });
    }
  };

  const handleEdit = (record) => {
    setEditingProduct(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const columns = [
    { title: "Hình Ảnh", dataIndex: "image", key: "image", render: (_, record) => <img src={record.img} alt="Sản phẩm" className="object-cover w-16 h-16 border rounded" /> },
    { title: "Tên Sản Phẩm", dataIndex: "name", key: "name" },
    { title: "Giá (VNĐ)", dataIndex: "price", key: "price", render: (price) => `${Number(price).toLocaleString()} đ` },
    { title: "Mô Tả", dataIndex: "description", key: "description", ellipsis: true },
    { title: "Debt Time", dataIndex: "debtTime", key: "debtTime", render: (debtTime) => debtTime || "N/A" },
    {
      title: "Thao Tác",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} style={{ backgroundColor: "#D3D4D8", color: "#31473A" }}>Sửa</Button>
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)}>Xóa</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex justify-end mb-4">
        <Button icon={<PlusOutlined />} onClick={() => { setIsModalVisible(true); setEditingProduct(null); form.resetFields(); } } style={{ backgroundColor: "#D3D4D8", color: "#31473A" }}>Thêm Sản Phẩm</Button>
      </div>

      <Table columns={columns} dataSource={filteredProducts} rowKey="key" bordered />

      <Modal title={editingProduct ? "Cập Nhật Sản Phẩm" : "Thêm Sản Phẩm"} visible={isModalVisible} onCancel={() => setIsModalVisible(false)} onOk={() => form.submit()}>
        <Form form={form} layout="vertical" onFinish={handleAddOrEditProduct}>
          <Form.Item name="image" label="Hình Ảnh" rules={[{ required: true, message: "Vui lòng nhập URL hình ảnh!" }]}>            
            <Input placeholder="Nhập URL hình ảnh" />
          </Form.Item>
          <Form.Item name="name" label="Tên Sản Phẩm" rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}>            
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Giá" rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}>            
            <Input type="number" />
          </Form.Item>
          <Form.Item name="description" label="Mô Tả">            
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="debtTime" label="Debt Time">            
            <Input placeholder="Nhập Debt Time (nếu có)" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductManager;
