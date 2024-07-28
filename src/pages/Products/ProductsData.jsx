import React, { useEffect } from "react";
import { LuLoader } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Reducers/ProductsReducer";
import { fetchCart } from "../../Reducers/cartReducer";
import { addToCart } from "../../Reducers/addToCart";

const ProductsData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCart());
  }, [dispatch]);

  const { isLoadingp, error } = useSelector((state) => state.addtocart);

  const handleAddToCart = (productId) => {
    console.log("object");
    dispatch(addToCart(productId));
  };
  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="h-60 w-60 rounded-full flex items-center justify-center animate-spin">
            <LuLoader className="text-white text-6xl" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-items-center mt-28 lg:px-10">
          {data.map((product) => (
            <div
              key={product._id}
              className="bg-white w-[170px] lg:w-60 rounded-lg shadow-lg overflow-hidden  "
            >
              <img
                loading="lazy"
                src={product.imageUrl}
                alt={product.name}
                className="h-28 w-full object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-gray-900 font-bold text-xl mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-700 text-base  truncate w-40">
                  {product.description}
                </p>

                <div className="flex justify-between gap-3 items-center mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    ${product.price}
                  </span>
                  <div className=" flex flex-col gap-3">
                    <button
                      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded text-xs w-24 
                    "
                      onClick={() => {
                        handleAddToCart(product._id);
                      }}
                    >
                      {isLoadingp ? "Adding..." : "Add to Cart"}
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded text-xs w-24">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsData;
