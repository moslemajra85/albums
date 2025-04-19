
// this file will be the central export point for everything related to redux.
 
// import the configureStore function from @reduxjs/toolkit
// configureStore is a function that takes in an object with a reducer property
// and returns a Redux store.

// import the usersReducer from the usersSlice.
// usersReducer is a function that takes in a state and an action and returns a new state.

// create the store and pass in an object with a reducer property.
// the reducer property is an object with a key of 'users' and a value of usersReducer.
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});



