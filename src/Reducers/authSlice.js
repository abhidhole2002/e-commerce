import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    credentials
  );
  return response.data;
});

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticate: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticate = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticate = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.isAuthenticate = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
