import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../config";

export const fetchCart = createAsyncThunk(
  "cartdata",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      if (state.cart.cartData.length > 0) {
        return state.cart.cartData;
      }
      const id = state.auth.user.user._id;
      const res = await axios.get(`${apiUrl}/api/cart/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = {
  cartData: [],
  isLoading: true,
  error: null,
};
const cartReducer = createSlice({
  name: "usercart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartData = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || true;
    });
  },
});
export const {} = cartReducer.actions;
export default cartReducer.reducer;
