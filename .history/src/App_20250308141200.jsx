import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './redux/ProtectedRoute'; // ✅ Import ProtectedRoute
import Header from '@pages/Login/Header';
import LoginPage from '@pages/Login/LoginPage';
import SignUpPage from '@pages/Login/Signup';
import Dashboard from '@pages/Admin/Dashboard/Dashboard';
import WarehouseDashboard from './pages/Manager/WarehouseDashboard';
import WarehouseManagerLayout from './pages/Manager/WarehouseManagerLayout copy';
import BusinessManagerLayout from './pages/Manager/BusinessManagerLayout';
import Hero from '@components/Hero/Hero';
import Layout from '@components/Layout/Layout';

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

                {/* ✅ Bảo vệ Route ADMIN */}
                <Route
                    path='/admin/*'
                    element={<ProtectedRoute allowedRoles={['ADMIN']} />}
                >
                    <Route path='dashboard' element={<Dashboard />} />
                </Route>

                {/* ✅ Bảo vệ Route WAREHOUSE MANAGER */}
                <Route
                    path='/warehouse-manager/*'
                    element={
                        <ProtectedRoute allowedRoles={['WAREHOUSE MANAGER']} />
                    }
                >
                    <Route path='dashboard' element={<WarehouseDashboard />} />
                </Route>

                {/* ✅ Bảo vệ Route SALES MANAGER */}
                <Route
                    path='/business-manager/*'
                    element={
                        <ProtectedRoute allowedRoles={['SALES MANAGER']} />
                    }
                >
                    <Route
                        path='dashboard'
                        element={<BusinessManagerLayout />}
                    />
                </Route>

                {/* ✅ Trang công khai */}
                <Route
                    path='/'
                    element={
                        <Layout>
                            <Hero />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
