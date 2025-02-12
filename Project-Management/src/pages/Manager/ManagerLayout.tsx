import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ClipboardList, FileText, Package, Truck, CheckCircle, Warehouse } from "lucide-react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Hero from "@components/Hero/Hero";

const ManagerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarItems = [
    { path: "debt-history", label: "Lịch sử công nợ", icon: ClipboardList },
    { path: "debt-report", label: "Báo cáo công nợ", icon: FileText },
    { path: "product-manager", label: "Quản lý sản phẩm", icon: Package },
    { path: "material-request", label: "Đề nghị vật tư", icon: Truck },
    { path: "order-approval", label: "Xét duyệt đơn hàng", icon: CheckCircle },
    { path: "warehouse-manager", label: "Quản lý kho hàng", icon: Warehouse },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-50 flex items-center justify-between p-4 bg-white shadow-md">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-white bg-blue-500 rounded-full shadow-md"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Navbar />
      </div>

      <div className="relative flex flex-1">
        <div
          className={`hidden md:flex flex-col w-64  rounded-2xl shadow-lg p-4 transition-transform duration-300 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <nav className="flex flex-col flex-1 gap-6 p-4 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 rounded-2xl">
            {sidebarItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={`/manager/${path}`}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-gray-100 rounded-2xl transition-all duration-300 gap-3 
                  ${isActive ? "bg-gray-700" : "hover:bg-gray-400 hover:bg-opacity-25"}`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon size={24} />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ManagerLayout;
