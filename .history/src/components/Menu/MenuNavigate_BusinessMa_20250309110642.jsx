import React, { useState, memo } from "react";
import Icon, {
  AppstoreOutlined,
  AuditOutlined,
  TeamOutlined,
  ProjectOutlined,
  LeftOutlined,
  RightOutlined,
  EditOutlined,
  LogoutOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { Menu, Modal, Input, Button } from "antd";
import logo from "@assets/Avatar.jpg";
import { useNavigate } from "react-router-dom";
import useViewport from "@hooks/useViewport";
import { useTranslation } from "react-i18next";

const MenuNavigate_BusinessMana = ({ buttonClick }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;

  const [collapsed, setCollapsed] = useState(false);
  const [managerName, setManagerName] = useState("Minh Long Manager");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClick = (value) => {
    if (value.key === "vi" || value.key === "en") {
      i18n.changeLanguage(value.key);
    } else if (value.key === "logout") {
      navigate("/");
    } else {
      navigate("/business-manager/" + value.key);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (buttonClick) buttonClick();
  };

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const items = [
    {
      key: "dashboard",
      label: t("Dashboard"),
      icon: <AppstoreOutlined />,
    },
    {
      key: "product-manager",
      label: t("Quản lý sản phẩm"),
      icon: <ShoppingCartOutlined />,
    },
    {
      key: "debt-history",
      label: t("Lịch sử công nợ"),
      icon: <TeamOutlined />,
    },
    {
      key: "debt-report",
      label: t("Báo cáo công nợ"),
      icon: <ProjectOutlined />,
    },
    {
      key: "order-approval",
      label: t("Xét duyệt đơn hàng"),
      icon: <AuditOutlined />,
    },
    {
      key: "logout",
      label: (
        <div
          style={{
            color: "#D9534F",
            borderRadius: "4px",
            textAlign: "center",
            width: "100%",
            paddingRight: "16px",
            fontWeight: "bold",
          }}
        >
          <LogoutOutlined style={{ marginRight: "8px" }} /> {t("Logout")}
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen p-4 bg-gray-100 shadow-lg menu">
      {!isMobile ? (
        <div>
          <div className="flex flex-col items-center mb-4" hidden={collapsed}>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-gray-800">
                {managerName}
              </p>
              <EditOutlined
                className="text-[#31473A] cursor-pointer"
                onClick={handleEditClick}
              />
            </div>
            <p className="text-sm text-[#31473A]">Manager</p>
            <img
              src={logo}
              alt="Logo"
              className="logo-amazing"
              hidden={collapsed}
            />
          </div>
          <Menu
            onClick={onClick}
            className="w-full"
            mode="inline"
            items={items}
            inlineCollapsed={collapsed}
          />
          <div onClick={toggleCollapsed} className="button-collapsed">
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </div>
        </div>
      ) : (
        <Menu
          onClick={onClick}
          className="w-full"
          mode="inline"
          items={items}
          inlineCollapsed
        />
      )}

      <Modal
        title={t("Chỉnh sửa tên")}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            {t("Hủy")}
          </Button>,
          <Button
            key="ok"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: "#D3D4D8", color: "#31473A" }}
          >
            {t("Lưu")}
          </Button>,
        ]}
      >
        <Input
          value={managerName}
          onChange={(e) => setManagerName(e.target.value)}
          placeholder={t("Nhập tên mới")}
        />
      </Modal>
    </div>
  );
};

export default memo(MenuNavigate_BusinessMana);
