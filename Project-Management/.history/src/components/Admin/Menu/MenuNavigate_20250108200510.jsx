import React, { useState, useEffect, memo } from "react";
import "./MenuNavigate.css";
import Icon, {
  AppstoreOutlined,
  AuditOutlined,
  TeamOutlined,
  ProjectOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "../../../assets/Avatar.jpg";
import { useNavigate } from "react-router-dom";
import useViewport from "../hooks/useViewport";
import { useTranslation } from "react-i18next";

// SVG Components
const ZaloSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 26 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG Content */}
  </svg>
);

const PositionSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 23 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG Content */}
  </svg>
);

const TechnologySvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG Content */}
  </svg>
);

const ZaloIcon = (props) => <Icon component={ZaloSvg} {...props} />;
const PositionIcon = (props) => <Icon component={PositionSvg} {...props} />;
const TechnologyIcon = (props) => <Icon component={TechnologySvg} {...props} />;

const MenuNavigate = ({ buttonClick }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;

  const [collapsed, setCollapsed] = useState(false);

  // Handle menu click
  const onClick = (value) => {
    if (value.key === "vi" || value.key === "en") {
      i18n.changeLanguage(value.key);
    } else {
      navigate("/admin/" + value.key);
    }
  };

  // Toggle collapsed state
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
      key: "cvManagement",
      label: t("CV Management"),
      icon: <AuditOutlined />,
      children: [
        { key: "approveCV", label: t("Approve CV") },
        { key: "confirmCV", label: t("Confirm CV") },
      ],
    },
    {
      key: "listManagement",
      label: t("List Management"),
      icon: <TeamOutlined />,
      children: [
        { key: "internList", label: t("Intern list") },
        { key: "groupList", label: t("Group list") },
      ],
    },
    {
      key: "projectManagement",
      label: t("Project Management"),
      icon: <ProjectOutlined />,
    },
    {
      key: "positionManagement",
      label: t("Position Management"),
      icon: <PositionIcon />,
    },
    {
      key: "technologyManagement",
      label: t("Technology Management"),
      icon: <TechnologyIcon />,
    },
    {
      key: "groupZaloManagement",
      label: t("Group Zalo Management"),
      icon: <ZaloIcon />,
    },
  ];

  return (
    <div className="menu">
      {!isMobile ? (
        <div>
          <img
            src={logo}
            alt="Logo"
            className="logo-amazing"
            hidden={collapsed}
          />
          <Menu
            onClick={onClick}
            style={{ width: "100%" }}
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
          style={{ width: "100%" }}
          mode="inline"
          items={items}
          inlineCollapsed
        />
      )}
    </div>
  );
};

export default memo(MenuNavigate);
