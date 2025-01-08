import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/LoginPage";

import ForgotPassword from "./components/Login/ForgotPassword";
import Header from "./components/Login/Header";
import MainLayout from "./components/Admin/MainLayout/MainLayout";
import Dashboard from "./components/Admin/pages/Dashboard/Dashboard";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <Header />
    //             <Login />
    //           </>
    //         }
    //       />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/forgot-password" element={<ForgotPassword />} />
    //     </Routes>
    //     <Routes path="/admin" element={<MainLayout />}>
    //       <Route path="dashboard" element={<Dashboard />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
