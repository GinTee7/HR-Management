import React, { useState } from "react";
import {
  Button,
  Table,
  Form,
  Input,
  InputNumber,
  Space,
  Modal,
  AutoComplete,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  const handleAddProduct = (values) => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.key === editingProduct.key
            ? { ...values, key: editingProduct.key }
            : p
        )
      );
      toast.success("Sản phẩm đã được cập nhật!");
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...values, key: Date.now().toString() }]);
      toast.success("Sản phẩm đã được thêm!");
    }
    setFilteredProducts([
      ...products,
      { ...values, key: Date.now().toString() },
    ]);
    setShowList(true);
    setShowForm(false);
    form.resetFields();
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Xác nhận xóa",
      content: "Bạn có chắc muốn xóa sản phẩm này không?",
      okText: "Xóa",
      cancelText: "Hủy",
      okType: "danger",
      onOk: () => {
        const updatedProducts = products.filter((item) => item.key !== key);
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
        toast.error("Sản phẩm đã bị xóa!");
      },
    });
  };

  const handleEdit = (record) => {
    setEditingProduct(record);
    form.setFieldsValue(record);
    setShowForm(true);
    setShowList(false);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    if (value) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      if (filtered.length > 0) {
        setSearchOptions(filtered.map((product) => ({ value: product.name })));
      } else {
        setSearchOptions([]);
      }
    } else {
      setFilteredProducts(products);
      setSearchOptions([]);
    }
  };

  const handleSelectSearch = (value) => {
    setSearchText(value);
    const filtered = products.filter((product) => product.name === value);
    setFilteredProducts(filtered);
  };

  const columns = [
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (src) => (
        <img
          src={src}
          alt="Sản phẩm"
          className="object-cover w-16 h-16 border rounded"
        />
      ),
    },
    { title: "Tên Sản Phẩm", dataIndex: "name", key: "name" },
    {
      title: "Giá (VNĐ)",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} đ`,
    },
    {
      title: "Mô Tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Thao Tác",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            className="text-white bg-blue-500 hover:bg-blue-600"
          >
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            size="small"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
            className="text-white bg-red-500 hover:bg-red-600"
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex items-center justify-between mb-5">
        <AutoComplete
          style={{ width: "60%" }}
          options={searchOptions}
          onSearch={handleSearch}
          onSelect={handleSelectSearch}
          value={searchText}
        >
          <Input
            prefix={<SearchOutlined className="mr-2 text-gray-500" />} 
            allowClear
            placeholder="Tìm kiếm sản phẩm..."
            style={{ paddingLeft: "12px", textAlign: "left" }} 
            onChange={(e) => handleSearch(e.target.value)}
          />
        </AutoComplete>

        <div className="flex gap-3">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setShowForm(true);
              setShowList(false);
            }}
          >
            Thêm Sản Phẩm
          </Button>
          <Button
            onClick={() => {
              setShowList(true);
              setShowForm(false);
            }}
          >
            Danh Sách Sản Phẩm
          </Button>
          <Button
            type="primary"
            icon={<CalendarOutlined />}
            style={{
              backgroundColor: "#22c55e",
              borderColor: "#22c55e",
              color: "white",
            }}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#22c55e")}
          >
            Kế Hoạch Công Việc
          </Button>
        </div>
      </div>

      {showList && (
        <div className="p-3 border rounded-lg shadow-lg">
          <Table
            columns={columns}
            dataSource={
              filteredProducts.length > 0 ? filteredProducts : products
            }
            rowKey="key"
            bordered
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ProductManager;
