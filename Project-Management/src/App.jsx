import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Login/Header";
import ForgotPassword from "./pages/Login/ForgotPassword";
import MainLayout from "./MainLayout/MainLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import LoginPage from "./pages/Login/LoginPage";
import MembersList from "./pages/Admin/MembersList/MembersList";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Services from "./pages/Home/Services/Services";
import OrderHistory from "./components/Order/OrderHistory";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import HeaderBottom from "./pages/Home/Header/HeaderBottom";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
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
                <HeaderBottom />
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
                <AboutUs/>
              </Layout>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
