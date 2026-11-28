import { apiSlice } from "../apiSlice";

const userFollowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userFollow: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `/users/${id}/follow`,
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {useUserFollowMutation} = userFollowApi
