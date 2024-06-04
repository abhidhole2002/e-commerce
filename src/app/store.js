import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Reducers/ProductsReducer";
import authReducer from "../Reducers/authSlice";
import Cart from "../Reducers/Cart";
const store = configureStore({
  reducer: {
    product: ProductsReducer,
    auth: authReducer,
    cart: Cart,
  },
});
export default store;
