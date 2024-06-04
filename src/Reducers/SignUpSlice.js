import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SignUp = createAsyncThunk(
  "signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const SignUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(SignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(SignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Failed !";
    });
  },
});
export default SignUpSlice.reducer;
