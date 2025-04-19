// This is an example of how you might structure a Redux slice.
// It starts with some initial state, which is empty in this case.
// The reducers are functions that take the current state and an action
// and return a new state.
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },

  reducers: {

  }
});


export const usersReducer = usersSlice.reducer
