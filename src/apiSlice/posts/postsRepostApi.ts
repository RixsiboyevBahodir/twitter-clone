import { apiSlice } from "../apiSlice";

const postsRepostApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsRepost: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `/posts/${id}/repost`,
        method: "POST",
      }),
      invalidatesTags: ["post", "user"],
    }),
  }),
});

export const { usePostsRepostMutation } = postsRepostApi;
