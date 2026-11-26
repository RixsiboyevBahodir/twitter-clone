import { apiSlice } from "../apiSlice";

const postsUnrepostApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsUnrepost: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `/posts/${id}/repost`,
        method: "DELETE",
      }),
      invalidatesTags: ["post", "user"],
    }),
  }),
});

export const { usePostsUnrepostMutation } = postsUnrepostApi;
