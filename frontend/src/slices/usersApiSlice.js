import { apiSlice } from "./apiSlice";

// defining the base URL for users API endpoints
const USERS_URL = "/api/users";

// creating the usersApiSlice by injecting endpoints into apiSlice
export const usersApiSlice = apiSlice.injectEndpoints({
  // defining the endpoints for the usersApiSlice
  endpoints: (builder) => ({
    // defining the login endpoint as a mutation
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// extracting the generated hooks and utilities from usersApiSlice
export const { useLoginMutation } = usersApiSlice;
