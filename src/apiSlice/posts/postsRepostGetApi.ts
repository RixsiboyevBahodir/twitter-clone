import { apiSlice } from "../apiSlice";

const postsRepostGetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsRepostGet: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `posts/${id}/likes`,
        method: "GET",
      }),
    }),
  }),
});

export const {usePostsRepostGetMutation} = postsRepostGetApi;
