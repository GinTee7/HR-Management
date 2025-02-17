import React, { useState, useEffect, memo } from "react";
import Icon, {
  AppstoreOutlined,
  AuditOutlined,
  TeamOutlined,
  ProjectOutlined,
  LeftOutlined,
  RightOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "@assets/Avatar.jpg";
import { useNavigate } from "react-router-dom";
import useViewport from "@hooks/useViewport";
import { useTranslation } from "react-i18next";

const MenuNavigate_Mana = ({ buttonClick }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;

  const [collapsed, setCollapsed] = useState(false);

  const onClick = (value) => {
    if (value.key === "vi" || value.key === "en") {
      i18n.changeLanguage(value.key);
    } else {
      navigate("/manager/" + value.key);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (buttonClick) buttonClick();
  };

  const items = [
    {
      key: "dashboard",
      label: t("Dashboard"),
      icon: <AppstoreOutlined />,
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
      key: "warehouse-manager",
      label: t("Quản lý kho hàng"),
      icon: <ShopOutlined />,
    },
    {
      key: "product-manager",
      label: t("Quản lý sản phẩm"),
      icon: <ShoppingCartOutlined />,
    },
    {
      key: "material-request",
      label: t("Yêu cầu vật tư"),
      icon: <FileDoneOutlined />,
    },
    {
      key: "order-approval",
      label: t("Xét duyệt đơn hàng"),
      icon: <AuditOutlined />,
    },
  ];

  return (
    <div className="h-screen p-4 bg-gray-100 shadow-lg menu">
      {!isMobile ? (
        <div>
          <div className="flex flex-col items-center mb-4" hidden={collapsed}>
            <p className="text-lg font-semibold text-gray-800">
              Minh Long Manager
            </p>
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
    </div>
  );
};

export default memo(MenuNavigate_Mana);
