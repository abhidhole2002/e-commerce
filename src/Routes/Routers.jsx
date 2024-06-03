import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import ProductsData from "../pages/Products/ProductsData";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/logout" exact element={<Logout />} />
      <Route path="/products" exact element={<ProductsData />} />
    </Routes>
  );
};

export default Routers;
