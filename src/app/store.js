import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Reducers/ProductsReducer";

const store = configureStore({
  reducer: {
    product: ProductsReducer,
  },
});
export default store;
