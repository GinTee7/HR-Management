import React, { useState, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Table, Select, Button, Checkbox, Row, Col } from "antd";
import { MailOutlined, ExportOutlined } from "@ant-design/icons";
import Navigation from "../../Navigation/Navigation.jsx";
import SendMailButton from "../../components/SendMailButton/SendMailButton";
import DataMembersList from "../../data/MembersList.json";
import "./MembersList.css";
import useViewport from "../../hooks/useViewport.jsx";
import { useTranslation } from "react-i18next";

const generateOptions = (key, data) => {
  return useMemo(() => {
    return data.reduce((options, item) => {
      if (!options.find((option) => option.value === item[key])) {
        options.push({ value: item[key], label: item[key] });
      }
      return options;
    }, []);
  }, [key, data]);
};

const MembersList = () => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [isEmailPopupVisible, setEmailPopupVisible] = useState(false);
  const [filter, setFilter] = useState({});
  const [dataTable, setDataTable] = useState(DataMembersList);
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  const { t } = useTranslation();

  const optionsRole = generateOptions("role", DataMembersList);
  const optionsFullName = generateOptions("fullName", DataMembersList);

  const handleSearch = () => {
    const filteredData = DataMembersList.filter((item) => {
      return Object.keys(filter).every((key) => {
        return filter[key] ? item[key]?.includes(filter[key]) : true;
      });
    });
    setDataTable(filteredData);
  };

  const handleCleanFilter = () => {
    setFilter({});
    setDataTable(DataMembersList);
  };

  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setCheckedCount(selectedRowKeys.length);
    },
  };

  const columns = useMemo(
    () => [
      {
        title: "",
        dataIndex: "select",
        render: () => <Checkbox />,
        width: "40px",
      },
      {
        title: t("ID"),
        dataIndex: "id",
        align: "center",
      },
      {
        title: t("Full Name"),
        dataIndex: "fullName",
        align: "center",
      },
      {
        title: t("Role"),
        dataIndex: "role",
        align: "center",
      },
      {
        title: t("Project"),
        dataIndex: "project",
        align: "center",
      },
      {
        title: t("Actions"),
        dataIndex: "actions",
        render: (_, record) => (
          <Button onClick={() => console.log(record)}>{t("View")}</Button>
        ),
        align: "center",
      },
    ],
    [t]
  );

  return (
    <div className="members-list">
      <Navigation
        titleName={t("Members List")}
        groupButton={[
          {
            color: "#6537B1",
            name: t("Send Email"),
            icon: <MailOutlined />,
            onClick: () => setEmailPopupVisible(true),
          },
          {
            color: "#41B137",
            name: t("Export Excel"),
            icon: <ExportOutlined />,
          },
        ]}
        checkedCount={checkedCount}
      />

      <section className="filter-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Select
              options={optionsRole}
              placeholder={t("Select Role")}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, role: value }))
              }
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Select
              options={optionsFullName}
              placeholder={t("Enter Full Name")}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, fullName: value }))
              }
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Button onClick={handleCleanFilter}>{t("Clean Filter")}</Button>
            <Button type="primary" onClick={handleSearch}>
              {t("Search")}
            </Button>
          </Col>
        </Row>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataTable}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </section>

      <SendMailButton
        openPopup={isEmailPopupVisible}
        onClose={() => setEmailPopupVisible(false)}
      />

      <Toaster />
    </div>
  );
};

export default MembersList;
