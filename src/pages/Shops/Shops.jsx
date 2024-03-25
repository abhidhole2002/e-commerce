import React from "react";
import ShopCard from "./ShopCard";

const Shops = () => {
  return (
    <div className="flex gap-10 w-5/6 justify-around bg-red-400 mx-auto ">
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
};

export default Shops;
