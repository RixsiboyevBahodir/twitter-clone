import { apiSlice } from "../apiSlice";

const postsLikeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsLike: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `/posts/${id}/like`,
        method: "POST",
      }),
      invalidatesTags: ["post", "user"],
    }),
  }),
});

export const { usePostsLikeMutation } = postsLikeApi;
