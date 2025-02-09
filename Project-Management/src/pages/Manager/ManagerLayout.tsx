import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ClipboardList, FileText, Package, Truck, CheckCircle } from "lucide-react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const ManagerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarItems = [
    { path: "work-plan", label: "Kế hoạch công tác", icon: ClipboardList },
    { path: "debt-report", label: "Báo cáo công nợ", icon: FileText },
    { path: "product-manager", label: "Quản lý sản phẩm", icon: Package },
    { path: "material-request", label: "Đề nghị vật tư", icon: Truck },
    { path: "order-approval", label: "Xét duyệt đơn hàng", icon: CheckCircle },
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

      <Hero />

      <div className="relative flex flex-1">
        <aside
          className={`bg-white shadow-lg p-4 ${
            isSidebarOpen ? "absolute lg:relative" : "-translate-x-full lg:translate-x-0"
          } top-0 left-0 w-64 h-full z-40 transition-transform duration-300`}
        >
          <nav className="mt-10">
            <ul className="space-y-2">
              {sidebarItems.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <NavLink
                    to={`/manager/${path}`}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-2 rounded-lg transition-colors duration-300 ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-200"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Icon size={20} />
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ManagerLayout;
