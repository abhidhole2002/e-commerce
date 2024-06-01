import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ServieCards from "./pages/Cards/ServiceCards";
import Products from "./pages/SellingProducts/Products";
import Shops from "./pages/Shops/Shops";
import CustomerReview from "./pages/Review/CustomerReview";
import Brands from "./pages/Brands/Brands";
import Footer from "./components/Footer/Footer";
import ProductsData from "./pages/Products/ProductsData";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ServieCards />
      <Products />
      <CustomerReview />
      <Brands />
      <Footer />
      <ProductsData />
    </div>
  );
};

export default App;
