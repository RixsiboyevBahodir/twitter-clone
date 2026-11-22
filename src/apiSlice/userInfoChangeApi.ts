import { apiSlice } from "./apiSlice";

interface UpdateUserInfoRequest {
  name?: string;
  username?: string;
  bio?: string | null;
  phone?: string;
  is_verified?: boolean;
}

const userInfoChangeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation<unknown, UpdateUserInfoRequest>({
      query: (updataInfo) => ({
        url: "users/me",
        method: "PATCH",
        body: updataInfo,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUpdateUserInfoMutation } = userInfoChangeApi;
