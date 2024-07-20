import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../config";

export const fetchCart = createAsyncThunk(
  "cartdata",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${apiUrl}/api/cart/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  cartData: [],
  isLoading: false,
  error: null,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartData = action.payload;
      state.error = null;
    });

    builder.addCase(fetchCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = cartReducer.actions;
export default cartReducer.reducer;
