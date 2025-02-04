import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const fetchProducts = () => {
    axios
      .get("https://67890c382c874e66b7d76465.mockapi.io/products")
      .then((response) => {
        const fetchedProducts = response.data.map((product) => ({
          ...product,
          key: product.id,
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

  const handleAddProduct = (values) => {
    if (editingProduct) {
      const updatedValues = {
        ...values,
        image: values.image ? values.image : editingProduct.image,
      };

      axios
        .put(
          `https://67890c382c874e66b7d76465.mockapi.io/products/${editingProduct.id}`,
          updatedValues
        )
        .then(() => {
          toast.success("Sản phẩm đã được cập nhật!");
          fetchProducts();
          setShowList(true);
          setShowForm(false);
          form.resetFields();
          setEditingProduct(null);
        })
        .catch((error) => {
          console.error("Error updating product:", error);
          toast.error("Lỗi cập nhật sản phẩm!");
        });
    } else {
      axios
        .post("https://67890c382c874e66b7d76465.mockapi.io/products", values)
        .then(() => {
          toast.success("Sản phẩm đã được thêm!");
          fetchProducts();
          setShowList(true);
          setShowForm(false);
          form.resetFields();
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          toast.error("Lỗi thêm sản phẩm!");
        });
    }
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Xác nhận xóa",
      content: "Bạn có chắc muốn xóa sản phẩm này không?",
      okText: "Xóa",
      cancelText: "Hủy",
      okType: "danger",
      onOk: () => {
        axios
          .delete(`https://67890c382c874e66b7d76465.mockapi.io/products/${key}`)
          .then(() => {
            toast.error("Sản phẩm đã bị xóa!");
            fetchProducts();
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            toast.error("Lỗi xóa sản phẩm!");
          });
      },
    });
  };

  const handleEdit = (record) => {
    setEditingProduct(record);
    form.setFieldsValue({
      ...record,
      image: record.image,
    });
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
      setSearchOptions(
        filtered.length > 0
          ? filtered.map((product) => ({ value: product.name }))
          : []
      );
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
      dataIndex: "img",
      key: "img",
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
      render: (price) => `${Number(price).toLocaleString()} đ`,
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

      {showForm && (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddProduct}
          className="mt-5"
        >
          <Form.Item
            name="image"
            label="Hình Ảnh"
            rules={[
              { required: true, message: "Vui lòng nhập URL hình ảnh!" },
            ]}
          >
            <Input placeholder="URL hình ảnh" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên Sản Phẩm"
            rules={[
              { required: true, message: "Vui lòng nhập tên sản phẩm!" },
            ]}
          >
            <Input placeholder="Tên sản phẩm" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá (VNĐ)"
            rules={[
              { required: true, message: "Vui lòng nhập giá sản phẩm!" },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Giá sản phẩm"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô Tả"
            rules={[
              { required: true, message: "Vui lòng nhập mô tả sản phẩm!" },
            ]}
          >
            <Input.TextArea placeholder="Mô tả sản phẩm" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingProduct ? "Cập Nhật" : "Thêm Sản Phẩm"}
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ProductManager;
