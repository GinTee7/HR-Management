import React from "react";
import Navbar from "@pages/Home/Navbar/Navbar";
import Footer from "@pages/Home/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
