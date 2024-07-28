import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import ProductsData from "../pages/Products/ProductsData";
import SignUp from "../pages/Login/SignUp";
import ProtectedRouting from "./ProtectedRouting";
import Cart from "../pages/Cart/Cart";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/products"
        element={<ProtectedRouting component={ProductsData} />}
      />
      <Route path="/products" element={<ProductsData />} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/mycart" element={<ProtectedRouting component={Cart} />} />
    </Routes>
  );
};

export default Routers;
