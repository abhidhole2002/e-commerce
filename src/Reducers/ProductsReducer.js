import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../config";

export const fetchData = createAsyncThunk(
  "productData",
  async (_, { getState }) => {
    const state = getState();

    if (state.product.data.length > 0) {
      return state.product.data;
    }
    const res = await axios.get(`${apiUrl}/api/products`);
    return res.data;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const ProductsReducer = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.data = action.payload;
    },
  },
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
