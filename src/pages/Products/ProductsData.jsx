// import React, { useEffect } from "react";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../Reducers/ProductsReducer";
// import { LuLoader } from "react-icons/lu";
// import { addToCart, removeFromCart } from "../../Reducers/Cart";

// const ProductsData = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.product.data);
//   const isLoading = useSelector((state) => state.product.isLoading);
//   const cart = useSelector((state) => state.cart);

//   console.log("this is cart => ", cart);
//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   return (
//     <>
//       {isLoading ? (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
//           <div className="h-60 w-60 rounded-full flex items-center justify-center animate-spin">
//             <LuLoader className="text-white text-6xl" />
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 justify-items-center mt-28">
//           {data.map((product) => {
//             return (
//               <div
//                 className="w-40 lg:w-60 flex flex-col items-center rounded overflow-hidden shadow-lg bg-white border "
//                 key={product.id}
//               >
//                 <div className="px-2">
//                   <img
//                     className="w-40 h-40 lg:w-56 lg:h-56 mt-5 object-cover border shadow-lg rounded-md px-2"
//                     src={product.image}
//                     alt={product.title}
//                   />
//                 </div>
//                 <div className="p-4">
//                   <div className="font-bold text-xs mb-2 text-gray-900">
//                     {product.title}
//                   </div>
//                   <p className="text-gray-700 text-base mb-4">
//                     ₹{product.price}
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-col gap-2 item-center">
//                     <button
//                       className="bg-gray-800 text-white px-2 py-2 rounded hover:bg-gray-900 transition-colors duration-300 flex items-center text-xs"
//                       onClick={() => {
//                         dispatch(addToCart(product));
//                       }}
//                     >
//                       <FaShoppingCart className="mr-2 " />
//                       Add to Cart
//                     </button>

//                     <button
//                       className="bg-gray-800 text-white px-2 py-2 rounded hover:bg-gray-900 transition-colors duration-300 flex items-center text-xs"
//                       onClick={() => {
//                         dispatch(removeFromCart(product.id));
//                       }}
//                     >
//                       <FaShoppingCart className="mr-2 " />
//                       Remove
//                     </button>
//                   </div>
//                   <button className="text-gray-800 hover:text-red-600 transition-colors duration-300">
//                     <FaHeart className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductsData;

import React, { useEffect } from "react";
import { LuLoader } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Reducers/ProductsReducer";

const ProductsData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="h-60 w-60 rounded-full flex items-center justify-center animate-spin">
            <LuLoader className="text-white text-6xl" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 justify-items-center mt-28">
          {data.map((product) => (
            <div className="bg-white w-60 rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-64 w-full object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-gray-900 font-bold text-xl mb-2">
                  {product.name}
                </h2>
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
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsData;
