import { apiSlice } from "../apiSlice";

export interface PostLikesResponse {
  post_id: number;
  likes_count: number;
  usernames: string[];
}

const postsLikesGetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsLikesGet: builder.query<PostLikesResponse, number>({
      query: (id) => ({
        url: `posts/${id}/likes`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePostsLikesGetQuery } = postsLikesGetApi;
