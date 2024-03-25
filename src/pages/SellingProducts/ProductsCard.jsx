import React from "react";
import { Icons } from "../../assets/assets";

const ProductsCard = ({ icon: Icon, name, price }) => {
  return (
    <div className="w-60 bg-gray-100 text-center shadow-xl hover:shadow-gray-400">
      <div>
        <img src={Icon} alt="" />
      </div>
      <div>
        <h1 className="py-2">Groceries</h1>
        <h1 className="text-lg font-semibold">{name}</h1>
        <h1 className="py-3">{price}</h1>
      </div>
    </div>
  );
};

export default ProductsCard;
