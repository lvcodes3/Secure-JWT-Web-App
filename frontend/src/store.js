// Dependencies //
import { configureStore } from "@reduxjs/toolkit";
// Slices //
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";

// Configuration for React Redux Toolkit //

// create the Redux store using 'configureStore' fxn
const store = configureStore({
  // defining the reducers for the store
  reducer: {
    // adding the 'authReducer' to the store
    authReducer,
    // adding the 'apiSlice.reducerPath' slice to the store with a custom key
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  // configuring the middleware for the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  // enabling Redux Devtools extension
  devTools: true,
});

export default store;
