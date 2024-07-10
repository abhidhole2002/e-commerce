import React from "react";
import Layout from "./Layout/Layout";
import SignUp from "./pages/Login/SignUp";
import Card from "./pages/cardP";
import ProductsData from "./pages/Products/ProductsData";

const App = () => {
  return (
    <div>
      <Layout />
      {/* <SignUp /> */}
      {/* <Card /> */}
      <ProductsData/>
    </div>
  );
};

export default App;
