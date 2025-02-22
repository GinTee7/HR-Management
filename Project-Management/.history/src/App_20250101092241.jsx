import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@components/Login/LoginPage";

import ForgotPassword from "@components/Login/ForgotPassword";
import Header from "@components/Login/Header";

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
