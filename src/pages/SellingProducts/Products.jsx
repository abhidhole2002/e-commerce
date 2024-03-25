import React, { useState } from "react";
import { Plist } from "./Productlist";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [data, setData] = useState(Plist);

  return (
    <div className="w-full mt-10">
      <div className=" text-center py-8">
        <h1 className="text-2xl font-bold">Best Selling Products</h1>
      </div>

      <div className="flex flex-row py-5 justify-center gap-5">
        {data.map((item, index) => (
          <ProductsCard
            key={index}
            icon={item.imgs}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
