import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("productData", async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`);
  return res.data;
});

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const ProductsReducer = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const {} = ProductsReducer.actions;
export default ProductsReducer.reducer;
