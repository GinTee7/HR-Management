import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import MenuNavigate_BusinessMa from "@components/Menu/MenuNavigate_BusinessMa";

const BusinessManagerLayout = () => {
  const [spanLayout, setSpanLayout] = useState([3, 21]);

  const handleButtonChangeSpanLayout = () => {
    setSpanLayout(spanLayout[0] === 3 ? [1, 23] : [3, 21]);
  };

  return (
    <Row>
      {/* Sidebar */}
      <Col style={{ transition: "0.5s" }} span={spanLayout[0]}>
        <MenuNavigate_BusinessMa buttonClick={handleButtonChangeSpanLayout} />
      </Col>

      {/* Main Content */}
      <Col style={{ transition: "0.5s" }} span={spanLayout[1]}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default BusinessManagerLayout;
