import { apiSlice } from "../apiSlice";

export interface PostRepostsResponse {
  post_id: number;
  reposts_count: number;
  usernames: string[];
}

const postsRepostGetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postsRepostGet: builder.query<PostRepostsResponse, number>({
      query: (id) => ({
        url: `posts/${id}/reposts`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePostsRepostGetQuery } = postsRepostGetApi;
