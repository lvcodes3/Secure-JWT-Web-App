// Dependencies //
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// creating the base query using 'fetchBaseQuery' fxn
const baseQuery = fetchBaseQuery({
  baseURL: "http://localhost:5000",
});

// create the API slice using 'createApi' fxn
export const apiSlice = createApi({
  // setting the base query for the API slice
  baseQuery,

  // defining the tag types for the API slice
  tagTypes: ["User"],

  // defining the endpoints for the API slice
  endpoints: (builder) => ({}),
});
