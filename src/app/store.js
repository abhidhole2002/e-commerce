import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Reducers/ProductsReducer";
import authReducer from "../Reducers/authSlice";
import cartReducer from "../Reducers/cartReducer.js";
import signUpReducer from "../Reducers/SignUpSlice.js";
import addToCartReducer from "../Reducers/addToCart.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductsReducer,
    auth: authReducer,
    registered: signUpReducer,
    addtocart: addToCartReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
