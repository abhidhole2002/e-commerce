import React from "react";
import { Icons } from "../../assets/assets";

const Brands = () => {
  return (
    <div>
      <div className=" w-full items-center justify-center gap-10 flex flex-col lg:flex-row ">
        <h1 className="text-xl font-bold">Featured Brands:</h1>
        <div className="grid grid-cols-2 justify-items-center lg:grid-rows-1 lg:grid-cols-4">
          <img src={Icons.b1} alt="" className="w-28" />
          <img src={Icons.b2} alt="" className="w-28" />
          <img src={Icons.b3} alt="" className="w-28" />
          <img src={Icons.b4} alt="" className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
