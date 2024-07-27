import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Reducers/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart.cartData);
  const isLoading = useSelector((state) => state.cart.isLoading);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

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
    let errorMessage = "An error occurred. Please try again later.";
    if (error === "Resource not found.") {
      errorMessage = "No cart found for this user.";
    }
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-3xl font-bold text-red-500 border-2 border-red-500 px-20 py-5 mx-5">
          {errorMessage}
        </div>
      </div>
    );
  }
  if (
    !data ||
    data.message === "no cart" ||
    (data.products && data.products.length === 0)
  ) {
    return (
      <div className="text-center mt-40 text-5xl">No items in your cart.</div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Your Cart</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {data.products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden w-44 "
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">₹{item.price}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
