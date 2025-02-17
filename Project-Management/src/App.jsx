import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@pages/Login/Header";
import ForgotPassword from "@pages/Login/ForgotPassword";
import MainLayout from "./MainLayout/MainLayout";
import Dashboard from "@pages/Admin/Dashboard/Dashboard";
import LoginPage from "@pages/Login/LoginPage";
import MembersList from "@pages/Admin/MembersList/MembersList";
import Banner from "@components/Banner/Banner";
import Hero from "@components/Hero/Hero";
import Services from "@pages/Home/Services/Services";
import OrderHistory from "@components/Order/OrderHistory";
import ProductDetails from "@pages/Home/ProductDetails/ProductDetails";
import Layout from "@components/Layout/Layout";
import Cart from "@pages/Cart/Cart";
import Shop from "@pages/Shop/Shop";
import HeaderBottom from "@pages/Home/Header/HeaderBottom";
import AboutUs from "@pages/Home/AboutUs/AboutUs";
import ProductManager from "@pages/Manager/ProductManager";
import WarehouseManager from "@pages/Manager/WarehouseManager";
import ManagerLayout from "@pages/Manager/ManagerLayout";
import Profile from "./pages/Home/Profile/Profile";
import Order from "./components/Order/Order";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LoginPage />
            </>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="members" element={<MembersList />} />
        </Route>
        <Route
          path="/home"
          element={
            <>
              <Layout>
                
                <Hero />
                <Services />
                <Banner />
              </Layout>
            </>
          }
        />
        <Route
          path="/order-history"
          element={
            <>
              <Layout>
                <OrderHistory />
              </Layout>
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Layout>
                <HeaderBottom />
                <ProductDetails />
              </Layout>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Layout>
                <HeaderBottom />
                <Cart />
              </Layout>
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <Layout>
                <HeaderBottom />
                <Order />
              </Layout>
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Layout>
                <HeaderBottom />
                <Shop />
              </Layout>
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <Layout>
                <AboutUs />
              </Layout>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
                <Profile />
            </>
          }
        />
         <Route path="/manager" element={<ManagerLayout />}>
          <Route path="debt-history" element={<h1>Lịch sử công nợ</h1>} />
          <Route path="dashboard" element={<h1>Trang chủ</h1>} />
          <Route path="debt-report" element={<h1>Báo cáo công nợ</h1>} />
          <Route path="product-manager" element={<ProductManager />} />
          <Route path="material-request" element={<h1>Đề nghị vật tư</h1>} />
          <Route path="order-approval" element={<h1>Xét duyệt đơn hàng</h1>} />
          <Route path="warehouse-manager" element={<WarehouseManager/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
