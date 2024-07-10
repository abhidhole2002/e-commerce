import React from "react";

const Card = ({ products }) => {
  const product = {
    imageUrl: "https://via.placeholder.com/300",
    name: "Sample Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
  };

  const data = products;
  console.log(data);
  //   console.log(products);

  const { imageUrl } = products;
  return (
    <div className="bg-white w-60 rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={product.name}
        className="h-64 w-full object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="flex justify-between gap-3 items-center mt-4">
          <span className="text-gray-900 font-bold text-lg">
            ${product.price}
          </span>
          <div className=" flex flex-col gap-3">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded text-sm w-36">
              Add to Cart
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded text-sm w-36">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
