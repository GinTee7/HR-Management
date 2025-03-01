import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button, Table, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const API_URL = "https://adc0-2405-4802-9034-2ac0-84e3-c710-eaea-c03d.ngrok-free.app/api/warehouses";

export default function WarehouseDashboard() {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingWarehouse, setEditingWarehouse] = useState(null);
  const [form] = Form.useForm();
  
  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = async () => {
    setLoading(true);
    try {
      const token = getToken();
      if (!token) {
        message.error("Bạn chưa đăng nhập! Vui lòng đăng nhập lại.");
        setLoading(false);
        return;
      }

      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API Response:", response.data);

      if (Array.isArray(response.data)) {
        setWarehouses(response.data);
      } else {
        setWarehouses([]);
        message.error("Dữ liệu không hợp lệ từ API!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      message.error("Lỗi khi tải danh sách kho hàng!");
      setWarehouses([]);
    }
    setLoading(false);
  };

  const handleAddOrUpdate = async (values) => {
    try {
      const token = getToken();
      if (!token) {
        message.error("Bạn chưa đăng nhập! Vui lòng đăng nhập lại.");
        return;
      }

      if (editingWarehouse) {
        await axios.put(`${API_URL}/${editingWarehouse.id}`, values, {
          headers: { Authorization: `Bearer ${token}` },
        });
        message.success("Cập nhật kho hàng thành công!");
      } else {
        await axios.post(API_URL, values, {
          headers: { Authorization: `Bearer ${token}` },
        });
        message.success("Thêm kho hàng thành công!");
      }
      fetchWarehouses();
      setModalVisible(false);
      form.resetFields();
      setEditingWarehouse(null);
    } catch (error) {
      console.error("Save Error:", error);
      message.error("Lỗi khi lưu dữ liệu!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = getToken();
      if (!token) {
        message.error("Bạn chưa đăng nhập! Vui lòng đăng nhập lại.");
        return;
      }

      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success("Xóa kho hàng thành công!");
      fetchWarehouses();
    } catch (error) {
      console.error("Delete Error:", error);
      message.error("Lỗi khi xóa kho hàng!");
    }
  };

  const showModal = (warehouse = null) => {
    setEditingWarehouse(warehouse);
    setModalVisible(true);
    if (warehouse) {
      form.setFieldsValue(warehouse);
    } else {
      form.resetFields();
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Kho",
      dataIndex: "warehouseName",
      key: "warehouseName",
    },
    {
      title: "Địa chỉ",
      key: "address",
      render: (record) =>
        `${record.street || "N/A"}, ${record.ward || "N/A"}, ${record.district || "N/A"}, ${record.province || "N/A"}`,
    },
    {
      title: "Hành động",
      key: "action",
      render: (record) => (
        <>
          <Button type="link" onClick={() => showModal(record)}>
            Sửa
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">Quản lý kho hàng</h1>
      <div className="flex justify-end mb-4">
        <Button
          icon={<PlusOutlined />}
          onClick={() => showModal()}
          style={{ backgroundColor: "#D3D4D8", color: "#31473A" }}
        >
          Thêm Kho Hàng
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={warehouses || []}
        rowKey="id"
        loading={loading}
      />
      <Modal
        title={editingWarehouse ? "Cập nhật kho hàng" : "Thêm kho hàng"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddOrUpdate}>
          <Form.Item name="warehouseName" label="Tên kho hàng" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="street" label="Đường" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="province" label="Tỉnh/Thành phố" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="district" label="Quận/Huyện" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="ward" label="Phường/Xã" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            {editingWarehouse ? "Cập nhật" : "Thêm mới"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
