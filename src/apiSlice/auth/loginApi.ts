import { apiSlice } from "../apiSlice";
import type { LoginCredentials, LoginResponse } from "../../type/userTypes";

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
