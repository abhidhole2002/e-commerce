import React from "react";
import Navbar from "../components/Header/Navbar";
import Routers from "../Routes/Routers";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className=" flex-1  min-h-screen">
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
