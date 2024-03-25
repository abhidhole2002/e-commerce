import React from "react";
import { Icons } from "../../assets/assets";

const Brands = () => {
  return (
    <div>
      <div className="flex flex-row w-full items-center justify-center gap-10">
        <h1 className="text-xl font-bold">Featured Brands:</h1>
        <img src={Icons.b1} alt="" className="w-28" />
        <img src={Icons.b2} alt="" className="w-28" />
        <img src={Icons.b3} alt="" className="w-28" />
        <img src={Icons.b4} alt="" className="w-28" />
        <img src={Icons.b5} alt="" className="w-28" />
      </div>
    </div>
  );
};

export default Brands;
