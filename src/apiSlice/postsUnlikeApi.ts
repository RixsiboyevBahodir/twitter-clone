import { apiSlice } from "./apiSlice";

const postsUnlikeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsUnlike: builder.mutation({
      query: (id) => ({
        url: `posts/${id}/like`,
        method: "DELETE",
      }),
      invalidatesTags: ["post", "user"],
    }),
  }),
});

export const { usePostsUnlikeMutation } = postsUnlikeApi;
