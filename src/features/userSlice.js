import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  currentUser: null
};

export const userSlice = createSlice({
  name : 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const { setUsers, setCurrentUser } = userSlice.actions;

export const selectUsers = (state) => state.users.user;
export const selectCurrentUser = (state) => state.users.currentUser;


export default userSlice.reducer;