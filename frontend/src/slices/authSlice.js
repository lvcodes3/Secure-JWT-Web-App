// Dependencies //
import { createSlice } from "@reduxjs/toolkit";

// defining the initial state for the auth slice
const initialState = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null,
};

// creating the auth slice using 'createSlice' fxn
const authSlice = createSlice({
  // specifying the name for the slice
  name: "auth",

  // setting the initial state for the slice
  initialState,

  // defining the reducers for the slice
  reducers: {
    // reducer for setting the user credentials
    setCredentials: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    // reducer for clearing the user credentials
    clearCredentials: (state, action) => {
      state.userData = null;
      localStorage.removeItem("userData");
    },
  },
});

// extracting the action creators from the auth slice
export const { setCredentials, clearCredentials } = authSlice.actions;

// exporting the reducer for the auth slice
export default authSlice.reducer;
