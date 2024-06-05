import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Reducers/Cart";
import { TbMoodEmptyFilled } from "react-icons/tb";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center container mx-auto p-4 mt-28 lg:mt-24 text-center">
        <h1 className="lg:text-center text-center text-3xl font-extrabold">
          Your Cart is empty
        </h1>
        <div className="text-9xl mt-16">
          <TbMoodEmptyFilled />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-28 lg:mt-24 text-center">
      <h2 className="text-2xl font-bold mb-10">Your Shopping Cart</h2>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 lg:w-80 w-60 border"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="lg:w-40 lg:h-40 h-20 w-20 object-cover"
              />
              <div>
                <h3 className="font-semibold text-xs lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">${item.price}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-2 lg:text-lg font-bold lg:py-2 lg:px-4 rounded"
                >
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
