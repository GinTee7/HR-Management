import { useState } from "react";
import { Table } from "antd";
import dayjs from "dayjs";

const WarehouseExport = () => {
  const [data, setData] = useState([
    { key: "1", productCode: "SP001", productName: "Sản phẩm A", quantity: 100, purchasePrice: 50000, salePrice: 60000, exportDate: "2024-02-10", expirationDate: "2025-06-10" },
    { key: "2", productCode: "SP002", productName: "Sản phẩm B", quantity: 50, purchasePrice: 70000, salePrice: 80000, exportDate: "2024-02-09", expirationDate: "2025-04-15" },
    { key: "3", productCode: "SP003", productName: "Sản phẩm C", quantity: 20, purchasePrice: 40000, salePrice: 50000, exportDate: "2024-01-10", expirationDate: "2023-12-01" },
    { key: "4", productCode: "SP004", productName: "Sản phẩm D", quantity: 75, purchasePrice: 65000, salePrice: 75000, exportDate: "2024-03-01", expirationDate: "2025-08-01" },
    { key: "5", productCode: "SP005", productName: "Sản phẩm E", quantity: 30, purchasePrice: 45000, salePrice: 55000, exportDate: "2024-04-05", expirationDate: "2025-10-05" },
    { key: "6", productCode: "SP006", productName: "Sản phẩm F", quantity: 15, purchasePrice: 55000, salePrice: 65000, exportDate: "2024-04-10", expirationDate: "2024-02-01" },
  ]);

  const checkExpiration = (expirationDate) => dayjs(expirationDate).isBefore(dayjs());

  const columns = [
    { title: "Mã sản phẩm", dataIndex: "productCode", key: "productCode", sorter: (a, b) => a.productCode.localeCompare(b.productCode) },
    { title: "Tên sản phẩm", dataIndex: "productName", key: "productName" },
    { title: "Số lượng tồn", dataIndex: "quantity", key: "quantity", sorter: (a, b) => a.quantity - b.quantity },
    { title: "Giá nhập", dataIndex: "purchasePrice", key: "purchasePrice", sorter: (a, b) => a.purchasePrice - b.purchasePrice, render: (price) => `${price.toLocaleString()} VND` },
    { title: "Giá bán", dataIndex: "salePrice", key: "salePrice", sorter: (a, b) => a.salePrice - b.salePrice, render: (price) => `${price.toLocaleString()} VND` },
    { title: "Ngày xuất", dataIndex: "exportDate", key: "exportDate", sorter: (a, b) => dayjs(a.exportDate).unix() - dayjs(b.exportDate).unix() },
    { 
      title: "Hạn sử dụng", dataIndex: "expirationDate", key: "expirationDate", 
      sorter: (a, b) => dayjs(a.expirationDate).unix() - dayjs(b.expirationDate).unix(),
      render: (date) => (
        <span style={{ color: checkExpiration(date) ? "red" : "black" }}>{date}</span>
      ),
    },
    {
      title: "Trạng thái", key: "status",
      filters: [
        { text: "Còn hạn", value: "valid" },
        { text: "Hết hạn", value: "expired" },
      ],
      onFilter: (value, record) => (value === "valid" ? !checkExpiration(record.expirationDate) : checkExpiration(record.expirationDate)),
      render: (_, record) => (
        checkExpiration(record.expirationDate) ? <span style={{ color: "gray", opacity: 0.6 }}>Hết hạn</span> : <span style={{ color: "green" }}>Còn hạn</span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} style={{ marginTop: 20 }} rowClassName={(record) => (checkExpiration(record.expirationDate) ? "expired-row" : "")} />
      <style>{`
        .expired-row td {
          color: gray !important;
          opacity: 0.6;
        }
        .expired-row td:nth-child(7) {
          color: red !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default WarehouseExport;
