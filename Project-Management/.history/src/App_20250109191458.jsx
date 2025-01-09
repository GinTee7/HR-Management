import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Login/Header";
import ForgotPassword from "./pages/Login/ForgotPassword";
import MainLayout from "./MainLayout/MainLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import LoginPage from "./pages/Login/LoginPage";
import MembersList from "./pages/Admin/MembersList/MembersList";

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
