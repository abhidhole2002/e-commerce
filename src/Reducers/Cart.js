import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../config";

export const cartdata = createAsyncThunk(
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
  cart: [],
  isLoading: false,
  error: null,
};

const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(cartdata.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(cartdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
      state.error = null;
    });

    builder.addCase(cartdata.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addToCart, removeFromCart } = Cart.actions;
export default Cart.reducer;
