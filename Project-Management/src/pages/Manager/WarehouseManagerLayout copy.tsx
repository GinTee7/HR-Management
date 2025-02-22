import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
// import MenuNavigate from "../../components/Menu/MenuNavigate";
import MenuNavigate_WarehouseMa from "../../components/Menu/MenuNavigate_WarehouseMa";

const WarehouseManagerLayout = () => {
  const [spanLayout, setSpanLayout] = useState([3, 21]);

  const handleButtonChangeSpanLayout = () => {
    setSpanLayout(spanLayout[0] === 3 ? [1, 23] : [3, 21]);
  };

  return (
    <Row>
      {/* Sidebar */}
      <Col style={{ transition: "0.5s" }} span={spanLayout[0]}>
        <MenuNavigate_WarehouseMa buttonClick={handleButtonChangeSpanLayout} />
      </Col>

      {/* Main Content */}
      <Col style={{ transition: "0.5s" }} span={spanLayout[1]}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default WarehouseManagerLayout;
