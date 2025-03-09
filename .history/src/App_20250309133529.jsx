import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@pages/Login/Header';
import ForgotPassword from '@pages/Login/ForgotPassword';
import MainLayout from './MainLayout/MainLayout';
import Dashboard from '@pages/Admin/Dashboard/Dashboard';
import LoginPage from '@pages/Login/LoginPage';
import SignUpPage from './pages/Login/Signup';
import MembersList from '@pages/Admin/MembersList/MembersList';
// import Banner from '@components/Banner/Banner';
import Hero from '@components/Hero/Hero';
import Services from '@pages/Home/Services/Services';
import OrderHistory from '@components/Order/OrderHistory';
import ProductDetails from '@pages/Home/ProductDetails/ProductDetails';
import Layout from '@components/Layout/Layout';
import Cart from '@pages/Cart/Cart';
import Shop from '@pages/Shop/Shop';
import HeaderBottom from '@pages/Home/Header/HeaderBottom';
import AboutUs from '@pages/Home/AboutUs/AboutUs';

// import WarehouseManager from "@pages/Manager/WarehouseManager";
import WarehouseDashboard from './pages/Manager/WarehouseDashboard';
import WarehouseManagerLayout from './pages/Manager/WarehouseManagerLayout copy';

import WarehouseImport from './components/Warehouse/WarehouseImport';
import WarehouseExport from './components/Warehouse/WarehouseExport';
import Profile from './pages/Home/Profile/Profile';
import Order from './components/Order/Order';
import Category from '@pages/Home/Category/Category';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactPage from '@pages/Home/Contact/Contact';
import ProductManager from '@pages/Manager/BusinessManager/ProductManager';

import CategoryManager from '@pages/Manager/BusinessManager/CategoryManager';
import TaxManager from '@pages/Manager/BusinessManager/TaxManager';
import BusinessManagerLayout from '@pages/Manager/BusinessManager/BusinessManagerLayout';

function App() {
    React.useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100
        });
    });
    return (
        <Router>
            <Routes>
                <Route
                    path='/signin'
                    element={
                        <>
                            <Header />
                            <LoginPage />
                        </>
                    }
                />
                <Route
                    path='/signup'
                    element={
                        <>
                            <Header />
                            <SignUpPage />
                        </>
                    }
                />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/admin' element={<MainLayout />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='members' element={<MembersList />} />
                </Route>
                <Route
                    path='/'
                    element={
                        <>
                            <Layout>
                                <Hero />
                                <Category />
                                <Services />
                                {/* <Banner /> */}
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/order-history'
                    element={
                        <>
                            <Layout>
                                <OrderHistory />
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/product'
                    element={
                        <>
                            <Layout>
                                <ProductDetails />
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/cart'
                    element={
                        <>
                            <Layout>
                                <Cart />
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/order'
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
                    path='/shop'
                    element={
                        <>
                            <Layout>
                                <Shop />
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/aboutus'
                    element={
                        <>
                            <Layout>
                                <AboutUs />
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <>
                            <Profile />
                        </>
                    }
                />
                <Route
                    path='/contact'
                    element={
                        <>
                            <Layout>
                                <ContactPage />
                            </Layout>
                        </>
                    }
                />
                <Route
                    path='/warehouse-manager'
                    element={<WarehouseManagerLayout />}
                >
                    <Route path='dashboard' element={<WarehouseDashboard />} />
                    <Route path='export' element={<WarehouseExport />} />
                    <Route path='import' element={<WarehouseImport />} />
                </Route>
                <Route
                    path='/business-manager'
                    element={<BusinessManagerLayout />}
                >
                    <Route path='dashboard' element={<h1>Trang chủ</h1>} />
                    <Route
                        path='product-manager'
                        element={<ProductManager />}
                    />
                    <Route path='tax-manager' element={<TaxManager />} />
                    <Route
                        path='category-manager'
                        element={<CategoryManager />}
                    />
                    <Route
                        path='debt-history'
                        element={<h1>Lịch sử công nợ</h1>}
                    />
                    <Route
                        path='debt-report'
                        element={<h1>Báo cáo công nợ</h1>}
                    />
                    <Route
                        path='order-approval'
                        element={<h1>Xét duyệt đơn hàng</h1>}
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
