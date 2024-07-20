import React from "react";
import useFetchCart from "../../hooks/useFetchCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const id = useSelector((state) => state.auth.user.user._id);
  const { cartData, isLoading, error } = useFetchCart(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="loader mb-5"></div>
          <div className="text-lg font-semibold">Loading your cart...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!cartData || !cartData.products) {
    return <div className="text-center mt-5">No products in cart.</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 justify-items-center">
        {cartData.products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-44"
          >
            <img
              src={item.productId.imageUrl}
              alt={item.productId.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{item.productId.name}</h2>
              <p className="text-gray-700 mb-4">{item.productId.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  ${item.productId.price}
                </span>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
