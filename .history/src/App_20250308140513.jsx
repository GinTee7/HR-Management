import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from './redux/ProtectedRoute'; // ✅ Import ProtectedRoute
import Header from '@pages/Login/Header';
import ForgotPassword from '@pages/Login/ForgotPassword';
import MainLayout from './MainLayout/MainLayout';
import Dashboard from '@pages/Admin/Dashboard/Dashboard';
import LoginPage from '@pages/Login/LoginPage';
import SignUpPage from './pages/Login/Signup';
import MembersList from '@pages/Admin/MembersList/MembersList';
import Hero from '@components/Hero/Hero';
import Services from '@pages/Home/Services/Services';
import OrderHistory from '@components/Order/OrderHistory';
import ProductDetails from '@pages/Home/ProductDetails/ProductDetails';
import Layout from '@components/Layout/Layout';
import Cart from '@pages/Cart/Cart';
import Shop from '@pages/Shop/Shop';
import HeaderBottom from '@pages/Home/Header/HeaderBottom';
import AboutUs from '@pages/Home/AboutUs/AboutUs';
import ProductManager from '@pages/Manager/ProductManager';
import WarehouseDashboard from './pages/Manager/WarehouseDashboard';
import WarehouseManagerLayout from './pages/Manager/WarehouseManagerLayout copy';
import BusinessManagerLayout from './pages/Manager/BusinessManagerLayout';
import WarehouseImport from './components/Warehouse/WarehouseImport';
import WarehouseExport from './components/Warehouse/WarehouseExport';
import Profile from './pages/Home/Profile/Profile';
import Order from './components/Order/Order';
import ContactPage from './pages/Home/Contact/Contact';

function App() {
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

                {/* ✅ Bảo vệ Route ADMIN */}
                <Route
                    path='/admin'
                    element={
                        <ProtectedRoute allowedRoles={['ADMIN']}>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='members' element={<MembersList />} />
                </Route>

                {/* ✅ Bảo vệ Route WAREHOUSE MANAGER */}
                <Route
                    path='/warehouse-manager'
                    element={
                        <ProtectedRoute allowedRoles={['WAREHOUSE MANAGER']}>
                            <WarehouseManagerLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path='dashboard' element={<WarehouseDashboard />} />
                    <Route path='export' element={<WarehouseExport />} />
                    <Route path='import' element={<WarehouseImport />} />
                </Route>

                {/* ✅ Bảo vệ Route BUSINESS MANAGER */}
                <Route
                    path='/business-manager'
                    element={
                        <ProtectedRoute allowedRoles={['SALES MANAGER']}>
                            <BusinessManagerLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path='dashboard' element={<h1>Trang chủ</h1>} />
                    <Route
                        path='product-manager'
                        element={<ProductManager />}
                    />
                </Route>

                {/* ✅ Các Route Công Khai */}
                <Route
                    path='/'
                    element={
                        <Layout>
                            <Hero />
                            <Services />
                        </Layout>
                    }
                />
                <Route
                    path='/order-history'
                    element={
                        <Layout>
                            <OrderHistory />
                        </Layout>
                    }
                />
                <Route
                    path='/product'
                    element={
                        <Layout>
                            <ProductDetails />
                        </Layout>
                    }
                />
                <Route
                    path='/cart'
                    element={
                        <Layout>
                            <Cart />
                        </Layout>
                    }
                />
                <Route
                    path='/order'
                    element={
                        <Layout>
                            <HeaderBottom />
                            <Order />
                        </Layout>
                    }
                />
                <Route
                    path='/shop'
                    element={
                        <Layout>
                            <Shop />
                        </Layout>
                    }
                />
                <Route
                    path='/aboutus'
                    element={
                        <Layout>
                            <AboutUs />
                        </Layout>
                    }
                />
                <Route path='/profile' element={<Profile />} />
                <Route
                    path='/contact'
                    element={
                        <Layout>
                            <ContactPage />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
