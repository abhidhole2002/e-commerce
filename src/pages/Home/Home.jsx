import React, { useContext } from "react";
import { Icons } from "../../assets/assets";
import Brands from "../Brands/Brands";
import ServieCards from "../Cards/ServiceCards";
import CustomerReview from "../Review/CustomerReview";
import Products from "../SellingProducts/Products";
import { AppContext } from "../../AppContext/AppContext";

const Home = () => {
  const { showLogin, setShowLogin, isLogin, logout, setLogout } =
    useContext(AppContext);
  return (
    <>
      <div className=" bg-gray-100 flex flex-col lg:flex-row items-center justify-center w-full py-10 gap-8 p-10 h-screen ">
        <div className="mt-36">
          <img src={Icons.mainimg} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold py-4">Best Quality Products</h1>
          <h1 className="text-4xl font-bold">Join The Organic Movement!</h1>
          <p className="w-60 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="flex items-center gap-2 mt-4 text-sm bg-red-600 py-2 px-4 font-semibold text-white rounded-sm cursor-pointer">
            <Icons.FaCartShopping />
            SHOP NOW
          </button>
        </div>
      </div>
      <ServieCards />
      <Products />
      <CustomerReview />
      <Brands />
    </>
  );
};

export default Home;
