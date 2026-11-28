import { apiSlice } from "../apiSlice";
import type { UserProfileResponse } from "../../type/userTypes";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query<UserProfileResponse, void>({
      query: () => "/users/me",
      providesTags: ["user"],
    }),
  }),
});

export const { useGetMyProfileQuery } = profileApi;
