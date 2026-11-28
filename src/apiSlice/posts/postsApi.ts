import { apiSlice } from "../apiSlice";

export interface PostCardData {
  id: number;
  user_id: number;
  name: string;
  text: string;
  media_url: string | null;
  media_type: string | null;
  views_count: number;
  username: string;
  avatar: string | null;
  is_verified?: boolean;
  likes_count: number;
  comments_count: number;
  reposts_count: number;
}

export interface PostResponse extends PostCardData {
  entry_type: string;
  repost_id: number | null;
  location_name: string | null;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  original_post_created_at: string;
  reposted_by_user_id: number | null;
  reposted_by_username: string | null;
  reposted_by_avatar: string | null;
  quote_text: string | null;
}

const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse[], void>({
      query: () => "posts",
      providesTags: ["post"],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
