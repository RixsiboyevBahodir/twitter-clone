import { apiSlice } from "../apiSlice";
import type { UserSummary } from "../../type/userTypes";

const userFollowersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userFollowers: builder.query<UserSummary[], number>({
      query: (id) => ({
        url: `/users/${id}/followers`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUserFollowersQuery } = userFollowersApi;
