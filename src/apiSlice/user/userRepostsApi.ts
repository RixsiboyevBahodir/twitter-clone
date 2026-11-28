import { apiSlice } from "../apiSlice";
import type { UserRepostResponse } from "../../type/userTypes";

const userRepostsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userReposts: builder.query<UserRepostResponse[], number>({
      query: (id) => ({
        url: `users/${id}/reposts`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUserRepostsQuery } = userRepostsApi;
