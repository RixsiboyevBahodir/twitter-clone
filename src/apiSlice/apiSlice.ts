import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import useAuthStore from "../store/authLocalStorage";

const BASE_URL = "https://twitter-clone-backend-mauve.vercel.app/api";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = useAuthStore.getState().token;
    if (token?.access_token) {
      headers.set("Authorization", `Bearer ${token.access_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const currentRefreshToken = useAuthStore.getState().token?.refresh_token;

    if (currentRefreshToken) {
      const refreshResult = await rawBaseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refresh_token: currentRefreshToken },
        },
        api,
        extraOptions,
      );

      const currentUser = useAuthStore.getState().user;
      const refreshData = refreshResult.data;
      if (
        typeof refreshData === "object" &&
        refreshData !== null &&
        "access_token" in refreshData &&
        typeof refreshData.access_token === "string" &&
        currentUser
      ) {
        const newRefreshToken =
          "refresh_token" in refreshData &&
          typeof refreshData.refresh_token === "string"
            ? refreshData.refresh_token
            : currentRefreshToken;
        useAuthStore.getState().setCredentials({
          token: {
            access_token: refreshData.access_token,
            refresh_token: newRefreshToken,
          },
          user: currentUser,
        });

        result = await rawBaseQuery(args, api, extraOptions);
      } else {
        useAuthStore.getState().logout();
        window.location.href = "/auth/login";
      }
    } else {
      useAuthStore.getState().logout();
      window.location.href = "/auth/login";
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["post", "user"],
  endpoints: () => ({}),
});