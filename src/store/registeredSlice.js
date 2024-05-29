import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, getAllUsers } from "../api/api";

export const fetchUsers = createAsyncThunk(
   'users/fetchUsers',
   getAllUsers
);

export const addNewUser = createAsyncThunk(
   'users/addNewUser',
   addUser,
)

const setError = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
}


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
    builder.addCase(fetchUsers.rejected, setError);
    builder.addCase(addNewUser.rejected, setError);
  },
});

export default registeredSlice.reducer;
