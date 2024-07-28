import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../config";
import { useNavigate } from "react-router-dom";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId, { getState, dispatch, rejectWithValue }) => {
    try {
      console.log("called");
      const state = getState();
      const userId = state.auth.user.user._id;
      if (!userId) {
        dispatch(naviateToLogin());
        return rejectWithValue("user not authenticated");
      }
      const res = await axios.post(`${apiUrl}/api/cart`, {
        userId,
        productId,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (productId, { getState, dispatch, rejectWithValue }) => {
    try {
      console.log("called");
      const state = getState();
      const userId = state.auth.user.user._id;

      if (!userId) {
        dispatch(naviateToLogin());
        return rejectWithValue("user not authenticated");
      }
      const res = await axios.delete(`${apiUrl}/api/cart/remove`, {
        data: { userId, productId },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const naviateToLogin = () => (dispatch) => {
  const navigate = useNavigate();
  navigate("/login");
};

const initialState = {
  data: null,
  isLoadingp: false,
  errorp: null,
};

const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetcartFunc: (state, action) => {
      state.data = null;
      state.isLoadingp = false;
      state.errorp = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoadingp = true;
      state.errorp = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoadingp = false;
      state.data = action.payload;
      state.errorp = null;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoadingp = false;
      state.errorp = action.payload || "Something went wrong";
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.isLoadingp = true;
      state.errorp = null;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.isLoadingp = false;
      state.data = action.payload;
      state.errorp = null;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.isLoadingp = false;
      state.errorp = action.payload || "Something went wrong";
    });
  },
});

export const { resetcartFunc } = addToCartSlice.actions;
export default addToCartSlice.reducer;
