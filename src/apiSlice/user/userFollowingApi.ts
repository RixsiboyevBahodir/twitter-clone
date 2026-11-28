import { apiSlice } from "../apiSlice";
import type { UserSummary } from "../../type/userTypes";

const userFollowingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userFollowing: builder.query<UserSummary[], number>({
      query: (id) => ({
        url: `/users/${id}/following`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUserFollowingQuery } = userFollowingApi;
