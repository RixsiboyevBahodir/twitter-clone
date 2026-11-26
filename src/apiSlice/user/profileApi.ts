import { apiSlice } from "../apiSlice";
import type { PostResponse } from "../posts/postsApi";

interface IResponse {
  id: number;
  phone: string;
  username: string;
  name: string;
  bio: string | null;
  avatar: string | null;
  created_at: string;
  is_verified: boolean;
  followers_count: number;
  following_count: number;
  posts_count: number;
  posts: PostResponse | PostResponse[];
}

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query<IResponse, void>({
      query: () => "/users/me",
      providesTags: ["user"],
    }),
  }),
});

export const { useGetMyProfileQuery } = profileApi;
