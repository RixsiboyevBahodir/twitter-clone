import type { PostCardData, PostResponse } from "../apiSlice/posts/postsApi";

export interface UserSummary {
  id: number;
  name: string;
  username: string;
  avatar: string | null;
  is_verified: boolean;
  bio?: string | null;
}

export interface AuthenticatedUser {
  id: number;
  phone: string;
  username: string;
  created_at: string;
}

export interface AuthToken {
  access_token: string;
  refresh_token: string;
}

export interface AuthStoreState {
  token: AuthToken | null;
  user: AuthenticatedUser | null;
  setCredentials: (credentials: {
    token: AuthToken;
    user: AuthenticatedUser;
  }) => void;
  logout: () => void;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginUserResponse extends UserSummary {
  phone: string;
  bio: string | null;
  created_at: string;
}

export interface LoginResponse {
  user: LoginUserResponse;
  access_token: string;
  refresh_token: string;
}

export interface UserProfileResponse extends UserSummary {
  phone: string;
  bio: string | null;
  created_at: string;
  followers_count: number;
  following_count: number;
  posts_count: number;
  posts: PostResponse | PostResponse[];
}

export type ProfileModalUser = Pick<
  UserProfileResponse,
  "name" | "username" | "bio" | "phone" | "is_verified"
>;

export interface ProfileModalProps {
  profile?: ProfileModalUser;
}

export interface UpdateUserInfoRequest {
  name?: string;
  username?: string;
  bio?: string | null;
  phone?: string;
  is_verified?: boolean;
}

export interface UserPostResponse extends PostCardData {
  location_name: string | null;
  created_at: string;
}

export interface UserRepostResponse extends UserPostResponse {
  repost_id: number;
  reposted_by_user_id: number;
  reposted_at: string;
  quote_text: string | null;
  reposted_by_name: string | null;
  reposted_by_username: string | null;
  reposted_by_avatar: string | null;
  reposted_by_is_verified: boolean | null;
}
