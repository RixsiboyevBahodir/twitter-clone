import { apiSlice } from "./apiSlice";

interface RegisterRequest {
  phone: string;
  username: string;
  password: string;
}

interface RegisterResponse {
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

export const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
