import { apiSlice } from "../apiSlice";
import type { UpdateUserInfoRequest } from "../../type/userTypes";

const userInfoChangeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation<unknown, UpdateUserInfoRequest>({
      query: (updataInfo) => ({
        url: "users/me",
        method: "PATCH",
        body: updataInfo,
      }),
      invalidatesTags: ["user", "post"],
    }),
  }),
});

export const { useUpdateUserInfoMutation } = userInfoChangeApi;
