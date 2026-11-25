import { apiSlice } from "./apiSlice";

const postsLikesGetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsLikesGet: builder.query({
      query: (id) => ({
        url: `posts/${id}/likes`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePostsLikesGetQuery } = postsLikesGetApi;
