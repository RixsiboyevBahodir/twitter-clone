import { apiSlice } from "../apiSlice";

const userUnfollowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userUnfollow: builder.mutation({
      query: (id) => ({
        url: `users/${id}/follow`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserUnfollowMutation } = userUnfollowApi;
