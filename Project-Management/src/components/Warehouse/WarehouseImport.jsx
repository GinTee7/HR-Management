import { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const WarehouseImport = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState([
    {
      key: "1",
      productCode: "SP001",
      productName: "Sản phẩm A",
      quantity: 100,
      purchasePrice: 50000,
      importDate: "2024-02-10",
      expirationDate: "2025-06-10",
    },
    {
      key: "2",
      productCode: "SP002",
      productName: "Sản phẩm B",
      quantity: 50,
      purchasePrice: 70000,
      importDate: "2024-02-15",
      expirationDate: "2025-04-15",
    },
    {
      key: "3",
      productCode: "SP003",
      productName: "Sản phẩm C",
      quantity: 20,
      purchasePrice: 40000,
      importDate: "2024-01-10",
      expirationDate: "2023-12-10",
    },
    {
      key: "4",
      productCode: "SP004",
      productName: "Sản phẩm D",
      quantity: 75,
      purchasePrice: 65000,
      importDate: "2024-03-01",
      expirationDate: "2025-08-01",
    },
    {
      key: "5",
      productCode: "SP005",
      productName: "Sản phẩm E",
      quantity: 30,
      purchasePrice: 45000,
      importDate: "2024-04-05",
      expirationDate: "2023-11-05",
    },
  ]);

  const checkExpiration = (expirationDate) => {
    return dayjs(expirationDate).isBefore(dayjs());
  };

  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "productCode",
      key: "productCode",
      sorter: (a, b) => a.productCode.localeCompare(b.productCode),
    },
    { title: "Tên sản phẩm", dataIndex: "productName", key: "productName" },
    {
      title: "Số lượng tồn",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Giá nhập",
      dataIndex: "purchasePrice",
      key: "purchasePrice",
      sorter: (a, b) => a.purchasePrice - b.purchasePrice,
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Ngày nhập",
      dataIndex: "importDate",
      key: "importDate",
      sorter: (a, b) => dayjs(a.importDate).unix() - dayjs(b.importDate).unix(),
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "expirationDate",
      key: "expirationDate",
      sorter: (a, b) =>
        dayjs(a.expirationDate).unix() - dayjs(b.expirationDate).unix(),
      render: (date) => (
        <span style={{ color: checkExpiration(date) ? "red" : "black" }}>
          {date}
        </span>
      ),
    },
    {
      title: "Trạng thái",
      key: "status",
      filters: [
        { text: "Còn hạn", value: "valid" },
        { text: "Hết hạn", value: "expired" },
      ],
      onFilter: (value, record) =>
        value === "valid"
          ? !checkExpiration(record.expirationDate)
          : checkExpiration(record.expirationDate),
      render: (_, record) =>
        checkExpiration(record.expirationDate) ? (
          <span style={{ color: "gray", opacity: 0.6 }}>Hết hạn</span>
        ) : (
          <span style={{ color: "green" }}>Còn hạn</span>
        ),
    },
  ];
  const handleAddProduct = () => {
    form
      .validateFields()
      .then((values) => {
        const newProduct = {
          key: (data.length + 1).toString(),
          productCode: values.productCode,
          productName: values.productName,
          quantity: values.quantity,
          purchasePrice: values.purchasePrice,
          importDate: values.importDate.format("YYYY-MM-DD"),
          expirationDate: values.expirationDate.format("YYYY-MM-DD"),
        };

        setData([...data, newProduct]);

        // Expiration check message
        if (checkExpiration(newProduct.expirationDate)) {
          message.error(`Sản phẩm ${newProduct.productName} đã hết hạn!`);
        } else {
          message.success("Sản phẩm đã được nhập kho thành công!");
        }
        

        setVisible(false);
        form.resetFields();
      })
      .catch((error) => {
        console.error("Validation Failed:", error);
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 20,
          marginTop: 15,
          marginRight: 25,
        }}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}
          style={{
            backgroundColor: "#D3D4D8",
            color: "#31473A",
            borderColor: "#D3D4D8",
            padding: "8px 16px",
          }}
        >
          Nhập Kho
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        style={{ marginTop: 20 }}
        rowClassName={(record) =>
          checkExpiration(record.expirationDate) ? "expired-row" : ""
        }
      />
      {/* Modal for Adding New Products */}
      <Modal
        title="Nhập Kho"
        open={visible}
        onOk={handleAddProduct}
        onCancel={() => setVisible(false)}
        okButtonProps={{ style: { backgroundColor: "#D3D4D8", color: "#31473A" } }}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="productCode" label="Mã sản phẩm" rules={[{ required: true, message: "Vui lòng nhập mã sản phẩm!" }]}>
            <Input placeholder="Nhập mã sản phẩm" />
          </Form.Item>
          <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}>
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
          <Form.Item name="quantity" label="Số lượng nhập" rules={[{ required: true, message: "Vui lòng nhập số lượng nhập!" }]}>
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="purchasePrice" label="Giá nhập" rules={[{ required: true, message: "Vui lòng nhập giá nhập!" }]}>
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="importDate" label="Ngày nhập" rules={[{ required: true, message: "Vui lòng chọn ngày nhập!" }]}>
            <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="expirationDate" label="Hạn sử dụng" rules={[{ required: true, message: "Vui lòng chọn hạn sử dụng!" }]}>
            <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>

      <style>{`
        .expired-row td {
          color: gray !important;
          opacity: 0.6;
        }
        .expired-row td:nth-child(6) {
          color: red !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default WarehouseImport;
