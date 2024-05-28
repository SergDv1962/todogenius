import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../api/api";

export const fetchUsers = createAsyncThunk(
   'users/fetchUsers',
   getAllUsers
);


const registeredSlice = createSlice({
   name: 'users',
   initialState: {
      users: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default registeredSlice.reducer;
