import React, { useState, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Tag, Dropdown, Menu } from "antd";
import {
  MailOutlined,
  DownOutlined,
  ExportOutlined,
  EditOutlined,
  DeleteOutlined,
  FolderAddOutlined,
  EyeOutlined,
  FilterOutlined,
  SearchOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  Table,
  Select,
  Button,
  Input,
  Col,
  Row,
  Modal,
  Form,
  Checkbox,
} from "antd";
// import DataMembersList from "../../data/MembersList.json"; // Updated to MembersList.json
import Navigation from "../../Navigation/Navigation.jsx";
// import SendMailButton from "../../components/SendMailButton/SendMailButton";
// import ReportProcessModal from "./ReportProcessPopup";
// import ViewButton from "./ViewButton";
import "./MembersList.css";
import useViewport from "../../hooks/useViewport.jsx";
import { useTranslation } from "react-i18next";
// import EditPopup from "../../components/EditPopup/EditPopup.jsx";
// import DeletePopup from "../../components/DeletePopup/DeletePopup.jsx";
// import ExportExcel from "../../components/ExportExcelPopup/ExportExcelPopup.jsx";
// import AddNew

const generateOptions = (key) => {
  return useMemo(() => {
    return DataMembersList.reduce((options, item) => {
      if (!options.find((option) => option.value === item[key])) {
        options.push({ value: item[key], label: item[key] });
      }
      return options;
    }, []);
  }, []);
};

const MembersList = () => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [isEmailPopupVisible, setEmailPopupVisible] = useState(false);
  const [isCommentsModalVisible, setIsCommentsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [updatedData, setUpdatedData] = useState(DataMembersList);
  const [dataTable, setDataTable] = useState(DataMembersList);
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;

  const { t } = useTranslation();

  const handleCheckboxChange = (e) => {
    setCheckedCount((prev) => (e.target.checked ? prev + 1 : prev - 1));
  };

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

  const [filter, setFilter] = useState({});
  const optionsRole = generateOptions("role");
  const optionsMentor = generateOptions("mentor");
  const optionsFullName = generateOptions("fullName");
  const optionsAddress = generateOptions("address");
  const optionsPosition = generateOptions("position");
  const optionsProject = generateOptions("project");
  const optionsID = generateOptions("id");
  const optionsPhoneNumber = generateOptions("phoneNumber");

  const columns = useMemo(
    () => [
      {
        title: "",
        dataIndex: "select",
        render: () => <Checkbox onChange={handleCheckboxChange} />,
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
        <div className="filter">
          <Select
            options={optionsID}
            placeholder={t("Enter ID")}
            onChange={(value) => setFilter((prev) => ({ ...prev, id: value }))}
          />
          <Select
            options={optionsFullName}
            placeholder={t("Enter Full Name")}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, fullName: value }))
            }
          />
          <Button onClick={handleCleanFilter}>{t("Clean Filter")}</Button>
          <Button type="primary" onClick={handleSearch}>
            {t("Search")}
          </Button>
        </div>

        <Table
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
