import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../config";

export const signUp = createAsyncThunk(
  "signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/api/user`, credentials);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  signup: false,
  error: null,
};

const SignUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetSignup: (state) => {
      state.data = null;
      state.signup = false;

      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.signup = true;
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Failed !";
    });
  },
});

export const { resetSignup, resetError } = SignUpSlice.actions;
export default SignUpSlice.reducer;
