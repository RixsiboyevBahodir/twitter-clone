import { apiSlice } from "../apiSlice";
import type { UserPostResponse } from "../../type/userTypes";

const userPostsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userPosts: builder.query<UserPostResponse[], number>({
      query: (id) => ({
        url: `/users/${id}/posts`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserPostsQuery } = userPostsApi;
