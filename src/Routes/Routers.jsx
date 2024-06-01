import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/logout" exact element={<Logout />} />
    </Routes>
  );
};

export default Routers;
