import { apiSlice } from "./apiSlice";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number;
    phone: string;
    username: string;
    bio: string | null;
    avatar: string | null;
    created_at: string;
  };
  access_token: string;
  refresh_token: string;
}

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
