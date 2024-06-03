import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Reducers/ProductsReducer";
import authReducer from "../Reducers/authSlice";
const store = configureStore({
  reducer: {
    product: ProductsReducer,
    auth: authReducer,
  },
});
export default store;
