import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/LoginPage";
import Header from "./components/Login/Header";
import ForgotPassword from "./components/Login/ForgotPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
