import React from "react";
import { Icons } from "../../assets/assets";

const ShopCard = () => {
  return (
    <div>
      <div className="w-72 border bg-gray-100  rounded-xl p-3">
        <h1 className="text-2xl font-bold">Farm Fresh Fruits</h1>
        <h1>
          Farm Fresh Fruits Ut sollicitudin quam vel purus tempus, vel eleifend
          felis varius.
        </h1>
        <img src={Icons.sanitizer} alt="" className="w-52 h-52" />
        <button className="bg-green-700 py-2 px-5 my-4 text-white font-semibold ">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
