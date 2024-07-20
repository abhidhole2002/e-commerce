import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Reducers/ProductsReducer";
import authReducer from "../Reducers/authSlice";
import cartReducer from "../Reducers/cartReducer.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductsReducer,
    auth: authReducer,
  },
});
export default store;
