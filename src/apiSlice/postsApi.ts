import { apiSlice } from "./apiSlice";

export interface PostResponse {
  entry_type: string;
  id: number;
  repost_id: number | null;
  user_id: number;
  text: string;
  media_url: string | null;
  media_type: string | null;
  location_name: string | null;
  latitude: number | null;
  longitude: number | null;
  views_count: number;
  created_at: string;
  original_post_created_at: string;
  username: string;
  avatar: string | null;
  reposted_by_user_id: number | null;
  reposted_by_username: string | null;
  reposted_by_avatar: string | null;
  quote_text: string | null;
  likes_count: number;
  comments_count: number;
  reposts_count: number;
}

const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
