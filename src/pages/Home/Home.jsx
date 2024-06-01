import React from "react";
import { Icons } from "../../assets/assets";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row items-center justify-center w-full py-10 gap-8 p-10 h-screen ">
      <div>
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
  );
};

export default Home;
