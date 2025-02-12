import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, Select } from "antd";

const WarehouseManager = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState([
    {
      key: "1",
      productName: "Sản phẩm A",
      quantity: 100,
      purchasePrice: 50000,
      salePrice: 60000,
      lastUpdated: "2024-02-10",
    },
    {
      key: "2",
      productName: "Sản phẩm B",
      quantity: 50,
      purchasePrice: 70000,
      salePrice: 80000,
      lastUpdated: "2024-02-09",
    },
  ]);

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Số lượng tồn",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá nhập",
      dataIndex: "purchasePrice",
      key: "purchasePrice",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Giá bán",
      dataIndex: "salePrice",
      key: "salePrice",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <>
          <Button type="primary" onClick={() => setVisible(true)}>
            Nhập/Xuất Kho
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} style={{ marginTop: 20 }} />

      <Modal
        title="Nhập/Xuất Kho"
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="productName"
            label="Tên sản phẩm"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Số lượng"
            rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="purchasePrice"
            label="Giá nhập"
            rules={[{ required: true, message: "Vui lòng nhập giá nhập!" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="salePrice"
            label="Giá bán"
            rules={[{ required: true, message: "Vui lòng nhập giá bán!" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default WarehouseManager;
